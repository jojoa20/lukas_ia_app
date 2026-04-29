"use client";
import React, { useState, useEffect } from "react";
import AlertModal from "./AlertModal";
import { motion, animate, AnimatePresence } from "framer-motion";
import { useUser, useClerk } from "@clerk/nextjs";

interface HomeViewProps {
  onOpenAlert?: () => void;
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

export default function HomeView({ onOpenAlert }: HomeViewProps) {
  const { isLoaded, user: clerkUser } = useUser();
  const { signOut } = useClerk();

  const [showAlertModal, setShowAlertModal] = useState(false);
  const [showFinScoreModal, setShowFinScoreModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categoryData, setCategoryData] = useState<any>(null);
  const [tipIndex, setTipIndex] = useState(0);
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [tipRevealed, setTipRevealed] = useState(false);
  const [challengeRevealed, setChallengeRevealed] = useState(false);

  const [profile, setProfile] = useState<any>(null);
  const [alertData, setAlertData] = useState<any>(null);
  const [graphData, setGraphData] = useState<any>(null);

  useEffect(() => {
    if (!isLoaded) return;

    const fetchDashboardData = async () => {
      try {
        const [profileRes, alertRes, graphRes] = await Promise.all([
          fetch('/api/profile', { credentials: 'include', cache: 'no-store' }),
          fetch('/api/alerts/leak-buster', { credentials: 'include', cache: 'no-store' }),
          fetch('/api/leak-buster/graph', { credentials: 'include', cache: 'no-store' })
        ]);

        if (profileRes.ok) {
          const { data } = await profileRes.json();
          setProfile(data);
        }
        if (alertRes.ok) {
          const { data } = await alertRes.json();
          setAlertData(data);
        }
        if (graphRes.ok) {
          const { data } = await graphRes.json();
          setGraphData(data);
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };
    fetchDashboardData();
  }, [isLoaded, clerkUser?.id]);

  const tipsData = [
    { title: "El Tip del Pana", text: "Pana, si reducimos los Ubers de esta semana, podemos inyectarle esos $40k a tu meta de Ahorro Viaje. ¿Aguanta?", icon: "💡" },
    { title: "Tip del Maestro", text: "Usa la regla 50/30/20: 50% necesidades, 30% gustos y 20% ahorro. ¡Tu FinScore subirá!", icon: "💸" },
    { title: "Hack de Ahorro", text: "Cancela esa suscripción que no usas hace 3 meses. Son $35k que vuelven a tu bolsillo.", icon: "🎯" }
  ];

  const challengesData = [
    { title: "Reto: No Domicilios 🍔", sub: "Con Andrés y Sofía • Quedan 3 días", avatars: ["A", "S", "Tú"] },
    { title: "Reto: Ahorro 10k 💰", sub: "Individual • Meta: 7 días", avatars: ["Tú"] },
    { title: "Reto: Cero Hormiga 🐜", sub: "Global • Queda 1 día", avatars: ["L", "M", "Tú"] }
  ];

  // Identidad prioritaria
  const userName = profile?.full_name?.split(' ')[0] || clerkUser?.firstName || "Pana";
  const streakDays = profile?.racha_actual_dias || 0;
  const finScore = profile?.finscore_actual || 500;

  const isMidStreak = streakDays >= 2;
  const isHighStreak = streakDays >= 7;

  const streakHistory = [
    { day: "Lun", score: finScore - 60 },
    { day: "Mar", score: finScore - 50 },
    { day: "Mié", score: finScore - 40 },
    { day: "Jue", score: finScore - 30 },
    { day: "Vie", score: finScore - 20 },
    { day: "Sáb", score: finScore - 10 },
    { day: "Dom", score: finScore }
  ];

  // Nodes for dense graph (coordinates based on 400x350)
  const centerNode = { x: 200, y: 175, label: "Cuenta Principal" };
  const categories = [
    { x: 100, y: 100, label: "Fijos", color: "#397DC1" },
    { x: 300, y: 100, label: "Salidas", color: "#397DC1" },
    { x: 100, y: 250, label: "Ahorro", color: "#397DC1" },
    { x: 300, y: 250, label: "Susc.", color: "#397DC1" },
  ];

  const subNodes = graphData?.nodes?.filter((n: any) => n.type === 'subcategory').map((n: any, i: number) => {
    const link = graphData.links.find((l: any) => l.target === n.id);
    const catNode = graphData.nodes.find((cn: any) => cn.id === link?.source);

    const coords: Record<string, { x: number, y: number }> = {
      'Fijos': { x: 100, y: 100 },
      'Salidas': { x: 300, y: 100 },
      'Ahorro': { x: 100, y: 250 },
      'Suscripciones': { x: 300, y: 250 },
      'Susc.': { x: 300, y: 250 }
    };

    const base = coords[catNode?.label] || { x: 200, y: 175 };
    const angle = (i * 1.5) % (Math.PI * 2);
    const dist = 35 + (i % 3) * 10;

    return {
      cx: base.x,
      cy: base.y,
      x: base.x + Math.cos(angle) * dist,
      y: base.y + Math.sin(angle) * dist,
      label: n.label
    };
  }) || [];

  const alertNodes = alertData?.recent?.map((item: any, i: number) => {
    const angle = (i / (alertData.recent.length || 1)) * Math.PI * 1.5;
    const radius = 50 + (i % 2) * 15;
    return {
      cx: 300,
      cy: 100,
      x: 300 + Math.cos(angle) * radius,
      y: 100 + Math.sin(angle) * radius,
      label: item.descripcion.split(' ')[0]
    };
  }) || [];

  const getPercent = (val: number, max: number) => `${(val / max) * 100}%`;

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4 }} className="flex flex-col p-5 pb-32">
      <div className="flex justify-between items-center mb-6 mt-2">
        <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 100 }} className="text-white font-bold text-[28px] leading-tight tracking-tight drop-shadow-md">
          ¡Qué más, Pana,<br /><span className="text-[#D8A93F]">{userName}!</span>
        </motion.h1>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="flex flex-col items-center ml-4 cursor-pointer active:scale-90 transition-transform"
          onClick={() => setShowProfileModal(true)}
        >
          <div className="w-12 h-12 rounded-full border-2 border-[#D8A93F] shadow-[0_0_15px_rgba(216,169,63,0.4)] overflow-hidden bg-[#111827] flex items-center justify-center">
            {profile?.avatar_url || clerkUser?.imageUrl ? (
              <img src={profile?.avatar_url || clerkUser?.imageUrl} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <svg className="w-6 h-6 text-[#D8A93F]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
            )}
          </div>
          <span className="text-[10px] text-white/50 mt-1 font-medium tracking-wide">Perfil</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
        onClick={() => setShowFinScoreModal(true)}
        className={`w-full border-l-4 p-4 rounded-r-2xl mb-6 flex items-center justify-between backdrop-blur-md cursor-pointer group shadow-xl transition-all ${isHighStreak ? "bg-gradient-to-r from-[#F36E53]/20 to-transparent border-[#F36E53] shadow-[#F36E53]/30" : "bg-[#D8A93F]/20 border-[#D8A93F]"}`}
      >
        <div className="flex items-center gap-3">
          <motion.div animate={isHighStreak ? { y: [0, -8, 0], scale: [1, 1.2, 1] } : {}} transition={isHighStreak ? { repeat: Infinity, duration: 1.5 } : {}} className={`text-2xl drop-shadow-md ${isHighStreak ? "drop-shadow-[0_0_10px_#F36E53]" : ""}`}>🔥</motion.div>
          <div>
            <div className={`font-black text-sm tracking-wide ${isHighStreak ? "text-[#F36E53]" : "text-[#D8A93F]"}`}>Racha de Ahorro: {streakDays} Días</div>
            <div className="text-white/40 text-[9px] font-bold uppercase tracking-widest mt-0.5 group-hover:text-white transition-colors">{isHighStreak ? "¡ESTÁS EN LLAMAS! 🔥" : "Toca para ver historial 📈"}</div>
          </div>
        </div>
        <span className="text-white/10 group-hover:text-white group-hover:translate-x-1 transition-all">→</span>
      </motion.div>

      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1, duration: 0.5 }} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center relative shadow-lg shadow-black/20 w-full mb-6 mt-6">
        <div className="relative w-[280px] h-[140px] mb-4 overflow-hidden flex justify-center">
          <svg viewBox="0 0 200 100" className="w-[240px] h-[120px] drop-shadow-[0_0_15px_rgba(216,169,63,0.6)] overflow-visible">
            <defs>
              <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#8A6B29" /><stop offset="50%" stopColor="#D8A93F" /><stop offset="100%" stopColor="#F9D472" /></linearGradient>
            </defs>
            <path d="M 10 90 A 80 80 0 0 1 190 90" fill="none" stroke="#1a2a5e" strokeWidth="12" strokeLinecap="round" />
            <motion.path d="M 10 90 A 80 80 0 0 1 190 90" fill="none" stroke="url(#gold-gradient)" strokeWidth="12" strokeLinecap="round" strokeDasharray="251.2" initial={{ strokeDashoffset: 251.2 }} animate={{ strokeDashoffset: 251.2 - (finScore / 1000) * 251.2 }} transition={{ duration: 2, ease: "easeOut", delay: 0.3 }} />
            <motion.path d="M 168 34 L 180 18 L 192 34 Z" fill="#D8A93F" style={{ transformOrigin: "100px 90px" }} initial={{ rotate: -90 }} animate={{ rotate: -90 + (finScore / 1000) * 180 }} transition={{ duration: 2, ease: "easeOut", delay: 0.3 }} />
          </svg>
          <div className="absolute inset-x-0 bottom-2 flex flex-col items-center">
            <span className="text-white/60 text-sm font-medium mb-1 uppercase tracking-widest leading-none">FinScore</span>
            <span className="text-[#D8A93F] text-[52px] font-black tracking-tighter drop-shadow-[0_0_15px_rgba(216,169,63,0.8)] leading-none"><AnimatedNumber value={finScore} /></span>
          </div>
        </div>
        <p className="text-white/80 text-sm font-medium mt-3 bg-[#D8A93F]/10 px-4 py-1.5 rounded-full border border-[#D8A93F]/30 text-[#D8A93F] text-center">
          {finScore > 700 ? "¡Tu salud financiera está excelente!" : finScore > 400 ? "Vas bien, pero puedes mejorar." : "¡Ojo! Toca cuidar esas finanzas."}
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 mb-6 mt-6">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col shadow-lg shadow-black/20">
          <div className="text-[13px] font-bold text-white mb-3">Saldo Actual</div>
          <div className="text-2xl font-black text-[#397DC1] mt-2 mb-1">${(profile?.balance_actual || 0).toLocaleString()}</div>
          <div className="text-[10px] text-white/40 font-medium self-start">En tu cuenta</div>
        </div>
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-lg flex flex-col shadow-black/20" onClick={() => setShowAlertModal(true)}>
          <div className="text-[13px] font-bold text-white mb-3 tracking-tight">Hormiga</div>
          <div className="text-xl font-black text-[#F36E53] mt-auto">
            ${(alertData?.total || 0).toLocaleString()}
          </div>
          <div className="text-[10px] text-white/40 font-medium">Este mes</div>
        </div>
      </div>

      <h2 className="text-white/70 text-sm font-medium uppercase tracking-widest mb-4 px-2 mt-6">Lukas AI • Leak Buster</h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
        className="w-full relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 mb-6 mt-6 shadow-xl flex items-center justify-center overflow-hidden"
      >
        <div className="w-full relative" style={{ paddingBottom: '87.5%' }}>
          <svg viewBox="0 0 400 350" className="absolute inset-0 w-full h-full overflow-visible">
            <g stroke="#397DC1" strokeWidth="2" opacity="0.4" strokeLinecap="round">
              {categories.map((cat: any, i: number) => (
                <line key={`line-cat-${i}`} x1={centerNode.x} y1={centerNode.y} x2={cat.x} y2={cat.y} />
              ))}
            </g>
            <g stroke="#397DC1" strokeWidth="1" opacity="0.2" strokeLinecap="round">
              {subNodes.map((sub: any, i: number) => (
                <line key={`line-sub-${i}`} x1={sub.cx} y1={sub.cy} x2={sub.x} y2={sub.y} />
              ))}
            </g>
            <g stroke="#F36E53" strokeWidth="2" opacity="0.6" strokeLinecap="round" className="animate-pulse">
              {alertNodes.map((an: any, i: number) => (
                <line key={`line-alert-${i}`} x1={an.cx} y1={an.cy} x2={an.x} y2={an.y} />
              ))}
            </g>
          </svg>
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <div className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto" style={{ top: '50%', left: '50%' }}>
              <div className="w-10 h-10 bg-[#111827] border-[3px] border-[#D8A93F] rounded-full shadow-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-[#D8A93F] rounded-full shadow-lg"></div>
              </div>
            </div>
            {categories.map((node: any, i: number) => (
              <div
                key={`cat-${i}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto flex flex-col items-center cursor-pointer active:scale-90 transition-transform group"
                style={{ top: getPercent(node.y, 350), left: getPercent(node.x, 400) }}
                onClick={async () => {
                  setSelectedCategory(node.label);
                  setShowAlertModal(true);
                  try {
                    const res = await fetch(`/api/transactions?type=gasto&limit=100`);
                    if (res.ok) {
                      const { data } = await res.json();
                      const branchPrefix = `${node.label}:`;
                      const filtered = data.filter((t: any) => (t.subcategoria || "").startsWith(branchPrefix));
                      const total = filtered.reduce((acc: number, t: any) => acc + t.monto, 0);
                      setCategoryData({
                        total,
                        recent: filtered.map((t: any) => ({ descripcion: (t.subcategoria || t.descripcion || t.categoria).replace(branchPrefix, "").trim(), monto: t.monto })),
                        insight: `Pana, en ${node.label} has gastado $${total.toLocaleString()} recientemente. ${total > 500000 ? "¡Ojo con eso!" : "Vas por buen camino."}`
                      });
                    }
                  } catch (e) {
                    console.error("Error fetching category data:", e);
                  }
                }}
              >
                <div className="w-5 h-5 bg-[#111827] rounded-full border-2 border-[#397DC1] flex items-center justify-center z-10 group-hover:scale-110 transition-transform shadow-lg shadow-[#397DC1]/20">
                  <div className="w-2 h-2 bg-[#397DC1] rounded-full"></div>
                </div>
                <span className={`absolute text-[9px] text-white/80 font-semibold whitespace-nowrap bg-[#111827]/70 px-1 rounded-md z-20 transition-all group-hover:text-white ${node.y < 175 ? "-top-5" : "top-6"}`}>{node.label}</span>
              </div>
            ))}
            {subNodes.map((node: any, i: number) => (
              <div key={`sub-${i}`} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top: getPercent(node.y, 350), left: getPercent(node.x, 400) }}>
                <div className="w-2 h-2 bg-[#397DC1]/40 rounded-full border border-[#111827]"></div>
                <span className="absolute top-3 text-[8px] text-white/30 whitespace-nowrap">{node.label}</span>
              </div>
            ))}
            {alertNodes.map((node: any, i: number) => (
              <motion.div key={`alert-${i}`} animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }} className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer flex flex-col items-center" style={{ top: getPercent(node.y, 350), left: getPercent(node.x, 400) }} onClick={() => setShowAlertModal(true)}>
                <div className="w-3 h-3 bg-[#F36E53] rounded-full shadow-[0_0_10px_#F36E53] border border-[#111827]"></div>
                <span className="absolute top-4 text-[8px] text-[#F36E53] font-bold whitespace-nowrap drop-shadow-md z-30">{node.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Lukas Pana Tip - FULL INTERACTIVE */}
      <motion.div
        layout className="w-full bg-[#21428D]/30 border border-[#397DC1]/30 p-5 rounded-[32px] mb-6 flex flex-col gap-4 shadow-xl relative overflow-hidden group cursor-pointer transition-all active:scale-95"
        onClick={() => setTipRevealed(!tipRevealed)}
      >
        <button onClick={(e) => { e.stopPropagation(); setTipIndex((tipIndex + 1) % tipsData.length); }} className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full z-10">🔄</button>
        <div className="flex gap-4 items-start pointer-events-none">
          <div className="text-3xl bg-[#397DC1]/20 w-12 h-12 rounded-2xl flex items-center justify-center">{tipsData[tipIndex].icon}</div>
          <div className="flex-1">
            <h4 className="text-white font-bold text-sm tracking-wide mb-1">{tipsData[tipIndex].title}</h4>
            <AnimatePresence mode="wait">
              {!tipRevealed ? (
                <motion.div key="hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><span className="text-white/30 text-[10px] italic font-medium">Oprimir para mostrar...</span></motion.div>
              ) : (
                <motion.p key="visible" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-white/70 text-xs leading-relaxed">{tipsData[tipIndex].text}</motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Group Challenge - FULL RESTORED */}
      <motion.div
        layout className="w-full bg-white/5 border border-white/10 p-5 rounded-[32px] mb-10 flex flex-col gap-4 shadow-xl relative overflow-hidden group cursor-pointer transition-all active:scale-95"
        onClick={() => setChallengeRevealed(!challengeRevealed)}
      >
        <button onClick={(e) => { e.stopPropagation(); setChallengeIndex((challengeIndex + 1) % challengesData.length); }} className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full z-10">🔄</button>
        <div className="flex items-center justify-between pointer-events-none">
          <div className="flex flex-col flex-1">
            <h4 className="text-white font-bold text-sm mb-1">{challengesData[challengeIndex].title}</h4>
            <AnimatePresence mode="wait">
              {!challengeRevealed ? (
                <motion.div key="c-hidden" className="text-white/30 text-[10px] italic">Oprimir para mostrar...</motion.div>
              ) : (
                <motion.p key="c-visible" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-white/50 text-xs">{challengesData[challengeIndex].sub}</motion.p>
              )}
            </AnimatePresence>
          </div>
          <div className="flex -space-x-2">
            {challengesData[challengeIndex].avatars.map((av: any, idx: number) => (
              <div key={idx} className={`w-9 h-9 rounded-full border-2 border-[#111827] flex items-center justify-center font-black text-xs text-white shadow-lg ${idx === 0 ? "bg-[#F36E53]" : idx === 1 ? "bg-[#397DC1]" : "bg-[#D8A93F] !text-[#111827]"}`}>{av}</div>
            ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showAlertModal && (
          <AlertModal
            onClose={() => {
              setShowAlertModal(false);
              setSelectedCategory(null);
            }}
            alertData={selectedCategory ? categoryData : alertData}
            title={selectedCategory || "Gasto Hormiga"}
          />
        )}
        {showFinScoreModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center p-6 backdrop-blur-xl bg-black/60" onClick={() => setShowFinScoreModal(false)}>
            <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }} className="bg-[#111827] border border-white/10 rounded-[45px] p-10 w-full max-w-md shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShowFinScoreModal(false)} className="absolute top-8 right-8 text-white/30 text-xl font-black transition-colors hover:text-white">✕</button>
              <h2 className="text-white font-black text-2xl tracking-tight italic uppercase text-center mb-8">Historial de Racha</h2>
              <div className="flex flex-col gap-3 mb-10 overflow-y-auto max-h-[40vh] pr-2">
                {[...streakHistory].reverse().map((h: any, i: number) => (
                  <div key={i} className={`flex items-center justify-between p-4 rounded-3xl border ${i === 0 ? "bg-[#D8A93F]/10 border-[#D8A93F]/30" : "bg-white/5 border-white/5"}`}>
                    <span className="text-white/40 font-bold">{h.day}</span>
                    <span className="text-white font-black italic">{h.score} pts</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {showProfileModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center p-6 backdrop-blur-xl bg-black/60" onClick={() => setShowProfileModal(false)}>
            <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }} className="bg-[#111827] border border-white/10 rounded-[45px] p-8 w-full max-w-sm shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShowProfileModal(false)} className="absolute top-6 right-6 text-white/30 text-xl font-black transition-colors hover:text-white">✕</button>
              <div className="flex flex-col items-center mb-8 border-b border-white/5 pb-8">
                <div className="w-20 h-20 rounded-full border-2 border-[#D8A93F] p-1 shadow-lg mb-4 overflow-hidden">
                  {profile?.avatar_url || clerkUser?.imageUrl ? (
                    <img src={profile?.avatar_url || clerkUser?.imageUrl} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#111827] text-[#D8A93F]">👤</div>
                  )}
                </div>
                <h3 className="text-white font-black text-xl italic uppercase tracking-tight">{profile?.full_name || clerkUser?.fullName || "Usuario"}</h3>
                <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Suscripción Premium 🚀</p>
              </div>
              <div className="space-y-4 mb-8">
                <h4 className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em] px-2">Seguridad y Ajustes</h4>

                <div className="bg-white/5 p-4 rounded-3xl flex items-center justify-between border border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">🆔</span>
                    <span className="text-white text-xs font-bold tracking-wide">FaceID / Biometría</span>
                  </div>
                  <div className="w-10 h-6 rounded-full p-1 bg-[#D8A93F]/20 border border-[#D8A93F]/30">
                    <div className="w-4 h-4 bg-[#D8A93F] rounded-full translate-x-4" />
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-3xl flex items-center justify-between border border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">🔔</span>
                    <span className="text-white text-xs font-bold tracking-wide">Alertas de Gasto</span>
                  </div>
                  <div className="w-10 h-6 rounded-full p-1 bg-[#397DC1]/20 border border-[#397DC1]/30">
                    <div className="w-4 h-4 bg-[#397DC1] rounded-full translate-x-4" />
                  </div>
                </div>

                <button className="w-full p-4 rounded-2xl bg-white/5 text-white/60 text-[10px] font-bold text-left hover:bg-white/10 transition-colors uppercase tracking-widest">Configurar Límites de Gasto</button>
                <button className="w-full p-4 rounded-2xl bg-white/5 text-white/60 text-[10px] font-bold text-left hover:bg-white/10 transition-colors uppercase tracking-widest">Términos y Privacidad</button>
              </div>

              <button
                onClick={async () => {
                  try {
                    await signOut();
                    window.location.href = '/sign-in';
                  } catch (e) {
                    window.location.href = '/sign-in';
                  }
                }}
                className="w-full p-4 rounded-2xl bg-[#F36E53]/10 border border-[#F36E53]/30 text-[#F36E53] font-black uppercase italic tracking-widest text-xs hover:bg-[#F36E53]/20 transition-all shadow-lg"
              >
                Cerrar Sesión 🚪
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
