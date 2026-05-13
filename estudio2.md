# Estudio 2 — Lukas AI: Cómo funciona todo por dentro

> Documento técnico completo para entender el proyecto desde cero.
> Rama activa: `main` — Mayo 2026
> Última actualización: 13 Mayo 2026 — Deploy Vercel + fixes de scraping

---

## 1. ¿Qué es Lukas AI?

Lukas AI es un asistente financiero para jóvenes colombianos. El usuario habla en lenguaje natural (como hablaría con un amigo) y Lukas entiende qué quiere hacer: registrar un gasto, crear una meta de ahorro, revisar su saldo, etc.

La app vive en el navegador con interfaz estilo móvil. No es una app nativa — es una web app hecha en Next.js que se ve y se siente como una app de celular.

**El slogan:** "Tu Pana Financiero"

---

## 2. Stack completo (tecnologías usadas)

| Qué hace | Tecnología |
|----------|-----------|
| Framework web | Next.js 16 (App Router + Turbopack) |
| Autenticación de usuarios | Clerk |
| Base de datos | Supabase (PostgreSQL en la nube) |
| Inteligencia artificial | Google Gemini 2.5 Flash |
| Visualización de datos | D3.js v7 (grafo interactivo) |
| Animaciones UI | Framer Motion |
| Estilos | Tailwind CSS v4 |
| Lenguaje | TypeScript |
| Scraper de precios semanal | Python + Playwright |
| Scraper en tiempo real | VTEX API de Éxito.com (via lib compartida) |
| Deploy | Vercel (producción) |

---

## 3. Estructura de la app (pestañas)

La app tiene 5 pestañas principales:

```
┌─────────────────────────────┐
│  Home      → Saldo, FinScore, desglose de gastos, racha
│  Metas     → CRUD de metas de ahorro
│  Chat      → Hablar con Lukas (aquí pasa toda la magia)
│  Análisis  → Donut de presupuesto + Grafo D3 de gastos
│  Historial → Lista de movimientos con fechas
└─────────────────────────────┘
```

**Regla importante:** El agente NUNCA cambia de pestaña automáticamente cuando registra un gasto, ingreso o meta. El usuario siempre se queda en el chat. Solo cambia de tab si el usuario lo pide explícitamente (ej: "llévame a metas").

---

## 4. Cómo funciona el Chat con Lukas

Este es el corazón de la app. Cuando el usuario escribe algo, pasa por este flujo:

```
Usuario escribe → ChatView.tsx → POST /api/chat → respuesta → ChatView ejecuta acción
```

### 4.1 El archivo principal: `src/app/api/chat/route.ts`

Cuando llega un mensaje, el backend hace esto en orden:

**Paso 1 — Identificar al usuario**
```
Clerk auth → obtener user_id → buscar perfil en Supabase
```

**Paso 2 — Cargar contexto financiero completo**
El agente no habla "a ciegas". Antes de responder, carga en paralelo con `Promise.all`:
- Perfil del usuario (saldo, FinScore, racha)
- Últimas 20 transacciones
- Metas de ahorro activas
- Presupuestos del mes actual
- Nombres de sus grupos financieros

Después, por separado con manejo de errores propio:
- Tendencias activas (`consumer_trends`) — si la tabla no existe o hay error, continúa sin trends

Todo esto va como contexto al prompt de Gemini.

**Paso 3 — Detectar si menciona un gasto**
Si el mensaje contiene palabras como "compré", "gasté", "pagué":
- Se extrae el nombre del producto (ej: "un panal de huevos" → "huevos")
- Se llama directamente a `fetchExitoPrice()` de `src/lib/prices.ts` (sin HTTP roundtrip)
- Si el precio pagado difiere >15% del precio de Éxito y el ratio es razonable → activa el comparador

**Paso 4 — Decidir quién responde**

```
¿Hay diferencia significativa de precio con Éxito? (diff >15% y ratio 0.1x–20x)
   └── SÍ → Respuesta directa (sin Gemini): "te dejaste tumbar" o "buena compra"
   └── NO → Continúa...

¿Es una intención clara y determinista?
(saldo, gasto, ingreso, meta, grupo, historial)
   └── SÍ → localFallback() — reglas hardcodeadas, instantáneo, sin IA
   └── NO → Gemini 2.5 Flash con contexto completo
```

### 4.2 ¿Qué es el `localFallback`?

Es una función con ~40 reglas if/else que maneja los casos más comunes sin llamar a Gemini. Esto hace que la app responda instantáneamente para acciones frecuentes.

