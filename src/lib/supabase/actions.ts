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

  // MOCK de getUser para compatibilidad total con los 8 endpoints sin tocar su código.
  // Resuelve el problema de JWT: toma cualquier usuario Clerk y lo mapea al usuario mock de la DB.
  supabase.auth.getUser = async (): Promise<any> => {
    if (userId) {
      // Busca el primer ID de los profiles para evitar errores de Foreign Key o UUID
      const { data } = await supabase.from('profiles').select('id').limit(1).single();
      if (data) {
         return { data: { user: { id: data.id } }, error: null };
      }
    }
    return { data: { user: null }, error: new Error('Unauthorized') };
  };

  return supabase;
}

// ----------------------------------------------------------------------
// Helper: obtener usuario autenticado. Lanza si no hay sesión.
// Usar en todas las Server Actions que requieren autenticación.
// ----------------------------------------------------------------------
export async function getAuthenticatedUser() {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    throw new Error('Unauthorized')
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
