"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

interface Transaction {
  id: string;
  tipo: 'ingreso' | 'gasto';
  monto: number;
  categoria: string;
  descripcion: string;
  fecha_transaccion: string;
  es_gasto_hormiga: boolean;
}

function monthKey(dateValue: string) {
  const date = new Date(dateValue || Date.now());
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function monthLabel(key: string) {
  const [year, month] = key.split("-").map(Number);
  return new Date(year, month - 1, 1).toLocaleDateString("es-CO", {
    month: "long",
    year: "numeric",
  });
}

export default function HistorialView() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  // Form state
  const [monto, setMonto] = useState("");
  const [tipo, setTipo] = useState<'ingreso' | 'gasto'>('gasto');
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [esHormiga, setEsHormiga] = useState(false);

  const metrics = useMemo(() => {
    const ingresos = transactions
      .filter((tx) => tx.tipo === "ingreso")
      .reduce((sum, tx) => sum + Number(tx.monto || 0), 0);
    const gastos = transactions
      .filter((tx) => tx.tipo === "gasto")
      .reduce((sum, tx) => sum + Number(tx.monto || 0), 0);
    const hormigas = transactions
      .filter((tx) => tx.es_gasto_hormiga)
      .reduce((sum, tx) => sum + Number(tx.monto || 0), 0);

    return { ingresos, gastos, balance: ingresos - gastos, hormigas };
  }, [transactions]);

  const groupedTransactions = useMemo(() => {
    const sorted = [...transactions].sort((a, b) => {
      const dateA = new Date(a.fecha_transaccion || 0).getTime();
      const dateB = new Date(b.fecha_transaccion || 0).getTime();
      return dateB - dateA;
    });
    const groups = new Map<string, Transaction[]>();

    for (const tx of sorted) {
      const key = monthKey(tx.fecha_transaccion);
      groups.set(key, [...(groups.get(key) || []), tx]);
    }

    return [...groups.entries()].sort(([a], [b]) => b.localeCompare(a));
  }, [transactions]);

  // Modelo de Detección: Grafo de Frecuencias y Reglas
  useEffect(() => {
    if (tipo !== 'gasto' || !monto) {
      setEsHormiga(false);
      return;
    }

    const montoNum = Number(monto);
    if (montoNum >= 50000) {
      setEsHormiga(false); // Gastos grandes nunca son hormiga
      return;
    }

    const normalizedDesc = descripcion.toLowerCase().trim();
    const isSuspectCategory = ['alimentacion', 'entretenimiento', 'otros', 'transporte'].includes(categoria);

    // 1. Detección por palabras de impulso explícito
    const impulseWords = ['cafe', 'café', 'tinto', 'empanada', 'antojo', 'dulce', 'pola', 'helado', 'snack', 'uber', 'rappi'];
    const hasImpulseWord = impulseWords.some(w => normalizedDesc.includes(w));

    // 2. Análisis del Grafo de Frecuencia (Conexiones pasadas)
    // Si el usuario ya tiene 2+ gastos similares pequeños, es un hábito (peso alto)
    const similarPastTxs = transactions.filter(tx =>
      tx.tipo === 'gasto' &&
      tx.monto < 50000 &&
      (tx.categoria === categoria || (normalizedDesc && tx.descripcion?.toLowerCase().includes(normalizedDesc)))
    );
    const isFrequentHabit = similarPastTxs.length >= 2;

    if (hasImpulseWord || (isSuspectCategory && isFrequentHabit)) {
      setEsHormiga(true);
    } else {
      setEsHormiga(false);
    }
  }, [categoria, descripcion, tipo, monto, transactions]);

  useEffect(() => {
    fetch('/api/transactions')
      .then(res => res.json())
      .then(json => {
        if (json.data) setTransactions(json.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSaveTransaction = async () => {
    if (!monto || !categoria) return;

    setSaving(true);
    const payload = {
      monto: Number(monto),
      tipo,
      categoria,
      descripcion,
      es_gasto_hormiga: tipo === 'gasto' ? esHormiga : false
    };

    try {
      const res = await fetch('/api/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        const json = await res.json();
        const newTx = Array.isArray(json.data) ? json.data[0] : json.data;
        if (newTx) setTransactions(prev => [newTx, ...prev]);
        setShowModal(false);
        setMonto("");
        setCategoria("");
        setDescripcion("");
        setEsHormiga(false);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 pb-32 min-h-screen relative">
      {/* Header con botón siempre visible */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#D8A93F]">Mi Actividad</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#D8A93F] text-black px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
        >
          + Añadir
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <p className="text-white/45 text-[10px] uppercase tracking-widest">Ingresos</p>
          <p className="text-green-400 text-lg font-black">+${metrics.ingresos.toLocaleString()}</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <p className="text-white/45 text-[10px] uppercase tracking-widest">Gastos</p>
          <p className="text-red-400 text-lg font-black">-${metrics.gastos.toLocaleString()}</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <p className="text-white/45 text-[10px] uppercase tracking-widest">Balance</p>
          <p className={`text-lg font-black ${metrics.balance >= 0 ? "text-green-400" : "text-red-400"}`}>
            {metrics.balance >= 0 ? "+" : "-"}${Math.abs(metrics.balance).toLocaleString()}
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <p className="text-white/45 text-[10px] uppercase tracking-widest">Hormiga</p>
          <p className="text-[#D8A93F] text-lg font-black">${metrics.hormigas.toLocaleString()}</p>
        </div>
      </div>

      {loading && transactions.length === 0 ? (
        <div className="space-y-3 animate-pulse">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-16 bg-white/5 rounded-2xl" />
          ))}
        </div>
      ) : transactions.length > 0 ? (
        <div className="space-y-3">
          {groupedTransactions.flatMap(([, monthTransactions]) => monthTransactions).map((tx, index) => (
            <motion.div
              key={tx.id || `tx-${index}-${tx.monto}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 p-4 rounded-2xl flex justify-between items-center border border-white/5"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.tipo === 'ingreso' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  {tx.tipo === 'ingreso' ? '↓' : '↑'}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{tx.descripcion || tx.categoria}</h4>
                  <p className="text-[10px] opacity-40 uppercase tracking-wider">{new Date(tx.fecha_transaccion).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`font-bold ${tx.tipo === 'ingreso' ? 'text-green-400' : 'text-white'}`}>
                  {tx.tipo === 'ingreso' ? '+' : '-'}${Number(tx.monto || 0).toLocaleString()}
                </span>
                {tx.es_gasto_hormiga && (
                  <p className="text-[9px] text-[#D8A93F] font-semibold">Gasto Hormiga 🐜</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10 flex flex-col items-center">
          <p className="opacity-50 text-sm mb-4">No hay movimientos registrados.</p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#D8A93F] text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
          >
            + Registrar mi primer gasto/ingreso
          </button>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-[#111827] p-6 rounded-3xl w-full max-w-sm border border-white/10 space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">Registrar Movimiento</h2>

            <div className="flex gap-2 mb-4 p-1 bg-white/5 rounded-lg">
              <button
                onClick={() => { setTipo('gasto'); setCategoria(""); }}
                className={`flex-1 py-2 text-sm font-bold rounded-md ${tipo === 'gasto' ? 'bg-red-500/20 text-red-400' : 'text-white/50'}`}
              >
                Gasto
              </button>
              <button
                onClick={() => { setTipo('ingreso'); setCategoria(""); }}
                className={`flex-1 py-2 text-sm font-bold rounded-md ${tipo === 'ingreso' ? 'bg-green-500/20 text-green-400' : 'text-white/50'}`}
              >
                Ingreso
              </button>
            </div>

            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white text-lg font-bold"
              placeholder="$ Monto (escribe el número)"
              value={monto}
              onChange={e => setMonto(e.target.value.replace(/\D/g, ''))}
            />

            {/* Dropdown de categorías válidas según la BD */}
            <select
              className="w-full bg-[#1f2937] border border-white/10 rounded-xl p-3 text-white appearance-none cursor-pointer"
              value={categoria}
              onChange={e => setCategoria(e.target.value)}
            >
              <option value="" disabled>Selecciona una categoría</option>
              {tipo === 'ingreso' ? (
                <>
                  <option value="salario">Salario / Trabajo</option>
                  <option value="ingreso_extra">Ingreso Extra</option>
                  <option value="otros">Otros Ingresos</option>
                </>
              ) : (
                <>
                  <option value="alimentacion">Alimentación 🍔</option>
                  <option value="transporte">Transporte 🚌</option>
                  <option value="vivienda">Vivienda 🏠</option>
                  <option value="entretenimiento">Entretenimiento 🎬</option>
                  <option value="salud">Salud 💊</option>
                  <option value="educacion">Educación 📚</option>
                  <option value="otros">Otros Gastos</option>
                </>
              )}
            </select>

            <input
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white"
              placeholder="Descripción (ej: empanada, taxi, salario)"
              value={descripcion}
              onChange={e => setDescripcion(e.target.value)}
            />

            {tipo === 'gasto' && (
              <label className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer border transition-colors ${esHormiga ? 'bg-[#D8A93F]/10 border-[#D8A93F]/40' : 'bg-white/5 border-white/10'}`}>
                <input
                  type="checkbox"
                  checked={esHormiga}
                  onChange={e => setEsHormiga(e.target.checked)}
                  className="w-5 h-5 accent-[#D8A93F]"
                />
                <span className="text-white text-sm font-semibold">
                  {esHormiga ? '🐜 ¡Detectado como Gasto Hormiga!' : '¿Es un gasto hormiga?'}
                </span>
              </label>
            )}

            <div className="flex gap-3 justify-end mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-3 text-white/50 font-semibold"
              >
                Cancelar
              </button>
              <button
                onClick={handleSaveTransaction}
                disabled={saving || !monto || !categoria}
                className="bg-[#D8A93F] text-black px-6 py-3 rounded-xl font-bold flex-1 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {saving ? <span className="animate-spin text-xl">↻</span> : "Guardar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
