"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AnalyticsView() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/budgets/summary')
      .then(res => res.json())
      .then(json => {
        setData(json.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const categories = [
    { name: "Alimentación", percent: 45, color: "#D8A93F", icon: "🍱" },
    { name: "Transporte", percent: 20, color: "#7c5cff", icon: "🚗" },
    { name: "Entretenimiento", percent: 15, color: "#00f291", icon: "🎮" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="p-6 pb-32 max-w-md mx-auto"
    >
      <header className="mb-8 pt-4">
        <h2 className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Insights</h2>
        <h1 className="text-white font-black text-3xl tracking-tight">Análisis <span className="text-[#D8A93F]">Financiero</span></h1>
      </header>

      {/* Main Breakdown Card */}
      <div className="glass rounded-[32px] p-6 mb-8 border-white/5 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D8A93F]/5 blur-3xl rounded-full -mr-16 -mt-16" />
        
        <h3 className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-6">Distribución de Gastos</h3>
        
        <div className="space-y-8">
          {loading ? (
             <div className="animate-pulse space-y-6">
                {[1,2,3].map(i => (
                  <div key={i} className="space-y-2">
                    <div className="h-3 bg-white/5 w-1/3 rounded-full" />
                    <div className="h-2 bg-white/5 w-full rounded-full" />
                  </div>
                ))}
             </div>
          ) : (
            categories.map((cat, idx) => (
              <div key={cat.name} className="group">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{cat.icon}</span>
                    <span className="text-sm font-bold text-white/90 group-hover:text-white transition-colors">{cat.name}</span>
                  </div>
                  <span className="text-sm font-black text-white">{cat.percent}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: `${cat.percent}%` }} 
                    transition={{ delay: 0.2 + idx * 0.1, duration: 1.5, ease: "circOut" }}
                    className="h-full rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                    style={{ backgroundColor: cat.color }}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div 
          whileHover={{ y: -5 }}
          className="glass rounded-3xl p-5 border-white/5 relative overflow-hidden group"
        >
          <div className="w-10 h-10 rounded-2xl bg-red-500/10 flex items-center justify-center text-xl mb-4">
            📉
          </div>
          <span className="text-[9px] text-white/40 uppercase font-black tracking-widest block mb-1">Gasto Mayor</span>
          <span className="text-white font-black text-xl tracking-tighter">$1.240.000</span>
          <p className="text-[9px] text-red-400 font-bold mt-2">+5% este mes</p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="glass rounded-3xl p-5 border-white/5 relative overflow-hidden group"
        >
          <div className="w-10 h-10 rounded-2xl bg-[#00f291]/10 flex items-center justify-center text-xl mb-4">
            💰
          </div>
          <span className="text-[9px] text-white/40 uppercase font-black tracking-widest block mb-1">Potencial Ahorro</span>
          <span className="text-white font-black text-xl tracking-tighter">$352.000</span>
          <p className="text-[9px] text-[#00f291] font-bold mt-2">Basado en fugas</p>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="mt-8 p-6 glass rounded-[32px] border-[#D8A93F]/20 flex items-center gap-4 group cursor-pointer overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D8A93F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="w-12 h-12 rounded-2xl bg-[#D8A93F] flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(216,169,63,0.3)]">
          ✨
        </div>
        <div>
          <p className="text-xs font-bold text-white leading-tight">Generar Reporte Detallado</p>
          <p className="text-[10px] text-white/40 font-medium">Lukas lo tiene listo para ti</p>
        </div>
        <div className="ml-auto text-white/20 group-hover:text-[#D8A93F] transition-colors">
          →
        </div>
      </div>
    </motion.div>
  );
}
