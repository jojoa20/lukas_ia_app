"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface HormigrItem {
  grupo: string;
  total: number;
  cantidad: number;
}

interface HormigaData {
  total_hormiga: number;
  desglose: HormigrItem[];
  mensaje_ia: string;
}

const EMOJIS: Record<string, string> = {
  uber: "🚗", rappi: "🛵", cafe: "☕", café: "☕", tinto: "☕",
  empanada: "🥟", helado: "🍦", snack: "🍿", pola: "🍺",
  alimentacion: "🍔", transporte: "🚌", entretenimiento: "🎬",
  salud: "💊", educacion: "📚", vivienda: "🏠", otros: "💸",
};

function getEmoji(grupo: string): string {
  const lower = grupo.toLowerCase();
  return Object.entries(EMOJIS).find(([k]) => lower.includes(k))?.[1] ?? "💸";
}

function formatCOP(val: number): string {
  if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
  if (val >= 1000) return `$${(val / 1000).toFixed(0)}k`;
  return `$${val}`;
}

export default function LeakBusterBubbles() {
  const [data, setData] = useState<HormigaData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/alerts/hormiga?days=30")
      .then(res => res.json())
      .then(json => {
        if (json.data) setData(json.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse space-y-2">
        <div className="h-4 w-1/3 bg-white/10 rounded" />
        <div className="flex gap-3 flex-wrap">
          {[1, 2, 3].map(i => <div key={i} className="h-20 w-20 bg-white/10 rounded-full" />)}
        </div>
      </div>
    );
  }

  if (!data || !data.desglose?.length) {
    return (
      <div className="bg-white/5 rounded-2xl p-5 border border-white/10 text-center">
        <p className="text-4xl mb-2">🐜</p>
        <p className="text-white/50 text-sm">Sin gastos hormiga este mes.</p>
        <p className="text-green-400 text-xs font-bold mt-1">¡Vas de lujo, parcero!</p>
      </div>
    );
  }

  const maxTotal = Math.max(...data.desglose.map(d => d.total));

  // Tamaños de burbuja: del más grande (72px) al más chico (40px)
  const getBubbleSize = (total: number) => {
    const ratio = total / maxTotal;
    return Math.round(40 + ratio * 40);
  };

  const alertColors = [
    "from-red-500/80 to-red-700/80 border-red-400/50",
    "from-orange-500/70 to-orange-700/70 border-orange-400/40",
    "from-yellow-500/60 to-yellow-700/60 border-yellow-400/30",
    "from-yellow-600/50 to-yellow-800/50 border-yellow-500/20",
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-white font-bold text-sm">Leak Buster 🐜</h3>
          <p className="text-white/40 text-[10px]">Últimos 30 días</p>
        </div>
        <div className="text-right">
          <p className="text-red-400 font-black text-lg">{formatCOP(data.total_hormiga)}</p>
          <p className="text-white/40 text-[10px]">fuga total</p>
        </div>
      </div>

      {/* Burbujas */}
      <div className="flex flex-wrap gap-3 items-end justify-start min-h-[100px]">
        {data.desglose.slice(0, 6).map((item, i) => {
          const size = getBubbleSize(item.total);
          const colorClass = alertColors[Math.min(i, alertColors.length - 1)];
          return (
            <motion.div
              key={item.grupo}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
              style={{ width: size, height: size }}
              className={`rounded-full bg-gradient-to-br ${colorClass} border flex flex-col items-center justify-center text-center shadow-lg cursor-default`}
              title={`${item.grupo}: ${formatCOP(item.total)} · ${item.cantidad} veces`}
            >
              <span style={{ fontSize: size * 0.28 }}>{getEmoji(item.grupo)}</span>
              <span className="text-white font-bold leading-tight" style={{ fontSize: Math.max(8, size * 0.14) }}>
                {formatCOP(item.total)}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Leyenda: top 3 */}
      <div className="space-y-1.5">
        {data.desglose.slice(0, 3).map((item, i) => (
          <div key={item.grupo} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs">{getEmoji(item.grupo)}</span>
              <span className="text-white/70 text-xs capitalize">{item.grupo}</span>
              <span className="text-white/30 text-[10px]">×{item.cantidad}</span>
            </div>
            <span className={`text-xs font-bold ${i === 0 ? 'text-red-400' : 'text-orange-400'}`}>
              {formatCOP(item.total)}
            </span>
          </div>
        ))}
      </div>

      {/* Mensaje IA */}
      <p className="text-white/40 text-[11px] italic border-t border-white/5 pt-3">
        {data.mensaje_ia}
      </p>
    </div>
  );
}
