import { streamText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

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
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Gemini error:', error);
    return new Response(JSON.stringify({ error: 'Error generating response' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
