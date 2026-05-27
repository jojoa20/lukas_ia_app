-- ============================================================
-- MIGRACIÓN CONSOLIDADA — Lukas AI
-- Aplicar en: Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- ── 1. ELIMINAR TABLAS LEGACY DUPLICADAS (0 rows, no se usan en código) ──
DROP TABLE IF EXISTS public.miembros_grupo CASCADE;
DROP TABLE IF EXISTS public.grupo_miembros CASCADE;
DROP TABLE IF EXISTS public.grupos CASCADE;
DROP TABLE IF EXISTS public.ocasiones CASCADE;
DROP TABLE IF EXISTS public.productos_ocasion CASCADE;

-- ── 2. CORREGIR FK DE chat_memories ──
-- El FK apuntaba a auth.users, pero usamos Clerk → inserts fallaban
ALTER TABLE public.chat_memories
  DROP CONSTRAINT IF EXISTS chat_memories_user_id_fkey;
ALTER TABLE public.chat_memories
  ADD CONSTRAINT chat_memories_user_id_fkey
  FOREIGN KEY (user_id) REFERENCES public.profiles(id) ON DELETE CASCADE;

-- ── 3. LIMPIAR DATOS DE PRUEBA ──
DELETE FROM public.transactions
WHERE (descripcion = 'test' AND monto <= 1)
   OR (descripcion = 'Movimiento' AND monto IN (1, 3))
   OR (monto > 50000000 AND descripcion IN ('Movimiento', '6 mil', '10 mil'));

-- ── 4. HABILITAR RLS (mantiene acceso via service_role en API routes) ──
ALTER TABLE public.profiles        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.metas            ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.presupuestos     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notificaciones   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_memories    ENABLE ROW LEVEL SECURITY;

-- ── 5. POLÍTICAS RLS — basadas en Clerk JWT ──
-- Helper: clerk_id del JWT → profiles.id del usuario

-- PROFILES
DROP POLICY IF EXISTS "profiles_select_own"  ON public.profiles;
DROP POLICY IF EXISTS "profiles_update_own"  ON public.profiles;
CREATE POLICY "profiles_select_own" ON public.profiles
  FOR SELECT USING (clerk_id = (auth.jwt() ->> 'sub'));
CREATE POLICY "profiles_update_own" ON public.profiles
  FOR UPDATE USING (clerk_id = (auth.jwt() ->> 'sub'));

-- TRANSACTIONS
DROP POLICY IF EXISTS "tx_select_own"  ON public.transactions;
DROP POLICY IF EXISTS "tx_insert_own"  ON public.transactions;
DROP POLICY IF EXISTS "tx_update_own"  ON public.transactions;
DROP POLICY IF EXISTS "tx_delete_own"  ON public.transactions;
CREATE POLICY "tx_select_own" ON public.transactions
  FOR SELECT USING (user_id IN (SELECT id FROM public.profiles WHERE clerk_id = (auth.jwt() ->> 'sub')));
CREATE POLICY "tx_insert_own" ON public.transactions
  FOR INSERT WITH CHECK (user_id IN (SELECT id FROM public.profiles WHERE clerk_id = (auth.jwt() ->> 'sub')));
CREATE POLICY "tx_update_own" ON public.transactions
  FOR UPDATE USING (user_id IN (SELECT id FROM public.profiles WHERE clerk_id = (auth.jwt() ->> 'sub')));
CREATE POLICY "tx_delete_own" ON public.transactions
  FOR DELETE USING (user_id IN (SELECT id FROM public.profiles WHERE clerk_id = (auth.jwt() ->> 'sub')));

-- METAS
DROP POLICY IF EXISTS "metas_select_own"  ON public.metas;
DROP POLICY IF EXISTS "metas_insert_own"  ON public.metas;
DROP POLICY IF EXISTS "metas_update_own"  ON public.metas;
DROP POLICY IF EXISTS "metas_delete_own"  ON public.metas;
CREATE POLICY "metas_select_own" ON public.metas
  FOR SELECT USING (user_id IN (SELECT id FROM public.profiles WHERE clerk_id = (auth.jwt() ->> 'sub')));
CREATE POLICY "metas_insert_own" ON public.metas
  FOR INSERT WITH CHECK (user_id IN (SELECT id FROM public.profiles WHERE clerk_id = (auth.jwt() ->> 'sub')));
