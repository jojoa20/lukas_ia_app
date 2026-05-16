export type MarketQuote = {
  success: boolean
  symbol: string
  source: 'Yahoo Finance'
  price: number | null
  currency: string | null
  change: number | null
  changePercent: number | null
  previousClose: number | null
  timestamp: string | null
  message?: string
}

export async function fetchYahooQuote(symbol: string): Promise<MarketQuote> {
  const cleanSymbol = symbol.trim().toUpperCase()
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(cleanSymbol)}?range=1d&interval=1m`

  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'Mozilla/5.0 LukasAI/1.0',
      },
      signal: AbortSignal.timeout(8000),
    })

    if (!response.ok) throw new Error(`Yahoo HTTP ${response.status}`)

    const json = await response.json()
    const result = json.chart?.result?.[0]
    const meta = result?.meta
    if (!meta) throw new Error('Yahoo no retorno metadata')

    const price = Number(meta.regularMarketPrice ?? meta.previousClose ?? null)
    const previousClose = Number(meta.previousClose ?? null)
    const change = Number.isFinite(price) && Number.isFinite(previousClose) ? price - previousClose : null
    const changePercent = change !== null && previousClose ? (change / previousClose) * 100 : null
    const timestamp = meta.regularMarketTime
      ? new Date(Number(meta.regularMarketTime) * 1000).toISOString()
      : new Date().toISOString()

    return {
      success: Number.isFinite(price),
      symbol: cleanSymbol,
      source: 'Yahoo Finance',
      price: Number.isFinite(price) ? price : null,
      currency: meta.currency || null,
      change,
      changePercent,
      previousClose: Number.isFinite(previousClose) ? previousClose : null,
      timestamp,
      message: Number.isFinite(price) ? undefined : 'Sin precio disponible.',
    }
  } catch (error: any) {
    return {
      success: false,
      symbol: cleanSymbol,
      source: 'Yahoo Finance',
      price: null,
      currency: null,
      change: null,
      changePercent: null,
      previousClose: null,
      timestamp: null,
      message: error.message || 'No se pudo consultar Yahoo Finance.',
    }
  }
}
