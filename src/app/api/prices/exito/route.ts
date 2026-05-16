import { NextResponse } from 'next/server';
import { fetchExitoBasket, fetchExitoPrice } from '@/lib/prices';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q') || '';
  const basket = searchParams.get('basket') || '';

  if (!query && !basket) {
    return NextResponse.json({ error: 'Parametro q o basket requerido' }, { status: 400 });
  }

  try {
    if (basket) {
      const items = basket.split(',').map((item) => item.trim()).filter(Boolean);
      const result = await fetchExitoBasket(items);
      return NextResponse.json(result);
    }

    const result = await fetchExitoPrice(query);
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      query,
      message: `Error al consultar Exito: ${error.message}`,
      prices: [],
      avg_price: null,
      min_price: null,
      max_price: null,
    });
  }
}