**Ejemplos de lo que maneja:**
- "cuál es mi saldo" → responde con el saldo de Supabase
- "gaste 15 mil en almuerzo" → registra el gasto en "Salidas"
- "crea una meta para moto de 5 millones en 8 meses prioridad alta" → crea la meta completa
- "cuántas metas tengo" → lista las metas activas
- "qué sirve el historial" → explica la pestaña
- "gaste 7000 en tinto" (por tercera vez ese mes) → lo clasifica como gasto hormiga

**Cuándo va a Gemini:**
Solo si la intención no encaja en ningún patrón determinista. Por ejemplo: "oye Lukas ¿crees que debería ahorrar más?" o conversaciones abiertas sobre finanzas.

### 4.3 Sistema de `<action>` tags

La respuesta del agente (sea Gemini o localFallback) puede incluir etiquetas especiales invisibles para el usuario:

```
Listo, registro ese gasto en Salidas.
<action>{"type":"ADD_TRANSACTION","monto":15000,"tipo":"gasto","descripcion":"Almuerzo","categoria":"Salidas","subcategoria":"Almuerzo","es_gasto_hormiga":false}</action>
```

El frontend (`ChatView.tsx`) las intercepta, extrae el JSON, y llama a la API correspondiente. El usuario solo ve el texto limpio.

**Todas las acciones disponibles:**

| Acción | Qué hace | API |
|--------|----------|-----|
| `ADD_TRANSACTION` | Registra gasto o ingreso | POST /api/transactions |
| `ADD_GASTO_HORMIGA` | Registra gasto hormiga | POST /api/transactions (con flag) |
| `CREATE_GOAL` | Crea meta de ahorro | POST /api/metas |
| `SET_CURRENT_BALANCE` | Actualiza saldo | PUT /api/profile |
| `CREATE_BUDGET` | Crea presupuesto por categoría | POST /api/budgets |
| `CREATE_GROUP` | Crea grupo y envía invitación | POST /api/groups |
| `SET_GROUP_PERSONAL_BUDGET` | Asigna presupuesto en Grupos | PATCH /api/groups |
| `NAVIGATE` | Cambia de pestaña (solo si el usuario lo pide) | — |

---

## 5. Gastos Hormiga — Cómo funciona la detección

### 5.1 ¿Qué es un gasto hormiga?

Un gasto hormiga NO se define solo por el monto. Se define por **repetición + bajo valor real**.

**Criterios para clasificarlo:**
1. Monto individual ≤ $80.000 COP
2. Ocurre 3 o más veces en los últimos 30 días
3. En la misma categoría semántica
4. Total acumulado ≥ $15.000 COP

**Ejemplos típicos:** tintos, snacks, domicilios frecuentes, Uber cortos, suscripciones olvidadas, antojos.

**NO son hormiga:** mercado semanal, arriendo, servicios públicos, transporte al trabajo.

---

### 5.2 El sistema de clustering semántico

El problema es que el usuario puede escribir "tinto", "café", "coffee", "capuchino" y todos son el mismo patrón. La app los agrupa usando un **mapa semántico**:

**Archivo:** `src/app/api/alerts/hormiga/route.ts`

```
SEMANTIC_CLUSTERS = {
  'Café/Bebidas calientes': ['cafe', 'tinto', 'coffee', 'cappuccino', 'latte', 'chocolate', ...],
  'Snacks/Dulces':          ['snack', 'dulce', 'galleta', 'empanada', 'arepa', 'helado', ...],
  'Bebidas frías':          ['gaseosa', 'coca', 'jugo', 'agua', 'soda', ...],
  'Comida rápida':          ['rappi', 'domicilio', 'delivery', 'hamburguesa', 'pizza', ...],
  'Transporte corto':       ['uber', 'didi', 'taxi', 'beat', 'indriver', ...],
  'Suscripciones/Apps':     ['netflix', 'spotify', 'prime', 'disney', 'youtube', ...],
  'Licor/Fiesta':           ['cerveza', 'aguardiente', 'ron', 'vino', 'trago', 'bar', ...],
  'Máquinas/Antojos':       ['maquina', 'antojo', 'impulso', 'capricho', ...],
}
```

Cuando se registra un gasto, se normaliza el texto (quita tildes, pasa a minúsculas) y se busca en cuál cluster cae.

---

### 5.3 El algoritmo paso a paso

**Endpoint:** `GET /api/alerts/hormiga?days=30`

