"use client";
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
  const [saving, setSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [nombre, setNombre] = useState("");
  const [monto, setMonto] = useState("");

  useEffect(() => {
    fetch('/api/metas')
      .then(res => res.json())
      .then(json => {
        if (json.data) setMetas(json.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Formatea números para mostrar: $5.0k, $1.2M, etc.
  const formatMoney = (val: number) => {
    if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
    if (val >= 1000) return `$${(val / 1000).toFixed(1)}k`;
    return `$${val}`;
  };

  const handleCreate = async () => {
    if (!nombre || !monto) return;
    setSaving(true);
    try {
      const res = await fetch('/api/metas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, monto_objetivo: Number(monto) })
      });
      if (res.ok) {
        const json = await res.json();
        const newMeta = Array.isArray(json.data) ? json.data[0] : json.data;
        if (newMeta) setMetas(prev => [newMeta, ...prev]);
        setShowModal(false);
        setNombre("");
        setMonto("");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 pb-32 min-h-screen relative">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#D8A93F]">Tus Metas</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#D8A93F] text-black px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
        >
          + Nueva Meta
        </button>
      </div>

      {/* Modal para crear meta */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-[#111827] p-6 rounded-3xl w-full max-w-sm border border-white/10 space-y-4">
            <h2 className="text-xl font-bold text-white">Crear Meta</h2>
            <input
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white"
              placeholder="Nombre (ej. Viaje a San Andrés)"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white text-lg font-bold"
              placeholder="$ Monto Objetivo"
              value={monto}
              onChange={e => setMonto(e.target.value.replace(/\D/g, ''))}
            />
            <div className="flex gap-2 justify-end mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-white/50 font-semibold"
              >
                Cancelar
              </button>
              <button
                onClick={handleCreate}
                disabled={saving || !nombre || !monto}
                className="bg-[#D8A93F] text-black px-6 py-2 rounded-xl font-bold disabled:opacity-50 flex items-center gap-2"
              >
                {saving ? <span className="animate-spin">↻</span> : "Guardar"}
              </button>
            </div>
          </div>
        </div>
      )}

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
              <div className="h-2 w-full bg-black rounded-full mt-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(meta.porcentaje_completado || 0, 100)}%` }}
                  className="h-full bg-[#D8A93F] rounded-full"
                />
              </div>
              <p className="text-xs mt-2 opacity-50 font-medium tracking-wide">
                {formatMoney(meta.monto_actual || 0)} / {formatMoney(meta.monto_objetivo || 0)}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white/5 p-8 rounded-2xl text-center border border-dashed border-white/10 flex flex-col items-center gap-4">
          <p className="opacity-50">No tienes metas activas.</p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#D8A93F] text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
          >
            + Crear mi primera meta
          </button>
        </div>
      )}
    </motion.div>
  );
}
