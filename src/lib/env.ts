import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
  OPENAI_API_KEY: z.string().startsWith('sk-').optional(),
  OPENAI_ASSISTANT_ID: z.string().optional(),
  ELEVENLABS_API_KEY: z.string().optional(),
});

// En Next.js, process.env no siempre tiene todas las variables expuestas en el cliente
// a menos que tengan el prefijo NEXT_PUBLIC_
export const env = envSchema.parse({
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  OPENAI_ASSISTANT_ID: process.env.OPENAI_ASSISTANT_ID,
  ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY,
});
