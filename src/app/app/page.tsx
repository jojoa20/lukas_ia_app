"use client";

import React, { useState } from "react";
import AuthenticatedBottomNav from "@/components/mobile/AuthenticatedBottomNav";
import { AnimatePresence, motion } from "framer-motion";

// Vistas — exactas del 15 de abril + navegación 5 menús
import HomeView from "@/components/demo/HomeView";
import MetasView from "@/components/demo/MetasView";
import HistorialView from "@/components/demo/HistorialView";
import ChatView from "@/components/demo/ChatView";
import AnalyticsView from "@/components/demo/AnalyticsView";

export default function MobileApp() {
  const [activeTab, setActiveTab] = useState("home");

  const handleAddTransaction = async (amount: number, category: string) => {
    const isGasto = amount < 0;
    try {
      await fetch('/api/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tipo: isGasto ? "gasto" : "ingreso",
          monto: Math.abs(amount),
          categoria: category,
          descripcion: category,
          metodo_entrada: "manual",
          es_gasto_hormiga: isGasto && Math.abs(amount) < 50000,
          fecha_transaccion: new Date().toISOString().split("T")[0],
        })
      });
    } catch (e) {
      console.error(e);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomeView onOpenAlert={() => setActiveTab("grupos")} />;
      case "metas":
        return <MetasView />;
      case "analytics":
      case "grupos":
        return <AnalyticsView />;
      case "historial":
        return <HistorialView />;
      case "chat":
        return <ChatView />;
      default:
        return <div className="text-white text-center mt-20">Vista no encontrada</div>;
    }
  };

  return (
    <div className="flex flex-col w-full h-full relative overflow-hidden bg-[#050505]">
      <div className="flex-1 overflow-y-auto no-scrollbar pb-24 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>

      <AuthenticatedBottomNav
        activeTab={activeTab}
        onChangeTab={setActiveTab}
        onTransactionAdd={handleAddTransaction}
      />
    </div>
  );
}
