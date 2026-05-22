-- 1. chat_memories: la FK apuntaba a auth.users, pero la app usa Clerk.
--    El profiles.id (UUID) no existe en auth.users → inserción fallaba.
--    Se redirige el FK a profiles(id) para que la memoria funcione.

ALTER TABLE chat_memories DROP CONSTRAINT IF EXISTS chat_memories_user_id_fkey;
ALTER TABLE chat_memories
  ADD CONSTRAINT chat_memories_user_id_fkey
  FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE;

-- 2. groups, group_members, group_invitations tienen RLS activo pero
--    sin ninguna política → solo service_role puede acceder.
--    Agregamos políticas Clerk para acceso futuro desde el cliente.

-- groups
CREATE POLICY "groups_member_or_creator" ON groups
  FOR SELECT USING (
    created_by IN (SELECT id FROM profiles WHERE clerk_id = (auth.jwt() ->> 'sub'))
    OR id IN (
      SELECT group_id FROM group_members
      WHERE user_id IN (SELECT id FROM profiles WHERE clerk_id = (auth.jwt() ->> 'sub'))
    )
  );

CREATE POLICY "groups_insert_own" ON groups
  FOR INSERT WITH CHECK (
    created_by IN (SELECT id FROM profiles WHERE clerk_id = (auth.jwt() ->> 'sub'))
  );

CREATE POLICY "groups_update_creator" ON groups
  FOR UPDATE USING (
    created_by IN (SELECT id FROM profiles WHERE clerk_id = (auth.jwt() ->> 'sub'))
  );

-- group_members
CREATE POLICY "group_members_select_own" ON group_members
  FOR SELECT USING (
    user_id IN (SELECT id FROM profiles WHERE clerk_id = (auth.jwt() ->> 'sub'))
    OR group_id IN (
      SELECT id FROM groups
      WHERE created_by IN (SELECT id FROM profiles WHERE clerk_id = (auth.jwt() ->> 'sub'))
    )
  );

CREATE POLICY "group_members_insert_admin" ON group_members
  FOR INSERT WITH CHECK (
    group_id IN (
      SELECT id FROM groups
      WHERE created_by IN (SELECT id FROM profiles WHERE clerk_id = (auth.jwt() ->> 'sub'))
    )
  );

-- group_invitations
CREATE POLICY "group_invitations_select_own" ON group_invitations
  FOR SELECT USING (
    invited_by IN (SELECT id FROM profiles WHERE clerk_id = (auth.jwt() ->> 'sub'))
    OR email = (auth.jwt() ->> 'email')
  );

CREATE POLICY "group_invitations_insert_own" ON group_invitations
  FOR INSERT WITH CHECK (
    invited_by IN (SELECT id FROM profiles WHERE clerk_id = (auth.jwt() ->> 'sub'))
  );

CREATE POLICY "group_invitations_update_own" ON group_invitations
  FOR UPDATE USING (
    invited_by IN (SELECT id FROM profiles WHERE clerk_id = (auth.jwt() ->> 'sub'))
    OR email = (auth.jwt() ->> 'email')
  );