```
1. Obtener TODOS los gastos del usuario en los últimos N días
   (no solo los marcados como hormiga — analiza todo)

2. Para cada gasto:
   → limpiar descripción (quitar prefijos "Fijos:", "Salidas:", etc.)
   → buscar en SEMANTIC_CLUSTERS cuál cluster aplica
   → acumular en ese cluster: cantidad, total, montos, fechas

3. Para cada cluster acumulado:
   → ¿Tiene ≥3 gastos con monto ≤$80k? y ¿total ≥$15k?
   → SÍ: es un patrón hormiga

4. Calcular frecuencia en días:
   → (fecha última - fecha primera) / (cantidad - 1)
   → ej: 3 tintos en 6 días = cada 3 días

5. Determinar severidad:
   → ALTA: total >$100k o frecuencia ≤2 días con ≥5 ocurrencias
   → MEDIA: total >$50k o ≥5 ocurrencias
   → BAJA: resto

6. Generar mensaje contextual:
   → >$150k acumulado: "¡Uy parcero! llevas $Xk en gastos hormiga..."
   → >$50k: "Cuidado pana, llevas $Xk..."
   → algo: "Tienes algunos gastos hormiga menores..."
   → nada: "¡Vas bien parcero! No se detectan patrones..."

7. Calcular impacto en FinScore:
   → impacto = -(total_hormiga / 5000) puntos
```

---

### 5.4 Detección en tiempo real (al chatear)

Aparte del endpoint de análisis, el chat detecta hormigas en el momento que el usuario registra un gasto. Está en `src/app/api/chat/route.ts → isRecurringHormiga()`:

```
1. ¿El monto es ≤$80.000? → si no, nunca es hormiga
2. Extraer descripción del texto
3. Buscar en qué cluster semántico cae
4. Revisar las últimas transacciones (las que ya están en Supabase)
5. ¿Hay ≥3 transacciones del mismo cluster en los últimos 30 días?
   → SÍ: usar ADD_GASTO_HORMIGA en vez de ADD_TRANSACTION normal
```

---

## 6. Comparador de Precios Éxito.com

### 6.1 Arquitectura del comparador

El comparador de precios tiene tres capas:

```
src/lib/prices.ts          ← Lógica compartida (lib central)
       ↑                          ↑
/api/prices/exito/route.ts   /api/chat/route.ts
  (endpoint público)          (llamada directa, sin HTTP)
```

**Antes (problema):** El chat llamaba a `/api/prices/exito` vía HTTP — una petición de red circular que agregaba 2–4 segundos de latencia y podía fallar por timeout.

**Ahora:** El chat importa `fetchExitoPrice()` directamente de `src/lib/prices.ts`. El endpoint `/api/prices/exito` también usa la misma función. Una sola fuente de verdad, cero roundtrips innecesarios.

---

### 6.2 La librería `src/lib/prices.ts`

Este archivo contiene toda la lógica de consulta y filtrado de precios. Es la única pieza que toca la VTEX API.

**URL VTEX correcta:**
```
https://www.exito.com/io/api/catalog_system/pub/products/search/{producto}?_from=0&_to=14
```
> ⚠️ La URL sin `/io/` devuelve un redirect 308 y no funciona.

**Flujo interno de `fetchExitoPrice(query)`:**

```
1. Llama a VTEX API con headers de browser (User-Agent, Referer, Origin)
   → Recibe hasta 15 productos en JSON

2. Filtro de relevancia:
   → Extrae las palabras clave del query (>2 caracteres, sin tildes)
   → Solo conserva productos cuyo nombre contenga al menos una de esas palabras
   → Ej: query="leche" → "Leche Alpina" ✓ | "Refrigerador LG" ✗

3. Cap de precio:
   → Descarta productos < $500 COP (tests/errores) 
   → Descarta productos > $300.000 COP (filtra electrodomésticos y appliances)

4. Remoción de outliers (IQR method):
   → Calcula Q1, Q3 e IQR del conjunto de precios
   → Elimina precios fuera del rango [Q1 - 1.5*IQR, Q3 + 1.5*IQR]
   
5. Filtro de heterogeneidad (detección de contaminación de categoría):
   → Si max/min > 8 (precios demasiado dispersos = mezcla de categorías)
   → Conserva solo los precios por debajo de la mediana
   → Heurística: el producto de supermercado es casi siempre el más barato

6. Retorna: avg_price, min_price, max_price, count, products[]
```

