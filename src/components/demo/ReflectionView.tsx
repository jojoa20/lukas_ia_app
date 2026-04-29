"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ReflectionView({ onBack }: { onBack: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="fixed inset-0 z-[100] bg-[#050507] p-10 flex flex-col overflow-y-auto no-scrollbar"
    >
      {/* Therapeutic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#D8A93F] blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.02, 0.04, 0.02] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#8b5cf6] blur-[150px] rounded-full" 
        />
      </div>

      <header className="relative z-10 pt-16 mb-24">
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={onBack}
          className="text-white/10 text-[10px] font-black uppercase tracking-[0.6em] mb-12 hover:text-white/40 transition-colors"
        >
          ← Regresar al espacio de calma
        </motion.button>
        <p className="text-[#D8A93F]/40 text-[10px] font-black uppercase tracking-[0.6em] mb-4">Análisis Reflexivo</p>
        <h1 className="text-white font-black text-5xl tracking-tighter leading-[1.1] text-premium">
          Tu ritmo financiero,<br/>
          <span className="text-white/20 italic">en perspectiva.</span>
        </h1>
      </header>

      <div className="flex-1 space-y-20 relative z-10 pb-32">
        {/* The Thoughtful Insight */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1.2 }}
          className="glass-elite p-12 rounded-[4.5rem] border-white/5 inner-highlight"
        >
          <div className="flex items-start gap-8 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.02] flex items-center justify-center text-xl grayscale opacity-20">🤖</div>
            <div className="flex-1">
              <h3 className="text-white/20 text-[9px] font-black uppercase tracking-[0.5em] mb-5">Observación Silenciosa</h3>
              <p className="text-white/80 text-[17px] leading-relaxed font-medium">
                "Esta semana, tu comportamiento financiero ha mostrado una calma notable. He observado una reducción del 15% en gastos no planificados, lo que sugiere una mayor intención en cada decisión. Es un ritmo sostenible que protege tu visión a largo plazo."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Behavioral Wins */}
        <div className="grid grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 1.5 }}
            className="glass-elite p-10 rounded-[3.5rem] border-white/5 text-center inner-highlight"
          >
            <span className="text-2xl block mb-6 opacity-30">✨</span>
            <p className="text-[9px] text-white/20 font-black uppercase tracking-widest mb-3">Consciencia</p>
            <p className="text-white/60 font-bold text-xs leading-relaxed">Evitaste decisiones impulsivas recurrentes.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 1.5 }}
            className="glass-elite p-10 rounded-[3.5rem] border-white/5 text-center inner-highlight"
          >
            <span className="text-2xl block mb-6 opacity-30">🛰️</span>
            <p className="text-[9px] text-white/20 font-black uppercase tracking-widest mb-3">Progreso</p>
            <p className="text-white/60 font-bold text-xs leading-relaxed">Tu FinScore se estabilizó en un nivel superior.</p>
          </motion.div>
        </div>

        {/* The Calm Projection */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 1.2 }}
          className="p-12 rounded-[4.5rem] border border-white/5 relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent" />
          <h3 className="text-white/20 text-[9px] font-black uppercase tracking-[0.5em] mb-8">Trayectoria Proyectada</h3>
          <p className="text-white/60 text-xl font-medium tracking-tight leading-relaxed mb-12">
            Manteniendo esta intención, tu meta principal se alcanzará con un <span className="text-white">margen de seguridad</span> de 42 días adicionales.
          </p>
          <div className="h-1.5 w-full bg-white/[0.03] rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              transition={{ duration: 3, delay: 3, ease: [0.22, 1, 0.36, 1] }}
              className="h-full bg-white/10" 
            />
          </div>
        </motion.div>
      </div>

      <footer className="relative z-10 pt-16 pb-12 mt-auto border-t border-white/[0.03]">
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={onBack}
          className="w-full bg-white/[0.03] text-white/30 border border-white/5 py-7 rounded-[2.5rem] font-black text-[10px] uppercase tracking-[0.5em] hover:text-white hover:bg-white/[0.05] transition-all"
        >
          Continuar con intención
        </motion.button>
      </footer>
    </motion.div>
  );
}
