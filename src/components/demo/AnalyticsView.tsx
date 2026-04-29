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
    { name: "Comida & Parche", percent: 45, color: "#D8A93F", icon: "🍱", comment: "Aquí se nos fue la mano, Pana. 😅" },
    { name: "Vueltas & Transmi", percent: 20, color: "#8b5cf6", icon: "🚗", comment: "Controlado, vas bien. 👍" },
    { name: "Cine & Polas", percent: 15, color: "#00ff9d", icon: "🎮", comment: "El presupuesto aguanta un poquito más. 🍿" },
  ];

  return (
    <motion.div className="p-8 pb-40 max-w-lg mx-auto">
      <header className="mb-12 pt-6">
        <p className="text-[#D8A93F] text-[10px] font-black uppercase tracking-[0.4em] mb-2 opacity-80">Rayos X de tu Plata</p>
        <h1 className="text-white font-black text-4xl tracking-tight leading-none text-premium">
          Tus <span className="text-[#D8A93F]">Movidas</span>
        </h1>
      </header>

      {/* Lukas Deep Insight */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-elite rounded-[3rem] p-8 mb-10 border-[#D8A93F]/20 relative overflow-hidden group shadow-2xl"
      >
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-2xl bg-[#D8A93F]/10 flex items-center justify-center text-3xl">🤖</div>
          <div>
            <h3 className="text-white font-black text-lg tracking-tight mb-2">Lukas dice...</h3>
            <p className="text-white/70 text-sm leading-relaxed font-medium italic">
              "Pana, si bajamos un 10% en **Comida & Parche**, en dos meses tienes para ese viaje que tanto quieres. ¿Le jalamos? 😉"
            </p>
          </div>
        </div>
      </motion.div>

      {/* Breakdown Section */}
      <div className="glass-elite rounded-[3.5rem] p-10 mb-8 border-white/5 relative overflow-hidden shadow-2xl inner-highlight">
        <h3 className="text-white/40 text-[11px] font-black uppercase tracking-[0.3em] mb-10">En qué te la estás gastando</h3>
        
        <div className="space-y-12">
          {loading ? (
             <div className="animate-pulse space-y-8">
                {[1,2,3].map(i => <div key={i} className="h-6 bg-white/5 w-full rounded-full" />)}
             </div>
          ) : (
            categories.map((cat, idx) => (
              <div key={cat.name} className="group/item">
                <div className="flex justify-between items-end mb-3">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{cat.icon}</span>
                    <div>
                      <span className="text-base font-black text-white/90 block leading-none">{cat.name}</span>
                      <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest mt-1 block italic">{cat.comment}</span>
                    </div>
                  </div>
                  <span className="text-xl font-black text-white">{cat.percent}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden relative">
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

      {/* Dopamine Grid */}
      <div className="grid grid-cols-2 gap-6">
        <div className="glass-elite rounded-[2.5rem] p-7 border-white/5 text-center">
          <p className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-3">Gasto Pesado</p>
          <p className="text-white font-black text-2xl tracking-tighter">$1.2M</p>
          <p className="text-[9px] text-[#ff3b3b] font-black mt-2 uppercase tracking-widest">¡Ay, dolió! 😭</p>
        </div>
        <div className="glass-elite rounded-[2.5rem] p-7 border-[#00ff9d]/20 text-center">
          <p className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-3">Ahorro Real</p>
          <p className="text-[#00ff9d] font-black text-2xl tracking-tighter">$352k</p>
          <p className="text-[9px] text-[#00ff9d] font-black mt-2 uppercase tracking-widest">¡Esa es la actitud! 🔥</p>
        </div>
      </div>
    </motion.div>
  );
}
