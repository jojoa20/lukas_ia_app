import { createAdminClient } from './supabase/admin'

/**
 * Calcula y actualiza el FinScore de un usuario basado en eventos
 */
export async function updateFinScore(userId: string, event: 'gasto' | 'ingreso' | 'meta_cumplida' | 'hormiga') {
  const supabase = createAdminClient()
  
  // 1. Obtener perfil
  const { data: profile } = await supabase
    .from('profiles')
    .select('finscore_actual')
    .eq('id', userId)
    .single()
    
  if (!profile) return

  // 2. Definir deltas
  const deltas = {
    gasto: -5,
    ingreso: 10,
    meta_cumplida: 50,
    hormiga: -15
  }

  const delta = deltas[event] || 0
  const nextScore = Math.max(0, Math.min(1000, profile.finscore_actual + delta))

  // 3. Actualizar perfil e historia
  await Promise.all([
    supabase.from('profiles').update({ finscore_actual: nextScore }).eq('id', userId),
    supabase.from('finscore_history').insert({
      user_id: userId,
      score: nextScore,
      delta: delta,
      fecha: new Date().toISOString().split('T')[0]
    })
  ])

  return nextScore
}
