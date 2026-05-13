# Lukas AI — Documentación Técnica

## Arquitectura General

```
lukas_ia_app/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/
│   │   │   ├── chat/           # Agente principal de IA (Gemini 2.5 Flash)
│   │   │   ├── profile/        # Perfil y saldo del usuario
│   │   │   │   └── recalculate-score/  # Recalcula FinScore manualmente
│   │   │   ├── transactions/   # Registro de gastos e ingresos
│   │   │   ├── metas/          # Metas de ahorro
│   │   │   ├── budgets/        # Presupuestos por categoría (POST + summary)
│   │   │   ├── groups/         # Grupos financieros compartidos
│   │   │   ├── alerts/
│   │   │   │   ├── hormiga/    # Detección de gastos hormiga (patterns)
│   │   │   │   └── leak-buster/ # Alertas globales de fugas
│   │   │   ├── leak-buster/
│   │   │   │   └── graph/      # Datos para grafo D3 (nodos + links)
│   │   │   ├── trends/fetch/   # Scraper de tendencias (X Colombia)
│   │   │   └── prices/exito/   # Comparador de precios Éxito.com (VTEX API)
│   │   ├── app/                # Vista de la app móvil (autenticado)
│   │   ├── sign-in/            # Página de login (Clerk)
│   │   └── sign-up/            # Página de registro (Clerk)
│   ├── components/
│   │   ├── demo/
│   │   │   ├── DemoContainer.tsx   # Contenedor principal — maneja tabs y chat global
│   │   │   ├── ChatView.tsx        # Interfaz de chat con Lukas (estado persistente por tab)
│   │   │   ├── HomeView.tsx        # Inicio: saldo, FinScore, racha, desglose real de gastos
│   │   │   ├── MetasView.tsx       # CRUD de metas de ahorro
│   │   │   ├── HistorialView.tsx   # Historial de transacciones
│   │   │   ├── AnalyticsView.tsx   # Análisis: donut presupuesto + grafo D3 + movimientos
│   │   │   ├── ForceGraph.tsx      # Grafo D3 force-directed interactivo de gastos
│   │   │   └── AlertModal.tsx      # Modal de alertas de gastos hormiga
│   │   └── mobile/
│   │       ├── MobileHeader.tsx
│   │       └── MobileBottomBar.tsx
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts       # Cliente navegador (con fallback)
│   │   │   ├── server.ts       # Cliente servidor (con fallback)
│   │   │   ├── admin.ts        # Cliente admin con SERVICE_ROLE_KEY
│   │   │   └── middleware.ts   # Actualización de sesión Supabase en proxy
│   │   ├── lukas-user.ts       # Helper: obtener usuario Clerk + perfil Supabase
│   │   └── lukas-ai-system.ts  # System prompt del agente Lukas (secciones 1–9)
│   └── proxy.ts                # Proxy Next.js 16 (auth Clerk + sesión Supabase)
├── scripts/
│   ├── scraper_market.py       # Scraper Playwright para Éxito.com → external_data.market_prices
│   ├── external_data_schema.sql # SQL: schema external_data + tabla market_prices
│   └── requirements.txt        # Dependencias Python del scraper
└── .github/
    └── workflows/
        └── prices_pipeline.yml # GitHub Action: ingesta semanal automática (domingos)
```

---

## Variables de Entorno Requeridas

Crea el archivo `.env.local` en la raíz del proyecto:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL="https://cvrrygffwmxmemlsdnax.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJ..."
SUPABASE_SERVICE_ROLE_KEY="eyJ..."

# Gemini AI (Google)
GEMINI_API_KEY="AIza..."

# Clerk (Autenticación)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/app
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/app
```

> **Importante:** El archivo `.env.local` **nunca se sube a GitHub** (está en `.gitignore`). Pídele las claves al responsable del proyecto.

---

## Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 16.1.6 (App Router, Turbopack) |
| Autenticación | Clerk (@clerk/nextjs) |
| Base de Datos | Supabase (PostgreSQL) |
| IA del Agente | Google Gemini 2.5 Flash |
| Visualización | D3.js v7 (grafo force-directed) |
| Animaciones | Framer Motion |
| Estilos | Tailwind CSS v4 |
| Lenguaje | TypeScript |

---

## Flujo del Agente de Chat

```
Usuario escribe mensaje
        ↓
