-- ============================================================
-- Lukas AI — Migraciones Supabase
-- Ejecutar en el SQL Editor de Supabase antes del primer deploy.
-- Todas las tablas son idempotentes (IF NOT EXISTS).
-- ============================================================

-- ── 1. finscore_history ────────────────────────────────────────────────────
-- Historial diario del FinScore. El endpoint /api/profile/recalculate-score
-- intenta insertar aquí después de cada cálculo.
CREATE TABLE IF NOT EXISTS public.finscore_history (
  id                  UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id             UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  fecha               DATE NOT NULL,
  score               INT NOT NULL,
  delta               INT,
  racha_dia           INT,
  total_gastos_dia    NUMERIC,
  total_ingresos_dia  NUMERIC,
  gastos_hormiga_dia  INT,
  detalle_cambio      JSONB,
  created_at          TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_finscore_history_user_fecha
  ON public.finscore_history (user_id, fecha DESC);

ALTER TABLE public.finscore_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY IF NOT EXISTS "Usuarios ven su propio historial FinScore"
  ON public.finscore_history FOR SELECT
  USING (auth.jwt() ->> 'sub' = (
    SELECT clerk_id FROM public.profiles WHERE id = user_id LIMIT 1
  ));

-- ── 2. group_invitations ───────────────────────────────────────────────────
-- Invitaciones de grupos. El endpoint /api/groups inserta aquí al crear
-- un grupo con invite_email.
CREATE TABLE IF NOT EXISTS public.group_invitations (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  group_id    UUID REFERENCES public.groups(id) ON DELETE CASCADE NOT NULL,
  email       TEXT NOT NULL,
  invited_by  UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  status      TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'accepted', 'rejected')),
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_group_invitations_group
  ON public.group_invitations (group_id);
CREATE INDEX IF NOT EXISTS idx_group_invitations_email
  ON public.group_invitations (email);

ALTER TABLE public.group_invitations ENABLE ROW LEVEL SECURITY;

CREATE POLICY IF NOT EXISTS "Admins ven invitaciones de sus grupos"
  ON public.group_invitations FOR SELECT
  USING (
    group_id IN (
      SELECT group_id FROM public.group_members
      WHERE user_id = (
        SELECT id FROM public.profiles
        WHERE clerk_id = auth.jwt() ->> 'sub' LIMIT 1
      )
    )
  );

-- ── 3. consumer_trends ────────────────────────────────────────────────────
-- Tendencias de consumo para alertas de hype. El cron /api/trends/fetch
-- inserta aquí cada día.
CREATE TABLE IF NOT EXISTS public.consumer_trends (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  item_name   TEXT NOT NULL,
  platform    TEXT NOT NULL,
  hype_score  INT NOT NULL CHECK (hype_score >= 0 AND hype_score <= 100),
  created_at  TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_consumer_trends_item_name
  ON public.consumer_trends (item_name);
CREATE INDEX IF NOT EXISTS idx_consumer_trends_created_at
  ON public.consumer_trends (created_at DESC);

ALTER TABLE public.consumer_trends ENABLE ROW LEVEL SECURITY;

CREATE POLICY IF NOT EXISTS "Autenticados leen tendencias"
  ON public.consumer_trends FOR SELECT TO authenticated USING (true);

CREATE POLICY IF NOT EXISTS "Service role inserta tendencias"
  ON public.consumer_trends FOR INSERT TO service_role WITH CHECK (true);

-- ── 4. Columnas faltantes en presupuestos (si la tabla ya existe) ─────────
-- La app NO usa estas columnas por ahora (query corregida a solo
-- categoria, limite_cop, gastado_cop). Dejar como referencia futura.
-- ALTER TABLE public.presupuestos ADD COLUMN IF NOT EXISTS alerta_80pct_enviada BOOLEAN DEFAULT FALSE;
-- ALTER TABLE public.presupuestos ADD COLUMN IF NOT EXISTS sobrepasado BOOLEAN DEFAULT FALSE;

-- ── 5. external_data schema (para el scraper de precios) ─────────────────
CREATE SCHEMA IF NOT EXISTS external_data;

CREATE TABLE IF NOT EXISTS external_data.market_prices (
  id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at   TIMESTAMPTZ DEFAULT NOW(),
  product_name TEXT NOT NULL,
  price        NUMERIC NOT NULL,
  store_name   TEXT,
  unit         TEXT,
  category     TEXT,
  region       TEXT DEFAULT 'Bogotá'
);

GRANT USAGE ON SCHEMA external_data TO service_role;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA external_data TO service_role;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA external_data TO service_role;
