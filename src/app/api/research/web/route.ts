import { NextResponse } from 'next/server'
import { braveWebSearch } from '@/lib/web-research'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const query = searchParams.get('q') || ''

  if (!query.trim()) {
    return NextResponse.json({ error: 'Parametro q requerido' }, { status: 400 })
  }

  const result = await braveWebSearch(query)
  return NextResponse.json(result)
}
