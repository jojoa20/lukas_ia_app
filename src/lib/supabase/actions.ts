"use server";
import { createAdminClient } from './admin';
import { ensureProfile, getLukasUser } from '@/lib/lukas-user';

export async function createClient() {
  return createAdminClient();
}

export async function getAuthenticatedUser() {
  const user = await getLukasUser();
  const ensuredProfile = await ensureProfile(user);

  return {
    supabase: createAdminClient(),
    user: {
      ...user,
      id: ensuredProfile?.id || user.id,
    },
  };
}

export async function addTransaction(args: { monto: number, tipo: 'ingreso' | 'gasto', descripcion: string, categoria?: string, subcategoria?: string, es_gasto_hormiga?: boolean }) {
  try {
    const user = await getLukasUser();
    const ensuredProfile = await ensureProfile(user);
    const userId = ensuredProfile?.id || user.id;

    const adminDB = createAdminClient();
    const visualBranches = ['Fijos', 'Salidas', 'Ahorro', 'Susc.'];
    const isVisualBranch = args.categoria ? visualBranches.includes(args.categoria) : false;
    const dbCategoria = 'otro';
    const subcategoria = isVisualBranch
      ? `${args.categoria}: ${args.subcategoria || args.descripcion}`
      : (args.subcategoria || `${args.categoria || 'otro'}: ${args.descripcion}`);
    const { data, error } = await adminDB.from('transactions').insert([{
      user_id: userId,
      tipo: args.tipo,
      monto: Math.abs(args.monto),
      descripcion: args.descripcion,
      categoria: dbCategoria,
      subcategoria,
      es_gasto_hormiga: args.es_gasto_hormiga || false,
      metodo_entrada: 'ai',
      fecha_transaccion: new Date().toISOString().split('T')[0]
    }]).select().single();

    if (error) throw error;

    const { data: profiles } = await adminDB.from('profiles').select('balance_actual').eq('id', userId).limit(1);
    const profile = profiles?.[0];
    const newBalance = args.tipo === 'ingreso' ? (profile?.balance_actual || 0) + args.monto : (profile?.balance_actual || 0) - args.monto;
    await adminDB.from('profiles').update({ balance_actual: newBalance }).eq('id', userId);

    return { success: true, data, mensaje: "Transacción registrada." };
  } catch (error: any) {
    console.error("Error en addTransaction:", error.message);
    return { success: false, error: error.message };
  }
}

export async function setCurrentBalance(args: { saldo: number }) {
  try {
    const user = await getLukasUser();
    const ensuredProfile = await ensureProfile(user);
    const userId = ensuredProfile?.id || user.id;

    const adminDB = createAdminClient();
    const { data, error } = await adminDB
      .from('profiles')
      .update({ balance_actual: Math.max(0, args.saldo) })
      .eq('id', userId)
      .select()
      .limit(1);

    if (error) throw error;
    if (!data || data.length === 0) {
      const { data: inserted, error: insertError } = await adminDB
        .from('profiles')
        .insert([{
          id: user.id,
          email: user.email,
          clerk_id: user.clerkId,
          full_name: user.name,
          balance_actual: Math.max(0, args.saldo),
          finscore_actual: 500,
          racha_actual_dias: 0,
          pais: 'CO',
          moneda_base: 'COP',
        }])
        .select()
        .limit(1);
      if (insertError) throw insertError;
      return { success: true, data: inserted?.[0] || null, mensaje: "Saldo actualizado." };
    }
    return { success: true, data: data?.[0] || null, mensaje: "Saldo actualizado." };
  } catch (error: any) {
    console.error("Error en setCurrentBalance:", error.message);
    return { success: false, error: error.message };
  }
}

