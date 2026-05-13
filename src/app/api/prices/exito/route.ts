import { NextResponse } from 'next/server';

/**
 * GET /api/prices/exito?q=huevos
 * Busca un producto en Éxito usando la API VTEX directa (no scraping HTML).
 * Retorna precio promedio, mínimo, máximo y lista de productos encontrados.
 * Usado por el agente de Lukas para comparar precios al registrar gastos.
 */

interface VTEXProduct {
  productName: string;
  brand: string;
  items?: {
    name: string;
    sellers?: {
      commertialOffer?: {
        Price: number;
        ListPrice: number;
        AvailableQuantity: number;
      };
    }[];
  }[];
}

function extractBestPrice(product: VTEXProduct): number | null {
  const items = product.items || [];
  for (const item of items) {
    const sellers = item.sellers || [];
    for (const seller of sellers) {
      const offer = seller.commertialOffer;
      if (offer && offer.Price > 0 && offer.AvailableQuantity > 0) {
        return offer.Price;
      }
    }
  }
  // Fallback: get any price even if stock is 0
  for (const item of items) {
    const sellers = item.sellers || [];
    for (const seller of sellers) {
      if (seller.commertialOffer?.Price && seller.commertialOffer.Price > 0) {
        return seller.commertialOffer.Price;
      }
    }
  }
  return null;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q') || '';

  if (!query) {
    return NextResponse.json({ error: 'Parámetro q requerido' }, { status: 400 });
  }

  try {
    // ═══ ESTRATEGIA 1: API VTEX directa (confiable, retorna JSON) ═══
    const vtexUrl = `https://www.exito.com/io/api/catalog_system/pub/products/search/${encodeURIComponent(query)}?_from=0&_to=9`;

    const response = await fetch(vtexUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0 Safari/537.36',
        'Accept': 'application/json',
        'Accept-Language': 'es-CO,es;q=0.9',
      },
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      throw new Error(`VTEX API HTTP ${response.status}`);
    }

    const products: VTEXProduct[] = await response.json();

    if (!Array.isArray(products) || products.length === 0) {
      return NextResponse.json({
        success: false,
        query,
        message: 'No se encontraron productos en Éxito para esta búsqueda.',
        prices: [],
        avg_price: null,
        min_price: null,
        max_price: null,
      });
    }

    // Extraer precios válidos
    const priceData: { name: string; brand: string; price: number }[] = [];

    for (const product of products) {
      const price = extractBestPrice(product);
      if (price && price > 100 && price < 50_000_000) {
        priceData.push({
          name: product.productName,
          brand: product.brand || '',
          price,
        });
      }
    }

    if (priceData.length === 0) {
      return NextResponse.json({
        success: false,
        query,
        message: 'Se encontraron productos pero sin precios válidos.',
        prices: [],
        avg_price: null,
        min_price: null,
        max_price: null,
      });
    }

    const prices = priceData.map(p => p.price);
    const avg = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length);
    const min = Math.min(...prices);
    const max = Math.max(...prices);

    return NextResponse.json({
      success: true,
      query,
      source: 'Éxito Colombia (VTEX API)',
      count: priceData.length,
      prices: prices.slice(0, 5),
      avg_price: avg,
      min_price: min,
      max_price: max,
      products: priceData.slice(0, 5).map(p => ({
        name: p.name,
        brand: p.brand,
        price: p.price,
      })),
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      query,
      message: `Error al consultar Éxito: ${error.message}`,
      prices: [],
      avg_price: null,
      min_price: null,
      max_price: null,
    });
  }
}
