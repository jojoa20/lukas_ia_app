# 📋 Guía Detallada de Finalización - Lukas AI MVP

¡Qué más equipo! Hemos estabilizado la base de la aplicación. Ya no tenemos datos "quemados" y el backend está listo para ser conectado al 100%. Aquí les dejo la hoja de ruta clara para terminar el MVP:

## 1. Configuración de Base de Datos (Prioridad: Crítica)
El backend usa la extensión `pgvector` para la memoria de la IA. Deben ejecutar el siguiente SQL en la consola de Supabase:
- Habilitar la extensión: `CREATE EXTENSION IF NOT EXISTS vector;`
- Crear la tabla `chat_memories` (ver el esquema en `src/lib/supabase/memory.ts`).
- Asegurarse de que las tablas `metas` y `transactions` tengan habilitado RLS (Row Level Security) y tengan las políticas para que el usuario solo vea sus propios datos.

## 2. Variables de Entorno
Asegúrense de que su `.env.local` tenga:
- `SUPABASE_SERVICE_ROLE_KEY`: Corregido (antes decía `SERVICE_ROL_JEY`).
- `OPENAI_API_KEY`: Necesaria para que el chat funcione.
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Para la autenticación.

## 3. Estado de los Componentes (Frontend)
He refactorizado las siguientes vistas para que usen datos dinámicos:
- `HomeView.tsx`: Ya busca el nombre y FinScore desde `/api/profile`.
- `MetasView.tsx`: Carga las metas desde `/api/metas`.
- `HistorialView.tsx`: Carga transacciones desde `/api/transactions`.

**Pendiente:**
- Implementar el "Streaming" en el `ChatView.tsx`. Actualmente envía mensajes pero la respuesta es un mock simple.
- Pulir el `AnalyticsView.tsx` para que use el desglose real del endpoint `/api/budgets/summary`.

## 4. El Agente de IA (Lukas)
El archivo `src/app/api/chat/route.ts` ya tiene implementada la lógica de `Assistant` con `Tool Calling`. Lukas puede:
- Crear metas automáticamente.
- Consultar tu FinScore.
- Registrar gastos hormiga.
Deben testear estas funciones hablando con él en la pestaña de Chat.

## 5. Próxima Fase (Social)
Una vez el MVP financiero esté sólido, el siguiente paso es conectar los grupos en `/api/groups` para comparar el FinScore con amigos.

---
*Cualquier duda, revisen los archivos en `tutoria/` que dejó el profesor.*
