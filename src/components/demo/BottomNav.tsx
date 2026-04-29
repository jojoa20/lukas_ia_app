import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BottomNavProps {
  activeTab: string;
  onChangeTab: (tab: string) => void;
}

export default function BottomNav({ activeTab, onChangeTab }: BottomNavProps) {
  const tabs = [
    { id: "home", label: "Dashboard", icon: "🏠" },
    { id: "chat", label: "Lukas AI", icon: "🤖" },
    { id: "analytics", label: "Análisis", icon: "📊" },
    { id: "metas", label: "Futuro", icon: "🎯" },
    { id: "historial", label: "Actividad", icon: "📜" },
  ];

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[92%] max-w-[440px] h-20 glass-elite rounded-[3rem] border-white/10 flex items-center justify-around px-6 z-50 shadow-[0_40px_80px_rgba(0,0,0,0.8)] inner-highlight">
      {/* Floating Active Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none" />
      
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChangeTab(tab.id)}
            className="relative flex flex-col items-center justify-center p-2 min-w-[64px] group transition-all duration-500"
          >
            {/* Animated Icon Container */}
            <motion.div 
              animate={isActive ? { y: -6, scale: 1.1 } : { y: 0, scale: 1 }}
              className={`relative z-10 transition-all duration-500 ${isActive ? "text-[#D8A93F]" : "text-white/20"}`}
            >
              <span className={`text-2xl filter ${isActive ? "drop-shadow-[0_0_12px_rgba(216,169,63,0.5)] grayscale-0" : "grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-300"}`}>
                {tab.icon}
              </span>
            </motion.div>
            
            {/* Animated Label */}
            <motion.span 
              initial={false}
              animate={isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 5, scale: 0.8 }}
              className="text-[9px] font-black tracking-[0.2em] uppercase mt-2 z-10 text-[#D8A93F] transition-all duration-500"
            >
              {tab.label}
            </motion.span>

            {/* Premium Active Indicator Glow */}
            <AnimatePresence>
              {isActive && (
                <>
                  <motion.div 
                    layoutId="activeTabPill"
                    className="absolute top-0 w-10 h-[2px] bg-[#D8A93F] rounded-full shadow-[0_0_15px_#D8A93F] z-20"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  />
                  <motion.div 
                    layoutId="activeTabAmbientGlow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#D8A93F]/5 blur-2xl rounded-full -z-10"
                    transition={{ duration: 0.4 }}
                  />
                </>
              )}
            </AnimatePresence>

            {/* Hover Indicator */}
            <div className="absolute inset-0 bg-white/[0.02] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
          </button>
        );
      })}
    </div>
  );
}
