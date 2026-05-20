import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { getLukasUser } from '@/lib/lukas-user'
import { createAdminClient } from '@/lib/supabase/admin'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'dummy_key_for_build')

const RECEIPT_PROMPT = `Eres un experto en comprobantes de pago colombianos (Nequi, Davivienda, Bancolombia, Claro, ETB, Gas Natural, facturas EPM, recibos de tienda).

Analiza esta imagen y extrae los datos exactamente en este JSON:
{
  "monto": número (solo el monto total principal, sin puntos ni comas, ej: 45000),
  "fecha": "YYYY-MM-DD" (si no hay año usa 2026),
  "comercio": string (nombre del comercio, app o entidad pagada),
  "descripcion": string (descripción corta del gasto, ej: "Domicilio Rappi", "Recibo gas enero"),
  "tipo": "gasto" o "ingreso",
  "banco": string (Nequi, Davivienda, Bancolombia, Efectivo, Claro, etc.),
  "referencia": string o null (número de referencia/aprobación si aparece),
  "confianza": número 0-100
}

Reglas críticas:
- Devuelve SOLO el JSON, sin markdown, sin explicaciones
- Si el monto tiene puntos como separador de miles (ej: 45.000), conviértelo a número (45000)
- confianza 90-100: monto y comercio completamente legibles
- confianza 70-89: monto legible pero otros campos parciales
- confianza < 70: monto no claro
- Si no es un comprobante de pago, devuelve {"error": "No es un comprobante de pago", "confianza": 0}`

function classifyReceiptExpense(comercio: string, descripcion: string): string {
  const text = `${comercio} ${descripcion}`.toLowerCase()
  if (/netflix|spotify|prime|hbo|disney|claro|tigo|movistar|une|suscripcion|mensualidad/.test(text)) return 'Susc.'
  if (/arriendo|renta|servicios|luz|agua|gas|internet|epm|acueducto|alcantarillado|cuota|prestamo|credito/.test(text)) return 'Fijos'
  if (/ingreso|nomina|nómina|salario|transferencia|recibido/.test(text)) return 'Ingresos'
  return 'Salidas'
}

export async function POST(req: NextRequest) {
  try {
    const user = await getLukasUser()

    const { imageBase64, mimeType } = await req.json()

    if (!imageBase64 || !mimeType) {
      return NextResponse.json({ error: 'Falta imagen' }, { status: 400 })
    }

    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'dummy_key_for_build') {
      return NextResponse.json({ error: 'API key no configurada' }, { status: 503 })
    }

    // Guardar imagen en Supabase Storage (fire-and-forget, no bloquea si falla)
    let receiptUrl: string | null = null
    try {
      const adminDB = createAdminClient()
      const ext = mimeType === 'application/pdf' ? 'pdf' : mimeType.split('/')[1] || 'jpg'
      const path = `${user.id}/${Date.now()}.${ext}`
      const buffer = Buffer.from(imageBase64, 'base64')
      const { error: uploadError } = await adminDB.storage
        .from('receipts')
        .upload(path, buffer, { contentType: mimeType, upsert: false })
      if (!uploadError) {
        const { data: urlData } = adminDB.storage.from('receipts').getPublicUrl(path)
        receiptUrl = urlData?.publicUrl || null
      }
    } catch {
      // No bloquea — imagen procesada igual sin guardar
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

    const result = await model.generateContent({
      contents: [{
        role: 'user',
        parts: [
          { inlineData: { mimeType, data: imageBase64 } },
          { text: RECEIPT_PROMPT },
        ],
      }],
    })

    const raw = result.response.text().trim()
    const jsonStr = raw.replace(/^```json\s*/i, '').replace(/\s*```$/, '').trim()
    const extracted = JSON.parse(jsonStr)

    if (extracted.error) {
      return NextResponse.json({ error: extracted.error }, { status: 422 })
    }

    const categoria = classifyReceiptExpense(extracted.comercio || '', extracted.descripcion || '')

    return NextResponse.json({
      data: {
        monto: Number(extracted.monto),
        fecha: extracted.fecha,
        comercio: extracted.comercio,
        descripcion: extracted.descripcion,
        tipo: extracted.tipo || 'gasto',
        banco: extracted.banco,
        referencia: extracted.referencia,
        confianza: extracted.confianza,
        categoria,
        receipt_url: receiptUrl,
      },
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Error procesando el comprobante' },
      { status: 500 }
    )
  }
}
