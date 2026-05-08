"use client";
import React, { useState, useEffect } from "react";
import AlertModal from "./AlertModal";
import { motion, animate, AnimatePresence } from "framer-motion";
import { UserButton, SignInButton, useUser } from "@clerk/nextjs";

interface Profile {
  full_name: string;
  finscore_actual: number;
  racha_actual_dias: number;
  balance_actual: number;
}

function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => setDisplayValue(Math.round(v))
    });
    return controls.stop;
  }, [value]);
  return <>{displayValue.toLocaleString("es-CO")}</>;
}

function formatCOP(v: number) {
  return `$${Math.round(v).toLocaleString("es-CO")}`;
}

export default function HomeView({ onOpenAlert }: { onOpenAlert?: () => void }) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    fetch('/api/profile')
      .then(res => res.json())
      .then(json => {
        if (json.data) setProfile(json.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const name = user?.firstName || profile?.full_name || "Parcero";
  const score = profile?.finscore_actual || 0;
  const racha = profile?.racha_actual_dias || 0;
  const balance = profile?.balance_actual || 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex flex-col p-5 pb-32"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-5 mt-2">
        <motion.h1 className="text-white font-bold text-[26px] leading-tight">
          ¡Qué más, Pana!<br/>
          <span className="text-[#D8A93F]">{name}!</span>
        </motion.h1>

        <div className="w-12 h-12 rounded-full border-2 border-[#D8A93F] shadow-[0_0_15px_rgba(216,169,63,0.4)] overflow-hidden bg-[#111827] flex items-center justify-center">
          {isLoaded && isSignedIn ? (
            <UserButton appearance={{ elements: { userButtonAvatarBox: "w-full h-full" } }} />
          ) : (
            <SignInButton mode="modal">
              <button className="w-full h-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#D8A93F]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </button>
            </SignInButton>
          )}
        </div>
      </div>

      {/* SALDO DISPONIBLE — Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="w-full bg-gradient-to-br from-[#D8A93F]/25 via-[#1a2a5e]/60 to-[#111827] border border-[#D8A93F]/30 rounded-3xl p-6 mb-5 relative overflow-hidden shadow-xl"
      >
        {/* Decorative glow */}
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#D8A93F]/20 rounded-full blur-2xl" />
        <p className="text-white/50 text-xs uppercase tracking-[0.2em] font-semibold mb-1">
          Saldo Disponible
        </p>
        {loading ? (
          <div className="h-10 w-48 bg-white/10 rounded-xl animate-pulse mt-1" />
        ) : (
          <div className="flex items-end gap-2">
            <span className="text-[#D8A93F] text-[42px] font-black tracking-tight leading-none">
              {loading ? "—" : <AnimatedNumber value={balance} />}
            </span>
            <span className="text-white/40 text-lg font-semibold mb-1">COP</span>
          </div>
        )}
        <p className="text-white/30 text-[11px] mt-2">
          {profile ? `FinScore ${score}/1000 · Racha ${racha} días 🔥` : "Cargando..."}
        </p>
      </motion.div>

      {/* Racha Badge */}
      {racha > 0 && (
        <div className="w-full bg-gradient-to-r from-[#D8A93F]/20 to-transparent border-l-4 border-[#D8A93F] p-3 rounded-r-2xl mb-5 flex items-center gap-3">
          <div className={`text-xl ${racha >= 7 ? "animate-bounce" : ""}`}>🔥</div>
          <div>
            <div className="text-[#D8A93F] font-bold text-sm">Racha: {racha} Días</div>
            <div className="text-white/60 text-xs">
              {racha >= 7 ? "¡Estás en llamas!" : "¡Sigue así para subir de nivel!"}
            </div>
          </div>
        </div>
      )}

      {/* FinScore gauge */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col items-center relative shadow-lg mb-5">
        <div className="relative w-[260px] h-[130px] mb-2 overflow-hidden flex justify-center">
          <svg viewBox="0 0 200 100" className="w-[220px] h-[110px] drop-shadow-[0_0_15px_rgba(216,169,63,0.6)] overflow-visible">
            <path d="M 10 90 A 80 80 0 0 1 190 90" fill="none" stroke="#1a2a5e" strokeWidth="12" strokeLinecap="round" />
            <motion.path
              d="M 10 90 A 80 80 0 0 1 190 90"
              fill="none"
              stroke="#D8A93F"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="251.2"
              initial={{ strokeDashoffset: 251.2 }}
              animate={{ strokeDashoffset: 251.2 - (251.2 * (score / 1000)) }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-x-0 bottom-2 flex flex-col items-center">
            <span className="text-white/50 text-xs mb-1 uppercase tracking-widest">FinScore</span>
            <span className="text-[#D8A93F] text-[46px] font-black tracking-tighter leading-none">
              <AnimatedNumber value={score} />
            </span>
          </div>
        </div>
      </div>

      {/* Quick stats grid */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
          <div className="text-[12px] font-bold text-white/60 mb-2 uppercase tracking-wide">Presupuesto</div>
          {loading ? (
            <div className="h-3 bg-white/10 rounded animate-pulse" />
          ) : (
            <>
              <div className="h-1.5 w-full bg-[#111827] rounded-full overflow-hidden mb-2">
                <div
                  className="h-full bg-[#D8A93F] rounded-full transition-all"
                  style={{ width: `${Math.min(100, Math.round(((profile as any)?.gastado_cop || 0) / Math.max((profile as any)?.limite_cop || 1, 1) * 100))}%` }}
                />
              </div>
              <div className="text-[10px] text-white/40 text-right">Ver detalles →</div>
            </>
          )}
        </div>
        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 cursor-pointer active:scale-95 transition-transform" onClick={() => setShowModal(true)}>
          <div className="text-[12px] font-bold text-white/60 mb-2 uppercase tracking-wide">Alertas</div>
          {loading ? (
            <div className="h-3 bg-white/10 rounded animate-pulse" />
          ) : (
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 bg-[#D8A93F] rounded-full animate-ping" />
              <span className="text-xs text-[#D8A93F] font-bold">Toca para ver</span>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showModal && <AlertModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </motion.div>
  );
}
