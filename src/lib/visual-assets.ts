type VisualAsset = {
  src: string
  alt: string
  label: string
  accent: string
}

type VisualPreset = {
  label: string
  icon: string
  gradient: [string, string]
  accent: string
}

const transactionPresets: Record<string, VisualPreset> = {
  ingreso: { label: 'Ingreso', icon: '$', gradient: ['#0f766e', '#22c55e'], accent: 'text-green-400' },
  mercado: { label: 'Mercado', icon: '🥬', gradient: ['#14532d', '#84cc16'], accent: 'text-lime-300' },
  comida: { label: 'Comida', icon: '🍽️', gradient: ['#7c2d12', '#fb923c'], accent: 'text-orange-300' },
  cafe: { label: 'Cafe', icon: '☕', gradient: ['#3f2412', '#d97706'], accent: 'text-amber-300' },
  transporte: { label: 'Transporte', icon: '🚕', gradient: ['#1e3a8a', '#38bdf8'], accent: 'text-sky-300' },
  vivienda: { label: 'Hogar', icon: '🏠', gradient: ['#312e81', '#818cf8'], accent: 'text-indigo-300' },
  salud: { label: 'Salud', icon: '✚', gradient: ['#831843', '#fb7185'], accent: 'text-rose-300' },
  educacion: { label: 'Estudio', icon: '📚', gradient: ['#164e63', '#06b6d4'], accent: 'text-cyan-300' },
  entretenimiento: { label: 'Ocio', icon: '🎟️', gradient: ['#581c87', '#c084fc'], accent: 'text-purple-300' },
  suscripcion: { label: 'Susc.', icon: '▶', gradient: ['#1f2937', '#a78bfa'], accent: 'text-violet-300' },
  ahorro: { label: 'Ahorro', icon: '◈', gradient: ['#713f12', '#facc15'], accent: 'text-[#D8A93F]' },
  hormiga: { label: 'Hormiga', icon: '•', gradient: ['#7f1d1d', '#f97316'], accent: 'text-[#F36E53]' },
  general: { label: 'Gasto', icon: '•', gradient: ['#111827', '#64748b'], accent: 'text-white/70' },
}

const goalPresets: Record<string, VisualPreset> = {
  viaje: { label: 'Viaje', icon: '✈', gradient: ['#0f172a', '#38bdf8'], accent: 'text-sky-300' },
  celular: { label: 'Celular', icon: '▯', gradient: ['#18181b', '#60a5fa'], accent: 'text-blue-300' },
  moto: { label: 'Moto', icon: '◒', gradient: ['#1f2937', '#f97316'], accent: 'text-orange-300' },
  carro: { label: 'Carro', icon: '▰', gradient: ['#172554', '#facc15'], accent: 'text-yellow-300' },
  casa: { label: 'Casa', icon: '⌂', gradient: ['#312e81', '#a78bfa'], accent: 'text-violet-300' },
  estudio: { label: 'Estudio', icon: '✎', gradient: ['#164e63', '#22d3ee'], accent: 'text-cyan-300' },
  emergencia: { label: 'Emergencia', icon: '✚', gradient: ['#7f1d1d', '#fb7185'], accent: 'text-rose-300' },
  inversion: { label: 'Inversion', icon: '↗', gradient: ['#064e3b', '#34d399'], accent: 'text-emerald-300' },
  ahorro: { label: 'Meta', icon: '◈', gradient: ['#713f12', '#facc15'], accent: 'text-[#D8A93F]' },
}

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

function pickTransactionPreset(description: string, category: string, type: string, isHormiga?: boolean) {
  const text = normalize(`${description} ${category}`)
  if (type === 'ingreso') return transactionPresets.ingreso
  if (isHormiga) return transactionPresets.hormiga
  if (/mercado|super|d1|ara|exito|jumbo|verdura|fruta|arroz|pollo|huevo|leche|pan|carne|tomate|cebolla/.test(text)) return transactionPresets.mercado
  if (/almuerzo|comida|restaurante|rappi|domicilio|pizza|hamburguesa|perro|arepa|empanada/.test(text)) return transactionPresets.comida
  if (/cafe|tinto|latte|capuchino/.test(text)) return transactionPresets.cafe
  if (/uber|didi|taxi|bus|metro|transporte|gasolina|parqueadero/.test(text)) return transactionPresets.transporte
  if (/arriendo|renta|luz|agua|gas|internet|hogar|casa/.test(text)) return transactionPresets.vivienda
  if (/medico|salud|farmacia|droga|eps|cita|odontologia/.test(text)) return transactionPresets.salud
  if (/curso|universidad|colegio|libro|estudio/.test(text)) return transactionPresets.educacion
  if (/cine|bar|fiesta|licor|juego|concierto|salida/.test(text)) return transactionPresets.entretenimiento
  if (/netflix|spotify|prime|hbo|disney|suscripcion|app/.test(text)) return transactionPresets.suscripcion
  if (/ahorro|meta|inversion|aporte/.test(text)) return transactionPresets.ahorro
  return transactionPresets.general
}

