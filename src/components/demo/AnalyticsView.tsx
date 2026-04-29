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
    { name: "Alimentación", percent: 45, color: "#D8A93F", icon: "🍱", amount: "$840k" },
    { name: "Transporte", percent: 20, color: "#8b5cf6", icon: "🚗", amount: "$320k" },
    { name: "Entretenimiento", percent: 15, color: "#00ff9d", icon: "🎮", amount: "$150k" },
  ];

  return (
    <motion.div 
      className="p-8 pb-40 max-w-lg mx-auto"
    >
      <header className="mb-12 pt-6">
        <p className="text-[#D8A93F] text-[10px] font-black uppercase tracking-[0.4em] mb-2 opacity-80">Data Intelligence</p>
        <h1 className="text-white font-black text-4xl tracking-tight leading-none text-premium">
          Análisis <span className="text-[#D8A93F]">Financiero</span>
        </h1>
      </header>

      {/* Main Insights Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-elite rounded-[3.5rem] p-10 mb-10 border-white/5 relative overflow-hidden shadow-2xl inner-highlight group"
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#D8A93F]/5 blur-[80px] rounded-full -mr-24 -mt-24 group-hover:bg-[#D8A93F]/10 transition-colors" />
        
        <h3 className="text-white/40 text-[11px] font-black uppercase tracking-[0.3em] mb-10">Distribución Mensual</h3>
        
        <div className="space-y-10">
          {loading ? (
             <div className="animate-pulse space-y-8">
                {[1,2,3].map(i => (
                  <div key={i} className="space-y-3">
                    <div className="h-4 bg-white/5 w-1/3 rounded-full" />
                    <div className="h-2.5 bg-white/5 w-full rounded-full" />
                  </div>
                ))}
             </div>
          ) : (
            categories.map((cat, idx) => (
              <motion.div 
                key={cat.name} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="group/item"
              >
                <div className="flex justify-between items-end mb-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl group-hover/item:scale-110 transition-transform">
                      {cat.icon}
                    </div>
                    <div>
                      <span className="text-base font-black text-white/90 group-hover/item:text-white transition-colors block leading-none">{cat.name}</span>
                      <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest mt-1 block">{cat.amount}</span>
                    </div>
                  </div>
                  <span className="text-xl font-black text-white">{cat.percent}%</span>
                </div>
                <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden relative border border-white/5">
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: `${cat.percent}%` }} 
                    transition={{ delay: 0.5 + idx * 0.1, duration: 2, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full relative"
                    style={{ backgroundColor: cat.color }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-white/30" />
                  </motion.div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>

      {/* Stats Cluster */}
      <div className="grid grid-cols-2 gap-6">
        <motion.div 
          whileHover={{ y: -10, scale: 1.02 }}
          className="glass-elite rounded-[2.5rem] p-7 border-white/5 relative overflow-hidden group inner-highlight"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#ff3b3b]/10 flex items-center justify-center text-2xl mb-6 shadow-inner">
            📉
          </div>
          <p className="text-[10px] text-white/40 uppercase font-black tracking-[0.2em] mb-2">Gasto Mayor</p>
          <p className="text-white font-black text-2xl tracking-tighter text-premium">$1.240.000</p>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-[10px] text-[#ff3b3b] font-black uppercase tracking-widest">+5.2%</span>
            <div className="h-[1px] flex-1 bg-white/5" />
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10, scale: 1.02 }}
          className="glass-elite rounded-[2.5rem] p-7 border-white/5 relative overflow-hidden group inner-highlight"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#00ff9d]/10 flex items-center justify-center text-2xl mb-6 shadow-inner">
            💰
          </div>
          <p className="text-[10px] text-white/40 uppercase font-black tracking-[0.2em] mb-2">Ahorro IA</p>
          <p className="text-white font-black text-2xl tracking-tighter text-premium">$352.000</p>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-[10px] text-[#00ff9d] font-black uppercase tracking-widest">Calculado</span>
            <div className="h-[1px] flex-1 bg-white/5" />
          </div>
        </motion.div>
      </div>

      {/* Elite Action Section */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="mt-10 p-8 glass-elite rounded-[3rem] border-[#D8A93F]/20 flex items-center gap-6 group cursor-pointer overflow-hidden relative shadow-[0_20px_40px_rgba(216,169,63,0.1)]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#D8A93F]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-[#D8A93F] to-[#f3d48d] flex items-center justify-center text-3xl shadow-[0_15px_30px_rgba(216,169,63,0.4)] group-hover:rotate-6 transition-transform">
          ✨
        </div>
        <div className="flex-1">
          <p className="text-lg font-black text-white tracking-tight leading-tight mb-1">Reporte Predictivo</p>
          <p className="text-[11px] text-white/40 font-bold uppercase tracking-widest">Optimizado por Lukas AI</p>
        </div>
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-[#D8A93F] group-hover:border-[#D8A93F]/50 transition-all">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}
