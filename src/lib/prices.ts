interface VTEXItem {
  name: string;
  sellers?: {
    commertialOffer?: {
      Price: number;
      ListPrice: number;
      AvailableQuantity: number;
    };
  }[];
}

interface VTEXProduct {
  productName: string;
  brand: string;
  items?: VTEXItem[];
}

export interface PriceResult {
  success: boolean;
  query: string;
  source: string;
  count: number;
  avg_price: number | null;
  min_price: number | null;
  max_price: number | null;
  products: { name: string; brand: string; price: number }[];
  message?: string;
}

export interface BasketPriceResult {
  success: boolean;
  source: string;
  items: {
    query: string;
    avg_price: number | null;
    min_price: number | null;
    max_price: number | null;
    count: number;
  }[];
  estimated_total: number | null;
  message?: string;
}

function extractBestPrice(product: VTEXProduct): number | null {
  const items = product.items || [];
  for (const item of items) {
    for (const seller of item.sellers || []) {
      const offer = seller.commertialOffer;
      if (offer && offer.Price > 0 && offer.AvailableQuantity > 0) return offer.Price;
    }
  }
  for (const item of items) {
    for (const seller of item.sellers || []) {
      const price = seller.commertialOffer?.Price;
      if (price && price > 0) return price;
    }
  }
  return null;
}

function removeOutliers(prices: number[]): number[] {
  if (prices.length <= 2) return prices;
  const sorted = [...prices].sort((a, b) => a - b);
  const q1 = sorted[Math.floor(sorted.length * 0.25)];
  const q3 = sorted[Math.floor(sorted.length * 0.75)];
  const iqr = q3 - q1;
  const lo = q1 - 1.5 * iqr;
  const hi = q3 + 1.5 * iqr;
  let filtered = prices.filter((p) => p >= lo && p <= hi);
  if (filtered.length === 0) filtered = prices;

  // If price range is too wide (max/min > 8x), keep only the cheaper half.
  // This handles searches where food items and non-food accessories mix —
  // the food item is almost always the cheaper result.
  const min = Math.min(...filtered);
  const max = Math.max(...filtered);
  if (max / min > 8 && filtered.length > 2) {
    const median = sorted[Math.floor(sorted.length / 2)];
    const cheaper = filtered.filter((p) => p <= median);
    if (cheaper.length > 0) return cheaper;
  }

  return filtered;
}

export async function fetchExitoPrice(query: string, timeoutMs = 8000): Promise<PriceResult> {
  const vtexUrl = `https://www.exito.com/io/api/catalog_system/pub/products/search/${encodeURIComponent(query)}?_from=0&_to=14`;

  const response = await fetch(vtexUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0 Safari/537.36',
      Accept: 'application/json',
      'Accept-Language': 'es-CO,es;q=0.9',
      Referer: 'https://www.exito.com/',
      Origin: 'https://www.exito.com',
    },
    signal: AbortSignal.timeout(timeoutMs),
  });

  if (!response.ok) throw new Error(`VTEX HTTP ${response.status}`);

  const products: VTEXProduct[] = await response.json();

  if (!Array.isArray(products) || products.length === 0) {
    return { success: false, query, source: 'Éxito Colombia', count: 0, avg_price: null, min_price: null, max_price: null, products: [], message: 'Sin resultados' };
  }

  // Relevance filter: keep products whose name contains at least one word from the query
  const queryWords = query
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .split(/\s+/)
    .filter((w) => w.length > 2);

  const relevant = products.filter((p) => {
    const name = (p.productName || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    return queryWords.length === 0 || queryWords.some((w) => name.includes(w));
  });

  // Use relevant products if found; fall back to all products
  const candidates = relevant.length > 0 ? relevant : products;

  const priceData: { name: string; brand: string; price: number }[] = [];
  for (const product of candidates) {
    const price = extractBestPrice(product);
    // Cap at 300k COP — covers bulk grocery packs; filters electronics/appliances
    if (price && price > 500 && price < 300_000) {
      priceData.push({ name: product.productName, brand: product.brand || '', price });
    }
  }

  if (priceData.length === 0) {
    return { success: false, query, source: 'Éxito Colombia', count: 0, avg_price: null, min_price: null, max_price: null, products: [], message: 'Sin precios válidos' };
  }

  const cleaned = removeOutliers(priceData.map((p) => p.price));
  const finalData = priceData.filter((p) => cleaned.includes(p.price));

  const avg = Math.round(cleaned.reduce((a, b) => a + b, 0) / cleaned.length);
  const min = Math.min(...cleaned);
  const max = Math.max(...cleaned);

  return {
    success: true,
    query,
    source: 'Éxito Colombia (VTEX API)',
    count: finalData.length,
    avg_price: avg,
    min_price: min,
    max_price: max,
    products: finalData.slice(0, 5),
  };
}

export async function fetchExitoBasket(items: string[], timeoutMs = 6000): Promise<BasketPriceResult> {
  const uniqueItems = Array.from(new Set(items.map((item) => item.trim()).filter(Boolean))).slice(0, 6);
  const results = await Promise.all(uniqueItems.map(async (item) => {
    try {
      const result = await fetchExitoPrice(item, timeoutMs);
      return {
        query: item,
        avg_price: result.avg_price,
        min_price: result.min_price,
        max_price: result.max_price,
        count: result.count,
      };
    } catch {
      return {
        query: item,
        avg_price: null,
        min_price: null,
        max_price: null,
        count: 0,
      };
    }
  }));

  const priced = results.filter((item) => item.avg_price && item.avg_price > 0);
  const estimatedTotal = priced.length
    ? Math.round(priced.reduce((sum, item) => sum + Number(item.avg_price), 0))
    : null;

  return {
    success: priced.length > 0,
    source: 'Éxito Colombia (VTEX API)',
    items: results,
    estimated_total: estimatedTotal,
    message: priced.length
      ? 'Estimacion por producto individual; pide cantidades para comparar una canasta real.'
      : 'No se encontraron precios suficientes para la canasta.',
  };
}
