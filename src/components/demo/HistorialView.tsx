"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { transactionVisual } from "@/lib/visual-assets";

interface Transaction {
  id: string;
  tipo: 'ingreso' | 'gasto';
  monto: number;
  categoria: string;
  descripcion: string;
  fecha_transaccion: string;
  es_gasto_hormiga: boolean;
}

export default function HistorialView() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const [monto, setMonto] = useState("");
  const [tipo, setTipo] = useState<'ingreso' | 'gasto'>('gasto');
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");

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
    setLoading(true);
    try {
      const res = await fetch('/api/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          monto: Number(monto),
          tipo,
          categoria,
          descripcion,
          metodo_entrada: 'manual',
        }),
      });
      if (res.ok) {
        const json = await res.json();
        setTransactions(prev => [json.data, ...prev]);
        setShowModal(false);
        setMonto(""); setCategoria(""); setDescripcion("");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 mb-24 min-h-screen relative">
      <h1 className="text-2xl font-bold mb-6 text-[#D8A93F]">Mi Actividad</h1>

      {loading && transactions.length === 0 ? (
        <div className="space-y-3 animate-pulse">
          {[1, 2, 3, 4].map(i => <div key={i} className="h-16 bg-white/5 rounded-2xl" />)}
        </div>
      ) : transactions.length > 0 ? (
        <div className="space-y-3">
          {transactions.map(tx => {
            const visual = transactionVisual(tx.descripcion, tx.categoria, tx.tipo, tx.es_gasto_hormiga);
            return (
            <motion.div
              key={tx.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 p-3 rounded-2xl flex justify-between items-center border border-white/5"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/10 flex-shrink-0 bg-white/5">
                  <img
                    src={visual.src}
                    alt={visual.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-sm font-black border border-[#111827] ${
                    tx.tipo === 'ingreso' ? 'bg-green-500 text-black' : 'bg-[#111827] text-[#F36E53]'
                  }`}>
                    {tx.tipo === 'ingreso' ? '+' : '-'}
                  </span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-sm text-white truncate max-w-[160px]">{tx.descripcion || tx.categoria}</h4>
                  <p className="text-[10px] opacity-40 uppercase tracking-wider">
                    {tx.fecha_transaccion
                      ? new Date(tx.fecha_transaccion).toLocaleDateString('es-CO', { day: 'numeric', month: 'short', year: 'numeric' })
                      : 'Sin fecha'}
                  </p>
                  <p className={`text-[10px] uppercase tracking-wider font-bold mt-1 ${visual.accent}`}>
                    {visual.label}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className={`font-bold ${tx.tipo === 'ingreso' ? 'text-green-400' : 'text-white'}`}>
                  {tx.tipo === 'ingreso' ? '+' : '-'}${tx.monto.toLocaleString('es-CO')}
                </span>
                {tx.es_gasto_hormiga && (
                  <p className="text-[9px] text-[#D8A93F] font-semibold">Gasto Hormiga 🐜</p>
                )}
              </div>
            </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
          <p className="opacity-50 text-sm">No hay movimientos registrados.</p>
        </div>
      )}

      {/* Boton flotante */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-24 right-6 w-14 h-14 bg-[#D8A93F] rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="black" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-[#111827] p-6 rounded-3xl w-full max-w-sm border border-white/10 space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">Registrar Movimiento</h2>

            <div className="flex gap-2 mb-4 p-1 bg-white/5 rounded-lg">
              <button
                onClick={() => setTipo('gasto')}
                className={`flex-1 py-2 text-sm font-bold rounded-md transition-colors ${
                  tipo === 'gasto' ? 'bg-red-500/20 text-red-400' : 'text-white/50'
                }`}
              >
                Gasto
              </button>
              <button
                onClick={() => setTipo('ingreso')}
                className={`flex-1 py-2 text-sm font-bold rounded-md transition-colors ${
                  tipo === 'ingreso' ? 'bg-green-500/20 text-green-400' : 'text-white/50'
                }`}
              >
                Ingreso
              </button>
            </div>

            <input
              type="number"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white text-lg font-bold"
              placeholder="$ Monto"
              value={monto}
              onChange={e => setMonto(e.target.value)}
            />
            <input
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white"
              placeholder="Categoria (Ej. Comida, Transporte)"
              value={categoria}
              onChange={e => setCategoria(e.target.value)}
            />
            <input
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white"
              placeholder="Descripcion opcional"
              value={descripcion}
              onChange={e => setDescripcion(e.target.value)}
            />

            <div className="flex gap-3 justify-end mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-3 text-white/50 font-semibold"
              >
                Cancelar
              </button>
              <button
                onClick={handleSaveTransaction}
                disabled={loading || !monto || !categoria}
                className="bg-[#D8A93F] text-black px-6 py-3 rounded-xl font-bold flex-1 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : "Guardar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