CREATE POLICY "metas_update_own" ON public.metas
  FOR UPDATE USING (user_id IN (SELECT id FROM public.profiles WHERE clerk_id = (auth.jwt() ->> 'sub')));
CREATE POLICY "metas_delete_own" ON public.metas
  FOR DELETE USING (user_id IN (SELECT id FROM public.profiles WHERE clerk_id = (auth.jwt() ->> 'sub')));

-- PRESUPUESTOS
DROP POLICY IF EXISTS "presupuestos_select_own" ON public.presupuestos;
DROP POLICY IF EXISTS "presupuestos_insert_own" ON public.presupuestos;
DROP POLICY IF EXISTS "presupuestos_update_own" ON public.presupuestos;
DROP POLICY IF EXISTS "presupuestos_delete_own" ON public.presupuestos;
CREATE POLICY "presupuestos_select_own" ON public.presupuestos
  FOR SELECT USING (user_id IN (SELECT id FROM public.profiles WHERE clerk_id = (auth.jwt() ->> 'sub')));
CREATE POLICY "presupuestos_insert_own" ON public.presupuestos
  FOR INSERT WITH CHECK (user_id IN (SELECT id FROM public.profiles WHERE clerk_id = (auth.jwt() ->> 'sub')));
CREATE POLICY "presupuestos_update_own" ON public.presupuestos
  FOR UPDATE USING (user_id IN (SELECT id FROM public.profiles WHERE clerk_id = (auth.jwt() ->> 'sub')));
CREATE POLICY "presupuestos_delete_own" ON public.presupuestos
  FOR DELETE USING (user_id IN (SELECT id FROM public.profiles WHERE clerk_id = (auth.jwt() ->> 'sub')));

-- NOTIFICACIONES
DROP POLICY IF EXISTS "notif_select_own" ON public.notificaciones;
DROP POLICY IF EXISTS "notif_insert_own" ON public.notificaciones;
DROP POLICY IF EXISTS "notif_update_own" ON public.notificaciones;
CREATE POLICY "notif_select_own" ON public.notificaciones
  FOR SELECT USING (user_id IN (SELECT id FROM public.profiles WHERE clerk_id = (auth.jwt() ->> 'sub')));
CREATE POLICY "notif_insert_own" ON public.notificaciones
  FOR INSERT WITH CHECK (user_id IN (SELECT id FROM public.profiles WHERE clerk_id = (auth.jwt() ->> 'sub')));
CREATE POLICY "notif_update_own" ON public.notificaciones
  FOR UPDATE USING (user_id IN (SELECT id FROM public.profiles WHERE clerk_id = (auth.jwt() ->> 'sub')));

-- CHAT MEMORIES
DROP POLICY IF EXISTS "memories_select_own" ON public.chat_memories;
DROP POLICY IF EXISTS "memories_insert_own" ON public.chat_memories;
CREATE POLICY "memories_select_own" ON public.chat_memories
  FOR SELECT USING (user_id IN (SELECT id FROM public.profiles WHERE clerk_id = (auth.jwt() ->> 'sub')));
CREATE POLICY "memories_insert_own" ON public.chat_memories
  FOR INSERT WITH CHECK (user_id IN (SELECT id FROM public.profiles WHERE clerk_id = (auth.jwt() ->> 'sub')));

-- ── 6. TABLA PARA MONITOREO ML ──
CREATE TABLE IF NOT EXISTS public.ml_predictions (
  id                UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  transaction_id    UUID REFERENCES public.transactions(id) ON DELETE CASCADE,
  user_id           UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  input_text        TEXT NOT NULL,
  input_monto       NUMERIC,
  predicted_cat     TEXT,
  predicted_hormiga BOOLEAN,
  confidence        FLOAT CHECK (confidence >= 0 AND confidence <= 1),
  actual_cat        TEXT,
  actual_hormiga    BOOLEAN,
  model_version     TEXT,
  created_at        TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.ml_predictions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "ml_select_own" ON public.ml_predictions
  FOR SELECT USING (user_id IN (SELECT id FROM public.profiles WHERE clerk_id = (auth.jwt() ->> 'sub')));
