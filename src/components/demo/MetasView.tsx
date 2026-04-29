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
      className="p-8 pb-40 max-w-lg mx-auto min-h-screen relative"
    >
      <header className="flex justify-between items-end mb-12 pt-6">
        <div>
          <p className="text-[#D8A93F] text-[10px] font-black uppercase tracking-[0.4em] mb-2 opacity-80">Sueña en Grande</p>
          <h1 className="text-white font-black text-4xl tracking-tight leading-none text-premium">Tu <span className="text-[#D8A93F]">Futuro</span></h1>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowModal(true)}
          className="bg-[#D8A93F] text-black px-6 py-3 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] gold-glow shadow-[0_15px_30px_rgba(216,169,63,0.3)]"
        >
          + Nueva Meta
        </motion.button>
      </header>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setShowModal(false)}
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="bg-[#0d0d10] p-10 rounded-[3.5rem] w-full max-w-md border border-white/10 relative z-10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden inner-highlight"
            >
              <h2 className="text-3xl font-black text-white mb-4 tracking-tighter text-premium">¿Cuál es el plan? 🎯</h2>
              <p className="text-white/40 text-xs mb-8">Tu yo del futuro te lo va a agradecer infinito.</p>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-2">¿Cómo se llama el sueño?</label>
                  <input 
                    className="w-full bg-white/5 border border-white/10 rounded-3xl p-5 text-white focus:border-[#D8A93F]/50 outline-none transition-all placeholder:text-white/10 font-bold" 
                    placeholder="Ej. Mi primer carro 🚗" 
                    value={nombre} 
                    onChange={e => setNombre(e.target.value)} 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-2">¿Cuántas lucas necesitas?</label>
                  <input 
                    className="w-full bg-white/5 border border-white/10 rounded-3xl p-5 text-white focus:border-[#D8A93F]/50 outline-none transition-all font-black text-lg" 
                    placeholder="$ 0.00" 
                    type="number" 
                    value={monto} 
                    onChange={e => setMonto(e.target.value)} 
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-12">
                <button onClick={() => setShowModal(false)} className="flex-1 py-5 text-white/30 font-black text-[10px] uppercase tracking-[0.3em]">Cancelar</button>
                <button onClick={handleCreate} className="flex-[2] bg-[#D8A93F] text-black py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] gold-glow">¡Hagámoslo realidad!</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {loading ? (
        <div className="space-y-8">
          {[1, 2].map(i => <div key={i} className="h-40 glass-elite rounded-[3.5rem] animate-pulse" />)}
        </div>
      ) : metas.length > 0 ? (
        <div className="space-y-8">
          {metas.map((meta, idx) => (
            <motion.div 
              key={meta.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="glass-elite p-8 rounded-[3.5rem] border-white/5 relative overflow-hidden group inner-highlight shadow-2xl"
            >
              <h3 className="text-2xl font-black text-white mb-2 tracking-tight">{meta.nombre}</h3>
              <p className="text-[10px] text-[#00ff9d] font-black uppercase tracking-[0.2em] mb-6">
                {meta.porcentaje_completado > 80 ? "¡Casi lo tienes, Pana! 🔥" : meta.porcentaje_completado > 40 ? "A mitad de camino, vas firme 🤝" : "Cada peso cuenta, sigue así ✨"}
              </p>
              
              <div className="relative h-3 w-full bg-white/5 rounded-full mb-6 overflow-hidden border border-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${meta.porcentaje_completado}%` }}
                  className="h-full bg-gradient-to-r from-[#D8A93F] to-[#8b5cf6] rounded-full" 
                />
              </div>
              
              <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest text-white/50">
                <span>Ahorrado: <span className="text-white">${(meta.monto_actual / 1000).toFixed(0)}k</span></span>
                <span>Objetivo: <span className="text-white">${(meta.monto_objetivo / 1000).toFixed(0)}k</span></span>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div 
          className="glass-elite p-16 rounded-[4rem] text-center border-dashed border-white/10 mt-12 relative overflow-hidden group"
        >
          <div className="w-24 h-24 bg-[#D8A93F]/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-5xl">🎯</span>
          </div>
          <h3 className="text-2xl font-black text-white mb-4 tracking-tighter">¿A qué le estamos apuntando?</h3>
          <p className="text-white/40 font-bold text-[11px] mb-10 max-w-[220px] mx-auto leading-relaxed uppercase tracking-widest">
            Define tu primera meta y Lukas te ayudará a encontrar la plata que necesitas.
          </p>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-[#D8A93F] text-black px-8 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] gold-glow"
          >
            Configurar Mi Futuro
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
