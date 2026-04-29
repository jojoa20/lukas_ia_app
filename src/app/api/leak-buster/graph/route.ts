import { NextResponse } from 'next/server';
import { createClient, getAuthenticatedUser } from '@/lib/supabase/actions';

export async function GET(req: Request) {
  try {
    const { supabase, user } = await getAuthenticatedUser();

    const { searchParams } = new URL(req.url);
    const period = searchParams.get('period') ?? 'month';
    const alertThreshold = parseInt(searchParams.get('alert_threshold') ?? '100000');

    // Calcular fecha de inicio según el período
    const now = new Date();
    const from = new Date(now);
    if (period === 'week') from.setDate(now.getDate() - 7);
    else if (period === 'quarter') from.setMonth(now.getMonth() - 3);
    else from.setDate(1); // primer día del mes actual

    const fromStr = from.toISOString().split('T')[0];

    const { data: transactions, error } = await supabase
      .from('transactions')
      .select('monto, categoria, subcategoria, es_gasto_hormiga, tipo')
      .eq('user_id', user.id)
      .eq('tipo', 'gasto')
      .gte('fecha_transaccion', fromStr);

    if (error) {
      return NextResponse.json(
        { error: { code: 'DB_ERROR', message: error.message } },
        { status: 500 }
      );
    }

    const txList = transactions ?? [];

    // Agrupar por categoría
    const catMap = new Map<string, { total: number; subs: Map<string, { total: number; count: number; hormiga: number }> }>();

    for (const tx of txList) {
      const cat = tx.categoria ?? 'otros';
      const sub = tx.subcategoria ?? cat;
      if (!catMap.has(cat)) catMap.set(cat, { total: 0, subs: new Map() });
      const catEntry = catMap.get(cat)!;
      catEntry.total += tx.monto;
      if (!catEntry.subs.has(sub)) catEntry.subs.set(sub, { total: 0, count: 0, hormiga: 0 });
      const subEntry = catEntry.subs.get(sub)!;
      subEntry.total += tx.monto;
      subEntry.count += 1;
      if (tx.es_gasto_hormiga) subEntry.hormiga += tx.monto;
    }

    const totalGastado = [...catMap.values()].reduce((s, c) => s + c.total, 0);

    // Construir nodos y links para D3
    const nodes: object[] = [
      { id: 'center', type: 'center', label: 'Gastos', amount: totalGastado, radius: 45 },
    ];
    const links: object[] = [];
    let fugasDetectadas = 0;
    let montoEnFugas = 0;

    for (const [catId, catData] of catMap) {
      const catRadius = Math.max(20, Math.min(40, Math.round((catData.total / (totalGastado || 1)) * 60)));
      nodes.push({ id: `cat-${catId}`, type: 'category', label: catId, amount: catData.total, radius: catRadius });
      links.push({ source: 'center', target: `cat-${catId}`, value: catData.total });

      for (const [subId, subData] of catData.subs) {
        // Alerta si supera el threshold o si hay mucho gasto hormiga (>50k)
        const isAlert = subData.total > alertThreshold || subData.hormiga > 50000;
        const subRadius = Math.max(12, Math.min(28, Math.round((subData.total / (catData.total || 1)) * 40)));
        nodes.push({
          id: `sub-${catId}-${subId}`,
          type: 'subcategory',
          parent: `cat-${catId}`,
          label: subId,
          amount: subData.total,
          transactions: subData.count,
          isAlert,
          radius: subRadius,
        });
        links.push({ source: `cat-${catId}`, target: `sub-${catId}-${subId}`, value: subData.total });
        if (isAlert) {
          fugasDetectadas++;
          montoEnFugas += subData.total;
        }
      }
    }

    return NextResponse.json({
      data: {
        nodes,
        links,
        summary: {
          total_gastado: totalGastado,
          fugas_detectadas: fugasDetectadas,
          monto_en_fugas: montoEnFugas,
          period,
        },
      },
    });
  } catch (err) {
    console.error('Leak Buster API Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
