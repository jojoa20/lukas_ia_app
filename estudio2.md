# Estudio 2 — Lukas AI: Cómo funciona todo por dentro

> Documento técnico completo para entender el proyecto desde cero.
> Rama activa: `djojo-mvp-final` / `main` — Mayo 2026

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
| Scraper en tiempo real | VTEX API de Éxito.com |

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
El agente no habla "a ciegas". Antes de responder, carga:
- Perfil del usuario (saldo, FinScore, racha)
- Últimas 20 transacciones
- Metas de ahorro activas
- Presupuestos del mes actual
- Nombres de sus grupos financieros
- Tendencias activas (productos virales en X Colombia)

Todo esto va como contexto al prompt de Gemini.

**Paso 3 — Detectar si menciona un gasto**
Si el mensaje contiene palabras como "compré", "gasté", "pagué", "me costó":
- Se extrae el nombre del producto (ej: "un panal de huevos" → "huevos")
- Se consulta la API de Éxito en tiempo real para obtener el precio actual
- Si el precio pagado difiere >15% del precio de Éxito → activa el comparador

**Paso 4 — Decidir quién responde**

```
¿Hay diferencia significativa de precio con Éxito?
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
  'Cigarrillos/Vape':       ['cigarrillo', 'vape', 'tabaco', ...],
  'Apuestas/Juegos':        ['apuesta', 'chance', 'loteria', 'casino', 'bet'],
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

**Respuesta del endpoint:**
```json
{
  "data": {
    "periodo_dias": 30,
    "total_hormiga": 87000,
    "cantidad_clusters": 2,
    "impacto_finscore": -17,
    "desglose": [
      {
        "grupo": "Café/Bebidas calientes",
        "icon": "☕️",
        "cantidad": 5,
        "total": 45000,
        "promedio": 9000,
        "frecuencia_dias": 4,
        "severity": "media",
        "descripciones_sample": ["Tinto", "Café", "Capuchino"]
      }
    ],
    "mensaje_ia": "Cuidado pana, llevas $87k en gastos hormiga..."
  }
}
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

### 6.1 Dos métodos de scraping: cuál se usa cuándo

La app usa **dos estrategias diferentes** dependiendo del contexto:

| Método | Cuándo | Archivo |
|--------|--------|---------|
| **VTEX API** (tiempo real) | Cuando el usuario menciona un gasto en el chat | `src/app/api/prices/exito/route.ts` |
| **Playwright** (scraper HTML) | Pipeline semanal automatizado, datos históricos | `scripts/scraper_market.py` |

---

### 6.2 La VTEX API — comparador en tiempo real

**¿Qué es VTEX?** Es la plataforma de e-commerce que usa Éxito. Tienen una API interna que retorna los productos en JSON.

**URL correcta (importante):**
```
https://www.exito.com/io/api/catalog_system/pub/products/search/{producto}?_from=0&_to=9
```

> ⚠️ La URL sin `/io/` devuelve un redirect 308 y no funciona. Este fue uno de los bugs que se corrigió.

**Cómo funciona el flujo completo:**

```
Usuario: "compré un panal de huevos en 30 mil"
                ↓
chat/route.ts detecta palabras: "compré", "huevos", "30 mil"
                ↓
isSpendingMention = true
detectedAmount   = 30000
productQuery     = "huevos" (quitando artículos: "un panal de" → "huevos")
                ↓
Llamada a: GET /api/prices/exito?q=huevos
                ↓
VTEX API retorna productos con precios reales
                ↓
priceResult = { avg_price: 20000, min_price: 9400, max_price: 26900 }
                ↓
Cálculo:
  diff     = 30000 - 20000 = 10000
  diffPct  = 10000 / 20000 = 50%
  umbral   = 20000 * 0.15  = 3000
  10000 > 3000 → CARO
                ↓
Respuesta directa (sin pasar por Gemini):
"¡Uy pana, te dejaste tumbar! 😬 Pagaste $30.000 por 'Huevos'
y en Éxito está a $20.000. Pagaste 50% más caro, eso son $10.000
de más. Si compras esto seguido, comprando en Éxito ahorrarías
hasta $40.000 al mes..."
<action>{"type":"ADD_TRANSACTION","monto":30000,...}</action>
```

**Los tres veredictos:**
- **CARO** (diff > +15%): "¡Uy pana, te dejaste tumbar! 😬"
- **BARATO** (diff < -15%): "¡Buena compra, pana! 🎯"
- **PRECIO JUSTO** (diff ≤ ±15%): Solo registra el gasto sin comentar

En todos los casos siempre se registra la transacción.

---

### 6.3 El scraper Playwright — pipeline semanal

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

**Diferencia clave entre los dos métodos:**

| | VTEX API (tiempo real) | Playwright (semanal) |
|-|----------------------|---------------------|
| Velocidad | ~1 segundo | ~30-60 segundos |
| Datos | JSON estructurado, confiable | HTML scraping, puede fallar |
| Uso | Chat en vivo | Historial / base de datos |
| Frecuencia | Cada vez que el usuario menciona un gasto | Una vez por semana |

---

### 6.4 GitHub Actions — automatización del scraper

**Archivo:** `.github/workflows/prices_pipeline.yml`