function pickGoalPreset(name: string) {
  const text = normalize(name)
  if (/viaje|cartagena|medellin|playa|hotel|vacacion|europa|san andres/.test(text)) return goalPresets.viaje
  if (/celular|iphone|telefono|movil/.test(text)) return goalPresets.celular
  if (/moto|scooter/.test(text)) return goalPresets.moto
  if (/carro|auto|vehiculo/.test(text)) return goalPresets.carro
  if (/casa|apartamento|apto|vivienda/.test(text)) return goalPresets.casa
  if (/curso|universidad|maestria|estudio|educacion/.test(text)) return goalPresets.estudio
  if (/emergencia|colchon|seguridad/.test(text)) return goalPresets.emergencia
  if (/inversion|invertir|acciones|negocio/.test(text)) return goalPresets.inversion
  return goalPresets.ahorro
}

function svgDataUri(preset: VisualPreset, seed: string, variant: 'thumb' | 'wide') {
  const [from, to] = preset.gradient
  const width = variant === 'wide' ? 720 : 160
  const height = variant === 'wide' ? 260 : 160
  const fontSize = variant === 'wide' ? 78 : 54
  const labelSize = variant === 'wide' ? 32 : 18
  const safeLabel = preset.label.replace(/[<>&"]/g, '')
  const safeSeed = seed.replace(/[<>&"]/g, '').slice(0, 32)
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="${from}" offset="0"/>
          <stop stop-color="${to}" offset="1"/>
        </linearGradient>
        <radialGradient id="r" cx="70%" cy="20%" r="80%">
          <stop stop-color="rgba(255,255,255,.38)" offset="0"/>
          <stop stop-color="rgba(255,255,255,0)" offset=".62"/>
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" rx="${variant === 'wide' ? 28 : 36}" fill="url(#g)"/>
      <rect width="100%" height="100%" rx="${variant === 'wide' ? 28 : 36}" fill="url(#r)"/>
      <circle cx="${width * 0.82}" cy="${height * 0.28}" r="${height * 0.34}" fill="rgba(255,255,255,.12)"/>
      <circle cx="${width * 0.2}" cy="${height * 0.82}" r="${height * 0.28}" fill="rgba(0,0,0,.16)"/>
      <text x="${variant === 'wide' ? 44 : width / 2}" y="${variant === 'wide' ? 118 : 86}" text-anchor="${variant === 'wide' ? 'start' : 'middle'}" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="800" fill="white">${preset.icon}</text>
      <text x="${variant === 'wide' ? 46 : width / 2}" y="${variant === 'wide' ? 176 : 124}" text-anchor="${variant === 'wide' ? 'start' : 'middle'}" font-family="Arial, sans-serif" font-size="${labelSize}" font-weight="800" fill="white">${safeLabel}</text>
      ${variant === 'wide' ? `<text x="46" y="214" font-family="Arial, sans-serif" font-size="20" fill="rgba(255,255,255,.68)">${safeSeed}</text>` : ''}
    </svg>`

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export function transactionVisual(description: string, category: string, type: string, isHormiga?: boolean): VisualAsset {
  const preset = pickTransactionPreset(description, category, type, isHormiga)
  const label = description || category || preset.label
  return {
    src: svgDataUri(preset, label, 'thumb'),
    alt: `Imagen de ${preset.label} para ${label}`,
    label: preset.label,
    accent: preset.accent,
  }
}

export function goalVisual(name: string): VisualAsset {
  const preset = pickGoalPreset(name)
  return {
    src: svgDataUri(preset, name, 'wide'),
    alt: `Imagen de meta ${preset.label} para ${name}`,
    label: preset.label,
    accent: preset.accent,
  }
}
