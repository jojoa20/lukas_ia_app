'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useConversation } from "@elevenlabs/react";

interface AuthenticatedBottomNavProps {
  activeTab: string;
  onChangeTab: (tab: string) => void;
  onTransactionAdd: (amount: number, category: string) => void;
}

export default function AuthenticatedBottomNav({ activeTab, onChangeTab, onTransactionAdd }: AuthenticatedBottomNavProps) {
  const [isRecording, setIsRecording] = useState(false);

  const conversation = useConversation({
    onConnect: () => setIsRecording(true),
    onDisconnect: () => setIsRecording(false),
    clientTools: {
      registrar_gasto: async (parameters: any) => {
        try {
          await onTransactionAdd(-Math.abs(parameters.monto), parameters.categoria || "Varios");
          return "Gasto registrado con éxito, Pana.";
        } catch (e) {
          return "Error al guardar.";
        }
      }
    }
  });

  const handleMicClick = async () => {
    if (conversation.status === 'connected') {
      await conversation.endSession();
    } else {
      try {
        // @ts-ignore
        await conversation.startSession({
          agentId: process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || "agent_7301kpehhg3ectrnc927cdhkbq",
        });
        onChangeTab("chat"); // Cambiar al chat cuando empiece a hablar
      } catch (error) {
        alert("Permisos de micrófono denegados.");
      }
    }
  };

  const tabs = [
    { 
      id: "home", 
      label: "Inicio", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      id: "metas", 
      label: "Metas", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: "chat",
      label: "Hablar",
      isCenter: true,
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    },
    { 
      id: "analytics", 
      label: "Grupos", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      id: "historial", 
      label: "Historial", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 sm:h-24 bg-[#111827]/95 backdrop-blur-xl border-t border-white/10 flex items-center justify-between px-2 sm:px-6 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        
        if (tab.isCenter) {
          return (
            <div key={tab.id} className="relative -top-6 flex flex-col items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleMicClick}
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(243,110,83,0.4)] border-4 border-[#111827] transition-colors duration-300 ${
                  conversation.status === 'connected' 
                    ? "bg-red-500 animate-pulse text-white" 
                    : "bg-gradient-to-r from-[#D8A93F] to-[#F36E53] text-[#111827]"
                }`}
              >
                {tab.icon}
              </motion.button>
              <span className={`text-[10px] mt-2 font-bold tracking-widest uppercase ${conversation.status === 'connected' ? 'text-red-400 animate-pulse' : 'text-white'}`}>
                {conversation.status === 'connected' ? "Escuchando" : tab.label}
              </span>
            </div>
          );
        }

        return (
          <button
            key={tab.id}
            onClick={() => onChangeTab(tab.id)}
            className={`flex flex-col items-center justify-center p-2 min-w-[60px] transition-all duration-300 ${
              isActive ? "text-[#D8A93F]" : "text-white/40 hover:text-white"
            }`}
          >
            <div className={`mb-1 transition-transform duration-300 ${isActive ? "scale-110 drop-shadow-[0_0_8px_rgba(216,169,63,0.8)]" : ""}`}>
              {tab.icon}
            </div>
            <span className={`text-[8px] font-bold tracking-wider uppercase ${isActive ? "opacity-100" : "opacity-40"}`}>
              {tab.label}
            </span>
            {isActive && (
              <motion.div layoutId="authActiveTabDot" className="w-1 h-1 rounded-full bg-[#D8A93F] mt-1 shadow-[0_0_8px_rgba(216,169,63,1)]" />
            )}
          </button>
        );
      })}
    </div>
  );
}
