# 🤖 Lukas AI — Tu Pana Financiero

**Lukas AI** es un asistente financiero inteligente para jóvenes colombianos. Combina IA generativa (Gemini 2.5 Flash), datos reales de mercado y una interfaz móvil moderna para ayudarte a controlar tus finanzas de manera natural y conversacional.

---

## ✨ Funcionalidades

| Feature | Descripción |
|---------|-------------|
| 💬 **Chat con IA** | Habla con Lukas en lenguaje natural colombiano. Registra gastos, crea metas y consulta tu saldo. |
| 💰 **Saldo en tiempo real** | Visualiza y actualiza tu dinero disponible directamente desde el chat. |
| 🛒 **Comparador de Precios** | Lukas consulta Éxito.com en tiempo real para decirte si tu compra fue cara o barata. |
| 🎯 **Metas de Ahorro** | Crea y monitorea objetivos financieros con progreso visual. |
| 📊 **Análisis** | Gráficos de presupuesto y movimientos con datos reales de tu cuenta. |
| 🔥 **FinScore & Racha** | Puntaje de salud financiera y racha de días de buen manejo. |
| 📡 **Radar de Precios** | Pipeline automático semanal que ingesta precios de mercado desde Éxito.com. |
| ⚠️ **Alertas de Hype** | Detecta tendencias virales y te avisa si estás a punto de hacer una compra impulsiva. |

---

## 🚀 Correr Localmente

### Prerrequisitos
- Node.js 20+
- npm

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/jojoa20/lukas_ia_app.git
cd lukas_ia_app

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
# Crea .env.local con las llaves de Supabase, Clerk y Gemini
# Ver DOCUMENTACION.md para la lista completa

# 4. Correr servidor de desarrollo
npm run dev

# 5. Abrir en el navegador
# http://localhost:3000
```

### Si el servidor no arranca (puerto en uso)

```bash
pkill -f "next dev" && rm -f .next/dev/lock && npm run dev
```

---

## 🏗️ Stack

- **Framework:** Next.js 16.1.6 (App Router + Turbopack)
- **Autenticación:** Clerk
- **Base de Datos:** Supabase (PostgreSQL)
- **IA:** Google Gemini 2.5 Flash
- **Scraping:** Cheerio + Playwright
- **UI:** Framer Motion + Tailwind CSS
- **Lenguaje:** TypeScript

---

## 📁 Documentación Técnica

Ver [`DOCUMENTACION.md`](./DOCUMENTACION.md) para:
- Arquitectura completa del proyecto
- Flujo del agente de IA
- Sistema de acciones del chat
- Pipeline de datos (Radar de Precios)
- Guía de resolución de problemas

---

## 🔐 Variables de Entorno

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
GEMINI_API_KEY=...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
```

> ⚠️ **Nunca** subas el `.env.local` al repositorio.

---

## 📡 Pipeline de Datos (Radar de Precios)

El scraper se ejecuta automáticamente cada domingo vía GitHub Actions.

Para ejecutarlo manualmente:
```bash
cd scripts/
pip install -r requirements.txt
playwright install chromium
python scraper_market.py
```

**Secrets requeridos en GitHub Actions:**
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

---

## 👥 Equipo

Proyecto desarrollado para el MVP de Lukas AI — Fintech para jóvenes colombianos.
