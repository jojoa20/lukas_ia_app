import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { updateFinScore } from '@/lib/finscore'

// Schema de validación para GET
const querySchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  category: z.string().optional(),
  type: z.enum(['ingreso', 'gasto']).optional(),
  hormiga: z.coerce.boolean().optional(),
})

// Schema de validación para POST
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
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { searchParams } = new URL(req.url)
  const params = Object.fromEntries(searchParams.entries())
  const parsed = querySchema.safeParse(params)
  
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  const { limit, offset, category, type, hormiga } = parsed.data

  let query = supabase
    .from('transactions')
    .select('*', { count: 'exact' })
    .eq('user_id', user.id)
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
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const parsed = bodySchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('transactions')
    .insert({
      ...parsed.data,
      user_id: user.id,
      fecha_transaccion: parsed.data.fecha_transaccion || new Date().toISOString().split('T')[0]
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  // Trigger FinScore recalculation logic
  const event = parsed.data.tipo === 'ingreso' ? 'ingreso' : (parsed.data.es_gasto_hormiga ? 'hormiga' : 'gasto')
  await updateFinScore(user.id, event)
  
  return NextResponse.json({ data }, { status: 201 })
}
