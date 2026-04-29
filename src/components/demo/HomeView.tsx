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
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplayValue(Math.round(v))
    });
    return controls.stop;
  }, [value]);
  return <>{displayValue}</>;
}

export default function HomeView({ onOpenAlert }: { onOpenAlert?: () => void }) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('/api/profile')
      .then(res => res.json())
      .then(json => {
        if (json.data) setProfile(json.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const name = profile?.full_name?.split(' ')[0] || "Parcero";
  const score = profile?.finscore_actual || 0;
  const racha = profile?.racha_actual_dias || 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="flex flex-col p-6 pb-32 max-w-md mx-auto"
    >
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8 pt-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-white/50 text-sm font-medium tracking-wide uppercase">¡Qué más, Pana!</h2>
          <h1 className="text-white font-black text-3xl tracking-tight">
            Hola, <span className="text-[#D8A93F]">{name}</span>
          </h1>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <div className="w-12 h-12 rounded-2xl border border-white/10 glass flex items-center justify-center overflow-hidden gold-glow">
            <UserButton afterSignOutUrl="/" />
          </div>
        </motion.div>
      </div>

      {/* Streak Banner */}
      <motion.div 
        whileHover={{ y: -2 }}
        className="w-full glass rounded-3xl p-4 mb-8 flex items-center gap-4 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#D8A93F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="w-12 h-12 rounded-2xl bg-[#D8A93F]/20 flex items-center justify-center text-2xl shadow-inner">
          🔥
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-[#D8A93F] font-black text-lg tracking-tighter">{racha} Días de Racha</span>
            <div className="h-1 w-1 rounded-full bg-white/20" />
            <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Nivel 4</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full mt-2 overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(racha / 30) * 100}%` }}
              className="h-full bg-gradient-to-r from-[#D8A93F] to-[#f3c14d] rounded-full"
            />
          </div>
        </div>
      </motion.div>

      {/* Main FinScore Section */}
      <div className="relative mb-8 group">
        <div className="absolute -inset-4 bg-[#D8A93F]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="glass rounded-[40px] p-8 flex flex-col items-center justify-center border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D8A93F]/30 to-transparent" />
          
          <div className="relative w-full aspect-square max-w-[240px] flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 drop-shadow-[0_0_12px_rgba(216,169,63,0.3)]">
              {/* Background Track */}
              <circle
                cx="50" cy="50" r="42"
                fill="none"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="8"
                strokeDasharray="264"
                strokeLinecap="round"
              />
              {/* Progress Track */}
              <motion.circle
                cx="50" cy="50" r="42"
                fill="none"
                stroke="#D8A93F"
                strokeWidth="8"
                strokeDasharray="264"
                initial={{ strokeDashoffset: 264 }}
                animate={{ strokeDashoffset: 264 - (264 * (score / 10000)) }}
                transition={{ duration: 2.5, ease: "circOut" }}
                strokeLinecap="round"
                className="drop-shadow-[0_0_8px_rgba(216,169,63,0.5)]"
              />
            </svg>
            
            <div className="absolute flex flex-col items-center">
              <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Tu FinScore</span>
              <div className="flex items-baseline">
                <span className="text-white text-6xl font-black tracking-tighter leading-none">
                  <AnimatedNumber value={score} />
                </span>
              </div>
              <div className="mt-4 px-3 py-1 rounded-full bg-[#00f291]/10 border border-[#00f291]/20 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00f291] shadow-[0_0_8px_#00f291]" />
                <span className="text-[#00f291] text-[10px] font-bold uppercase tracking-wider">+12% vs ayer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Grid */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="glass rounded-3xl p-5 border-white/5 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-40 transition-opacity">
            📊
          </div>
          <div className="text-xs font-bold text-white/50 mb-4 uppercase tracking-widest">Presupuesto</div>
          <div className="flex items-baseline gap-1 mb-3">
            <span className="text-xl font-black text-white">75</span>
            <span className="text-sm font-bold text-white/30">%</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#D8A93F] to-white/20 w-[75%] rounded-full shadow-[0_0_10px_rgba(216,169,63,0.2)]" />
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowModal(true)}
          className="glass rounded-3xl p-5 border-white/5 relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-40 transition-opacity">
            🚨
          </div>
          <div className="text-xs font-bold text-white/50 mb-4 uppercase tracking-widest">Alertas</div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
            <span className="text-sm font-black text-white leading-none">Fugas</span>
          </div>
          <p className="text-[10px] text-white/40 font-bold uppercase tracking-tight">3 detectadas hoy</p>
        </motion.div>
      </div>

      <AnimatePresence>
        {showModal && <AlertModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </motion.div>
  );
}
