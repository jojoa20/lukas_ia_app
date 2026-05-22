import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { ensureProfile, getLukasUser } from '@/lib/lukas-user'

export async function GET() {
  const user = await getLukasUser({ allowDemo: false })
  const ensuredProfile = await ensureProfile(user)
  const userId = ensuredProfile?.id || user.id
  const adminDB = createAdminClient()

  const { data, error } = await adminDB
    .from('notificaciones')
    .select('id, titulo, mensaje, tipo, leida, metadata, created_at')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(20)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ data: data || [] })
}

export async function PATCH(req: NextRequest) {
  const user = await getLukasUser({ allowDemo: false })
  const ensuredProfile = await ensureProfile(user)
  const userId = ensuredProfile?.id || user.id
  const adminDB = createAdminClient()

  const body = await req.json().catch(() => ({}))
  const ids: string[] = Array.isArray(body.ids) ? body.ids : []

  let query = adminDB
    .from('notificaciones')
    .update({ leida: true })
    .eq('user_id', userId)

  if (ids.length > 0) {
    query = query.in('id', ids)
  }

  const { error } = await query

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ success: true })
}
