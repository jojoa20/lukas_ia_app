import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createAdminClient } from '@/lib/supabase/admin'
import { ensureProfile, getLukasUser } from '@/lib/lukas-user'

const bodySchema = z.object({
  categoria: z.string().min(1),
  limite_cop: z.number().positive(),
  mes: z.number().int().min(1).max(12).optional(),
  anio: z.number().int().min(2020).optional(),
})

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

  const now = new Date()

  const { data, error } = await adminDB
    .from('presupuestos')
    .insert({
      user_id: userId,
      categoria: parsed.data.categoria,
      limite_cop: parsed.data.limite_cop,
      mes: parsed.data.mes ?? now.getMonth() + 1,
      anio: parsed.data.anio ?? now.getFullYear(),
      gastado_cop: 0,
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ data }, { status: 201 })
}
