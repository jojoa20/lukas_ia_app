"use client";
import React, { useState, useEffect } from "react";
import AlertModal from "./AlertModal";
import { motion, animate, AnimatePresence } from "framer-motion";
import { UserButton } from "@clerk/nextjs";

interface Profile {
  full_name: string;
  finscore_actual: number;
  racha_actual_dias: number;
}

function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplayValue(Math.round(v))
    });
    return controls.stop;
  }, [value]);
  return <>{displayValue}</>;
}

export default function HomeView() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentNudge, setCurrentNudge] = useState(0);

  const nudges = [
    "Tu consistencia está fortaleciendo tu salud financiera.",
    "He notado un patrón positivo en tus ahorros esta semana.",
    "Mantener esta racha de {racha} días está optimizando tu FinScore.",
    "Tu meta de viaje está progresando según lo planeado.",
    "He detectado un ligero aumento en gastos variables. ¿Quieres revisarlo?",
    "Tu disciplina actual es la base de tu libertad futura."
  ];

  useEffect(() => {
    fetch('/api/profile')
      .then(res => res.json())
      .then(json => {
        if (json.data) setProfile(json.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    const interval = setInterval(() => {
      setCurrentNudge(prev => (prev + 1) % nudges.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const name = profile?.full_name?.split(' ')[0] || "Hola";
  const score = profile?.finscore_actual || 0;
  const racha = profile?.racha_actual_dias || 0;

  const displayNudge = nudges[currentNudge].replace("{racha}", racha.toString());

  return (
    <motion.div 
      className="flex flex-col p-8 pb-40 max-w-lg mx-auto"
    >
      {/* Sophisticated Header */}
      <div className="flex justify-between items-start mb-10 pt-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] opacity-50" />
            <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Sistemas Activos</p>
          </div>
          <h1 className="text-white font-black text-4xl tracking-tight leading-tight">
            Hola, <span className="text-premium">{name}</span>.<br/>
            <span className="text-white/30 text-lg font-bold tracking-tight">Tu estado financiero es estable.</span>
          </h1>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="w-14 h-14 rounded-2xl border border-white/5 glass-elite flex items-center justify-center overflow-hidden inner-highlight"
        >
          <UserButton appearance={{ elements: { avatarBox: "w-10 h-10" } }} />
        </motion.div>
      </div>

      {/* Ambient AI Nudge */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentNudge}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          className="mb-12 px-6 py-4 glass-elite rounded-[2rem] border-white/5 flex items-center gap-5"
        >
          <div className="w-2 h-2 rounded-full bg-[#D8A93F]/30" />
          <p className="text-white/60 text-[13px] font-medium leading-relaxed tracking-tight">
            {displayNudge}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Iconic FinScore Centerpiece */}
      <div className="relative mb-14 px-2">
        <motion.div 
          className="glass-elite rounded-[3.5rem] p-12 flex flex-col items-center justify-center border-white/5 relative overflow-hidden shadow-[0_60px_100px_rgba(0,0,0,0.9)] inner-highlight"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
          
          <div className="relative w-full aspect-square max-w-[220px] flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="8" strokeLinecap="round" />
              
              <motion.circle
                cx="50" cy="50" r="40"
                fill="none"
                stroke="#D8A93F"
                strokeWidth="8"
                strokeDasharray="251.2"
                initial={{ strokeDashoffset: 251.2 }}
                animate={{ strokeDashoffset: 251.2 - (251.2 * (score / 10000)) }}
                transition={{ duration: 3, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                strokeLinecap="round"
                className="drop-shadow-[0_0_12px_rgba(216,169,63,0.3)]"
              />
            </svg>
            
            <div className="absolute flex flex-col items-center text-center">
              <span className="text-white/20 text-[9px] font-black uppercase tracking-[0.5em] mb-2">FinScore Actual</span>
              <span className="text-white text-7xl font-black tracking-tighter leading-none text-premium">
                <AnimatedNumber value={score} />
              </span>
              <p className="text-[#D8A93F]/60 text-[10px] font-black uppercase tracking-[0.3em] mt-6">
                Nivel de Inteligencia
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Strategic Grid */}
      <div className="grid grid-cols-2 gap-6">
        <div className="glass-elite rounded-[2.5rem] p-8 border-white/5 inner-highlight group">
          <p className="text-[10px] font-black text-white/20 mb-6 uppercase tracking-[0.3em]">Presupuesto</p>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-black text-white">75%</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div animate={{ width: "75%" }} className="h-full bg-white/20 group-hover:bg-[#D8A93F] transition-colors" />
          </div>
          <p className="text-[10px] text-white/20 font-bold mt-4 uppercase tracking-widest">Ejecución Óptima</p>
        </div>

        <div 
          onClick={() => setShowModal(true)}
          className="glass-elite rounded-[2.5rem] p-8 border-white/5 inner-highlight cursor-pointer group"
        >
          <p className="text-[10px] font-black text-white/20 mb-6 uppercase tracking-[0.3em]">Alertas</p>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-black text-white">3</span>
            <div className="w-2 h-2 bg-[#ff3b3b] rounded-full animate-pulse" />
          </div>
          <p className="text-[10px] text-[#ff3b3b]/60 font-black uppercase tracking-widest">Revisión Pendiente</p>
        </div>
      </div>

      {/* Consistency Bar */}
      <div className="mt-8 glass-elite rounded-3xl p-6 border-white/5 flex items-center justify-between group relative overflow-hidden">
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-2xl shadow-inner group-hover:text-[#D8A93F] transition-colors">
            🔥
          </div>
          <div>
            <h4 className="text-white font-black text-lg tracking-tight leading-none mb-1">{racha} Días de Disciplina</h4>
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.2em]">Consistencia detectada</p>
          </div>
        </div>
        <div className="w-2 h-2 rounded-full bg-[#D8A93F] opacity-20" />
      </div>

      <AnimatePresence>
        {showModal && <AlertModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </motion.div>
  );
}
