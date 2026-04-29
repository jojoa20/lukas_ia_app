import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { ensureProfile, getLukasUser } from '@/lib/lukas-user'

export async function GET() {
  const user = await getLukasUser()
  const ensuredProfile = await ensureProfile(user)
  const userId = ensuredProfile?.id || user.id
  const adminDB = createAdminClient()

  const startDate = new Date()
  startDate.setDate(startDate.getDate() - 7)

  const { data: transactions, error } = await adminDB
    .from('transactions')
    .select('*')
    .eq('user_id', userId)
    .eq('es_gasto_hormiga', true)
    .gte('fecha_transaccion', startDate.toISOString().split('T')[0])
    .order('fecha_transaccion', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const totalMonto = transactions?.reduce((acc, tx) => acc + tx.monto, 0) || 0
  const recent = transactions?.slice(0, 5) || []

  let insight = "Ojo, pana: esos gastos pequenos repetidos se estan comiendo el presupuesto."

  if (totalMonto > 0) {
    insight = `Ojo, pana: en 7 dias van $${totalMonto.toLocaleString()} en gastos pequenos. Revisa si puedes recortar los repetidos.`
  }

  return NextResponse.json({
    data: {
      total: totalMonto,
      count: transactions?.length || 0,
      recent: recent.map(t => ({
        descripcion: t.descripcion,
        monto: t.monto,
        fecha: t.fecha_transaccion
      })),
      insight
    }
  })
}
