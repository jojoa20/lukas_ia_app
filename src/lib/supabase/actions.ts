'use server'

import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { auth } from '@clerk/nextjs/server'

// Generic helper to get a Supabase server client inside Server Actions/Routes
export async function createClient() {
  const cookieStore = await cookies()
  const { userId } = await auth();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        get(name: string) { return cookieStore.get(name)?.value },
        set(name, value, options) { try { cookieStore.set({ name, value, ...options }) } catch {} },
        remove(name, options) { try { cookieStore.delete({ name, ...options }) } catch {} },
      },
    }
  );

  return supabase;
}

// Helper: obtener usuario autenticado.
export async function getAuthenticatedUser() {
  const { userId } = await auth();
  const supabase = await createClient();

  if (!userId) {
    throw new Error('Unauthorized');
  }

  const { data: user, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('clerk_id', userId)
    .single();

  if (error || !user) {
    console.error('Error fetching profile:', error);
    throw new Error('Profile not found for this Clerk ID');
  }

  return { supabase, user }
}

// ----------------------------------------------------------------------
// SYSTEM TOOLS FOR THE AI ASSISTANT
// ----------------------------------------------------------------------

export async function getFinscore() {
  const { supabase, user } = await getAuthenticatedUser()

  const { data, error } = await supabase
    .from('profiles')
    .select('finscore_actual')
    .eq('id', user.id)
    .single()

  if (error || !data) {
    return { finScore: 0, mensaje: "No logré sincronizar tu salud financiera actual." }
  }

  return {
    finScore: data.finscore_actual,
    mensaje: `Tu nivel de salud financiera es de ${data.finscore_actual} puntos. Mantener la consistencia es clave.`
  }
}

export async function addTransaction(args: { 
  monto: number, 
  descripcion: string, 
  tipo: 'gasto' | 'ingreso',
  categoria?: string,
  es_gasto_hormiga?: boolean
}) {
  const { supabase, user } = await getAuthenticatedUser()

  // Calcular impacto en FinScore
  let impacto = 0;
  if (args.tipo === 'gasto') {
    impacto = args.es_gasto_hormiga 
      ? -Math.max(1, Math.floor(args.monto / 5000)) 
      : -Math.max(1, Math.floor(args.monto / 10000));
  } else {
    impacto = Math.max(1, Math.floor(args.monto / 100000));
  }

  // Insertar transacción
  const { data: tx, error: txError } = await supabase
    .from('transactions')
    .insert([
      {
        user_id: user.id,
        tipo: args.tipo,
        monto: args.monto,
        descripcion: args.descripcion,
        categoria: args.categoria || 'Varios',
        es_gasto_hormiga: args.es_gasto_hormiga || false,
        metodo_entrada: 'ai'
      }
    ])
    .select()

  if (txError) return { success: false, error: txError.message };

  // Actualizar FinScore dinámicamente
  const nuevoScore = Math.max(0, Math.min(10000, user.finscore_actual + impacto));
  await supabase
    .from('profiles')
    .update({ finscore_actual: nuevoScore })
    .eq('id', user.id);

  return {
    success: true,
    impactoFinScore: impacto,
    nuevoScore,
    mensaje: `Entendido. He registrado ${args.descripcion} por $${args.monto}. Tu salud financiera ha sido ajustada por ${impacto} puntos.`
  }
}

export async function createMeta(args: { nombre: string, monto: number }) {
  const { supabase, user } = await getAuthenticatedUser()

  const { data, error } = await supabase
    .from('metas')
    .insert([
      {
        user_id: user.id,
        nombre: args.nombre,
        monto_objetivo: args.monto,
        monto_actual: 0,
        estado: 'activa',
        tipo: 'ahorro'
      }
    ])
    .select()

  if (error) return { success: false, error: error.message };

  return {
    success: true,
    meta: data?.[0],
    mensaje: `He configurado tu nueva meta: '${args.nombre}' con un objetivo de $${args.monto}. Comenzaremos a monitorear tu progreso.`
  }
}

// Weekly Reflection Engine (Simplified for V1)
export async function getWeeklyReflection() {
  const { supabase, user } = await getAuthenticatedUser()

  // Obtener transacciones de los últimos 7 días
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const { data: transactions, error } = await supabase
    .from('transactions')
    .select('*')
    .eq('user_id', user.id)
    .gte('created_at', sevenDaysAgo.toISOString());

  if (error || !transactions) return { insight: "Necesito más datos para generar una reflexión significativa." };

  const totalGasto = transactions
    .filter(t => t.tipo === 'gasto')
    .reduce((sum, t) => sum + t.monto, 0);

  const hormigaCount = transactions.filter(t => t.es_gasto_hormiga).length;

  // Generar insight basado en datos reales
  let insight = "Tu semana ha sido estable.";
  let recomendacion = "Mantén el ritmo de registro para detectar patrones.";

  if (hormigaCount > 3) {
    insight = `He detectado ${hormigaCount} gastos hormiga esta semana.`;
    recomendacion = "Pequeños ajustes en consumos diarios podrían acelerar tus metas significativamente.";
  } else if (totalGasto > 500000) {
    insight = "Esta semana tu volumen de gasto fue superior al promedio.";
    recomendacion = "Revisar las categorías de mayor impacto te dará mayor claridad estratégica.";
  }

  return {
    insight,
    positivo: "Tu racha de registro demuestra una alta consciencia financiera.",
    recomendacion,
    meta_progreso: "Estás en camino a cumplir tu meta principal."
  }
}