**Ejemplo real — query "leche":**
```
VTEX retorna: Leche Alpina 1L ($5.490), Leche Granjera 6.6L ($38.700),
              Extractor Leche Materna ($85.049), Extractor Doble ($119.900)

Relevancia: todos contienen "leche" ✓
Cap: todos < $300k ✓
IQR: Q1=5490, Q3=38700 → upper bound = 38700 + 1.5*(33210) = 88.515
→ $85.049 y $119.900 tienen problema
Heterogeneidad: max/min = 119900/5490 = 21.8 > 8
→ Solo conservar por debajo de la mediana (~27.095)
→ Resultado: [$5.490, $38.700] → avg = ~$22.000 (leche real)
```

---

### 6.3 El comparador en el chat

**Condiciones para activar la comparación:**
1. El mensaje contiene "gasté/pagué/compré/gaste/pague/compre"
2. Se detecta un monto (`parseAmount`)
3. Se extrae un nombre de producto de más de 3 caracteres
4. `fetchExitoPrice` retorna `success: true` con `avg_price`
5. La diferencia es >15% del precio de referencia
6. **Guard de ratio**: el precio pagado está entre 10% y 2000% del precio de Éxito (evita comparaciones absurdas cuando la búsqueda devuelve categorías equivocadas)

**Los tres veredictos:**
- **CARO** (diff > +15%): "¡Uy pana, te dejaste tumbar! 😬"
- **BARATO** (diff < -15%): "¡Buena compra, pana! 🎯"
- **PRECIO JUSTO** (diff ≤ ±15%): Solo registra el gasto sin comentar

En todos los casos siempre se registra la transacción automáticamente.

**Tips adicionales que se agregan automáticamente:**
- Si hay una meta activa: "Con la diferencia ahorrada en X semanas llegarías a tu meta 'Y'"
- Si hay presupuesto al límite: "⚠️ Con esto llevas el 90% de tu presupuesto de Salidas este mes"
- Proyección mensual: "comprando en Éxito ahorrarías hasta $X al mes"

---

### 6.4 Dos métodos de scraping: cuál se usa cuándo

| Método | Cuándo | Archivo |
|--------|--------|---------|
| **VTEX API** (tiempo real) | Cuando el usuario menciona un gasto en el chat | `src/lib/prices.ts` |
| **Playwright** (scraper HTML) | Pipeline semanal automatizado, datos históricos | `scripts/scraper_market.py` |

---

### 6.5 El scraper Playwright — pipeline semanal

**Archivo:** `scripts/scraper_market.py`

Este es un scraper que corre **cada domingo a las 2 AM UTC** automáticamente vía GitHub Actions. Su función es guardar precios históricos en Supabase para tener un historial.

**Cómo funciona:**

```python
1. Playwright abre un browser Chromium headless (sin interfaz gráfica)
2. Navega a https://www.exito.com/s?q=arroz
3. Espera 5 segundos a que cargue el JavaScript (es una SPA)
4. Hace scroll para activar lazy loading
5. Ejecuta JavaScript dentro de la página para extraer:
   - Nombre del producto (de los cards VTEX)
   - Precio (del texto que contiene "$")
6. Limpia los precios: "$1.234,50" → 1234.50
7. Guarda en Supabase: tabla external_data.market_prices
```

Los datos scraped quedan en:
```sql
Schema: external_data
Tabla:  market_prices
Campos: id, created_at, product_name, price, store_name, unit, category, region
```

---

### 6.6 GitHub Actions — automatización del scraper

**Archivo:** `.github/workflows/prices_pipeline.yml`

```yaml
Trigger: Cada domingo a las 2:00 AM UTC (cron: "0 2 * * 0")

Pasos:
1. Checkout del repo
2. Build de imagen Docker con Playwright
3. Correr el contenedor con las secrets de GitHub:
   - SUPABASE_URL
   - SUPABASE_SERVICE_ROLE_KEY
```

---

## 7. El Grafo D3 de Gastos (Radar de Gastos)

**Componente:** `src/components/demo/ForceGraph.tsx`

Es una visualización interactiva de los gastos del usuario en forma de red de nodos.

### ¿Qué muestra?

```
         [Fijos]──────────[Arriendo]
        /        \──────[Mercado]
[Mis Gastos]
        \        /──────[Rappi]
         [Salidas]──────[Restaurante]
              \──────[Uber]⚠️
```

- **Nodo central** (azul marino + borde dorado): total gastado en el período
- **Nodos categoría** (dorado): Fijos, Salidas, Susc.
- **Nodos subcategoría** (blancos): cada descripción de gasto
- **Nodos en rojo con glow**: gastos en alerta (hormiga o monto alto)

