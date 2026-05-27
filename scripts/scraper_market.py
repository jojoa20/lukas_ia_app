#!/usr/bin/env python3
"""
Scraper de precios Exito para Lukas AI.

Salidas:
  - ml/data/raw/exito_prices.csv para entrenamiento offline.
  - external_data.market_prices en Supabase si hay secrets.
"""

import csv
import base64
import json
import os
import time
from datetime import date
from pathlib import Path
from urllib.parse import quote

import requests
from supabase import ClientOptions, create_client

SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
SUPABASE_ACCESS_TOKEN = os.environ.get("SUPABASE_ACCESS_TOKEN")
SUPABASE_PROJECT_REF = os.environ.get("SUPABASE_PROJECT_REF")

OUTPUT_DIR = Path(__file__).parent.parent / "ml" / "data" / "raw"
OUTPUT_CSV = OUTPUT_DIR / "exito_prices.csv"
VTEX_BASE = "https://www.exito.com/io/api/catalog_system/pub/products/search/{query}?_from=0&_to=49"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124 Safari/537.36",
    "Accept": "application/json",
    "Accept-Language": "es-CO,es;q=0.9",
    "Referer": "https://www.exito.com/",
}

QUERIES = [
    ("arroz", "Salidas", False),
    ("aceite cocina", "Salidas", False),
    ("leche entera", "Salidas", False),
    ("pollo", "Salidas", False),
    ("huevos", "Salidas", False),
    ("pasta", "Salidas", False),
    ("frijol", "Salidas", False),
    ("detergente ropa", "Salidas", False),
    ("papel higienico", "Salidas", False),
    ("shampoo", "Salidas", False),
    ("gaseosa", "Salidas", True),
    ("agua botella", "Salidas", True),
    ("galletas", "Salidas", True),
    ("chocolatina", "Salidas", True),
    ("papas fritas", "Salidas", True),
    ("cafe", "Salidas", True),
    ("cerveza lata", "Salidas", True),
    ("bombillo led", "Fijos", False),
    ("filtro agua", "Fijos", False),
    ("tarjeta regalo spotify", "Susc.", True),
    ("tarjeta regalo netflix", "Susc.", True),
    ("recarga celular", "Susc.", True),
]


def best_price(product):
    for item in product.get("items", []):
        for seller in item.get("sellers", []):
            offer = seller.get("commertialOffer", {})
            price = float(offer.get("Price") or 0)
            qty = int(offer.get("AvailableQuantity") or 0)
            if price > 0 and qty > 0:
                return price
    return None


def fetch_query(query, categoria, es_hormiga):
    url = VTEX_BASE.format(query=quote(query))
    try:
        response = requests.get(url, headers=HEADERS, timeout=12)
        response.raise_for_status()
        products = response.json()
    except Exception as exc:
        print(f"  x {query}: {exc}")
        return []

    rows = []
    query_words = [word for word in query.lower().split() if len(word) > 2]
    today = str(date.today())

    for product in products if isinstance(products, list) else []:
        name = (product.get("productName") or query).lower()
        if query_words and not any(word in name for word in query_words):
            continue
        price = best_price(product)
        if not price or price < 500 or price > 300000:
            continue
        rows.append({
            "descripcion": (product.get("productName") or query)[:200],
            "monto": price,
            "categoria": categoria,
            "es_gasto_hormiga": es_hormiga,
            "marca": (product.get("brand") or "")[:100],
            "store_name": "Exito",
            "region": "Bogota",
            "scraped_at": today,
        })

    print(f"  ok {query}: {len(rows)} productos")
    return rows


def save_csv(rows):
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    fieldnames = ["descripcion", "monto", "categoria", "es_gasto_hormiga", "marca", "store_name", "region", "scraped_at"]
    with open(OUTPUT_CSV, "w", newline="", encoding="utf-8") as file:
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)
    print(f"CSV: {OUTPUT_CSV} ({len(rows)} filas)")


def save_supabase(rows):
    if not SUPABASE_URL or not SUPABASE_KEY:
        print("Supabase no configurado; solo se genero CSV.")
        return
    payload = [{
        "product_name": row["descripcion"],
        "price": row["monto"],
        "store_name": row["store_name"],
        "unit": "1 und",
        "category": row["categoria"],
        "region": row["region"],
    } for row in rows]
    if not payload:
        print("Supabase: 0 filas para insertar.")
        return

    try:
        client = create_client(SUPABASE_URL, SUPABASE_KEY, options=ClientOptions(schema="external_data"))
        client.table("market_prices").insert(payload).execute()
        print(f"Supabase: {len(payload)} filas en external_data.market_prices")
    except Exception as exc:
        message = str(exc)
        if "PGRST106" not in message and "Invalid schema" not in message:
            raise
        save_supabase_management_api(payload)


def save_supabase_management_api(payload):
    if not SUPABASE_ACCESS_TOKEN or not SUPABASE_PROJECT_REF:
        raise RuntimeError(
            "external_data no esta expuesto en PostgREST y faltan "
            "SUPABASE_ACCESS_TOKEN/SUPABASE_PROJECT_REF para Management API."
        )

    payload_json = json.dumps(payload, ensure_ascii=False, separators=(",", ":"))
    payload_b64 = base64.b64encode(payload_json.encode("utf-8")).decode("ascii")
    query = f"""
with payload as (
  select *
  from jsonb_to_recordset(
    convert_from(decode('{payload_b64}', 'base64'), 'UTF8')::jsonb
  ) as item(
    product_name text,
    price numeric,
    store_name text,
    unit text,
    category text,
    region text
  )
)
insert into external_data.market_prices (
  product_name,
  price,
  store_name,
  unit,
  category,
  region
)
select
  left(product_name, 200),
  price,
  coalesce(nullif(store_name, ''), 'Exito'),
  unit,
  category,
  coalesce(nullif(region, ''), 'Bogota')
from payload
where product_name is not null
  and price is not null
  and price >= 0;
"""
    response = requests.post(
        f"https://api.supabase.com/v1/projects/{SUPABASE_PROJECT_REF}/database/query",
        headers={
            "Authorization": f"Bearer {SUPABASE_ACCESS_TOKEN}",
            "Content-Type": "application/json",
        },
        json={"query": query, "read_only": False},
        timeout=60,
    )
    response.raise_for_status()
    print(f"Supabase Management API: {len(payload)} filas en external_data.market_prices")


def main():
    print(f"Lukas Exito scraper - {date.today()}")
    rows = []
    for query, categoria, es_hormiga in QUERIES:
        rows.extend(fetch_query(query, categoria, es_hormiga))
        time.sleep(0.8)
    save_csv(rows)
    save_supabase(rows)


if __name__ == "__main__":
    main()
