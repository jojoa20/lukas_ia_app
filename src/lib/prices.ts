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
  // Food items are almost always the cheaper results in mixed searches.
  const min = Math.min(...filtered);
  const max = Math.max(...filtered);
  if (max / min > 8 && filtered.length > 2) {
    const median = sorted[Math.floor(sorted.length / 2)];
    const cheaper = filtered.filter((p) => p <= median);
    if (cheaper.length > 0) return cheaper;
  }

  return filtered;
}

// ── Normalización de queries ──────────────────────────────────────────────────

// Typos colombianos comunes en productos de mercado
const PRODUCT_TYPOS: Record<string, string> = {
  'huebos': 'huevos', 'webo': 'huevo', 'webos': 'huevos', 'uevos': 'huevos',
  'polllo': 'pollo', 'poyllo': 'pollo', 'poyo': 'pollo',
  'lechita': 'leche', 'lche': 'leche',
  'arrox': 'arroz', 'aros': 'arroz',
  'carne res': 'carne de res',
  'platano': 'plátano',
}

// Aliases de catálogo VTEX: cuando el término genérico devuelve accesorios en Éxito,
// usar un término más específico que sí devuelve el alimento real.
const VTEX_FOOD_ALIASES: Record<string, string> = {
  'huevos': 'cubeta huevos',
  'huevo': 'cubeta huevos',
  'panal de huevos': 'cubeta huevos',
  'panal huevos': 'cubeta huevos',
  'arroz': 'arroz diana kilo',
  'leche': 'leche bolsa',
  'pan': 'pan tajado',
  'aceite': 'aceite vegetal',
  'azucar': 'azúcar riopaila',
  'azúcar': 'azúcar riopaila',
  'sal': 'sal refisal',
  'harina': 'harina de trigo',
}

// Palabras que indican accesorio/electrodoméstico, no alimento
const NON_FOOD_KEYWORDS = [
  'hervidor', 'organizador', 'electrico', 'eléctrico', 'soporte', 'juguete',
  'decoracion', 'molde', 'freidora', 'sarten', 'recipiente', 'contenedor',
  'canasta multiusos', 'tijeras', 'maquina', 'peluche', 'disfraz', 'porta',
  'accesorio', 'dispensador', 'olla',
  // Utensilios de cocina / electrodomésticos adicionales (sin tildes — el nombre se normaliza)
  'cocedor', 'cocinador', 'batidor', 'pinata',
  'nostalgia', 'rotador', 'revolvedor', 'mezclador', 'licuadora', 'tostadora',
  'cafetera', 'sanduchera', 'waflera', 'air fryer',
  'caja cubeta', 'porta huevos',  // contenedores/accesorios para huevos
  'decorativ', 'decoracion',       // artículos decorativos
]

function normalizeQuery(q: string): string {
  const lower = q.toLowerCase().trim()
  return PRODUCT_TYPOS[lower] || q
}

function isFoodProduct(name: string): boolean {
  const n = name.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  return !NON_FOOD_KEYWORDS.some(kw => n.includes(kw))
}

async function fetchVTEX(url: string, timeoutMs: number): Promise<VTEXProduct[]> {
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0 Safari/537.36',
    Accept: 'application/json',
    'Accept-Language': 'es-CO,es;q=0.9',
    Referer: 'https://www.exito.com/',
    Origin: 'https://www.exito.com',
  }
  const response = await fetch(url, { headers, signal: AbortSignal.timeout(timeoutMs) })
  if (!response.ok) throw new Error(`VTEX HTTP ${response.status}`)
  const data = await response.json()
  return Array.isArray(data) ? data : []
}

// ── Main export ───────────────────────────────────────────────────────────────

