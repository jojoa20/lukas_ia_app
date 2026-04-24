"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MobileLeakBuster() {
  const leaks = [
    { name: "Suscripciones", amount: "$45.000", color: "#FF5F5F" },
    { name: "Café diario", amount: "$32.000", color: "#D8A93F" },
    { name: "Domicilios", amount: "$68.000", color: "#50E3C2" },
  ];

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white/90">LeakBuster</h2>
        <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-1 rounded-full font-bold uppercase tracking-tighter">3 fugas activas</span>
      </div>

      <div className="space-y-4">
        {leaks.map((leak, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center justify-between p-3 bg-white/5 rounded-2xl border border-white/5"
          >
            <div className="flex items-center space-x-3">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                style={{ backgroundColor: `${leak.color}20`, color: leak.color }}
              >
                💧
              </div>
              <div>
                <p className="text-sm font-bold text-white">{leak.name}</p>
                <p className="text-[10px] text-white/40 uppercase">Gasto Mensual</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-black text-white">{leak.amount}</p>
              <button className="text-[10px] text-[#D8A93F] font-bold uppercase hover:underline">Cortar fuga</button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-[#D8A93F]/10 rounded-2xl border border-[#D8A93F]/20">
        <p className="text-xs text-white/80 leading-relaxed">
          <span className="font-bold text-[#D8A93F]">Tip de Lukas:</span> Has ahorrado <span className="font-bold">$145.000</span> este mes cerrando fugas. ¡Vas por buen camino, pana!
        </p>
      </div>
    </div>
  );
}
