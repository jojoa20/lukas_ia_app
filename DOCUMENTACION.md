# Lukas AI — Documentación Técnica

## Arquitectura General

```
lukas_ia_app1/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/
│   │   │   ├── chat/           # Agente principal de IA (Gemini 2.5 Flash)
│   │   │   ├── profile/        # Perfil y saldo del usuario
│   │   │   ├── transactions/   # Registro de gastos e ingresos
│   │   │   ├── metas/          # Metas de ahorro
│   │   │   ├── budgets/        # Presupuestos por categoría
│   │   │   ├── trends/fetch/   # Scraper de tendencias (X Colombia)
│   │   │   └── prices/exito/   # Comparador de precios en Éxito.com
│   │   ├── app/                # Vista de la app móvil (autenticado)
│   │   ├── sign-in/            # Página de login (Clerk)
│   │   └── sign-up/            # Página de registro (Clerk)
│   ├── components/
│   │   ├── demo/
│   │   │   ├── DemoContainer.tsx   # Contenedor principal — maneja tabs y chat global
│   │   │   ├── ChatView.tsx        # Interfaz de chat con Lukas (estado persistente)
│   │   │   ├── HomeView.tsx        # Pantalla inicio: saldo, FinScore, racha
│   │   │   ├── MetasView.tsx       # CRUD de metas de ahorro
│   │   │   ├── HistorialView.tsx   # Historial de transacciones
│   │   │   └── AnalyticsView.tsx   # Análisis y gráficos con datos reales
│   │   └── mobile/
│   │       ├── MobileHeader.tsx    # Header con Clerk UserButton
│   │       └── MobileBottomBar.tsx
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts       # Cliente navegador (con fallback)
│   │   │   ├── server.ts       # Cliente servidor (con fallback)
│   │   │   ├── admin.ts        # Cliente admin con SERVICE_ROLE_KEY
│   │   │   └── middleware.ts   # Actualización de sesión Supabase en proxy
│   │   ├── lukas-user.ts       # Helper: obtener usuario Clerk + perfil Supabase
│   │   └── lukas-ai-system.ts  # System prompt del agente Lukas
│   └── proxy.ts                # Proxy de Next.js 16 (auth Clerk + sesión Supabase)
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

# ElevenLabs (opcional - voz)
ELEVENLABS_API_KEY="sk_..."
ELEVENLABS_VOICE_ID="..."
```

---

## Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 16.1.6 (App Router, Turbopack) |
| Autenticación | Clerk (@clerk/nextjs) |
| Base de Datos | Supabase (PostgreSQL) |
| IA del Agente | Google Gemini 2.5 Flash |
| Scraping Web | Cheerio (tendencias), Playwright (mercado) |
| Animaciones | Framer Motion |
| Estilos | Tailwind CSS |
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
  2. Cargar contexto financiero (perfil, transacciones, metas)
  3. Detectar si menciona un gasto → consultar /api/prices/exito
  4. Si hay Gemini API Key → Gemini 2.5 Flash con contexto completo
     Si no → localFallback() (reglas determinísticas)
        ↓
  Respuesta con <action> tags JSON
        ↓
ChatView.tsx parsea:
  - cleanContent() → elimina tags, muestra texto limpio
  - parseActions() → extrae JSON de acciones
  - executeActions() → llama APIs (transactions, metas, profile, budgets)
        ↓
  onNavigate() → cambia tab automáticamente
  onRefreshData() → recarga datos en vistas
```

---

## Sistema de Acciones del Agente

El backend embebe acciones en la respuesta usando tags `<action>{JSON}</action>`.
El frontend los parsea y ejecuta. Tipos disponibles:

| Tipo de Acción | Qué hace |
|---------------|----------|
| `ADD_TRANSACTION` | POST /api/transactions — registra gasto/ingreso |
| `ADD_GASTO_HORMIGA` | POST /api/transactions con `es_gasto_hormiga: true` |
| `CREATE_GOAL` | POST /api/metas — crea meta de ahorro |
| `SET_CURRENT_BALANCE` | PUT /api/profile — actualiza saldo disponible |
| `CREATE_BUDGET` | POST /api/budgets — crea presupuesto por categoría |
| `NAVIGATE` | Cambia de tab en la app |

**Ejemplo de respuesta del agente:**
```
Listo, registro ese gasto.
<action>{"type":"ADD_TRANSACTION","monto":30000,"tipo":"gasto","descripcion":"panel de huevos","categoria":"Salidas"}</action>
<action>{"type":"NAVIGATE","page":"home"}</action>
```

---

## Comparador de Precios (Éxito.com)

**Endpoint:** `GET /api/prices/exito?q=panel+de+huevos`

**Funcionamiento:**
1. Detecta automáticamente cuando el usuario menciona un gasto
2. Extrae el nombre del producto de la frase natural
3. Consulta Éxito.com en tiempo real con Cheerio
4. Calcula si el precio pagado fue caro/barato/justo (±15% del promedio)
5. Inyecta el veredicto en el contexto de Gemini
6. Gemini responde con consejo personalizado

**Respuesta del endpoint:**
```json
{
  "success": true,
  "query": "panel de huevos",
  "source": "Éxito Colombia",
  "avg_price": 22000,
  "min_price": 18900,
  "max_price": 26500,
  "prices": [22000, 19900, 26500]
}
```

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
-- Esquema dedicado (no contamina el schema público)
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
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env.local
# (llenar con tus llaves reales)

# 3. Correr servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:3000
```

---

## Notas de Seguridad

- El archivo `.env.local` **nunca se sube a GitHub** (está en `.gitignore`)
- Los clientes de Supabase tienen fallbacks para no crashear sin variables de entorno
- Las rutas de la API están protegidas por `clerkMiddleware` en `proxy.ts`
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
| Chat muestra `<action>` tags | Bug de parsing | Verificado y corregido en `ChatView.tsx` |
| `30 mil → 30000000` | Bug de parseAmount | Verificado y corregido en `chat/route.ts` |
