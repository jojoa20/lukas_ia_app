import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { ensureProfile, getLukasUser } from '@/lib/lukas-user'

function normalizeCategory(category?: string, subcategory?: string) {
  const sub = subcategory || ''
  if (sub.startsWith('Fijos:')) return 'Fijos'
  if (sub.startsWith('Salidas:')) return 'Salidas'
  if (sub.startsWith('Ahorro:')) return 'Ahorro'
  if (sub.startsWith('Susc.:')) return 'Susc.'
  if (sub.startsWith('Hormiga:')) return 'Salidas'

  const value = (category || '').toLowerCase()
  if (value.includes('fijo') || value.includes('arriendo') || value.includes('servicio') || value.includes('mercado')) return 'Fijos'
  if (value.includes('ahorro') || value.includes('meta') || value.includes('inversion')) return 'Ahorro'
  if (value.includes('susc') || value.includes('netflix') || value.includes('spotify') || value.includes('prime')) return 'Susc.'
  return 'Salidas'
}

export async function GET(req: NextRequest) {
  const user = await getLukasUser()
  const ensuredProfile = await ensureProfile(user)
  const userId = ensuredProfile?.id || user.id
  const adminDB = createAdminClient()

  const { searchParams } = new URL(req.url)
  const period = searchParams.get('period') || 'month'
  const alert_threshold = parseInt(searchParams.get('alert_threshold') || '100000')

  const now = new Date()
  const startDate = new Date()
  if (period === 'week') startDate.setDate(now.getDate() - 7)
  else if (period === 'month') startDate.setMonth(now.getMonth() - 1)
  else if (period === 'quarter') startDate.setMonth(now.getMonth() - 3)

  const { data: transactions, error } = await adminDB
    .from('transactions')
    .select('*')
    .eq('user_id', userId)
    .gte('fecha_transaccion', startDate.toISOString().split('T')[0])

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const categories: Record<string, any> = {}
  let total_gastado = 0
  let monto_en_fugas = 0
  let fugas_detectadas = 0

  transactions?.forEach((tx) => {
    if (tx.tipo !== 'gasto') return

    total_gastado += tx.monto
    const categoryName = normalizeCategory(tx.categoria, tx.subcategoria)
    const subName = (tx.subcategoria || tx.descripcion || tx.categoria || 'Movimiento').replace(/^(Fijos|Salidas|Ahorro|Susc\.|Hormiga):\s*/, '')

    if (!categories[categoryName]) {
      categories[categoryName] = {
        id: `cat-${categoryName}`,
        type: 'category',
        label: categoryName,
        amount: 0,
        subcategories: {}
      }
    }

    categories[categoryName].amount += tx.monto

    if (!categories[categoryName].subcategories[subName]) {
      categories[categoryName].subcategories[subName] = {
        id: `sub-${categoryName}-${subName}`.replace(/\s+/g, '-'),
        type: 'subcategory',
        label: subName,
        amount: 0,
        isAlert: false,
        isHormiga: false,
        transactions: 0
      }
    }

    const sub = categories[categoryName].subcategories[subName]
    sub.amount += tx.monto
    sub.transactions += 1
    sub.isHormiga = sub.isHormiga || tx.es_gasto_hormiga
  })

  const nodes: any[] = [{ id: 'center', type: 'center', label: 'Mis Gastos', amount: total_gastado, radius: 50 }]
  const links: any[] = []

  Object.values(categories).forEach((cat: any) => {
    nodes.push({
      id: cat.id,
      type: 'category',
      label: cat.label,
      amount: cat.amount,
      radius: Math.max(20, Math.sqrt(cat.amount) / 100)
    })
    links.push({ source: 'center', target: cat.id, value: cat.amount })

    Object.values(cat.subcategories).forEach((sub: any) => {
      const isAlert = sub.amount > alert_threshold || sub.isHormiga || sub.transactions >= 3
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
        isHormiga: sub.isHormiga,
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
