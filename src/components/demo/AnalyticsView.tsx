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
    { name: "Alimentación & Gastos Diarios", percent: 45, color: "#D8A93F", comment: "Patrón de consumo recurrente detectado." },
    { name: "Servicios & Movilidad", percent: 20, color: "#8b5cf6", comment: "Ejecución dentro de los parámetros esperados." },
    { name: "Entretenimiento & Ocio", percent: 15, color: "#00ff9d", comment: "Margen de optimización disponible." },
  ];

  return (
    <motion.div className="p-8 pb-40 max-w-lg mx-auto">
      <header className="mb-12 pt-6">
        <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em] mb-3">Inteligencia de Datos</p>
        <h1 className="text-white font-black text-4xl tracking-tight leading-none text-premium">
          Análisis <span className="text-[#D8A93F]">Estratégico</span>
        </h1>
      </header>

      {/* Lukas Strategic Insight */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-elite rounded-[3.5rem] p-10 mb-10 border-white/5 relative overflow-hidden group shadow-2xl inner-highlight"
      >
        <div className="flex items-start gap-6">
          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl border border-white/5">🤖</div>
          <div className="flex-1">
            <h3 className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-3">Perspectiva de Lukas</h3>
            <p className="text-white/80 text-[15px] leading-relaxed font-medium">
              He observado que una optimización del 12% en la categoría de **Alimentación** podría acelerar el cumplimiento de tu meta principal en aproximadamente 45 días. ¿Te gustaría explorar estrategias de ajuste?
            </p>
          </div>
        </div>
      </motion.div>

      {/* Breakdown Section */}
      <div className="glass-elite rounded-[3.5rem] p-10 mb-10 border-white/5 relative overflow-hidden shadow-2xl inner-highlight">
        <h3 className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em] mb-12">Distribución de Recursos</h3>
        
        <div className="space-y-12">
          {loading ? (
             <div className="animate-pulse space-y-8">
                {[1,2,3].map(i => <div key={i} className="h-4 bg-white/5 w-full rounded-full" />)}
             </div>
          ) : (
            categories.map((cat, idx) => (
              <div key={cat.name} className="group/item">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <span className="text-base font-black text-white/90 block leading-tight mb-1">{cat.name}</span>
                    <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest block">{cat.comment}</span>
                  </div>
                  <span className="text-xl font-black text-white">{cat.percent}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative">
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: `${cat.percent}%` }} 
                    transition={{ delay: 0.5 + idx * 0.1, duration: 2, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: cat.color }}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Metrics Cluster */}
      <div className="grid grid-cols-2 gap-6">
        <div className="glass-elite rounded-[2.5rem] p-8 border-white/5 text-left inner-highlight">
          <p className="text-[10px] text-white/20 uppercase font-black tracking-[0.3em] mb-4">Gasto Máximo</p>
          <p className="text-white font-black text-2xl tracking-tighter">$1.240.000</p>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ff3b3b]/40" />
            <span className="text-[9px] text-white/20 font-black uppercase tracking-[0.2em]">Desviación detectable</span>
          </div>
        </div>
        <div className="glass-elite rounded-[2.5rem] p-8 border-white/5 text-left inner-highlight">
          <p className="text-[10px] text-white/20 uppercase font-black tracking-[0.3em] mb-4">Ahorro Generado</p>
          <p className="text-[#00ff9d] font-black text-2xl tracking-tighter">$352.000</p>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00ff9d]/40" />
            <span className="text-[9px] text-white/20 font-black uppercase tracking-[0.2em]">Impacto Proyectado</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
