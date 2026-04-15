import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { messages } = await req.json()

  try {
    // 1. Obtener contexto para RAG (Retrieval Augmented Generation) manual
    const { data: recentTx } = await supabase
      .from('transactions')
      .select('*')
      .eq('user_id', user.id)
      .order('fecha_transaccion', { ascending: false })
      .limit(10)

    const context = `Contexto del usuario:
Transacciones recientes: ${JSON.stringify(recentTx)}
`

    // 2. Chat completion
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { 
          role: 'system', 
          content: 'Eres Lukas, el asistente financiero inteligente. Tu personalidad es paisa, amable, sabio y motivador. Responde preguntas del usuario sobre sus finanzas basándote en su contexto.' 
        },
        ...messages.map((m: any) => ({
          role: m.role,
          content: m.role === 'user' ? `${context}\nPregunta: ${m.content}` : m.content
        }))
      ],
      stream: false, // Por ahora sin streaming para simplicidad
    })

    return NextResponse.json({ data: response.choices[0].message })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
