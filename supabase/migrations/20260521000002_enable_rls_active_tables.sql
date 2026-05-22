-- Reactiva RLS en las tablas con datos reales.
-- SEGURO: todas las API routes usan createAdminClient() con service_role,
-- que bypassa RLS automáticamente. Solo bloquea acceso directo con anon key.

ALTER TABLE profiles     ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE metas        ENABLE ROW LEVEL SECURITY;
ALTER TABLE presupuestos ENABLE ROW LEVEL SECURITY;
ALTER TABLE notificaciones ENABLE ROW LEVEL SECURITY;

-- Las políticas Clerk para profiles, transactions, metas y presupuestos
-- ya existen de migraciones anteriores (clerk_*, crud own).

-- Políticas para notificaciones (tabla sin políticas previas)
CREATE POLICY "notif_select_own" ON notificaciones
  FOR SELECT USING (
    user_id IN (
      SELECT id FROM profiles
      WHERE clerk_id = (auth.jwt() ->> 'sub')
    )
  );

CREATE POLICY "notif_update_own" ON notificaciones
  FOR UPDATE USING (
    user_id IN (
      SELECT id FROM profiles
      WHERE clerk_id = (auth.jwt() ->> 'sub')
    )
  );
