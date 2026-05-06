import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as cheerio from 'cheerio';

// Inicializar el cliente de Supabase usando el Service Role para saltar RLS
// ya que este endpoint está pensado para ser ejecutado por un Vercel Cron
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function GET(req: Request) {
  try {
    // 1. Extraer las tendencias reales desde trends24.in (Colombia)
    const response = await fetch('https://trends24.in/colombia/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Accept': 'text/html,application/xhtml+xml',
      },
      next: { revalidate: 0 }
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    const scrapedTrends: { item_name: string, platform: string, hype_score: number }[] = [];

    // Parsear la meta description que contiene las principales tendencias pre-renderizadas
    const desc = $('meta[name="description"]').attr('content') || '';
    const match = desc.match(/Colombia:\s*(.*?)\.\s*Explore/);

    if (match) {
      const trends = match[1].split(',').map(t => t.trim());
      trends.forEach((name, i) => {
        scrapedTrends.push({
          item_name: name,
          platform: 'X (Twitter)',
          hype_score: 100 - (i * 5), // Asignamos puntaje basado en orden (100, 95, 90...)
        });
      });
    }

    if (scrapedTrends.length === 0) {
      throw new Error('No se encontraron tendencias en el sitio.');
    }

    // 2. Limpiar tendencias muy antiguas (últimas 24h) (Omitir si la tabla no existe)
    let tableExists = true;
    const oneDayAgo = new Date();
    oneDayAgo.setDate(oneDayAgo.getDate() - 1);
    
    const deleteAttempt = await supabase.from('consumer_trends').delete().lt('created_at', oneDayAgo.toISOString());
    if (deleteAttempt.error && deleteAttempt.error.message.includes('schema cache')) {
      tableExists = false;
    }

    let insertedData = null;

    if (tableExists) {
      // 3. Insertar nuevas tendencias reales
      const { data, error } = await supabase
        .from('consumer_trends')
        .insert(scrapedTrends)
        .select();

      if (error) {
        console.error("Error al insertar:", error);
      } else {
        insertedData = data;
      }
    }

    return NextResponse.json({
      success: true,
      message: tableExists 
        ? 'Tendencias reales extraídas y guardadas en base de datos correctamente' 
        : 'Tendencias extraídas correctamente (ADVERTENCIA: No se guardaron porque la tabla "consumer_trends" no existe. Ejecuta el archivo SQL en Supabase).',
      trends_added: insertedData ? insertedData.length : 0,
      data: insertedData || scrapedTrends,
    });
  } catch (error: any) {
    console.error('Error fetching trends:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
