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

interface BudgetSummary {
  total_presupuestado: number;
  total_gastado: number;
  porcentaje_total: number;
}

interface LeakData {
  total_hormiga: number;
  cantidad_clusters: number;
  mensaje_ia: string;
}

interface Transaction {
  tipo: "ingreso" | "gasto";
  monto: number;
  categoria: string;
  es_gasto_hormiga: boolean;
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
  const [budget, setBudget] = useState<BudgetSummary | null>(null);
  const [leakData, setLeakData] = useState<LeakData | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    Promise.all([
      fetch('/api/profile').then(r => r.json()).catch(() => ({ data: null })),
      fetch('/api/budgets/summary').then(r => r.json()).catch(() => ({ data: null })),
      fetch('/api/alerts/hormiga?days=30').then(r => r.json()).catch(() => ({ data: null })),
      fetch('/api/transactions?limit=100').then(r => r.json()).catch(() => ({ data: [] })),
    ]).then(([profileJson, budgetJson, leakJson, txJson]) => {
      if (profileJson.data) setProfile(profileJson.data);
      if (budgetJson.data) setBudget(budgetJson.data);
      if (leakJson.data) setLeakData(leakJson.data);
      if (txJson.data) setTransactions(txJson.data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const name = user?.firstName || profile?.full_name || "Parcero";
  const score = profile?.finscore_actual || 0;
  const racha = profile?.racha_actual_dias || 0;
  const balance = profile?.balance_actual || 0;

  // Calculos para el diagrama visual — mapea categorías DB a grupos de display
  const FIJOS_CATS = ['vivienda', 'servicios', 'educacion', 'Fijos'];
  const SALIDAS_CATS = ['alimentacion', 'transporte', 'entretenimiento', 'salud', 'deporte', 'ropa', 'otro', 'Salidas'];
  const SUSC_CATS = ['tecnologia', 'Susc.'];
  const gastos = transactions.filter(t => t.tipo === 'gasto');
  const txFijos = gastos.filter(t => FIJOS_CATS.includes(t.categoria) && !t.es_gasto_hormiga).reduce((s, t) => s + t.monto, 0);
  const txSalidas = gastos.filter(t => SALIDAS_CATS.includes(t.categoria) && !t.es_gasto_hormiga).reduce((s, t) => s + t.monto, 0);
  const txSusc = gastos.filter(t => SUSC_CATS.includes(t.categoria) && !t.es_gasto_hormiga).reduce((s, t) => s + t.monto, 0);
  const txHormigas = gastos.filter(t => t.es_gasto_hormiga).reduce((s, t) => s + t.monto, 0);
  const txTotal = Math.max(txFijos + txSalidas + txSusc + txHormigas, 1);

  const presTotal = budget?.total_presupuestado || 1;

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
              stroke={score >= 801 ? "#D8A93F" : score >= 601 ? "#22c55e" : score >= 401 ? "#eab308" : score >= 201 ? "#f97316" : "#ef4444"}
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
            <span className="text-[46px] font-black tracking-tighter leading-none" style={{ color: score >= 801 ? "#D8A93F" : score >= 601 ? "#22c55e" : score >= 401 ? "#eab308" : score >= 201 ? "#f97316" : "#ef4444" }}>
              <AnimatedNumber value={score} />
            </span>
          </div>
        </div>
        <span className="text-xs font-bold uppercase tracking-wider mt-1" style={{ color: score >= 801 ? "#D8A93F" : score >= 601 ? "#22c55e" : score >= 401 ? "#eab308" : score >= 201 ? "#f97316" : "#ef4444" }}>
          {score >= 801 ? "⭐ Excelente" : score >= 601 ? "🟢 Saludable" : score >= 401 ? "🟡 Estable" : score >= 201 ? "🟠 En riesgo" : "🔴 Crítico"}
        </span>
      </div>

      {/* DIAGRAMA DE PRESUPUESTO Y HORMIGAS */}
      <div className="bg-white/5 p-5 rounded-2xl border border-white/10 mb-5 relative overflow-hidden shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="text-[12px] font-bold text-white/60 uppercase tracking-wide">Desglose de Gastos</div>
          {leakData && leakData.total_hormiga > 0 && (
            <button onClick={() => setShowModal(true)} className="text-[10px] bg-[#F36E53]/20 text-[#F36E53] px-2 py-1 rounded font-bold animate-pulse">
              {leakData.cantidad_clusters} Patrones 🐜
            </button>
          )}
        </div>
        
        {loading ? (
          <div className="space-y-2">
            <div className="h-4 bg-white/10 rounded animate-pulse" />
            <div className="h-3 bg-white/10 rounded animate-pulse w-3/4" />
          </div>
        ) : txTotal > 1 ? (
          <>
            {/* Barra segmentada por categoria */}
            <div className="h-4 w-full bg-[#111827] rounded-full overflow-hidden mb-3 flex drop-shadow-md border border-white/5">
              {[
                { pct: (txFijos / txTotal) * 100, color: 'bg-blue-400/70' },
                { pct: (txSalidas / txTotal) * 100, color: 'bg-green-400/70' },
                { pct: (txSusc / txTotal) * 100, color: 'bg-purple-400/70' },
                { pct: (txHormigas / txTotal) * 100, color: 'bg-[#F36E53]' },
              ].filter(s => s.pct > 0).map((seg, i) => (
                <motion.div
                  key={i}
                  className={`h-full ${seg.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${seg.pct}%` }}
                  transition={{ duration: 1, ease: "easeOut", delay: i * 0.1 }}
                />
              ))}
            </div>

            {/* Categorias */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {[
                { label: 'Fijos', amount: txFijos, color: 'bg-blue-400/70', icon: '🏠' },
                { label: 'Salidas', amount: txSalidas, color: 'bg-green-400/70', icon: '💸' },
                { label: 'Susc.', amount: txSusc, color: 'bg-purple-400/70', icon: '📱' },
                { label: 'Hormigas', amount: txHormigas, color: 'bg-[#F36E53]', icon: '🐜' },
              ].map(cat => (
                <div key={cat.label} className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${cat.color}`} />
                  <span className="text-white/50 text-[10px]">{cat.icon} {cat.label}:</span>
                  <span className="text-white text-[10px] font-bold">{formatCOP(cat.amount)}</span>
                </div>
              ))}
            </div>

            {budget && budget.total_presupuestado > 0 && (
              <div className="text-[10px] text-white/30 text-center mt-3 pt-3 border-t border-white/10">
                Presupuesto: {budget.porcentaje_total}% usado de {formatCOP(presTotal)}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-4">
            <p className="text-[12px] text-white/40 mb-1">Aún no hay gastos registrados.</p>
            <p className="text-[10px] text-[#D8A93F]">Dile algo a Lukas para empezar</p>
          </div>
        )}
      </div>

      {/* Hormiga Tip — si hay gastos detectados */}
      {leakData && leakData.total_hormiga > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#F36E53]/10 border border-[#F36E53]/20 rounded-2xl p-4 mb-5 cursor-pointer active:scale-[0.98] transition-transform"
          onClick={() => setShowModal(true)}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🐜</span>
            <div className="flex-1">
              <p className="text-white text-sm font-bold">Gastos Hormiga Detectados</p>
              <p className="text-white/50 text-xs mt-0.5 line-clamp-2">{leakData.mensaje_ia}</p>
            </div>
            <span className="text-[#F36E53] font-black text-sm">${Math.round(leakData.total_hormiga / 1000)}k</span>
          </div>
        </motion.div>
      )}

      <AnimatePresence>
        {showModal && <AlertModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </motion.div>
  );
}
