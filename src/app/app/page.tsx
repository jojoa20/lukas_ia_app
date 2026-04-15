"use client";

import React from "react";
import MobileHeader from "@/components/mobile/MobileHeader";
import MobileFinScore from "@/components/mobile/MobileFinScore";
import MobileLeakBuster from "@/components/mobile/MobileLeakBuster";
import MobileBottomBar from "@/components/mobile/MobileBottomBar";
import { useFinScore, useTransactions, addTransaction, useProfile } from "@/lib/hooks";

export default function MobileApp() {
  const { profile, loading: profileLoading, error: profileError } = useProfile();
  const { score: finScore, loading: scoreLoading, refresh: refreshScore } = useFinScore();
  const { transactions, loading: txLoading, refresh: refreshTx } = useTransactions();

  // Calcular totales de gastos hormiga localmente a partir de las transacciones si el endpoint no lo da
  const hormigaTransactions = transactions.filter(t => t.es_gasto_hormiga);
  const gastoHormigaTotal = hormigaTransactions.reduce((acc, t) => acc + (t.monto || 0), 0);
  const gastosHormigaCount = hormigaTransactions.length;

  const handleAddTransaction = async (amount: number, category: string) => {
    const isGasto = amount < 0;

    const result = await addTransaction({
      tipo: isGasto ? "gasto" : "ingreso",
      monto: Math.abs(amount),
      categoria: category,
      descripcion: category,
      metodo_entrada: "manual",
      es_gasto_hormiga: isGasto && Math.abs(amount) < 50000,
      fecha_transaccion: new Date().toISOString().split("T")[0],
    });

    if (result.ok) {
      // Refrescar datos
      await refreshScore();
      await refreshTx();
    } else {
      alert("Error al guardar: " + result.error);
    }
  };

  if (profileLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#050505]">
        <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (profileError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#050505] p-8 text-center">
        <h2 className="text-xl font-bold text-white mb-4">¡Ups! Algo salió mal</h2>
        <p className="text-gray-400 mb-6">{profileError}</p>
        <button onClick={() => window.location.reload()} className="bg-cyan-600 text-white px-6 py-2 rounded-lg">Reintentar</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-full px-4 overflow-y-auto no-scrollbar relative">
      <MobileHeader />
      <MobileFinScore score={finScore} loading={scoreLoading} />
      <MobileLeakBuster 
        gastoHormigaTotal={gastoHormigaTotal}
        gastosHormigaCount={gastosHormigaCount}
        transactions={transactions}
        loading={txLoading}
      />
      <MobileBottomBar onTransactionAdd={handleAddTransaction} />
    </div>
  );
}
