import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Meta {
  id: string;
  nombre: string;
  monto_objetivo: number;
  monto_actual: number;
  porcentaje_completado: number;
}

export default function MetasView() {
  const [metas, setMetas] = useState<Meta[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/metas')
      .then(res => res.json())
      .then(json => {
        if (json.data) setMetas(json.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bottom-24">
      <h1 className="text-2xl font-bold mb-4 text-[#D8A93F]">Tus Metas</h1>
      
      {loading ? (
        <div className="animate-pulse space-y-4">
          {[1, 2].map(i => (
            <div key={i} className="h-24 bg-white/5 rounded-2xl" />
          ))}
        </div>
      ) : metas.length > 0 ? (
        <div className="space-y-4">
          {metas.map(meta => (
            <div key={meta.id} className="bg-white/5 p-5 rounded-2xl border border-white/10">
              <h3 className="text-lg font-bold">{meta.nombre}</h3>
              <div className="h-2 w-full bg-black rounded-full mt-2">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${meta.porcentaje_completado}%` }}
                  className="h-full bg-[#D8A93F] rounded-full" 
                />
              </div>
              <p className="text-xs mt-2 opacity-50">
                ${(meta.monto_actual / 1000000).toFixed(1)}M / ${(meta.monto_objetivo / 1000000).toFixed(1)}M
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white/5 p-8 rounded-2xl text-center border border-dashed border-white/10">
          <p className="opacity-50">No tienes metas activas.</p>
          <button className="mt-4 bg-[#D8A93F] text-black px-6 py-2 rounded-full font-bold text-sm">
            Crear Nueva Meta
          </button>
        </div>
      )}
    </motion.div>
  );
}
