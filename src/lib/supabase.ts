import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos de la base de datos de Lukas
export type Profile = {
  id: string
  full_name: string
  email: string
  rol: 'free' | 'premium'
  pais: string
  moneda_base: string
  ingreso_mensual_est: number
  meta_ahorro_mensual: number
  finscore_actual: number
  racha_actual_dias: number
  created_at?: string
  updated_at?: string
}

export type Transaction = {
  id?: string
  user_id: string
  tipo: 'ingreso' | 'gasto'
  monto: number
  categoria: string
  subcategoria?: string
  comercio?: string
  descripcion?: string
  metodo_entrada: 'manual' | 'texto' | 'audio' | 'ocr_imagen'
  confianza_ia?: number
  confirmada_por_usuario?: boolean
  es_gasto_hormiga?: boolean
  fecha_transaccion?: string
  created_at?: string
}

export type Meta = {
  id?: string
  user_id: string
  nombre: string
  tipo: string
  monto_objetivo: number
  monto_actual: number
  fecha_objetivo?: string
  estado: 'activa' | 'completada' | 'cancelada'
  emoji?: string
  bonus_finscore?: number
  ahorro_mensual_requerido?: number
}

export type Presupuesto = {
  id?: string
  user_id: string
  anio: number
  mes: number
  categoria: string
  limite_cop: number
  gastado_cop: number
  alerta_80pct_enviada?: boolean
  sobrepasado?: boolean
}

export type FinScoreHistory = {
  id?: string
  user_id: string
  fecha: string
  score: number
  delta: number
  racha_dia?: number
  total_gastos_dia?: number
  total_ingresos_dia?: number
  gastos_hormiga_dia?: number
  detalle_cambio?: object
}
