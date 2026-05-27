# 🤖 Lukas AI — Modelo de Machine Learning

## ¿Qué hace?
Clasifica automáticamente transacciones financieras en **15 categorías** (alimentación, transporte, tecnología, etc.) y detecta **gastos hormiga** (gastos pequeños/recurrentes).

---

## Modelo elegido: TF-IDF + Logistic Regression

### Por qué TF-IDF (char n-gram)
| Criterio | Elección |
|---|---|
| **Tipo de entrada** | Texto corto ("tinto oficina", "Rappi $12k") — no oraciones largas |
| **Vocabulario** | Irregular: abreviaturas, errores ortográficos, nombres propios colombianos |
| **Solución** | `analyzer='char_wb'` con n-gramas de caracteres (1-3) captura "rappi", "rapi", "RAPI" igual |

### Por qué Logistic Regression (no Random Forest, no SVM, no Red Neuronal)
| Opción | Motivo de elección / descarte |
|---|---|
| **Logistic Regression ✅** | Rápido de entrenar, interpretable, excelente en texto disperso (TF-IDF), escala bien |
| Random Forest ❌ | Texto TF-IDF genera miles de features, árboles no lo manejan bien |
| SVM ❌ | Más lento en inferencia, sin ventaja en accuracy para este tamaño de datos |
| Red Neuronal ❌ | Overkill para 6k filas; requeriría GPU y fine-tuning continuo |

---

## Datos de entrenamiento (6,579 filas)

| Fuente | Filas | Peso |
|---|---|---|
| Transacciones reales Supabase | 67 | ×2 (duplicadas para mayor peso) |
| Dataset ENPH DANE 2016-2017 (gastos urbanos colombianos) | ~4,500 | ×1 |
| Datos sintéticos por categoría | ~2,000 | ×1 |

---

## Métricas (test set 20%)

| Métrica | Valor |
|---|---|
| **Accuracy categoría** | **84.7%** ✅ |
| **F1 ponderado** | 0.856 |
| **CV mean (5-fold)** | 80.8% |
| **Accuracy hormiga** | 85.4% |
| **F1 hormiga** | 0.836 |

> Umbral de calidad: accuracy ≥ 75% → **APROBADO**

---

## Arquitectura en producción

```
Chat / Transacción
       ↓
[TypeScript: classifyExpenseML()]  → POST /predict → FastAPI (puerto 8001)
       ↓                                                    ↓
[Fallback regex]              ←——————————————  TF-IDF + LogReg (< 50ms)
       ↓
Supabase → transactions.categoria = 'alimentacion' ✅
```

- **ML service**: `ml/serve/app.py` (FastAPI, puerto 8001)
- **Timeout**: 1.5s — si el servicio ML no responde, usa regex fallback
- **Monitoreo**: `ml/scripts/monitor.py` — detecta drift semanal (alerta si accuracy < 75%)
- **Reentrenamiento**: `ml/scripts/train.py` — se ejecuta via GitHub Actions o manual

---

## Archivos clave

```
ml/
├── models/registry/
│   ├── model_cat_latest.joblib     # Clasificador de categorías
│   ├── model_hormiga_latest.joblib # Detector de gastos hormiga
│   └── model_meta.json             # Métricas y versión
├── scripts/
│   ├── build_dataset.py            # Une las 3 fuentes de datos
│   ├── train.py                    # Entrena y evalúa el modelo
│   └── monitor.py                  # Monitoreo de drift en producción
├── serve/app.py                    # API FastAPI
└── data/raw/
    ├── supabase_transactions.csv   # Datos reales (ground truth)
    └── gastos_train.csv            # Datos sintéticos balanceados
```

---

## Para presentar

1. **Exactitud del 84.7%** — supera el umbral de calidad del 75%
2. **Latencia < 50ms** por predicción
3. **Fallback automático** — el sistema nunca falla aunque el ML esté caído
4. **Datos colombianos** — entrenado con vocabulario local (Rappi, Nequi, corrientazo)
