"use client";
import React from "react";
import { motion } from "framer-motion";

interface AlertModalProps {
  onClose: () => void;
}

export default function AlertModal({ onClose }: AlertModalProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-[#1a2a5e] border border-[#F36E53]/40 w-full max-w-sm rounded-[32px] p-8 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-4">
           <button onClick={onClose} className="text-white/40 hover:text-white">✕</button>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#F36E53]/20 border border-[#F36E53]/40 flex items-center justify-center mb-6">
            <span className="text-3xl">🐜</span>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-2">¡Alerta Hormiga!</h2>
          <p className="text-white/60 text-sm mb-8">
            Pana, Lukas detectó que hoy te pasaste de tintos y empanadas. 
            Esto le quita -5 puntos a tu FinScore semanal.
          </p>

          <div className="w-full space-y-3">
            <button 
              onClick={onClose}
              className="w-full bg-[#F36E53] text-white font-bold py-4 rounded-2xl shadow-lg shadow-[#F36E53]/20 transition-transform active:scale-95"
            >
              Lo tendré en cuenta
            </button>
            <button 
              onClick={onClose}
              className="w-full bg-white/5 text-white/60 font-medium py-3 rounded-2xl text-sm"
            >
              Ver desglose
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#F36E53]/10 rounded-full blur-3xl" />
      </motion.div>
    </motion.div>
  );
}
