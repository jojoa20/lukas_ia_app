export type SpendingAnalysis =
  | {
      kind: 'none'
      productQuery: null
      basketItems: string[]
      reason: string
    }
  | {
      kind: 'generic'
      productQuery: string
      basketItems: string[]
      reason: string
    }
  | {
      kind: 'basket'
      productQuery: string
      basketItems: string[]
      reason: string
    }
  | {
      kind: 'single_product'
      productQuery: string
      basketItems: string[]
      reason: string
    }

const GENERIC_MARKET_TERMS = [
  'mercado',
  'supermercado',
  'super',
  'comida',
  'cosas',
  'cosas de la casa',
  'compras',
  'vivieres',
  'viveres',
  'mandado',
  'mandados',
  'despensa',
  'canasta',
]

const PRODUCT_STOPWORDS = [
  'un',
  'una',
  'unos',
  'unas',
  'el',
  'la',
  'los',
  'las',
  'mi',
  'mis',
  'de',
  'del',
  'para',
  'por',
  'en',
  'con',
]

export function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s,;.+-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function cleanProduct(value: string) {
  const normalized = normalizeText(value)
  return normalized
    .split(/\s+/)
    .filter((word) => !PRODUCT_STOPWORDS.includes(word))
    .join(' ')
    .trim()
}

export function analyzeSpendingText(text: string): SpendingAnalysis {
  const normalized = normalizeText(text)
  const productMatch = normalized.match(/(?:en|de|por|para)\s+(.+?)(?:\s+por\s+\d|\s+en\s+\d|\s+de\s+\d|\s*$)/)
  let rawProduct = productMatch?.[1] || ''
  if (!rawProduct || /^\d/.test(rawProduct)) {
    rawProduct = normalized
      .replace(/\b(gaste|gasto|gasté|pague|pago|pagué|compre|compro|compré|me costo|costo)\b/g, ' ')
      .replace(/\$?\d+(?:[.,]\d+)?\s*(millones?|palos?|miles?|mil|k|cop|pesos)?/g, ' ')
      .replace(/\b(en|de|por|para)\b/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  }
  const productQuery = cleanProduct(rawProduct)

  if (!productQuery || productQuery.length < 3) {
    return {
      kind: 'none',
      productQuery: null,
      basketItems: [],
      reason: 'No hay producto claro para comparar.',
    }
  }

  const isGeneric = GENERIC_MARKET_TERMS.some((term) => productQuery === term || productQuery.includes(term))
  const possibleItems = productQuery
    .split(/\s*(?:,|;|\+|\by\b|\be\b)\s*/i)
    .map(cleanProduct)
    .filter((item) => item.length > 2 && !GENERIC_MARKET_TERMS.includes(item))

  if (isGeneric && possibleItems.length < 2) {
    return {
      kind: 'generic',
      productQuery,
      basketItems: [],
      reason: 'La descripcion es una categoria amplia, no un producto comparable.',
    }
  }

  if (possibleItems.length >= 2) {
    return {
      kind: 'basket',
      productQuery,
      basketItems: possibleItems.slice(0, 6),
      reason: 'El usuario menciono varios productos; se trata como canasta.',
    }
  }

  return {
    kind: 'single_product',
    productQuery,
    basketItems: [productQuery],
    reason: 'Producto individual comparable.',
  }
}

export function wantsWebResearch(text: string) {
  const normalized = normalizeText(text)
  return /(busca|investiga|internet|noticia|noticias|actualidad|hoy|reciente|por que subio|por que bajo|inflacion|reforma|precio del mercado)/.test(normalized)
}

export function wantsMarketLookup(text: string) {
  const normalized = normalizeText(text)
  return /(dolar|usd|trm|bitcoin|btc|ethereum|eth|accion|acciones|bolsa|nasdaq|s&p|sp500|tesla|apple|nvidia|etf|mercado financiero|cripto)/.test(normalized)
}

export function extractMarketSymbol(text: string) {
  const normalized = normalizeText(text)
  if (/\b(bitcoin|btc)\b/.test(normalized)) return 'BTC-USD'
  if (/\b(ethereum|eth)\b/.test(normalized)) return 'ETH-USD'
  if (/\b(dolar|usd|trm)\b/.test(normalized)) return 'USDCOP=X'
  if (/\b(nvidia|nvda)\b/.test(normalized)) return 'NVDA'
  if (/\b(tesla|tsla)\b/.test(normalized)) return 'TSLA'
  if (/\b(apple|aapl)\b/.test(normalized)) return 'AAPL'
  if (/\b(sp500|s&p)\b/.test(normalized)) return '^GSPC'
  if (/\b(nasdaq)\b/.test(normalized)) return '^IXIC'
  const explicit = text.match(/\b[A-Z]{1,5}(?:-[A-Z]{2})?\b/)?.[0]
  if (explicit && !['COP', 'USD'].includes(explicit)) return explicit
  return null
}
