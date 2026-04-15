import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const querySchema = z.object({
  estado: z.enum(['activa', 'cumplida', 'abandonada', 'all']).default('activa'),
})

const bodySchema = z.object({
  nombre: z.string().min(1).max(100),
  tipo: z.enum(['ahorro', 'fondo_emergencia', 'viaje', 'compra', 'otro']).default('ahorro'),
  monto_objetivo: z.number().positive(),
  fecha_objetivo: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  emoji: z.string().max(4).optional(),
})

export async function GET(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { searchParams } = new URL(req.url)
  const estado = searchParams.get('estado') || 'activa'

  let query = supabase
    .from('metas')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  if (estado !== 'all') {
    query = query.eq('estado', estado)
  }

  const { data, error } = await query

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ data })
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

  // Lógica simple para calcular ahorro mensual requerido si hay fecha objetivo
  let ahorro_mensual_requerido = null
  if (parsed.data.fecha_objetivo) {
    const targetDate = new Date(parsed.data.fecha_objetivo)
    const today = new Date()
    const diffMonths = (targetDate.getFullYear() - today.getFullYear()) * 12 + (targetDate.getMonth() - today.getMonth())
    
    if (diffMonths > 0) {
      ahorro_mensual_requerido = parsed.data.monto_objetivo / diffMonths
    } else {
      ahorro_mensual_requerido = parsed.data.monto_objetivo // Si es el mismo mes
    }
  }

  const { data, error } = await supabase
    .from('metas')
    .insert({
      ...parsed.data,
      user_id: user.id,
      ahorro_mensual_requerido,
      estado: 'activa',
      monto_actual: 0
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ data }, { status: 201 })
}
