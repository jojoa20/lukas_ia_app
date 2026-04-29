import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { createAdminClient } from '@/lib/supabase/admin'
import { ensureProfile, getLukasUser } from '@/lib/lukas-user'
import { LUKAS_AI_ACTION_GUIDE } from '@/lib/lukas-ai-system'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || 'dummy_key_for_build' })

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

function parseAmount(text: string) {
  const normalized = text.toLowerCase().replace(/\./g, '').replace(/,/g, '')
  const match = normalized.match(/(\d+(?:\.\d+)?)\s*(millones|millon|palos|m|mil|k)?/)
  if (!match) return null

  const value = Number(match[1])
  const unit = match[2]
  if (Number.isNaN(value)) return null
  if (unit === 'millones' || unit === 'millon' || unit === 'palos' || unit === 'm') return value * 1000000
  if (unit === 'mil' || unit === 'k') return value * 1000
  return value
}

function addMonths(date: Date, months: number) {
  const next = new Date(date)
  next.setMonth(next.getMonth() + months)
  return next.toISOString().split('T')[0]
}

function classifyExpense(text: string) {
  if (/arriendo|renta|servicio|luz|agua|\bgas\b|internet|mercado|colegio|cuota|prestamo/.test(text)) return 'Fijos'
  if (/ahorro|meta|inversion|inverti|aporte/.test(text)) return 'Ahorro'
  if (/netflix|spotify|prime|hbo|disney|suscripcion|mensualidad|app/.test(text)) return 'Susc.'
  return 'Salidas'
}

function extractDescription(text: string) {
  return text.match(/(?:en|por|para|de)\s+([a-záéíóúñ\s]+)$/i)?.[1]?.trim() || 'Movimiento'
}

function isAffirmative(text: string) {
  return /^(si|sí|confirmo|dale|hagale|hágale|listo|ok|okay|correcto|seguro)\b/.test(text.trim().toLowerCase())
}

function isRecurringHormiga(text: string, amount: number | null, recentTx: any[] = []) {
  if (!amount || amount > 20000) return false
  const desc = extractDescription(text).toLowerCase()
  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
  const similar = recentTx.filter((tx) => {
    const txDesc = (tx.descripcion || '').toLowerCase()
    const txDate = new Date(tx.fecha_transaccion || tx.created_at || 0)
    return tx.tipo === 'gasto'
      && tx.monto <= 20000
      && txDate >= sevenDaysAgo
      && (txDesc.includes(desc) || desc.includes(txDesc))
  })
  return similar.length >= 6
}