export async function addGastoHormiga(args: { monto: number, descripcion: string }) {
  try {
    const user = await getLukasUser();
    const ensuredProfile = await ensureProfile(user);
    const userId = ensuredProfile?.id || user.id;

    const adminDB = createAdminClient();
    const { data, error } = await adminDB.from('transactions').insert([{
      user_id: userId,
      tipo: 'gasto',
      monto: Math.abs(args.monto),
      descripcion: args.descripcion,
      categoria: 'otro',
      subcategoria: `Hormiga: ${args.descripcion}`,
      es_gasto_hormiga: true,
      metodo_entrada: 'ai',
      fecha_transaccion: new Date().toISOString().split('T')[0]
    }]).select().single();

    if (error) throw error;

    const { data: profiles } = await adminDB.from('profiles').select('balance_actual, finscore_actual').eq('id', userId).limit(1);
    const profile = profiles?.[0];
    const newBalance = (profile?.balance_actual || 0) - args.monto;
    const newScore = Math.max(0, (profile?.finscore_actual || 500) - 5);
    await adminDB.from('profiles').update({ balance_actual: newBalance, finscore_actual: newScore }).eq('id', userId);

    return { success: true, mensaje: "Gasto hormiga registrado." };
  } catch (error: any) {
    console.error("Error en addGastoHormiga:", error.message);
    return { success: false, error: error.message };
  }
}

export async function createGoal(args: { nombre: string, monto: number, fecha_objetivo: string, prioridad: number }) {
  try {
    const user = await getLukasUser();
    const ensuredProfile = await ensureProfile(user);
    const userId = ensuredProfile?.id || user.id;

    const adminDB = createAdminClient();

    const targetDate = new Date(args.fecha_objetivo);
    const today = new Date();
    const diffMonths = (targetDate.getFullYear() - today.getFullYear()) * 12 + (targetDate.getMonth() - today.getMonth());
    const ahorro_mensual_requerido = diffMonths > 0 ? args.monto / diffMonths : args.monto;

    const { data, error } = await adminDB.from('metas').insert([{
      user_id: userId,
      nombre: args.nombre,
      tipo: 'ahorro',
      monto_objetivo: args.monto,
      fecha_objetivo: args.fecha_objetivo,
      prioridad: args.prioridad,
      ahorro_mensual_requerido,
      estado: 'activa',
      monto_actual: 0,
      emoji: 'Meta'
    }]).select().single();

    if (error) throw error;
    return { success: true, data, mensaje: "Meta creada." };
  } catch (error: any) {
    console.error("Error en createGoal:", error.message);
    return { success: false, error: error.message };
  }
}

export async function createBudget(args: { categoria: string, limite_cop: number, anio?: number, mes?: number }) {
  try {
    const user = await getLukasUser();
    const ensuredProfile = await ensureProfile(user);
    const userId = ensuredProfile?.id || user.id;

    const now = new Date();
    const adminDB = createAdminClient();
    const { data, error } = await adminDB.from('presupuestos').insert([{
      user_id: userId,
      categoria: args.categoria,
      limite_cop: args.limite_cop,
      anio: args.anio || now.getFullYear(),
      mes: args.mes || now.getMonth() + 1,
      gastado_cop: 0
    }]).select().single();

    if (error) throw error;
    return { success: true, data, mensaje: "Presupuesto creado." };
  } catch (error: any) {
    console.error("Error en createBudget:", error.message);
    return { success: false, error: error.message };
  }
}

export async function createGroup(args: { nombre: string, tipo?: 'pareja' | 'familia' | 'amigos' | 'otro' }) {
  try {
    const user = await getLukasUser();
    const ensuredProfile = await ensureProfile(user);
    const userId = ensuredProfile?.id || user.id;

    const adminDB = createAdminClient();
    const { data: group, error } = await adminDB.from('groups').insert([{
      nombre: args.nombre,
      tipo: args.tipo || 'amigos',
      created_by: userId
    }]).select().single();

    if (error) throw error;

    await adminDB.from('group_members').insert({
      group_id: group.id,
      user_id: userId,
      rol: 'admin'
    });

    return { success: true, data: group, mensaje: "Grupo creado." };
  } catch (error: any) {
    console.error("Error en createGroup:", error.message);
    return { success: false, error: error.message };
  }
}
