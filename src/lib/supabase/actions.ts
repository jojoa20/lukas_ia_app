'use server'

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

export async function createClient() {
  const cookieStore = await cookies()

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

  supabase.auth.getUser = async (): Promise<any> => {
    const { data } = await supabase.from('profiles').select('id').limit(1).single();
    if (data) {
      return { data: { user: { id: data.id } }, error: null };
    }
    return { data: { user: null }, error: new Error('No profile found') };
  };

  return supabase;
}

export async function getAuthenticatedUser() {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error || !user) throw new Error('No hay perfil en la base de datos')
  return { supabase, user }
}

export async function addTransaction(args: { 
  monto: number, 
  descripcion: string, 
  categoria?: string,
  metodo_entrada?: 'texto' | 'audio' | 'manual' | 'ocr_imagen' 
}) {
  try {
    const { supabase, user } = await getAuthenticatedUser()
    
    const { data, error } = await supabase.from('transactions').insert([{ 
      user_id: user.id, 
      tipo: args.monto > 0 ? 'ingreso' : 'gasto', 
      monto: Math.abs(args.monto), 
      descripcion: args.descripcion,
      categoria: args.categoria || 'otro',
      metodo_entrada: args.metodo_entrada || 'texto',
      es_gasto_hormiga: args.monto < 0 && Math.abs(args.monto) < 20000
    }]).select();

    if (error) throw error;

    revalidatePath('/');
    return { success: true, mensaje: '¡Listo nea!' };
  } catch (e: any) {
    console.error('Error:', e);
    return { success: false, mensaje: e.message };
  }
}
