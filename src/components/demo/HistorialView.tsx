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

  useEffect(() => {
    fetch('/api/transactions')
      .then(res => res.json())
      .then(json => {
        if (json.data) setTransactions(json.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 mb-24 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-[#D8A93F]">Mi Actividad</h1>
      
      {loading ? (
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
                  <p className="text-[10px] opacity-40 uppercase tracking-wider">{tx.fecha_transaccion}</p>
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
    </motion.div>
  );
}
