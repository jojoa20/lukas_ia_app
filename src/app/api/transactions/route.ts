import { NextResponse } from 'next/server';
import { createClient, getAuthenticatedUser } from '@/lib/supabase/actions';

// GET /api/transactions
// Alimenta: HomeView (últimos movimientos), HistorialView, AnalyticsView
// Query params: from, to, preset, category, type, hormiga, limit, offset, sort
export async function GET(req: Request) {
  let user, supabase;
  try {
    ({ supabase, user } = await getAuthenticatedUser());
  } catch (authError) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const limit = parseInt(searchParams.get('limit') ?? '50');
  const offset = parseInt(searchParams.get('offset') ?? '0');
  const category = searchParams.get('category');
  const type = searchParams.get('type');
  const hormiga = searchParams.get('hormiga') === 'true';
  const from = searchParams.get('from');
  const to = searchParams.get('to');

  let query = supabase
    .from('transactions')
    .select('id, tipo, monto, categoria, subcategoria, comercio, descripcion, metodo_entrada, es_gasto_hormiga, fecha_transaccion, created_at', { count: 'exact' })
    .eq('user_id', user.id)
    .order('fecha_transaccion', { ascending: false })
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (category) query = query.eq('categoria', category);
  if (type) query = query.eq('tipo', type);
  if (hormiga) query = query.eq('es_gasto_hormiga', true);
  if (from) query = query.gte('fecha_transaccion', from);
  if (to) query = query.lte('fecha_transaccion', to);

  const { data, error, count } = await query;

  if (error) {
    return NextResponse.json(
      { error: { code: 'DB_ERROR', message: error.message } },
      { status: 500 }
    );
  }

  return NextResponse.json({
    data,
    meta: { total: count ?? 0, limit, offset },
  });
}

// POST /api/transactions
// Registra una nueva transacción. Debe recalcular FinScore en Fase 2.
// Alimenta: MobileBottomBar, flujo voz/OCR, ChatView (tool-calling)
export async function POST(req: Request) {
  let user, supabase;
  try {
    ({ supabase, user } = await getAuthenticatedUser());
  } catch (authError) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();

  // TODO Fase 2: validación con Zod + recálculo de FinScore + actualizar presupuesto
  const { tipo, monto, categoria, subcategoria, comercio, descripcion, metodo_entrada, es_gasto_hormiga, fecha_transaccion } = body;

  if (!tipo || !monto || !categoria) {
    return NextResponse.json(
      { error: { code: 'VALIDATION_ERROR', message: 'tipo, monto y categoria son requeridos' } },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from('transactions')
    .insert([{
      user_id: user.id,
      tipo,
      monto,
      categoria,
      subcategoria: subcategoria ?? null,
      comercio: comercio ?? null,
      descripcion: descripcion ?? null,
      metodo_entrada: metodo_entrada ?? 'manual',
      es_gasto_hormiga: es_gasto_hormiga ?? false,
      fecha_transaccion: fecha_transaccion ?? new Date().toISOString().split('T')[0],
    }])
    .select()
    .single();

  if (error) {
    return NextResponse.json(
      { error: { code: 'DB_ERROR', message: error.message } },
      { status: 500 }
    );
  }

  // TODO Fase 2: recalcular FinScore y retornar delta
  return NextResponse.json({ data: { transaction: data } }, { status: 201 });
}
