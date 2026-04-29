"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamic import for D3 component to avoid SSR issues
const LeakBusterGraph = dynamic(() => import("../dashboard/LeakBusterGraph"), { ssr: false });

export default function AnalyticsView() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/leak-buster/graph')
      .then(res => res.json())
      .then(json => {
        setData(json.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="p-8 pb-40 max-w-lg mx-auto"
    >
      <header className="mb-14 pt-10">
        <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] mb-4">Análisis de Fugas</p>
        <h1 className="text-white font-black text-4xl tracking-tight leading-none text-premium">
          Leak <span className="text-[#D8A93F]">Buster</span>
        </h1>
      </header>

      {/* Main Graph Visualization */}
      <div className="mb-14">
        {loading ? (
          <div className="w-full aspect-square glass-elite rounded-[4rem] border-white/5 flex items-center justify-center">
            <div className="flex flex-col items-center gap-6 opacity-20">
              <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white animate-spin" />
              <p className="text-[10px] font-black uppercase tracking-[0.4em]">Mapeando Gastos...</p>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <LeakBusterGraph nodes={data?.nodes} links={data?.links} />
          </motion.div>
        )}
      </div>

      {/* Transparent Strategic Insight */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-elite rounded-[4rem] p-12 mb-12 border-white/5 relative overflow-hidden group shadow-2xl inner-highlight"
      >
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-6">
            <div className="w-10 h-10 rounded-2xl bg-white/[0.02] flex items-center justify-center text-xl grayscale opacity-30 border border-white/5">🛰️</div>
            <h3 className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">Análisis de Comportamiento</h3>
          </div>
          
          <p className="text-white/80 text-[16px] leading-relaxed font-medium">
            "He detectado {data?.summary?.fugas_detectadas || 0} fugas críticas en tu flujo de caja. Los nodos en dorado representan micro-transacciones que, sumadas, están restando $${(data?.summary?.monto_en_fugas || 0).toLocaleString()} a tu capacidad de ahorro este mes."
          </p>
          
          <div className="pt-6 border-t border-white/[0.03]">
            <p className="text-[9px] text-white/10 font-black uppercase tracking-[0.3em]">Basado en el análisis de proximidad y frecuencia de gastos</p>
          </div>
        </div>
      </motion.div>

      {/* Precision Metrics */}
      <div className="grid grid-cols-2 gap-8">
        <div className="glass-elite rounded-[3rem] p-10 border-white/5 text-left inner-highlight">
          <p className="text-[9px] text-white/10 uppercase font-black tracking-[0.4em] mb-5">Fugas Totales</p>
          <p className="text-white font-black text-2xl tracking-tighter">
            ${(data?.summary?.monto_en_fugas || 0).toLocaleString()}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D8A93F]/20" />
            <span className="text-[8px] text-white/10 font-black uppercase tracking-[0.3em]">Impacto Negativo</span>
          </div>
        </div>
        <div className="glass-elite rounded-[3rem] p-10 border-white/5 text-left inner-highlight">
          <p className="text-[9px] text-white/10 uppercase font-black tracking-[0.4em] mb-5">Eficiencia</p>
          <p className="text-[#00ff9d]/80 font-black text-2xl tracking-tighter">82%</p>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00ff9d]/20" />
            <span className="text-[8px] text-white/10 font-black uppercase tracking-[0.3em]">Ritmo de Calma</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