ChatView.tsx (componente)
        ↓
POST /api/chat/route.ts
        ↓
  1. Obtener usuario (Clerk → Supabase)
  2. Cargar contexto financiero (perfil, transacciones, metas, presupuestos, tendencias)
  3. Detectar si menciona un gasto → consultar /api/prices/exito (VTEX API en tiempo real)
  4. Intercept de precio: si diff > ±15% → generar respuesta directa sin pasar por Gemini
  5. Si intento determinístico → localFallback() (reglas sin llamar IA)
  6. Si no → Gemini 2.5 Flash con contexto completo
        ↓
  Respuesta con <action> tags JSON (invisible para el usuario)
        ↓
ChatView.tsx parsea:
  - cleanContent()    → elimina tags, muestra texto limpio
  - parseActions()    → extrae JSON de acciones
  - executeActions()  → llama APIs (transactions, metas, profile, budgets, groups)
        ↓
  onRefreshData() → recarga datos en la vista activa
  (NO cambia de tab automáticamente — el usuario permanece en el chat)
```

**Regla de navegación:** El agente SOLO cambia de tab cuando el usuario lo pide explícitamente ("ir a metas", "ver historial", "abre grupos"). Registrar gastos, ingresos, metas o actualizar saldo NO cambia de pestaña.

---

## Sistema de Acciones del Agente

El backend embebe acciones en la respuesta usando tags `<action>{JSON}</action>`.
El frontend los parsea y ejecuta en `ChatView.tsx → executeActions()`.

| Tipo de Acción | Qué hace | API llamada |
|---------------|----------|-------------|
| `ADD_TRANSACTION` | Registra gasto o ingreso | POST /api/transactions |
| `ADD_GASTO_HORMIGA` | Registra gasto hormiga (pequeño y repetitivo) | POST /api/transactions con es_gasto_hormiga: true |
| `CREATE_GOAL` | Crea meta de ahorro | POST /api/metas |
| `SET_CURRENT_BALANCE` | Actualiza saldo disponible | PUT /api/profile |
| `CREATE_BUDGET` | Crea presupuesto por categoría | POST /api/budgets |
| `CREATE_GROUP` | Crea grupo financiero y envía invitación | POST /api/groups |
| `SET_GROUP_PERSONAL_BUDGET` | Asigna presupuesto personal en Grupos | PATCH /api/groups |
| `NAVIGATE` | Cambia de tab (solo cuando el usuario lo pide) | — |

**Ejemplo de respuesta del agente:**
```
Listo pana, registro ese gasto en Salidas.
<action>{"type":"ADD_TRANSACTION","monto":30000,"tipo":"gasto","descripcion":"Panel de huevos","categoria":"Salidas","subcategoria":"Panel de huevos","es_gasto_hormiga":false}</action>
```

---

## Comparador de Precios (Éxito.com)

**Endpoint:** `GET /api/prices/exito?q=panel+de+huevos`

**Cómo funciona:**
1. El chat detecta automáticamente frases de gasto ("compré", "gasté", "pagué")
2. Extrae el nombre del producto del mensaje en lenguaje natural
3. Consulta la **VTEX API de Éxito** en tiempo real (no scraping HTML)
   - URL: `https://www.exito.com/io/api/catalog_system/pub/products/search/{query}`
4. Calcula si el precio pagado fue caro/barato/justo (umbral ±15% del precio promedio)
5. Si la diferencia es significativa, genera respuesta directa sin pasar por Gemini

**Veredictos y respuestas:**
| Situación | Condición | Respuesta de Lukas |
|-----------|-----------|-------------------|
| CARO | Pagaste >15% más que Éxito | "¡Uy pana, te dejaste tumbar! 😬 Pagaste $X por Y y en Éxito está a $Z..." |
| BARATO | Pagaste >15% menos que Éxito | "¡Buena compra, pana! 🎯 Ahorraste $X vs Éxito..." |
| PRECIO JUSTO | Diferencia ≤15% | Solo registra el gasto, sin comentar el precio |

