#!/usr/bin/env python3
"""
Scraper de precios Éxito para Lukas AI.
Usa la VTEX API directamente — JSON puro, sin Playwright.

Salidas:
  ml/data/raw/exito_prices.csv      → dataset etiquetado para entrenamiento ML
  Supabase external_data.market_prices → caché de precios para el comparador

Uso:
  python scripts/scraper_market.py
  SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... python scripts/scraper_market.py
"""

import csv
import os
import time
from datetime import date
from pathlib import Path

import requests
from supabase import create_client, ClientOptions

# ─── Config ───────────────────────────────────────────────────────────────────
SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")

OUTPUT_DIR = Path(__file__).parent.parent / "ml" / "data" / "raw"
OUTPUT_CSV  = OUTPUT_DIR / "exito_prices.csv"

VTEX_BASE = "https://www.exito.com/io/api/catalog_system/pub/products/search/{query}?_from=0&_to=49"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36",
    "Accept": "application/json",
    "Accept-Language": "es-CO,es;q=0.9",
    "Referer": "https://www.exito.com/",
}

# ─── Queries etiquetadas ──────────────────────────────────────────────────────
# (query_vtex, categoria_lukas, es_gasto_hormiga)
# Categorías target: Fijos | Salidas | Susc. | Ahorro | Ingresos
QUERIES: list[tuple[str, str, bool]] = [
    # ── Salidas — mercado básico ──────────────────────────────────────────────
    ("arroz",               "Salidas", False),
    ("aceite cocina",       "Salidas", False),
    ("leche entera",        "Salidas", False),
    ("pollo entero",        "Salidas", False),
    ("carne res molida",    "Salidas", False),
    ("pan tajado",          "Salidas", False),
    ("pasta espagueti",     "Salidas", False),
    ("atun lata",           "Salidas", False),
    ("huevos",              "Salidas", False),
    ("frijol",              "Salidas", False),
    ("papa",                "Salidas", False),
    ("tomate",              "Salidas", False),
    ("zanahoria",           "Salidas", False),
    ("lenteja",             "Salidas", False),
    ("azucar",              "Salidas", False),
    ("sal cocina",          "Salidas", False),
    ("mantequilla",         "Salidas", False),
    ("queso",               "Salidas", False),
    ("yogur",               "Salidas", False),
    # ── Salidas — aseo personal ───────────────────────────────────────────────
    ("shampoo cabello",     "Salidas", False),
    ("desodorante",         "Salidas", False),
    ("jabón baño",          "Salidas", False),
    ("pasta dental",        "Salidas", False),
    ("papel higiénico",     "Salidas", False),
    ("detergente ropa",     "Salidas", False),
    ("suavizante ropa",     "Salidas", False),
    ("limpiador piso",      "Salidas", False),
    ("toallas femeninas",   "Salidas", False),
    # ── Salidas — gastos hormiga (bajo monto, frecuente) ─────────────────────
    ("gaseosa coca cola",   "Salidas", True),
    ("agua botella",        "Salidas", True),
    ("jugo caja",           "Salidas", True),
    ("galletas",            "Salidas", True),
    ("chocolatina",         "Salidas", True),
    ("papas fritas snack",  "Salidas", True),
    ("chicle",              "Salidas", True),
    ("dulces gomitas",      "Salidas", True),
    ("cafe sobre",          "Salidas", True),
    ("cerveza lata",        "Salidas", True),
    ("aguardiente",         "Salidas", True),
    ("mani snack",          "Salidas", True),
    ("barra cereal",        "Salidas", True),
    ("chocolate tableta",   "Salidas", True),
    # ── Fijos — productos del hogar (proxy: Éxito vende electrodomésticos) ───
    ("bombillo led",        "Fijos", False),
    ("filtro agua",         "Fijos", False),
    ("gas cilindro",        "Fijos", False),
    ("vela emergencia",     "Fijos", False),
    ("pilas",               "Fijos", False),
    # ── Susc. — tarjetas regalo digitales ────────────────────────────────────
    ("tarjeta regalo spotify",  "Susc.", True),
    ("tarjeta regalo netflix",  "Susc.", True),
    ("tarjeta regalo claro",    "Susc.", True),
    ("recarga celular",         "Susc.", True),
]


