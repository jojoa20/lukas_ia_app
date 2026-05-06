import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createAdminClient } from '@/lib/supabase/admin'
import { ensureProfile, getLukasUser } from '@/lib/lukas-user'

const updateSchema = z.object({
  full_name: z.string().min(1).max(100).optional(),
  avatar_url: z.string().url().optional(),
  ingreso_mensual_est: z.number().nonnegative().optional(),
  meta_ahorro_mensual: z.number().nonnegative().optional(),
  balance_actual: z.number().nonnegative().optional(),
  pais: z.string().length(2).optional(),
  moneda_base: z.string().length(3).optional(),
})

export async function GET() {
  const user = await getLukasUser()
  const ensuredProfile = await ensureProfile(user)
  const adminDB = createAdminClient()

  const { data, error } = await adminDB
    .from('profiles')
    .select('*')
    .eq('id', ensuredProfile?.id || user.id)
    .limit(1)

  if (error) {
    return NextResponse.json({ error: { code: 'DB_ERROR', message: error.message } }, { status: 500 })
  }

  return NextResponse.json({
    data: data?.[0] || {
      id: user.id,
      email: user.email,
      full_name: user.name,
      nombre_completo: user.name,
      balance_actual: 0,
      finscore_actual: 500,
      racha_actual_dias: 0,
      pais: 'CO',
      moneda_base: 'COP',
    }
  })
}

export async function PUT(req: NextRequest) {
  const user = await getLukasUser()
  const ensuredProfile = await ensureProfile(user)
  const adminDB = createAdminClient()

  const body = await req.json()
  const parsed = updateSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  const { data, error } = await adminDB
    .from('profiles')
    .update(parsed.data)
    .eq('id', ensuredProfile?.id || user.id)
    .select()
    .limit(1)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  if (!data || data.length === 0) {
    const { data: upserted, error: upsertError } = await adminDB
      .from('profiles')
      .upsert([{
        id: user.id,
        email: user.email,
        clerk_id: user.clerkId,
        full_name: user.name,
        finscore_actual: 500,
        racha_actual_dias: 0,
        pais: 'CO',
        moneda_base: 'COP',
        ...parsed.data,
      }], { onConflict: 'id' })
      .select()
      .limit(1)

    if (upsertError) return NextResponse.json({ error: upsertError.message }, { status: 500 })
    return NextResponse.json({ data: upserted?.[0] || null })
  }

  return NextResponse.json({ data: data?.[0] || null })
}
