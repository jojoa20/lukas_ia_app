# Lukas AI — Pipeline MLOps: Transaction Categorizer

## Objetivo
Reemplazar `classifyExpense()` en `src/app/api/chat/route.ts` —que usa regex hardcodeadas— con un modelo de ML real que clasifica descripciones de transacciones.

**Input:** `descripcion: string` + `monto: number`
**Output:** `{ categoria: string, es_hormiga: boolean, confidence: number }`

**Categorías:** `Fijos | Salidas | Susc. | Ahorro | Ingresos`

---

## Modelo Recomendado: FastText

| Criterio | FastText ✅ | TF-IDF+LR | BETO (BERT español) |
|---|---|---|---|
| Accuracy texto corto | ~82% | ~81% | ~84% |
| Tamaño del modelo | **2 MB** | ~50 MB | ~400 MB |
| Inferencia | **<1 ms** | ~5 ms | ~50 ms |
| Manejo tipeos/variantes | ✓ subwords | ✗ | ✓ |
| GPU requerida | No | No | Para entrenar |
| Datos mínimos | **~1.000 ejemplos** | ~500 | ~3.000 |
| Empaquetable en server | Sí (binario) | Sí | No (muy grande) |

**Por qué FastText y no BERT:** el `char_wb` / subword embedding captura que `tinto`, `tintico`, `café tinto` y `cafecito` son lo mismo. Los textos son cortos (5–15 palabras), el vocabulario es cerrado, y se necesita inferencia < 2ms para no bloquear el chat.