# ─── Helpers ──────────────────────────────────────────────────────────────────

def best_price(product: dict) -> float | None:
    """Extrae el mejor precio disponible de un producto VTEX."""
    for item in product.get("items", []):
        for seller in item.get("sellers", []):
            offer = seller.get("commertialOffer", {})
            price = offer.get("Price", 0)
            qty   = offer.get("AvailableQuantity", 0)
            if price > 0 and qty > 0:
                return float(price)
    # Fallback: cualquier precio positivo aunque no haya stock
    for item in product.get("items", []):
        for seller in item.get("sellers", []):
            price = seller.get("commertialOffer", {}).get("Price", 0)
            if price > 0:
                return float(price)
    return None


def is_relevant(product: dict, query_words: list[str]) -> bool:
    """El nombre del producto debe contener al menos 1 palabra significativa del query."""
    name = (product.get("productName") or "").lower()
    return any(w in name for w in query_words if len(w) > 2)


def fetch_query(query: str, categoria: str, es_hormiga: bool) -> list[dict]:
    url = VTEX_BASE.format(query=requests.utils.quote(query))
    try:
        r = requests.get(url, headers=HEADERS, timeout=10)
        r.raise_for_status()
        products = r.json()
    except Exception as e:
        print(f"  ✗ {query!r}: {e}")
        return []

    if not isinstance(products, list):
        print(f"  ✗ {query!r}: respuesta inesperada")
        return []

    query_words = query.lower().split()
    rows = []
    today = str(date.today())

    for p in products:
        price = best_price(p)
        if not price:
            continue
        # Rango válido para consumo diario en Colombia (COP)
        if price < 500 or price > 300_000:
            continue
        if not is_relevant(p, query_words):
            continue

        rows.append({
            "descripcion":      (p.get("productName") or query)[:200],
            "monto":            price,
            "categoria":        categoria,
            "es_gasto_hormiga": es_hormiga,
            "marca":            (p.get("brand") or "")[:100],
            "store_name":       "Éxito",
            "region":           "Bogotá",
            "scraped_at":       today,
        })

    print(f"  ✓ {query!r}: {len(rows)} productos")
    return rows


# ─── Persistencia ─────────────────────────────────────────────────────────────

def save_csv(rows: list[dict]) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    fieldnames = ["descripcion", "monto", "categoria", "es_gasto_hormiga",
                  "marca", "store_name", "region", "scraped_at"]
    with open(OUTPUT_CSV, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=fieldnames)
        w.writeheader()
        w.writerows(rows)
    print(f"\n→ CSV: {OUTPUT_CSV} ({len(rows)} filas)")


def save_supabase(rows: list[dict]) -> None:
    if not SUPABASE_URL or not SUPABASE_KEY:
        print("→ Supabase no configurado, saltando inserción en DB.")
        return
    try:
        options = ClientOptions(schema="external_data")
        sb = create_client(SUPABASE_URL, SUPABASE_KEY, options=options)
        sb_rows = [
            {
                "product_name": r["descripcion"],
                "price":        r["monto"],
                "store_name":   r["store_name"],
                "unit":         "1 und",
                "category":     r["categoria"],
                "region":       r["region"],
            }
            for r in rows
        ]
        sb.table("market_prices").insert(sb_rows).execute()
        print(f"→ Supabase: {len(sb_rows)} filas en external_data.market_prices")
    except Exception as e:
        print(f"→ Supabase error: {e}")


# ─── Main ─────────────────────────────────────────────────────────────────────

def main() -> None:
    print(f"Scraper Éxito VTEX — {date.today()}")
    print(f"Queries: {len(QUERIES)}\n")

    all_rows: list[dict] = []
    for query, categoria, es_hormiga in QUERIES:
        rows = fetch_query(query, categoria, es_hormiga)
        all_rows.extend(rows)
        time.sleep(0.8)   # rate limit suave: ~1 req/s

    print(f"\nTotal: {len(all_rows)} productos scrapeados")
    save_csv(all_rows)
    save_supabase(all_rows)


if __name__ == "__main__":
    main()
