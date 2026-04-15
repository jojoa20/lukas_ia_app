import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { searchParams } = new URL(req.url)
  const period = searchParams.get('period') || 'month'
  const alert_threshold = parseInt(searchParams.get('alert_threshold') || '100000')

  // Obtener transacciones del periodo
  const now = new Date()
  let startDate = new Date()
  if (period === 'week') startDate.setDate(now.getDate() - 7)
  else if (period === 'month') startDate.setMonth(now.getMonth() - 1)
  else if (period === 'quarter') startDate.setMonth(now.getMonth() - 3)

  const { data: transactions, error } = await supabase
    .from('transactions')
    .select('*')
    .eq('user_id', user.id)
    .gte('fecha_transaccion', startDate.toISOString().split('T')[0])

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  // Lógica de agregación para el grafo
  const categories: Record<string, any> = {}
  let total_gastado = 0
  let monto_en_fugas = 0
  let fugas_detectadas = 0

  transactions.forEach(tx => {
    if (tx.tipo === 'gasto') {
      total_gastado += tx.monto
      if (!categories[tx.categoria]) {
        categories[tx.categoria] = {
          id: `cat-${tx.categoria}`,
          type: 'category',
          label: tx.categoria,
          amount: 0,
          subcategories: {}
        }
      }
      categories[tx.categoria].amount += tx.monto

      if (tx.subcategoria) {
        if (!categories[tx.categoria].subcategories[tx.subcategoria]) {
          categories[tx.categoria].subcategories[tx.subcategoria] = {
            id: `sub-${tx.categoria}-${tx.subcategoria}`,
            type: 'subcategory',
            label: tx.subcategoria,
            amount: 0,
            isAlert: false,
            transactions: 0
          }
        }
        categories[tx.categoria].subcategories[tx.subcategoria].amount += tx.monto
        categories[tx.categoria].subcategories[tx.subcategoria].transactions += 1
        if (tx.es_gasto_hormiga) {
          // Si es gasto hormiga, marcamos alerta si supera el threshold por grupo
          // (Esta es una simplificación, en producción sería más robusto)
        }
      }
    }
  })

  const nodes: any[] = [{ id: 'center', type: 'center', label: 'Mis Gastos', amount: total_gastado, radius: 50 }]
  const links: any[] = []

  Object.values(categories).forEach((cat: any) => {
    nodes.push({
      id: cat.id,
      type: 'category',
      label: cat.label,
      amount: cat.amount,
      radius: Math.max(20, Math.sqrt(cat.amount) / 100) // ejemplo de escalado
    })
    links.push({ source: 'center', target: cat.id, value: cat.amount })

    Object.values(cat.subcategories).forEach((sub: any) => {
      const isAlert = sub.amount > alert_threshold // Simplificación
      if (isAlert) {
        monto_en_fugas += sub.amount
        fugas_detectadas += 1
      }
      
      nodes.push({
        id: sub.id,
        type: 'subcategory',
        label: sub.label,
        amount: sub.amount,
        isAlert,
        transactions: sub.transactions,
        radius: Math.max(10, Math.sqrt(sub.amount) / 150)
      })
      links.push({ source: cat.id, target: sub.id, value: sub.amount })
    })
  })

  return NextResponse.json({
    data: {
      nodes,
      links,
      summary: {
        total_gastado,
        fugas_detectadas,
        monto_en_fugas
      }
    }
  })
}
