# 🛠️ Mejoras al Repositorio — Lukas IA App

> Documento de tutoría para el curso de IA Corporativa (Externado).
> Objetivo: identificar todas las mejoras, deudas técnicas y oportunidades
> de aprendizaje en el repositorio actual, organizadas por severidad.

**Contexto**: El repositorio está en estado MVP avanzado a nivel visual, pero tiene deudas críticas en seguridad, integridad de datos, autenticación y arquitectura backend. Esta guía explica **qué** hay que mejorar, **por qué** importa, y **cómo** abordarlo.

---

## Tabla de contenidos

1. [Crítico — Seguridad y configuración](#1-crítico--seguridad-y-configuración)
2. [Crítico — Autenticación](#2-crítico--autenticación)
3. [Crítico — Integridad de datos y schema](#3-crítico--integridad-de-datos-y-schema)
4. [Arquitectura — Backend](#4-arquitectura--backend)
5. [Arquitectura — Frontend](#5-arquitectura--frontend)
6. [Calidad de código](#6-calidad-de-código)
7. [Git y colaboración](#7-git-y-colaboración)
8. [Developer Experience (DX)](#8-developer-experience-dx)
9. [Deployment y observabilidad](#9-deployment-y-observabilidad)
10. [Performance y UX](#10-performance-y-ux)
11. [Roadmap sugerido](#11-roadmap-sugerido)

---

## 1. Crítico — Seguridad y configuración

### 1.1 🔴 `service_role` key expuesta con prefijo `NEXT_PUBLIC_`

**Archivo**: [.env](../.env)

```bash
# ⚠️ PROBLEMA ACTUAL
NEXT_PUBLIC_SUPABASE_ANON_KEY=<service_role_jwt>
```

**Por qué es grave**:
- En Next.js, **cualquier variable con prefijo `NEXT_PUBLIC_`** se inyecta en el bundle de JavaScript que se envía al navegador.
- La llave `service_role` **bypasea completamente las políticas de Row Level Security (RLS)** de Supabase. Es el equivalente a un "admin god-mode".
- Si esta llave llega al cliente en producción, **cualquier persona** que inspeccione el DevTools puede leer/escribir/borrar toda la base de datos.

**Cómo arreglarlo**:

1. **Separar llaves por rol**:
   ```bash
   # Pública - OK para el cliente
   NEXT_PUBLIC_SUPABASE_URL=https://cvrrygffwmxmemlsdnax.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon_key>  # JWT con role: anon

   # Privada - SOLO servidor (sin NEXT_PUBLIC_)
   SUPABASE_SERVICE_ROLE_KEY=<service_role_jwt>  # JWT con role: service_role
   ```

2. **Crear dos clientes Supabase** según el contexto:
   - `createClient()` para server components/actions → usa `ANON_KEY` + cookies del usuario autenticado (respeta RLS).
   - `createAdminClient()` para operaciones privilegiadas (cron jobs, migraciones, webhooks) → usa `SERVICE_ROLE_KEY`.

3. **Reforzar con RLS**: definir políticas en Supabase para que la `anon_key` solo pueda ver/modificar filas del usuario autenticado (`auth.uid() = user_id`).

**Decodifica un JWT** para ver su rol:
```bash
echo "<JWT>" | cut -d. -f2 | base64 -d 2>/dev/null | python3 -m json.tool
# Busca: "role": "anon" o "role": "service_role"
```

---

### 1.2 🟡 Proyecto Supabase equivocado en el `.env` inicial

**Contexto**: Al inicio el `.env` apuntaba a `fcgptqewgyhcpfnxhvjn.supabase.co` (proyecto vacío), cuando el proyecto real con datos es `cvrrygffwmxmemlsdnax.supabase.co`. Esto se descubrió solo al ver que todas las queries retornaban `PGRST205 — table not found`.

**Lección**: Este tipo de errores se evitan con:

1. **`.env.example` versionado en git** con nombres de variables y placeholders (sin valores reales):
   ```bash
   # .env.example
   NEXT_PUBLIC_SUPABASE_URL=https://<tu-proyecto>.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-key>
   SUPABASE_SERVICE_ROLE_KEY=<service-role-key>
   OPENAI_API_KEY=sk-...
   ELEVENLABS_API_KEY=...
   ```

2. **Validación en runtime** con una librería como `zod`:
   ```typescript
   // src/lib/env.ts
   import { z } from 'zod';

   const envSchema = z.object({
     NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
     NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
     SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
     OPENAI_API_KEY: z.string().startsWith('sk-'),
   });

   export const env = envSchema.parse(process.env);
   ```
   Si falta una variable o es inválida, la app **no arranca** y muestra un error claro.

---

### 1.3 🔴 Falta `.env` en `.gitignore`

**Verificar**:
```bash
grep -E '^\.env' .gitignore
```

Si no está, **agregarlo YA**:
```
.env
.env.local
.env*.local
!.env.example
```

**Por qué**: Un commit accidental de un `.env` con credenciales reales queda en el historial de git para siempre. Aunque lo borres en un commit posterior, sigue accesible vía `git log` y GitHub lo indexa. La única solución es **rotar todas las llaves**.

---

### 1.4 🟡 Sin rate limiting en endpoints públicos

Los endpoints `/api/chat` y los que se creen no tienen protección contra abuso. Un atacante puede:
- Agotar tu cuota de OpenAI (cada llamada al assistant cuesta tokens).
- Saturar tu base de datos con transacciones basura.

**Mitigaciones**:
- **Vercel Edge Middleware** con rate limit por IP.
- **Upstash Redis** para rate limiting distribuido (`@upstash/ratelimit`).
- **Supabase Edge Functions** con su propio rate limit.

---

## 2. Crítico — Autenticación

### 2.1 🔴 No existe autenticación real

**Síntoma**: En todo el código del backend se usa un `dummyUserId` hardcoded:

```typescript
// src/lib/supabase/actions.ts:45, 64, 94
const dummyUserId = '00000000-0000-0000-0000-000000000001';
```

**Consecuencias**:
- **Todos los usuarios comparten el mismo perfil**. No hay aislamiento de datos.
- Las políticas RLS no pueden aplicarse porque no hay `auth.uid()` del usuario real.
- En producción, el primer usuario que entre "sería" todos los usuarios.

**Solución propuesta — Supabase Auth con Email/Password + Magic Link**:

1. **Habilitar Auth providers** en el dashboard de Supabase.

2. **Crear páginas de auth**:
   ```
   src/app/(auth)/
     login/page.tsx
     signup/page.tsx
     callback/route.ts    # Maneja el callback OAuth
   ```

3. **Middleware de protección** ([middleware.ts en el root](../middleware.ts)):
   ```typescript
   import { createServerClient } from '@supabase/ssr';
   import { NextResponse, type NextRequest } from 'next/server';

   export async function middleware(request: NextRequest) {
     const supabase = createServerClient(/* ... */);
     const { data: { user } } = await supabase.auth.getUser();

     // Rutas protegidas
     if (request.nextUrl.pathname.startsWith('/app') && !user) {
       return NextResponse.redirect(new URL('/login', request.url));
     }

     return NextResponse.next();
   }

   export const config = {
     matcher: ['/app/:path*', '/chat/:path*', '/api/((?!chat/public).*)']
   };
   ```

4. **Reemplazar `dummyUserId`** por el usuario real:
   ```typescript
   const supabase = await createClient();
   const { data: { user } } = await supabase.auth.getUser();
   if (!user) throw new Error('Unauthorized');
   const userId = user.id;  // ← este es el real
   ```

5. **Trigger para crear `profile` automáticamente** al registrarse:
   ```sql
   CREATE OR REPLACE FUNCTION public.handle_new_user()
   RETURNS TRIGGER AS $$
   BEGIN
     INSERT INTO public.profiles (id, email, full_name, finscore_actual, racha_actual_dias)
     VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name', 500, 0);
     RETURN NEW;
   END;
   $$ LANGUAGE plpgsql SECURITY DEFINER;

   CREATE TRIGGER on_auth_user_created
     AFTER INSERT ON auth.users
     FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
   ```

---

### 2.2 🟡 No hay políticas RLS definidas en el repo

**Estado actual**: Las tablas existen en Supabase pero no sabemos qué políticas RLS tienen porque **no están en el repo**.

**Por qué importa**: Si la app usa la `anon` key (como debe ser), sin RLS **no puede leer nada**. Y con RLS mal configurado, un usuario podría ver datos de otros usuarios.

**Acción**:

1. Exportar las políticas actuales desde Supabase SQL Editor:
   ```sql
   SELECT schemaname, tablename, policyname, cmd, qual, with_check
   FROM pg_policies
   WHERE schemaname = 'public';
   ```

2. Guardarlas en el repo en [docs/database/rls_policies.sql](../docs/database/) para versionarlas.

3. **Política base recomendada** para tablas con `user_id`:
   ```sql
   -- Ejemplo para la tabla `metas`
   ALTER TABLE public.metas ENABLE ROW LEVEL SECURITY;

   CREATE POLICY "Los usuarios solo ven sus metas"
     ON public.metas FOR SELECT
     USING (auth.uid() = user_id);

   CREATE POLICY "Los usuarios solo crean metas propias"
     ON public.metas FOR INSERT
     WITH CHECK (auth.uid() = user_id);

   CREATE POLICY "Los usuarios solo modifican sus metas"
     ON public.metas FOR UPDATE
     USING (auth.uid() = user_id);

   CREATE POLICY "Los usuarios solo borran sus metas"
     ON public.metas FOR DELETE
     USING (auth.uid() = user_id);
   ```

---

## 3. Crítico — Integridad de datos y schema

### 3.1 🔴 El schema base NO está versionado en el repo

**Problema**: Las tablas `profiles`, `metas`, `transactions`, `presupuestos`, `finscore_history`, `conversations`, `messages`, `grupos`, etc. **existen en Supabase** pero **no hay ningún archivo SQL en el repo** que las cree.

**Consecuencias**:
- Si alguien quiere levantar un ambiente nuevo (staging, local, otro developer), **no puede**.
- No hay forma de hacer code review de cambios al schema.
- No hay historial de migraciones.

**Archivos actuales en [docs/database/](../docs/database/)**:
- `gamification_storage_schema.sql` — solo crea `finscore_config`, `racha_config` y buckets de Storage.
- `seed_dummy_data.sql` — asume que las tablas principales ya existen.

**Acción inmediata — Regenerar el schema base**:

1. Exportar desde Supabase:
   ```bash
   # Con Supabase CLI instalado
   supabase db dump --schema public --file docs/database/00_schema_base.sql
   ```

2. O manualmente: Dashboard de Supabase → SQL Editor → Database → Generar SQL de cada tabla.

3. Estructurar [docs/database/](../docs/database/) con orden de ejecución:
   ```
   docs/database/
     00_extensions.sql          # uuid-ossp, pgvector, etc.
     01_schema_base.sql         # profiles, metas, transactions, presupuestos, finscore_history
     02_schema_social.sql       # conversations, messages, grupos, miembros_grupo
     03_schema_ia.sql           # chat_memories (pgvector) + RPC match_memories
     04_gamification.sql        # finscore_config, racha_config (ya existe)
     05_rls_policies.sql        # todas las políticas RLS
     06_triggers.sql            # handle_new_user, update_updated_at, etc.
     07_functions.sql           # RPCs personalizadas
     99_seed_dev.sql            # datos de prueba (solo dev)
   ```

4. **Migrar a Supabase Migrations** (recomendado a mediano plazo):
   ```bash
   npx supabase init
   npx supabase migration new initial_schema
   # Copiar el contenido del dump a la migration generada
   ```

---

### 3.2 🔴 Tabla `chat_memories` y RPC `match_memories` no existen

**Archivo que los usa**: [src/lib/supabase/memory.ts](../src/lib/supabase/memory.ts)

```typescript
// Línea 42: inserta en una tabla que no existe
await supabase.from('chat_memories').insert({ ... });

// Línea 69: llama a una RPC que no existe
const { data, error } = await supabase.rpc('match_memories', { ... });
```

**Resultado**: Si se invoca este código, la app falla silenciosamente (porque hay `try/catch` que solo logea).

**Solución — Crear el schema de memoria semántica con pgvector**:

```sql
-- 1. Habilitar extensión
CREATE EXTENSION IF NOT EXISTS vector;

-- 2. Tabla de memorias de chat (embeddings)
CREATE TABLE public.chat_memories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  thread_id TEXT,                              -- OpenAI thread ID
  summary TEXT NOT NULL,                       -- Resumen generado
  embedding vector(1536),                      -- text-embedding-3-small = 1536 dims
  metadata JSONB DEFAULT '{}',                 -- Tags, categorías, fechas
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Índice HNSW para búsqueda rápida por similitud
CREATE INDEX ON public.chat_memories
  USING hnsw (embedding vector_cosine_ops);

-- 4. RLS
ALTER TABLE public.chat_memories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Los usuarios ven sus memorias"
  ON public.chat_memories FOR ALL
  USING (auth.uid() = user_id);

-- 5. RPC para búsqueda semántica
CREATE OR REPLACE FUNCTION match_memories(
  query_embedding vector(1536),
  match_threshold float,
  match_count int,
  p_user_id uuid
)
RETURNS TABLE (
  id uuid,
  summary text,
  similarity float
)
LANGUAGE sql STABLE
AS $$
  SELECT
    id,
    summary,
    1 - (embedding <=> query_embedding) AS similarity
  FROM public.chat_memories
  WHERE user_id = p_user_id
    AND 1 - (embedding <=> query_embedding) > match_threshold
  ORDER BY embedding <=> query_embedding
  LIMIT match_count;
$$;
```

---

### 3.3 🟡 El `dummyUserId` ni siquiera existe en la DB

**Código que asume que existe**: [src/lib/supabase/actions.ts:45](../src/lib/supabase/actions.ts#L45)

```typescript
const dummyUserId = '00000000-0000-0000-0000-000000000001';
const { data, error } = await supabase
  .from('profiles')
  .select('finscore_actual')
  .eq('id', dummyUserId)
  .single();
```

**Problema**: Si ese ID no está en `profiles`, la query retorna `null` y cae al fallback del mensaje de error. El código tiene un fallback silencioso (`return { finScore: 650, mensaje: "no pude leer tu score" }`) que **enmascara el bug**.

**Acción**:
1. Crear el registro dummy en el seed data (si aplica).
2. Eliminar fallbacks silenciosos — preferir que falle fuerte en dev.
3. Migrar a auth real lo antes posible.

---

### 3.4 🟡 Tablas sin uso en el frontend

**Tablas existentes sin consumir desde código**:
- `presupuestos` — aunque [AnalyticsView.tsx](../src/components/demo/AnalyticsView.tsx) muestra "Presupuesto Mecato $80k/$100k" hardcoded.
- `finscore_history` — aunque [FinScoreDial.tsx](../src/components/dashboard/FinScoreDial.tsx) muestra un delta "+25" hardcoded.
- `conversations` / `messages` — el chat usa OpenAI threads pero no persiste en Supabase.
- `grupos`, `miembros_grupo`, `ocasiones`, `productos_ocasion` — el módulo social ni está implementado.

**Decisión pendiente**: ¿Se implementan o se eliminan? No deben quedar tablas "zombis" en el schema.

---

## 4. Arquitectura — Backend

### 4.1 🔴 Lógica de negocio crítica en el cliente

**Ejemplo**: [src/app/app/page.tsx:13-20](../src/app/app/page.tsx#L13)

```typescript
const [finScore, setFinScore] = useState(885);

const handleTransaction = () => {
  setFinScore((prev) => prev - 15);  // ← cálculo en el cliente
};
```

**Por qué es malo**:
1. **Cualquier usuario puede modificar el score desde el DevTools**. No hay fuente de verdad.
2. La fórmula del FinScore no es auditable ni testeable.
3. No se persiste — al recargar la página vuelve al valor inicial.

**Patrón correcto**:

```typescript
// CLIENTE - solo dispara la acción
const handleTransaction = async (tx: Transaction) => {
  const response = await fetch('/api/transactions', {
    method: 'POST',
    body: JSON.stringify(tx)
  });
  const { newFinScore, delta } = await response.json();
  setFinScore(newFinScore);  // ← valor calculado en servidor
};
```

```typescript
// SERVIDOR - src/app/api/transactions/route.ts
export async function POST(req: Request) {
  const tx = await req.json();
  const supabase = await createClient();

  // 1. Insertar transacción
  await supabase.from('transactions').insert(tx);

  // 2. Recalcular FinScore (lógica server-side testeada)
  const newScore = await recalculateFinscore(tx.user_id);

  // 3. Persistir en profiles y finscore_history
  await supabase.from('profiles').update({ finscore_actual: newScore }).eq('id', tx.user_id);
  await supabase.from('finscore_history').insert({ user_id: tx.user_id, score: newScore, ... });

  return Response.json({ newFinScore: newScore });
}
```

---

### 4.2 🟡 Server Actions vs API Routes — decisión pendiente

**Estado actual mixto**:
- [src/lib/supabase/actions.ts](../src/lib/supabase/actions.ts) usa `'use server'` (Server Actions).
- [src/app/api/chat/route.ts](../src/app/api/chat/route.ts) es una Route Handler tradicional.

**Guía rápida de cuándo usar cada uno**:

| Escenario | Preferir |
|---|---|
| Mutaciones desde formularios React (`<form action={...}>`) | Server Action |
| Endpoints consumidos por terceros o webhooks | API Route |
| Streaming (OpenAI, SSE) | API Route |
| Llamadas desde `useEffect` o fetch manual | API Route |
| Progressive enhancement (funciona sin JS) | Server Action |

**Recomendación para Lukas**:
- **Server Actions** para: crear/editar meta, registrar transacción manual, actualizar perfil.
- **API Routes** para: chat streaming, endpoints de analytics (GET), webhooks, integraciones externas.

---

### 4.3 🟡 Sin validación de inputs

**Ejemplo**: [src/lib/supabase/actions.ts:62](../src/lib/supabase/actions.ts#L62)

```typescript
export async function createMeta(args: { nombre: string, monto: number }) {
  // ← sin validar que nombre no esté vacío
  // ← sin validar que monto sea > 0
  // ← sin validar longitud máxima
  const { data, error } = await supabase.from('metas').insert([{ ... }]);
}
```

**Solución con Zod**:

```typescript
import { z } from 'zod';

const createMetaSchema = z.object({
  nombre: z.string().min(1).max(100),
  monto: z.number().positive().max(1_000_000_000),
  tipo: z.enum(['ahorro', 'fondo_emergencia', 'viaje', 'compra']).optional(),
  fecha_objetivo: z.string().datetime().optional(),
});

export async function createMeta(input: unknown) {
  const args = createMetaSchema.parse(input);  // ← falla si es inválido
  // ... resto del código
}
```

---

### 4.4 🟡 Sin tipos generados desde el schema de Supabase

**Estado actual**: Las queries devuelven `any`, lo que rompe el type-safety de TypeScript.

**Solución**:

```bash
# Con Supabase CLI
npx supabase gen types typescript --project-id cvrrygffwmxmemlsdnax > src/types/supabase.ts
```

Luego tipar el cliente:

```typescript
import { Database } from '@/types/supabase';

const supabase = createServerClient<Database>(/* ... */);
// Ahora supabase.from('profiles').select() tiene autocompletado real
```

**Agregar al `package.json`**:
```json
"scripts": {
  "db:types": "supabase gen types typescript --project-id $SUPABASE_PROJECT_ID > src/types/supabase.ts"
}
```

---

### 4.5 🟡 Fallbacks silenciosos ocultan errores

**Ejemplo**: [src/lib/supabase/actions.ts:52](../src/lib/supabase/actions.ts#L52)

```typescript
if (error || !data) {
  return { finScore: 650, mensaje: "Uy parcero, no pude leer tu score, pero asumamos que tienes 650." };
}
```

**Problema**: Si la DB falla, el usuario recibe datos falsos sin saberlo. En desarrollo, los bugs quedan enmascarados.

**Mejor aproximación**:
- **En desarrollo**: `throw` para que el error sea obvio.
- **En producción**: logear a un sistema de observabilidad (Sentry, Axiom) y mostrar un error genérico al usuario.

```typescript
if (error) {
  console.error('[getFinscore] DB error', error);
  if (process.env.NODE_ENV === 'development') throw error;
  captureException(error);  // Sentry
  return { error: 'No pudimos cargar tu FinScore, intenta de nuevo' };
}
```

---

## 5. Arquitectura — Frontend

### 5.1 🔴 Datos hardcoded en todos los componentes

Ver el documento [endpoints.md](./endpoints.md) para el inventario completo.

**Resumen**: ~20 componentes tienen datos estáticos que deberían venir de la DB. Esto incluye FinScore, metas, transacciones, presupuestos, gráfico de fugas, alertas, rachas, etc.

**Patrón recomendado para migrar cada uno**:

1. **Definir el hook de datos** (`src/hooks/useMetas.ts`):
   ```typescript
   export function useMetas() {
     const [metas, setMetas] = useState<Meta[]>([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState<Error | null>(null);

     useEffect(() => {
       fetch('/api/metas')
         .then(r => r.json())
         .then(setMetas)
         .catch(setError)
         .finally(() => setLoading(false));
     }, []);

     return { metas, loading, error };
   }
   ```

2. **Reemplazar el array hardcoded** en el componente:
   ```typescript
   // ANTES
   const metas = [{ nombre: 'MacBook Pro', ... }];

   // DESPUÉS
   const { metas, loading, error } = useMetas();
   if (loading) return <Skeleton />;
   if (error) return <ErrorState error={error} />;
   ```

3. **Considerar SWR o React Query** para cache, revalidación y optimistic updates:
   ```typescript
   import useSWR from 'swr';

   export function useMetas() {
     return useSWR<Meta[]>('/api/metas', fetcher);
   }
   ```

---

### 5.2 🟡 Sin estados de loading, error, ni empty

**Problema**: La UI asume que los datos siempre están disponibles. Al conectar a endpoints reales habrá:
- Parpadeos durante carga inicial.
- Pantallas en blanco si la red falla.
- Pantallas vacías cuando el usuario no tiene datos aún.

**Solución**: componentes reutilizables:
```
src/components/ui/
  Skeleton.tsx
  ErrorState.tsx
  EmptyState.tsx
  LoadingSpinner.tsx
```

---

### 5.3 🟡 Duplicación entre componentes mobile y desktop

**Ejemplo**:
- [src/components/dashboard/FinScoreDial.tsx](../src/components/dashboard/FinScoreDial.tsx)
- [src/components/mobile/MobileFinScore.tsx](../src/components/mobile/MobileFinScore.tsx)
- [src/components/FinScore.tsx](../src/components/FinScore.tsx)

Tres componentes diferentes que muestran "lo mismo" (un FinScore con gauge).

**Alternativas**:
1. **Un solo componente con props de variante**: `<FinScore variant="mobile" | "desktop" | "landing" />`.
2. **Tailwind responsive**: un solo componente con clases `sm:`, `md:`, `lg:`.

---

### 5.4 🟡 Sin manejo de estado global

A medida que crezca la app, cada componente hará su propio `fetch`. Eso genera:
- Múltiples requests redundantes (FinScore pedido 5 veces en una pantalla).
- Estados desincronizados (HomeView muestra 650, el Header muestra 640).

**Opciones**:
- **React Query / SWR** — cache de datos con revalidación automática.
- **Zustand** — estado global liviano.
- **Jotai** — estado atómico.

---

### 5.5 🟡 Sin Error Boundaries

Si un componente lanza un error (por ejemplo, D3 fallando con datos inesperados), **toda la app se rompe**.

**Solución**: envolver rutas en `error.tsx` (convención de Next.js App Router):

```typescript
// src/app/app/error.tsx
'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h2>Algo salió mal</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Reintentar</button>
    </div>
  );
}
```

---

## 6. Calidad de código

### 6.1 🟡 Sin tests

**Estado actual**: 0 archivos de test. Ni unitarios, ni de integración, ni E2E.

**Mínimo viable**:

1. **Unit tests** con **Vitest** para lógica pura:
   ```bash
   npm install -D vitest @vitejs/plugin-react
   ```
   Ejemplos de qué testear primero:
   - Cálculo del FinScore.
   - Validación de inputs (Zod schemas).
   - Transformaciones de datos (agrupación por categoría).

2. **Integration tests** para API routes con Supabase mock o test database.

3. **E2E con Playwright** para los flujos críticos:
   - Registro → login → crear meta → registrar transacción → ver FinScore actualizado.

---

### 6.2 🟡 Sin CI/CD

**Falta**:
- GitHub Actions para correr `lint`, `type-check`, `test` en cada PR.
- Pre-commit hooks con Husky + lint-staged.

**Ejemplo mínimo** ([.github/workflows/ci.yml](../.github/workflows/ci.yml)):

```yaml
name: CI
on: [pull_request]
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run lint
      - run: npx tsc --noEmit
      - run: npm test
```

---

### 6.3 🟡 Uso de `any` en tipos

**Ejemplo**: [src/lib/supabase/memory.ts:81](../src/lib/supabase/memory.ts#L81)

```typescript
return (data || []).map((row: any) => row.summary);
```

**Acción**:
- Activar `"noImplicitAny": true` en [tsconfig.json](../tsconfig.json) (probablemente ya lo está).
- Usar tipos generados de Supabase (ver 4.4).

---

### 6.4 🟢 Comentarios innecesarios

**Ejemplo**: [src/lib/supabase/actions.ts:37-39](../src/lib/supabase/actions.ts#L37)

```typescript
// ----------------------------------------------------------------------
// SYSTEM TOOLS FOR THE GPT ASSISTANT
// ----------------------------------------------------------------------
```

**Regla**: los comentarios deben explicar el **por qué**, no el **qué**. Un buen nombre de función/variable elimina la necesidad del comentario.

---

## 7. Git y colaboración

### 7.1 🟡 Rama `camilo` es un fork divergente sin backend

**Contexto**: La rama `origin/camilo` eliminó todo el backend (Supabase, OpenAI, chat route, docs) para dejar solo el frontend limpio para deploy en Vercel. Es esencialmente un fork.

**Problemas**:
- Si alguien trabaja en `camilo` y otro en `main`, merge va a ser muy doloroso.
- No hay una política clara de qué rama es la verdad.

**Recomendación**:
- **Definir `main` como fuente de verdad** (full stack).
- **Usar feature branches** que nazcan de `main` y vuelvan a `main` vía PR.
- **Protección de rama**: exigir PR + review + CI verde antes de merge a `main`.
- **Rama `camilo` → archivar** o renombrar a `experiment/camilo-frontend-only` para no confundir.

---

### 7.2 🟡 Commits poco descriptivos

**Ejemplos reales**:
```
Limpieza Total: Rama vaciada por petición del usuario
Entrega Final: Aplicación Pulida (Solo Código - Lista para Vercel)
feat: complete clean source code of Lukas App
```

**Estándar recomendado — Conventional Commits**:
```
feat(metas): agregar endpoint POST /api/metas
fix(finscore): corregir cálculo de delta al registrar gasto hormiga
docs(tutoria): agregar documentación de endpoints
refactor(supabase): separar cliente admin del cliente público
test(api): agregar tests de integración para /api/transactions
```

---

### 7.3 🟢 Sin PR template

Crear [.github/PULL_REQUEST_TEMPLATE.md](../.github/PULL_REQUEST_TEMPLATE.md):

```markdown
## ¿Qué hace este PR?

## ¿Por qué?

## ¿Cómo probarlo?

## Checklist
- [ ] Tests agregados/actualizados
- [ ] `npm run lint` pasa
- [ ] `npx tsc --noEmit` pasa
- [ ] Migraciones de DB documentadas (si aplica)
- [ ] Variables de entorno documentadas en `.env.example` (si aplica)
```

---

## 8. Developer Experience (DX)

### 8.1 🟡 README genérico

El [README.md](../README.md) actual es el default de `create-next-app`. No explica:
- Qué hace la app.
- Arquitectura (stack, carpetas, convenciones).
- Cómo levantar el proyecto localmente (con Supabase).
- Cómo correr tests.
- Cómo contribuir.

**Recomendación**: reescribirlo con secciones:
- 🚀 Quick Start
- 🏗️ Arquitectura
- 🔧 Variables de entorno
- 🗄️ Base de datos (schema, migraciones, seed)
- 🧪 Testing
- 🚢 Deploy
- 🤝 Contribuir

---

### 8.2 🟢 Sin `docs/ARCHITECTURE.md`

Un diagrama + explicación alta de:
- Frontend (Next.js App Router, componentes por feature).
- Backend (API routes, Server Actions, Supabase).
- Flujo de datos (cliente → API → Supabase → respuesta).
- Integraciones externas (OpenAI, ElevenLabs).

---

### 8.3 🟢 Sin archivo de convenciones

[CONTRIBUTING.md](../CONTRIBUTING.md) o [docs/CONVENTIONS.md](../docs/CONVENTIONS.md) con:
- Cómo nombrar archivos y componentes.
- Cómo organizar carpetas.
- Cuándo usar Server vs Client Components.
- Cuándo usar Server Actions vs API Routes.
- Estilo de commits.
- Estilo de PRs.

---

## 9. Deployment y observabilidad

### 9.1 🟡 [vercel.json](../vercel.json) sin documentar variables requeridas

Al momento de deploy, hay que configurar en Vercel Dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `OPENAI_API_KEY`
- `OPENAI_ASSISTANT_ID` (si aplica)
- `ELEVENLABS_API_KEY`

Documentarlas en [README.md](../README.md) o en un `docs/DEPLOYMENT.md`.

---

### 9.2 🟡 Sin observabilidad

**Faltan**:
- **Logs estructurados** — hoy hay `console.error` suelto. Usar un logger como `pino` o `@logtail/next`.
- **Error tracking** — Sentry, Axiom, LogRocket.
- **Analytics** — Vercel Analytics (gratis) o PostHog.
- **Métricas de uso** — eventos de: signup, login, crear meta, registrar gasto, ver alerta.

---

### 9.3 🟢 Sin preview deployments documentados

Vercel los hace automático por PR, pero asegurarse de que los preview usen un **Supabase de staging**, no el de producción (para no contaminar datos reales).

**Setup**:
- Crear un segundo proyecto Supabase para staging.
- En Vercel, configurar variables por ambiente (Preview, Production).

---

## 10. Performance y UX

### 10.1 🟢 Sin optimización de imágenes

Usar `next/image` en lugar de `<img>` para:
- Lazy loading automático.
- Formatos modernos (WebP, AVIF).
- Responsive images.

---

### 10.2 🟢 Sin loading skeletons

Hoy, mientras carga un componente async, la pantalla está en blanco. Usar:
- `loading.tsx` de Next.js App Router.
- `<Suspense>` con fallback de skeleton.

---

### 10.3 🟢 Bundle size no medido

```bash
npm run build
# Revisar el output de Next.js: First Load JS shared by all
```

**Optimizaciones comunes**:
- `dynamic import` para componentes pesados (D3, gráficos).
- Revisar imports de icon libraries — importar solo los íconos usados.
- Tree-shake `framer-motion` (usar la versión LazyMotion).

---

### 10.4 🟢 Sin estrategia de caché en API routes

Configurar headers `Cache-Control` apropiados por endpoint:
- FinScore: `s-maxage=10, stale-while-revalidate=60` (cambia rápido pero tolera staleness).
- Presupuestos: `s-maxage=300` (cambia poco).
- Leak-buster graph: `s-maxage=600` (agregación cara, cambia lento).

---

## 11. Roadmap sugerido

### Fase 0 — Estabilizar (1-2 días)

1. ✅ Corregir `.env` (URL + llave correcta).
2. ⬜ Agregar `.env` a `.gitignore` y crear `.env.example`.
3. ⬜ Separar `ANON_KEY` y `SERVICE_ROLE_KEY` en el `.env`.
4. ⬜ Crear `src/lib/env.ts` con validación Zod.
5. ⬜ Exportar el schema actual de Supabase a [docs/database/00_schema_base.sql](../docs/database/).
6. ⬜ Crear tabla `chat_memories` y RPC `match_memories`.

### Fase 1 — Autenticación (2-3 días)

7. ⬜ Habilitar Supabase Auth (email/password + magic link).
8. ⬜ Crear páginas `/login`, `/signup`, `/callback`.
9. ⬜ Middleware de protección de rutas.
10. ⬜ Trigger `handle_new_user` en DB.
11. ⬜ Reemplazar `dummyUserId` por usuario real en todo el backend.
12. ⬜ Definir políticas RLS para todas las tablas.

### Fase 2 — Endpoints críticos del MVP (3-5 días)

Ver [endpoints.md](./endpoints.md) — implementar los 8 endpoints del "Bloque crítico MVP".

### Fase 3 — Integración frontend (3-5 días)

13. ⬜ Reemplazar datos hardcoded por llamadas a endpoints reales (componente por componente).
14. ⬜ Agregar estados de loading/error/empty.
15. ⬜ Adoptar SWR o React Query para cache.
16. ⬜ Mover cálculo del FinScore al servidor.

### Fase 4 — Calidad (3-5 días)

17. ⬜ Agregar Vitest + tests de lógica de negocio.
18. ⬜ Agregar Playwright + E2E del flujo crítico.
19. ⬜ CI con GitHub Actions (lint + type-check + test).
20. ⬜ Generar tipos de Supabase.

### Fase 5 — Producción (2-3 días)

21. ⬜ Separar Supabase staging vs prod.
22. ⬜ Configurar Sentry o equivalente.
23. ⬜ Documentar deployment en README.
24. ⬜ Rate limiting en endpoints sensibles.
25. ⬜ Revisar bundle size y optimizar.

### Fase 6 — Features (abierto)

26. ⬜ Módulo social (grupos, retos compartidos).
27. ⬜ Memoria semántica con pgvector (chat_memories operativo).
28. ⬜ Notificaciones push / email.
29. ⬜ Integración bancaria real (Belvo, Plaid).

---

## Severidad — cómo leer los iconos

- 🔴 **Crítico**: riesgo de seguridad, pérdida de datos, o imposibilidad de operar en producción.
- 🟡 **Importante**: genera deuda técnica o fricción significativa si no se aborda.
- 🟢 **Recomendado**: mejora DX, performance o mantenibilidad.