```yaml
Trigger: Cada domingo a las 2:00 AM UTC (cron: "0 2 * * 0")

Pasos:
1. Checkout del repo
2. Instalar Python + dependencias (playwright, supabase-py)
3. Instalar chromium para Playwright
4. Ejecutar: python scripts/scraper_market.py
5. El script toma las variables de entorno de los Secrets de GitHub:
   - SUPABASE_URL
   - SUPABASE_SERVICE_ROLE_KEY
```

Los datos scraped quedan en:
```sql
Schema: external_data
Tabla:  market_prices
Campos: id, created_at, product_name, price, store_name, unit, category, region
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

La barra tiene 4 segmentos de colores:
- Azul → Fijos
- Verde → Salidas
- Morado → Suscripciones
- Rojo-naranja → Hormigas

---

## 10. Alertas de Hype (Compra Impulsiva)

Si el usuario menciona un producto que está viral en Colombia (X/Twitter), Lukas pregunta antes de registrarlo:

```
Usuario: "compré el último Stanley Cup en 200 mil"
              ↓
El sistema detecta "Stanley Cup" en la tabla trends
con hype_score = 95/100
              ↓
Lukas: "¡Ojo ahí, pana! Noto que 'Stanley Cup' está súper de moda
ahorita en Twitter (nivel de viralidad: 95/100). ¿Estás seguro de
que lo necesitas o es una compra impulsiva? Responde 'si' para registrarlo."
              ↓
Si dice "si"  → registra el gasto normalmente
Si dice "no"  → "Melo, pana. Mejor ahorramos esa plata."
```

Los trends se cargan desde Supabase (tabla `consumer_trends`) con productos que tienen `hype_score >= 80`.

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

**Tip de saldo bajo** (si el saldo queda < $100k después del gasto):
→ El agente avisa en el sistema prompt que debe mencionar el saldo escaso.

---

## 12. La Base de Datos (Supabase)

Tablas principales:

| Tabla | Para qué |
|-------|----------|
| `profiles` | Saldo, FinScore, racha, nombre del usuario |
| `transactions` | Gastos e ingresos (monto, tipo, categoria, fecha, es_gasto_hormiga) |
| `metas` | Metas de ahorro (nombre, monto_objetivo, monto_actual, fecha_objetivo, prioridad) |
| `presupuestos` | Presupuestos por categoría (limite_cop, gastado_cop, mes, anio) |
| `groups` | Grupos financieros compartidos |
| `consumer_trends` | Productos virales (hype_score, platform, item_name) |
| `external_data.market_prices` | Precios scraped de Éxito (schema separado) |

**Seguridad:**
- Cada usuario solo ve sus propios datos (Row Level Security en Supabase)
- Las API routes verifican el usuario con Clerk antes de tocar la DB
- El `SUPABASE_SERVICE_ROLE_KEY` solo está en el servidor, nunca en el cliente
- El `.env.local` jamás se sube al repositorio

---

## 13. Cómo correr el proyecto localmente

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

## 14. Flujo completo de ejemplo — "compré huevos en 30 mil"

```
1. Usuario escribe en ChatView: "compré un panal de huevos en 30 mil"

2. ChatView.tsx hace:
   POST /api/chat
   body: { messages: [...historial, { role: "user", content: "compré un panal de huevos en 30 mil" }] }

3. chat/route.ts recibe el mensaje y:
   a. Identifica al usuario con Clerk
   b. Carga perfil, transacciones, metas, presupuestos de Supabase
   c. Detecta "compré" → isSpendingMention = true
   d. Extrae monto: "30 mil" → 30000
   e. Extrae producto: "un panal de huevos" → strip artículos → "huevos"
   f. Llama a GET /api/prices/exito?q=huevos

4. /api/prices/exito hace:
   GET https://www.exito.com/io/api/catalog_system/pub/products/search/huevos?_from=0&_to=9
   → Recibe 5 productos con precios reales
   → avg_price = 20000, min_price = 9400, max_price = 26900

5. chat/route.ts calcula:
   diff    = 30000 - 20000 = 10000
   diffPct = 50%
   50% > 15% → CARO

6. Genera respuesta directa (sin Gemini):
   "¡Uy pana, te dejaste tumbar! 😬 Pagaste $30.000 por 'Huevos'
   y en Éxito está a $20.000. Pagaste 50% más caro, eso son $10.000
   de más. Si compras esto seguido, comprando en Éxito ahorrarías
   hasta $40.000 al mes. La próxima compara primero.
   De todas formas te registro el gasto.
   <action>{"type":"ADD_TRANSACTION","monto":30000,"tipo":"gasto",
   "descripcion":"Huevos","categoria":"Fijos","subcategoria":"Huevos",
   "es_gasto_hormiga":false}</action>"

7. ChatView.tsx recibe la respuesta:
   a. cleanContent() → quita el <action> tag, muestra solo el texto
   b. parseActions() → extrae el JSON del action
   c. executeActions() → POST /api/transactions con los datos del gasto
   d. onRefreshData() → actualiza saldo y datos en la vista actual
   e. El usuario se queda en la pestaña de Chat (no hay NAVIGATE)

8. El usuario ve el mensaje de Lukas con el regaño y sabe que quedó guardado.
```

---

## 15. Resumen de todos los bugs corregidos en este sprint

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
