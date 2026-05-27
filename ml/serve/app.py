"""
serve/app.py — FastAPI microservicio para el modelo Transaction Categorizer
Puerto: 8001
Endpoint: POST /predict
"""
import os, json
import joblib
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI(
    title="Lukas ML Classifier",
    description="Clasifica transacciones financieras colombianas en categorías y detecta gastos hormiga",
    version="1.0.0"
)

BASE_DIR    = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODELS_DIR  = os.path.join(BASE_DIR, 'models', 'registry')

# Cargar modelos al inicio
model_cat   = None
model_horm  = None
model_meta  = {}

def load_models():
    global model_cat, model_horm, model_meta
    cat_path  = os.path.join(MODELS_DIR, 'model_cat_latest.joblib')
    horm_path = os.path.join(MODELS_DIR, 'model_hormiga_latest.joblib')
    meta_path = os.path.join(MODELS_DIR, 'model_meta.json')

    if os.path.exists(cat_path):
        model_cat = joblib.load(cat_path)
        print(f"✅ Modelo categorías cargado desde {cat_path}")
    else:
        print(f"⚠️  Modelo categorías no encontrado en {cat_path}")

    if os.path.exists(horm_path):
        model_horm = joblib.load(horm_path)
        print(f"✅ Modelo hormiga cargado desde {horm_path}")
    else:
        print(f"⚠️  Modelo hormiga no encontrado en {horm_path}")

    if os.path.exists(meta_path):
        with open(meta_path) as f:
            model_meta = json.load(f)

load_models()

# ── Feature engineering (debe coincidir con build_dataset.py) ──
def monto_bucket(m: float) -> str:
    if m < 30_000:  return 'bajo'
    if m < 150_000: return 'medio'
    return 'alto'

def build_features(descripcion: str, monto: float) -> str:
    return f"{descripcion.lower().strip()} monto:{monto_bucket(monto)}"

# ── Fallback cuando el modelo no está disponible ──
def fallback_classify(descripcion: str, monto: float) -> dict:
    text = descripcion.lower()
    categoria = 'otro'
    es_hormiga = False

    if any(k in text for k in ['arriendo', 'renta', 'hipoteca']): categoria = 'vivienda'
    elif any(k in text for k in ['luz', 'agua', 'gas', 'internet', 'epm', 'vanti', 'energia', 'acueducto']): categoria = 'servicios'
    elif any(k in text for k in ['netflix', 'spotify', 'prime', 'hbo', 'disney', 'suscripcion', 'mensualidad', 'app']): categoria = 'tecnologia'
    elif any(k in text for k in ['uber', 'taxi', 'didi', 'bus', 'metro', 'transmilenio', 'pasaje', 'gasolina']): categoria = 'transporte'
    elif any(k in text for k in ['medico', 'farmacia', 'drogueria', 'medicina', 'salud', 'eps']): categoria = 'salud'
    elif any(k in text for k in ['colegio', 'universidad', 'curso', 'libro', 'matricula']): categoria = 'educacion'
    elif any(k in text for k in ['ropa', 'camisa', 'pantalon', 'zapatos', 'tenis']): categoria = 'ropa'
    elif any(k in text for k in ['gimnasio', 'gym', 'deporte', 'crossfit']): categoria = 'deporte'
    elif any(k in text for k in ['ahorro', 'meta de ahorro']): categoria = 'ahorro'
    elif any(k in text for k in ['cafe', 'tinto', 'empanada', 'almuerzo', 'comida', 'mercado', 'hamburguesa', 'pizza', 'sushi', 'domicilio']): categoria = 'alimentacion'
    elif any(k in text for k in ['cine', 'bar', 'rumbear', 'concierto', 'plan', 'viaje']): categoria = 'entretenimiento'
    elif any(k in text for k in ['salario', 'nomina', 'quincena', 'sueldo']): categoria = 'ingreso_trabajo'
    elif any(k in text for k in ['freelance', 'venta', 'ganancia']): categoria = 'ingreso_extra'

    if monto < 80_000 and any(k in text for k in ['cafe', 'tinto', 'empanada', 'snack', 'mecato', 'gaseosa', 'papas', 'chito', 'domicilio', 'uber', 'taxi']):
        es_hormiga = True

    return {'categoria': categoria, 'es_hormiga': es_hormiga, 'confidence': 0.6, 'source': 'fallback'}

class PredictRequest(BaseModel):
    descripcion: str
    monto: float = 0.0

class PredictResponse(BaseModel):
    categoria: str
    es_hormiga: bool
    confidence: float
    source: str  # 'ml' | 'fallback'
    model_version: str = "v1.0"

@app.get("/health")
def health():
    return {
        "status": "ok",
        "model_cat_loaded": model_cat is not None,
        "model_hormiga_loaded": model_horm is not None,
        "model_version": model_meta.get("version", "unknown"),
        "trained_at": model_meta.get("trained_at", "unknown"),
        "cat_accuracy": model_meta.get("cat_accuracy"),
        "hormiga_accuracy": model_meta.get("hormiga_accuracy"),
    }

@app.get("/metrics")
def metrics():
    return model_meta

@app.post("/predict", response_model=PredictResponse)
def predict(req: PredictRequest):
    if model_cat is None or model_horm is None:
        # Usar fallback si los modelos no están cargados
        result = fallback_classify(req.descripcion, req.monto)
        return PredictResponse(**result)

    try:
        X = build_features(req.descripcion, req.monto)

        # Predecir categoría con probabilidades
        cat_proba  = model_cat.predict_proba([X])[0]
        cat_class  = model_cat.classes_[cat_proba.argmax()]
        confidence = float(cat_proba.max())

        # Predecir hormiga
        horm_proba  = model_horm.predict_proba([X])[0]
        horm_class  = bool(model_horm.classes_[horm_proba.argmax()])
        horm_conf   = float(horm_proba.max())

        return PredictResponse(
            categoria=cat_class,
            es_hormiga=horm_class,
            confidence=confidence,
            source='ml',
            model_version=model_meta.get("version", "v1.0")
        )
    except Exception as e:
        result = fallback_classify(req.descripcion, req.monto)
        return PredictResponse(**result)

@app.get("/")
def root():
    return {"message": "Lukas ML Classifier — POST /predict para clasificar transacciones"}
