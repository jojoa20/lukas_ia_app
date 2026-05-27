import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { createAdminClient } from '@/lib/supabase/admin'
import { ensureProfile, getLukasUser } from '@/lib/lukas-user'
import { LUKAS_AI_ACTION_GUIDE } from '@/lib/lukas-ai-system'
import { analyzeSpendingText, extractMarketSymbol, wantsMarketLookup, wantsWebResearch } from '@/lib/agent-skills'
import { logAgentEvent } from '@/lib/agent-observability'
import { fetchYahooQuote } from '@/lib/market-data'
import { fetchExitoBasket, fetchExitoPrice } from '@/lib/prices'
import { braveWebSearch } from '@/lib/web-research'
import { getRecentMemories, summarizeAndStoreMemory } from '@/lib/supabase/memory'
import { classifyExpenseML } from '@/lib/ml-classifier'

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

function formatNumber(value: number | null | undefined, digits = 2) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return 'N/D'
  return Number(value).toLocaleString('es-CO', { maximumFractionDigits: digits })
}

function safeActionText(value: string) {
  return value.replace(/"/g, '\\"').replace(/\n/g, ' ').trim()
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
    // Normalizar errores de tipeo de unidades (antes de tocar los números)
    .replace(/miil+/g, 'mil')       // "miil", "miill" → "mil" (sin \b para capturar "30miil")
    .replace(/\bpesos?\b/gi, '')    // remover "pesos"
    .replace(/\bcop\b/gi, '')       // remover "COP"
    // Separadores de miles: "30.000" → "30000" (punto antes de exactamente 3 dígitos)
    .replace(/(\d)\.(\d{3})(?!\d)/g, '$1$2')
    // Coma decimal colombiana: "1,5" → "1.5"
    .replace(/(\d),(\d{1,2})(?!\d)/g, '$1.$2')

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

function classifyExpense(text: string): string {
  const t = text.toLowerCase()
  // Ingresos
  if (/ingreso|nomina|nómina|salario|quincena|sueldo|pago.*trabajo|me.*pagaron/.test(t)) return 'ingreso_trabajo'
  if (/freelance|venta|ganancia|cobr[eé]|ingreso extra/.test(t)) return 'ingreso_extra'
  if (/transferencia|nequi|daviplata|bancolombia.*recib/.test(t)) return 'transferencia'
  // Fijos / Vivienda
  if (/arriendo|renta|administracion|hipoteca/.test(t)) return 'vivienda'
  // Fijos / Servicios
  if (/\bluz\b|agua|gas\b|internet|epm|vanti|acueducto|alcantarillado|tv cable|energia/.test(t)) return 'servicios'
  // Tecnología / Suscripciones
  if (/netflix|spotify|prime|hbo|disney|youtube.*premium|icloud|canva|chatgpt|suscripcion|mensualidad/.test(t)) return 'tecnologia'
  // Transporte
  if (/uber|didi|taxi|bus|metro|transmilenio|pasaje|mio|sitp|indriver|cabify|beat|gasolina|combustible/.test(t)) return 'transporte'
  // Salud
  if (/medico|doctor|farmacia|drogueria|medicina|salud|eps|consulta|examen|laboratorio/.test(t)) return 'salud'
  // Educación
  if (/colegio|universidad|clase|curso|libro|matricula|educacion|estudio/.test(t)) return 'educacion'
  // Ropa
  if (/ropa|camisa|pantalon|zapatos|vestido|calzado|tenis|zapatilla/.test(t)) return 'ropa'
  // Deporte
  if (/gimnasio|gym|deporte|natacion|futbol|ciclismo|crossfit|entrenamiento/.test(t)) return 'deporte'
  // Ahorro
  if (/ahorro|ahorr[eé]|ahorrar|meta de ahorro/.test(t)) return 'ahorro'
  // Alimentación — lo más común (incluye mercado, comida preparada, ingredientes)
  if (/mercado|supermercado|frutas|verduras|carniceria|panaderia|cafe|tinto|almuerzo|desayuno|cena|comida|restaurante|domicilio|rappi|empanada|hamburguesa|pizza|sushi|perro|arepa|bandeja|corrientazo/.test(t)) return 'alimentacion'
  if (/huevo|huebos|huevos|panal|pollo|carne|pechuga|cerdo|res\b|lomo|chuleta|costilla|salmon|atun|leche|queso|yogur|mantequilla|arroz|papa|yuca|platano|pltano|zanahoria|tomate|cebolla|ajo|frijol|lenteja|arveja|garbanzo|maiz|trigo|harina|azucar|sal\b|aceite|vinagre|pasta|espagueti|pan\b|tortilla|granola|cereal|avena|marranita|chicharron|embutido|salchicha|jamon|chorizo|mortadela|aguacate|mango|banano|naranja|mandarina|manzana|pera|uva|fresa|piña|melon|sandia|limón|limon|cocacola|gaseosa/.test(t)) return 'alimentacion'
  // Entretenimiento
  if (/pelicula|cine|bar|discoteca|rumbear|concierto|evento|plan|salida|viaje|hotel|turismo/.test(t)) return 'entretenimiento'
  // Default
  return 'otro'
}

function extractDescription(text: string) {
  // Limpiar typos comunes antes de extraer descripción
  const cleaned = text
    .replace(/\bpro\b/gi, 'por')   // "pro" → "por" (typo colombiano)
    .replace(/miil+/g, 'mil')      // "miil" → "mil"
    .replace(/\bhuebos?\b/gi, 'huevos') // "huebos" → "huevos"
  return cleaned.match(/(?:en|por|para|de)\s+([a-záéíóúñ\s]+?)(?:\s+\d|\s+por\b|\s+en\b|$)/i)?.[1]?.trim().replace(/\s+(por|en|de|para)$/i, '')
    || cleaned.match(/(?:compré?|gasté?|pagué?)\s+(?:un|una|el|la|)?\s*([a-záéíóúñ\s]{3,30}?)(?:\s+por|\s+en|\s*$)/i)?.[1]?.trim()
    || 'Movimiento'
}

function isAffirmative(text: string) {
  return /^(si|sí|confirmo|dale|hagale|hágale|listo|ok|okay|correcto|seguro)\b/.test(text.trim().toLowerCase())
}

// ── Semantic cluster map for hormiga detection ──
const HORMIGA_CLUSTERS: Record<string, string[]> = {
  'cafe': ['cafe', 'tinto', 'coffee', 'cappuccino', 'latte', 'aromatica', 'aromática'],
  'snack': ['snack', 'dulce', 'galleta', 'empanada', 'pan', 'arepa', 'buñuelo', 'pastel', 'postre', 'helado', 'brownie'],
  'bebida': ['gaseosa', 'coca', 'jugo', 'agua', 'botella', 'soda', 'malteada'],
  'domicilio': ['rappi', 'ifood', 'domicilio', 'delivery', 'uber eats', 'didi food'],
  'transporte': ['uber', 'didi', 'taxi', 'beat', 'indriver', 'cabify'],
  'suscripcion': ['netflix', 'spotify', 'prime', 'disney', 'hbo', 'youtube', 'suscripcion', 'app', 'premium'],
  'licor': ['cerveza', 'aguardiente', 'ron', 'whiskey', 'vino', 'licor', 'trago'],
  'antojo': ['maquina', 'máquina', 'antojo', 'impulso', 'capricho'],
}

function getSemanticCluster(text: string): string {
  const lower = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  for (const [cluster, keywords] of Object.entries(HORMIGA_CLUSTERS)) {
    for (const keyword of keywords) {
      if (lower.includes(keyword.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))) {
        return cluster
      }
    }
  }
  return lower.substring(0, 15) // fallback: use first 15 chars
}

function isRecurringHormiga(text: string, amount: number | null, recentTx: any[] = []) {
  if (!amount || amount > 80000) return false
  const desc = extractDescription(text)
  const cluster = getSemanticCluster(desc)
  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
  const similar = recentTx.filter((tx) => {
    const txDesc = (tx.descripcion || tx.subcategoria || '').toLowerCase()
    const txCluster = getSemanticCluster(txDesc)
    const txDate = new Date(tx.fecha_transaccion || tx.created_at || 0)
    return tx.tipo === 'gasto'
      && tx.monto <= 80000
      && txDate >= thirtyDaysAgo
      && txCluster === cluster
  })
  return similar.length >= 3
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
      content: `Listo, pana. Actualizo tu saldo actual a $${previousAmount.toLocaleString()}.\n<action>{"type":"SET_CURRENT_BALANCE","saldo":${previousAmount}}</action>`,
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
      content: `Listo, pana. Te creo la meta "${cleanName}" con prioridad ${priority === 1 ? 'alta' : priority === 2 ? 'media' : 'baja'}.\n<action>{"type":"CREATE_GOAL","nombre":"${cleanName}","monto":${goalAmount},"fecha_objetivo":"${targetDate}","prioridad":${priority}}</action>`,
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
      content: `Listo. Asigno ${formatCOP(amount)} como tu presupuesto personal en Grupos.\n<action>{"type":"SET_GROUP_PERSONAL_BUDGET","monto":${amount}}</action>`,
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
      content: `Listo. Creo el grupo "${cleanName}" y envio la invitacion a ${email}. Queda creado; ahora debes esperar a que esa persona acepte la invitacion.\n<action>{"type":"CREATE_GROUP","nombre":"${cleanName}","tipo":"${tipo}","invite_email":"${email}"}</action>`,
    }
  }

  if (text.includes('gast') || text.includes('pague') || text.includes('pagué') || text.includes('compre') || text.includes('compré')) {
    const desc = extractDescription(text)
    if (!amount) return { role: 'assistant', content: 'De una, pana. Decime cuanto gastaste y en que fue.' }
    const category = classifyExpense(text)
    
    // Alerta de Hype impulsivo
    const trendingItem = snapshot.trends?.find((t: any) => desc.toLowerCase().includes(t.item_name.toLowerCase()) && t.hype_score >= 80)
    if (trendingItem && !previousAssistant.includes('nivel de viralidad')) {
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
        content: `Ojo con ese gasto pequeno, pana. Lo registro como hormiga para seguirle la pista si se repite.\n<action>{"type":"ADD_GASTO_HORMIGA","monto":${amount},"descripcion":"${desc}"}</action>`,
      }
    }

    // Tip de presupuesto al registrar gasto normal
    const nowDate = new Date()
    const matchingBudget = budgets.find((b: any) =>
      b.mes === nowDate.getMonth() + 1 && b.anio === nowDate.getFullYear() && b.limite_cop > 0
    )
    let budgetTip = ''
    if (matchingBudget) {
      const projected = (matchingBudget.gastado_cop || 0) + (amount || 0)
      const pct = Math.round((projected / matchingBudget.limite_cop) * 100)
      if (pct >= 90) budgetTip = ` ⚠️ Con esto llevas el ${pct}% de tu presupuesto de ${matchingBudget.categoria} este mes — casi al tope pana.`
      else if (pct >= 80) budgetTip = ` Llevas el ${pct}% del presupuesto de ${matchingBudget.categoria} este mes.`
    }

    // Tip de meta si el gasto es significativo
    const activeMeta = metas[0]
    let metaTip = ''
    if (activeMeta && amount && amount >= 50000) {
      const savingsNeeded = (activeMeta.monto_objetivo || 0) - (activeMeta.monto_actual || 0)
      if (savingsNeeded > 0) {
        const timesOver = Math.round(savingsNeeded / amount)
        if (timesOver > 0 && timesOver <= 50) {
          metaTip = ` 💡 ${timesOver} gastos así equivalen a tu meta "${activeMeta.nombre}".`
        }
      }
    }

    const comprobanteTip = amount && amount >= 5000
      ? '\n\n📷 ¿Tienes el ticket o comprobante? Súbelo con el botón de cámara y lo registro automático.'
      : ''
    return {
      role: 'assistant',
      content: `Listo, registro ese gasto en ${category}.${budgetTip}${metaTip}${comprobanteTip}\n<action>{"type":"ADD_TRANSACTION","monto":${amount},"tipo":"gasto","descripcion":"${desc}","categoria":"${category}","subcategoria":"${desc}","es_gasto_hormiga":false}</action>`,
    }
  }

  if (/ingreso|recibi|recibí|llego|llegó|llegaron|me\s+llego|me\s+llegó|me\s+llegaron|me\s+pagaron|pago|n[oó]mina|salario|gan/.test(text)) {
    const desc = extractDescription(text) || 'Ingreso'
    if (!amount) return { role: 'assistant', content: 'Melo. Decime cuanto ingreso y por que concepto.' }
    return {
      role: 'assistant',
      content: `Listo, pana. Registro ese ingreso.\n<action>{"type":"ADD_TRANSACTION","monto":${amount},"tipo":"ingreso","descripcion":"${desc}","categoria":"ingreso_trabajo"}</action>`,
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
    const recentMemories = await getRecentMemories(userId).catch(() => [] as string[])

    // consumer_trends puede no existir en la DB — nunca bloquea el chat
    let activeTrends: any[] | null = null;
    try {
      const { data } = await adminDB
        .from('consumer_trends')
        .select('*')
        .order('hype_score', { ascending: false })
        .limit(10);
      activeTrends = data;
    } catch {
      // tabla no existe, simplemente no hay alertas de hype
    }

    const groupNames = groups
      ?.map((row) => {
        const group = Array.isArray(row.groups) ? row.groups[0] : row.groups
        return group?.nombre
      })
      .filter(Boolean)
      .join(', ')

    // ==================================================================
    // COMPARADOR DE PRECIOS: si el usuario menciona un gasto en un producto
    // buscamos el precio de referencia en Éxito para que Lukas comente.
    // ==================================================================
    let priceContext = ''
    let priceResult: { avg_price: number; min_price: number; max_price: number } | null = null
    const latestTextRaw = messages.filter((m) => m.role === 'user').at(-1)?.content || ''
    const isSpendingMention = /gast|pagu[eé]|compr[eé]|compr[oó]|gasté|compré/i.test(latestTextRaw)
    const detectedAmount = parseAmount(latestTextRaw.toLowerCase())

    // Extraer producto: cubre "gasté en X", "compré X", "pagué el X"
    // Quita montos numéricos del texto antes de buscar el sustantivo
    const textForProduct = latestTextRaw
      .replace(/\$[\d.,]+/g, '')
      .replace(/\b\d[\d.,]*\s*(millones?|palos?|miles?|mil|miil+|k|m(?=\b))?\b/gi, '')
      .replace(/\bmiil+\b/gi, '')  // limpiar typos de unidades que quedaron sueltos
      .replace(/\bpro\b/gi, 'por') // "pro" como typo de "por"
      .trim()
    const verbPat = textForProduct.match(
      /(?:compr[eéoó]|pagu[eéoó]|ped[ií]|encarg[ué]e?)\s+(?:(?:un|una|el|la|unos|unas)\s+)?([\w\sáéíóúñü]{3,40}?)(?=\s+en\b|\s+por\b|\s*,|\s*$)/i
    )?.[1]?.trim()
    const prepPat = textForProduct.match(
      /\ben\b\s+(?:(?:un|una|el|la|los|las)\s+)?([\w\sáéíóúñü]{3,20}?)(?=\s+por\b|\s+en\b|\s*,|\s*$)/i
    )?.[1]?.trim()
    const productQuery = (verbPat ?? prepPat)?.replace(/\s+/g, ' ')

    const spendingAnalysis = isSpendingMention
      ? analyzeSpendingText(latestTextRaw)
      : { kind: 'none' as const, productQuery: null, basketItems: [], reason: 'No es gasto.' }

    // Limpiar el query del producto de números y typos antes de comparar precios
    const rawComparableQuery = spendingAnalysis.productQuery || productQuery
    const comparableProductQuery = rawComparableQuery
      ?.replace(/\b\d+[\d.,]*\s*(miil+|miles?|mil|k|m(?=\b)|millones?|palos?|pesos?|cop)?\b/gi, '')
      ?.replace(/\bmiil+\b/gi, '')
      ?.replace(/\bpro\b/gi, '')  // "pro" como typo de "por"
      ?.replace(/\s+/g, ' ')
      ?.trim()

    // Montos < $3.000 son consumo inmediato (tinto $1.5k, bus $2.95k, mecato)
    // y no son comparables contra empaques de supermercado.
    // A partir de $3.000 sí vale la pena comparar (bolsa de leche, gaseosa, pan, etc.)
    const skipPriceComparison = !detectedAmount || detectedAmount < 3_000

    if (isSpendingMention && !skipPriceComparison && spendingAnalysis.kind === 'single_product' && comparableProductQuery && comparableProductQuery.length > 3) {
      try {
        const priceJson = await fetchExitoPrice(comparableProductQuery, 6000);
        if (priceJson.success && priceJson.avg_price) {
          priceResult = { avg_price: priceJson.avg_price, min_price: priceJson.min_price!, max_price: priceJson.max_price! }
          const userPaid = detectedAmount;
          const exitoAvg = priceJson.avg_price;
          const diff = userPaid - exitoAvg;
          const diffPct = Math.round(Math.abs(diff) / exitoAvg * 100);
          const verdict = diff > exitoAvg * 0.15
            ? `CARO: el usuario pagó ${diffPct}% más caro que el promedio de Éxito`
            : diff < -exitoAvg * 0.15
            ? `BARATO: el usuario pagó ${diffPct}% más barato que el promedio de Éxito`
            : 'PRECIO JUSTO: el precio pagado está dentro del rango normal de Éxito';
          priceContext = `\n- COMPARACIÓN DE PRECIO para "${comparableProductQuery}": el usuario pagó $${userPaid.toLocaleString()} COP. En Éxito el precio promedio es $${exitoAvg.toLocaleString()} COP (rango: $${priceJson.min_price?.toLocaleString()} - $${priceJson.max_price?.toLocaleString()}). VEREDICTO: ${verdict}. USA ESTA INFO para comentar si fue una buena compra o no y si debe registrar el gasto.`
        }
      } catch {
        // No bloquear si Éxito no responde
      }
    }

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
- Tendencias de consumo (Alertas de Hype): ${activeTrends?.map((t: any) => `${t.item_name} (Hype: ${t.hype_score}/100)`).join(', ') || 'Ninguna'}${priceContext}
${recentMemories.length > 0 ? `\nMEMORIA DE CONVERSACIONES ANTERIORES:\n${recentMemories.map((m, i) => `${i + 1}. ${m}`).join('\n')}` : ''}
`

    const latestText = latestTextRaw.toLowerCase()
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
          content: `Listo, pana. Actualizo tu saldo actual a $${previousAmount.toLocaleString()}.\n<action>{"type":"SET_CURRENT_BALANCE","saldo":${previousAmount}}</action>`,
        },
      })
    }

    // ── Price comparison intercept ──
    // Si hay diferencia significativa con Éxito, genera respuesta directa
    // antes del routing deterministico para que el usuario la vea siempre.
    if (isSpendingMention && detectedAmount && spendingAnalysis.kind === 'generic' && comparableProductQuery) {
      const cleanDesc = safeActionText(comparableProductQuery.charAt(0).toUpperCase() + comparableProductQuery.slice(1))
      const category = classifyExpense(latestText)
      logAgentEvent({
        event: 'chat_price_comparison_skipped_generic_category',
        userId,
        message: latestTextRaw,
        metadata: { productQuery: comparableProductQuery, amount: detectedAmount, reason: spendingAnalysis.reason },
      })

      return NextResponse.json({
        data: {
          role: 'assistant',
          content: `Listo, te registro ${formatCOP(detectedAmount)} en "${cleanDesc}".\n\nPara compararte eso bien no me alcanza con "mercado", porque puede ser verduras, proteina, aseo o una compra grande. Si me dices 3-5 productos y cantidades, te calculo una referencia mas justa y te digo donde podrias ahorrar.\n<action>{"type":"ADD_TRANSACTION","monto":${detectedAmount},"tipo":"gasto","descripcion":"${cleanDesc}","categoria":"${category}","subcategoria":"${cleanDesc}","es_gasto_hormiga":false}</action>`,
        },
      })
    }

    if (isSpendingMention && detectedAmount && spendingAnalysis.kind === 'basket' && spendingAnalysis.basketItems.length > 1) {
      const basket = await fetchExitoBasket(spendingAnalysis.basketItems, 5000)
      const cleanDesc = safeActionText(spendingAnalysis.basketItems.join(', '))
      const category = classifyExpense(latestText)
      const pricedLines = basket.items
        .filter((item) => item.avg_price)
        .map((item) => `- ${item.query}: aprox. ${formatCOP(item.avg_price)}${item.min_price ? ` (desde ${formatCOP(item.min_price)})` : ''}`)
        .join('\n')
      const reference = basket.success && basket.estimated_total
        ? `Con precios unitarios de Exito, esos productos dan una referencia de ${formatCOP(basket.estimated_total)} sin contar cantidades exactas.\n${pricedLines}\n\nSi me pasas cantidades, te digo si esos ${formatCOP(detectedAmount)} estuvieron caros, normales o baratos.`
        : 'No encontre suficientes precios confiables para esa canasta. Si me das marcas o cantidades, lo intento mas fino.'

      logAgentEvent({
        event: 'chat_basket_price_reference',
        userId,
        message: latestTextRaw,
        metadata: { amount: detectedAmount, items: spendingAnalysis.basketItems, estimatedTotal: basket.estimated_total },
      })

      return NextResponse.json({
        data: {
          role: 'assistant',
          content: `Te registro el gasto de ${formatCOP(detectedAmount)}.\n\n${reference}\n<action>{"type":"ADD_TRANSACTION","monto":${detectedAmount},"tipo":"gasto","descripcion":"${cleanDesc}","categoria":"${category}","subcategoria":"${cleanDesc}","es_gasto_hormiga":false}</action>`,
        },
      })
    }

    if (isSpendingMention && !skipPriceComparison && detectedAmount && priceResult?.avg_price && comparableProductQuery) {
      const exitoAvg = priceResult.avg_price
      const diff = detectedAmount - exitoAvg
      const diffPct = Math.round(Math.abs(diff) / exitoAvg * 100)

      // Sanity check: if user paid < 10% or > 20x the Éxito avg, categories likely mismatch
      const ratioOk = detectedAmount >= exitoAvg * 0.1 && detectedAmount <= exitoAvg * 20;
      if (Math.abs(diff) > exitoAvg * 0.15 && ratioOk) {
        const cleanDesc = (comparableProductQuery.charAt(0).toUpperCase() + comparableProductQuery.slice(1)).trim()
        const category = classifyExpense(latestText)
        const isOverpaid = diff > 0

        // Tip basado en metas activas del usuario
        const activeMeta = metas?.[0]
        let metaTip = ''
        if (isOverpaid && activeMeta) {
          const savingsNeeded = (activeMeta.monto_objetivo || 0) - (activeMeta.monto_actual || 0)
          if (savingsNeeded > 0 && diff > 0) {
            const weeksToMeta = Math.ceil(savingsNeeded / diff)
            metaTip = ` Con la diferencia ahorrada en ${weeksToMeta} semanas llegarías a tu meta "${activeMeta.nombre}".`
          }
        }

        // Alerta de presupuesto si aplica
        const now = new Date()
        const relevantBudget = (budgets || []).find((b: any) =>
          b.mes === now.getMonth() + 1 && b.anio === now.getFullYear() && b.limite_cop > 0
        )
        let budgetWarn = ''
        if (relevantBudget) {
          const projected = (relevantBudget.gastado_cop || 0) + detectedAmount
          const pct = Math.round((projected / relevantBudget.limite_cop) * 100)
          if (pct >= 90) budgetWarn = ` ⚠️ Con esto llevas el ${pct}% de tu presupuesto de ${relevantBudget.categoria} este mes.`
          else if (pct >= 80) budgetWarn = ` Llevas el ${pct}% del presupuesto de ${relevantBudget.categoria}.`
        }

        let responseText: string
        if (isOverpaid) {
          const monthlySavings = diff * 4
          responseText = `¡Uy pana, te dejaste tumbar! 😬 Pagaste ${formatCOP(detectedAmount)} por "${cleanDesc}" y en Éxito está a ${formatCOP(exitoAvg)} (desde ${formatCOP(priceResult.min_price)}). Pagaste ${diffPct}% más caro, eso son ${formatCOP(diff)} de más.${metaTip}${budgetWarn}\n\n💡 Si compras esto seguido, comprando en Éxito ahorrarías hasta ${formatCOP(monthlySavings)} al mes. La próxima compara primero.\n\nDe todas formas te registro el gasto.\n📷 Si tienes el ticket, súbelo con la cámara para registrarlo automático.\n<action>{"type":"ADD_TRANSACTION","monto":${detectedAmount},"tipo":"gasto","descripcion":"${cleanDesc}","categoria":"${category}","subcategoria":"${cleanDesc}","es_gasto_hormiga":false}</action>`
        } else {
          responseText = `¡Buena compra, pana! 🎯 Pagaste ${formatCOP(detectedAmount)} por "${cleanDesc}" y en Éxito está a ${formatCOP(exitoAvg)}. Ahorraste ${formatCOP(Math.abs(diff))} (${diffPct}% más barato que el super). ¡Así se hace! Sigue comprando inteligente.${budgetWarn}\n\nTe registro el gasto.\n📷 Si tienes el ticket, súbelo con la cámara para registrarlo automático.\n<action>{"type":"ADD_TRANSACTION","monto":${detectedAmount},"tipo":"gasto","descripcion":"${cleanDesc}","categoria":"${category}","subcategoria":"${cleanDesc}","es_gasto_hormiga":false}</action>`
        }

        return NextResponse.json({ data: { role: 'assistant', content: responseText } })
      }
    }

    const deterministicIntent = /saldo|gast|pague|pagué|compre|compré|ingreso|recibi|recibí|llego|llegó|llegaron|me\s+llego|me\s+llegó|me\s+llegaron|me\s+pagaron|pago|n[oó]mina|salario|gan/.test(latestText)
      || previousAssistant.includes('se borrara el saldo anterior')
      || previousAssistant.includes('crear el grupo me falta')
      || /grupo|grupos|historico|histórico|comparar|comparativo/.test(latestText)

    if (!isSpendingMention && wantsMarketLookup(latestTextRaw)) {
      const symbol = extractMarketSymbol(latestTextRaw)
      if (symbol) {
        const quote = await fetchYahooQuote(symbol)
        logAgentEvent({
          event: 'chat_market_lookup_used',
          userId,
          message: latestTextRaw,
          metadata: { symbol, success: quote.success },
        })

        if (quote.success) {
          const sign = Number(quote.change || 0) >= 0 ? '+' : ''
          return NextResponse.json({
            data: {
              role: 'assistant',
              content: `${quote.symbol} esta en ${formatNumber(quote.price)} ${quote.currency || ''}. Cambio del dia: ${sign}${formatNumber(quote.change)} (${sign}${formatNumber(quote.changePercent)}%).\n\nDato de Yahoo Finance, actualizado: ${quote.timestamp ? new Date(quote.timestamp).toLocaleString('es-CO') : 'sin hora exacta'}. Esto es informacion, no recomendacion de inversion.`,
            },
          })
        }

        return NextResponse.json({
          data: {
            role: 'assistant',
            content: `No pude consultar ${symbol} en Yahoo Finance ahora mismo. ${quote.message || 'Intenta de nuevo en un momento.'}`,
          },
        })
      }
    }

    if (!isSpendingMention && wantsWebResearch(latestTextRaw)) {
      const research = await braveWebSearch(`${latestTextRaw} Colombia finanzas consumo`, 4)
      logAgentEvent({
        event: 'chat_web_search_used',
        userId,
        message: latestTextRaw,
        metadata: { query: research.query, success: research.success, count: research.results.length },
      })

      if (research.success) {
        const bullets = research.results
          .slice(0, 3)
          .map((result) => `- ${result.title}: ${result.description} (${result.url})`)
          .join('\n')
        return NextResponse.json({
          data: {
            role: 'assistant',
            content: `Busque informacion reciente y esto encontre:\n${bullets}\n\nCon eso, mi lectura rapida: si la pregunta afecta una compra o inversion, revisa precio final, fecha y fuente antes de decidir.`,
          },
        })
      }

      return NextResponse.json({
        data: {
          role: 'assistant',
          content: `Puedo investigar eso con Brave Search, pero ahora no esta disponible: ${research.message || 'sin resultados'}. Si quieres, igual puedo darte una orientacion general con lo que ya se de tus finanzas.`,
        },
      })
    }

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
    const responseText = result.response.text()

    // Guardar resumen de conversación cada 8+ mensajes (fire & forget)
    if (messages.length >= 8 && !user.isDemo) {
      summarizeAndStoreMemory(userId, [
        ...messages,
        { role: 'assistant', content: responseText },
      ]).catch(() => null)
    }

    return NextResponse.json({ data: { role: 'assistant', content: responseText } })
  } catch (error: any) {
    // Cualquier error de Gemini (401, timeout, 503, red) → fallback local
    // para que el chat nunca quede roto desde el lado del usuario.
    const isGeminiError = error.status === 401
      || error.code === 'invalid_api_key'
      || typeof error.status === 'number'
      || error.message?.includes('fetch')
      || error.message?.includes('timeout')
    if (isGeminiError) {
      return NextResponse.json({ data: localFallback(messages) })
    }
    return NextResponse.json({ error: error.message || 'Error procesando el chat' }, { status: 500 })
  }
}