### Cómo funciona técnicamente

**Fuente de datos:** `GET /api/leak-buster/graph?period=month`

El endpoint procesa las transacciones y devuelve:
```json
{
  "nodes": [
    { "id": "center", "type": "center", "label": "Mis Gastos", "amount": 450000, "radius": 50 },
    { "id": "cat-Salidas", "type": "category", "label": "Salidas", "amount": 280000, "radius": 25 },
    { "id": "sub-Salidas-Rappi", "type": "subcategory", "label": "Rappi", "amount": 85000, "isAlert": true, "isHormiga": true, "radius": 14 }
  ],
  "links": [
    { "source": "center", "target": "cat-Salidas", "value": 280000 },
    { "source": "cat-Salidas", "target": "sub-Salidas-Rappi", "value": 85000 }
  ],
  "summary": { "total_gastado": 450000, "fugas_detectadas": 3, "monto_en_fugas": 180000 }
}
```

**D3 hace:**
1. Simula fuerzas físicas: los nodos se repelen entre sí (como imanes)
2. Los links actúan como resortes que atraen los nodos conectados
3. El centro atrae todos los nodos hacia el medio
4. Collision force evita que se superpongan
5. El usuario puede arrastrar nodos para reorganizar
6. Al tocar un nodo aparece un panel con el monto detallado

---

## 8. El FinScore — Puntuación Financiera

Es un puntaje de 0 a 1000 que refleja la salud financiera del usuario.

**Cómo se calcula:**

```
Base:                        500 puntos

Factores positivos:
+ Presupuesto activo:        +50
+ Meta activa:               +50
+ Racha ≥7 días:             +50
+ Racha ≥30 días:            +100 (reemplaza los +50)

Factores negativos:
- Por cada patrón hormiga:   -30
- Inactividad >7 días:       -50

Rango máximo: 1000
Rango mínimo: 0 (no puede ser negativo)
```

**Escala visual:**
| Puntaje | Nivel | Color |
|---------|-------|-------|
| 801-1000 | ⭐ Excelente | Dorado |
| 601-800 | 🟢 Saludable | Verde |
| 401-600 | 🟡 Estable | Amarillo |
| 201-400 | 🟠 En riesgo | Naranja |
| 0-200 | 🔴 Crítico | Rojo |

---

## 9. Desglose de Gastos en Home

El card "Desglose de Gastos" de la pantalla Home muestra las categorías de gasto **siempre**, con o sin presupuesto activo.

**Antes (bug):** Solo mostraba datos si había un presupuesto creado. Si no había presupuesto: "No tienes presupuestos activos" — pantalla muerta.

**Ahora:** Fetcha las últimas 100 transacciones y calcula los totales por categoría directamente.

```
┌─────────────────────────────────────┐
│ Desglose de Gastos                  │
│ ████████░░░░░░░░░░░░░░░░░░░░░░░░░  │  ← barra segmentada
│                                     │
│ 🏠 Fijos:    $280.000               │
│ 💸 Salidas:  $135.000               │
│ 📱 Susc.:    $ 45.000               │
│ 🐜 Hormigas: $ 32.000               │
└─────────────────────────────────────┘
```

---

## 10. Alertas de Hype (Compra Impulsiva)

Si el usuario menciona un producto que está viral en Colombia (X/Twitter), Lukas pregunta antes de registrarlo:

```
Usuario: "compré el último Stanley Cup en 200 mil"
              ↓
El sistema detecta "Stanley Cup" en la tabla consumer_trends
con hype_score = 95/100
              ↓
Lukas: "¡Ojo ahí, pana! Noto que 'Stanley Cup' está súper de moda
ahorita en Twitter (nivel de viralidad: 95/100). ¿Estás seguro de
que lo necesitas o es una compra impulsiva? Responde 'si' para registrarlo."
              ↓
Si dice "si"  → registra el gasto normalmente
Si dice "no"  → "Melo, pana. Mejor ahorramos esa plata."
```

### Cómo se pobla `consumer_trends`

Los trends vienen del scraper de `GET /api/trends/fetch`, que:

1. Hace fetch a `https://trends24.in/colombia/` (tendencias en tiempo real de X Colombia)
2. Parsea la meta description con cheerio para extraer los trending topics
3. Asigna hype_score basado en posición (1ro → 100, 2do → 95, etc.)
4. Limpia trends de más de 24 horas
5. Inserta los nuevos en `consumer_trends`

Este endpoint se ejecuta **automáticamente cada día a las 10 AM** vía Vercel Cron (configurado en `vercel.json`):