export async function fetchExitoPrice(query: string, timeoutMs = 8000): Promise<PriceResult> {
  // 1. Corregir typos comunes antes de buscar
  const cleanQuery = normalizeQuery(query)

  // Helper: filtro de relevancia + comida para un set de productos
  function filterCandidates(prods: VTEXProduct[], words: string[]) {
    const relevant = prods.filter((p) => {
      const name = (p.productName || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
      const matchesQuery = words.length === 0 || words.some((w) => name.includes(w))
      return matchesQuery && isFoodProduct(name)
    })
    // Si el filtro food eliminó todo, devolver solo con coincidencia de palabras
    if (relevant.length > 0) return relevant
    return prods.filter(p => {
      const name = (p.productName || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
      return words.length === 0 || words.some((w) => name.includes(w))
    })
  }

  // 2. Intentar búsqueda por path (más precisa), con fallback a full-text search
  let products: VTEXProduct[] = []
  try {
    const url1 = `https://www.exito.com/io/api/catalog_system/pub/products/search/${encodeURIComponent(cleanQuery)}?_from=0&_to=14`
    products = await fetchVTEX(url1, timeoutMs)
  } catch { /* continua con fallback */ }

  // Fallback: full-text search si el path no dio resultados útiles
  if (products.length === 0) {
    try {
      const url2 = `https://www.exito.com/io/api/catalog_system/pub/products/search?ft=${encodeURIComponent(cleanQuery)}&_from=0&_to=14`
      products = await fetchVTEX(url2, timeoutMs)
    } catch { /* sin resultados */ }
  }

  if (products.length === 0) {
    return { success: false, query, source: 'Éxito Colombia', count: 0, avg_price: null, min_price: null, max_price: null, products: [], message: 'Sin resultados' }
  }

  // 3. Filtro de relevancia: nombre contiene alguna palabra del query + es alimento
  const queryWords = cleanQuery
    .toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .split(/\s+/).filter((w) => w.length > 2)

  let candidates = filterCandidates(products, queryWords)

  // 4. Si no hay candidatos de alimento (p.ej. "huevos" devuelve solo hervidores),
  //    intentar con el alias de catálogo VTEX (p.ej. "cubeta huevos")
  if (candidates.filter(p => isFoodProduct((p.productName || '').toLowerCase())).length === 0) {
    const aliasQuery = VTEX_FOOD_ALIASES[cleanQuery.toLowerCase().trim()]
    if (aliasQuery) {
      let aliasProducts: VTEXProduct[] = []
      try {
        const urlAlias = `https://www.exito.com/io/api/catalog_system/pub/products/search?ft=${encodeURIComponent(aliasQuery)}&_from=0&_to=14`
        aliasProducts = await fetchVTEX(urlAlias, timeoutMs)
      } catch { /* sin resultados */ }
      if (aliasProducts.length > 0) {
        const aliasWords = aliasQuery.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').split(/\s+/).filter(w => w.length > 2)
        const aliasCandidates = filterCandidates(aliasProducts, aliasWords)
        if (aliasCandidates.length > 0) candidates = aliasCandidates
      }
    }
  }

  const priceData: { name: string; brand: string; price: number }[] = []
  for (const product of candidates) {
    const price = extractBestPrice(product)
    // Cap en 200k para alimentos — filtra electrodomésticos y artículos caros
    if (price && price > 500 && price < 200_000) {
      priceData.push({ name: product.productName, brand: product.brand || '', price })
    }
  }

  if (priceData.length === 0) {
    return { success: false, query, source: 'Éxito Colombia', count: 0, avg_price: null, min_price: null, max_price: null, products: [], message: 'Sin precios válidos' }
  }

  const cleaned = removeOutliers(priceData.map((p) => p.price))
  const finalData = priceData.filter((p) => cleaned.includes(p.price))

  const avg = Math.round(cleaned.reduce((a, b) => a + b, 0) / cleaned.length)
  const min = Math.min(...cleaned)
  const max = Math.max(...cleaned)

  return {
    success: true,
    query: cleanQuery,
    source: 'Éxito Colombia (VTEX API)',
    count: finalData.length,
    avg_price: avg,
    min_price: min,
    max_price: max,
    products: finalData.slice(0, 5),
  }
}

export async function fetchExitoBasket(items: string[], timeoutMs = 6000): Promise<BasketPriceResult> {
  const uniqueItems = Array.from(new Set(items.map((item) => item.trim()).filter(Boolean))).slice(0, 6)
  const results = await Promise.all(uniqueItems.map(async (item) => {
    try {
      const result = await fetchExitoPrice(item, timeoutMs)
      return { query: item, avg_price: result.avg_price, min_price: result.min_price, max_price: result.max_price, count: result.count }
    } catch {
      return { query: item, avg_price: null, min_price: null, max_price: null, count: 0 }
    }
  }))

  const priced = results.filter((item) => item.avg_price && item.avg_price > 0)
  const estimatedTotal = priced.length
    ? Math.round(priced.reduce((sum, item) => sum + Number(item.avg_price), 0))
    : null

  return {
    success: priced.length > 0,
    source: 'Éxito Colombia (VTEX API)',
    items: results,
    estimated_total: estimatedTotal,
    message: priced.length
      ? 'Estimacion por producto individual; pide cantidades para comparar una canasta real.'
      : 'No se encontraron precios suficientes para la canasta.',
  }
}
