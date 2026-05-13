import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { ensureProfile, getLukasUser } from '@/lib/lukas-user';

/**
 * POST /api/profile/recalculate-score
 * Recalcula el FinScore del usuario usando un modelo multi-factor:
 * 
 * ┌──────────────────────────────────────────────────────┐
 * │ Factor                        │ Puntos               │
 * ├──────────────────────────────────────────────────────┤
 * │ Base                          │ 500                  │
 * │ Disciplina (registros)        │ +2 por tx (cap 40)   │
 * │ Presupuesto respetado         │ +15 por categoría    │
 * │ Presupuesto sobrepasado       │ -10 por categoría    │
 * │ Metas activas con progreso    │ +10 por meta         │
 * │ Meta completada               │ +30 por meta         │
 * │ Racha de uso                  │ +3/día (cap 21)      │
 * │ Gastos hormiga detectados     │ -3 por cluster       │
 * │ Reducción hormiga vs anterior │ +10                  │
 * │ Inactividad (>3d sin registros)│ -5 por cada 3 días  │
 * │ Tendencias de ahorro          │ +20 si ahorra >10%   │
 * └──────────────────────────────────────────────────────┘
 * 
 * Rangos:
 * 0-200: Crítico 🔴
 * 201-400: En riesgo 🟠
 * 401-600: Estable 🟡
 * 601-800: Saludable 🟢
 * 801-1000: Excelente ⭐
 */

interface ScoreBreakdown {
  factor: string;
  puntos: number;
  detalle: string;
}

function getScoreLevel(score: number): { level: string; emoji: string; color: string } {
  if (score >= 801) return { level: 'Excelente', emoji: '⭐', color: '#D8A93F' };
  if (score >= 601) return { level: 'Saludable', emoji: '🟢', color: '#22c55e' };
  if (score >= 401) return { level: 'Estable', emoji: '🟡', color: '#eab308' };
  if (score >= 201) return { level: 'En riesgo', emoji: '🟠', color: '#f97316' };
  return { level: 'Crítico', emoji: '🔴', color: '#ef4444' };
}