En todos los casos se registra la transacción automáticamente con `ADD_TRANSACTION`.

**Respuesta del endpoint:**
```json
{
  "success": true,
  "query": "panel de huevos",
  "source": "Éxito Colombia (VTEX API)",
  "count": 5,
  "avg_price": 22000,
  "min_price": 9400,
  "max_price": 26900,
  "products": [
    { "name": "Huevos Kike x12", "brand": "Kike", "price": 9400 }
  ]
}
```

---

## Grafo D3 de Gastos (Radar de Gastos)

**Componente:** `src/components/demo/ForceGraph.tsx`
**Endpoint de datos:** `GET /api/leak-buster/graph?period=month`

El grafo es una visualización interactiva tipo **force-directed** usando D3.js v7.

**Estructura de nodos:**
| Tipo | Color | Descripción |
|------|-------|-------------|
| `center` | Azul marino con borde dorado | Nodo raíz — muestra total gastado |
| `category` | Dorado translúcido | Categorías: Fijos, Salidas, Susc. |
| `subcategory` | Blanco suave | Subcategorías/descripciones |
| `subcategory` (alerta) | Rojo/naranja con glow | Posible fuga o gasto hormiga |

**Interacción:**
- Toca un nodo → muestra panel inferior con nombre y monto
- Arrastra nodos → el grafo se reorganiza (draggable con D3 drag)
- Fugas detectadas → contador inferior en rojo

---

## Desglose de Gastos (HomeView)

El card "Desglose de Gastos" en Home muestra las categorías **siempre**, con o sin presupuesto activo.

**Fuente de datos:** `GET /api/transactions?limit=100` (últimas 100 transacciones)

**Categorías mostradas:**
| Categoría | Color | Incluye |
|-----------|-------|---------|
| Fijos | Azul | Arriendo, servicios, mercado — `categoria === 'Fijos'` |
| Salidas | Verde | Restaurantes, ocio, transporte — `categoria === 'Salidas'` |
| Susc. | Morado | Netflix, Spotify, suscripciones — `categoria === 'Susc.'` |
| Hormigas | Rojo-naranja | Gastos con `es_gasto_hormiga === true` |

Si hay presupuesto activo, muestra adicionalmente el % usado del presupuesto.

---

## Sistema de Alertas

### Gastos Hormiga
Un gasto es "hormiga" cuando:
- Monto ≤ $80.000 COP
- Ocurre 3+ veces en 30 días en la misma categoría semántica
- Ejemplos típicos: tintos, snacks, domicilios frecuentes, Uber cortos

**Endpoint:** `GET /api/alerts/hormiga?days=30`

### Alertas de Presupuesto
Si una categoría supera el 80% del presupuesto al registrar un gasto, Lukas avisa:
> "⚠️ Con esto llevas el 87% de tu presupuesto de Salidas este mes. Cuidado pana."

### Alertas de Hype (Compra Impulsiva)
Si el artículo está en tendencia (X Colombia con hype_score ≥ 80), Lukas pregunta antes de registrar:
> "¡Ojo ahí, pana! Noto que 'Stanley Cup' está súper de moda. ¿Estás seguro?"

---

## FinScore

Puntuación financiera de 0 a 1000 calculada automáticamente.

| Factor | Puntos |
|--------|--------|
| Base | 500 |
| Presupuesto activo | +50 |
| Meta activa | +50 |
| Racha ≥7 días | +50 |
| Racha ≥30 días | +100 |
| Gasto hormiga detectado | -30 por patrón |
| Inactividad >7 días | -50 |

Escala:
- 801-1000: ⭐ Excelente
- 601-800: 🟢 Saludable
- 401-600: 🟡 Estable
- 201-400: 🟠 En riesgo
- 0-200: 🔴 Crítico

---

## Pipeline de Ingesta de Datos (Radar de Precios)

