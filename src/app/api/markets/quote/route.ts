import { NextResponse } from 'next/server'
import { fetchYahooQuote } from '@/lib/market-data'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const symbol = searchParams.get('symbol') || ''

  if (!symbol.trim()) {
    return NextResponse.json({ error: 'Parametro symbol requerido' }, { status: 400 })
  }

  const result = await fetchYahooQuote(symbol)
  return NextResponse.json(result)
}
