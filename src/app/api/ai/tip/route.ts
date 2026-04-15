import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export const revalidate = 3600 // Cache 1 hora

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    // 1. Cargar contexto del usuario para personalizar el tip
    const [profile, hormiga, metas] = await Promise.all([
      supabase.from('profiles').select('finscore_actual, meta_ahorro_mensual').eq('id', user.id).single(),
      supabase.from('transactions')
        .select('descripcion, monto')
        .eq('user_id', user.id)
        .eq('es_gasto_hormiga', true)
        .limit(5),
      supabase.from('metas')
        .select('nombre, monto_objetivo, monto_actual')
        .eq('user_id', user.id)
        .eq('estado', 'activa')
    ])

    // 2. OpenAI con el contexto
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { 
          role: 'system', 
          content: 'Eres Lukas, un coach financiero paisa (Medellín, Colombia). Tu estilo es directo, motivador, con humor y mucho acento paisa (usa términos como "parcero", "pues", "zona", "chimba", "camellar"). Responde en máximo 3 líneas. Da un consejo financiero basado en el contexto del usuario.' 
        },
        { 
          role: 'user', 
          content: `Mi contexto: FinScore ${profile.data?.finscore_actual || 500}. Tengo ${hormiga.data?.length || 0} gastos hormiga recientes. Mis metas activas: ${metas.data?.map(m => m.nombre).join(', ') || 'ninguna aún'}. Dame un tip.` 
        }
      ],
      max_tokens: 150,
    })

    return NextResponse.json({ data: { tip: completion.choices[0].message.content } })
  } catch (error: any) {
    console.error('[API /api/ai/tip] Error:', error)
    return NextResponse.json({ data: { tip: "¡Parcero! Por ahora no tengo un tip para vos, pero sigue camellando duro en ese FinScore." } })
  }
}
