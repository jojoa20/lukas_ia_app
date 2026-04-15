import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { searchParams } = new URL(req.url)
  const now = new Date()
  const year = parseInt(searchParams.get('year') || now.getFullYear().toString())
  const month = parseInt(searchParams.get('month') || (now.getMonth() + 1).toString())

  const { data, error } = await supabase
    .from('presupuestos')
    .select('*')
    .eq('user_id', user.id)
    .eq('anio', year)
    .eq('mes', month)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const total_presupuestado = data.reduce((acc, b) => acc + b.limite_cop, 0)
  const total_gastado = data.reduce((acc, b) => acc + (b.gastado_cop || 0), 0)
  const porcentaje_total = total_presupuestado > 0 ? (total_gastado / total_presupuestado) * 100 : 0

  return NextResponse.json({
    data: {
      year,
      month,
      total_presupuestado,
      total_gastado,
      porcentaje_total,
      categorias: data.map(b => ({
        categoria: b.categoria,
        limite_cop: b.limite_cop,
        gastado_cop: b.gastado_cop,
        porcentaje_usado: b.limite_cop > 0 ? (b.gastado_cop / b.limite_cop) * 100 : 0,
        sobrepasado: b.sobrepasado
      }))
    }
  })
}
