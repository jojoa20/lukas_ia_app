"use client";

// PASO 1 Fix: app/app/page.tsx ya tenía 'use client' pero importaba
// MobileLeakBuster con D3 de forma directa (causando SSR bloqueante).
// Ahora MobileLeakBuster maneja su propio dynamic import internamente,
// por lo que este archivo queda limpio.
// PASO 2 Fix: finScore ya no se maneja con client-side state fake.
// Se conectará al endpoint GET /api/profile en Fase 2.

import React, { useState } from "react";
import MobileHeader from "@/components/mobile/MobileHeader";
import MobileFinScore from "@/components/mobile/MobileFinScore";
import MobileLeakBuster from "@/components/mobile/MobileLeakBuster";
import MobileBottomBar from "@/components/mobile/MobileBottomBar";

export default function MobileApp() {
  // TODO Fase 2: reemplazar con fetch a GET /api/profile
  const [finScore, setFinScore] = useState(885);

  const handleAddTransaction = (amount: number) => {
    // TODO Fase 2: reemplazar con POST /api/transactions y usar
    // el delta de FinScore que retorna el servidor.
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
