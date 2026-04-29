import React from "react";
import { motion } from "framer-motion";

interface BottomNavProps {
  activeTab: string;
  onChangeTab: (tab: string) => void;
}

export default function BottomNav({ activeTab, onChangeTab }: BottomNavProps) {
  const tabs = [
    { id: "home", label: "Inicio", icon: "🏠" },
    { id: "chat", label: "Lukas", icon: "🤖" },
    { id: "analytics", label: "Análisis", icon: "📊" },
    { id: "metas", label: "Metas", icon: "🎯" },
    { id: "historial", label: "Historial", icon: "📜" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] h-18 glass rounded-[2.5rem] border-white/10 flex items-center justify-around px-4 z-50 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChangeTab(tab.id)}
            className="relative flex flex-col items-center justify-center p-2 min-w-[60px] group transition-all duration-300"
          >
            <div className={`relative z-10 transition-transform duration-300 ${isActive ? "scale-110 -translate-y-1" : "scale-100 translate-y-0"}`}>
              <span className={`text-xl ${isActive ? "opacity-100" : "opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all"}`}>
                {tab.icon}
              </span>
            </div>
            
            <span className={`text-[8px] font-black tracking-widest uppercase mt-1 z-10 transition-all duration-300 ${isActive ? "opacity-100 text-[#D8A93F]" : "opacity-0 translate-y-2 h-0"}`}>
              {tab.label}
            </span>

            {isActive && (
              <motion.div 
                layoutId="activeTabGlow"
                className="absolute inset-0 bg-[#D8A93F]/10 blur-xl rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            
            {isActive && (
              <motion.div 
                layoutId="activeTabPill"
                className="absolute top-0 w-8 h-1 bg-[#D8A93F] rounded-full shadow-[0_0_10px_#D8A93F]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
