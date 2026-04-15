"use client";

import React, { useState } from "react";

interface MobileBottomBarProps {
  onTransactionAdd: (amount: number, category: string) => void;
}

export default function MobileBottomBar({ onTransactionAdd }: MobileBottomBarProps) {
  const [isRecording, setIsRecording] = useState(false);

  const handleMicClick = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false);
        onTransactionAdd(-15000, "Gasto Hormiga (Café)");
      }, 2000);
    }
  };

  return (
    <div className="mt-auto pb-6 w-full px-4 relative z-20">
      <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-semibold text-white/80 mb-6">
        <div className="flex flex-col justify-center border-r border-white/10 pr-2 cursor-pointer">Ver mi<br />presupuesto</div>
        <div className="flex flex-col justify-center border-r border-white/10 px-2 cursor-pointer">Metas de<br />ahorro</div>
        <div className="flex flex-col justify-center pl-2 cursor-pointer">Historial de<br />transacciones</div>
      </div>
      <div onClick={handleMicClick} className={`h-[60px] rounded-[30px] flex items-center px-5 cursor-pointer transition-all duration-300 ${isRecording ? "bg-[#ff7a59] shadow-[0_0_40px_rgba(255,122,89,0.5)] scale-105" : "bg-[#B3E5D1] shadow-[0_0_30px_rgba(179,229,209,0.3)]"}`}>
        <svg className={`w-6 h-6 mr-3 ${isRecording ? "text-white animate-pulse" : "text-[#1a1525]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0h-4m4 0h1xm-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
        <span className={`text-lg font-semibold flex-1 ${isRecording ? "text-white" : "text-[#1a1525] opacity-80"}`}>{isRecording ? "Escuchando..." : "Dime un gasto..."}</span>
      </div>
    </div>
  );
}
