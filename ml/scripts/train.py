"""
train.py — Entrena el modelo Transaction Categorizer con MLflow tracking
Modelos:
  1. Categorizador de gastos: descripcion+monto → categoria
  2. Detector de gasto hormiga: descripcion+monto → es_hormiga (bool)
Gate de calidad: accuracy >= 0.75 para registrar en MLflow
"""
import os, sys, json
import pandas as pd
import numpy as np
import mlflow
import mlflow.sklearn
import joblib
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (accuracy_score, f1_score, precision_score,
                              recall_score, classification_report, confusion_matrix)

BASE_DIR    = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_PATH   = os.path.join(BASE_DIR, 'data', 'processed', 'dataset_v1.csv')
MODELS_DIR  = os.path.join(BASE_DIR, 'models', 'registry')
MLFLOW_DIR  = os.path.join(BASE_DIR, 'mlflow')
os.makedirs(MODELS_DIR, exist_ok=True)
os.makedirs(MLFLOW_DIR, exist_ok=True)

QUALITY_GATE = 0.75

def main():
    print("=" * 60)
    print("🤖 Lukas AI — Transaction Categorizer Training")
    print("=" * 60)

    # ── Cargar datos ──
    if not os.path.exists(DATA_PATH):
        print("❌ Dataset no encontrado. Ejecuta primero: python scripts/build_dataset.py")
        sys.exit(1)

    df = pd.read_csv(DATA_PATH)
    print(f"📊 Dataset: {len(df)} filas")

    # Expandir filas por peso (ground truth tiene peso 2)
    df_expanded = df.loc[df.index.repeat(df['peso'].fillna(1).astype(int))].reset_index(drop=True)
    print(f"📊 Dataset expandido (con pesos): {len(df_expanded)} filas")

    X_raw  = df_expanded['X'].fillna('')
    y_cat  = df_expanded['categoria']
    y_horm = df_expanded['es_gasto_hormiga'].astype(bool)

    # ── Split ──
    X_train, X_test, ycat_train, ycat_test, yhorm_train, yhorm_test = train_test_split(
        X_raw, y_cat, y_horm, test_size=0.20, random_state=42, stratify=y_cat
    )
    print(f"🔀 Train: {len(X_train)} | Test: {len(X_test)}")

    # ── MLflow setup ──
    mlflow.set_tracking_uri(f"sqlite:///{MLFLOW_DIR}/mlflow.db")
    mlflow.set_experiment("lukas_transaction_categorizer")

    # ==================================================================
    # MODELO 1: Categorizador de transacciones
    # ==================================================================
    print("\n📚 Entrenando modelo de categorías...")
    with mlflow.start_run(run_name="cat_tfidf_logreg"):
        model_cat = Pipeline([
            ('tfidf', TfidfVectorizer(
                max_features=8000,
                ngram_range=(1, 2),
                analyzer='char_wb',
                sublinear_tf=True
            )),
            ('clf', LogisticRegression(
                C=2.0,
                solver='lbfgs',
                max_iter=2000,
                class_weight='balanced'
            ))
        ])
        model_cat.fit(X_train, ycat_train)
        ycat_pred = model_cat.predict(X_test)

        acc      = accuracy_score(ycat_test, ycat_pred)
        f1_macro = f1_score(ycat_test, ycat_pred, average='macro', zero_division=0)
        f1_weighted = f1_score(ycat_test, ycat_pred, average='weighted', zero_division=0)
        prec     = precision_score(ycat_test, ycat_pred, average='weighted', zero_division=0)
        rec      = recall_score(ycat_test, ycat_pred, average='weighted', zero_division=0)

        # Cross-validation
        cv_scores = cross_val_score(model_cat, X_raw, y_cat, cv=5, scoring='accuracy')

        mlflow.log_param("model_type", "TF-IDF + LogisticRegression")
        mlflow.log_param("tfidf_features", 8000)
        mlflow.log_param("tfidf_ngram", "(1,2)")
        mlflow.log_param("tfidf_analyzer", "char_wb")
        mlflow.log_param("lr_C", 2.0)
        mlflow.log_metric("accuracy_test", acc)
        mlflow.log_metric("f1_macro", f1_macro)
        mlflow.log_metric("f1_weighted", f1_weighted)
        mlflow.log_metric("precision_weighted", prec)
        mlflow.log_metric("recall_weighted", rec)
        mlflow.log_metric("cv_accuracy_mean", cv_scores.mean())
        mlflow.log_metric("cv_accuracy_std", cv_scores.std())
        mlflow.log_metric("train_size", len(X_train))
        mlflow.log_metric("test_size", len(X_test))

        # Report completo
        report = classification_report(ycat_test, ycat_pred, zero_division=0)
        report_path = os.path.join(MLFLOW_DIR, 'classification_report_cat.txt')
        with open(report_path, 'w') as f:
            f.write(f"ACCURACY: {acc:.4f}\n")
            f.write(f"F1 MACRO: {f1_macro:.4f}\n")
            f.write(f"F1 WEIGHTED: {f1_weighted:.4f}\n")
            f.write(f"CV ACCURACY: {cv_scores.mean():.4f} ± {cv_scores.std():.4f}\n\n")
            f.write(report)
        mlflow.log_artifact(report_path)

        print(f"\n📊 MÉTRICAS — Modelo de Categorías:")
        print(f"   Accuracy test:    {acc:.4f} ({acc*100:.1f}%)")
        print(f"   F1 macro:         {f1_macro:.4f}")
        print(f"   F1 weighted:      {f1_weighted:.4f}")
        print(f"   CV accuracy:      {cv_scores.mean():.4f} ± {cv_scores.std():.4f}")
        print()

        if acc >= QUALITY_GATE:
            cat_model_path = os.path.join(MODELS_DIR, 'model_cat_latest.joblib')
            joblib.dump(model_cat, cat_model_path)
            mlflow.sklearn.log_model(model_cat, "model_cat")
            print(f"   ✅ Gate de calidad PASADO ({acc:.2f} >= {QUALITY_GATE})")
            print(f"   💾 Modelo guardado: {cat_model_path}")
        else:
            print(f"   ⚠️  Gate de calidad no pasado ({acc:.2f} < {QUALITY_GATE})")
            print(f"   💾 Guardando modelo igualmente para demo...")
            cat_model_path = os.path.join(MODELS_DIR, 'model_cat_latest.joblib')
            joblib.dump(model_cat, cat_model_path)

        # Reporte por categoría
        print("\n📊 F1 por categoría:")
        labels = sorted(set(ycat_test))
        f1_per_class = f1_score(ycat_test, ycat_pred, labels=labels, average=None, zero_division=0)
        prec_per_class = precision_score(ycat_test, ycat_pred, labels=labels, average=None, zero_division=0)
        rec_per_class  = recall_score(ycat_test, ycat_pred, labels=labels, average=None, zero_division=0)
        support        = [sum(ycat_test == l) for l in labels]
        for i, label in enumerate(labels):
            bar = '█' * int(f1_per_class[i] * 20)
            print(f"   {label:<20} F1={f1_per_class[i]:.2f}  P={prec_per_class[i]:.2f}  R={rec_per_class[i]:.2f}  n={support[i]:>4}  {bar}")

    # ==================================================================
    # MODELO 2: Detector de gastos hormiga
    # ==================================================================
    print("\n🐜 Entrenando detector de gastos hormiga...")
    with mlflow.start_run(run_name="hormiga_detector"):
        model_horm = Pipeline([
            ('tfidf', TfidfVectorizer(
                max_features=5000,
                ngram_range=(1, 2),
                analyzer='char_wb',
                sublinear_tf=True
            )),
            ('clf', LogisticRegression(
                C=1.0,
                solver='lbfgs',
                max_iter=1000,
                class_weight='balanced'
            ))
        ])
        model_horm.fit(X_train, yhorm_train)
        yhorm_pred = model_horm.predict(X_test)

        acc_h   = accuracy_score(yhorm_test, yhorm_pred)
        f1_h    = f1_score(yhorm_test, yhorm_pred, zero_division=0)
        prec_h  = precision_score(yhorm_test, yhorm_pred, zero_division=0)
        rec_h   = recall_score(yhorm_test, yhorm_pred, zero_division=0)

        mlflow.log_metric("accuracy_hormiga", acc_h)
        mlflow.log_metric("f1_hormiga", f1_h)
        mlflow.log_metric("precision_hormiga", prec_h)
        mlflow.log_metric("recall_hormiga", rec_h)

        print(f"\n📊 MÉTRICAS — Detector Hormiga:")
        print(f"   Accuracy:   {acc_h:.4f} ({acc_h*100:.1f}%)")
        print(f"   F1:         {f1_h:.4f}")
        print(f"   Precision:  {prec_h:.4f}")
        print(f"   Recall:     {rec_h:.4f}")

        horm_model_path = os.path.join(MODELS_DIR, 'model_hormiga_latest.joblib')
        joblib.dump(model_horm, horm_model_path)
        mlflow.sklearn.log_model(model_horm, "model_hormiga")
        print(f"   💾 Modelo guardado: {horm_model_path}")

    # ── Guardar metadatos de versión ──
    meta = {
        "version": "v1.0",
        "trained_at": pd.Timestamp.now().isoformat(),
        "dataset_size": len(df),
        "dataset_expanded": len(df_expanded),
        "cat_accuracy": float(acc),
        "cat_f1_macro": float(f1_macro),
        "cat_f1_weighted": float(f1_weighted),
        "cat_cv_mean": float(cv_scores.mean()),
        "cat_cv_std": float(cv_scores.std()),
        "hormiga_accuracy": float(acc_h),
        "hormiga_f1": float(f1_h),
        "quality_gate_passed": acc >= QUALITY_GATE,
        "categories": sorted(set(y_cat.unique())),
    }
    meta_path = os.path.join(MODELS_DIR, 'model_meta.json')
    with open(meta_path, 'w') as f:
        json.dump(meta, f, indent=2, default=str)

    print(f"\n{'='*60}")
    print(f"✅ Pipeline completado!")
    print(f"   Modelo cat:    {cat_model_path}")
    print(f"   Modelo hormiga:{horm_model_path}")
    print(f"   Metadatos:     {meta_path}")
    print(f"\n▶  Para iniciar el servidor: uvicorn ml.serve.app:app --port 8001 --reload")
    print(f"▶  Para ver MLflow UI:       mlflow ui --backend-store-uri sqlite:///ml/mlflow/mlflow.db")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()
