import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { searchParams } = new URL(req.url)
  const days = parseInt(searchParams.get('days') || '7')

  const startDate = new Date()
  startDate.setDate(startDate.getDate() - days)

  const { data: transactions, error } = await supabase
    .from('transactions')
    .select('*')
    .eq('user_id', user.id)
    .eq('es_gasto_hormiga', true)
    .gte('fecha_transaccion', startDate.toISOString().split('T')[0])

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  // Agrupar por subcategoría o categoría
  const grupos: Record<string, any> = {}
  let total_hormiga = 0

  transactions.forEach(tx => {
    const key = tx.subcategoria || tx.categoria
    total_hormiga += tx.monto
    if (!grupos[key]) {
      grupos[key] = {
        grupo: key,
        cantidad: 0,
        total: 0,
        promedio: 0,
        ultima_fecha: tx.fecha_transaccion
      }
    }
    grupos[key].cantidad += 1
    grupos[key].total += tx.monto
    if (new Date(tx.fecha_transaccion) > new Date(grupos[key].ultima_fecha)) {
      grupos[key].ultima_fecha = tx.fecha_transaccion
    }
  })

  // Calcular promedios
  Object.values(grupos).forEach((g: any) => {
    g.promedio = g.total / g.cantidad
  })

  // Ordenar por total descendente y filtrar grupos significativos (> 10000 COP)
  const desglose = Object.values(grupos)
    .filter((g: any) => g.total > 10000)
    .sort((a: any, b: any) => b.total - a.total)

  return NextResponse.json({
    data: {
      periodo_dias: days,
      total_hormiga,
      cantidad_transacciones: transactions.length,
      impacto_finscore: Math.floor(total_hormiga / 5000) * -1, // Simple rule match
      desglose,
      mensaje_ia: `¡Ojo parcero! En los últimos ${days} días has gastado $${total_hormiga.toLocaleString()} en gastos hormiga. Eso te quita impulso para tus metas.`
    }
  })
}
