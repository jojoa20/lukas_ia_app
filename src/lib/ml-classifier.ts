/**
 * ml-classifier.ts — Cliente TypeScript para el microservicio ML de Lukas
 * Llama al servicio FastAPI en puerto 8001 para clasificar transacciones.
 * Si el servicio no está disponible, usa el fallback regex (siempre disponible).
 */

const ML_SERVICE_URL = process.env.ML_SERVICE_URL || 'http://localhost:8001'
const ML_TIMEOUT_MS  = 1500  // timeout corto para no bloquear el chat

export interface MLClassification {
  categoria: string
  es_hormiga: boolean
  confidence: number
  source: 'ml' | 'fallback'
}

/**
 * Clasifica una transacción usando el modelo ML.
 * Fallback automático si el servicio no responde en 1.5s.
 */
export async function classifyExpenseML(
  descripcion: string,
  monto: number
): Promise<MLClassification> {
  try {
    const res = await fetch(`${ML_SERVICE_URL}/predict`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ descripcion, monto }),
      signal: AbortSignal.timeout(ML_TIMEOUT_MS),
    })
    if (!res.ok) throw new Error(`ML service ${res.status}`)
    const data = await res.json()
    return {
      categoria: data.categoria,
      es_hormiga: data.es_hormiga,
      confidence: data.confidence,
      source: 'ml',
    }
  } catch {
    // Fallback silencioso — no bloquea el chat
    return classifyExpenseFallback(descripcion, monto)
  }
}

/**
 * Fallback regex — siempre disponible, sin dependencias externas.
 * Misma lógica que classifyExpense() en chat/route.ts.
 */
export function classifyExpenseFallback(
  descripcion: string,
  monto: number
): MLClassification {
  const t = descripcion.toLowerCase()
  let categoria = 'otro'
  let es_hormiga = false

  if (/ingreso|nomina|nómina|salario|quincena|sueldo/.test(t))      categoria = 'ingreso_trabajo'
  else if (/freelance|venta|ganancia|cobr[eé]/.test(t))             categoria = 'ingreso_extra'
  else if (/transferencia|nequi|daviplata/.test(t))                  categoria = 'transferencia'
  else if (/arriendo|renta|administracion|hipoteca/.test(t))         categoria = 'vivienda'
  else if (/luz|agua|\bgas\b|internet|epm|vanti|acueducto|energia/.test(t)) categoria = 'servicios'
  else if (/netflix|spotify|prime|hbo|disney|suscripcion|mensualidad/.test(t)) categoria = 'tecnologia'
  else if (/uber|didi|taxi|bus|metro|transmilenio|pasaje|gasolina/.test(t)) categoria = 'transporte'
  else if (/medico|farmacia|drogueria|medicina|salud|eps/.test(t))   categoria = 'salud'
  else if (/colegio|universidad|curso|libro|matricula/.test(t))      categoria = 'educacion'
  else if (/ropa|camisa|pantalon|zapatos|tenis/.test(t))             categoria = 'ropa'
  else if (/gimnasio|gym|deporte|crossfit/.test(t))                  categoria = 'deporte'
  else if (/ahorro|ahorr/.test(t))                                   categoria = 'ahorro'
  else if (/mercado|cafe|tinto|almuerzo|comida|restaurante|domicilio|empanada|hamburguesa/.test(t)) categoria = 'alimentacion'
  else if (/cine|bar|concierto|rumbear|viaje|plan/.test(t))          categoria = 'entretenimiento'

  if (monto < 80_000 && /cafe|tinto|empanada|snack|chito|papas|gaseosa|mecato|domicilio|uber|taxi/.test(t)) {
    es_hormiga = true
  }

  return { categoria, es_hormiga, confidence: 0.6, source: 'fallback' }
}
