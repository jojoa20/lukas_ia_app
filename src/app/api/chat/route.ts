import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { createAdminClient } from '@/lib/supabase/admin'
import { ensureProfile, getLukasUser } from '@/lib/lukas-user'
import { LUKAS_AI_ACTION_GUIDE } from '@/lib/lukas-ai-system'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'dummy_key_for_build')

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

type FinancialSnapshot = {
  profile?: any
  recentTx?: any[]
  metas?: any[]
  budgets?: any[]
  groupNames?: string
  trends?: any[]
}

function formatCOP(value: number | null | undefined) {
  return `$${Math.round(Number(value || 0)).toLocaleString('es-CO')} COP`
}

const menuHelp: Record<string, string> = {
  home: 'En Inicio ves el resumen rapido: saldo actual, FinScore, alertas importantes y tu panorama financiero del momento. Es el lugar para mirar como vas sin entrar al detalle.',
  inicio: 'En Inicio ves el resumen rapido: saldo actual, FinScore, alertas importantes y tu panorama financiero del momento. Es el lugar para mirar como vas sin entrar al detalle.',
  metas: 'En Metas puedes crear objetivos de ahorro, ponerles monto, fecha y prioridad. Lukas te ayuda a ver cuanto falta y que tan cerca estas de cumplirlas.',
  historial: 'En Historial ves tus movimientos: gastos, ingresos y registros recientes. Sirve para revisar en que se fue la plata y confirmar que todo quedo bien guardado.',
  presupuesto: 'En Presupuesto organizas limites por categoria. Sirve para comparar cuanto planeabas gastar contra cuanto llevas gastado.',
  presupuestos: 'En Presupuesto organizas limites por categoria. Sirve para comparar cuanto planeabas gastar contra cuanto llevas gastado.',
  grupos: 'En Grupos puedes manejar finanzas compartidas, por ejemplo con pareja, familia o amigos. Sirve para separar gastos y responsabilidades por grupo.',
  grupo: 'En Grupos puedes manejar finanzas compartidas, por ejemplo con pareja, familia o amigos. Sirve para separar gastos y responsabilidades por grupo.',
  chat: 'En Chat hablas con Lukas en lenguaje natural. Puedes preguntarle tu saldo, pedir resumen, crear metas, registrar gastos o pedir explicaciones sobre tus finanzas.',
}

function menuHelpResponse(text: string) {
  if (!/(menu|seccion|secci[oó]n|pantalla|apartado|pesta[nñ]a|funciona|sirve|hace)/.test(text)) return null

  const requestedMenus = Object.keys(menuHelp).filter((key) => text.includes(key))
  const uniqueMenus = Array.from(new Set(requestedMenus.map((key) => {
    if (key === 'inicio') return 'home'
    if (key === 'presupuestos') return 'presupuesto'
    if (key === 'grupo') return 'grupos'
    return key
  })))

  if (uniqueMenus.length === 1) {
    const key = uniqueMenus[0]
    return { role: 'assistant' as const, content: menuHelp[key] }
  }

  if (text.includes('cada') || text.includes('todos') || text.includes('menus') || text.includes('menues') || text.includes('menú') || text.includes('menu')) {
    return {
      role: 'assistant' as const,
      content: [
        menuHelp.home,
        menuHelp.chat,
        menuHelp.historial,
        menuHelp.metas,
        menuHelp.presupuesto,
        menuHelp.grupos,
      ].join('\n\n'),
    }
  }

  return null
}

