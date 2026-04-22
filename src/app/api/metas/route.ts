import { NextResponse } from 'next/server';
import { createClient, getAuthenticatedUser } from '@/lib/supabase/actions';

// GET /api/metas
// Alimenta: MetasView (lista de metas activas, cumplidas, abandonadas)
// Query params: estado = 'activa' | 'cumplida' | 'abandonada' | 'all'
export async function GET(req: Request) {
  let user, supabase;
  try {
    ({ supabase, user } = await getAuthenticatedUser());
  } catch (authError) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const estado = searchParams.get('estado') ?? 'activa';

  let query = supabase
    .from('metas')
    .select(`
      id,
      nombre,
      tipo,
      emoji,
      monto_objetivo,
      monto_actual,
      fecha_objetivo,
      estado,
      bonus_finscore,
      ahorro_mensual_requerido,
      probabilidad_exito,
      created_at,
      updated_at
    `)
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (estado !== 'all') {
    query = query.eq('estado', estado);
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json(
      { error: { code: 'DB_ERROR', message: error.message } },
      { status: 500 }
    );
  }

  // Calcular porcentaje_completado en el servidor
  const dataWithPercent = (data ?? []).map((meta) => ({
    ...meta,
    porcentaje_completado: meta.monto_objetivo > 0
      ? Math.min(100, (meta.monto_actual / meta.monto_objetivo) * 100)
      : 0,
  }));

  return NextResponse.json({ data: dataWithPercent });
}

// POST /api/metas
// Crea una nueva meta de ahorro.
// Alimenta: MetasView (botón "Crear nueva meta"), ChatView (tool createMeta)
export async function POST(req: Request) {
  let user, supabase;
  try {
    ({ supabase, user } = await getAuthenticatedUser());
  } catch (authError) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();

  // TODO Fase 2: validación con Zod
  const { nombre, tipo, monto_objetivo, fecha_objetivo, emoji } = body;

  if (!nombre || !monto_objetivo) {
    return NextResponse.json(
      { error: { code: 'VALIDATION_ERROR', message: 'nombre y monto_objetivo son requeridos' } },
      { status: 400 }
    );
  }

  // Calcular ahorro mensual requerido si hay fecha objetivo
  let ahorro_mensual_requerido: number | null = null;
  if (fecha_objetivo) {
    const mesesRestantes = Math.max(
      1,
      (new Date(fecha_objetivo).getTime() - Date.now()) / (1000 * 60 * 60 * 24 * 30)
    );
    ahorro_mensual_requerido = monto_objetivo / mesesRestantes;
  }

  const { data, error } = await supabase
    .from('metas')
    .insert([{
      user_id: user.id,
      nombre,
      tipo: tipo ?? 'ahorro',
      emoji: emoji ?? '🎯',
      monto_objetivo,
      monto_actual: 0,
      estado: 'activa',
      fecha_objetivo: fecha_objetivo ?? null,
      ahorro_mensual_requerido,
    }])
    .select()
    .single();

  if (error) {
    return NextResponse.json(
      { error: { code: 'DB_ERROR', message: error.message } },
      { status: 500 }
    );
  }

  return NextResponse.json({ data }, { status: 201 });
}
