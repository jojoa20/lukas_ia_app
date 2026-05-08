-- Crear tabla para almacenar las tendencias de consumo detectadas
CREATE TABLE public.consumer_trends (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  item_name text NOT NULL,
  platform text NOT NULL,
  hype_score integer NOT NULL CHECK (hype_score >= 0 AND hype_score <= 100),
  created_at timestamp with time zone DEFAULT now() NOT NULL
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE public.consumer_trends ENABLE ROW LEVEL SECURITY;

-- Crear política para permitir la lectura a usuarios autenticados
CREATE POLICY "Permitir lectura de tendencias a usuarios autenticados"
ON public.consumer_trends
FOR SELECT
TO authenticated
USING (true);

-- Crear política para permitir inserciones desde el Service Role (Backend Cron Jobs)
CREATE POLICY "Permitir inserción a service_role"
ON public.consumer_trends
FOR INSERT
TO service_role
WITH CHECK (true);

-- Índices recomendados para la tabla
CREATE INDEX idx_consumer_trends_item_name ON public.consumer_trends (item_name);
CREATE INDEX idx_consumer_trends_created_at ON public.consumer_trends (created_at DESC);
