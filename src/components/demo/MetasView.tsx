"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Meta {
  id: string;
  nombre: string;
  monto_objetivo: number;
  monto_actual: number;
  porcentaje_completado: number;
}

export default function MetasView() {
  const [metas, setMetas] = useState<Meta[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [nombre, setNombre] = useState("");
  const [monto, setMonto] = useState("");

  useEffect(() => {
    fetch('/api/metas')
      .then(res => res.json())
      .then(json => {
        if (json.data) setMetas(json.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleCreate = async () => {
    if (!nombre || !monto) return;
    const res = await fetch('/api/metas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, monto_objetivo: Number(monto) })
    });
    if (res.ok) {
      const json = await res.json();
      setMetas(prev => [json.data, ...prev]);
      setShowModal(false);
      setNombre("");
      setMonto("");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="p-6 pb-32 max-w-md mx-auto min-h-screen relative"
    >
      <header className="flex justify-between items-end mb-8 pt-4">
        <div>
          <h2 className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Tu Futuro</h2>
          <h1 className="text-white font-black text-3xl tracking-tight">Tus <span className="text-[#D8A93F]">Metas</span></h1>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowModal(true)}
          className="bg-[#D8A93F] text-black px-4 py-2 rounded-2xl font-black text-[10px] uppercase tracking-wider gold-glow"
        >
          + Nueva
        </motion.button>
      </header>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setShowModal(false)}
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#141417] p-8 rounded-[2.5rem] w-full max-w-sm border border-white/10 relative z-10 shadow-2xl"
            >
              <h2 className="text-2xl font-black text-white mb-6 tracking-tight">Nueva Meta 🎯</h2>
              
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-1">¿Qué quieres lograr?</label>
                  <input 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-[#D8A93F]/50 outline-none transition-colors" 
                    placeholder="Ej. Viaje a San Andrés" 
                    value={nombre} 
                    onChange={e => setNombre(e.target.value)} 
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-1">¿Cuánto necesitas?</label>
                  <input 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-[#D8A93F]/50 outline-none transition-colors" 
                    placeholder="$ 0.00" 
                    type="number" 
                    value={monto} 
                    onChange={e => setMonto(e.target.value)} 
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <button 
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-4 text-white/40 font-bold text-sm uppercase tracking-widest"
                >
                  Cancelar
                </button>
                <button 
                  onClick={handleCreate}
                  className="flex-[2] bg-[#D8A93F] text-black py-4 rounded-2xl font-black text-sm uppercase tracking-widest gold-glow"
                >
                  Guardar Meta
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {loading ? (
        <div className="space-y-6">
          {[1, 2].map(i => (
            <div key={i} className="h-32 glass rounded-[2.5rem] animate-pulse" />
          ))}
        </div>
      ) : metas.length > 0 ? (
        <div className="space-y-6 pb-20">
          {metas.map((meta, idx) => (
            <motion.div 
              key={meta.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 rounded-[2.5rem] border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                🏔️
              </div>
              <h3 className="text-xl font-black text-white mb-4 tracking-tight">{meta.nombre}</h3>
              
              <div className="relative h-2 w-full bg-white/5 rounded-full mb-3 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${meta.porcentaje_completado}%` }}
                  transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-[#D8A93F] to-[#7c5cff] rounded-full shadow-[0_0_10px_rgba(216,169,63,0.3)]" 
                />
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">
                  Progreso: <span className="text-white">{meta.porcentaje_completado}%</span>
                </span>
                <span className="text-sm font-black text-[#D8A93F] tracking-tighter">
                  ${(meta.monto_actual / 1000000).toFixed(1)}M / ${(meta.monto_objetivo / 1000000).toFixed(1)}M
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="glass p-12 rounded-[2.5rem] text-center border-dashed border-white/10 mt-12">
          <span className="text-4xl block mb-4 opacity-20">🎯</span>
          <p className="text-white/30 font-bold uppercase tracking-widest text-[10px]">No tienes metas activas</p>
          <button 
            onClick={() => setShowModal(true)}
            className="mt-4 text-[#D8A93F] font-black text-xs uppercase underline tracking-widest"
          >
            Empieza a ahorrar ahora
          </button>
        </div>
      )}
    </motion.div>
  );
}
