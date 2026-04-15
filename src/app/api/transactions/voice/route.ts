import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const formData = await req.formData()
    const file = formData.get('file') as File
    if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 })

    // 1. Transcribir con Whisper
    const transcription = await openai.audio.transcriptions.create({
      file: file,
      model: 'whisper-1',
    })

    // 2. Extraer datos con GPT-4
    const extracted = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { 
          role: 'system', 
          content: 'Extrae transacción financiera (tipo:gasto/ingreso, monto:numero, categoria:string, descripcion:string) de este texto. Responde solo en JSON puro.' 
        },
        { role: 'user', content: transcription.text }
      ],
      response_format: { type: 'json_object' }
    })

    const data = JSON.parse(extracted.choices[0].message.content || '{}')

    return NextResponse.json({ 
      data,
      transcription: transcription.text,
      status: 'extracted'
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
