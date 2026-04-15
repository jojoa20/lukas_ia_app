import React, { useEffect, useState } from "react";
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

export default function HistorialView() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  
  // Form state
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
    if (!monto || !categoria || !descripcion) return;
    
    setLoading(true);
    const payload = {
      monto: Number(monto),
      tipo,
      categoria,
      descripcion
    };
    
    try {
      const res = await fetch('/api/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        const json = await res.json();
        // Aseguramos que la transacción se agrega al tope visual
        setTransactions(prev => [json.data, ...prev]);
        setShowModal(false);
        setMonto("");
        setCategoria("");
        setDescripcion("");
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
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-16 bg-white/5 rounded-2xl" />
          ))}
        </div>
      ) : transactions.length > 0 ? (
        <div className="space-y-3">
          {transactions.map(tx => (
            <motion.div 
              key={tx.id}
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
                  {tx.tipo === 'ingreso' ? '+' : '-'}${tx.monto.toLocaleString()}
                </span>
                {tx.es_gasto_hormiga && (
                  <p className="text-[9px] text-[#D8A93F] font-semibold">Gasto Hormiga 🐜</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
          <p className="opacity-50 text-sm">No hay movimientos registrados.</p>
        </div>
      )}

      {/* Botón Flotante */}
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
                className={`flex-1 py-2 text-sm font-bold rounded-md ${tipo === 'gasto' ? 'bg-red-500/20 text-red-400' : 'text-white/50'}`}
              >
                Gasto
              </button>
              <button 
                onClick={() => setTipo('ingreso')}
                className={`flex-1 py-2 text-sm font-bold rounded-md ${tipo === 'ingreso' ? 'bg-green-500/20 text-green-400' : 'text-white/50'}`}
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
              placeholder="Categoría (Ej. Comida, Transporte)" 
              value={categoria} 
              onChange={e => setCategoria(e.target.value)} 
            />
            <input 
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white" 
              placeholder="Descripción opcional" 
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
                {loading ? <span className="animate-spin text-xl">↻</span> : "Guardar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
