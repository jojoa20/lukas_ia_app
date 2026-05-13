# Lukas AI — Contexto para Claude Code

## Qué es
Asistente financiero inteligente para jóvenes colombianos. Combina Gemini 2.5 Flash con datos reales de mercado e interfaz móvil. Slogan: "Tu Pana Financiero".

## GitHub
- Repo: https://github.com/jojoa20/lukas_ia_app
- Branch activo: `djojo-mvp-final`
- Usuario: jojoa20

## Stack
- **Framework:** Next.js 16.1.6 (App Router + Turbopack)
- **Auth:** Clerk
- **DB:** Supabase (PostgreSQL)
- **IA:** Google Gemini 2.5 Flash
- **Visualización:** D3.js v7 (grafo force-directed)
- **UI:** Framer Motion + Tailwind CSS v4
- **Lenguaje:** TypeScript

## Funcionalidades principales
| Feature | Estado |
|---------|--------|
| Chat con IA (Gemini 2.5 Flash) | Activo |
| Saldo en tiempo real | Activo |
| Comparador de precios Éxito.com (VTEX API) | Activo |
| "Te dejaste tumbar" / "Buena compra" automático | Activo |
| Metas de ahorro | Activo |
| FinScore & Racha | Activo |
| Alertas de Hype (gastos hormiga) | Activo |
| Grafo D3 de gastos (Radar de Gastos) | Activo |
| Desglose por categoría sin presupuesto | Activo |
| Radar de Precios (scraper semanal GitHub Actions) | Activo |

## Arquitectura clave
- `src/app/api/` — API routes (chat, transactions, prices, alerts, budgets, groups)
- `src/components/demo/` — UI principal (HomeView, ChatView, AnalyticsView, ForceGraph)
- `src/lib/lukas-ai-system.ts` — Prompt del agente (secciones 1–9) y guía de acciones `<action>` JSON
- `scripts/scraper_market.py` — Pipeline de precios Éxito.com

## Agente IA — sistema de acciones
El chat interpreta etiquetas `<action>{"type":"..."}` para ejecutar operaciones:
- `SET_CURRENT_BALANCE` — actualiza saldo
- `ADD_TRANSACTION` — registra ingreso/gasto
- `ADD_GASTO_HORMIGA` — gasto repetitivo bajo valor
- `CREATE_GOAL` — meta de ahorro
- `CREATE_BUDGET` — presupuesto por categoría
- `CREATE_GROUP` — grupo financiero compartido
- `SET_GROUP_PERSONAL_BUDGET` — asigna presupuesto en Grupos
- `NAVIGATE` — solo cuando el usuario lo pide explícitamente (no auto-navega)

## Reglas de comportamiento importantes
- El agente NO cambia de pestaña al registrar gastos/ingresos/metas (el usuario siempre se queda en el chat)
- La URL de Éxito es `/io/api/` (no `/api/`) — la VTEX API devuelve JSON real
- El comparador activa respuesta directa si diff > ±15% (sin pasar por Gemini)

## Variables de entorno requeridas
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
GEMINI_API_KEY
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
```

## Correr localmente
```bash
npm run dev   # http://localhost:3000
```

## Notas importantes
- El archivo `.env.local` NUNCA sube al repo
- El scraper corre cada domingo via GitHub Actions (secrets: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
- Para matar el servidor: `pkill -f "next dev" && rm -f .next/dev/lock`
- Ver `DOCUMENTACION.md` para arquitectura completa del agente y pipeline de datos
