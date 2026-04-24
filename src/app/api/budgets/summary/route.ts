import { NextResponse } from 'next/server';
import { createClient, getAuthenticatedUser } from '@/lib/supabase/actions';

// GET /api/budgets/summary
// Retorna resumen de presupuestos del mes: total presupuestado vs gastado por categoría.
// Alimenta: AnalyticsView (donut chart), HomeView (barra de presupuesto)
// Query params: year (default: año actual), month (default: mes actual, 1-12)
export async function GET(req: Request) {
  let user, supabase;
  try {
    ({ supabase, user } = await getAuthenticatedUser());
  } catch (authError) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const now = new Date();
  const year = parseInt(searchParams.get('year') ?? String(now.getFullYear()));
  const month = parseInt(searchParams.get('month') ?? String(now.getMonth() + 1));

  const { data, error } = await supabase
    .from('presupuestos')
    .select('categoria, limite_cop, gastado_cop, alerta_80pct_enviada, sobrepasado')
    .eq('user_id', user.id)
    .eq('anio', year)
    .eq('mes', month)
    .order('gastado_cop', { ascending: false });

  if (error) {
    return NextResponse.json(
      { error: { code: 'DB_ERROR', message: error.message } },
      { status: 500 }
    );
  }

  const categorias = (data ?? []).map((p) => ({
    ...p,
    porcentaje_usado: p.limite_cop > 0
      ? Math.round((p.gastado_cop / p.limite_cop) * 100)
      : 0,
  }));

  const total_presupuestado = categorias.reduce((sum, c) => sum + c.limite_cop, 0);
  const total_gastado = categorias.reduce((sum, c) => sum + c.gastado_cop, 0);
  const porcentaje_total = total_presupuestado > 0
    ? Math.round((total_gastado / total_presupuestado) * 100)
    : 0;

  return NextResponse.json({
    data: {
      year,
      month,
      total_presupuestado,
      total_gastado,
      porcentaje_total,
      categorias,
    },
  });
}
