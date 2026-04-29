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
    "Parce, hoy vas volando. ¡Ese FinScore pide pista! 🚀",
    "Ojo con el café de la tarde, Lukas está vigilando esos gastos hormiga 👀",
    "¡Racha de {racha} días! Tu yo del futuro te va a invitar a un pola 🍻",
    "Meta de viaje: Estás a un par de ahorros de ver el mar 🌊",
    "¿Ese gasto de ayer? Pesado, pero hoy es un nuevo comienzo ✨",
    "Lukas dice: Tu disciplina es de otro planeta hoy 🛸"
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
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const name = profile?.full_name?.split(' ')[0] || "Parcero";
  const score = profile?.finscore_actual || 0;
  const racha = profile?.racha_actual_dias || 0;

  const displayNudge = nudges[currentNudge].replace("{racha}", racha.toString());

  return (
    <motion.div 
      className="flex flex-col p-8 pb-40 max-w-lg mx-auto"
    >
      {/* Emotional Header */}
      <div className="flex justify-between items-start mb-10 pt-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse" />
            <p className="text-[#D8A93F] text-[10px] font-black uppercase tracking-[0.3em] opacity-80">Lukas está activo</p>
          </div>
          <h1 className="text-white font-black text-4xl tracking-tight leading-tight">
            ¡Qué más, <span className="text-premium">{name}</span>!<br/>
            <span className="text-white/40 text-xl font-bold">¿Cómo va esa vuelta?</span>
          </h1>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <div className="w-14 h-14 rounded-2xl border border-white/10 glass-elite flex items-center justify-center overflow-hidden inner-highlight">
            <UserButton appearance={{ elements: { avatarBox: "w-10 h-10" } }} />
          </div>
        </motion.div>
      </div>

      {/* Proactive AI Nudge */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentNudge}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mb-10 px-4 py-3 glass-elite rounded-2xl border-white/5 flex items-center gap-4 group"
        >
          <div className="text-xl">💡</div>
          <p className="text-white/80 text-xs font-medium leading-relaxed italic">
            {displayNudge}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Iconic FinScore Centerpiece */}
      <div className="relative mb-14 px-2">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-elite rounded-[3.5rem] p-10 flex flex-col items-center justify-center border-white/10 relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
        >
          {/* AI Presence Pulse */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#D8A93F]/5 to-transparent pointer-events-none" />
          
          <div className="relative w-full aspect-square max-w-[240px] flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D8A93F" />
                  <stop offset="50%" stopColor="#f3d48d" />
                  <stop offset="100%" stopColor="#D8A93F" />
                </linearGradient>
              </defs>

              <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="10" strokeLinecap="round" />
              
              <motion.circle
                cx="50" cy="50" r="40"
                fill="none"
                stroke="url(#scoreGradient)"
                strokeWidth="10"
                strokeDasharray="251.2"
                initial={{ strokeDashoffset: 251.2 }}
                animate={{ strokeDashoffset: 251.2 - (251.2 * (score / 10000)) }}
                transition={{ duration: 3, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                strokeLinecap="round"
                className="drop-shadow-[0_0_15px_rgba(216,169,63,0.5)]"
              />
            </svg>
            
            <div className="absolute flex flex-col items-center text-center">
              <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] mb-1">Nivel de Poder</span>
              <div className="flex items-baseline">
                <span className="text-white text-6xl font-black tracking-tighter leading-none text-premium">
                  <AnimatedNumber value={score} />
                </span>
              </div>
              <p className="text-[#D8A93F] text-[9px] font-black uppercase tracking-widest mt-4">
                {score > 8000 ? "¡Eres una leyenda! 🏆" : score > 5000 ? "Vas por buen camino 🔥" : "Lukas te ayuda a subir 📈"}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Emotional Action Grid */}
      <div className="grid grid-cols-2 gap-6">
        <motion.div 
          whileHover={{ y: -5 }}
          className="glass-elite rounded-[2.5rem] p-7 border-white/5 relative group overflow-hidden inner-highlight"
        >
          <div className="text-[10px] font-black text-white/40 mb-4 uppercase tracking-[0.2em]">Billetera</div>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-black text-white">75%</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div animate={{ width: "75%" }} className="h-full bg-[#D8A93F]" />
          </div>
          <p className="text-[9px] text-white/30 font-bold mt-4 uppercase tracking-widest">Aún queda para el finde</p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          onClick={() => setShowModal(true)}
          className="glass-elite rounded-[2.5rem] p-7 border-[#ff3b3b]/10 relative group overflow-hidden inner-highlight cursor-pointer"
        >
          <div className="text-[10px] font-black text-[#ff3b3b]/50 mb-4 uppercase tracking-[0.2em]">LeakBuster</div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xl font-black text-white">¡Pilas!</span>
          </div>
          <p className="text-[9px] text-[#ff3b3b] font-black uppercase tracking-widest leading-tight">Tienes 3 fugas de plata</p>
          <div className="mt-3 w-6 h-6 rounded-full bg-[#ff3b3b]/20 flex items-center justify-center text-[10px]">🚨</div>
        </motion.div>
      </div>

      {/* Gamification Streak */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="mt-8 glass-elite rounded-3xl p-6 border-[#D8A93F]/10 flex items-center justify-between group relative overflow-hidden"
      >
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-[#D8A93F] flex items-center justify-center text-3xl shadow-[0_10px_20px_rgba(216,169,63,0.3)] group-hover:animate-bounce">
            🔥
          </div>
          <div>
            <h4 className="text-white font-black text-lg tracking-tight leading-none mb-1">{racha} Días Imbatible</h4>
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">¡No dejes que se apague!</p>
          </div>
        </div>
        <div className="text-[#D8A93F] font-black text-xs">GOAL 🎯</div>
      </motion.div>

      <AnimatePresence>
        {showModal && <AlertModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </motion.div>
  );
}
