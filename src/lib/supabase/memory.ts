import { GoogleGenerativeAI } from '@google/generative-ai'
import { createAdminClient } from './admin'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')

export async function summarizeAndStoreMemory(
  userId: string,
  messages: { role: string; content: string }[]
) {
  if (messages.length < 6) return

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-preview-04-17' })
    const transcript = messages
      .map((m) => `${m.role}: ${m.content}`)
      .join('\n')
      .slice(0, 4000)

    const result = await model.generateContent(
      `Eres un asistente que resume conversaciones financieras de forma muy breve. ` +
      `Extrae solo: datos del usuario (nombre, ingresos, metas mencionadas), ` +
      `comportamientos de gasto notables y preferencias. Máximo 3 oraciones en español.\n\n` +
      `Conversación:\n${transcript}`
    )
    const summary = result.response.text().trim()
    if (!summary) return

    const adminDB = createAdminClient()
    await adminDB.from('chat_memories').insert({
      user_id: userId,
      summary,
      thread_id: `lukas-${userId}-${Date.now()}`,
      metadata: { message_count: messages.length },
    })
  } catch (err) {
    console.error('Error almacenando memoria del chat:', err)
  }
}

export async function getRecentMemories(userId: string): Promise<string[]> {
  try {
    const adminDB = createAdminClient()
    const { data } = await adminDB
      .from('chat_memories')
      .select('summary')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(3)
    return (data || []).map((row: any) => row.summary as string)
  } catch {
    return []
  }
}
