"""
build_dataset.py — Consolida todas las fuentes de datos para el modelo Transaction Categorizer
Fuentes:
  1. ml/data/raw/synthetic_co.csv     (~3474 filas — sintético colombiano)
  2. ml/data/raw/dane_enig_gastos.csv (~3038 filas — DANE ENIG 2006-2007)
  3. ml/data/raw/supabase_transactions.csv (transacciones reales de usuarios)
Output:
  ml/data/processed/dataset_v1.csv
"""
import pandas as pd
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW_DIR  = os.path.join(BASE_DIR, 'data', 'raw')
OUT_DIR  = os.path.join(BASE_DIR, 'data', 'processed')
os.makedirs(OUT_DIR, exist_ok=True)

# ── Categorías válidas en la DB de Lukas ──
DB_VALID = {'alimentacion','transporte','entretenimiento','salud','educacion',
            'servicios','vivienda','ropa','tecnologia','deporte','ahorro',
            'ingreso_trabajo','ingreso_extra','transferencia','otro'}

# ── Mapeo de categorías legacy → DB ──
LEGACY_MAP = {
    'Salidas':  'alimentacion',
    'Fijos':    'servicios',
    'Susc.':    'tecnologia',
    'Susc':     'tecnologia',
    'Ahorro':   'ahorro',
    'Ingresos': 'ingreso_trabajo',
    'ingreso':  'ingreso_trabajo',
    # DANE ENIG
    'ALIMENTOS Y BEBIDAS NO ALCOHÓLICAS': 'alimentacion',
    'BEBIDAS ALCOHÓLICAS, TABACO Y ESTUPEFACIENTES': 'entretenimiento',
    'PRENDAS DE VESTIR Y CALZADO': 'ropa',
    'ALOJAMIENTO, AGUA, ELECTRICIDAD, GAS': 'servicios',
    'MUEBLES, ARTÍCULOS PARA EL HOGAR': 'vivienda',
    'SALUD': 'salud',
    'TRANSPORTE': 'transporte',
    'INFORMACIÓN Y COMUNICACIÓN': 'tecnologia',
    'RECREACIÓN, DEPORTE Y CULTURA': 'entretenimiento',
    'SERVICIOS DE EDUCACIÓN': 'educacion',
    'RESTAURANTES Y HOTELES': 'alimentacion',
    'BIENES Y SERVICIOS DIVERSOS': 'otro',
}

def normalize_cat(cat):
    if pd.isna(cat):
        return 'otro'
    cat = str(cat).strip()
    if cat in DB_VALID:
        return cat
    if cat in LEGACY_MAP:
        return LEGACY_MAP[cat]
    cat_lower = cat.lower()
    for key, val in LEGACY_MAP.items():
        if key.lower() in cat_lower:
            return val
    return 'otro'

def monto_bucket(m):
    try:
        m = float(m)
        if m < 30_000:  return 'bajo'
        if m < 150_000: return 'medio'
        return 'alto'
    except:
        return 'medio'

def build_features(desc, monto):
    return f"{str(desc).lower().strip()} monto:{monto_bucket(monto)}"

frames = []

# ── Fuente 1: Sintético colombiano ──
f1 = os.path.join(RAW_DIR, 'synthetic_co.csv')
if os.path.exists(f1):
    df1 = pd.read_csv(f1)
    df1['categoria'] = df1['categoria'].apply(normalize_cat)
    df1['es_gasto_hormiga'] = df1['es_gasto_hormiga'].astype(str).str.lower().isin(['true','1','yes'])
    df1['fuente'] = 'synthetic'
    df1['peso'] = 1
    frames.append(df1[['descripcion','monto','categoria','es_gasto_hormiga','fuente','peso']])
    print(f"✓ synthetic_co.csv: {len(df1)} filas")

# ── Fuente 2: DANE ENIG ──
f2 = os.path.join(RAW_DIR, 'dane_enig_gastos.csv')
if os.path.exists(f2):
    df2 = pd.read_csv(f2)
    df2['categoria'] = df2['categoria'].apply(normalize_cat)
    df2['es_gasto_hormiga'] = df2['es_gasto_hormiga'].astype(str).str.lower().isin(['true','1','yes'])
    df2['fuente'] = 'DANE_ENIG'
    df2['peso'] = 1
    frames.append(df2[['descripcion','monto','categoria','es_gasto_hormiga','fuente','peso']])
    print(f"✓ dane_enig_gastos.csv: {len(df2)} filas")

# ── Fuente 3: Supabase (ground truth — peso 2x) ──
f3 = os.path.join(RAW_DIR, 'supabase_transactions.csv')
if os.path.exists(f3):
    df3 = pd.read_csv(f3)
    df3['categoria'] = df3['categoria'].apply(normalize_cat)
    df3['es_gasto_hormiga'] = df3['es_gasto_hormiga'].astype(str).str.lower().isin(['true','1','yes'])
    df3['fuente'] = 'supabase'
    df3['peso'] = 2
    frames.append(df3[['descripcion','monto','categoria','es_gasto_hormiga','fuente','peso']])
    print(f"✓ supabase_transactions.csv: {len(df3)} filas (peso 2x)")

# ── Consolidar ──
df = pd.concat(frames, ignore_index=True)
df = df.dropna(subset=['descripcion', 'categoria'])
df = df[df['descripcion'].str.strip() != '']
df = df[df['categoria'].isin(DB_VALID)]

# ── Feature engineering ──
df['X'] = df.apply(lambda r: build_features(r['descripcion'], r['monto']), axis=1)

# ── Guardar ──
out_path = os.path.join(OUT_DIR, 'dataset_v1.csv')
df.to_csv(out_path, index=False)

# ── Reporte ──
print(f"\n{'='*50}")
print(f"📊 DATASET FINAL: {len(df)} filas")
print(f"📁 Guardado en: {out_path}")
print(f"\n📈 Distribución de categorías:")
dist = df['categoria'].value_counts()
for cat, cnt in dist.items():
    pct = cnt/len(df)*100
    bar = '█' * int(pct/2)
    print(f"  {cat:<20} {cnt:>5} ({pct:>5.1f}%) {bar}")

print(f"\n🐜 Gastos hormiga: {df['es_gasto_hormiga'].sum()} ({df['es_gasto_hormiga'].mean()*100:.1f}%)")
print(f"📦 Fuentes: {df['fuente'].value_counts().to_dict()}")
