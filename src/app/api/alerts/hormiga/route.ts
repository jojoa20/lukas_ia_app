import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { ensureProfile, getLukasUser } from '@/lib/lukas-user';

/**
 * GET /api/alerts/hormiga
 * Detección inteligente de gastos hormiga con 4 dimensiones:
 * 1. Frecuencia: ≥3 gastos similares en el período
 * 2. Categorización semántica: agrupa "Café", "Tinto", "Coffee" como mismo cluster
 * 3. Monto acumulado: Total del cluster relevante
 * 4. Periodicidad: ¿Es un patrón constante?
 * 
 * Query params:
 *   days (default: 30) — período de análisis
 */

// ── Mapa semántico para agrupar gastos similares ──
const SEMANTIC_CLUSTERS: Record<string, string[]> = {
  'Café/Bebidas calientes': ['cafe', 'tinto', 'coffee', 'cappuccino', 'latte', 'moca', 'chocolate', 'aromática', 'aromatica', 'te ', 'chai'],
  'Snacks/Dulces': ['snack', 'dulce', 'chocolate', 'galleta', 'gomita', 'chicle', 'empanada', 'pan', 'arepa', 'buñuelo', 'bunuelo', 'pastel', 'postre', 'helado', 'brownie', 'dona'],
  'Bebidas frías': ['gaseosa', 'coca', 'pepsi', 'jugo', 'zumo', 'agua', 'botella', 'soda', 'limonada', 'malteada'],
  'Comida rápida/Domicilios': ['rappi', 'ifood', 'domicilio', 'delivery', 'uber eats', 'didi food', 'hamburguesa', 'pizza', 'hot dog', 'perro', 'pincho', 'comida rapida'],
  'Transporte corto': ['uber', 'didi', 'taxi', 'beat', 'indriver', 'cabify', 'moto', 'bici', 'patineta'],
  'Suscripciones/Apps': ['netflix', 'spotify', 'prime', 'disney', 'hbo', 'youtube', 'twitch', 'apple', 'icloud', 'google one', 'canva', 'chat gpt', 'suscripcion', 'mensualidad', 'app', 'premium'],
  'Licor/Fiesta': ['cerveza', 'aguardiente', 'ron', 'whiskey', 'vino', 'licor', 'trago', 'shots', 'bar', 'disco', 'cover', 'fiesta'],
  'Máquinas/Antojos': ['maquina', 'máquina', 'antojo', 'impulso', 'capricho', 'se me antojo'],
  'Cigarrillos/Vape': ['cigarrillo', 'cigarro', 'vape', 'vapeo', 'tabaco', 'marlboro', 'pielroja'],
  'Apuestas/Juegos': ['apuesta', 'chance', 'loteria', 'lotería', 'baloto', 'casino', 'bet'],
};

