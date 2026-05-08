import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

/**
 * GET /api/prices/exito?q=panel+de+huevos
 * Busca un producto en el sitio de Éxito y devuelve el precio promedio.
 * Usado por el agente de Lukas para comparar precios al registrar gastos.
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q') || '';

  if (!query) {
    return NextResponse.json({ error: 'Parámetro q requerido' }, { status: 400 });
  }

  try {
    // Éxito usa su API de búsqueda accesible vía URL pública
    const searchUrl = `https://www.exito.com/${encodeURIComponent(query.replace(/\s+/g, '-'))}?order=relevance`;

    const response = await fetch(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'es-CO,es;q=0.9',
        'Referer': 'https://www.exito.com/',
      },
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // Extraer precios del HTML de Éxito (VTEX store)
    const prices: number[] = [];
    const productNames: string[] = [];

    // Selector principal de precio en Éxito/VTEX
    $('[class*="ProductCard_container"]').each((_, el) => {
      const priceText = $(el).find('[class*="priceSection"] [class*="Price_container"]').first().text().trim();
      const nameText = $(el).find('[class*="ProductCard_title"]').first().text().trim();

      const cleanPrice = priceText.replace(/[^\d]/g, '');
      const price = parseInt(cleanPrice);
      if (!isNaN(price) && price > 100 && price < 100_000_000) {
        prices.push(price);
        if (nameText) productNames.push(nameText);
      }
    });

    // Fallback: buscar en __NEXT_DATA__ JSON embebido
    if (prices.length === 0) {
      const scriptContent = $('script#__NEXT_DATA__').html() || '';
      if (scriptContent) {
        try {
          const data = JSON.parse(scriptContent);
          // Buscar props.pageProps o similar que contenga precios
          const jsonStr = JSON.stringify(data);
          const priceMatches = jsonStr.match(/"sellingPrice"\s*:\s*(\d+)/g) || [];
          priceMatches.slice(0, 10).forEach(m => {
            const val = parseInt(m.replace(/\D/g, ''));
            if (val > 1000 && val < 50_000_000) prices.push(val / 100); // VTEX stores in cents
          });
        } catch {
          // ignore
        }
      }
    }

    // Fallback: extraer cualquier número entre 1000 y 200000 que parezca precio COP
    if (prices.length === 0) {
      const priceRegex = /\$\s?([\d.]+)/g;
      let m;
      const fullText = $.text();
      while ((m = priceRegex.exec(fullText)) !== null) {
        const val = parseInt(m[1].replace(/\./g, ''));
        if (val >= 1000 && val <= 500000) prices.push(val);
        if (prices.length >= 10) break;
      }
    }

    if (prices.length === 0) {
      return NextResponse.json({
        success: false,
        query,
        message: 'No se encontraron precios en Éxito para este producto.',
        prices: [],
        avg_price: null,
        min_price: null,
        max_price: null,
      });
    }

    const avg = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length);
    const min = Math.min(...prices);
    const max = Math.max(...prices);

    return NextResponse.json({
      success: true,
      query,
      source: 'Éxito Colombia',
      prices: prices.slice(0, 5),
      avg_price: avg,
      min_price: min,
      max_price: max,
      products: productNames.slice(0, 3),
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
