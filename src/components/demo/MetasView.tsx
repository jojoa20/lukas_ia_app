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
          <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em] mb-3">Planificación de Activos</p>
          <h1 className="text-white font-black text-4xl tracking-tight leading-none text-premium">Tu <span className="text-[#D8A93F]">Estrategia</span></h1>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowModal(true)}
          className="bg-white text-black px-7 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-xl"
        >
          Definir Meta
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
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-[#0d0d10] p-12 rounded-[4rem] w-full max-w-md border border-white/5 relative z-10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden inner-highlight"
            >
              <h2 className="text-3xl font-black text-white mb-3 tracking-tighter text-premium">Nueva Iniciativa</h2>
              <p className="text-white/30 text-sm mb-10 font-medium">Define tus objetivos con precisión estratégica.</p>
              
              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[9px] font-black text-white/20 uppercase tracking-[0.5em] ml-2">Nombre del Objetivo</label>
                  <input 
                    className="w-full bg-white/5 border border-white/5 rounded-3xl p-6 text-white focus:border-white/20 outline-none transition-all placeholder:text-white/5 font-bold" 
                    placeholder="Ej. Fondo de Inversión" 
                    value={nombre} 
                    onChange={e => setNombre(e.target.value)} 
                  />
                </div>
                
                <div className="space-y-3">
                  <label className="text-[9px] font-black text-white/20 uppercase tracking-[0.5em] ml-2">Capital Necesario</label>
                  <input 
                    className="w-full bg-white/5 border border-white/5 rounded-3xl p-6 text-white focus:border-white/20 outline-none transition-all font-black text-xl" 
                    placeholder="$ 0.00" 
                    type="number" 
                    value={monto} 
                    onChange={e => setMonto(e.target.value)} 
                  />
                </div>
              </div>

              <div className="flex gap-6 mt-12">
                <button onClick={() => setShowModal(false)} className="flex-1 py-5 text-white/20 font-black text-[10px] uppercase tracking-[0.4em] hover:text-white transition-colors">Cancelar</button>
                <button onClick={handleCreate} className="flex-[2] bg-white text-black py-5 rounded-3xl font-black text-xs uppercase tracking-[0.3em] shadow-lg">Confirmar Estrategia</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {loading ? (
        <div className="space-y-8">
          {[1, 2].map(i => <div key={i} className="h-44 glass-elite rounded-[4rem] animate-pulse" />)}
        </div>
      ) : metas.length > 0 ? (
        <div className="space-y-8">
          {metas.map((meta, idx) => (
            <motion.div 
              key={meta.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-elite p-10 rounded-[4rem] border-white/5 relative overflow-hidden group inner-highlight shadow-2xl"
            >
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h3 className="text-2xl font-black text-white tracking-tight leading-tight mb-2">{meta.nombre}</h3>
                  <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.3em]">
                    {meta.porcentaje_completado > 80 ? "Fase Final Alcanzada" : meta.porcentaje_completado > 40 ? "Progreso Significativo" : "Etapa Inicial de Crecimiento"}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-[#D8A93F] tracking-tighter block">{meta.porcentaje_completado}%</span>
                </div>
              </div>
              
              <div className="relative h-2 w-full bg-white/5 rounded-full mb-8 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${meta.porcentaje_completado}%` }}
                  transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full bg-gradient-to-r from-[#D8A93F] to-[#f3d48d] rounded-full" 
                />
              </div>
              
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                <span>Acumulado: <span className="text-white">${(meta.monto_actual / 1000).toFixed(0)}k</span></span>
                <div className="w-[1px] h-3 bg-white/10" />
                <span>Objetivo: <span className="text-white">${(meta.monto_objetivo / 1000).toFixed(0)}k</span></span>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div 
          className="glass-elite p-20 rounded-[5rem] text-center border border-white/5 mt-10 relative overflow-hidden"
        >
          <div className="w-20 h-20 bg-white/5 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 border border-white/5">
            <span className="text-3xl">🔭</span>
          </div>
          <h3 className="text-2xl font-black text-white mb-4 tracking-tighter">Visión a Largo Plazo</h3>
          <p className="text-white/20 font-bold text-[11px] mb-12 max-w-[240px] mx-auto leading-relaxed uppercase tracking-[0.3em]">
            Comienza a estructurar tus metas financieras. Lukas analizará tu capacidad de ahorro para optimizar cada movimiento.
          </p>
          <button 
            onClick={() => setShowModal(true)}
            className="text-white font-black text-[10px] uppercase tracking-[0.5em] border-b border-white/20 pb-2 hover:border-white transition-colors"
          >
            Configurar Primera Meta
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