function localFallback(messages: ChatMessage[], recentTx: any[] = []) {
  const last = messages.filter((m) => m.role === 'user').at(-1)?.content || ''
  const text = last.toLowerCase()
  const amount = parseAmount(text)
  const previousAssistant = messages.filter((m) => m.role === 'assistant').at(-1)?.content.toLowerCase() || ''
  const pendingGoal = previousAssistant.includes('crear la meta me falta')
  const commaParts = last.split(',').map((part) => part.trim()).filter(Boolean)

  if (previousAssistant.includes('se borrara el saldo anterior') && isAffirmative(text)) {
    const previousAmount = parseAmount(previousAssistant)
    if (!previousAmount) return { role: 'assistant', content: 'Pana, repiteme el saldo para confirmarlo.' }
    return {
      role: 'assistant',
      content: `Listo, pana. Actualizo tu saldo actual a $${previousAmount.toLocaleString()}.\n<action>{"type":"SET_CURRENT_BALANCE","saldo":${previousAmount}}</action><action>{"type":"NAVIGATE","page":"home"}</action>`,
    }
  }

  if (text.includes('saldo') && amount) {
    return {
      role: 'assistant',
      content: `Veo que quieres registrar saldo actual de $${amount.toLocaleString()}. Seguro que deseas registrar tu nuevo saldo? Ten en cuenta que se borrara el saldo anterior.\n\nResponde "si" para confirmar.`,
    }
  }

  if (text.includes('meta') || pendingGoal || (previousAssistant.includes('puedo ayudarte') && /crea|crear/.test(text))) {
    const name = commaParts.length >= 2
      ? commaParts[0]
      : text.match(/(?:para|de)\s+([a-záéíóúñ\s]+?)(?:\s+de|\s+por|\s+en|\s+prioridad|$)/i)?.[1]?.trim()
    const priority = text.includes('alta') ? 1 : text.includes('baja') ? 3 : text.includes('media') ? 2 : null
    const months = Number(text.match(/(\d+)\s+mes/)?.[1])
    const explicitDate = text.match(/\d{4}-\d{2}-\d{2}/)?.[0]
    const targetDate = explicitDate || (months ? addMonths(new Date(), months) : null)

    const missing = []
    if (!name) missing.push('nombre')
    if (!amount) missing.push('monto')
    if (!targetDate) missing.push('plazo o fecha objetivo')
    if (!priority) missing.push('prioridad')

    if (missing.length > 0) {
      return {
        role: 'assistant',
        content: `De una, pana. Para crear la meta me falta: ${missing.join(', ')}.`,
      }
    }

    const goalName = name || 'Meta'
    const goalAmount = amount || 0
    const cleanName = goalName.charAt(0).toUpperCase() + goalName.slice(1)
    return {
      role: 'assistant',
      content: `Listo, pana. Te creo la meta "${cleanName}" con prioridad ${priority === 1 ? 'alta' : priority === 2 ? 'media' : 'baja'}.\n<action>{"type":"CREATE_GOAL","nombre":"${cleanName}","monto":${goalAmount},"fecha_objetivo":"${targetDate}","prioridad":${priority}}</action><action>{"type":"NAVIGATE","page":"metas"}</action>`,
    }
  }

  if (text.includes('presupuesto')) {
    const category = text.match(/(?:para|de)\s+([a-záéíóúñ\s]+?)(?:\s+de|\s+por|\s+con|\s+en|$)/i)?.[1]?.trim()
    const missing = []
    if (!category) missing.push('categoria')
    if (!amount) missing.push('limite')
    if (missing.length > 0) {
      return { role: 'assistant', content: `Melo, pana. Para crear el presupuesto me falta: ${missing.join(', ')}.` }
    }
    const budgetAmount = amount || 0
    return {
      role: 'assistant',
      content: `Listo. Te creo presupuesto para ${category} por $${budgetAmount.toLocaleString()}.\n<action>{"type":"CREATE_BUDGET","categoria":"${category}","limite_cop":${budgetAmount}}</action>`,
    }
  }

  if (text.includes('grupo')) {
    const name = text.match(/(?:grupo|llamado|para)\s+([a-záéíóúñ\s]+?)(?:\s+tipo|$)/i)?.[1]?.replace(/^de\s+/, '').trim()
    if (!name) return { role: 'assistant', content: 'Listo, pana. Decime el nombre del grupo y si es de pareja, familia, amigos u otro.' }
    const tipo = text.includes('familia') ? 'familia' : text.includes('pareja') ? 'pareja' : text.includes('otro') ? 'otro' : 'amigos'
    return {
      role: 'assistant',
      content: `Listo. Creo el grupo "${name}".\n<action>{"type":"CREATE_GROUP","nombre":"${name}","tipo":"${tipo}"}</action>`,
    }
  }

  if (text.includes('gast') || text.includes('pague') || text.includes('pagué') || text.includes('compre') || text.includes('compré')) {
    const desc = extractDescription(text)
    if (!amount) return { role: 'assistant', content: 'De una, pana. Decime cuanto gastaste y en que fue.' }
    const category = classifyExpense(text)
    const isHormiga = isRecurringHormiga(text, amount, recentTx)
    if (isHormiga) {
      return {
        role: 'assistant',
        content: `Ojo con ese gasto pequeno, pana. Lo registro como hormiga para seguirle la pista si se repite.\n<action>{"type":"ADD_GASTO_HORMIGA","monto":${amount},"descripcion":"${desc}"}</action><action>{"type":"NAVIGATE","page":"home"}</action>`,
      }
    }
    return {
      role: 'assistant',
      content: `Listo, registro ese gasto en ${category} para que lo veas rapido en Presupuesto.\n<action>{"type":"ADD_TRANSACTION","monto":${amount},"tipo":"gasto","descripcion":"${desc}","categoria":"${category}","subcategoria":"${desc}","es_gasto_hormiga":false}</action><action>{"type":"NAVIGATE","page":"home"}</action>`,
    }
  }

  if (text.includes('ingreso') || text.includes('recibi') || text.includes('recibí') || text.includes('llego dinero') || text.includes('llegó dinero') || text.includes('me pagaron') || text.includes('gan')) {
    const desc = extractDescription(text) || 'Ingreso'
    if (!amount) return { role: 'assistant', content: 'Melo. Decime cuanto ingreso y por que concepto.' }
    return {
      role: 'assistant',
      content: `Listo, pana. Registro ese ingreso y lo mando al historial.\n<action>{"type":"ADD_TRANSACTION","monto":${amount},"tipo":"ingreso","descripcion":"${desc}","categoria":"ingreso"}</action><action>{"type":"NAVIGATE","page":"historial"}</action>`,
    }
  }

  if (text.includes('metas')) return { role: 'assistant', content: 'Te llevo a metas.\n<action>{"type":"NAVIGATE","page":"metas"}</action>' }
  if (text.includes('historial')) return { role: 'assistant', content: 'Te llevo al historial.\n<action>{"type":"NAVIGATE","page":"historial"}</action>' }
  if (text.includes('grupo')) return { role: 'assistant', content: 'Te llevo a grupos.\n<action>{"type":"NAVIGATE","page":"analytics"}</action>' }

  return {
    role: 'assistant',
    content: 'Pana, puedo ayudarte a registrar saldo, gastos, ingresos, gastos hormiga, crear metas, presupuestos o grupos. Decime que queres hacer.',
  }
}

