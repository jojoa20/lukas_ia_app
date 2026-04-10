# 🔌 Endpoints a Implementar — Lukas IA App

> Documento de tutoría para el curso de IA Corporativa (Externado).
> Objetivo: catálogo completo y detallado de todos los endpoints que hay que
> crear para reemplazar los datos hardcoded del frontend.

**Contexto**: La app hoy tiene ~20 componentes con datos estáticos. Solo existe 1 endpoint real (`POST /api/chat`). Este documento lista cada endpoint que falta, qué componente alimenta, cómo debe implementarse, y en qué orden construirlo.

---

## Tabla de contenidos

1. [Estado actual](#1-estado-actual)
2. [Convenciones](#2-convenciones)
3. [Bloque crítico MVP (8 endpoints)](#3-bloque-crítico-mvp-8-endpoints)
4. [Bloque completo MVP (14 endpoints)](#4-bloque-completo-mvp-14-endpoints)
5. [Bloque social + IA (Fase 2)](#5-bloque-social--ia-fase-2)
6. [Resumen por tabla de Supabase](#6-resumen-por-tabla-de-supabase)
7. [Patrón de implementación](#7-patrón-de-implementación)

---

## 1. Estado actual

### Endpoint existente

| Método | Ruta | Archivo | Estado |
|---|---|---|---|
| `POST` | `/api/chat` | [src/app/api/chat/route.ts](../src/app/api/chat/route.ts) | ✅ Funcional (streaming con OpenAI Assistant) |

### Server Actions existentes (en [src/lib/supabase/actions.ts](../src/lib/supabase/actions.ts))

| Función | Descripción | Estado |
|---|---|---|
| `getFinscore()` | Lee `profiles.finscore_actual` | ⚠️ Usa `dummyUserId` hardcoded |
| `createMeta({nombre, monto})` | Inserta en `metas` | ⚠️ Usa `dummyUserId` hardcoded |
| `addGastoHormiga({monto, descripcion})` | Inserta en `transactions` | ⚠️ Usa `dummyUserId` hardcoded |

> **Nota**: Estas Server Actions solo se invocan desde el tool-calling del GPT Assistant dentro de `/api/chat`. **No se usan directamente desde la UI**, aunque podrían.

---

## 2. Convenciones

### 2.1 Estructura de archivos

```
src/app/api/
├── chat/
│   └── route.ts                # POST /api/chat  (ya existe)
├── profile/
│   ├── route.ts                # GET, PUT /api/profile
│   ├── finscore/
│   │   └── route.ts            # GET /api/profile/finscore
│   └── racha/
│       └── route.ts            # GET /api/profile/racha
├── metas/
│   ├── route.ts                # GET, POST /api/metas
│   └── [id]/
│       └── route.ts            # GET, PUT, DELETE /api/metas/:id
├── transactions/
│   ├── route.ts                # GET, POST /api/transactions
│   ├── [id]/
│   │   └── route.ts            # GET, PUT, DELETE /api/transactions/:id
│   └── hormiga/
│       └── route.ts            # GET /api/transactions/hormiga
├── budgets/
│   ├── route.ts                # GET, POST /api/budgets
│   ├── [id]/
│   │   └── route.ts            # PUT, DELETE /api/budgets/:id
│   └── summary/
│       └── route.ts            # GET /api/budgets/summary
├── finscore/
│   └── history/
│       └── route.ts            # GET /api/finscore/history
├── gamification/
│   └── streak/
│       └── route.ts            # GET /api/gamification/streak
├── leak-buster/
│   └── graph/
│       └── route.ts            # GET /api/leak-buster/graph
├── alerts/
│   └── hormiga/
│       └── route.ts            # GET /api/alerts/hormiga
├── groups/
│   ├── route.ts                # GET, POST /api/groups
│   └── [id]/
│       ├── route.ts            # GET /api/groups/:id
│       ├── flow/
│       │   └── route.ts        # GET /api/groups/:id/flow
│       └── challenge/
│           └── route.ts        # GET /api/groups/:id/challenge
└── ai/
    └── tip/
        └── route.ts            # GET /api/ai/tip
```

### 2.2 Autenticación

Todos los endpoints (excepto los públicos de marketing) asumen un usuario autenticado. Extraer `userId` del contexto:

```typescript
import { createClient } from '@/lib/supabase/actions';

export async function GET() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const userId = user.id;
  // ... queries con filtro .eq('user_id', userId)
}
```

> **Hoy (estado actual)**: se usa `dummyUserId = '00000000-0000-0000-0000-000000000001'`. Durante la Fase 1 del roadmap de [mejoras-repo.md](./mejoras-repo.md) esto debe reemplazarse por auth real.

### 2.3 Formato de respuesta

**Éxito** (`2xx`):
```json
{
  "data": { /* el recurso o array */ },
  "meta": { "total": 42, "page": 1 }   // opcional, para paginación
}
```

**Error** (`4xx` / `5xx`):
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "El campo 'nombre' es requerido",
    "details": { /* opcional */ }
  }
}
```

### 2.4 Validación de inputs

Usar **Zod** en cada endpoint:

```typescript
import { z } from 'zod';

const bodySchema = z.object({
  nombre: z.string().min(1).max(100),
  monto_objetivo: z.number().positive(),
});

export async function POST(req: Request) {
  const parseResult = bodySchema.safeParse(await req.json());
  if (!parseResult.success) {
    return Response.json(
      { error: { code: 'VALIDATION_ERROR', details: parseResult.error.flatten() } },
      { status: 400 }
    );
  }
  const input = parseResult.data;
  // ...
}
```

### 2.5 Códigos HTTP

| Código | Cuándo usarlo |
|---|---|
| `200 OK` | GET exitoso, PUT/DELETE exitoso |
| `201 Created` | POST exitoso con recurso creado |
| `204 No Content` | DELETE exitoso sin cuerpo |
| `400 Bad Request` | Input inválido (Zod) |
| `401 Unauthorized` | Sin sesión |
| `403 Forbidden` | Con sesión pero sin permisos |
| `404 Not Found` | Recurso no existe |
| `409 Conflict` | Violación de constraint (ej: email duplicado) |
| `422 Unprocessable Entity` | Input válido sintácticamente pero no semánticamente |
| `500 Internal Server Error` | Bug inesperado |

---

## 3. Bloque crítico MVP (8 endpoints)

Estos 8 endpoints son el **mínimo indispensable** para que la app deje de ser un mockup y tenga datos reales.

---

### 3.1 `GET /api/profile`

**Propósito**: Retornar el perfil del usuario autenticado (nombre, FinScore, racha, avatar, etc.).

**Componentes que lo consumen**:
- [src/components/demo/HomeView.tsx](../src/components/demo/HomeView.tsx) → línea 84 muestra `[User Name]` como placeholder.
- [src/components/dashboard/FinScoreDial.tsx](../src/components/dashboard/FinScoreDial.tsx) → línea 61 tiene `"8850"` hardcoded.
- [src/components/dashboard/GamificationBanner.tsx](../src/components/dashboard/GamificationBanner.tsx) → línea 10 tiene `"7 días seguidos 🎯"` hardcoded.
- [src/components/mobile/MobileFinScore.tsx](../src/components/mobile/MobileFinScore.tsx) → recibe score por prop.

**Tabla Supabase**: `profiles`

**Query**:
```sql
SELECT id, full_name, email, avatar_url, pais, moneda_base,
       ingreso_mensual_est, meta_ahorro_mensual,
       finscore_actual, racha_actual_dias
FROM profiles
WHERE id = auth.uid();
```

**Response**:
```json
{
  "data": {
    "id": "uuid",
    "full_name": "Julián Zuluaga",
    "email": "julian@example.com",
    "avatar_url": null,
    "pais": "CO",
    "moneda_base": "COP",
    "ingreso_mensual_est": 3500000,
    "meta_ahorro_mensual": 500000,
    "finscore_actual": 650,
    "racha_actual_dias": 5
  }
}
```

**Implementación** (`src/app/api/profile/route.ts`):
```typescript
import { createClient } from '@/lib/supabase/actions';
import { NextResponse } from 'next/server';

export async function GET() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data });
}
```

**Prioridad**: 🔴 Alta

---

### 3.2 `GET /api/transactions`

**Propósito**: Listar transacciones con filtros por fecha, categoría, tipo, gasto hormiga, con paginación.

**Query params**:
| Param | Tipo | Ejemplo | Descripción |
|---|---|---|---|
| `from` | date | `2026-04-01` | Fecha inicial (inclusive) |
| `to` | date | `2026-04-10` | Fecha final (inclusive) |
| `preset` | string | `today`, `yesterday`, `week`, `month` | Shortcut de rango |
| `category` | string | `alimentacion` | Filtrar por categoría |
| `type` | string | `ingreso`, `gasto` | Filtrar por tipo |
| `hormiga` | boolean | `true` | Solo gastos hormiga |
| `limit` | int | `20` | Máximo resultados (default 50) |
| `offset` | int | `0` | Paginación |
| `sort` | string | `recent`, `amount_desc` | Orden |

**Componentes que lo consumen**:
- [src/components/demo/HomeView.tsx](../src/components/demo/HomeView.tsx) → líneas 214-223 muestran "Tinto -$4k" y "Corral -$35k" hardcoded.
- [src/components/demo/HistorialView.tsx](../src/components/demo/HistorialView.tsx) → líneas 64-133 con 5 transacciones fake (hoy + ayer).
- [src/components/demo/AnalyticsView.tsx](../src/components/demo/AnalyticsView.tsx) → líneas 157-191 "Últimos movimientos".

**Tabla Supabase**: `transactions`

**Query** (ejemplo con filtros):
```sql
SELECT id, tipo, monto, categoria, subcategoria, comercio, descripcion,
       metodo_entrada, es_gasto_hormiga, fecha_transaccion, created_at
FROM transactions
WHERE user_id = auth.uid()
  AND fecha_transaccion BETWEEN $from AND $to
  AND ($category IS NULL OR categoria = $category)
  AND ($type IS NULL OR tipo = $type)
ORDER BY fecha_transaccion DESC, created_at DESC
LIMIT $limit OFFSET $offset;
```

**Response**:
```json
{
  "data": [
    {
      "id": "uuid",
      "tipo": "gasto",
      "monto": 4500,
      "categoria": "alimentacion",
      "subcategoria": "snacks",
      "comercio": "Panadería",
      "descripcion": "Tinto",
      "es_gasto_hormiga": true,
      "fecha_transaccion": "2026-04-10"
    }
  ],
  "meta": { "total": 47, "limit": 20, "offset": 0 }
}
```

**Prioridad**: 🔴 Alta

---

### 3.3 `POST /api/transactions`

**Propósito**: Registrar una nueva transacción. **Debe recalcular el FinScore** en el servidor y retornar el delta.

**Componentes que lo consumen**:
- [src/components/mobile/MobileBottomBar.tsx](../src/components/mobile/MobileBottomBar.tsx) → hoy simula un gasto de -$15k con timeout; debería llamar al endpoint real.
- [src/app/app/page.tsx](../src/app/app/page.tsx) → líneas 13-20 tienen lógica client-side de `setFinScore(prev => prev - 15)`.
- Flujo de captura por voz/OCR (cuando exista).
- [src/components/demo/ChatView.tsx](../src/components/demo/ChatView.tsx) indirectamente (vía GPT tool-calling).

**Body** (Zod schema):
```typescript
const schema = z.object({
  tipo: z.enum(['ingreso', 'gasto']),
  monto: z.number().positive(),
  categoria: z.string().min(1),
  subcategoria: z.string().optional(),
  comercio: z.string().optional(),
  descripcion: z.string().optional(),
  metodo_entrada: z.enum(['manual', 'voz', 'ocr_imagen', 'ai', 'texto']),
  es_gasto_hormiga: z.boolean().default(false),
  fecha_transaccion: z.string().date().optional(),  // Default: hoy
  receipt_url: z.string().url().optional(),
});
```

**Lógica del handler**:
1. Validar body.
2. Insertar transacción en `transactions`.
3. Recalcular FinScore del usuario:
   - Sumar gastos del mes.
   - Comparar con `meta_ahorro_mensual`.
   - Aplicar penalizaciones (gastos hormiga, sobregiros de presupuestos).
   - Aplicar bonos (racha, metas cumplidas).
4. Actualizar `profiles.finscore_actual`.
5. Insertar registro en `finscore_history` con el delta.
6. Si la transacción afecta un `presupuesto` activo, actualizar `gastado_cop` y revisar alertas.
7. Retornar transacción + nuevo FinScore + delta.

**Response** (`201 Created`):
```json
{
  "data": {
    "transaction": { /* tx creada */ },
    "finscore": {
      "previous": 650,
      "current": 645,
      "delta": -5,
      "reason": "gasto_hormiga"
    },
    "budget_alert": {
      "categoria": "alimentacion",
      "gastado_cop": 720000,
      "limite_cop": 800000,
      "porcentaje": 90
    }
  }
}
```

**Prioridad**: 🔴 Alta

---

### 3.4 `GET /api/metas`

**Propósito**: Listar todas las metas del usuario (activas, cumplidas, abandonadas).

**Query params**:
| Param | Valores | Default |
|---|---|---|
| `estado` | `activa`, `cumplida`, `abandonada`, `all` | `activa` |

**Componentes que lo consumen**:
- [src/components/demo/MetasView.tsx](../src/components/demo/MetasView.tsx) → líneas 25-82 con 2 metas hardcoded (MacBook Pro, San Andrés).

**Tabla Supabase**: `metas`

**Query**:
```sql
SELECT id, nombre, tipo, monto_objetivo, monto_actual, fecha_objetivo,
       estado, emoji, bonus_finscore, ahorro_mensual_requerido, probabilidad_exito,
       created_at, updated_at,
       (monto_actual / monto_objetivo * 100) AS porcentaje_completado
FROM metas
WHERE user_id = auth.uid()
  AND ($estado = 'all' OR estado = $estado)
ORDER BY created_at DESC;
```

**Response**:
```json
{
  "data": [
    {
      "id": "uuid",
      "nombre": "MacBook Pro",
      "emoji": "💻",
      "tipo": "ahorro",
      "monto_objetivo": 6000000,
      "monto_actual": 3500000,
      "porcentaje_completado": 58.33,
      "fecha_objetivo": "2026-12-31",
      "estado": "activa",
      "ahorro_mensual_requerido": 312500,
      "probabilidad_exito": 0.72
    }
  ]
}
```

**Prioridad**: 🔴 Alta

---

### 3.5 `POST /api/metas`

**Propósito**: Crear una nueva meta de ahorro.

**Componentes que lo consumen**:
- [src/components/demo/MetasView.tsx](../src/components/demo/MetasView.tsx) → botón "Crear nueva meta" (líneas 93-96) hoy no hace nada.
- [src/components/demo/ChatView.tsx](../src/components/demo/ChatView.tsx) indirectamente (vía GPT tool `createMeta`).

**Body** (Zod):
```typescript
const schema = z.object({
  nombre: z.string().min(1).max(100),
  tipo: z.enum(['ahorro', 'fondo_emergencia', 'viaje', 'compra', 'otro']).default('ahorro'),
  monto_objetivo: z.number().positive(),
  fecha_objetivo: z.string().date().optional(),
  emoji: z.string().max(4).optional(),
});
```

**Lógica**:
1. Validar.
2. Calcular `ahorro_mensual_requerido` si hay `fecha_objetivo`:
   ```
   meses_restantes = diff(fecha_objetivo, hoy) / 30
   ahorro_mensual_requerido = monto_objetivo / meses_restantes
   ```
3. Calcular `probabilidad_exito` opcional (con base en ingresos y metas existentes).
4. Insertar.
5. Retornar la meta creada + mensaje motivador opcional.

**Response** (`201 Created`):
```json
{
  "data": {
    "id": "uuid",
    "nombre": "Viaje a Cartagena",
    "monto_objetivo": 2500000,
    "monto_actual": 0,
    "ahorro_mensual_requerido": 416666.67,
    "probabilidad_exito": 0.68,
    "estado": "activa"
  }
}
```

**Prioridad**: 🔴 Alta

---

### 3.6 `GET /api/budgets/summary`

**Propósito**: Resumen agregado de presupuestos del mes actual — cuánto se gastó vs cuánto se presupuestó, por categoría.

**Query params**:
| Param | Default | Descripción |
|---|---|---|
| `year` | año actual | Año |
| `month` | mes actual | Mes (1-12) |

**Componentes que lo consumen**:
- [src/components/demo/AnalyticsView.tsx](../src/components/demo/AnalyticsView.tsx) → donut "Presupuesto Mecato y Rumba" (líneas 29-74) con 90%, $450k/$500k hardcoded.
- [src/components/demo/HomeView.tsx](../src/components/demo/HomeView.tsx) → "Presupuesto Mecato" $80k/$100k (líneas 194-203).

**Tabla Supabase**: `presupuestos`

**Query**:
```sql
SELECT categoria,
       limite_cop,
       gastado_cop,
       (gastado_cop / limite_cop * 100) AS porcentaje_usado,
       alerta_80pct_enviada,
       sobrepasado
FROM presupuestos
WHERE user_id = auth.uid()
  AND anio = $year
  AND mes = $month
ORDER BY gastado_cop DESC;
```

**Response**:
```json
{
  "data": {
    "year": 2026,
    "month": 4,
    "total_presupuestado": 1100000,
    "total_gastado": 715000,
    "porcentaje_total": 65,
    "categorias": [
      {
        "categoria": "alimentacion",
        "limite_cop": 800000,
        "gastado_cop": 465000,
        "porcentaje_usado": 58,
        "sobrepasado": false
      },
      {
        "categoria": "entretenimiento",
        "limite_cop": 300000,
        "gastado_cop": 250000,
        "porcentaje_usado": 83,
        "alerta_80pct_enviada": true,
        "sobrepasado": false
      }
    ]
  }
}
```

**Prioridad**: 🔴 Alta

---

### 3.7 `GET /api/leak-buster/graph`

**Propósito**: Datos estructurados para renderizar el gráfico de fugas (D3 force-directed). Agrupa transacciones por categoría/subcategoría y marca clusters con alertas.

**Componentes que lo consumen**:
- [src/components/dashboard/LeakBusterGraph.tsx](../src/components/dashboard/LeakBusterGraph.tsx) → líneas 14-81 con nodos y links hardcoded.
- [src/components/mobile/MobileLeakBuster.tsx](../src/components/mobile/MobileLeakBuster.tsx) → líneas 20-65 con datos fake del gráfico.
- [src/components/demo/HomeView.tsx](../src/components/demo/HomeView.tsx) → líneas 27-64 con `centerNode`, `categories`, `subNodes`, `alertNodes`.

**Query params**:
| Param | Default | Descripción |
|---|---|---|
| `period` | `month` | `week`, `month`, `quarter` |
| `alert_threshold` | `100000` | Umbral para marcar cluster como alerta (COP) |

**Lógica**:
1. Cargar transacciones del período.
2. Agrupar por `categoria` → nodos nivel 1.
3. Agrupar por `subcategoria` dentro de cada categoría → nodos nivel 2.
4. Marcar como `isAlert` los grupos de gastos hormiga con total > `alert_threshold`.
5. Construir links: centro → categoría → subcategoría.
6. Calcular radio del nodo proporcional al monto.

**Response**:
```json
{
  "data": {
    "nodes": [
      { "id": "center", "type": "center", "label": "Ingresos", "amount": 3500000, "radius": 50 },
      { "id": "cat-alimentacion", "type": "category", "label": "Alimentación", "amount": 465000, "radius": 35 },
      { "id": "sub-snacks", "type": "subcategory", "parent": "cat-alimentacion", "label": "Snacks", "amount": 150000, "isAlert": true, "transactions": 12, "radius": 20 }
    ],
    "links": [
      { "source": "center", "target": "cat-alimentacion", "value": 465000 },
      { "source": "cat-alimentacion", "target": "sub-snacks", "value": 150000 }
    ],
    "summary": {
      "total_gastado": 2100000,
      "fugas_detectadas": 3,
      "monto_en_fugas": 180000
    }
  }
}
```

**Prioridad**: 🔴 Alta (es el componente "wow" del app).

---

### 3.8 `GET /api/alerts/hormiga`

**Propósito**: Detectar clusters de gastos hormiga en los últimos N días y retornar un desglose para el modal de alerta.

**Query params**:
| Param | Default | Descripción |
|---|---|---|
| `days` | `7` | Ventana de análisis (días) |

**Componentes que lo consumen**:
- [src/components/demo/AlertModal.tsx](../src/components/demo/AlertModal.tsx) → líneas 33-57 con "150.000 en 7 días" y desglose hardcoded (Tinto, Empanadas, Uber, Snacks).

**Tabla Supabase**: `transactions`

**Query**:
```sql
WITH ventana AS (
  SELECT *
  FROM transactions
  WHERE user_id = auth.uid()
    AND es_gasto_hormiga = true
    AND fecha_transaccion >= CURRENT_DATE - INTERVAL '$days days'
)
SELECT
  COALESCE(subcategoria, categoria) AS grupo,
  COUNT(*) AS cantidad,
  SUM(monto) AS total,
  AVG(monto) AS promedio,
  MAX(fecha_transaccion) AS ultima_fecha
FROM ventana
GROUP BY grupo
HAVING SUM(monto) > 10000
ORDER BY total DESC
LIMIT 10;
```

**Response**:
```json
{
  "data": {
    "periodo_dias": 7,
    "total_hormiga": 150000,
    "cantidad_transacciones": 18,
    "impacto_finscore": -30,
    "desglose": [
      { "grupo": "Tinto", "cantidad": 7, "total": 21000, "promedio": 3000 },
      { "grupo": "Empanadas", "cantidad": 5, "total": 35000, "promedio": 7000 },
      { "grupo": "Uber", "cantidad": 3, "total": 45000, "promedio": 15000 },
      { "grupo": "Snacks", "cantidad": 3, "total": 49000, "promedio": 16333 }
    ],
    "mensaje_ia": "Uy parcero, en 7 días te has gastado $150k en hormigas. Esos tintos suman más de lo que crees."
  }
}
```

**Prioridad**: 🔴 Alta

---

## 4. Bloque completo MVP (14 endpoints)

Estos endpoints extienden el MVP con funcionalidad secundaria pero necesaria para una experiencia completa.

---

### 4.1 `PUT /api/profile`

**Propósito**: Actualizar datos del perfil (nombre, ingreso_mensual_est, meta_ahorro_mensual, avatar_url).

**Body**:
```typescript
const schema = z.object({
  full_name: z.string().min(1).max(100).optional(),
  avatar_url: z.string().url().optional(),
  ingreso_mensual_est: z.number().nonnegative().optional(),
  meta_ahorro_mensual: z.number().nonnegative().optional(),
  pais: z.string().length(2).optional(),
  moneda_base: z.string().length(3).optional(),
});
```

**Prioridad**: 🟡 Media

---

### 4.2 `GET /api/profile/finscore`

**Propósito**: Solo el FinScore actual + último delta + tendencia. Endpoint ligero para el header.

**Query**:
```sql
SELECT p.finscore_actual,
       h.delta AS ultimo_delta,
       h.fecha AS ultima_actualizacion
FROM profiles p
LEFT JOIN LATERAL (
  SELECT delta, fecha FROM finscore_history
  WHERE user_id = p.id
  ORDER BY fecha DESC LIMIT 1
) h ON true
WHERE p.id = auth.uid();
```

**Response**:
```json
{
  "data": {
    "finscore_actual": 650,
    "ultimo_delta": -5,
    "ultima_actualizacion": "2026-04-10",
    "tendencia": "descendente"
  }
}
```

**Prioridad**: 🟡 Media (se puede derivar de `/api/profile` para no fragmentar)

---

### 4.3 `GET /api/profile/racha`

**Propósito**: Racha actual de ahorro + siguiente hito.

**Response**:
```json
{
  "data": {
    "racha_dias_actual": 14,
    "nivel_actual": "Plata",
    "siguiente_nivel": "Oro",
    "dias_para_siguiente": 16,
    "multiplicador_finscore": 1.2
  }
}
```

**Prioridad**: 🟡 Media

---

### 4.4 `GET /api/metas/:id`

**Propósito**: Detalle de una meta específica.

**Prioridad**: 🟡 Media

---

### 4.5 `PUT /api/metas/:id`

**Propósito**: Actualizar una meta (cambiar monto, fecha, nombre, o **incrementar `monto_actual`** al aportar).

**Body**:
```typescript
const schema = z.object({
  nombre: z.string().min(1).max(100).optional(),
  monto_objetivo: z.number().positive().optional(),
  fecha_objetivo: z.string().date().optional(),
  incremento_aporte: z.number().positive().optional(),  // suma a monto_actual
  estado: z.enum(['activa', 'cumplida', 'abandonada']).optional(),
});
```

**Lógica**:
- Si `incremento_aporte`: hacer `UPDATE ... SET monto_actual = monto_actual + $incremento`.
- Si `monto_actual >= monto_objetivo`: marcar `estado = 'cumplida'` y otorgar bonus al FinScore.

**Prioridad**: 🟡 Media

---

### 4.6 `DELETE /api/metas/:id`

**Propósito**: Eliminar (soft delete) una meta. Recomendado cambiar `estado = 'abandonada'` en lugar de borrar físicamente.

**Prioridad**: 🟢 Baja

---

### 4.7 `GET /api/transactions/:id` / `PUT /api/transactions/:id` / `DELETE /api/transactions/:id`

**Propósito**: CRUD individual de una transacción (editar monto, categoría, corregir un error, etc.).

**Observación**: Al editar o borrar, **recalcular el FinScore** y revertir/aplicar el delta correspondiente.

**Prioridad**: 🟡 Media

---

### 4.8 `GET /api/transactions/hormiga`

**Propósito**: Listado dedicado de solo gastos hormiga con agregaciones.

**Query params**: `days`, `group_by` (`day`, `category`, `subcategory`).

**Prioridad**: 🟡 Media (complementa a `/api/alerts/hormiga`)

---

### 4.9 `GET /api/budgets`

**Propósito**: Listar todos los presupuestos del usuario (mes actual por default).

**Prioridad**: 🟡 Media

---

### 4.10 `POST /api/budgets`

**Propósito**: Crear un presupuesto para una categoría.

**Body**:
```typescript
const schema = z.object({
  categoria: z.string().min(1),
  limite_cop: z.number().positive(),
  anio: z.number().int().min(2025).optional(),   // Default: año actual
  mes: z.number().int().min(1).max(12).optional(), // Default: mes actual
});
```

**Prioridad**: 🟡 Media

---

### 4.11 `PUT /api/budgets/:id` / `DELETE /api/budgets/:id`

**Prioridad**: 🟡 Media

---

### 4.12 `GET /api/finscore/history`

**Propósito**: Historial del FinScore con granularidad configurable (para gráfica de evolución).

**Query params**:
| Param | Default | Valores |
|---|---|---|
| `period` | `month` | `week`, `month`, `quarter`, `year` |
| `granularity` | `daily` | `daily`, `weekly`, `monthly` |

**Componentes que lo consumen**:
- Componente futuro de gráfica histórica (no existe aún).
- [src/components/dashboard/FinScoreDial.tsx](../src/components/dashboard/FinScoreDial.tsx) → para el indicador de tendencia.

**Query**:
```sql
SELECT fecha, score, delta, racha_dia, total_gastos_dia, total_ingresos_dia, gastos_hormiga_dia
FROM finscore_history
WHERE user_id = auth.uid()
  AND fecha >= CURRENT_DATE - INTERVAL '$period'
ORDER BY fecha ASC;
```

**Prioridad**: 🟡 Media

---

### 4.13 `GET /api/gamification/streak`

**Propósito**: Calcular la racha actual en días + siguiente hito + recompensas disponibles.

**Componentes que lo consumen**:
- [src/components/dashboard/GamificationBanner.tsx](../src/components/dashboard/GamificationBanner.tsx) → línea 10 `"7 días seguidos 🎯"`.

**Lógica**:
1. Consultar `profiles.racha_actual_dias`.
2. Consultar `racha_config` (si existe) para niveles.
3. Calcular días restantes hasta el próximo nivel.

**Prioridad**: 🟡 Media

---

### 4.14 `GET /api/leak-buster/summary`

**Propósito**: Versión simplificada del gráfico — solo los números clave (stats footer).

**Componentes que lo consumen**:
- [src/components/mobile/MobileLeakBuster.tsx](../src/components/mobile/MobileLeakBuster.tsx) → líneas 70-80 con "6 suscripciones activas", "3 micro-recompensas pendientes".

**Response**:
```json
{
  "data": {
    "total_ingresos_mes": 3500000,
    "total_gastos_mes": 2100000,
    "suscripciones_activas": 6,
    "monto_suscripciones": 180000,
    "fugas_detectadas": 3,
    "monto_fugas": 150000,
    "ahorro_potencial": 250000
  }
}
```

**Prioridad**: 🟡 Media

---

## 5. Bloque social + IA (Fase 2)

Estos endpoints requieren las tablas del módulo social (hoy vacías en Supabase) y funcionalidad de IA avanzada.

---

### 5.1 `GET /api/groups`

**Propósito**: Listar grupos a los que pertenece el usuario.

**Query**:
```sql
SELECT g.id, g.nombre, g.created_at, mg.es_admin
FROM grupos g
JOIN miembros_grupo mg ON mg.grupo_id = g.id
WHERE mg.usuario_id = auth.uid() AND NOT mg.esta_bloqueado;
```

**Prioridad**: 🟢 Baja (módulo social no implementado aún)

---

### 5.2 `POST /api/groups`

**Propósito**: Crear grupo nuevo.

**Prioridad**: 🟢 Baja

---

### 5.3 `GET /api/groups/:id`

**Propósito**: Detalles del grupo + lista de miembros.

**Prioridad**: 🟢 Baja

---

### 5.4 `POST /api/groups/:id/join`

**Propósito**: Agregar al usuario actual al grupo.

**Prioridad**: 🟢 Baja

---

### 5.5 `GET /api/groups/:id/flow`

**Propósito**: Datos para el Sankey/Flow Diagram de gasto grupal.

**Componentes que lo consumen**:
- [src/components/demo/AnalyticsView.tsx](../src/components/demo/AnalyticsView.tsx) → líneas 77-145 con "Tú $100k", "Sofía $140k", "Andrés $210k" hardcoded.

**Response**:
```json
{
  "data": {
    "total": 450000,
    "nodes": [
      { "id": "tu", "label": "Tú", "value": 100000 },
      { "id": "sofia", "label": "Sofía", "value": 140000 },
      { "id": "andres", "label": "Andrés", "value": 210000 }
    ],
    "links": [
      { "source": "centro", "target": "tu", "value": 100000 }
    ]
  }
}
```

**Prioridad**: 🟢 Baja

---

### 5.6 `GET /api/groups/:id/challenge`

**Propósito**: Challenge activo del grupo (ej: "No Domicilios 🍔 — Andrés y Sofía — 3 días").

**Componentes que lo consumen**:
- [src/components/demo/HomeView.tsx](../src/components/demo/HomeView.tsx) → líneas 380-388 con reto grupal hardcoded.

**Prioridad**: 🟢 Baja

---

### 5.7 `GET /api/ai/tip`

**Propósito**: Generar un consejo personalizado usando OpenAI con contexto del usuario (FinScore, gastos del mes, metas activas).

**Componentes que lo consumen**:
- [src/components/demo/HomeView.tsx](../src/components/demo/HomeView.tsx) → línea 368 "El Tip del Pana" con texto fijo.

**Lógica**:
1. Cargar contexto del usuario (gastos hormiga, metas, presupuestos sobrepasados).
2. Llamar a OpenAI con un system prompt tipo "eres un coach financiero paisa".
3. Cachear la respuesta por algunas horas (es costoso).

**Implementación**:
```typescript
export const revalidate = 3600; // Cache 1 hora

export async function GET() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  // 1. Cargar contexto
  const [profile, hormiga, metas] = await Promise.all([
    supabase.from('profiles').select('finscore_actual, meta_ahorro_mensual').eq('id', user.id).single(),
    supabase.from('transactions').select('descripcion, monto').eq('user_id', user.id).eq('es_gasto_hormiga', true).gte('fecha_transaccion', last7days),
    supabase.from('metas').select('nombre, monto_objetivo, monto_actual').eq('user_id', user.id).eq('estado', 'activa')
  ]);

  // 2. OpenAI con el contexto
  const tip = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'Eres Lukas, un coach financiero paisa. Responde breve (2-3 líneas), con humor y acento paisa ("parcero", "pues", "zona").' },
      { role: 'user', content: `Mi contexto: FinScore ${profile.data?.finscore_actual}, gastos hormiga ${hormiga.data?.length} esta semana, ${metas.data?.length} metas activas. Dame un tip específico y accionable.` }
    ],
    max_tokens: 150,
  });

  return Response.json({ data: { tip: tip.choices[0].message.content } });
}
```

**Prioridad**: 🟢 Baja

---

### 5.8 `POST /api/transactions/voice`

**Propósito**: Endpoint especializado para capturar una transacción desde audio. Recibe archivo, transcribe con Whisper, parsea intención, y llama a `/api/transactions` internamente.

**Componentes que lo consumen**:
- [src/components/mobile/MobileBottomBar.tsx](../src/components/mobile/MobileBottomBar.tsx) → hoy solo simula.

**Prioridad**: 🟢 Baja (nice to have post-MVP)

---

### 5.9 `POST /api/transactions/ocr`

**Propósito**: Recibir una imagen de recibo, extraer datos con GPT-4 Vision, crear la transacción.

**Prioridad**: 🟢 Baja

---

### 5.10 `GET /api/messages/:threadId`

**Propósito**: Historial persistente de mensajes del chat (si se decide espejar en Supabase).

**Tablas**: `conversations`, `messages`.

**Prioridad**: 🟢 Baja (hoy el chat solo usa OpenAI threads en memoria)

---

## 6. Resumen por tabla de Supabase

| Tabla | Endpoints relacionados | Total |
|---|---|---|
| `profiles` | GET /api/profile, PUT /api/profile, GET /api/profile/finscore, GET /api/profile/racha | **4** |
| `metas` | GET /api/metas, POST /api/metas, GET /api/metas/:id, PUT /api/metas/:id, DELETE /api/metas/:id | **5** |
| `transactions` | GET /api/transactions, POST /api/transactions, GET /api/transactions/:id, PUT /api/transactions/:id, DELETE /api/transactions/:id, GET /api/transactions/hormiga, POST /api/transactions/voice, POST /api/transactions/ocr | **8** |
| `presupuestos` | GET /api/budgets, POST /api/budgets, PUT /api/budgets/:id, DELETE /api/budgets/:id, GET /api/budgets/summary | **5** |
| `finscore_history` | GET /api/finscore/history | **1** |
| `transactions` (agregaciones) | GET /api/leak-buster/graph, GET /api/leak-buster/summary, GET /api/alerts/hormiga | **3** |
| `profiles` + `finscore_history` | GET /api/gamification/streak | **1** |
| `grupos`, `miembros_grupo` | GET /api/groups, POST /api/groups, GET /api/groups/:id, POST /api/groups/:id/join, GET /api/groups/:id/flow, GET /api/groups/:id/challenge | **6** |
| `conversations`, `messages` | GET /api/messages/:threadId | **1** |
| OpenAI (sin tabla) | GET /api/ai/tip | **1** |

**Total de endpoints nuevos a crear: ~35**

---

## 7. Patrón de implementación

### 7.1 Template base para cualquier endpoint

```typescript
// src/app/api/<recurso>/route.ts
import { createClient } from '@/lib/supabase/actions';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// 1. Schema de validación
const querySchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
});

