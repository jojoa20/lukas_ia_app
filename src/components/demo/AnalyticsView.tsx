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

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-5 pb-32"
    >
      <h1 className="text-2xl font-bold mb-6 text-[#D8A93F]">Análisis Financiero</h1>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-6">
        <h3 className="text-white/60 text-xs uppercase tracking-widest mb-4">Distribución por Categoría</h3>
        <div className="space-y-6">
          {loading ? (
             <div className="animate-pulse space-y-4">
                {[1,2,3].map(i => <div key={i} className="h-4 bg-white/5 rounded-full" />)}
             </div>
          ) : (
            <>
              <div>
                <div className="flex justify-between text-xs text-white/80 mb-2">
                  <span>Alimentación</span>
                  <span className="font-bold">45%</span>
                </div>
                <div className="h-2 w-full bg-black rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: '45%' }} className="h-full bg-[#D8A93F]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-white/80 mb-2">
                  <span>Transporte</span>
                  <span className="font-bold">20%</span>
                </div>
                <div className="h-2 w-full bg-black rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: '20%' }} className="h-full bg-blue-500" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-white/80 mb-2">
                  <span>Entretenimiento</span>
                  <span className="font-bold">15%</span>
                </div>
                <div className="h-2 w-full bg-black rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: '15%' }} className="h-full bg-purple-500" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center">
          <span className="text-2xl mb-2">📉</span>
          <span className="text-[10px] text-white/50 uppercase">Gasto más alto</span>
          <span className="text-white font-bold">$1.2M</span>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center">
          <span className="text-2xl mb-2">💰</span>
          <span className="text-[10px] text-white/50 uppercase">Potencial Ahorro</span>
          <span className="text-green-400 font-bold">$350k</span>
        </div>
      </div>
    </motion.div>
  );
}
