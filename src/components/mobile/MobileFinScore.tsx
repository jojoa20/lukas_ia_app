"use client";

import React from "react";
import { motion } from "framer-motion";

interface MobileFinScoreProps {
  score?: number;
}

export default function MobileFinScore({ score = 750 }: MobileFinScoreProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-xl font-bold text-white/90">Tu FinScore</h2>
        
        <div className="relative w-48 h-48 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="80"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              className="text-white/5"
            />
            <motion.circle
              cx="96"
              cy="96"
              r="80"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              strokeDasharray={502.6}
              initial={{ strokeDashoffset: 502.6 }}
              animate={{ strokeDashoffset: 502.6 - (502.6 * score) / 1000 }}
              className="text-[#D8A93F]"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-black text-white">{score}</span>
            <span className="text-xs font-medium text-white/40 tracking-widest uppercase">Excelente</span>
          </div>
        </div>

        <div className="w-full grid grid-cols-3 gap-2">
          <div className="bg-white/5 rounded-xl p-2 text-center">
            <p className="text-[10px] text-white/40 uppercase">Ahorro</p>
            <p className="text-sm font-bold text-white">+12%</p>
          </div>
          <div className="bg-white/5 rounded-xl p-2 text-center">
            <p className="text-[10px] text-white/40 uppercase">Deuda</p>
            <p className="text-sm font-bold text-white">-5%</p>
          </div>
          <div className="bg-white/5 rounded-xl p-2 text-center">
            <p className="text-[10px] text-white/40 uppercase">Meta</p>
            <p className="text-sm font-bold text-white">92%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