function parseAmount(text: string) {
  const normalized = text.toLowerCase()
    .replace(/\$/g, '')
    .replace(/\./g, '')   // remove thousand separators like 30.000
    .replace(/,/g, '.')   // convert decimal comma to dot

  // Match pattern: number + optional unit word
  const match = normalized.match(/(\d+(?:\.\d+)?)\s*(millones?|palos?|m(?=\b)|miles?|mil(?=\b)|k(?=\b))?/)
  if (!match) return null

  const value = Number(match[1])
  const unit = match[2]
  if (Number.isNaN(value)) return null

  if (unit === 'millones' || unit === 'millon' || unit === 'palos' || unit === 'palo' || unit === 'm') {
    return value * 1_000_000
  }
  if (unit === 'miles' || unit === 'mil' || unit === 'k') {
    return value * 1_000
  }
  return value
}

function addMonths(date: Date, months: number) {
  const next = new Date(date)
  next.setMonth(next.getMonth() + months)
  return next.toISOString().split('T')[0]
}

const monthsByName: Record<string, string> = {
  enero: 'Enero',
  febrero: 'Febrero',
  marzo: 'Marzo',
  abril: 'Abril',
  mayo: 'Mayo',
  junio: 'Junio',
  julio: 'Julio',
  agosto: 'Agosto',
  septiembre: 'Septiembre',
  setiembre: 'Septiembre',
  octubre: 'Octubre',
  noviembre: 'Noviembre',
  diciembre: 'Diciembre',
}

function parseEmail(text: string) {
  return text.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i)?.[0] || null
}

function parseGroupType(text: string) {
  if (text.includes('familia')) return 'familia'
  if (text.includes('pareja')) return 'pareja'
  if (text.includes('otro')) return 'otro'
  if (text.includes('amigo') || text.includes('amigos')) return 'amigos'
  return null
}

function parseHistoryMonth(text: string) {
  if (/actual|este mes|mes actual/.test(text)) return 'Actual'
  const match = Object.keys(monthsByName).find((month) => text.includes(month))
  if (!match) return 'Actual'
  return `${monthsByName[match]} ${new Date().getFullYear()}`
}