```json
{
  "crons": [
    { "path": "/api/trends/fetch", "schedule": "0 10 * * *" }
  ]
}
```

**Manejo robusto:** Si la tabla no existe o hay un error de DB, el chat continúa funcionando normalmente — simplemente no hay alertas de hype. No crashea.

---

## 11. Tips automáticos al registrar gastos

Cuando el agente registra un gasto, revisa automáticamente tres condiciones y agrega tips al mensaje:

**Tip de presupuesto** (si hay presupuesto activo):
```
"⚠️ Con esto llevas el 87% de tu presupuesto de Salidas este mes — casi al tope pana."
```

**Tip de meta** (si hay una meta activa y el gasto es ≥$50k):
```
"💡 12 gastos así equivalen a tu meta 'Viaje a Cartagena'."
```

---

## 12. La Base de Datos (Supabase)

**Proyecto:** `cvrrygffwmxmemlsdnax.supabase.co`

Tablas principales:

| Tabla | Para qué |
|-------|----------|
| `profiles` | Saldo, FinScore, racha, nombre del usuario |
| `transactions` | Gastos e ingresos (monto, tipo, categoria, fecha, es_gasto_hormiga) |
| `metas` | Metas de ahorro (nombre, monto_objetivo, monto_actual, fecha_objetivo, prioridad) |
| `presupuestos` | Presupuestos por categoría (limite_cop, gastado_cop, mes, anio) |
| `groups` | Grupos financieros compartidos |
| `group_members` | Relación usuario ↔ grupo |
| `consumer_trends` | Productos virales (hype_score, platform, item_name) — poblada por cron diario |
| `external_data.market_prices` | Precios scraped de Éxito (schema separado, pipeline semanal) |

**SQL para crear `consumer_trends`** (en `create_consumer_trends.sql`):
```sql
CREATE TABLE public.consumer_trends (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  item_name text NOT NULL,
  platform text NOT NULL,
  hype_score integer NOT NULL CHECK (hype_score >= 0 AND hype_score <= 100),
  created_at timestamptz DEFAULT now() NOT NULL
);
ALTER TABLE public.consumer_trends ENABLE ROW LEVEL SECURITY;
-- Políticas: SELECT para authenticated, INSERT para service_role
```

**Seguridad:**
- Cada usuario solo ve sus propios datos (Row Level Security en Supabase)
- Las API routes verifican el usuario con Clerk antes de tocar la DB
- El `SUPABASE_SERVICE_ROLE_KEY` solo está en el servidor, nunca en el cliente
- El `.env.local` jamás se sube al repositorio

---

## 13. Deploy en Vercel

### URL de producción
```
https://lukas-ia-app1.vercel.app
```

### Cómo se despliega

```bash
# El Vercel CLI ya está instalado y autenticado como jojoa20
# El proyecto está vinculado via .vercel/project.json

vercel deploy --token "$VERCEL_TOKEN" --prod --yes
```

La vinculación del proyecto está en `.vercel/project.json`:
```json
{
  "orgId": "team_4QeoWww2Zm7pPyqr6678Fi3b",
  "projectId": "prj_V1inJOITz8dwrR1UqklnHZxpDkNQ"
}
```

### Variables de entorno en Vercel

Todas configuradas vía Vercel API para `production`, `preview` y `development`:

| Variable | Tipo | Para qué |
|----------|------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | plain | URL del proyecto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | plain | Clave pública Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | encrypted | Clave admin Supabase (server only) |
| `GEMINI_API_KEY` | encrypted | Google AI API key |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | plain | Clerk auth pública |
| `CLERK_SECRET_KEY` | encrypted | Clerk auth secreta |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | plain | `/sign-in` |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | plain | `/sign-up` |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` | plain | `/app` |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` | plain | `/app` |
| `ELEVENLABS_API_KEY` | encrypted | ElevenLabs TTS (opcional) |
| `ELEVENLABS_VOICE_ID` | plain | ID de voz ElevenLabs |

### Crons en Vercel

Configurados en `vercel.json`:
```json
{
  "crons": [
    { "path": "/api/trends/fetch", "schedule": "0 10 * * *" }
  ]
}
```
Ejecuta el scraper de trends de Colombia todos los días a las 10 AM UTC.

---

## 14. Cómo correr el proyecto localmente