// 2. GET handler
export async function GET(req: NextRequest) {
  // 2.1 Autenticación
  const supabase = await createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json(
      { error: { code: 'UNAUTHORIZED', message: 'Sesión requerida' } },
      { status: 401 }
    );
  }

  // 2.2 Validación de query params
  const params = Object.fromEntries(new URL(req.url).searchParams);
  const parsed = querySchema.safeParse(params);
  if (!parsed.success) {
    return NextResponse.json(
      { error: { code: 'VALIDATION_ERROR', details: parsed.error.flatten() } },
      { status: 400 }
    );
  }
  const { limit, offset } = parsed.data;

  // 2.3 Query a Supabase
  const { data, error, count } = await supabase
    .from('<tabla>')
    .select('*', { count: 'exact' })
    .eq('user_id', user.id)
    .range(offset, offset + limit - 1);

  if (error) {
    console.error('[API /<recurso>] DB error:', error);
    return NextResponse.json(
      { error: { code: 'DB_ERROR', message: error.message } },
      { status: 500 }
    );
  }

  // 2.4 Respuesta
  return NextResponse.json({
    data,
    meta: { total: count, limit, offset }
  });
}
```

### 7.2 Template para POST con validación de body

```typescript
const bodySchema = z.object({
  // ... campos
});

