"use client";

// PASO 1 Fix: app/app/page.tsx ya tenía 'use client' pero importaba
// MobileLeakBuster con D3 de forma directa (causando SSR bloqueante).
// Ahora MobileLeakBuster maneja su propio dynamic import internamente,
// por lo que este archivo queda limpio.
// PASO 2 Fix: finScore ya no se maneja con client-side state fake.
// Se conectará al endpoint GET /api/profile en Fase 2.

import React, { useState, useEffect } from "react";
import MobileHeader from "@/components/mobile/MobileHeader";
import MobileFinScore from "@/components/mobile/MobileFinScore";
import MobileLeakBuster from "@/components/mobile/MobileLeakBuster";
import MobileBottomBar from "@/components/mobile/MobileBottomBar";

export default function MobileApp() {
  const [finScore, setFinScore] = useState(0);
  const [loading, setLoading] = useState(true);

  // Carga inicial del perfil para el FinScore real
  useEffect(() => {
    fetch('/api/profile')
      .then(res => res.json())
      .then(json => {
        if (json.data && json.data.finscore_actual !== undefined) {
          setFinScore(json.data.finscore_actual);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleAddTransaction = async (amount: number, category: string) => {
    // LLamada real al endpoint de transacciones
    await fetch('/api/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        tipo: amount < 0 ? 'gasto' : 'ingreso',
        monto: Math.abs(amount), 
        categoria: 'gastos_diarios',
        descripcion: category,
        es_gasto_hormiga: amount < 0
      })
    });
    // Simula caída temporal para UI feedback de forma simple, 
    // pero idealmente volvería a llamar al profile
    if (amount < 0) {
      setFinScore((prev) => Math.max(0, prev - 15));
    }
  };

  return (
    <div className="flex flex-col w-full h-full px-4 overflow-y-auto no-scrollbar relative">
      <MobileHeader />
      <MobileFinScore score={finScore} />
      <MobileLeakBuster />
      <MobileBottomBar onTransactionAdd={handleAddTransaction} />
    </div>
  );
}
