"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { goalVisual } from "@/lib/visual-assets";

interface Meta {
  id: string;
  nombre: string;
  monto_objetivo: number;
  monto_actual: number;
  porcentaje_completado: number;
  fecha_objetivo?: string;
  prioridad?: number;
}

function prioLabel(p?: number) {
  return p === 1 ? 'Alta' : p === 3 ? 'Baja' : 'Media';
}

function prioColor(p?: number) {
  return p === 1 ? 'text-red-400' : p === 3 ? 'text-blue-400' : 'text-yellow-400';
}

export default function MetasView() {
  const [metas, setMetas] = useState<Meta[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [nombre, setNombre] = useState("");
  const [monto, setMonto] = useState("");
  const [fecha, setFecha] = useState("");
  const [prioridad, setPrioridad] = useState<1 | 2 | 3>(2);

  useEffect(() => {
    fetch('/api/metas')
      .then(res => res.json())
      .then(json => {
        if (json.data) setMetas(json.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleCreate = async () => {
    if (!nombre || !monto) return;
    const res = await fetch('/api/metas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nombre,
        monto_objetivo: Number(monto),
        fecha_objetivo: fecha || undefined,
        prioridad,
        tipo: 'ahorro',
      }),
    });
    if (res.ok) {
      const json = await res.json();
      setMetas(prev => [json.data, ...prev]);
      setShowModal(false);
      setNombre(""); setMonto(""); setFecha(""); setPrioridad(2);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 pb-28 relative">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#D8A93F]">Tus Metas</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#D8A93F] text-black px-4 py-2 rounded-full font-bold text-sm"
        >
          + Nueva Meta
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-[#111827] p-6 rounded-2xl w-full max-w-sm border border-white/10 space-y-4">
            <h2 className="text-xl font-bold text-white">Crear Meta</h2>
            <input
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white"
              placeholder="Nombre (ej. Viaje a San Andres)"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
            <input
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white"
              placeholder="Monto Objetivo (COP)"
              type="number"
              value={monto}
              onChange={e => setMonto(e.target.value)}
            />
            <input
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white"
              type="date"
              placeholder="Fecha objetivo"
              value={fecha}
              onChange={e => setFecha(e.target.value)}
            />
            <div>
              <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">Prioridad</label>
              <div className="flex gap-2">
                {([1, 2, 3] as const).map(p => (
                  <button
                    key={p}
                    onClick={() => setPrioridad(p)}
                    className={`flex-1 py-2 rounded-lg text-sm font-bold border transition-colors ${
                      prioridad === p
                        ? 'bg-[#D8A93F] text-black border-[#D8A93F]'
                        : 'border-white/10 text-white/50'
                    }`}
                  >
                    {prioLabel(p)}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-2 justify-end mt-4">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 text-white/50">
                Cancelar
              </button>
              <button
                onClick={handleCreate}
                className="bg-[#D8A93F] text-black px-6 py-2 rounded-lg font-bold"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <div className="animate-pulse space-y-4">
          {[1, 2].map(i => <div key={i} className="h-24 bg-white/5 rounded-2xl" />)}
        </div>
      ) : metas.length > 0 ? (
        <div className="space-y-4 pb-20">
          {metas.map(meta => {
            const pct = meta.porcentaje_completado
              || Math.min(100, Math.round((meta.monto_actual / meta.monto_objetivo) * 100));
            const visual = goalVisual(meta.nombre);
            return (
              <div key={meta.id} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                <div className="relative h-28 bg-white/5">
                  <img
                    src={visual.src}
                    alt={visual.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent" />
                  <span className={`absolute left-4 bottom-3 text-[10px] uppercase tracking-wider font-black ${visual.accent}`}>
                    {visual.label}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3 gap-3">
                    <h3 className="text-lg font-bold text-white leading-tight">{meta.nombre}</h3>
                    {meta.prioridad && (
                      <span className={`text-xs font-bold uppercase ${prioColor(meta.prioridad)} flex-shrink-0`}>
                        {prioLabel(meta.prioridad)}
                      </span>
                    )}
                  </div>
                  <div className="h-2 w-full bg-black rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-[#D8A93F] rounded-full"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-xs opacity-50">
                      ${Math.round(meta.monto_actual / 1000)}k / ${Math.round(meta.monto_objetivo / 1000)}k COP
                    </p>
                    <p className="text-xs text-[#D8A93F] font-bold">{pct}%</p>
                  </div>
                  {meta.fecha_objetivo && (
                    <p className="text-[10px] opacity-30 mt-1">
                      Fecha objetivo: {new Date(meta.fecha_objetivo).toLocaleDateString('es-CO')}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white/5 p-8 rounded-2xl text-center border border-dashed border-white/10">
          <p className="opacity-50">No tienes metas activas.</p>
          <p className="opacity-30 text-xs mt-2">Pide a Lukas que cree una o usa el boton de arriba.</p>
        </div>
      )}
    </motion.div>
  );
}
