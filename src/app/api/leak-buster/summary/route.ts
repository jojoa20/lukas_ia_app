import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const now = new Date()
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0]

  const { data: transactions } = await supabase
    .from('transactions')
    .select('*')
    .eq('user_id', user.id)
    .gte('fecha_transaccion', firstDay)

  const expenses = transactions?.filter(t => t.tipo === 'gasto') || []
  const hormoneExpenses = expenses.filter(t => t.es_gasto_hormiga)
  
  const total_gastado = expenses.reduce((acc, t) => acc + t.monto, 0)
  const monto_fugas = hormoneExpenses.reduce((acc, t) => acc + t.monto, 0)

  return NextResponse.json({
    data: {
      total_gastos_mes: total_gastado,
      fugas_detectadas: hormoneExpenses.length,
      monto_fugas,
      ahorro_potencial: monto_fugas * 0.8 // Estimación
    }
  })
}
