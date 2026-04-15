"use client";

// PASO 1 Fix: MobileLeakBuster usa D3 internamente (via LeakBusterGraph) y
// hooks de estado interactivos. Requiere 'use client'.

import React, { useState } from "react";
import dynamic from "next/dynamic";

// Import dinámico con ssr:false — evita que D3 intente acceder a window en servidor
const LeakBusterGraph = dynamic(
  () => import("@/components/dashboard/LeakBusterGraph"),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-[200px]">
        <div className="text-xs text-purple-400 animate-pulse">Cargando gráfico...</div>
      </div>
    ),
  }
);

const categories = [
  { label: "Alimentación", amount: 465000, color: "#3b82f6", percent: 22 },
  { label: "Transporte", amount: 320000, color: "#8b5cf6", percent: 15 },
  { label: "Entretenimiento", amount: 250000, color: "#ec4899", percent: 12 },
  { label: "Snacks (🐜)", amount: 150000, color: "#ef4444", percent: 7, isAlert: true },
];

export default function MobileLeakBuster() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="mt-4 rounded-2xl bg-white/5 border border-white/10 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-white">🔍 Leak Buster</h3>
        <span className="text-xs text-red-400 font-medium">3 fugas detectadas</span>
      </div>

      {/* Gráfico D3 — solo client-side */}
      <div className="h-[200px] rounded-xl overflow-hidden bg-black/20">
        <LeakBusterGraph />
      </div>

      {/* Categorías */}
      <div className="mt-3 space-y-2">
        {categories.map((cat) => (
          <button
            key={cat.label}
            onClick={() => setActiveCategory(activeCategory === cat.label ? null : cat.label)}
            className="w-full flex items-center justify-between text-left"
          >
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: cat.color }}
              />
              <span className={`text-xs ${cat.isAlert ? "text-red-400" : "text-white/70"}`}>
                {cat.label}
              </span>
              {cat.isAlert && (
                <span className="text-[10px] bg-red-500/20 text-red-400 px-1 rounded">
                  ALERTA
                </span>
              )}
            </div>
            <span className="text-xs text-white/60">
              ${(cat.amount / 1000).toFixed(0)}k ({cat.percent}%)
            </span>
          </button>
        ))}
      </div>

      <p className="mt-3 text-[11px] text-white/40 text-center">
        Datos del mes actual · Conectando con BD...
      </p>
    </div>
  );
}
