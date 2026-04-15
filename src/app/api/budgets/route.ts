import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const bodySchema = z.object({
  categoria: z.string().min(1),
  limite_cop: z.number().positive(),
  anio: z.number().int().optional(),
  mes: z.number().int().min(1).max(12).optional(),
})

export async function GET(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { searchParams } = new URL(req.url)
  const anio = searchParams.get('anio')
  const mes = searchParams.get('mes')

  let query = supabase
    .from('presupuestos')
    .select('*')
    .eq('user_id', user.id)

  if (anio) query = query.eq('anio', parseInt(anio))
  if (mes) query = query.eq('mes', parseInt(mes))

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

  const now = new Date()
  const anio = parsed.data.anio || now.getFullYear()
  const mes = parsed.data.mes || (now.getMonth() + 1)

  const { data, error } = await supabase
    .from('presupuestos')
    .insert({
      ...parsed.data,
      user_id: user.id,
      anio,
      mes,
      gastado_cop: 0
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ data }, { status: 201 })
}
