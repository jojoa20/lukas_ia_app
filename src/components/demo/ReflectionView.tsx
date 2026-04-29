"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ReflectionView({ onBack }: { onBack: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] bg-[#050505] p-8 flex flex-col"
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D8A93F]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#8b5cf6]/5 blur-[120px] rounded-full" />
      </div>

      <header className="relative z-10 pt-12 mb-16">
        <motion.button 
          onClick={onBack}
          className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em] mb-8 hover:text-white transition-colors"
        >
          ← Volver al Dashboard
        </motion.button>
        <p className="text-[#D8A93F] text-[11px] font-black uppercase tracking-[0.5em] mb-3">Reflexión Semanal</p>
        <h1 className="text-white font-black text-5xl tracking-tighter leading-tight text-premium">
          Tu historia esta <span className="text-[#D8A93F]">semana</span>.
        </h1>
      </header>

      <div className="flex-1 space-y-12 relative z-10 overflow-y-auto no-scrollbar pb-20">
        {/* Magic Moment 1: The Insight */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-elite p-10 rounded-[4rem] border-white/5 inner-highlight"
        >
          <div className="flex items-start gap-6 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-3xl">🤖</div>
            <div className="flex-1">
              <h3 className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Análisis de Comportamiento</h3>
              <p className="text-white text-lg font-medium leading-relaxed italic">
                "He notado que tu disciplina fue impecable hasta el jueves. El viernes hubo un repunte en 'Gastos de Ocio'. ¿Fue una recompensa por el trabajo duro? Si es así, disfrútalo. Solo asegúrate de que no se vuelva un patrón automático."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Magic Moment 2: The Silent Win */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="glass-elite p-8 rounded-[3rem] border-[#00ff9d]/20 text-center inner-highlight">
            <span className="text-3xl block mb-4">✨</span>
            <p className="text-[10px] text-white/30 font-black uppercase tracking-widest mb-2">Victoria Silenciosa</p>
            <p className="text-white font-bold text-sm">Evitaste 3 compras impulsivas esta semana.</p>
          </div>
          <div className="glass-elite p-8 rounded-[3rem] border-[#D8A93F]/20 text-center inner-highlight">
            <span className="text-3xl block mb-4">📈</span>
            <p className="text-[10px] text-white/30 font-black uppercase tracking-widest mb-2">Impacto Meta</p>
            <p className="text-white font-bold text-sm">Estás 4 días más cerca de tu meta de viaje.</p>
          </div>
        </motion.div>

        {/* Magic Moment 3: The Projection */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="p-10 rounded-[4rem] border border-white/10 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#D8A93F]/10 via-transparent to-transparent" />
          <h3 className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] mb-6">Proyección Estratégica</h3>
          <p className="text-white text-2xl font-black tracking-tight leading-tight mb-8">
            Si mantienes este ritmo, alcanzaremos tu meta de ahorro en <span className="text-[#D8A93F]">Octubre</span>, dos meses antes de lo previsto.
          </p>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              transition={{ duration: 2, delay: 1.5 }}
              className="h-full bg-[#D8A93F]" 
            />
          </div>
        </motion.div>
      </div>

      <footer className="relative z-10 pt-10 border-t border-white/5">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBack}
          className="w-full bg-white text-black py-6 rounded-3xl font-black text-xs uppercase tracking-[0.4em] shadow-2xl"
        >
          Entendido, Lukas. Vamos por más.
        </motion.button>
      </footer>
    </motion.div>
  );
}
