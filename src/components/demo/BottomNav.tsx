import React from "react";
import { motion } from "framer-motion";

interface BottomNavProps {
  activeTab: string;
  onChangeTab: (tab: string) => void;
}

export default function BottomNav({ activeTab, onChangeTab }: BottomNavProps) {
  const tabs = [
    { id: "home", label: "Inicio", icon: "🌛" },
    { id: "chat", label: "Lukas", icon: "ª" },
    { id: "analytics", label: "Grupos", icon: "💬!" },
    { id: "metas", label: "Metas", icon: "🌅" },
    { id: "historial", label: "Historial", icon: "📇" },
  ];
  return (
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#111827]/95 backdrop-blur-xl border-t border-white/10 flex items-center justify-around px-2 z-50">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChangeTab(tab.id)}
            className={`flex flex-col items-center justify-center p-2 min-w-[50px] transition-all duration-300 ${isActive ? "text-[#D8A93F]" : "text-white/40"}`}
          >
            <span className="text-xl mb-0.5">{tab.icon}</span>
            <span className="text-[8px] font-bold tracking-wider uppercase">{tab.label}</span>
            {isActive && (
              <motion.div layoutId="activeTabDot" className="w-1 h-1 rounded-full bg-[#D8A93F] mt-1" />
            )}
          </button>
        );
      })}
    </div>
  );
}
