import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const groupSchema = z.object({
  nombre: z.string().min(3).max(50),
  tipo: z.enum(['pareja', 'familia', 'amigos', 'otro']).default('pareja'),
})

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // Obtenemos grupos donde el usuario es miembro
  const { data, error } = await supabase
    .from('group_members')
    .select('group_id, groups(*)')
    .eq('user_id', user.id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ data: data.map(d => d.groups) })
}

export async function POST(req: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const parsed = groupSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  // 1. Crear el grupo
  const { data: group, error: groupError } = await supabase
    .from('groups')
    .insert({ ...parsed.data, created_by: user.id })
    .select()
    .single()

  if (groupError) return NextResponse.json({ error: groupError.message }, { status: 500 })

  // 2. Agregar al creador como admin (suponiendo que existe la tabla group_members)
  await supabase
    .from('group_members')
    .insert({ group_id: group.id, user_id: user.id, rol: 'admin' })

  return NextResponse.json({ data: group }, { status: 201 })
}
