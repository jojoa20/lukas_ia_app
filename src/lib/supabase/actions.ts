'use server'

import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

import { auth } from '@clerk/nextjs/server'

// Generic helper to get a Supabase server client inside Server Actions/Routes
export async function createClient() {
  const cookieStore = await cookies()
  const { userId } = await auth();

  // Usamos el SERVICE ROLE KEY para evadir el RLS en el MVP
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

// ----------------------------------------------------------------------
// Helper: obtener usuario autenticado. Lanza si no hay sesión.
// Usar en todas las Server Actions que requieren autenticación.
// ----------------------------------------------------------------------
export async function getAuthenticatedUser() {
  const { userId } = await auth();
  const supabase = await createClient();

  if (!userId) {
    throw new Error('Unauthorized');
  }

  // Buscamos el perfil real por el ID de Clerk
  // NOTA: Asegúrate de añadir la columna 'clerk_id' en Supabase.
  let { data: user, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('clerk_id', userId)
    .single();

  // Si no encuentra el perfil (código PGRST116), lo creamos automáticamente
  if (error && error.code === 'PGRST116') {
    const newId = crypto.randomUUID();
    const { data: newUser, error: insertError } = await supabase
      .from('profiles')
      .insert([{ id: newId, clerk_id: userId, finscore_actual: 800 }])
      .select()
      .single();
      
    if (insertError) {
      console.error('Error auto-creating profile:', insertError);
      throw new Error('Failed to auto-create profile');
    }
    user = newUser;
  } else if (error || !user) {
    console.error('Error fetching profile:', error);
    throw new Error('Profile not found for this Clerk ID');
  }

  return { supabase, user }
}

// ----------------------------------------------------------------------
// SYSTEM TOOLS FOR THE GPT ASSISTANT
// Estas funciones son invocadas por el OpenAI Assistant vía tool-calling
// desde /api/chat. Ahora usan auth real en lugar de dummyUserId.
// ----------------------------------------------------------------------

export async function getFinscore() {
  const { supabase, user } = await getAuthenticatedUser()

  const { data, error } = await supabase
    .from('profiles')
    .select('finscore_actual')
    .eq('id', user.id)
    .single()

  if (error || !data) {
    return { finScore: 0, mensaje: "Uy parcero, no pude leer tu score. Revisa tu conexión." }
  }

  return {
    finScore: data.finscore_actual,
    mensaje: `Tu FinScore actual es ${data.finscore_actual}. Vas bien pero cuidado con esas saliditas de fin de semana.`
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

  if (error) {
    console.error('Error creating meta:', error)
    return { success: false, error: error.message }
  }

  return {
    success: true,
    meta: data?.[0],
    mensaje: `Listo el pollo, meta '${args.nombre}' creada con un objetivo de $${args.monto}. ¡A ahorrar pues!`
  }
}

export async function addGastoHormiga(args: { monto: number, descripcion: string }) {
  const { supabase, user } = await getAuthenticatedUser()

  // -1 punto por cada $5.000 gastados en hormigas.
  const impacto = Math.max(1, Math.floor(args.monto / 5000))

  const { data, error } = await supabase
    .from('transactions')
    .insert([
      {
        user_id: user.id,
        tipo: 'gasto',
        monto: args.monto,
        descripcion: args.descripcion,
        es_gasto_hormiga: true,
        metodo_entrada: 'ai'
      }
    ])
    .select()

  if (error) {
    console.error('Error adding gasto:', error)
    return { success: false, error: error.message }
  }

  return {
    success: true,
    impactoFinScore: -impacto,
    mensaje: `Uy zona... Registré un gasto hormiga de $${args.monto} por '${args.descripcion}'. Esto te baja el FinScore en ${impacto} puntos.`
  }
}

export async function registrarTransaccion(args: { monto: number, tipo: 'ingreso'|'gasto', categoria: string, descripcion: string }) {
  const { supabase, user } = await getAuthenticatedUser();

  // Re-utilizamos el contexto lógico de Detección de Gasto Hormiga (Grafo-Lite)
  let es_hormiga = false;
  if (args.tipo === 'gasto' && args.monto < 50000) {
    const descNormalizada = args.descripcion.toLowerCase();
    const impulseWords = ['cafe', 'café', 'tinto', 'empanada', 'antojo', 'dulce', 'pola', 'helado', 'snack', 'uber', 'rappi'];
    const isSuspect = ['alimentacion', 'entretenimiento', 'otros', 'transporte'].includes(args.categoria);
    
    if (impulseWords.some(w => descNormalizada.includes(w)) || isSuspect) {
      es_hormiga = true;
    }
  }

  const { data, error } = await supabase
    .from('transactions')
    .insert([
      {
        user_id: user.id,
        tipo: args.tipo,
        monto: args.monto,
        categoria: args.categoria,
        descripcion: args.descripcion,
        es_gasto_hormiga: es_hormiga,
        metodo_entrada: 'ai'
      }
    ])
    .select();

  if (error) {
    console.error('Error registrando transacción:', error);
    return { success: false, error: error.message };
  }

  if (es_hormiga) {
    return {
      success: true,
      mensaje: `¡Listo! Registré tu ${args.tipo} de $${args.monto} en ${args.categoria}. Pilla que esto lo detecté como Gasto Hormiga 🐜, ojo con eso.`
    };
  }

  return {
    success: true,
    mensaje: `¡Listo, parcero! Tu ${args.tipo} de $${args.monto} por '${args.descripcion}' quedó anotado en los libros.`
  };
}
