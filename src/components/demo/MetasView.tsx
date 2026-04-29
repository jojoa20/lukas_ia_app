"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Goal = {
  id: string | number;
  title: string;
  icon: string;
  current: number;
  total: number;
  color: string;
  priority: number;
  tip: string;
  quote: string;
};

const emptyForm = {
  nombre: "",
  monto: "",
  fechaObjetivo: "",
  prioridad: "2",
};

export default function MetasView() {
  const [sortByPriority, setSortByPriority] = useState(false);
  const [goals, setGoals] = useState<Goal[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [savingGoal, setSavingGoal] = useState(false);
  const [formError, setFormError] = useState("");
  const [goalForm, setGoalForm] = useState(emptyForm);

  useEffect(() => {
    const fetchMetas = async () => {
      try {
        const res = await fetch("/api/metas", { credentials: "include", cache: "no-store" });
        if (res.ok) {
          const { data } = await res.json();
          const mappedGoals = data
            .filter((meta: any) => meta.nombre !== "Nueva Meta, Pana")
            .map((meta: any, index: number) => ({
            id: meta.id,
            title: meta.nombre,
            icon: meta.emoji || "Meta",
            current: meta.monto_actual || 0,
            total: meta.monto_objetivo,
            color: index % 2 === 0 ? "#D8A93F" : "#397DC1",
            priority: meta.prioridad || 2,
            tip: `Sigue ahorrando para tu ${meta.nombre}. Ya tienes el ${(((meta.monto_actual || 0) / meta.monto_objetivo) * 100).toFixed(1)}%.`,
            quote: "Persevera y alcanzaras el resultado",
          }));
          setGoals(mappedGoals);
        }
      } catch (error) {
        console.error("Error fetching metas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMetas();
  }, []);

  const createGoal = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    const monto = Number(goalForm.monto.replace(/[^\d]/g, ""));

    if (!goalForm.nombre.trim()) {
      setFormError("Escribe el nombre de la meta.");
      return;
    }
    if (!monto || monto <= 0) {
      setFormError("Escribe un monto valido.");
      return;
    }
    if (!goalForm.fechaObjetivo) {
      setFormError("Elige una fecha objetivo.");
      return;
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(goalForm.fechaObjetivo)) {
      setFormError("Usa la fecha en formato AAAA-MM-DD.");
      return;
    }

    try {
      setSavingGoal(true);
      const res = await fetch("/api/metas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        cache: "no-store",
        body: JSON.stringify({
          nombre: goalForm.nombre.trim(),
          tipo: "ahorro",
          monto_objetivo: monto,
          fecha_objetivo: goalForm.fechaObjetivo,
          prioridad: Number(goalForm.prioridad),
          emoji: "Meta",
        }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error?.message || result.error || "No se pudo crear la meta");

      const meta = result.data;
      const newGoal: Goal = {
        id: meta.id,
        title: meta.nombre,
        icon: meta.emoji || "Meta",
        current: meta.monto_actual || 0,
        total: meta.monto_objetivo,
        color: goals.length % 2 === 0 ? "#D8A93F" : "#397DC1",
        priority: meta.prioridad || Number(goalForm.prioridad),
        tip: `Sigue ahorrando para tu ${meta.nombre}. Ya tienes el 0.0%.`,
        quote: "Persevera y alcanzaras el resultado",
      };

      setGoals([newGoal, ...goals]);
      setGoalForm(emptyForm);
      setShowCreateForm(false);
    } catch (error: any) {
      setFormError(error.message || "No se pudo crear la meta.");
    } finally {
      setSavingGoal(false);
    }
  };

  const removeGoal = (id: string | number) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  const changePriority = (id: string | number) => {
    setGoals(goals.map((goal) => {
      if (goal.id === id) {
        const nextPriority = goal.priority === 3 ? 1 : goal.priority + 1;
        return { ...goal, priority: nextPriority };
      }
      return goal;
    }));
  };

  const sortedGoals = sortByPriority
    ? [...goals].sort((a, b) => a.priority - b.priority)
    : goals;

  const getPriorityLabel = (p: number) => {
    switch (p) {
      case 1: return { label: "Prioridad Alta", color: "#F36E53", icon: "!" };
      case 2: return { label: "Prioridad Media", color: "#D8A93F", icon: "*" };
      case 3: return { label: "Prioridad Baja", color: "#397DC1", icon: "-" };
      default: return { label: "Prioridad", color: "#fff", icon: "*" };
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-full text-white">Cargando metas...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col h-full pt-5 px-4 relative"
    >
      <div className="flex justify-between items-end gap-3 mb-4">
        <div>
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            className="text-white font-bold text-[28px] tracking-tight drop-shadow-md leading-none mb-1"
          >
            Tus metas, Pana
          </motion.h1>
          <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest pl-0.5">
            {sortByPriority ? "Ordenado por: Importancia" : "Ordenado por: Creacion"}
          </span>
        </div>

        <div className="flex flex-col gap-2 shrink-0">
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onClick={() => setSortByPriority(!sortByPriority)}
            className={`text-[9px] font-black uppercase tracking-widest border-2 py-1.5 px-3 rounded-xl transition-all shadow-md ${sortByPriority ? "bg-[#D8A93F] border-[#111827] text-[#111827] shadow-[0_0_15px_rgba(216,169,63,0.3)]" : "bg-white/5 border-white/20 text-white/50"}`}
          >
            {sortByPriority ? "Prioridad Activa" : "Ordenar por Prioridad"}
          </motion.button>
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            onClick={() => {
              setFormError("");
              setShowCreateForm(true);
            }}
            className="bg-gradient-to-r from-[#D8A93F] to-[#F36E53] text-[#111827] font-black text-[10px] uppercase tracking-tighter px-4 py-2 rounded-full shadow-lg border-2 border-[#111827] active:scale-95 transition-transform"
          >
            + Crear nueva meta
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {showCreateForm && (
          <motion.form
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            onSubmit={createGoal}
            className="mb-4 bg-[#111827]/95 border border-[#D8A93F]/30 rounded-2xl p-4 shadow-xl shadow-black/30"
          >
            <div className="grid grid-cols-1 gap-3">
              <input
                value={goalForm.nombre}
                onChange={(e) => setGoalForm({ ...goalForm, nombre: e.target.value })}
                placeholder="Nombre de la meta"
                className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#D8A93F]"
                autoFocus
              />
              <input
                value={goalForm.monto}
                onChange={(e) => setGoalForm({ ...goalForm, monto: e.target.value })}
                inputMode="numeric"
                placeholder="Monto objetivo"
                className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#D8A93F]"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  value={goalForm.fechaObjetivo}
                  onChange={(e) => setGoalForm({ ...goalForm, fechaObjetivo: e.target.value })}
                  placeholder="AAAA-MM-DD"
                  className="w-full bg-white/10 border border-white/15 rounded-xl px-3 py-3 text-white text-sm outline-none focus:border-[#D8A93F]"
                />
                <select
                  value={goalForm.prioridad}
                  onChange={(e) => setGoalForm({ ...goalForm, prioridad: e.target.value })}
                  className="w-full bg-[#1f2937] border border-white/15 rounded-xl px-3 py-3 text-white text-sm outline-none focus:border-[#D8A93F]"
                >
                  <option value="1">Alta</option>
                  <option value="2">Media</option>
                  <option value="3">Baja</option>
                </select>
              </div>
            </div>

            {formError && <p className="mt-3 text-xs font-bold text-[#F36E53]">{formError}</p>}

            <div className="mt-4 flex gap-3">
              <button
                type="button"
                onClick={() => setShowCreateForm(false)}
                className="flex-1 rounded-xl border border-white/15 bg-white/5 py-3 text-xs font-black uppercase tracking-widest text-white/70"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={savingGoal}
                className="flex-1 rounded-xl bg-[#D8A93F] py-3 text-xs font-black uppercase tracking-widest text-[#111827] disabled:opacity-50"
              >
                {savingGoal ? "Creando..." : "Crear meta"}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      <div
        className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col gap-6 mt-4 no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style dangerouslySetInnerHTML={{
          __html: `
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        ` }} />
        <AnimatePresence mode="popLayout">
          {sortedGoals.map((goal) => {
            const priority = getPriorityLabel(goal.priority);
            const progress = goal.total > 0 ? (goal.current / goal.total) * 100 : 0;
            return (
              <motion.div
                key={goal.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: 50 }}
                transition={{
                  layout: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  y: { duration: 0.4 },
                }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl pt-5 px-5 pb-6 relative shadow-lg shadow-black/20 group hover:bg-white/10 transition-colors overflow-hidden shrink-0"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => changePriority(goal.id)}
                  className="absolute top-0 left-0 bg-[#111827] border-b border-r border-white/10 px-4 py-1.5 rounded-br-2xl flex items-center gap-1.5 z-20 shadow-sm hover:bg-white/5 transition-colors group/badge"
                >
                  <span className="text-[12px] group-hover/badge:scale-125 transition-transform">{priority.icon}</span>
                  <span className="text-[9px] font-black uppercase tracking-widest" style={{ color: priority.color }}>{priority.label}</span>
                  <span className="text-white/20 text-[8px] ml-1 opacity-0 group-hover/badge:opacity-100 transition-opacity">Cambiar</span>
                </motion.button>

                <button
                  onClick={() => removeGoal(goal.id)}
                  className="absolute top-3 right-3 w-6 h-6 rounded-full bg-red-500/10 text-red-500/40 hover:bg-red-500/20 hover:text-red-500 flex items-center justify-center text-xs font-black border border-red-500/20 transition-all z-20"
                >
                  x
                </button>

                <div className="flex justify-between items-center mb-4 mt-4 gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#111827] to-white/10 border flex items-center justify-center text-[10px] font-black shadow-inner shrink-0"
                      style={{ borderColor: `${goal.color}4D`, color: goal.color }}
                    >
                      {goal.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg truncate">{goal.title}</h3>
                  </div>
                  <div className="text-right pr-6 shrink-0">
                    <span className="text-xs text-white/50 block uppercase tracking-widest font-bold">Progreso</span>
                    <span className="font-black text-sm" style={{ color: goal.color }}>
                      ${(goal.current / 1000000).toFixed(1)}M / <span className="text-white/40 text-xs">${(goal.total / 1000000).toFixed(1)}M</span>
                    </span>
                  </div>
                </div>

                <div className="h-2 w-full bg-[#111827] rounded-full overflow-hidden border border-white/5 relative mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(progress, 100)}%` }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full rounded-full"
                    style={{ backgroundColor: goal.color, boxShadow: `0 0 10px ${goal.color}CC` }}
                  />
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-3 mb-2" style={{ borderColor: `${goal.color}1A` }}>
                  <p className="text-[10px] font-medium leading-relaxed" style={{ color: goal.color }}>
                    <span className="font-bold uppercase tracking-tighter">Tip de meta:</span> {goal.tip}
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-3 mb-4" style={{ borderColor: `${goal.color}1A` }}>
                  <p className="text-[11px] text-white italic text-center font-medium leading-relaxed px-2">
                    "{goal.quote}"
                  </p>
                </div>

                <div className="flex flex-col items-center opacity-40">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] leading-none" style={{ color: goal.color }}>Recuerda por que empezaste</p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
        <div className="h-32 shrink-0 w-full" />
      </div>
    </motion.div>
  );
}