```bash
# 1. Clonar
git clone https://github.com/jojoa20/lukas_ia_app.git
cd lukas_ia_app

# 2. Instalar dependencias Node
npm install

# 3. Crear archivo de variables de entorno (pedir claves al equipo)
cp .env.example .env.local
# Llenar con: SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY,
#             GEMINI_API_KEY, NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY, CLERK_SECRET_KEY

# 4. Correr el servidor
npm run dev
# → Abre http://localhost:3000

# Si el servidor se cuelga:
pkill -f "next dev" && rm -f .next/dev/lock
```

---

## 15. Flujo completo de ejemplo — "gasté 50 mil en pollo"

```
1. Usuario escribe en ChatView: "gasté 50 mil en pollo"

2. ChatView.tsx hace:
   POST /api/chat
   body: { messages: [...historial, { role: "user", content: "gasté 50 mil en pollo" }] }

3. chat/route.ts recibe el mensaje y:
   a. Identifica al usuario con Clerk
   b. Carga perfil, transacciones, metas, presupuestos de Supabase (Promise.all)
   c. Carga consumer_trends por separado (try/catch — no bloquea si falla)
   d. Detecta "gasté" → isSpendingMention = true
   e. Extrae monto: "50 mil" → 50000
   f. Extrae producto: "en pollo" → "pollo"
   g. Llama DIRECTAMENTE a fetchExitoPrice("pollo") desde src/lib/prices.ts

4. prices.ts hace:
   GET https://www.exito.com/io/api/catalog_system/pub/products/search/pollo?_from=0&_to=14
   → Recibe 15 productos
   → Filtro relevancia: conserva los que contienen "pollo" en el nombre
   → Cap: descarta > $300k
   → IQR: elimina outliers
   → avg_price ≈ 12.000, min_price = 4.550, max_price = 28.400

5. chat/route.ts calcula:
   diff    = 50000 - 12000 = 38000
   diffPct = 38000/12000  = 317%
   ratio   = 50000/12000  = 4.2 (dentro de 0.1x–20x ✓)
   317% > 15% → CARO → activar veredicto

6. Genera respuesta directa (sin Gemini):
   "¡Uy pana, te dejaste tumbar! 😬 Pagaste $50.000 por 'Pollo' 
   y en Éxito está a $12.000 (desde $4.550). Pagaste 317% más caro...
   <action>{"type":"ADD_TRANSACTION","monto":50000,...}</action>"

7. ChatView.tsx recibe la respuesta:
   a. cleanContent() → quita el <action> tag, muestra solo el texto
   b. parseActions() → extrae el JSON del action
   c. executeActions() → POST /api/transactions con los datos del gasto
   d. onRefreshData() → actualiza saldo en la vista actual
   e. El usuario se queda en la pestaña de Chat (no hay NAVIGATE)
```

---

## 16. Resumen de todos los bugs corregidos

### Sprint inicial (MVP)

| Bug | Síntoma | Causa | Fix |
|-----|---------|-------|-----|
| Éxito no retornaba precios | Error HTTP o JSON vacío | URL `/api/` da 308 redirect | Cambiar a `/io/api/` |
| Chat cambiaba de pestaña solo | Al registrar gasto pasaba a Home | NAVIGATE automático en respuestas | Eliminar todos los NAVIGATE automáticos |
| Balance update no guardaba | Saldo no se actualizaba en Home | Action en línea 654 solo tenía NAVIGATE, faltaba SET_CURRENT_BALANCE | Corregir el action |
| CREATE_BUDGET fallaba silencioso | Presupuesto nunca se creaba | No existía POST /api/budgets | Crear el endpoint |
| HistorialView roto | Caracteres raros: "Ôåô", "Categor├¡a" | Encoding mojibake en el archivo | Reescribir el componente |
| MetasView roto | "Nombre (ej. Viaje a San Andr├®s)" | Mismo problema de encoding | Reescribir el componente |
| AnalyticsView sin datos | Presupuesto no mostraba nada | setBudgets recibía objeto, esperaba array | Crear interfaz BudgetSummary correcta |
| Hype alert se disparaba mal | Aviso de compra impulsiva en respuestas del bot | Condición revisaba si el ASISTENTE era afirmativo | Cambiar a `.includes('nivel de viralidad')` |
| HomeView sin desglose | "No tienes presupuestos activos" con datos | Solo mostraba datos si había presupuesto | Fetchar transacciones y calcular categorías directamente |
| Tailwind no compilaba en Turbopack | `Can't resolve 'tailwindcss'` | Turbopack busca en directorio padre | `resolveAlias` en next.config.mjs |
| CREATE_GROUP no ejecutaba | Grupos nunca se creaban desde el chat | ChatView no tenía handler para ese action type | Agregar handlers en executeActions() |

