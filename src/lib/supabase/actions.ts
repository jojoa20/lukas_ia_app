'use server'

import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { auth } from '@clerk/nextjs/server'

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
// SYSTEM CONTEXT (Intelligence Memory)
// Aggregates data from different silos to create a unified narrative.
// ----------------------------------------------------------------------

export async function getSystemContext() {
  const { supabase, user } = await getAuthenticatedUser();

  // 1. Current Health (FinScore)
  const score = user.finscore_actual;

  // 2. Recent Leaks (Last 7 days)
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  
  const { data: transactions } = await supabase
    .from('transactions')
    .select('*')
    .eq('user_id', user.id)
    .gte('created_at', sevenDaysAgo.toISOString());

  const leaks = transactions?.filter(t => t.es_gasto_hormiga) || [];
  const totalLeakAmount = leaks.reduce((sum, t) => sum + t.monto, 0);

  // 3. Active Goal
  const { data: meta } = await supabase
    .from('metas')
    .select('*')
    .eq('user_id', user.id)
    .eq('estado', 'activa')
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  return {
    score,
    leaks: {
      count: leaks.length,
      amount: totalLeakAmount,
      recent: leaks.slice(0, 3).map(l => l.descripcion)
    },
    meta: meta ? {
      nombre: meta.nombre,
      progreso: (meta.monto_actual / meta.monto_objetivo) * 100
    } : null,
    user_name: user.full_name
  };
}

// ----------------------------------------------------------------------
// SYSTEM TOOLS FOR THE AI ASSISTANT
// ----------------------------------------------------------------------

export async function getFinscore() {
  const { supabase, user } = await getAuthenticatedUser()
  return {
    finScore: user.finscore_actual,
    mensaje: `Tu salud financiera está en ${user.finscore_actual} puntos. Cada acción cuenta para mantener este ritmo.`
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

  let impacto = 0;
  if (args.tipo === 'gasto') {
    impacto = args.es_gasto_hormiga 
      ? -Math.max(1, Math.floor(args.monto / 5000)) 
      : -Math.max(1, Math.floor(args.monto / 10000));
  } else {
    impacto = Math.max(1, Math.floor(args.monto / 100000));
  }

  const { data: tx, error: txError } = await supabase
    .from('transactions')
    .insert([{
      user_id: user.id,
      tipo: args.tipo,
      monto: args.monto,
      descripcion: args.descripcion,
      categoria: args.categoria || 'Varios',
      es_gasto_hormiga: args.es_gasto_hormiga || false,
      metodo_entrada: 'ai'
    }])
    .select()

  if (txError) return { success: false, error: txError.message };

  const nuevoScore = Math.max(0, Math.min(10000, user.finscore_actual + impacto));
  await supabase
    .from('profiles')
    .update({ finscore_actual: nuevoScore })
    .eq('id', user.id);

  return {
    success: true,
    impactoFinScore: impacto,
    nuevoScore,
    mensaje: `Registro procesado. ${args.descripcion} por $${args.monto.toLocaleString()}. Tu salud financiera ha sido ajustada por ${impacto} puntos.`
  }
}

export async function createMeta(args: { nombre: string, monto: number }) {
  const { supabase, user } = await getAuthenticatedUser()

  const { data, error } = await supabase
    .from('metas')
    .insert([{
      user_id: user.id,
      nombre: args.nombre,
      monto_objetivo: args.monto,
      monto_actual: 0,
      estado: 'activa',
      tipo: 'ahorro'
    }])
    .select()

  if (error) return { success: false, error: error.message };

  return {
    success: true,
    meta: data?.[0],
    mensaje: `Meta '${args.nombre}' activada. El sistema comenzará a priorizar este objetivo en tus análisis.`
  }
}

export async function getWeeklyReflection() {
  const context = await getSystemContext();
  
  let insight = "Tu ritmo financiero es estable y consciente.";
  let recomendacion = "Mantén la consistencia en el registro para fortalecer tu memoria financiera.";

  if (context.leaks.count > 3) {
    insight = `He detectado un patrón de ${context.leaks.count} fugas esta semana (aprox. $${context.leaks.amount.toLocaleString()}).`;
    recomendacion = `Reducir estos micro-gastos impulsivos podría acelerar tu meta '${context.meta?.nombre || 'principal'}' significativamente.`;
  } else if (context.score < 700) {
    insight = "Tu salud financiera requiere atención estratégica.";
    recomendacion = "Prioriza el ahorro este fin de semana para estabilizar tu score.";
  }

  return {
    insight,
    positivo: context.score > 800 ? "Tu nivel de disciplina es excepcional." : "Mantienes un registro activo de tus movimientos.",
    recomendacion,
    meta_progreso: context.meta ? `Tu meta '${context.meta.nombre}' está al ${context.meta.progreso.toFixed(0)}%.` : "No tienes metas activas. Definir una te daría mayor propósito."
  }
}
