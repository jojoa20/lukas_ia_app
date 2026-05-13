import { NextResponse } from 'next/server';
import { fetchExitoPrice } from '@/lib/prices';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q') || '';

  if (!query) {
    return NextResponse.json({ error: 'Parámetro q requerido' }, { status: 400 });
  }

  try {
    const result = await fetchExitoPrice(query);
    return NextResponse.json(result);
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
