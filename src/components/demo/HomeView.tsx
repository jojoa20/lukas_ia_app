"use client";
import React, { useState, useEffect } from "react";
import AlertModal from "./AlertModal";
import { motion, animate, AnimatePresence } from "framer-motion";

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

  const name = profile?.full_name || "Parcero";
  const score = profile?.finscore_actual || 0;
  const racha = profile?.racha_actual_dias || 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex flex-col p-5 pb-32"
    >
      <div className="flex justify-between items-center mb-6 mt-2">
        <motion.h1 
          className="text-white font-bold text-[28px] leading-tight"
        >
          ¡Qué más, Pana!<br/>
          <span className="text-[#D8A93F]">{name}!</span>
        </motion.h1>

        <div className="flex flex-col items-center ml-4">
          <div className="w-12 h-12 rounded-full border-2 border-[#D8A93F] shadow-[0_0_15px_rgba(216,169,63,0.4)] overflow-hidden bg-[#111827] flex items-center justify-center">
            <svg className="w-6 h-6 text-[#D8A93F]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-[#D8A93F]/20 to-transparent border-l-4 border-[#D8A93F] p-4 rounded-r-2xl mb-6 flex items-center gap-3 backdrop-blur-md">
        <div className="text-2xl">🔥</div>
        <div>
          <div className="text-[#D8A93F] font-bold text-sm">Racha: {racha} Días</div>
          <div className="text-white/70 text-xs">¡Sigue así para subir de nivel!</div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center relative shadow-lg mb-6">
        <div className="relative w-[280px] h-[140px] mb-4 overflow-hidden flex justify-center">
          <svg viewBox="0 0 200 100" className="w-[240px] h-[120px] drop-shadow-[0_0_15px_rgba(216,169,63,0.6)] overflow-visible">
            <path d="M 10 90 A 80 80 0 0 1 190 90" fill="none" stroke="#1a2a5e" strokeWidth="12" strokeLinecap="round" />
            <motion.path 
              d="M 10 90 A 80 80 0 0 1 190 90" 
              fill="none" 
              stroke="#D8A93F" 
              strokeWidth="12" 
              strokeLinecap="round" 
              strokeDasharray="251.2"
              initial={{ strokeDashoffset: 251.2 }}
              animate={{ strokeDashoffset: 251.2 - (251.2 * (score / 10000)) }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-x-0 bottom-2 flex flex-col items-center">
            <span className="text-white/60 text-sm mb-1 uppercase tracking-widest">FinScore</span>
            <span className="text-[#D8A93F] text-[52px] font-black tracking-tighter leading-none">
              <AnimatedNumber value={score} />
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
          <div className="text-[13px] font-bold text-white mb-3">Presupuesto</div>
          <div className="h-1.5 w-full bg-[#111827] rounded-full overflow-hidden mb-2">
            <div className="h-full bg-[#D8A93F] w-[75%]" />
          </div>
          <div className="text-[10px] text-white/50 text-right">75% usado</div>
        </div>
        <div className="bg-white/5 p-4 rounded-2xl border border-white/10" onClick={() => setShowModal(true)}>
          <div className="text-[13px] font-bold text-white mb-3">Alertas</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
            <span className="text-xs text-red-400 font-bold">Gasto Hormiga</span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showModal && <AlertModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </motion.div>
  );
}
