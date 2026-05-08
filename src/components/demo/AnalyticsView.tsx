"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Transaction {
  id: string;
  tipo: "ingreso" | "gasto";
  monto: number;
  categoria: string;
  descripcion: string;
  subcategoria: string;
  fecha_transaccion: string;
  es_gasto_hormiga: boolean;
}

interface Budget {
  id: string;
  categoria: string;
  limite_cop: number;
  gastado_cop: number;
  mes: number;
  anio: number;
}

const CATEGORY_ICONS: Record<string, string> = {
  Fijos: "🏠",
  Salidas: "💸",
  "Susc.": "📱",
  Ingresos: "💰",
  ingreso: "💰",
  gasto: "💸",
  otro: "📦",
};

function formatCOP(v: number) {
  return `$${Math.round(v).toLocaleString("es-CO")}`;
}

export default function AnalyticsView() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/api/transactions?limit=10").then((r) => r.json()),
      fetch("/api/budgets/summary").then((r) => r.json()).catch(() => ({ data: [] })),
    ]).then(([txJson, budgetJson]) => {
      if (txJson.data) setTransactions(txJson.data);
      if (budgetJson.data) setBudgets(budgetJson.data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const totalGastos = transactions.filter(t => t.tipo === "gasto").reduce((s, t) => s + t.monto, 0);
  const totalIngresos = transactions.filter(t => t.tipo === "ingreso").reduce((s, t) => s + t.monto, 0);

  // Main budget card — use first budget or compute from transactions
  const mainBudget = budgets[0];
  const budgetLimit = mainBudget?.limite_cop || Math.max(totalIngresos, 1);
  const budgetSpent = mainBudget?.gastado_cop ?? totalGastos;
  const budgetPct = Math.min(100, Math.round((budgetSpent / budgetLimit) * 100));
  const budgetLabel = mainBudget?.categoria || "Este Mes";

  const strokePct = 251.2 - (251.2 * budgetPct) / 100;
  const isOverBudget = budgetPct >= 90;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col p-5 pb-28"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
        className="text-white font-bold text-[28px] mb-6 tracking-tight drop-shadow-md"
      >
        Análisis
      </motion.h1>

      {/* Resumen rápido */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 rounded-2xl p-4 border border-white/10"
        >
          <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Ingresos</p>
          <p className="text-green-400 font-black text-lg">{formatCOP(totalIngresos)}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-white/5 rounded-2xl p-4 border border-white/10"
        >
          <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Gastos</p>
          <p className="text-red-400 font-black text-lg">{formatCOP(totalGastos)}</p>
        </motion.div>
      </div>

      {/* Donut Chart — presupuesto real */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center relative shadow-lg shadow-black/20 w-full mb-6"
      >
        <h3 className="text-white/70 text-sm font-medium uppercase tracking-widest mb-4 w-full text-left">
          Presupuesto: {budgetLabel}
        </h3>

        {loading ? (
          <div className="w-[160px] h-[160px] rounded-full bg-white/5 animate-pulse" />
        ) : (
          <div className="relative w-[200px] h-[200px] mb-2 flex justify-center items-center">
            <div className={`absolute inset-0 ${isOverBudget ? "bg-[#F36E53]/20" : "bg-[#D8A93F]/10"} blur-[50px] rounded-full`} />
            <svg viewBox="0 0 100 100" className="w-[180px] h-[180px] drop-shadow-lg transform -rotate-90">
              <defs>
                <linearGradient id="budget-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={isOverBudget ? "#F9D472" : "#D8A93F"} />
                  <stop offset="100%" stopColor={isOverBudget ? "#D9381E" : "#EBB33E"} />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="40" fill="none" stroke="#1a2a5e" strokeWidth="14" />
              <motion.circle
                cx="50" cy="50" r="40"
                fill="none"
                stroke="url(#budget-gradient)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray="251.2"
                initial={{ strokeDashoffset: 251.2 }}
                animate={{ strokeDashoffset: strokePct }}
                transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Gastado</span>
              <span className={`text-3xl font-black drop-shadow-md ${isOverBudget ? "text-[#F36E53]" : "text-white"}`}>
                {budgetPct}%
              </span>
            </div>
          </div>
        )}

        <div className="flex justify-between w-full mt-4 text-sm font-medium px-2">
          <span className={isOverBudget ? "text-[#F36E53]" : "text-[#D8A93F]"}>{formatCOP(budgetSpent)}</span>
          <span className="text-white/40">de {formatCOP(budgetLimit)}</span>
        </div>
      </motion.div>

      {/* Últimos Movimientos — datos reales */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-white/70 text-sm font-medium uppercase tracking-widest mb-4 px-2 mt-2"
      >
        Últimos Movimientos
      </motion.h3>

      {loading ? (
        <div className="space-y-3 animate-pulse">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-16 bg-white/5 rounded-2xl" />
          ))}
        </div>
      ) : transactions.length === 0 ? (
        <div className="text-center py-12 bg-white/5 rounded-3xl border border-dashed border-white/10">
          <p className="opacity-50 text-sm">Aún no hay movimientos registrados.</p>
          <p className="opacity-30 text-xs mt-1">Dile algo a Lukas para empezar 👆</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {transactions.slice(0, 8).map((tx, i) => {
            const isIngreso = tx.tipo === "ingreso";
            const icon = isIngreso ? "💰" : CATEGORY_ICONS[tx.categoria] || "💸";
            const color = isIngreso ? "#22c55e" : "#F36E53";
            return (
              <motion.div
                key={tx.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 + i * 0.06 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center justify-between shadow-sm hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{
                      background: `linear-gradient(to top right, #111827, ${color}33)`,
                      border: `1px solid ${color}4D`,
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">
                      {tx.descripcion || tx.subcategoria || tx.categoria || "Movimiento"}
                    </h4>
                    <p className="text-white/40 text-xs mt-0.5">
                      {tx.fecha_transaccion
                        ? new Date(tx.fecha_transaccion).toLocaleDateString("es-CO", {
                            day: "numeric",
                            month: "short",
                          })
                        : "Hoy"}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className="font-black tracking-tight"
                    style={{ color: isIngreso ? "#22c55e" : "white" }}
                  >
                    {isIngreso ? "+" : "-"}{formatCOP(tx.monto)}
                  </span>
                  {tx.es_gasto_hormiga && (
                    <p className="text-[9px] text-[#D8A93F] font-semibold">Gasto Hormiga 🐜</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}
