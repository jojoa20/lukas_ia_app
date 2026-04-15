import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/actions';

// GET /api/profile
// Retorna el perfil completo del usuario autenticado.
// Alimenta: HomeView (nombre), FinScoreDial (finscore), GamificationBanner (racha)
export async function GET() {
  const supabase = await createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data, error } = await supabase
    .from('profiles')
    .select(`
      id,
      full_name,
      email,
      avatar_url,
      pais,
      moneda_base,
      ingreso_mensual_est,
      meta_ahorro_mensual,
      finscore_actual,
      racha_actual_dias
    `)
    .eq('id', user.id)
    .single();

  if (error) {
    return NextResponse.json(
      { error: { code: 'DB_ERROR', message: error.message } },
      { status: 500 }
    );
  }

  return NextResponse.json({ data });
}

// PUT /api/profile
// Actualiza datos del perfil (nombre, ingreso, avatar, etc.)
export async function PUT(req: Request) {
  const supabase = await createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();

  // TODO: agregar validación Zod aquí (Fase 2)
  const allowedFields = ['full_name', 'avatar_url', 'ingreso_mensual_est', 'meta_ahorro_mensual', 'pais', 'moneda_base'];
  const updateData: Record<string, unknown> = {};
  for (const field of allowedFields) {
    if (body[field] !== undefined) {
      updateData[field] = body[field];
    }
  }

  const { data, error } = await supabase
    .from('profiles')
    .update(updateData)
    .eq('id', user.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json(
      { error: { code: 'DB_ERROR', message: error.message } },
      { status: 500 }
    );
  }

  return NextResponse.json({ data });
}