### Ejecución Manual
```bash
cd scripts/
pip install -r requirements.txt
playwright install chromium
python scraper_market.py
```

### Ejecución Automática (GitHub Actions)
- **Archivo:** `.github/workflows/prices_pipeline.yml`
- **Frecuencia:** Todos los domingos a las 2:00 AM UTC
- **Secrets requeridos en GitHub:**
  - `SUPABASE_URL`
  - `SUPABASE_SERVICE_ROLE_KEY`

### Schema de Base de Datos

```sql
CREATE SCHEMA IF NOT EXISTS external_data;

CREATE TABLE external_data.market_prices (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at   timestamptz DEFAULT now(),
  product_name text,
  price        numeric,
  store_name   text,
  unit         text,
  category     text,
  region       text DEFAULT 'Bogotá'
);
```

---

## Cómo Correr el Proyecto Localmente

```bash
# 1. Clonar el repositorio
git clone https://github.com/jojoa20/lukas_ia_app.git
cd lukas_ia_app

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno (pedir claves al equipo)
cp .env.example .env.local

# 4. Correr servidor de desarrollo
npm run dev

# 5. Abrir en el navegador
# http://localhost:3000
```

Para matar el servidor si se cuelga:
```bash
pkill -f "next dev" && rm -f .next/dev/lock
```

---

## Notas de Seguridad

- El archivo `.env.local` **nunca se sube a GitHub** (está en `.gitignore`)
- Los clientes de Supabase tienen fallbacks para no crashear sin variables de entorno
- Las rutas de la API están protegidas por `clerkMiddleware` en `src/proxy.ts`
- Los datos del usuario están aislados por RLS (Row Level Security) en Supabase
- El `SUPABASE_SERVICE_ROLE_KEY` solo se usa en el servidor (nunca expuesto al cliente)

---

## Guía de Resolución de Problemas

| Error | Causa | Solución |
|-------|-------|----------|
| `Unable to acquire lock` | Proceso Next.js duplicado | `pkill -f "next dev" && rm -f .next/dev/lock` |
| `Publishable key not valid` | Clerk key incorrecta | Verificar `.env.local` |
| `auth() called but no clerkMiddleware` | proxy.ts mal configurado | Verificar `src/proxy.ts` |
| `Supabase URL/Key required` | Variables de entorno vacías | Los clientes usan fallback automático |
| `Can't resolve 'tailwindcss'` | Turbopack no encuentra Tailwind | Ya corregido en `next.config.mjs` con `resolveAlias` |
| Chat muestra `<action>` tags | Bug de parsing en frontend | Verificado y corregido en `ChatView.tsx` |
| Precios Éxito devuelven 308 | URL incorrecta `/api/` en vez de `/io/api/` | Ya corregido — usar `exito.com/io/api/...` |

---

## Historial de Cambios Relevantes (rama `djojo-mvp-final`)

### Mayo 2026
- **ForceGraph.tsx** — Grafo D3 force-directed interactivo en AnalyticsView (Radar de Gastos)
- **HomeView desglose** — Muestra categorías reales desde transacciones, sin requerir presupuesto activo
- **Chat sin auto-navegación** — El agente no cambia de tab al registrar gastos/ingresos/metas
- **Comparador de precios** — Pipeline completo: detecta gasto → VTEX API → "te dejaste tumbar" / "buena compra"
- **Éxito VTEX API** — URL corregida a `/io/api/` (devuelve precios reales en COP)
- **Alertas de presupuesto y metas** — Tips automáticos al registrar gastos significativos
- **POST /api/budgets** — Endpoint faltante que causaba falla silenciosa en `CREATE_BUDGET`
- **HistorialView / MetasView** — Reescritos (archivos tenían encoding mojibake)
- **AnalyticsView** — Corregido tipo de dato `BudgetSummary` vs `Budget[]`
- **Hype alert** — Corregida lógica de detección de compra impulsiva
- **Groups / GroupBudget** — Manejadores `CREATE_GROUP` y `SET_GROUP_PERSONAL_BUDGET` en ChatView
