import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // Obtenemos el score actual y el último historial para el delta
  const { data: profile } = await supabase
    .from('profiles')
    .select('finscore_actual')
    .eq('id', user.id)
    .single()

  const { data: history } = await supabase
    .from('finscore_history')
    .select('delta, created_at')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  return NextResponse.json({
    data: {
      finscore_actual: profile?.finscore_actual || 500,
      ultimo_delta: history?.delta || 0,
      ultima_actualizacion: history?.created_at || profile?.updated_at || new Date().toISOString()
    }
  })
}
