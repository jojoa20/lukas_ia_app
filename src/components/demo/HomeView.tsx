"use client";
import React, { useState, useEffect } from "react";
import AlertModal from "./AlertModal";
import { motion, animate, AnimatePresence } from "framer-motion";
import { UserButton } from "@clerk/nextjs";
import { getSystemContext } from "@/lib/supabase/actions";

interface SystemContext {
  score: number;
  leaks: { count: number; amount: number; recent: string[] };
  meta: { nombre: string; progreso: number } | null;
  user_name: string;
}

function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    const controls = animate(0, value, {
      duration: 3,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplayValue(Math.round(v))
    });
    return controls.stop;
  }, [value]);
  return <>{displayValue}</>;
}

export default function HomeView({ onOpenReflection }: { onOpenReflection?: () => void }) {
  const [context, setContext] = useState<SystemContext | null>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentNudge, setCurrentNudge] = useState(0);

  useEffect(() => {
    getSystemContext()
      .then(res => {
        setContext(res as any);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    const interval = setInterval(() => {
      setCurrentNudge(prev => (prev + 1) % 3);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const nudges = [
    context?.leaks.count && context.leaks.count > 0 
      ? `He detectado ${context.leaks.count} fugas de capital esta semana. ¿Hablamos de esto?` 
      : "Tu ritmo de gasto demuestra una consciencia excepcional hoy.",
    context?.meta 
      ? `Tu meta '${context.meta.nombre}' está al ${context.meta.progreso.toFixed(0)}%. Vas por buen camino.`
      : "No tienes metas activas. Definir una intención daría mayor propósito a tu capital.",
    "Tu FinScore actual es un reflejo de tu disciplina comportamental."
  ];

  const name = context?.user_name?.split(' ')[0] || "Hola";
  const score = context?.score || 0;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col p-8 pb-40 max-w-lg mx-auto"
    >
      {/* System Cohesion Header */}
      <div className="flex justify-between items-start mb-14 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] opacity-40 shadow-[0_0_8px_#00ff9d]" />
            <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.5em]">Inteligencia Sistémica Activa</p>
          </div>
          <h1 className="text-white font-black text-4xl tracking-tight leading-tight">
            Hola, <span className="text-premium">{name}</span>.
          </h1>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="w-14 h-14 rounded-2xl border border-white/5 glass-elite flex items-center justify-center overflow-hidden"
        >
          <UserButton appearance={{ elements: { avatarBox: "w-10 h-10" } }} />
        </motion.div>
      </div>

      {/* Insight Continuity - Context-Aware Nudges */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentNudge}
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 1 }}
          className="mb-14 px-8 py-6 glass-elite rounded-[2.5rem] border-white/5 flex flex-col gap-3 relative overflow-hidden"
        >
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D8A93F]/20" />
            <p className="text-white/50 text-[12px] font-medium leading-relaxed tracking-tight">
              {nudges[currentNudge]}
            </p>
          </div>
          <div className="flex items-center gap-2 mt-1 ml-5">
             <span className="text-[8px] text-white/10 font-black uppercase tracking-[0.3em]">Memoria Inteligente</span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Iconic FinScore - Systemic Health Dial */}
      <div className="relative mb-16 px-2">
        <motion.div 
          className="glass-elite rounded-[4.5rem] p-14 flex flex-col items-center justify-center border-white/5 relative overflow-hidden shadow-2xl inner-highlight"
        >
          <div className="relative w-full aspect-square max-w-[240px] flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.01)" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="6" strokeLinecap="round" />
              
              <motion.circle
                cx="50" cy="50" r="42"
                fill="none"
                stroke="#D8A93F"
                strokeWidth="6"
                strokeDasharray="263.8"
                initial={{ strokeDashoffset: 263.8 }}
                animate={{ strokeDashoffset: 263.8 - (263.8 * (score / 10000)) }}
                transition={{ duration: 4, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
                strokeLinecap="round"
                className="drop-shadow-[0_0_15px_rgba(216,169,63,0.15)]"
              />
            </svg>
            
            <div className="absolute flex flex-col items-center text-center">
              <span className="text-white/10 text-[8px] font-black uppercase tracking-[0.6em] mb-3">Ritmo de Salud</span>
              <span className="text-white text-7xl font-black tracking-tighter leading-none text-premium">
                <AnimatedNumber value={score} />
              </span>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-[#00ff9d] opacity-40" />
                <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.4em]">Propagación de Datos</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Reduced Silos Grid - Systemic Connections */}
      <div className="grid grid-cols-2 gap-8">
        <div className="glass-elite rounded-[3rem] p-10 border-white/5 inner-highlight">
          <p className="text-[9px] font-black text-white/10 mb-6 uppercase tracking-[0.5em]">Meta Activa</p>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-black text-white">
              {context?.meta ? `${context.meta.progreso.toFixed(0)}%` : "0%"}
            </span>
          </div>
          <p className="text-[9px] text-white/20 font-black uppercase tracking-widest leading-none truncate w-full">
            {context?.meta?.nombre || "Sin Meta Activa"}
          </p>
        </div>

        <div 
          onClick={() => setShowModal(true)}
          className="glass-elite rounded-[3rem] p-10 border-white/5 inner-highlight cursor-pointer group"
        >
          <p className="text-[9px] font-black text-white/10 mb-6 uppercase tracking-[0.5em]">Estado de Fugas</p>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-black text-white group-hover:text-[#D8A93F] transition-colors">
              {context?.leaks.count || 0}
            </span>
          </div>
          <p className="text-[9px] text-white/20 font-black uppercase tracking-widest leading-none">Fugas Detectadas</p>
        </div>
      </div>

      {/* Narrative Continuity Card */}
      <div 
        onClick={onOpenReflection}
        className="mt-10 glass-elite rounded-[3.5rem] p-10 border-white/5 flex items-center justify-between group cursor-pointer hover:bg-white/[0.01] transition-all"
      >
        <div className="flex items-center gap-8">
          <div className="w-14 h-14 rounded-2xl bg-white/[0.02] flex items-center justify-center opacity-40 group-hover:opacity-100 transition-all border border-white/5">
            📊
          </div>
          <div>
            <h4 className="text-white font-black text-xl tracking-tight leading-none mb-2">Continuidad del Hábito</h4>
            <p className="text-white/10 text-[9px] font-bold uppercase tracking-[0.4em]">Explorar tu narrativa financiera</p>
          </div>
        </div>
        <div className="text-white/5 group-hover:text-white/20 transition-colors">→</div>
      </div>

      <AnimatePresence>
        {showModal && <AlertModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </motion.div>
  );
}
