import { streamText, tool } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { z } from 'zod';
import { getFinscore, createMeta, addTransaction, getSystemContext } from '@/lib/supabase/actions';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY || ''
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Fetch systemic context to make the AI "aware"
    const context = await getSystemContext();

    const SYSTEM_INSTRUCTION = `Eres Lukas, un compañero financiero inteligente y sofisticado. 
Tu tono es calmado, observador y profesional, con una pincelada de cercanía cultural colombiana refinada.
Ayudas a los usuarios a entender sus hábitos financieros sin juzgar.

CONTEXTO ACTUAL DEL USUARIO (MEMORIA DEL SISTEMA):
- FinScore: ${context.score}
- Fugas Recientes (Gastos Hormiga): ${context.leaks.count} detectadas esta semana (Total: $${context.leaks.amount}).
- Meta Activa: ${context.meta ? `${context.meta.nombre} (${context.meta.progreso.toFixed(0)}%)` : 'Ninguna'}.
- Nombre: ${context.user_name}.

Usa este contexto para dar respuestas personalizadas. Si el usuario te cuenta un gasto, relaciónalo con su salud financiera o sus fugas si es relevante. 
Tus respuestas son breves (máximo 2 oraciones) e inteligentes. 
Siempre que detectes un gasto o ingreso, usa la herramienta 'addTransaction' para registrarlo.`;

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
            nombre: z.string().describe('El nombre de la meta'),
            monto: z.number().describe('El monto objetivo')
          }),
          execute: async ({ nombre, monto }) => await createMeta({ nombre, monto }),
        }),
        addTransaction: tool({
          description: 'Registra una transacción financiera y actualiza el FinScore.',
          inputSchema: z.object({
            monto: z.number().describe('Monto en pesos colombianos'),
            descripcion: z.string().describe('Descripción breve'),
            tipo: z.enum(['gasto', 'ingreso']).describe('Si es una salida o entrada de dinero'),
            categoria: z.string().optional().describe('Categoría del gasto'),
            es_gasto_hormiga: z.boolean().optional().describe('True si es un gasto pequeño e impulsivo')
          }),
          execute: async (args) => await addTransaction(args)
        })
      }
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Lukas AI Cohesion Error:', error);
    return new Response(JSON.stringify({ error: 'Error generating response' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