async function saveCurrentBalance(adminDB: ReturnType<typeof createAdminClient>, user: Awaited<ReturnType<typeof getLukasUser>>, saldo: number) {
  const ensuredProfile = await ensureProfile(user)
  const balance = Math.max(0, saldo)
  const { data, error } = await adminDB
    .from('profiles')
    .update({ balance_actual: balance })
    .eq('id', ensuredProfile?.id || user.id)
    .select()
    .limit(1)

  if (error) throw error
  if (data && data.length > 0) return data[0]

  const { data: upserted, error: upsertError } = await adminDB
    .from('profiles')
    .upsert([{
      id: user.id,
      email: user.email,
      clerk_id: user.clerkId,
      full_name: user.name,
      balance_actual: balance,
      finscore_actual: 500,
      racha_actual_dias: 0,
      pais: 'CO',
      moneda_base: 'COP',
    }], { onConflict: 'id' })
    .select()
    .limit(1)

  if (upsertError) throw upsertError
  return upserted?.[0] || null
}

export async function POST(req: NextRequest) {
  let messages: ChatMessage[] = []

  try {
    const user = await getLukasUser()
    const ensuredProfile = await ensureProfile(user)
    const userId = ensuredProfile?.id || user.id
    const adminDB = createAdminClient()

    const body = await req.json()
    messages = Array.isArray(body.messages) ? body.messages : []

    const [{ data: profileRows }, { data: recentTx }, { data: metas }, { data: budgets }, { data: groups }] = await Promise.all([
      adminDB.from('profiles').select('*').eq('id', userId).limit(1),
      adminDB
        .from('transactions')
        .select('*')
        .eq('user_id', userId)
        .order('fecha_transaccion', { ascending: false })
        .limit(20),
      adminDB
        .from('metas')
        .select('*')
        .eq('user_id', userId)
        .eq('estado', 'activa')
        .order('created_at', { ascending: false })
        .limit(8),
      adminDB
        .from('presupuestos')
        .select('*')
        .eq('user_id', userId)
        .order('anio', { ascending: false })
        .order('mes', { ascending: false })
        .limit(8),
      adminDB
        .from('group_members')
        .select('groups(*)')
        .eq('user_id', userId)
        .limit(8),
    ])
    const profile = profileRows?.[0]

    const groupNames = groups
      ?.map((row) => {
        const group = Array.isArray(row.groups) ? row.groups[0] : row.groups
        return group?.nombre
      })
      .filter(Boolean)
      .join(', ')

    const context = `
CONTEXTO ACTUAL DEL USUARIO:
- Usuario: ${profile?.full_name || profile?.nombre_completo || user.name}
- Modo: ${user.isDemo ? 'demo local sin login' : 'usuario autenticado'}
- Saldo: $${profile?.balance_actual?.toLocaleString() || 0} COP
- FinScore: ${profile?.finscore_actual || 500}/1000
- Racha: ${profile?.racha_actual_dias || 0} dias
- Transacciones recientes: ${recentTx?.map((t) => `${t.tipo === 'gasto' ? '-' : '+'}$${t.monto} ${t.categoria || ''} (${t.descripcion || 'sin descripcion'})`).join(', ') || 'Ninguna'}
- Metas activas: ${metas?.map((m) => `${m.nombre}: $${m.monto_actual || 0}/$${m.monto_objetivo} hasta ${m.fecha_objetivo || 'sin fecha'}`).join(', ') || 'Ninguna'}
- Presupuestos: ${budgets?.map((b) => `${b.categoria}: $${b.gastado_cop || 0}/$${b.limite_cop} (${b.mes}/${b.anio})`).join(', ') || 'Ninguno'}
- Grupos: ${groupNames || 'Ninguno'}
`

    const latestText = messages.filter((m) => m.role === 'user').at(-1)?.content.toLowerCase() || ''
    const previousAssistant = messages.filter((m) => m.role === 'assistant').at(-1)?.content.toLowerCase() || ''
    if (previousAssistant.includes('se borrara el saldo anterior') && isAffirmative(latestText)) {
      const previousAmount = parseAmount(previousAssistant)
      if (!previousAmount) {
        return NextResponse.json({ data: { role: 'assistant', content: 'Pana, repiteme el saldo para confirmarlo.' } })
      }

      await saveCurrentBalance(adminDB, user, previousAmount)
      return NextResponse.json({
        data: {
          role: 'assistant',
          content: `Listo, pana. Actualizo tu saldo actual a $${previousAmount.toLocaleString()}.\n<action>{"type":"NAVIGATE","page":"home"}</action>`,
        },
      })
    }

    const deterministicIntent = /saldo|gast|pague|pagué|compre|compré|ingreso|recibi|recibí|llego dinero|llegó dinero|me pagaron|gan/.test(latestText)
      || previousAssistant.includes('se borrara el saldo anterior')

    if (deterministicIntent) {
      return NextResponse.json({ data: localFallback(messages, recentTx || []) })
    }

    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'dummy_key_for_build') {
      return NextResponse.json({ data: localFallback(messages, recentTx || []) })
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `${LUKAS_AI_ACTION_GUIDE}

Fecha actual para calcular plazos: ${new Date().toISOString().split('T')[0]}.

${context}`,
        },
        ...messages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
      ],
      stream: false,
    })

    return NextResponse.json({ data: response.choices[0].message })
  } catch (error: any) {
    if (error.status === 401 || error.code === 'invalid_api_key') {
      return NextResponse.json({ data: localFallback(messages) })
    }
    return NextResponse.json({ error: error.message || 'Error procesando el chat' }, { status: 500 })
  }
}
