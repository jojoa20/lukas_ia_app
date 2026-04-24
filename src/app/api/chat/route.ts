import { streamText, tool } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { z } from 'zod';
import { getFinscore, createMeta, addGastoHormiga } from '@/lib/supabase/actions';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY || ''
});

const SYSTEM_INSTRUCTION = "Eres Lukas, un robo-advisor financiero para la Gen Z en Colombia. Eres directo, usas jerga paisa (parce, nea, lucas). Tus respuestas son concisas (maximo 2 oraciones). Si el usuario reporta un gasto, analizalo financieramente.";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: google('gemini-1.5-flash'),
      system: SYSTEM_INSTRUCTION,
      messages,
      tools: {
        getFinscore: tool({
          description: 'Obtiene el FinScore actual y en tiempo real del usuario autenticado en la base de datos.',
          inputSchema: z.object({}),
          execute: async () => await getFinscore(),
        }),
        createMeta: tool({
          description: 'Crea una nueva meta de ahorro financiero para el usuario en la base de datos.',
          inputSchema: z.object({
            nombre: z.string().describe('El nombre de la meta de ahorro (ej: Viaje a la playa)'),
            monto: z.number().describe('El monto en pesos colombianos objetivo para la meta')
          }),
          execute: async ({ nombre, monto }) => await createMeta({ nombre, monto }),
        }),
        addGastoHormiga: tool({
          description: 'Registra un gasto hormiga (gasto pequeño innecesario) en la base de datos que afecta negativamente el FinScore del usuario.',
          inputSchema: z.object({
            monto: z.number().describe('Monto monetario del gasto en pesos colombianos'),
            descripcion: z.string().describe('Qué fue lo que compró el usuario (ej: Café, snacks, uber, dulces)')
          }),
          execute: async ({ monto, descripcion }) => await addGastoHormiga({ monto, descripcion })
        })
      }
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Gemini error:', error);
    return new Response(JSON.stringify({ error: 'Error generating response' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
