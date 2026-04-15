import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: profile } = await supabase
    .from('profiles')
    .select('racha_actual_dias')
    .eq('id', user.id)
    .single()

  const racha = profile?.racha_actual_dias || 0
  
  // Lógica simple de niveles
  let nivel = "Bronce"
  let siguiente = "Plata"
  let hito = 15
  
  if (racha >= 30) {
    nivel = "Oro"
    siguiente = "Diamante"
    hito = 60
  } else if (racha >= 15) {
    nivel = "Plata"
    siguiente = "Oro"
    hito = 30
  }

  return NextResponse.json({
    data: {
      racha_dias_actual: racha,
      nivel_actual: nivel,
      siguiente_nivel: siguiente,
      dias_para_siguiente: hito - racha,
      multiplicador_finscore: 1 + (racha * 0.01)
    }
  })
}
