# MLOps Plan — Lukas AI

## Objetivo

Reemplazar la función `classifyExpense()` en `src/app/api/chat/route.ts` —que hoy usa regex hardcodeadas— con un modelo de ML real que clasifica descripciones de transacciones en categorías.

**Input:** texto libre + monto  
**Output:** `{ categoria, es_hormiga, confidence }`

Categorías target: `Fijos | Salidas | Susc. | Ahorro | Ingresos`

---

## Estructura de Carpetas a Crear

```
lukas-ai/
└── ml/
    ├── data/
    │   ├── raw/           ← archivos descargados (DANE CSV, Rappi JSON, Éxito JSON)
    │   └── processed/     ← dataset_v1.csv consolidado y limpio
    ├── models/
    │   └── registry/      ← artefactos versionados por MLflow
    ├── scripts/
    │   ├── fetch_dane.py          ← descarga DANE ENPH/IEFIC
    │   ├── fetch_exito.py         ← VTEX API Éxito (ya tienes el patrón)
    │   ├── fetch_rappi.py         ← Playwright scraper Rappi Colombia
    │   ├── fetch_own_data.py      ← exporta transacciones reales de Supabase
    │   ├── build_dataset.py       ← consolida todas las fuentes
    │   ├── train.py               ← entrenamiento + logging MLflow
    │   ├── evaluate.py            ← gate de calidad (accuracy >= 0.85)
    │   ├── export.py              ← exporta modelo para servir
    │   └── monitor.py             ← drift semanal desde Supabase
    ├── serve/
    │   └── app.py                 ← FastAPI que sirve el modelo
    ├── mlflow/                    ← base de datos local de experimentos
    └── requirements.txt
```

---

## Fuentes de Datos (100% Reales)

### Fuente 1 — DANE (Gobierno colombiano, descarga gratuita)

| Encuesta | URL | Registros estimados | Formato |
|---|---|---|---|
| ENPH 2016-2017 | microdatos.dane.gov.co/index.php/catalog/566 | ~50,000 | CSV |
| IEFIC via Socrata | datos.gov.co/resource/9xrr-i6kz.json | ~20,000 | API JSON |
| GEIH 2024 | microdatos.dane.gov.co/index.php/catalog/819 | ~200,000 | CSV |

**Columnas clave:** `CONCEPTO` (descripción texto), `VLRTOTAL` (monto COP), código COICOP

**Mapeo COICOP → Lukas:**
```
"01" → Salidas,  hormiga=False   (Alimentos)
"02" → Salidas,  hormiga=True    (Tabaco/licor)
"04" → Fijos,    hormiga=False   (Vivienda, servicios)
"07" → Salidas,  hormiga=False   (Transporte)
"08" → Susc.,    hormiga=True    (Comunicaciones)
"11" → Salidas,  hormiga=False   (Restaurantes)
"12" → Salidas,  hormiga=True    (Bienes varios)
```

### Fuente 2 — Scraping E-commerce

**Éxito VTEX API** (mismo patrón que `src/lib/prices.ts`):
- Endpoint: `https://www.exito.com/io/api/catalog_system/pub/products/search/{query}`
- Queries: café, snacks, gaseosa, almuerzo, arriendo, Netflix, transporte...
- Estimado: ~900 registros

**Rappi Colombia** (Playwright — mismo patrón que `scripts/scraper_market.py`):
- Interceptar XHR en `services.rappi.com.co/api/restaurants-bus/stores/{id}/products`
- Categorías: Bebidas, Snacks, Frutas, Lácteos, Aseo, Desayunos...
- Estimado: ~3,000 registros

### Fuente 3 — Supabase Propio (la más valiosa, crece sola)

```sql
SELECT descripcion, monto, categoria, es_gasto_hormiga, metodo_entrada
FROM transactions
WHERE metodo_entrada IN ('manual', 'ai')
  AND descripcion IS NOT NULL;
```

- `metodo_entrada = 'manual'` → gold label (usuario escribió la categoría)
- `metodo_entrada = 'ai'` → silver label (IA clasificó, usuario no corrigió)
- Hoy puede ser pequeño pero se convierte en la fuente dominante con el tiempo