export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: { code: 'VALIDATION_ERROR', details: parsed.error.flatten() } },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from('<tabla>')
    .insert({ ...parsed.data, user_id: user.id })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 201 });
}
```

### 7.3 Orden recomendado de construcción

1. **Setup base** (antes de cualquier endpoint):
   - Crear `src/lib/supabase/admin.ts` con cliente service_role.
   - Crear `src/lib/env.ts` con validación Zod de variables.
   - Generar tipos con `npx supabase gen types typescript`.
   - Implementar auth real (Fase 1 de [mejoras-repo.md](./mejoras-repo.md)).

2. **Primer endpoint** (para validar el patrón):
   - `GET /api/profile` — el más simple, sin parámetros, una sola tabla.

3. **Segundo endpoint**:
   - `GET /api/metas` — introduce filtros por query params.

4. **Tercer endpoint** (con mutaciones):
   - `POST /api/metas` — valida Zod, insert, retorna 201.

5. **Endpoint con lógica de negocio**:
   - `POST /api/transactions` — el más complejo: insert + recalcular FinScore + actualizar presupuestos + historial.

6. **Endpoints de agregación**:
   - `GET /api/budgets/summary`
   - `GET /api/leak-buster/graph`
   - `GET /api/alerts/hormiga`

7. **Conectar cada endpoint al frontend**:
   - Crear hook (`useMetas`, `useTransactions`, etc.).
   - Reemplazar datos hardcoded en el componente correspondiente.
   - Agregar estados de loading/error/empty.

8. **Iterar** con los 14 endpoints del MVP completo.

9. **Fase 2**: módulo social + IA avanzada (`/api/ai/tip`, grupos).

---

## 8. Priorización final

### 🔴 Bloque crítico MVP — Implementar primero (semana 1-2)

| # | Endpoint | Componentes |
|---|---|---|
| 1 | `GET /api/profile` | HomeView, FinScoreDial, GamificationBanner, MobileFinScore |
| 2 | `GET /api/transactions` | HomeView, HistorialView, AnalyticsView |
| 3 | `POST /api/transactions` | MobileBottomBar, app/page.tsx |
| 4 | `GET /api/metas` | MetasView |
| 5 | `POST /api/metas` | MetasView |
| 6 | `GET /api/budgets/summary` | AnalyticsView, HomeView |
| 7 | `GET /api/leak-buster/graph` | LeakBusterGraph, MobileLeakBuster, HomeView |
| 8 | `GET /api/alerts/hormiga` | AlertModal |

### 🟡 Bloque completo MVP (semana 3-4)

| # | Endpoint |
|---|---|
| 9 | `PUT /api/profile` |
| 10 | `GET /api/profile/finscore` |
| 11 | `GET /api/profile/racha` |
| 12 | `GET /api/metas/:id` |
| 13 | `PUT /api/metas/:id` |
| 14 | `GET /api/transactions/:id` |
| 15 | `PUT /api/transactions/:id` |
| 16 | `DELETE /api/transactions/:id` |
| 17 | `GET /api/budgets` |
| 18 | `POST /api/budgets` |
| 19 | `GET /api/finscore/history` |
| 20 | `GET /api/gamification/streak` |
| 21 | `GET /api/leak-buster/summary` |
| 22 | `GET /api/transactions/hormiga` |

### 🟢 Bloque social + IA (Fase 2, posterior)

| # | Endpoint |
|---|---|
| 23-28 | Endpoints de `/api/groups/*` |
| 29 | `GET /api/ai/tip` |
| 30 | `POST /api/transactions/voice` |
| 31 | `POST /api/transactions/ocr` |
| 32 | `GET /api/messages/:threadId` |
| 33 | `DELETE /api/metas/:id` |
| 34 | `PUT /api/budgets/:id` |
| 35 | `DELETE /api/budgets/:id` |

---

## 9. Checklist por endpoint

Al implementar cada endpoint, verificar:

- [ ] Autenticación: extrae `userId` del contexto y valida sesión.
- [ ] Validación: usa Zod para query params y/o body.
- [ ] Autorización: filtra por `user_id` en todas las queries.
- [ ] Errores: maneja `error` de Supabase y retorna códigos HTTP apropiados.
- [ ] Tipos: usa tipos generados de Supabase (`Database['public']['Tables']['<tabla>']['Row']`).
- [ ] Logs: `console.error` en casos de error con prefijo del endpoint.
- [ ] Tests: unitario para lógica + integración si es posible.
- [ ] Documentación: comentario JSDoc en el handler explicando request/response.
- [ ] RLS: verifica que las políticas de la tabla permitan la operación con `auth.uid()`.
- [ ] Frontend: hook correspondiente creado y componente migrado.
- [ ] Empty/Loading/Error states: UI maneja los 3 casos.
