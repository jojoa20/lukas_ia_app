import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createAdminClient } from '@/lib/supabase/admin'
import { ensureProfile, getLukasUser } from '@/lib/lukas-user'

const bodySchema = z.object({
  nombre: z.string().min(1).max(100),
  tipo: z.enum(['ahorro', 'fondo_emergencia', 'viaje', 'compra', 'otro']).default('ahorro'),
  monto_objetivo: z.number().positive(),
  fecha_objetivo: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  emoji: z.string().max(4).optional(),
  prioridad: z.number().int().min(1).max(3).optional(),
})

export async function GET(req: NextRequest) {
  const user = await getLukasUser()
  const ensuredProfile = await ensureProfile(user)
  const userId = ensuredProfile?.id || user.id
  const adminDB = createAdminClient()

  const { searchParams } = new URL(req.url)
  const estado = searchParams.get('estado') || 'activa'

  let query = adminDB
    .from('metas')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (estado !== 'all') {
    query = query.eq('estado', estado)
  }

  const { data, error } = await query

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ data })
}

export async function POST(req: Request) {
  const user = await getLukasUser()
  const ensuredProfile = await ensureProfile(user)
  const userId = ensuredProfile?.id || user.id
  const adminDB = createAdminClient()

  const body = await req.json()
  const parsed = bodySchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  let ahorro_mensual_requerido = null
  if (parsed.data.fecha_objetivo) {
    const targetDate = new Date(parsed.data.fecha_objetivo)
    const today = new Date()
    const diffMonths = (targetDate.getFullYear() - today.getFullYear()) * 12 + (targetDate.getMonth() - today.getMonth())
    ahorro_mensual_requerido = diffMonths > 0 ? parsed.data.monto_objetivo / diffMonths : parsed.data.monto_objetivo
  }

  const { data, error } = await adminDB
    .from('metas')
    .insert({
      ...parsed.data,
      user_id: userId,
      ahorro_mensual_requerido,
      estado: 'activa',
      monto_actual: 0
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ data }, { status: 201 })
}