**Referencia académica citable:**
- Paper arXiv 2305.18430: *Scalable and Weakly Supervised Bank Transaction Classification*
- Tesis TDEA Colombia: [dspace.tdea.edu.co/handle/tdea/1953](https://dspace.tdea.edu.co/bitstream/handle/tdea/1953/TrabajoMaestria_Transformacion%20Digital%20de%20la%20Banca-final.pdf)

---

## Fuentes de Datos (100% Reales)

### Tier 1 — DANE ENPH (gobierno colombiano, gold standard)
- **URL:** [microdatos.dane.gov.co/catalog/566](https://microdatos.dane.gov.co/index.php/catalog/566)
- **Registros:** ~50.000 hogares colombianos
- **Columnas clave:** `CONCEPTO` (texto del gasto), `VLRTOTAL` (monto COP), código COICOP
- **Mapeo COICOP → Lukas:**
  ```
  "01" → Salidas,  hormiga=False   (Alimentos)
  "02" → Salidas,  hormiga=True    (Tabaco/licor)
  "04" → Fijos,    hormiga=False   (Vivienda, servicios)
  "07" → Salidas,  hormiga=False   (Transporte)
  "08" → Susc.,    hormiga=True    (Comunicaciones)
  "11" → Salidas,  hormiga=False   (Restaurantes)
  "12" → Salidas,  hormiga=True    (Bienes varios)
  ```

### Tier 2 — GEIH 2024 DANE (~200k registros)
- **URL:** [microdatos.dane.gov.co/catalog/819](https://microdatos.dane.gov.co/index.php/catalog/819)
- Ingresos laborales + gastos por hogar

### Tier 3 — Scraper Éxito VTEX (ya implementado)
- Correr: `python scripts/scraper_market.py`
- Output: `ml/data/raw/exito_prices.csv` (~1.500 filas etiquetadas)
- Cada fila ya tiene `(descripcion, monto, categoria, es_gasto_hormiga)`

### Tier 4 — Supabase propio (gold labels, crece solo)
```sql
SELECT descripcion, monto, categoria, es_gasto_hormiga
FROM transactions
WHERE descripcion IS NOT NULL
  AND metodo_entrada = 'manual';
```

### Tier 5 — CSV sintético colombiano (arrancar rápido)
Generar ~2.000 filas con jerga real:
```
"tinto en la tienda", 2000, Salidas, True
"arriendo apartamento enero", 950000, Fijos, False
"spotify premium", 17900, Susc., True
"nómina febrero", 2500000, Ingresos, False
"mecato en el descanso", 3500, Salidas, True
"cuota del crédito", 450000, Fijos, False
```

**Dataset final estimado:**
| Fuente | Registros | Calidad |
|---|---|---|
| DANE ENPH | ~18.000 (filtrados) | Alta |
| GEIH 2024 | ~5.000 (filtrados) | Alta |
| Scraper Éxito | ~1.500 | Media-Alta |
| CSV sintético | ~2.000 | Media |
| Supabase propio | variable (crece) | Muy Alta (gold) |
| **Total inicial** | **~26.000** | — |

---

## Estructura de Carpetas

```
ml/
├── data/
│   ├── raw/                    ← archivos descargados
│   │   ├── enph_2017.csv       ← DANE ENPH (descargar manualmente)
│   │   ├── geih_2024.csv       ← DANE GEIH (descargar manualmente)
│   │   ├── exito_prices.csv    ← generado por scripts/scraper_market.py
│   │   └── synthetic_co.csv    ← CSV manual con jerga colombiana
│   └── processed/
│       ├── dataset_v1.csv      ← consolidado y limpio
│       ├── train.txt           ← formato FastText __label__X texto
│       └── test.txt
├── models/
│   └── lukas_classifier.bin    ← modelo entrenado
├── scripts/
│   ├── build_dataset.py        ← consolida todas las fuentes
│   ├── train.py                ← entrena FastText + gate accuracy >= 0.85
│   ├── evaluate.py             ← matriz de confusión + métricas
│   └── monitor.py              ← drift semanal desde Supabase
├── serve/
│   └── app.py                  ← FastAPI en :8001 para servir el modelo
└── README.md                   ← este archivo
```

---

## Implementación

### 1. Instalar dependencias
```bash
pip install fasttext scikit-learn pandas supabase fastapi uvicorn
```

### 2. Build dataset
```python
# ml/scripts/build_dataset.py
import pandas as pd

# Cargar todas las fuentes
dane = pd.read_csv('ml/data/raw/enph_2017.csv', usecols=['CONCEPTO', 'VLRTOTAL', 'COICOP'])
exito = pd.read_csv('ml/data/raw/exito_prices.csv')
synthetic = pd.read_csv('ml/data/raw/synthetic_co.csv')

# Mapeo COICOP → categoría Lukas
COICOP_MAP = {
    '01': ('Salidas', False), '02': ('Salidas', True),
    '04': ('Fijos', False),   '07': ('Salidas', False),
    '08': ('Susc.', True),    '11': ('Salidas', False),
    '12': ('Salidas', True),
}

# Consolidar, limpiar, balancear clases
dataset = pd.concat([dane_mapped, exito, synthetic]).dropna()
dataset.to_csv('ml/data/processed/dataset_v1.csv', index=False)
```

### 3. Entrenar FastText
```python
# ml/scripts/train.py
import fasttext, pandas as pd
from sklearn.model_selection import train_test_split

df = pd.read_csv('ml/data/processed/dataset_v1.csv')

def to_fasttext(row):
    bucket = "bajo" if row.monto < 30_000 else "medio" if row.monto < 150_000 else "alto"
    return f"__label__{row.categoria} {row.descripcion.lower()} monto:{bucket}"

train_df, test_df = train_test_split(df, test_size=0.2, stratify=df.categoria)

with open('ml/data/processed/train.txt', 'w') as f:
    f.write('\n'.join(train_df.apply(to_fasttext, axis=1)))

with open('ml/data/processed/test.txt', 'w') as f:
    f.write('\n'.join(test_df.apply(to_fasttext, axis=1)))

model = fasttext.train_supervised(
    input='ml/data/processed/train.txt',
    epoch=50, lr=0.5, wordNgrams=2, dim=100, minCount=2, loss='softmax'
)

# Gate de calidad: accuracy >= 0.85
result = model.test('ml/data/processed/test.txt')
print(f"Accuracy: {result[1]:.2%}")
assert result[1] >= 0.85, f"Accuracy {result[1]:.2%} < 0.85 — no promover a producción"

model.save_model('ml/models/lukas_classifier.bin')
```

### 4. Servir el modelo
```python
# ml/serve/app.py
from fastapi import FastAPI
import fasttext

app = FastAPI()
model = fasttext.load_model('ml/models/lukas_classifier.bin')

@app.post('/predict')
def predict(body: dict):
    desc = body['descripcion'].lower()
    monto = body.get('monto', 0)
    bucket = 'bajo' if monto < 30_000 else 'medio' if monto < 150_000 else 'alto'
    labels, probs = model.predict(f"{desc} monto:{bucket}", k=1)
    return {
        'categoria': labels[0].replace('__label__', ''),
        'confidence': round(float(probs[0]), 3),
        'es_hormiga': monto < 80_000 and bucket == 'bajo',
    }
```

### 5. Integrar en Next.js
Crear `src/lib/ml-classifier.ts` que reemplaza `classifyExpense()`:

```typescript
// Llama al microservicio FastAPI en :8001
// Si no responde en 2s, hace fallback a las regex actuales
export async function classifyExpenseML(descripcion: string, monto: number) {
  try {
    const res = await fetch('http://localhost:8001/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ descripcion, monto }),
      signal: AbortSignal.timeout(2000),
    })
    if (res.ok) return res.json()
  } catch {}
  return classifyExpenseFallback(descripcion)  // regex actual como fallback
}
```

---

## Orden de Implementación

```
Día 1  →  Descargar DANE ENPH manualmente desde microdatos.dane.gov.co
          Correr: python scripts/scraper_market.py
          Escribir synthetic_co.csv (~2.000 filas con jerga colombiana)

Día 2  →  build_dataset.py → dataset_v1.csv (~26.000 filas)
          train.py → verificar accuracy >= 85%
          Inspeccionar confusion matrix: ¿qué confunde Fijos vs Salidas?

Día 3  →  serve/app.py corriendo en :8001
          ml-classifier.ts: conectar al agente con fallback
          Test manual en el chat con 20 casos reales

Semana+ →  monitor.py: detectar drift comparando predicciones vs correcciones
           GitHub Action: reentrenamiento automático cada domingo
```

---

## Flywheel de Datos
```
Usuarios registran transacciones
  → Modelo clasifica automáticamente
  → Usuario confirma o corrige la categoría
  → Se guarda en transactions con metodo_entrada='ai' o 'manual'
  → Reentrenamiento semanal con nuevos datos
  → Modelo mejora → menos correcciones → más confianza → más usuarios
```
