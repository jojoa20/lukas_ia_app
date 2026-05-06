"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTransactions } from "@/lib/hooks";

const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const colors = ["#D8A93F", "#397DC1", "#F36E53", "#10B981", "#8B5CF6"];

function formatCOP(value: number) {
  return `$${Math.round(value || 0).toLocaleString("es-CO")}`;
}

function parseCOP(value: string) {
  return Number(value.replace(/[^\d]/g, ""));
}

function txDate(tx: any) {
  return new Date(tx.fecha_transaccion || tx.created_at || Date.now());
}

function toFinScore100(score: number) {
  if (score <= 100) return Math.max(1, Math.round(score));
  return Math.max(1, Math.min(100, Math.round(score / 10)));
}

function monthLabel(date: Date) {
  const now = new Date();
  if (date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth()) return "Actual";
  return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}

export default function AnalyticsView({ initialViewMode, initialMonth }: { initialViewMode?: "groups" | "compare"; initialMonth?: string }) {
  const [viewMode, setViewMode] = useState<"groups" | "compare">(initialViewMode || "groups");
  const [selectedMonth, setSelectedMonth] = useState(initialMonth || "Actual");
  const [budgetData, setBudgetData] = useState<any>(null);
  const [profileData, setProfileData] = useState<any>(null);
  const [members, setMembers] = useState<any[]>([]);
  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupType, setGroupType] = useState<"pareja" | "familia" | "amigos" | "otro">("amigos");
  const [inviteEmail, setInviteEmail] = useState("");
  const [groupFeedback, setGroupFeedback] = useState("");
  const [personalBudgetInput, setPersonalBudgetInput] = useState("");
  const [savingPersonalBudget, setSavingPersonalBudget] = useState(false);
  const { transactions } = useTransactions();

  useEffect(() => {
    if (viewMode !== "groups") return;

    fetch("/api/groups", { credentials: "include", cache: "no-store" })
      .then((res) => {
        if (res.status === 401) {
          window.location.href = "/sign-in";
          return null;
        }
        return res.json();
      })
      .then((resData) => {
        if (!resData) return;
        const personalBudget = Number(resData.meta?.personal_budget || 0);
        setProfileData(resData.meta?.profile || null);
        setPersonalBudgetInput(personalBudget ? formatCOP(personalBudget) : "");
        const mapped = (resData.data || []).map((g: any, index: number) => ({
          id: g.id,
          name: g.nombre,
          type: g.tipo,
          val: Number(g.total_gastado || 0),
          color: colors[(index + 1) % colors.length],
          hidden: false,
        }));
        setMembers([
          { id: "tu", name: "Tu", type: "presupuesto personal", val: personalBudget, color: colors[0], hidden: false },
          ...mapped,
        ]);
      })
      .catch((err) => console.error("Error fetching groups", err));
  }, [viewMode]);

  useEffect(() => {
    fetch("/api/profile", { credentials: "include", cache: "no-store" })
      .then((res) => res.ok ? res.json() : null)
      .then((resData) => {
        if (resData?.data) setProfileData(resData.data);
      })
      .catch((err) => console.error("Error fetching profile", err));
  }, []);

  useEffect(() => {
    if (viewMode !== "compare" || budgetData) return;

    fetch("/api/budgets/summary", { credentials: "include", cache: "no-store" })
      .then((res) => {
        if (res.status === 401) {
          window.location.href = "/sign-in";
          return null;
        }
        return res.json();
      })
      .then((resData) => {
        if (resData?.data) setBudgetData(resData.data);
      })
      .catch((err) => console.error("Error fetching budget summary", err));
  }, [viewMode, budgetData]);

  const monthlyHistory = useMemo(() => {
    const history: Record<string, any> = {};

    transactions
      .filter((t: any) => t.tipo === "gasto")
      .sort((a: any, b: any) => txDate(b).getTime() - txDate(a).getTime())
      .forEach((t: any) => {
        const date = txDate(t);
        const label = monthLabel(date);
        const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
        if (!history[label]) history[label] = { key, spent: 0, income: 0, hormiga: 0, catMap: {} };

        history[label].spent += Number(t.monto) || 0;
        if (t.es_gasto_hormiga) history[label].hormiga += Number(t.monto) || 0;
        const cat = t.subcategoria?.split(":")[0] || t.categoria || "Otros";
        if (!history[label].catMap[cat]) history[label].catMap[cat] = { name: cat, current: 0, prev: 0 };
        history[label].catMap[cat].current += Number(t.monto) || 0;
      });

    Object.keys(history).forEach((label) => {
      history[label].categories = Object.values(history[label].catMap)
        .sort((a: any, b: any) => b.current - a.current)
        .slice(0, 4);
    });

    return history;
  }, [transactions]);

  const months = useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const labels = monthNames.map((name, index) => {
      if (index === now.getMonth()) return "Actual";
      return `${name} ${year}`;
    });
    if (!monthlyHistory.Actual) {
      const currentKey = `${year}-${String(now.getMonth() + 1).padStart(2, "0")}`;
      monthlyHistory.Actual = { key: currentKey, spent: 0, income: 0, hormiga: 0, categories: [] };
    }
    return labels;
  }, [monthlyHistory]);

  useEffect(() => {
    if (!months.includes(selectedMonth)) setSelectedMonth(months[0] || "Actual");
  }, [months, selectedMonth]);

  const comparison = useMemo(() => {
    const data = monthlyHistory[selectedMonth] || { spent: 0, hormiga: 0, categories: [] };
    const isActual = selectedMonth === "Actual";
    const personalBudget = Number(profileData?.meta_ahorro_mensual || 0);
    const currentBudget = isActual ? (personalBudget || budgetData?.total_presupuestado || 0) : 0;
    return {
      score: toFinScore100(profileData?.finscore_actual || budgetData?.finScore || 500),
      balance: Number(profileData?.balance_actual || 0),
      spent: isActual ? (budgetData?.total_gastado || data.spent) : data.spent,
      budget: currentBudget,
      hormiga: data.hormiga || 0,
      categories: isActual && budgetData?.categorias?.length
        ? budgetData.categorias.map((c: any) => ({ name: c.categoria, current: c.gastado_cop, prev: 0 }))
        : data.categories || [],
    };
  }, [budgetData, monthlyHistory, profileData, selectedMonth]);

  const updatePersonalBudgetInput = (value: string) => {
    const amount = parseCOP(value);
    setPersonalBudgetInput(amount ? formatCOP(amount) : "");
  };

  const assignPersonalBudget = async () => {
    const amount = parseCOP(personalBudgetInput);
    setGroupFeedback("");

    if (!amount || amount <= 0) {
      setGroupFeedback("Escribe cuanto presupuesto personal quieres asignar.");
      return;
    }

    try {
      setSavingPersonalBudget(true);
      const res = await fetch("/api/groups", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        cache: "no-store",
        body: JSON.stringify({ personal_budget: amount }),
      });

      const result = await res.json().catch(() => null);
      if (!res.ok) {
        setGroupFeedback(result?.error?.message || result?.error || "No se pudo asignar el presupuesto personal.");
        return;
      }

      setProfileData((current: any) => ({
        ...(current || {}),
        ...(result.data || {}),
        meta_ahorro_mensual: amount,
      }));
      setMembers((prev) => prev.map((member) => member.id === "tu" ? { ...member, val: amount } : member));
      setGroupFeedback(`Presupuesto personal asignado: ${formatCOP(amount)}.`);
    } catch (error) {
      console.error("Error assigning personal budget:", error);
      setGroupFeedback("No se pudo asignar el presupuesto personal.");
    } finally {
      setSavingPersonalBudget(false);
    }
  };

  const addMember = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!groupName.trim()) return;
    setGroupFeedback("");

    try {
      const res = await fetch("/api/groups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          nombre: groupName.trim(),
          tipo: groupType,
          invite_email: inviteEmail.trim(),
        }),
      });

      if (res.status === 401) {
        window.location.href = "/sign-in";
        return;
      }

      const result = await res.json().catch(() => null);
      if (!res.ok) {
        setGroupFeedback(result?.error?.message || result?.error || "No se pudo crear el grupo.");
        return;
      }

      const group = result.data;
      setMembers((prev) => [
        ...prev,
        {
          id: group.id,
          name: group.nombre,
          type: group.tipo,
          val: Number(group.total_gastado || 0),
          color: colors[prev.length % colors.length],
          hidden: false,
        },
      ]);
      setGroupName("");
      setGroupType("amigos");
      setInviteEmail("");
      setShowCreateGroup(false);
      setGroupFeedback(group.invitation?.sent
        ? `Invitacion enviada a ${group.invitation.email}.`
        : group.invitation?.email
          ? `Grupo creado. La invitacion a ${group.invitation.email} quedo pendiente de envio.`
          : "Grupo creado.");
    } catch (error) {
      console.error("Error creating group:", error);
      setGroupFeedback("No se pudo crear el grupo.");
    }
  };

  const removeMember = async (id: string | number) => {
    if (id === "tu") return;
    const previous = members;
    setMembers(members.filter((m) => m.id !== id));
    try {
      const res = await fetch(`/api/groups/${id}`, { method: "DELETE", credentials: "include" });
      if (!res.ok) setMembers(previous);
    } catch (error) {
      console.error("Error deleting group:", error);
      setMembers(previous);
    }
  };

  const visibleMembers = members.filter((m) => !m.hidden);
  const totalVisibleSpent = Math.max(visibleMembers.reduce((acc, m) => acc + Number(m.val || 0), 0), 1);
  const currentMovements = transactions
    .filter((t: any) => t.tipo === "gasto")
    .sort((a: any, b: any) => txDate(b).getTime() - txDate(a).getTime())
    .slice(0, 10);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full pt-5 pb-32 px-4 overflow-y-auto no-scrollbar">
      <div className="flex flex-col mb-6">
        <h1 className="text-white font-bold text-[28px] leading-tight mb-4 tracking-tighter shadow-sm">Analisis del Pana</h1>
        <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 mb-4 shadow-inner">
          <button onClick={() => setViewMode("groups")} className={`flex-1 py-3 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === "groups" ? "bg-[#D8A93F] text-[#111827]" : "text-white/40 hover:text-white"}`}>
            Grupos
          </button>
          <button onClick={() => setViewMode("compare")} className={`flex-1 py-3 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === "compare" ? "bg-[#D8A93F] text-[#111827]" : "text-white/40 hover:text-white"}`}>
            Historico
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {viewMode === "groups" ? (
          <motion.div key="groups" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col">
            <div className="flex justify-between items-center mb-4 px-1">
              <h3 className="text-white text-xs font-bold uppercase tracking-widest opacity-60">Gestion de Grupos</h3>
              <button onClick={() => setShowCreateGroup((value) => !value)} className="bg-white/5 border border-white/20 p-2 rounded-xl text-[#D8A93F] flex items-center gap-2 hover:bg-white/10 transition-colors">
                <span className="text-lg font-black">+</span>
                <span className="text-[10px] uppercase font-black tracking-widest">Crear Grupo</span>
              </button>
            </div>

            {showCreateGroup && (
              <form onSubmit={addMember} className="bg-white/5 border border-white/10 rounded-3xl p-5 mb-5 flex flex-col gap-3">
                <input value={groupName} onChange={(e) => setGroupName(e.target.value)} placeholder="Nombre del grupo" className="bg-[#111827] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white outline-none focus:border-[#D8A93F]" />
                <input value={inviteEmail} onChange={(e) => setInviteEmail(e.target.value)} placeholder="Correo de tu amigo" type="email" className="bg-[#111827] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white outline-none focus:border-[#D8A93F]" />
                <select value={groupType} onChange={(e) => setGroupType(e.target.value as any)} className="bg-[#111827] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white outline-none focus:border-[#D8A93F]">
                  <option value="amigos">Amigos</option>
                  <option value="familia">Familia</option>
                  <option value="pareja">Pareja</option>
                  <option value="otro">Otro</option>
                </select>
                <button type="submit" className="bg-[#D8A93F] text-[#111827] rounded-2xl py-3 text-xs font-black uppercase tracking-widest">Crear e invitar</button>
              </form>
            )}

            {groupFeedback && <div className="mb-5 text-[11px] text-[#D8A93F] font-bold bg-[#D8A93F]/10 border border-[#D8A93F]/20 rounded-2xl p-3">{groupFeedback}</div>}

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-6 shadow-lg shadow-black/20">
              <h3 className="text-white/70 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Presupuesto Grupal</h3>
              <div className="h-6 w-full bg-[#111827] rounded-full overflow-hidden flex shadow-inner border border-white/5">
                {visibleMembers.map((m) => (
                  <motion.div key={m.id} initial={{ width: 0 }} animate={{ width: `${(Number(m.val || 0) / totalVisibleSpent) * 100}%` }} className="h-full border-r border-black/10" style={{ backgroundColor: m.color }} />
                ))}
              </div>
              <div className="flex justify-between mt-4 text-xs font-black">
                <span className="text-white/40 uppercase tracking-widest">{members.length - 1} grupos</span>
                <span className="text-white text-lg tracking-tighter">{formatCOP(totalVisibleSpent)}</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-6 mb-10 shadow-lg shadow-black/20">
              <div className="flex flex-col gap-5">
                {members.map((m) => (
                  <div key={m.id} className={`flex flex-col gap-2 transition-all ${m.hidden ? "opacity-30" : "opacity-100"}`}>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: m.color }} />
                        <div className="flex flex-col">
                          <span className="text-white font-black text-[13px] tracking-tight">{m.name}</span>
                          <span className="text-white/30 text-[9px] uppercase tracking-widest">{m.type}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-sm text-white/80">{formatCOP(Number(m.val || 0))}</span>
                        <button onClick={() => setMembers(members.map((item) => item.id === m.id ? { ...item, hidden: !item.hidden } : item))} className="min-w-16 h-8 px-2 rounded-xl bg-white/5 border border-white/10 text-white/50 text-[10px] font-black uppercase">{m.hidden ? "Ver" : "Ocultar"}</button>
                        {m.id !== "tu" && <button onClick={() => removeMember(m.id)} className="w-8 h-8 rounded-xl bg-white/5 text-red-400 border border-white/10 text-xs">x</button>}
                      </div>
                    </div>
                    {m.id === "tu" && (
                      <div className="grid grid-cols-[1fr_auto] gap-2">
                        <input
                          value={personalBudgetInput}
                          onChange={(e) => updatePersonalBudgetInput(e.target.value)}
                          inputMode="numeric"
                          placeholder="Presupuesto personal"
                          className="min-w-0 rounded-xl border border-white/10 bg-[#111827] px-3 py-2 text-xs font-bold text-white outline-none focus:border-[#D8A93F]"
                        />
                        <button
                          type="button"
                          onClick={assignPersonalBudget}
                          disabled={savingPersonalBudget}
                          className="rounded-xl bg-[#D8A93F] px-3 py-2 text-[10px] font-black uppercase tracking-widest text-[#111827] disabled:opacity-50"
                        >
                          {savingPersonalBudget ? "..." : "Asignar"}
                        </button>
                      </div>
                    )}
                    <div className="h-2.5 w-full bg-black/40 rounded-full overflow-hidden border border-white/5">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${Math.min((Number(m.val || 0) / Math.max(totalVisibleSpent, 1)) * 100, 100)}%` }} className="h-full rounded-full" style={{ backgroundColor: m.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-white/40 text-[10px] uppercase font-black px-2 mb-3 tracking-[0.3em]">Movimientos recientes</h3>
            <div className="flex flex-col gap-3">
              {currentMovements.map((move: any) => (
                <div key={move.id || `${move.created_at}-${move.descripcion}`} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between shadow-sm">
                  <div className="flex flex-col">
                    <h4 className="text-white font-bold text-sm tracking-tight">{move.descripcion || move.subcategoria || move.categoria}</h4>
                    <span className="text-[9px] font-bold uppercase text-white/30 mt-0.5">{txDate(move).toLocaleDateString("es-CO")} - {move.categoria}</span>
                  </div>
                  <span className="font-black text-[#F36E53] text-[15px] tracking-tighter">-{formatCOP(Number(move.monto || 0))}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div key="compare" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="flex flex-col">
            <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-4 px-1">Elige mes para comparar</p>
            <div className="flex gap-3 overflow-x-auto no-scrollbar py-2 mb-8">
              {months.map((month) => (
                <button key={month} onClick={() => setSelectedMonth(month)} className={`flex-shrink-0 px-6 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all border-2 ${selectedMonth === month ? "bg-[#D8A93F] border-[#111827] text-[#111827] scale-105" : "bg-white/5 border-white/10 text-white/40"}`}>
                  {month}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <Metric title="FinScore" value={`${comparison.score}`} detail="estado actual" tone="blue" />
              <Metric title="Gasto Total" value={formatCOP(comparison.spent)} detail={comparison.budget ? `Presup: ${formatCOP(comparison.budget)}` : "sin presupuesto"} tone="red" />
              <Metric title={selectedMonth === "Actual" ? "Saldo" : comparison.budget >= comparison.spent ? "Disponible" : "Exceso"} value={selectedMonth === "Actual" ? formatCOP(comparison.balance) : formatCOP(Math.abs(comparison.budget - comparison.spent))} detail={selectedMonth === "Actual" ? "perfil app" : comparison.budget >= comparison.spent ? "a favor" : "sobre limite"} tone={selectedMonth === "Actual" ? "green" : comparison.budget >= comparison.spent ? "green" : "red"} />
              <Metric title="Hormiga" value={formatCOP(comparison.hormiga)} detail="gastos marcados" tone="gold" />
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[40px] p-6 mb-8 shadow-2xl">
              <h3 className="text-white font-black text-xs tracking-[0.2em] uppercase opacity-70 mb-6">Categorias del mes</h3>
              <div className="flex flex-col gap-7">
                {comparison.categories.length === 0 && <p className="text-white/40 text-sm">No hay movimientos para este mes.</p>}
                {comparison.categories.map((cat: any) => {
                  const max = Math.max(...comparison.categories.map((c: any) => Number(c.current || 0)), 1);
                  return (
                    <div key={cat.name} className="flex flex-col gap-2">
                      <div className="flex justify-between text-[11px] font-black uppercase tracking-widest">
                        <span className="text-white">{cat.name}</span>
                        <span className="text-[#D8A93F]">{formatCOP(Number(cat.current || 0))}</span>
                      </div>
                      <div className="h-3 bg-black/40 rounded-full overflow-hidden border border-white/5">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${Math.min((Number(cat.current || 0) / max) * 100, 100)}%` }} className="h-full rounded-full bg-[#D8A93F]" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Metric({ title, value, detail, tone }: { title: string; value: string; detail: string; tone: "blue" | "red" | "green" | "gold" }) {
  const toneClass = {
    blue: "text-[#397DC1]",
    red: "text-[#F36E53]",
    green: "text-green-400",
    gold: "text-[#D8A93F]",
  }[tone];

  return (
    <div className="bg-white/5 border border-white/10 rounded-[28px] p-5 relative overflow-hidden shadow-lg shadow-black/20">
      <h4 className="text-white/40 text-[9px] font-bold uppercase tracking-[0.2em] mb-3 leading-none">{title}</h4>
      <span className="text-white font-black text-2xl tracking-tighter break-words">{value}</span>
      <span className={`${toneClass} text-[10px] font-black mt-1 uppercase tracking-widest block`}>{detail}</span>
    </div>
  );
}
