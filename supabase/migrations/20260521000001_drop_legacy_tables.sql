-- Elimina tablas legacy que no tienen ninguna referencia en el código.
-- El código usa: groups, group_members, group_invitations (tablas en inglés).
-- Estas tablas en español son duplicados vacíos del modelo antiguo.

DROP TABLE IF EXISTS miembros_grupo CASCADE;
DROP TABLE IF EXISTS grupo_miembros CASCADE;
DROP TABLE IF EXISTS grupos CASCADE;

-- Tablas de conversaciones que nunca se usaron en el código activo
DROP TABLE IF EXISTS messages CASCADE;
DROP TABLE IF EXISTS conversations CASCADE;

-- Tablas de ocasiones/eventos que nunca se implementaron
DROP TABLE IF EXISTS productos_ocasion CASCADE;
DROP TABLE IF EXISTS ocasiones CASCADE;