export async function POST() {
  const user = await getLukasUser();
  const ensuredProfile = await ensureProfile(user);
  const userId = ensuredProfile?.id || user.id;
  const adminDB = createAdminClient();

  const now = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(now.getDate() - 30);
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(now.getDate() - 7);

  // ── Fetch all needed data in parallel ──
  const [
    { data: profile },
    { data: recentTx },
    { data: allBudgets },
    { data: activeMetas },
    { data: completedMetas },
  ] = await Promise.all([
    adminDB.from('profiles').select('*').eq('id', userId).limit(1).maybeSingle(),
    adminDB
      .from('transactions')
      .select('*')
      .eq('user_id', userId)
      .gte('fecha_transaccion', thirtyDaysAgo.toISOString().split('T')[0])
      .order('fecha_transaccion', { ascending: false }),
    adminDB
      .from('presupuestos')
      .select('*')
      .eq('user_id', userId)
      .eq('anio', now.getFullYear())
      .eq('mes', now.getMonth() + 1),
    adminDB
      .from('metas')
      .select('*')
      .eq('user_id', userId)
      .eq('estado', 'activa'),
    adminDB
      .from('metas')
      .select('*')
      .eq('user_id', userId)
      .eq('estado', 'completada'),
  ]);

  const txList = recentTx || [];
  const budgets = allBudgets || [];
  const breakdown: ScoreBreakdown[] = [];
  let score = 500; // Base

  breakdown.push({ factor: 'Base', puntos: 500, detalle: 'Punto de partida para todos los usuarios' });

  // ── 1. Disciplina: registrar transacciones ──
  const txCount = txList.length;
  const disciplinePoints = Math.min(40, txCount * 2);
  if (disciplinePoints > 0) {
    score += disciplinePoints;
    breakdown.push({
      factor: 'Disciplina de registro',
      puntos: disciplinePoints,
      detalle: `${txCount} transacciones registradas este mes (+2 c/u, cap 40)`,
    });
  }

  // ── 2. Presupuesto ──
  let budgetBonus = 0;
  let budgetPenalty = 0;
  for (const budget of budgets) {
    if (budget.gastado_cop <= budget.limite_cop) {
      budgetBonus += 15;
    } else {
      budgetPenalty -= 10;
    }
  }
  if (budgetBonus > 0) {
    score += budgetBonus;
    breakdown.push({
      factor: 'Presupuestos respetados',
      puntos: budgetBonus,
      detalle: `${budgetBonus / 15} categorías dentro del límite (+15 c/u)`,
    });
  }
  if (budgetPenalty < 0) {
    score += budgetPenalty;
    breakdown.push({
      factor: 'Presupuestos sobrepasados',
      puntos: budgetPenalty,
      detalle: `${Math.abs(budgetPenalty) / 10} categorías excedidas (-10 c/u)`,
    });
  }

  // ── 3. Metas ──
  const activeMetasWithProgress = (activeMetas || []).filter(
    (m: any) => m.monto_actual > 0 && m.monto_actual < m.monto_objetivo
  );
  if (activeMetasWithProgress.length > 0) {
    const metaPoints = activeMetasWithProgress.length * 10;
    score += metaPoints;
    breakdown.push({
      factor: 'Metas con progreso',
      puntos: metaPoints,
      detalle: `${activeMetasWithProgress.length} metas activas con avance (+10 c/u)`,
    });
  }

  const completedCount = (completedMetas || []).length;
  if (completedCount > 0) {
    const completedPoints = Math.min(90, completedCount * 30);
    score += completedPoints;
    breakdown.push({
      factor: 'Metas completadas',
      puntos: completedPoints,
      detalle: `${completedCount} metas cumplidas (+30 c/u, cap 90)`,
    });
  }

  // ── 4. Racha de uso ──
  const rachaActual = profile?.racha_actual_dias || 0;
  const rachaPoints = Math.min(21, rachaActual * 3);
  if (rachaPoints > 0) {
    score += rachaPoints;
    breakdown.push({
      factor: 'Racha de uso',
      puntos: rachaPoints,
      detalle: `${rachaActual} días consecutivos (+3/día, cap 21)`,
    });
  }

  // ── 5. Gastos hormiga ──
  const hormigaTx = txList.filter((t: any) => t.es_gasto_hormiga);
  // Also count small frequent expenses even if not marked
  const smallExpenses = txList.filter((t: any) => t.tipo === 'gasto' && t.monto <= 30000);
  // Group by description
  const descGroups = new Map<string, number>();
  for (const tx of smallExpenses) {
    const desc = (tx.descripcion || tx.subcategoria || tx.categoria || '').toLowerCase();
    descGroups.set(desc, (descGroups.get(desc) || 0) + 1);
  }
  const hormigaClusters = Array.from(descGroups.entries()).filter(([, count]) => count >= 3);
  
  const hormigaPenalty = -(hormigaTx.length > 0 ? Math.min(30, hormigaTx.length * 3) : 0) - (hormigaClusters.length * 3);
  if (hormigaPenalty < 0) {
    score += hormigaPenalty;
    breakdown.push({
      factor: 'Gastos hormiga',
      puntos: hormigaPenalty,
      detalle: `${hormigaTx.length} marcados + ${hormigaClusters.length} patrones detectados`,
    });
  }

  // ── 6. Inactividad ──
  if (txList.length > 0) {
    const lastTxDate = new Date(txList[0].fecha_transaccion || txList[0].created_at);
    const daysSinceLastTx = Math.floor((now.getTime() - lastTxDate.getTime()) / (1000 * 60 * 60 * 24));
    if (daysSinceLastTx >= 3) {
      const inactivityPenalty = -Math.min(25, Math.floor(daysSinceLastTx / 3) * 5);
      score += inactivityPenalty;
      breakdown.push({
        factor: 'Inactividad',
        puntos: inactivityPenalty,
        detalle: `${daysSinceLastTx} días sin registros (-5 cada 3 días)`,
      });
    }
  } else {
    // No transactions at all
    score -= 15;
    breakdown.push({
      factor: 'Inactividad',
      puntos: -15,
      detalle: 'Sin transacciones registradas este mes',
    });
  }

  // ── 7. Tendencia de ahorro ──
  const totalIngresos = txList.filter((t: any) => t.tipo === 'ingreso').reduce((s: number, t: any) => s + t.monto, 0);
  const totalGastos = txList.filter((t: any) => t.tipo === 'gasto').reduce((s: number, t: any) => s + t.monto, 0);
  if (totalIngresos > 0) {
    const savingsRate = (totalIngresos - totalGastos) / totalIngresos;
    if (savingsRate > 0.2) {
      score += 30;
      breakdown.push({
        factor: 'Gran ahorrador',
        puntos: 30,
        detalle: `Ahorras ${Math.round(savingsRate * 100)}% de tus ingresos (>20%)`,
      });
    } else if (savingsRate > 0.1) {
      score += 20;
      breakdown.push({
        factor: 'Tendencia de ahorro',
        puntos: 20,
        detalle: `Ahorras ${Math.round(savingsRate * 100)}% de tus ingresos (>10%)`,
      });
    } else if (savingsRate < 0) {
      score -= 10;
      breakdown.push({
        factor: 'Gastos > Ingresos',
        puntos: -10,
        detalle: `Gastaste más de lo que ingresaste este mes`,
      });
    }
  }

  // ── Clamp score ──
  score = Math.max(0, Math.min(1000, score));
  const previousScore = profile?.finscore_actual || 500;
  const delta = score - previousScore;
  const level = getScoreLevel(score);

  // ── Update profile ──
  await adminDB
    .from('profiles')
    .update({ finscore_actual: score })
    .eq('id', userId);

  // ── Log to history ──
  await adminDB
    .from('finscore_history')
    .insert({
      user_id: userId,
      fecha: now.toISOString().split('T')[0],
      score,
      delta,
      racha_dia: rachaActual,
      total_gastos_dia: totalGastos,
      total_ingresos_dia: totalIngresos,
      gastos_hormiga_dia: hormigaTx.length,
      detalle_cambio: { breakdown },
    })
    .then(() => null, () => null);

  return NextResponse.json({
    data: {
      score,
      previous_score: previousScore,
      delta,
      level: level.level,
      emoji: level.emoji,
      color: level.color,
      breakdown,
    },
  });
}
