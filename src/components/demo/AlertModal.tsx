"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HormigaCluster {
  grupo: string;
  cantidad: number;
  total: number;
  promedio: number;
  ultima_fecha: string;
}

interface HormigaData {
  periodo_dias: number;
  total_hormiga: number;
  cantidad_transacciones: number;
  impacto_finscore: number;
  desglose: HormigaCluster[];
  mensaje_ia: string;
}

interface AlertModalProps {
  onClose: () => void;
}

const ICON_MAP: Record<string, string> = {
  cafe: "☕️",
  tinto: "☕️",
  coffee: "☕️",
  empanada: "🥟",
  pan: "🍞",
  uber: "🚕",
  taxi: "🚕",
  rappi: "🛵",
  snack: "🍫",
  dulce: "🍬",
  gaseosa: "🥤",
  cerveza: "🍺",
  licor: "🍺",
  netflix: "📺",
  spotify: "🎵",
  suscripcion: "📱",
  domicilio: "🏍️",
  ifood: "🍔",
  comida: "🍔",
  almuerzo: "🍽️",
};

function getIcon(name: string): string {
  const lower = name.toLowerCase();
  for (const [key, icon] of Object.entries(ICON_MAP)) {
    if (lower.includes(key)) return icon;
  }
  return "💸";
}

function formatCOP(v: number): string {
  return `$${Math.round(v).toLocaleString("es-CO")}`;
}

export default function AlertModal({ onClose }: AlertModalProps) {
  const [data, setData] = useState<HormigaData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/api/alerts/leak-buster").then(r => r.json()).catch(() => null),
      fetch("/api/alerts/hormiga?days=30").then(r => r.json()).catch(() => null),
    ]).then(([leakData, hormigaData]) => {
      if (hormigaData?.data) {
        setData(hormigaData.data);
      } else if (leakData?.data) {
        // Fallback: construir desde leak-buster
        setData({
          periodo_dias: 7,
          total_hormiga: leakData.data.total || 0,
          cantidad_transacciones: leakData.data.count || 0,
          impacto_finscore: -Math.round((leakData.data.total || 0) / 5000),
          desglose: (leakData.data.recent || []).map((r: any) => ({
            grupo: r.descripcion || "Gasto pequeño",
            cantidad: 1,
            total: r.monto,
            promedio: r.monto,
            ultima_fecha: r.fecha || "",
          })),
          mensaje_ia: leakData.data.insight || "",
        });
      }
      setLoading(false);
    });
  }, []);

  const hasData = data && data.total_hormiga > 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#111827]/80 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.9, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-[#1a2a5e] border-2 border-[#F36E53]/40 w-full max-w-sm rounded-[32px] p-6 shadow-[0_20px_60px_rgba(243,110,83,0.25)] relative overflow-hidden"
      >
        {/* Glow effect */}
        <div className="absolute -top-20 -right-20 w-[150px] h-[150px] bg-[#F36E53] rounded-full blur-[80px] opacity-40" />

        {/* Header */}
        <div className="flex justify-between items-start mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F36E53]/10 border border-[#F36E53]/30 flex items-center justify-center text-[#F36E53] shadow-[0_0_15px_rgba(243,110,83,0.5)]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">Gastos Hormiga</h3>
              <p className="text-[#F36E53] font-medium text-sm">
                {hasData ? "Patrón Detectado 🐜" : "Sin alertas activas"}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-white/50 hover:text-white transition-colors bg-white/5 rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {loading ? (
          <div className="space-y-4 relative z-10">
            <div className="h-12 bg-white/5 rounded-xl animate-pulse" />
            <div className="h-32 bg-white/5 rounded-xl animate-pulse" />
          </div>
        ) : hasData ? (
          <>
            {/* Total */}
            <div className="mb-6 relative z-10">
              <div className="text-[42px] font-black text-white tracking-tighter drop-shadow-md">
                {formatCOP(data.total_hormiga)}{" "}
                <span className="text-xl text-white/50 font-medium">COP</span>
              </div>
              <p className="text-white/70 text-sm mt-1">
                Acumulado en los últimos {data.periodo_dias} días
                {data.impacto_finscore < 0 && (
                  <span className="text-[#F36E53] ml-2">({data.impacto_finscore} FinScore)</span>
                )}
              </p>
            </div>

            {/* Desglose real */}
            {data.desglose.length > 0 && (
              <div className="bg-[#111827]/50 rounded-2xl p-4 mb-6 border border-white/5 relative z-10">
                <h4 className="text-white/60 uppercase tracking-wider text-[11px] font-bold mb-3">
                  Desglose de fugas ({data.cantidad_transacciones} transacciones)
                </h4>
                <ul className="space-y-3">
                  {data.desglose.slice(0, 5).map((item, i) => (
                    <li key={i} className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-2">
                        <span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center text-base">
                          {getIcon(item.grupo)}
                        </span>
                        <div>
                          <span className="text-white font-medium">
                            {item.grupo.replace(/^(Fijos|Salidas|Ahorro|Susc\.|Hormiga):\s*/, "")}
                          </span>
                          {item.cantidad > 1 && (
                            <span className="text-white/40 text-xs ml-1">(x{item.cantidad})</span>
                          )}
                        </div>
                      </div>
                      <span className="text-white/80 font-bold">{formatCOP(item.total)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* AI insight */}
            {data.mensaje_ia && (
              <div className="bg-[#D8A93F]/10 border border-[#D8A93F]/20 rounded-2xl p-3 mb-6 relative z-10">
                <p className="text-sm text-white/80 italic">💡 {data.mensaje_ia}</p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-8 relative z-10">
            <div className="text-4xl mb-3">🎯</div>
            <p className="text-white/70 text-sm">
              ¡Vas bien, pana! No se detectaron gastos hormiga significativos este mes.
            </p>
            <p className="text-white/40 text-xs mt-2">
              Lukas sigue vigilando tus patrones de gasto.
            </p>
          </div>
        )}

        {/* Action buttons */}
        <div className="space-y-3 relative z-10">
          {hasData && (
            <button
              className="w-full bg-gradient-to-r from-[#D8A93F] to-[#E5B951] text-[#111827] font-bold text-base py-4 rounded-full shadow-[0_0_20px_rgba(216,169,63,0.5)] active:scale-95 transition-transform"
              onClick={onClose}
            >
              Revisar en detalle
            </button>
          )}
          <button
            className="w-full bg-transparent border-2 border-white/20 text-white hover:bg-white/5 font-bold text-base py-3.5 rounded-full active:scale-95 transition-all"
            onClick={onClose}
          >
            {hasData ? "Cerrar por ahora" : "Entendido"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
