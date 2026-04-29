import { streamText, tool } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { z } from 'zod';
import { getFinscore, createMeta, addTransaction } from '@/lib/supabase/actions';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY || ''
});

const SYSTEM_INSTRUCTION = `Eres Lukas, un compañero financiero inteligente y sofisticado. 
Tu tono es calmado, observador y profesional, con una pincelada de cercanía cultural colombiana refinada (usa jerga como "parce", "lucas" o "vueltas" con elegancia y moderación). 
Ayudas a los usuarios a entender sus hábitos financieros sin juzgar. 
Tus respuestas son breves (máximo 2 oraciones) e inteligentes. 
Siempre que detectes un gasto o ingreso, usa la herramienta 'addTransaction' para registrarlo. 
Clasifica los gastos en categorías lógicas (Comida, Transporte, Entretenimiento, Servicios, etc.) y detecta si es un 'gasto hormiga' (pequeños consumos impulsivos recurrentes como café, dulces, snacks).`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: google('gemini-1.5-flash'),
      system: SYSTEM_INSTRUCTION,
      messages,
      tools: {
        getFinscore: tool({
          description: 'Obtiene el FinScore actual y en tiempo real del usuario.',
          inputSchema: z.object({}),
          execute: async () => await getFinscore(),
        }),
        createMeta: tool({
          description: 'Crea una nueva meta de ahorro financiero.',
          inputSchema: z.object({
            nombre: z.string().describe('El nombre de la meta (ej: Viaje, Fondo de Emergencia)'),
            monto: z.number().describe('El monto objetivo en pesos colombianos')
          }),
          execute: async ({ nombre, monto }) => await createMeta({ nombre, monto }),
        }),
        addTransaction: tool({
          description: 'Registra una transacción financiera (gasto o ingreso) y actualiza el FinScore.',
          inputSchema: z.object({
            monto: z.number().describe('Monto en pesos colombianos'),
            descripcion: z.string().describe('Descripción breve de la transacción'),
            tipo: z.enum(['gasto', 'ingreso']).describe('Si es una salida o entrada de dinero'),
            categoria: z.string().optional().describe('Categoría del gasto (ej: Alimentación, Transporte)'),
            es_gasto_hormiga: z.boolean().optional().describe('True si es un gasto pequeño e impulsivo')
          }),
          execute: async (args) => await addTransaction(args)
        })
      }
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Lukas AI Error:', error);
    return new Response(JSON.stringify({ error: 'Error generating response' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
