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
      className="flex flex-col p-8 pb-40 max-w-lg mx-auto"
    >
      {/* Cinematic Header */}
      <div className="flex justify-between items-start mb-12 pt-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[#D8A93F] text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-80">Dashboard Elite</p>
          <h1 className="text-white font-black text-4xl tracking-tight leading-none">
            Hola, <span className="text-premium">{name}</span>
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
          <div className="absolute -inset-1 bg-[#D8A93F]/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </div>

      {/* Iconic FinScore Centerpiece */}
      <div className="relative mb-16 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="glass-elite rounded-[3.5rem] p-10 flex flex-col items-center justify-center border-white/10 relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
        >
          {/* Internal Glows */}
          <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#D8A93F]/40 to-transparent" />
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#D8A93F]/10 blur-[60px] rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#1a2a5e]/20 blur-[60px] rounded-full" />

          <div className="relative w-full aspect-square max-w-[260px] flex items-center justify-center">
            {/* Multi-layered Dial */}
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D8A93F" />
                  <stop offset="50%" stopColor="#f3d48d" />
                  <stop offset="100%" stopColor="#D8A93F" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Outer Ring */}
              <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
              
              {/* Background Track */}
              <circle
                cx="50" cy="50" r="40"
                fill="none"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              
              {/* Active Progress */}
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
                filter="url(#glow)"
                className="drop-shadow-[0_0_15px_rgba(216,169,63,0.6)]"
              />

              {/* Indicator Dot */}
              <motion.circle
                cx="50" cy="10" r="3"
                fill="#fff"
                initial={{ rotate: 0 }}
                animate={{ rotate: (score / 10000) * 360 }}
                style={{ originX: "50px", originY: "50px" }}
                transition={{ duration: 3, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                className="drop-shadow-[0_0_8px_#fff]"
              />
            </svg>
            
            <div className="absolute flex flex-col items-center">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-white/40 text-[11px] font-black uppercase tracking-[0.4em] mb-2"
              >
                FinScore AI
              </motion.span>
              <div className="flex items-baseline">
                <span className="text-white text-7xl font-black tracking-tighter leading-none text-premium">
                  <AnimatedNumber value={score} />
                </span>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-6 px-4 py-1.5 rounded-full glass-elite border-[#00ff9d]/20 bg-[#00ff9d]/5 flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-[#00ff9d] shadow-[0_0_10px_#00ff9d]" />
                <span className="text-[#00ff9d] text-[10px] font-black uppercase tracking-widest">+840 pts esta semana</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Ambient Back Glow */}
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#D8A93F]/5 blur-[100px] rounded-full pointer-events-none" />
      </div>

      {/* Elite Tactical Cards */}
      <div className="grid grid-cols-2 gap-6">
        <motion.div 
          whileHover={{ y: -8, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="glass-elite rounded-[2.5rem] p-7 border-white/5 relative group overflow-hidden inner-highlight"
        >
          <div className="absolute top-0 right-0 p-6 text-2xl opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all">
            🏦
          </div>
          <div className="text-[10px] font-black text-white/40 mb-6 uppercase tracking-[0.2em]">Presupuesto</div>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-black text-white">75</span>
            <span className="text-sm font-bold text-white/20 tracking-widest">%</span>
          </div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden relative">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ duration: 1.5, ease: "circOut", delay: 1 }}
              className="h-full bg-gradient-to-r from-[#D8A93F] to-[#f3d48d] rounded-full shadow-[0_0_15px_rgba(216,169,63,0.3)]" 
            />
          </div>
          <p className="text-[9px] text-white/30 font-bold mt-4 uppercase tracking-widest">Quedan $450k</p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -8, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowModal(true)}
          className="glass-elite rounded-[2.5rem] p-7 border-white/5 relative group overflow-hidden inner-highlight cursor-pointer"
        >
          <div className="absolute top-0 right-0 p-6 text-2xl opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all">
            🧿
          </div>
          <div className="text-[10px] font-black text-white/40 mb-6 uppercase tracking-[0.2em]">LeakBuster</div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-[#ff3b3b] rounded-full pulse-gold shadow-[0_0_15px_#ff3b3b]" />
            <span className="text-xl font-black text-white">3 Fugas</span>
          </div>
          <p className="text-[9px] text-[#ff3b3b] font-black uppercase tracking-widest">Acción requerida</p>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff3b3b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </div>

      {/* Gamification Racha Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-8 glass-elite rounded-3xl p-5 border-[#D8A93F]/10 flex items-center justify-between group cursor-pointer relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#D8A93F]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D8A93F] to-[#f3d48d] flex items-center justify-center text-3xl shadow-[0_10px_20px_rgba(216,169,63,0.4)]">
            🔥
          </div>
          <div>
            <h4 className="text-white font-black text-lg tracking-tight leading-none mb-1">{racha} Días Imbatible</h4>
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Nivel 4: Master del Ahorro</p>
          </div>
        </div>
        <div className="text-white/20 group-hover:text-[#D8A93F] group-hover:translate-x-1 transition-all">
          →
        </div>
      </motion.div>

      <AnimatePresence>
        {showModal && <AlertModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </motion.div>
  );
}