### Sprint de deploy y scraping (13 Mayo 2026)

| Bug | Síntoma | Causa | Fix |
|-----|---------|-------|-----|
| Chat lento (~4s por mensaje) | Cada mensaje con gasto tardaba 4+ segundos | Chat se llamaba a sí mismo vía HTTP para precios Y trends (dos roundtrips) | Extraer lógica a `src/lib/prices.ts` y llamar directo; trends separado en try/catch |
| Chat crasheaba si `consumer_trends` no existía | 500 en todo el endpoint de chat | La query a tabla inexistente dentro del `Promise.all` hacía fallar todo el bloque | Sacar la query de trends del `Promise.all` y envolverla en `try/catch` propio |
| Comparador devolvía precios incorrectos | "huevos" → hervidores de huevos; avg $140k para huevos | VTEX busca en todas las categorías sin filtro de relevancia | Filtro de relevancia por palabras del query en nombre del producto |
| `avg_price` contaminado por outliers | Precio promedio incluía items de $999.999 | Sin filtro estadístico de outliers | Remoción de outliers por método IQR |
| Comparación absurda de categorías | "gasté 5k en aguacate" vs avg $80k (planchas de pelo) | Sin sanity check de ratio entre precio pagado y precio Éxito | Guard: solo activa si precio pagado está entre 10% y 2000% del avg |
| Contaminación de categorías mixtas | Precios de comida y accesorios mezclados | IQR no suficiente cuando max/min > 8x | Si dispersión > 8x, conservar solo precios por debajo de la mediana |
| `consumer_trends` vacía tras deploy | Alertas de hype nunca funcionaban | Tabla no existía en Supabase (SQL no ejecutado) | Crear tabla en Supabase; cron de Vercel la puebla diariamente |
| Trends scraper no guardaba en Vercel | "ADVERTENCIA: tabla no existe" | Tabla `consumer_trends` ausente en Supabase | Usuario ejecutó el SQL de creación en Supabase Studio |
| `VERCEL_URL` cambiaba en cada deploy | Potencial fallo de self-calls en prod | `VERCEL_URL` es deployment-specific, no el alias permanente | Eliminado: ya no se usan self-calls HTTP en el chat |

---

## 17. Arquitectura de archivos relevantes

```
src/
├── app/
│   ├── api/
│   │   ├── chat/route.ts          ← Núcleo del agente (Gemini + localFallback)
│   │   ├── prices/exito/route.ts  ← Endpoint público del comparador
│   │   ├── trends/fetch/route.ts  ← Scraper de trends24.in + insert Supabase
│   │   ├── transactions/route.ts  ← CRUD de movimientos
│   │   ├── metas/route.ts         ← CRUD de metas
│   │   ├── budgets/route.ts       ← CRUD de presupuestos
│   │   ├── groups/route.ts        ← CRUD de grupos
│   │   ├── alerts/hormiga/route.ts← Análisis de gastos hormiga
│   │   ├── leak-buster/graph/     ← Datos para el grafo D3
│   │   └── profile/route.ts       ← Perfil + recalcular FinScore
│   └── (pages)/
│       ├── app/page.tsx           ← Contenedor principal (5 tabs)
│       └── sign-in/sign-up/       ← Rutas de auth Clerk
├── components/demo/
│   ├── HomeView.tsx               ← Saldo, FinScore, desglose
│   ├── ChatView.tsx               ← Interfaz del chat + ejecutor de actions
│   ├── AnalyticsView.tsx          ← Grafo D3 + presupuesto
│   ├── MetasView.tsx              ← Lista y creación de metas
│   ├── HistorialView.tsx          ← Lista de transacciones
│   └── ForceGraph.tsx             ← Componente D3 force-directed
└── lib/
    ├── prices.ts                  ← Lógica compartida VTEX (nuevo)
    ├── lukas-ai-system.ts         ← System prompt y guía de actions para Gemini
    ├── lukas-user.ts              ← Helper para obtener usuario actual
    └── supabase/
        └── admin.ts               ← Cliente Supabase con service role

scripts/
├── scraper_market.py              ← Playwright scraper semanal
├── requirements.txt               ← Dependencias Python
└── Dockerfile                     ← Imagen para GitHub Actions

.github/workflows/
└── prices_pipeline.yml            ← Cron semanal del scraper Python

.vercel/
└── project.json                   ← Vinculación proyecto Vercel

vercel.json                        ← Config Vercel + cron diario de trends
```
