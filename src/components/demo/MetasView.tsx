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
          <p className="text-[#D8A93F] text-[10px] font-black uppercase tracking-[0.4em] mb-2 opacity-80">Vision de Futuro</p>
          <h1 className="text-white font-black text-4xl tracking-tight leading-none text-premium">Tus <span className="text-[#D8A93F]">Metas</span></h1>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowModal(true)}
          className="bg-[#D8A93F] text-black px-6 py-3 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] gold-glow shadow-[0_15px_30px_rgba(216,169,63,0.3)]"
        >
          + Nueva
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
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#0d0d10] p-10 rounded-[3.5rem] w-full max-w-md border border-white/10 relative z-10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden inner-highlight"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#D8A93F]/50 to-transparent" />
              
              <h2 className="text-3xl font-black text-white mb-8 tracking-tighter text-premium">Nueva Meta 🎯</h2>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-2">Objetivo</label>
                  <input 
                    className="w-full bg-white/5 border border-white/10 rounded-3xl p-5 text-white focus:border-[#D8A93F]/50 outline-none transition-all placeholder:text-white/10 font-bold" 
                    placeholder="Ej. Casa de campo" 
                    value={nombre} 
                    onChange={e => setNombre(e.target.value)} 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-2">Presupuesto</label>
                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 font-bold">$</span>
                    <input 
                      className="w-full bg-white/5 border border-white/10 rounded-3xl p-5 pl-10 text-white focus:border-[#D8A93F]/50 outline-none transition-all font-black text-lg" 
                      placeholder="0.00" 
                      type="number" 
                      value={monto} 
                      onChange={e => setMonto(e.target.value)} 
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-12">
                <button 
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-5 text-white/30 font-black text-[10px] uppercase tracking-[0.3em] hover:text-white transition-colors"
                >
                  Cancelar
                </button>
                <button 
                  onClick={handleCreate}
                  className="flex-[2] bg-[#D8A93F] text-black py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] gold-glow shadow-[0_20px_40px_rgba(216,169,63,0.3)]"
                >
                  Crear Meta
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {loading ? (
        <div className="space-y-8">
          {[1, 2].map(i => (
            <div key={i} className="h-40 glass-elite rounded-[3.5rem] animate-pulse" />
          ))}
        </div>
      ) : metas.length > 0 ? (
        <div className="space-y-8">
          {metas.map((meta, idx) => (
            <motion.div 
              key={meta.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-elite p-8 rounded-[3.5rem] border-white/5 relative overflow-hidden group inner-highlight shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-8 text-3xl opacity-5 group-hover:opacity-20 group-hover:rotate-12 transition-all">
                ✨
              </div>
              
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-black text-white tracking-tight leading-none mb-2">{meta.nombre}</h3>
                  <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.2em]">Meta Estratégica</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-[#D8A93F] tracking-tighter leading-none block">{meta.porcentaje_completado}%</span>
                  <span className="text-[9px] text-[#D8A93F]/50 font-black uppercase tracking-widest">Logrado</span>
                </div>
              </div>
              
              <div className="relative h-3 w-full bg-white/5 rounded-full mb-6 overflow-hidden border border-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${meta.porcentaje_completado}%` }}
                  transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
                  className="h-full bg-gradient-to-r from-[#D8A93F] via-[#f3d48d] to-[#8b5cf6] rounded-full relative" 
                >
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-white/30" />
                  <div className="absolute inset-0 shadow-[0_0_20px_rgba(216,169,63,0.4)]" />
                </motion.div>
              </div>
              
              <div className="flex justify-between items-center bg-white/5 p-4 rounded-3xl border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#D8A93F]/20 flex items-center justify-center text-sm">💰</div>
                  <span className="text-[11px] font-black text-white/80 tracking-tight">${(meta.monto_actual / 1000000).toFixed(2)}M</span>
                </div>
                <div className="w-[1px] h-4 bg-white/10" />
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-black text-white/30 tracking-tight">Objetivo:</span>
                  <span className="text-[11px] font-black text-white/80 tracking-tight">${(meta.monto_objetivo / 1000000).toFixed(2)}M</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-elite p-16 rounded-[4rem] text-center border-dashed border-white/10 mt-20 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#D8A93F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="w-24 h-24 bg-[#D8A93F]/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-float">
            <span className="text-5xl">🎯</span>
          </div>
          <h3 className="text-2xl font-black text-white mb-3 tracking-tighter">Define tu Destino</h3>
          <p className="text-white/40 font-bold uppercase tracking-widest text-[10px] mb-10 max-w-[200px] mx-auto leading-relaxed">Las grandes fortunas empiezan con metas claras.</p>
          <button 
            onClick={() => setShowModal(true)}
            className="text-[#D8A93F] font-black text-[11px] uppercase tracking-[0.3em] underline-offset-8 underline"
          >
            Configurar Primera Meta
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
