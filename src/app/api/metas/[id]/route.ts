import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const updateSchema = z.object({
  nombre: z.string().min(1).max(100).optional(),
  monto_objetivo: z.number().positive().optional(),
  fecha_objetivo: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  incremento_aporte: z.number().positive().optional(),
  estado: z.enum(['activa', 'cumplida', 'abandonada']).optional(),
  emoji: z.string().max(4).optional(),
})

export async function GET(
  req: NextRequest,
  { params }: { params: any }
) {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data, error } = await supabase
    .from('metas')
    .select('*')
    .eq('id', id)
    .eq('user_id', user.id)
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 404 })

  return NextResponse.json({ data })
}

export async function PUT(
  req: NextRequest,
  { params }: { params: any }
) {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const parsed = updateSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  const { incremento_aporte, ...updates } = parsed.data

  let finalUpdates: any = { ...updates }

  if (incremento_aporte) {
    // Necesitamos el valor actual
    const { data: current } = await supabase
      .from('metas')
      .select('monto_actual, monto_objetivo')
      .eq('id', id)
      .eq('user_id', user.id)
      .single()

    if (current) {
      finalUpdates.monto_actual = current.monto_actual + incremento_aporte
      if (finalUpdates.monto_actual >= current.monto_objetivo) {
        finalUpdates.estado = 'cumplida'
      }
    }
  }

  const { data, error } = await supabase
    .from('metas')
    .update(finalUpdates)
    .eq('id', id)
    .eq('user_id', user.id)
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ data })
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: any }
) {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { error } = await supabase
    .from('metas')
    .update({ estado: 'abandonada' }) // Soft delete recomendado
    .eq('id', id)
    .eq('user_id', user.id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return new NextResponse(null, { status: 204 })
}