function classifyExpense(text: string) {
  if (/arriendo|renta|servicio|luz|agua|\bgas\b|internet|mercado|colegio|cuota|prestamo/.test(text)) return 'Fijos'
  if (/ingreso|nomina|nómina|salario|pago|transferencia|ahorro|meta|inversion|inverti|aporte/.test(text)) return 'Ingresos'
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

function localFallback(messages: ChatMessage[], snapshot: FinancialSnapshot = {}) {
  const last = messages.filter((m) => m.role === 'user').at(-1)?.content || ''
  const text = last.toLowerCase()
  const amount = parseAmount(text)
  const previousAssistant = messages.filter((m) => m.role === 'assistant').at(-1)?.content.toLowerCase() || ''
  const pendingGoal = previousAssistant.includes('crear la meta me falta')
  const pendingGroup = previousAssistant.includes('crear el grupo me falta')
  const commaParts = last.split(',').map((part) => part.trim()).filter(Boolean)
  const recentTx = snapshot.recentTx || []
  const profile = snapshot.profile || {}
  const metas = snapshot.metas || []
  const budgets = snapshot.budgets || []

  const isQuestion = /^(cual|cu[aá]l|como|c[oó]mo|cuanto|cu[aá]nto|que|qu[eé]|dime|muestrame|mu[eé]strame|consultar|consulta|ver|quiero saber|quisiera consultar|quisiero consultadr)/.test(text.trim())

  const menuAnswer = menuHelpResponse(text)
  if (menuAnswer) return menuAnswer

  if ((text.includes('saldo') || text.includes('balance') || text.includes('plata tengo')) && !amount) {
    return {
      role: 'assistant',
      content: `Tu saldo actual registrado es ${formatCOP(profile.balance_actual)}.`,
    }
  }

  if (text.includes('hormiga') && isQuestion) {
    const hormigaTx = recentTx.filter((tx) => tx.es_gasto_hormiga)
    const examples = hormigaTx
      .slice(0, 3)
      .map((tx) => `${formatCOP(tx.monto)} en ${tx.descripcion || tx.subcategoria || tx.categoria || 'gasto pequeno'}`)
      .join(', ')

    return {
      role: 'assistant',
      content: `Un gasto hormiga es un gasto pequeno que parece inofensivo solo, pero se vuelve importante si se repite mucho. Lukas lo puede marcar cuando el monto es bajo y aparece con frecuencia, por ejemplo snacks, domicilios pequenos, apps, cafe o compras impulsivas.${examples ? ` En tus movimientos recientes vi estos posibles ejemplos: ${examples}.` : ''}`,
    }
  }

  if (/finscore|fin score|puntaje|score/.test(text)) {
    return {
      role: 'assistant',
      content: `Tu FinScore actual es ${profile.finscore_actual || 500}/1000.`,
    }
  }

  if (text.includes('racha')) {
    return {
      role: 'assistant',
      content: `Tu racha actual es de ${profile.racha_actual_dias || 0} dias.`,
    }
  }

  if ((text.includes('meta') || text.includes('metas')) && isQuestion) {
    if (metas.length === 0) {
      return { role: 'assistant', content: 'No tienes metas activas registradas todavia.' }
    }

    const summary = metas
      .slice(0, 5)
      .map((m) => `${m.nombre}: ${formatCOP(m.monto_actual)} de ${formatCOP(m.monto_objetivo)}${m.fecha_objetivo ? `, fecha ${m.fecha_objetivo}` : ''}`)
      .join('\n')
    return {
      role: 'assistant',
      content: `Estas son tus metas activas:\n${summary}`,
    }
  }

  if ((text.includes('presupuesto') || text.includes('presupuestos')) && isQuestion) {
    if (budgets.length === 0) {
      return { role: 'assistant', content: 'No tienes presupuestos registrados todavia.' }
    }

    const summary = budgets
      .slice(0, 5)
      .map((b) => `${b.categoria}: ${formatCOP(b.gastado_cop)} gastados de ${formatCOP(b.limite_cop)} (${b.mes}/${b.anio})`)
      .join('\n')
    return {
      role: 'assistant',
      content: `Tus presupuestos recientes van asi:\n${summary}`,
    }
  }

  if ((text.includes('movimiento') || text.includes('transaccion') || text.includes('historial') || text.includes('gastos recientes')) && isQuestion) {
    if (recentTx.length === 0) {
      return { role: 'assistant', content: 'No tienes movimientos recientes registrados todavia.' }
    }

    const summary = recentTx
      .slice(0, 5)
      .map((tx) => `${tx.tipo === 'gasto' ? '-' : '+'}${formatCOP(tx.monto)} en ${tx.descripcion || tx.subcategoria || tx.categoria || 'movimiento'} (${tx.fecha_transaccion || 'sin fecha'})`)
      .join('\n')
    return {
      role: 'assistant',
      content: `Tus ultimos movimientos son:\n${summary}`,
    }
  }

  if (/(historico|histórico|comparar|comparativo)/.test(text)) {
    const month = parseHistoryMonth(text)
    return {
      role: 'assistant',
      content: `Listo, pana. Te llevo al historico de ${month === 'Actual' ? 'este mes' : month}.\n<action>{"type":"NAVIGATE","page":"analytics","viewMode":"compare","month":"${month}"}</action>`,
    }
  }

  if (/como voy|c[oó]mo voy|resumen|estado financiero/.test(text)) {
    const lastExpense = recentTx.find((tx) => tx.tipo === 'gasto')
    const activeGoals = metas.length
    return {
      role: 'assistant',
      content: `Vas con saldo de ${formatCOP(profile.balance_actual)}, FinScore ${profile.finscore_actual || 500}/1000 y ${activeGoals} meta${activeGoals === 1 ? '' : 's'} activa${activeGoals === 1 ? '' : 's'}.${lastExpense ? ` Tu gasto reciente mas visible fue ${formatCOP(lastExpense.monto)} en ${lastExpense.descripcion || lastExpense.subcategoria || lastExpense.categoria}.` : ''}`,
    }
  }

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

  if ((text.includes('grupo') || text.includes('grupos')) && /presupuesto|asignar|destinar|poner/.test(text)) {
    if (!amount) {
      return { role: 'assistant', content: 'Melo, pana. Decime cuanto presupuesto personal quieres asignar en Grupos.' }
    }

    const balance = Number(profile.balance_actual || 0)
    if (amount > balance) {
      return {
        role: 'assistant',
        content: `No puedes asignar ${formatCOP(amount)}: tu saldo actual es ${formatCOP(balance)}, es menor que ese presupuesto.`,
      }
    }

    return {
      role: 'assistant',
      content: `Listo. Asigno ${formatCOP(amount)} como tu presupuesto personal en Grupos.\n<action>{"type":"SET_GROUP_PERSONAL_BUDGET","monto":${amount}}</action><action>{"type":"NAVIGATE","page":"analytics","viewMode":"groups"}</action>`,
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

  if (text.includes('grupo') || pendingGroup) {
    const email = parseEmail(last)
    const name = commaParts.length >= 2
      ? commaParts[0]
      : text.match(/(?:grupo|llamado|nombre|para)\s+([a-záéíóúñ\s]+?)(?:\s+tipo|\s+de\s+tipo|\s+invita|\s+con\s+correo|\s+correo|$)/i)?.[1]?.replace(/^de\s+/, '').trim()
    const tipo = parseGroupType(text)
    const missing = []
    if (!name) missing.push('nombre')
    if (!tipo) missing.push('tipo (pareja, familia, amigos u otro)')
    if (!email) missing.push('correo de invitacion')

    if (missing.length > 0) {
      return { role: 'assistant', content: `De una, pana. Para crear el grupo me falta: ${missing.join(', ')}.` }
    }

    const cleanName = (name || 'Grupo').charAt(0).toUpperCase() + (name || 'Grupo').slice(1)
    return {
      role: 'assistant',
      content: `Listo. Creo el grupo "${cleanName}" y envio la invitacion a ${email}. Queda creado; ahora debes esperar a que esa persona acepte la invitacion.\n<action>{"type":"CREATE_GROUP","nombre":"${cleanName}","tipo":"${tipo}","invite_email":"${email}"}</action><action>{"type":"NAVIGATE","page":"analytics","viewMode":"groups"}</action>`,
    }
  }

  if (text.includes('gast') || text.includes('pague') || text.includes('pagué') || text.includes('compre') || text.includes('compré')) {
    const desc = extractDescription(text)
    if (!amount) return { role: 'assistant', content: 'De una, pana. Decime cuanto gastaste y en que fue.' }
    const category = classifyExpense(text)
    
    // Alerta de Hype impulsivo
    const trendingItem = snapshot.trends?.find((t: any) => desc.toLowerCase().includes(t.item_name.toLowerCase()) && t.hype_score >= 80)
    if (trendingItem && !isAffirmative(previousAssistant)) {
      return {
        role: 'assistant',
        content: `¡Ojo ahí, pana! Noto que "${trendingItem.item_name}" está súper de moda ahorita en ${trendingItem.platform} (nivel de viralidad: ${trendingItem.hype_score}/100). ¿Estás seguro de que lo necesitas o es una compra impulsiva? Responde "si" para registrarlo de todas formas.`,
      }
    }
    
    if (previousAssistant.includes('nivel de viralidad') && !isAffirmative(text)) {
        return { role: 'assistant', content: 'Melo, pana. Mejor ahorramos esa plata.' }
    }

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

  if (/ingreso|recibi|recibí|llego|llegó|llegaron|me\s+llego|me\s+llegó|me\s+llegaron|me\s+pagaron|pago|n[oó]mina|salario|gan/.test(text)) {
    const desc = extractDescription(text) || 'Ingreso'
    if (!amount) return { role: 'assistant', content: 'Melo. Decime cuanto ingreso y por que concepto.' }
    return {
      role: 'assistant',
      content: `Listo, pana. Registro ese ingreso y lo mando al historial.\n<action>{"type":"ADD_TRANSACTION","monto":${amount},"tipo":"ingreso","descripcion":"${desc}","categoria":"ingreso"}</action><action>{"type":"NAVIGATE","page":"historial"}</action>`,
    }
  }

  if (text.includes('metas')) return { role: 'assistant', content: 'Te llevo a metas.\n<action>{"type":"NAVIGATE","page":"metas"}</action>' }
  if (text.includes('historial')) return { role: 'assistant', content: 'Te llevo al historial.\n<action>{"type":"NAVIGATE","page":"historial"}</action>' }
  if (text.includes('grupo')) return { role: 'assistant', content: 'Te llevo a grupos.\n<action>{"type":"NAVIGATE","page":"analytics","viewMode":"groups"}</action>' }

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

    const [{ data: profileRows }, { data: recentTx }, { data: metas }, { data: budgets }, { data: groups }, { data: trends }] = await Promise.all([
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
      adminDB
        .from('consumer_trends')
        .select('*')
        .order('hype_score', { ascending: false })
        .limit(10),
    ])
    const profile = profileRows?.[0]

    let activeTrends = trends;
    // Fallback: Si la tabla no existe o está vacía (por ej. el usuario aún no corrió el SQL), 
    // hacemos el web scraping en vivo para poder probar el agente de todas formas.
    if (!activeTrends || activeTrends.length === 0) {
      try {
        const res = await fetch('http://localhost:3000/api/trends/fetch');
        const json = await res.json();
        if (json.success && json.data) {
          activeTrends = json.data;
        }
      } catch (e) {
        console.error("Fallback scraping falló", e);
      }
    }

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
- Tendencias de consumo (Alertas de Hype): ${activeTrends?.map((t: any) => `${t.item_name} (Hype: ${t.hype_score}/100)`).join(', ') || 'Ninguna'}
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

    const deterministicIntent = /saldo|gast|pague|pagué|compre|compré|ingreso|recibi|recibí|llego|llegó|llegaron|me\s+llego|me\s+llegó|me\s+llegaron|me\s+pagaron|pago|n[oó]mina|salario|gan/.test(latestText)
      || previousAssistant.includes('se borrara el saldo anterior')
      || previousAssistant.includes('crear el grupo me falta')
      || /grupo|grupos|historico|histórico|comparar|comparativo/.test(latestText)

    if (deterministicIntent) {
      return NextResponse.json({ data: localFallback(messages, { profile, recentTx: recentTx || [], metas: metas || [], budgets: budgets || [], groupNames, trends: activeTrends || [] }) })
    }

    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'dummy_key_for_build') {
      return NextResponse.json({ data: localFallback(messages, { profile, recentTx: recentTx || [], metas: metas || [], budgets: budgets || [], groupNames, trends: activeTrends || [] }) })
    }

    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.5-flash',
      systemInstruction: `${LUKAS_AI_ACTION_GUIDE}\n\nFecha actual para calcular plazos: ${new Date().toISOString().split('T')[0]}.\n\n${context}`
    })

    const geminiHistory = messages.slice(0, -1).map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }))

    const chat = model.startChat({ history: geminiHistory })
    const latestMessage = messages.length > 0 ? messages[messages.length - 1].content : 'Hola'
    
    const result = await chat.sendMessage(latestMessage)

    return NextResponse.json({ data: { role: 'assistant', content: result.response.text() } })
  } catch (error: any) {
    if (error.status === 401 || error.code === 'invalid_api_key') {
      return NextResponse.json({ data: localFallback(messages) })
    }
    return NextResponse.json({ error: error.message || 'Error procesando el chat' }, { status: 500 })
  }
}
