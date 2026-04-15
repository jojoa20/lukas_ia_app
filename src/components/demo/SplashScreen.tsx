import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onFinishLoading: () => void;
}

export default function SplashScreen({ onFinishLoading }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onFinishLoading, 800);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinishLoading]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="bg-[#21428D] fixed inset-0 z-[100] flex flex-col items-center justify-center"
        >
          <div className="relative w-[200px] h-[200px] flex items-center justify-center mb-8">
            <svg width="200" height="200" viewBox="0 0 200 200">
              <motion.line x1="50" y1="50" x2="100" y2="100" stroke="#D8A93F" strokeWidth="2" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.6 }} transition={{ duration: 1.5, delay: 0.2 }} />
              <motion.circle cx="100" cy="100" r="6" fill="#D8A93F" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 1.2 }} />
            </svg>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="text-[#D8A93F] text-4xl font-black">
            Lukas AI
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 }} className="text-white/60 text-sm mt-2 tracking-widest uppercase">
            Iniciando
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