**Dataset final estimado:**
| Fuente | Registros | Tier |
|---|---|---|
| DANE ENPH/IEFIC | ~18,000 | T1 gobierno |
| Éxito VTEX | ~900 | T2 ecommerce |
| Rappi Colombia | ~3,000 | T2 ecommerce |
| Supabase propio | variable, crece | T3 ground truth (peso 2x) |
| **Total inicial** | **~22,000** | — |

---

## Pipeline MLOps

### Stack

| Componente | Herramienta |
|---|---|
| Experiment tracking | MLflow (local SQLite) |
| Model registry | MLflow Model Registry |
| CI/CD | GitHub Actions (cada domingo) |
| Serving | FastAPI microservicio (puerto 8001) |
| Monitoreo | Supabase tabla `ml_predictions` |
| Scraping | Playwright (ya instalado) |

### Modelo

**TF-IDF + Logistic Regression** como baseline:
- `TfidfVectorizer(max_features=8000, ngram_range=(1,2), analyzer='char_wb')`
- `char_wb` es crucial: captura "tinto", "tintico", "café" como variantes del mismo token
- `LogisticRegression(C=1.0, multi_class='multinomial')`

Feature engineering:
```python
X = descripcion_lower + " monto:" + monto_bucket
# monto_bucket: "bajo" (<30k), "medio" (30k-150k), "alto" (>150k)
```

Gate de calidad: accuracy >= 0.85 para registrar en MLflow y promover a producción.

### Integración en Next.js

Reemplaza `classifyExpense()` en `src/app/api/chat/route.ts`:

```typescript
// src/lib/ml-classifier.ts
export async function classifyExpenseML(descripcion: string, monto: number) {
  const res = await fetch("http://localhost:8001/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ descripcion, monto }),
    signal: AbortSignal.timeout(2000)
  });
  if (!res.ok) return classifyExpenseFallback(descripcion); // regex como fallback
  return res.json();
}
```

### Monitoreo — Tabla Nueva en Supabase

```sql
CREATE TABLE ml_predictions (
  id                UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  transaction_id    UUID REFERENCES transactions(id),
  user_id           UUID REFERENCES profiles(id),
  input_text        TEXT,
  input_monto       NUMERIC,
  predicted_cat     TEXT,
  predicted_hormiga BOOLEAN,
  confidence        FLOAT,
  actual_cat        TEXT,      -- se llena cuando el usuario corrige
  actual_hormiga    BOOLEAN,
  model_version     TEXT,
  created_at        TIMESTAMPTZ DEFAULT NOW()
);
```

`monitor.py` corre semanalmente: si `production_accuracy_7d < 0.75` → alerta de drift → disparar reentrenamiento.

---

## GitHub Actions

Archivo: `.github/workflows/ml-pipeline.yml`  
Trigger: cada domingo 6am + push a `ml/scripts/**`  
Pasos: fetch data → preprocess → train → evaluate → si pasa gate → registrar en MLflow

Secrets necesarios en GitHub:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `MLFLOW_TRACKING_URI` (si se usa servidor remoto)

---

## Flywheel de Datos

```
Usuarios usan la app
  → Registran transacciones
  → El modelo clasifica
  → Usuario confirma o corrige
  → Se guarda en ml_predictions con actual_cat
  → Reentrenamiento semanal con nuevos datos
  → Modelo mejora → usuarios confían más → más usuarios
```

La tabla `transactions` en Supabase ya es el data warehouse. No se necesita infraestructura adicional para recolectar datos de entrenamiento.

---

## Orden de Implementación para Mañana

1. `pip install mlflow scikit-learn playwright pandas supabase fastapi uvicorn`
2. Descargar DANE ENPH CSV manualmente desde microdatos.dane.gov.co
3. Correr `fetch_exito.py` (ya tienes el patrón)
4. Correr `fetch_rappi.py` (Playwright)
5. Correr `fetch_own_data.py` (Supabase)
6. Correr `build_dataset.py` → inspeccionar distribución de clases
7. Correr `train.py` → ver métricas en `mlflow ui`
8. Si accuracy >= 0.85 → integrar `serve/app.py`
9. Crear tabla `ml_predictions` en Supabase
10. Reemplazar `classifyExpense()` en `chat/route.ts` con llamada al microservicio
