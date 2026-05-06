import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createAdminClient } from '@/lib/supabase/admin'
import { ensureProfile, getLukasUser } from '@/lib/lukas-user'

const querySchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  category: z.string().optional(),
  type: z.enum(['ingreso', 'gasto']).optional(),
  hormiga: z.coerce.boolean().optional(),
})

const bodySchema = z.object({
  tipo: z.enum(['ingreso', 'gasto']),
  monto: z.number().positive(),
  categoria: z.string().min(1),
  subcategoria: z.string().optional(),
  comercio: z.string().optional(),
  descripcion: z.string().optional(),
  metodo_entrada: z.enum(['manual', 'voz', 'ocr_imagen', 'ai', 'texto']).default('manual'),
  es_gasto_hormiga: z.boolean().default(false),
  fecha_transaccion: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
})

export async function GET(req: NextRequest) {
  const user = await getLukasUser()
  const ensuredProfile = await ensureProfile(user)
  const userId = ensuredProfile?.id || user.id
  const adminDB = createAdminClient()

  const { searchParams } = new URL(req.url)
  const params = Object.fromEntries(searchParams.entries())
  const parsed = querySchema.safeParse(params)

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  const { limit, offset, category, type, hormiga } = parsed.data

  let query = adminDB
    .from('transactions')
    .select('*', { count: 'exact' })
    .eq('user_id', userId)
    .range(offset, offset + limit - 1)
    .order('fecha_transaccion', { ascending: false })
    .order('created_at', { ascending: false })

  if (category) query = query.eq('categoria', category)
  if (type) query = query.eq('tipo', type)
  if (hormiga !== undefined) query = query.eq('es_gasto_hormiga', hormiga)

  const { data, error, count } = await query

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({
    data,
    meta: { total: count, limit, offset }
  })
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

  const visualBranches = ['Fijos', 'Salidas', 'Ahorro', 'Susc.']
  const isVisualBranch = visualBranches.includes(parsed.data.categoria)
  const dbCategoria = 'otro'
  const subcategoria = isVisualBranch
    ? `${parsed.data.categoria}: ${parsed.data.subcategoria || parsed.data.descripcion || 'Movimiento'}`
    : (parsed.data.subcategoria || `${parsed.data.categoria}: ${parsed.data.descripcion || 'Movimiento'}`)

  const { data, error } = await adminDB
    .from('transactions')
    .insert({
      ...parsed.data,
      categoria: dbCategoria,
      subcategoria,
      user_id: userId,
      fecha_transaccion: parsed.data.fecha_transaccion || new Date().toISOString().split('T')[0]
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const { data: profiles } = await adminDB.from('profiles').select('balance_actual, finscore_actual').eq('id', userId).limit(1)
  const profile = profiles?.[0]
  const currentBalance = profile?.balance_actual || 0
  const balance_actual = parsed.data.tipo === 'ingreso'
    ? currentBalance + parsed.data.monto
    : currentBalance - parsed.data.monto
  const finscore_actual = parsed.data.es_gasto_hormiga
    ? Math.max(0, (profile?.finscore_actual || 500) - 5)
    : profile?.finscore_actual

  await adminDB.from('profiles').update({ balance_actual, finscore_actual }).eq('id', userId)

  return NextResponse.json({ data }, { status: 201 })
}
