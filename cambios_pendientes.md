# Diagnóstico y Cambios Pendientes - MVP Lukas AI

Este documento detalla las falencias y deudas técnicas identificadas en la aplicación de Lukas AI en su fase actual de Producto Mínimo Viable (MVP). Sirve como guía de prioridades para las futuras fases de desarrollo.

## 1. El Agente de Inteligencia Artificial (Lukas)
- **Persistencia de Memoria:** Actualmente, `useChat` almacena el contexto de la conversación en el frontend de forma temporal. Si el usuario recarga la página, Lukas olvida lo hablado (aunque las transacciones queden registradas en Supabase). **Pendiente:** Cargar el historial desde una tabla de PostgreSQL / `pgvector` al iniciar el chat.
- **Renderizado del Chat (Hidratación):** En ciertos dispositivos el gancho `useChat` del Vercel AI SDK no renderiza los `initialMessages` si no detecta una clave única de sesión. Se parcheó con un ID fijo, pero es frágil.
- **Multimodalidad Pospuesta:** La funcionalidad de transcripción/recepción de voz usando librerías costosas de audio está desactivada para estabilizar el agente de texto y garantizar el cumplimiento.

## 2. Gestión de Finanzas y "Gastos Hormiga"
- **Ponderación del FinScore:** La función actual (`addGastoHormiga`) tiene una regla dura y estática: resta 1 punto por cada $5,000 acumulados. **Pendiente:** Crear un algoritmo dinámico que castigue el FinScore basándose en la proporción del gasto respecto a los de los ingresos del usuario, no un valor constante.
- **Categorización Autónoma:** Lukas acepta el gasto y le asigna el tipo `gasto_hormiga`. Falta un clasificador (ej: OCR de recibos o un webhook con bancos) que asigne subcategorías automáticamente (Comida, Transporte, Entretenimiento) para mostrar barras de colores en LeakBuster.

## 3. Autenticación, Seguridad y Base de Datos (Supabase + Clerk)
- **Sincronización (Webhooks):** La plataforma crea actualmente el perfil en Supabase usando la técnica transaccional *Lazy Auto-Upsert* (cuando el usuario interactúa por primera vez). **Pendiente:** Implementar un webhook oficial que dispare Clerk al momento exacto en que un usuario se registre para que Supabase lo cree antes del primer _login_.
- **Desempeño en LeakBusterGraph:** Si el usuario llega a 1,000+ transacciones, el frontend podría sufrir retrasos ya que pide todos los registros sin paginación.

## 4. Experiencia de Usuario (UI/UX)
- **Modo Offline / Manejo de Sesión Caída:** Si hay pérdida momentánea de conexión, las gráficas y el avatar de la IA se quedan pasmados o la validación del JWT de Clerk expira sin forzar recarga limpia.
- **Feedback Visual (Loading States):** Faltan micropausas o "loaders de inserción" del lado del cliente para que el usuario perciba latencia intencional mientras se ejecutan las herramientas del SDK en segundo plano.
