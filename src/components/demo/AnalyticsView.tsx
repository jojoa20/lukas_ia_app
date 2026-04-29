"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { createGroup, listGroups } from "@/lib/supabase/actions";

type GroupItem = {
  id?: string;
  nombre?: string;
  tipo?: string;
  rol?: string;
  created_at?: string;
};

export default function AnalyticsView() {
  const [groups, setGroups] = useState<GroupItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState<"pareja" | "familia" | "amigos" | "otro">("amigos");
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState("");

  const pendingInvites = useMemo(
    () => groups.filter((group) => group.rol === "admin").length,
    [groups],
  );

  const loadGroups = async () => {
    setLoading(true);
    const result = await listGroups();
    if (result.success) setGroups(result.data || []);
    setLoading(false);
  };

  useEffect(() => {
    loadGroups();
  }, []);

  const handleCreateGroup = async () => {
    if (!nombre.trim() || !email.trim()) return;
    setSaving(true);
    setNotice("");

    const result = await createGroup({
      nombre: nombre.trim(),
      tipo,
      invitee_email: email.trim(),
    });

    if (result.success) {
      setGroups((prev) => [{ ...result.data, rol: "admin" }, ...prev]);
      setNotice("Grupo creado. La invitacion quedo registrada para tu amigo.");
      setNombre("");
      setEmail("");
      setTipo("amigos");
      setShowForm(false);
    } else {
      setNotice(result.error || "No se pudo crear el grupo.");
    }

    setSaving(false);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-5 pb-32 min-h-screen">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#D8A93F]">Grupos</h1>
          <p className="text-white/45 text-xs mt-1">Comparte metas, gastos y presupuestos con tu gente.</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#D8A93F] text-black px-4 py-3 rounded-2xl font-black text-sm"
        >
          Crear
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <p className="text-white/45 text-[10px] uppercase tracking-widest">Activos</p>
          <p className="text-white text-2xl font-black mt-1">{groups.length}</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <p className="text-white/45 text-[10px] uppercase tracking-widest">Admins</p>
          <p className="text-white text-2xl font-black mt-1">{pendingInvites}</p>
        </div>
      </div>

      {notice && (
        <div className="mb-4 rounded-2xl border border-[#D8A93F]/30 bg-[#D8A93F]/10 p-4 text-sm text-[#D8A93F]">
          {notice}
        </div>
      )}

      {loading ? (
        <div className="space-y-3 animate-pulse">
          {[1, 2, 3].map((item) => (
            <div key={item} className="h-20 rounded-2xl bg-white/5" />
          ))}
        </div>
      ) : groups.length > 0 ? (
        <div className="space-y-3">
          {groups.map((group, index) => (
            <div key={group.id || index} className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-white font-bold">{group.nombre || "Grupo sin nombre"}</h3>
                  <p className="text-white/45 text-xs capitalize">{group.tipo || "amigos"} · {group.rol || "miembro"}</p>
                </div>
                <span className="h-10 w-10 rounded-2xl bg-[#397DC1]/20 text-[#8cc8ff] flex items-center justify-center font-black">
                  {(group.nombre || "G").charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white/5 rounded-3xl border border-dashed border-white/10">
          <p className="text-white/50 text-sm mb-4">Aun no tienes grupos.</p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-[#D8A93F] text-black px-6 py-3 rounded-xl font-bold"
          >
            Crear mi primer grupo
          </button>
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 w-full max-w-sm space-y-4">
            <div>
              <h2 className="text-white text-xl font-black">Crear grupo</h2>
              <p className="text-white/45 text-xs mt-1">Invita a tu amigo con su correo.</p>
            </div>

            <input
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white"
              placeholder="Nombre del grupo"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
            />

            <input
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white"
              placeholder="Correo de tu amigo"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <select
              className="w-full bg-[#1f2937] border border-white/10 rounded-xl p-3 text-white"
              value={tipo}
              onChange={(event) => setTipo(event.target.value as typeof tipo)}
            >
              <option value="amigos">Amigos</option>
              <option value="familia">Familia</option>
              <option value="pareja">Pareja</option>
              <option value="otro">Otro</option>
            </select>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-3 text-white/55 font-semibold"
              >
                Cancelar
              </button>
              <button
                onClick={handleCreateGroup}
                disabled={saving || !nombre.trim() || !email.trim()}
                className="flex-1 bg-[#D8A93F] text-black px-5 py-3 rounded-xl font-black disabled:opacity-50"
              >
                {saving ? "Creando..." : "Crear e invitar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