function classifyToCluster(text: string): string {
  const lower = (text || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  for (const [cluster, keywords] of Object.entries(SEMANTIC_CLUSTERS)) {
    for (const keyword of keywords) {
      const normalizedKeyword = keyword.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (lower.includes(normalizedKeyword)) {
        return cluster;
      }
    }
  }
  return text || 'Otros';
}

function getClusterIcon(cluster: string): string {
  const iconMap: Record<string, string> = {
    'Café/Bebidas calientes': '☕️',
    'Snacks/Dulces': '🍫',
    'Bebidas frías': '🥤',
    'Comida rápida/Domicilios': '🍔',
    'Transporte corto': '🚕',
    'Suscripciones/Apps': '📱',
    'Licor/Fiesta': '🍺',
    'Máquinas/Antojos': '🎰',
    'Cigarrillos/Vape': '🚬',
    'Apuestas/Juegos': '🎲',
  };
  return iconMap[cluster] || '💸';
}

export async function GET(req: Request) {
  const user = await getLukasUser();
  const ensuredProfile = await ensureProfile(user);
  const userId = ensuredProfile?.id || user.id;
  const adminDB = createAdminClient();

  const { searchParams } = new URL(req.url);
  const days = parseInt(searchParams.get('days') ?? '30');

  const from = new Date();
  from.setDate(from.getDate() - days);
  const fromStr = from.toISOString().split('T')[0];

  // Obtener TODOS los gastos del período (no solo los marcados como hormiga)
  const { data: transactions, error } = await adminDB
    .from('transactions')
    .select('id, monto, categoria, subcategoria, comercio, descripcion, fecha_transaccion, es_gasto_hormiga')
    .eq('user_id', userId)
    .eq('tipo', 'gasto')
    .gte('fecha_transaccion', fromStr)
    .order('fecha_transaccion', { ascending: false });

  if (error) {
    return NextResponse.json(
      { error: { code: 'DB_ERROR', message: error.message } },
      { status: 500 }
    );
  }

  const txList = transactions ?? [];

  // ── Análisis inteligente por clusters semánticos ──
  const clusterMap = new Map<string, {
    cantidad: number;
    total: number;
    montos: number[];
    fechas: string[];
    descripciones: string[];
    txIds: string[];
  }>();

  for (const tx of txList) {
    // Usar descripción o subcategoría para clasificar
    const rawLabel = tx.descripcion || tx.subcategoria || tx.categoria || '';
    const cleanLabel = rawLabel.replace(/^(Fijos|Salidas|Ahorro|Susc\.|Hormiga):\s*/, '');
    const cluster = classifyToCluster(cleanLabel);

    if (!clusterMap.has(cluster)) {
      clusterMap.set(cluster, {
        cantidad: 0,
        total: 0,
        montos: [],
        fechas: [],
        descripciones: [],
        txIds: [],
      });
    }

    const entry = clusterMap.get(cluster)!;
    entry.cantidad += 1;
    entry.total += tx.monto;
    entry.montos.push(tx.monto);
    entry.fechas.push(tx.fecha_transaccion);
    entry.descripciones.push(cleanLabel);
    entry.txIds.push(tx.id);
  }

  // ── Detectar patrones hormiga: ≥3 en el período Y acumulado relevante ──
  const FREQ_THRESHOLD = 3;      // mínimo 3 gastos para ser patrón
  const ACCUMULATED_MIN = 15000;  // mínimo $15k acumulado para ser relevante
  const MAX_SINGLE_AMOUNT = 80000; // hasta $80k por gasto individual cuenta

  const hormigaClusters: {
    cluster: string;
    icon: string;
    cantidad: number;
    total: number;
    promedio: number;
    frecuencia_dias: number; // cada cuántos días ocurre
    ultima_fecha: string;
    severity: 'alta' | 'media' | 'baja';
    descripciones_sample: string[];
  }[] = [];

  let totalHormiga = 0;

  for (const [cluster, data] of clusterMap.entries()) {
    // Filtrar: solo gastos ≤$80k individuales
    const eligibleMontos = data.montos.filter(m => m <= MAX_SINGLE_AMOUNT);
    const eligibleTotal = eligibleMontos.reduce((a, b) => a + b, 0);

    if (eligibleMontos.length >= FREQ_THRESHOLD && eligibleTotal >= ACCUMULATED_MIN) {
      // Calcular frecuencia en días
      const sortedFechas = [...data.fechas].sort();
      let freqDays = days;
      if (sortedFechas.length >= 2) {
        const first = new Date(sortedFechas[0]).getTime();
        const last = new Date(sortedFechas[sortedFechas.length - 1]).getTime();
        const spanDays = Math.max(1, (last - first) / (1000 * 60 * 60 * 24));
        freqDays = Math.round(spanDays / (sortedFechas.length - 1));
      }

      const promedio = Math.round(eligibleTotal / eligibleMontos.length);
      
      // Determinar severidad
      let severity: 'alta' | 'media' | 'baja' = 'baja';
      if (eligibleTotal > 100000 || (freqDays <= 2 && eligibleMontos.length >= 5)) {
        severity = 'alta';
      } else if (eligibleTotal > 50000 || eligibleMontos.length >= 5) {
        severity = 'media';
      }

      totalHormiga += eligibleTotal;

      hormigaClusters.push({
        cluster,
        icon: getClusterIcon(cluster),
        cantidad: eligibleMontos.length,
        total: eligibleTotal,
        promedio,
        frecuencia_dias: freqDays,
        ultima_fecha: sortedFechas[sortedFechas.length - 1],
        severity,
        descripciones_sample: [...new Set(data.descripciones)].slice(0, 3),
      });
    }
  }

  // Ordenar por severidad y total
  const severityOrder = { alta: 0, media: 1, baja: 2 };
  hormigaClusters.sort((a, b) => {
    const sev = severityOrder[a.severity] - severityOrder[b.severity];
    if (sev !== 0) return sev;
    return b.total - a.total;
  });

  // Impacto estimado en FinScore
  const impacto_finscore = -Math.round(totalHormiga / 5000);

  // Generar mensaje contextual
  let mensaje_ia = '';
  if (totalHormiga > 150000) {
    const topCluster = hormigaClusters[0]?.cluster || 'gastos pequeños';
    mensaje_ia = `¡Uy parcero! En ${days} días llevas $${Math.round(totalHormiga / 1000)}k en gastos hormiga. El peor es "${topCluster}" con $${Math.round(hormigaClusters[0]?.total / 1000)}k. Si recortas la mitad, ahorras $${Math.round(totalHormiga / 2000)}k al mes.`;
  } else if (totalHormiga > 50000) {
    mensaje_ia = `Cuidado pana, llevas $${Math.round(totalHormiga / 1000)}k en gastos hormiga este período. Son ${hormigaClusters.length} patrones detectados. ¡Revisa cuáles puedes recortar!`;
  } else if (totalHormiga > 0) {
    mensaje_ia = `Tienes algunos gastos hormiga menores ($${Math.round(totalHormiga / 1000)}k). Nada grave, pero es bueno estar pendiente. 🎯`;
  } else {
    mensaje_ia = `¡Vas bien parcero! No se detectan patrones de gastos hormiga significativos esta semana. 🏆`;
  }

  return NextResponse.json({
    data: {
      periodo_dias: days,
      total_hormiga: totalHormiga,
      cantidad_transacciones: txList.length,
      cantidad_clusters: hormigaClusters.length,
      impacto_finscore,
      desglose: hormigaClusters.map(c => ({
        grupo: c.cluster,
        icon: c.icon,
        cantidad: c.cantidad,
        total: c.total,
        promedio: c.promedio,
        frecuencia_dias: c.frecuencia_dias,
        ultima_fecha: c.ultima_fecha,
        severity: c.severity,
        descripciones_sample: c.descripciones_sample,
      })),
      mensaje_ia,
    },
  });
}
