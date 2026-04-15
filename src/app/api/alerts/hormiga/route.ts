import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/actions';

// GET /api/alerts/hormiga
// Detecta clusters de gastos hormiga en últimos N días y retorna desglose.
// Alimenta: AlertModal (el modal de alerta de gastos pequeños recurrentes)
// Query params: days (default: 7)
export async function GET(req: Request) {
  const supabase = await createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const days = parseInt(searchParams.get('days') ?? '7');

  const from = new Date();
  from.setDate(from.getDate() - days);
  const fromStr = from.toISOString().split('T')[0];

  // Obtener todos los gastos hormiga del período
  const { data: transactions, error } = await supabase
    .from('transactions')
    .select('monto, categoria, subcategoria, comercio, descripcion, fecha_transaccion')
    .eq('user_id', user.id)
    .eq('es_gasto_hormiga', true)
    .gte('fecha_transaccion', fromStr);

  if (error) {
    return NextResponse.json(
      { error: { code: 'DB_ERROR', message: error.message } },
      { status: 500 }
    );
  }

  const txList = transactions ?? [];
  const totalHormiga = txList.reduce((sum: number, t: any) => sum + t.monto, 0);

  // Agrupar por subcategoría o descripción
  const grupoMap = new Map<string, { cantidad: number; total: number; ultima_fecha: string }>();
  for (const tx of txList) {
    const grupo = tx.subcategoria ?? tx.descripcion ?? tx.categoria ?? 'otros';
    if (!grupoMap.has(grupo)) grupoMap.set(grupo, { cantidad: 0, total: 0, ultima_fecha: '' });
    const entry = grupoMap.get(grupo)!;
    entry.cantidad += 1;
    entry.total += tx.monto;
    if (!entry.ultima_fecha || tx.fecha_transaccion > entry.ultima_fecha) {
      entry.ultima_fecha = tx.fecha_transaccion;
    }
  }

  const desglose = [...grupoMap.entries()]
    .filter(([, v]) => v.total > 10000) // solo grupos relevantes
    .sort(([, a], [, b]) => b.total - a.total)
    .slice(0, 10)
    .map(([grupo, v]) => ({
      grupo,
      cantidad: v.cantidad,
      total: v.total,
      promedio: Math.round(v.total / v.cantidad),
      ultima_fecha: v.ultima_fecha,
    }));

  // Impacto estimado en FinScore: -1 punto por cada $5.000 en hormigas
  const impacto_finscore = -Math.round(totalHormiga / 5000);

  const mensaje_ia = totalHormiga > 100000
    ? `Uy parcero, en ${days} días te has gastado $${(totalHormiga / 1000).toFixed(0)}k en hormigas. ¡Eso duele el FinScore!`
    : totalHormiga > 50000
    ? `Cuidado pana, llevas $${(totalHormiga / 1000).toFixed(0)}k en gastos pequeños este período.`
    : `Vas bien parcero, tus gastos hormiga están controlados esta semana. 🎯`;

  return NextResponse.json({
    data: {
      periodo_dias: days,
      total_hormiga: totalHormiga,
      cantidad_transacciones: txList.length,
      impacto_finscore,
      desglose,
      mensaje_ia,
    },
  });
}
