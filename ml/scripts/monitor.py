"""
monitor.py — Monitoreo de drift del modelo en producción
Corre semanalmente via GitHub Actions o manualmente
Detecta: drift en distribución de categorías predichas vs. reales
"""
import os, json
import pandas as pd
import joblib
from datetime import datetime, timedelta

BASE_DIR   = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODELS_DIR = os.path.join(BASE_DIR, 'models', 'registry')

def monto_bucket(m):
    try:
        m = float(m)
        if m < 30_000:  return 'bajo'
        if m < 150_000: return 'medio'
        return 'alto'
    except:
        return 'medio'

def main():
    print("=" * 60)
    print("📊 Lukas AI — Monitor de Drift del Modelo")
    print(f"   Fecha: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print("=" * 60)

    # Cargar metadatos del modelo
    meta_path = os.path.join(MODELS_DIR, 'model_meta.json')
    if not os.path.exists(meta_path):
        print("⚠️  No hay metadatos de modelo. Ejecuta train.py primero.")
        return

    with open(meta_path) as f:
        meta = json.load(f)

    print(f"\n📦 Modelo actual: {meta.get('version', 'unknown')}")
    print(f"   Entrenado:      {meta.get('trained_at', 'unknown')}")
    print(f"   Accuracy base:  {meta.get('cat_accuracy', 0):.4f}")
    print(f"   Dataset size:   {meta.get('dataset_size', 0)}")

    # Cargar modelo
    cat_path = os.path.join(MODELS_DIR, 'model_cat_latest.joblib')
    if not os.path.exists(cat_path):
        print("⚠️  Modelo no encontrado.")
        return

    model = joblib.load(cat_path)

    # Intentar conectar a Supabase para datos recientes
    supabase_url = os.environ.get('NEXT_PUBLIC_SUPABASE_URL') or os.environ.get('SUPABASE_URL')
    service_key  = os.environ.get('SUPABASE_SERVICE_ROLE_KEY')

    if supabase_url and service_key:
        try:
            from supabase import create_client
            sb = create_client(supabase_url, service_key)
            week_ago = (datetime.now() - timedelta(days=7)).strftime('%Y-%m-%d')
            result = sb.table('transactions') \
                .select('descripcion,monto,categoria') \
                .gte('created_at', week_ago) \
                .not_.is_('descripcion', 'null') \
                .execute()

            recent = pd.DataFrame(result.data)
            if recent.empty:
                print("\n⚠️  No hay transacciones recientes (últimos 7 días).")
                return

            print(f"\n📋 Transacciones recientes: {len(recent)}")

            # Predecir con el modelo actual
            recent['X'] = recent.apply(
                lambda r: f"{str(r['descripcion']).lower()} monto:{monto_bucket(r['monto'])}",
                axis=1
            )
            recent['predicted'] = model.predict(recent['X'])

            # Comparar
            if 'categoria' in recent.columns:
                from sklearn.metrics import accuracy_score
                DB_VALID = {'alimentacion','transporte','entretenimiento','salud','educacion',
                            'servicios','vivienda','ropa','tecnologia','deporte','ahorro',
                            'ingreso_trabajo','ingreso_extra','transferencia','otro'}
                valid_mask = recent['categoria'].isin(DB_VALID)
                if valid_mask.sum() > 0:
                    recent_valid = recent[valid_mask]
                    acc = accuracy_score(recent_valid['categoria'], recent_valid['predicted'])
                    print(f"   Accuracy 7 días:  {acc:.4f}")
                    if acc < 0.75:
                        print(f"\n🚨 ALERTA DE DRIFT: accuracy cayó a {acc:.2f} (threshold: 0.75)")
                        print("   Acción recomendada: ejecutar train.py para reentrenar")
                    else:
                        print(f"   ✅ Modelo estable (accuracy: {acc:.2f})")

            print(f"\n📊 Distribución predicha (últimos 7 días):")
            dist = recent['predicted'].value_counts()
            total = len(recent)
            for cat, cnt in dist.items():
                pct = cnt/total*100
                bar = '█' * int(pct/3)
                print(f"   {cat:<20} {cnt:>4} ({pct:>5.1f}%) {bar}")

        except Exception as e:
            print(f"\n⚠️  No se pudo conectar a Supabase: {e}")
            print("   Para monitoreo completo, configura SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY")
    else:
        print("\n⚠️  Variables de entorno Supabase no configuradas.")
        print("   Configura SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY para monitoreo en producción.")

    print(f"\n{'='*60}")
    print("✅ Monitor completado")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()
