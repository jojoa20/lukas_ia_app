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

  // Normalizar categoría al esquema DB de presupuestos
  const BUDGET_VALID_CATS = ['alimentacion','transporte','entretenimiento','salud','educacion','servicios','vivienda','ropa','tecnologia','deporte','ahorro','otro']
  const BUDGET_LEGACY_MAP: Record<string, string> = { 'Fijos': 'servicios', 'Salidas': 'alimentacion', 'Susc.': 'tecnologia', 'Ahorro': 'ahorro', 'comida': 'alimentacion', 'tecnologia': 'tecnologia' }
  const rawCat = parsed.data.categoria
  const dbCategoria = BUDGET_VALID_CATS.includes(rawCat) ? rawCat : (BUDGET_LEGACY_MAP[rawCat] ?? 'otro')

  const { data, error } = await adminDB
    .from('presupuestos')
    .insert({
      user_id: userId,
      categoria: dbCategoria,
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
