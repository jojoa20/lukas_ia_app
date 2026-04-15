"use client";
import React from "react";

export default function FinScoreDial() {
  return (
    <div className="bg-[#18264A]/80 border border-blue-800/30 rounded-[20px] p-6 flex flex-col items-center justify-center relative shadow-lg shadow-blue-900/10 w-full mb-4 mt-2">
      {/* 180deg semi-circle gradient SVG */}
      <div className="relative w-[220px] h-[110px] mb-4">
        <svg viewBox="0 0 200 100" className="w%sfull h-full drop-shadow-lg overflow-visible">
          <defs>
            <linearGradient id="score-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="60%" stopColor="#93C5FD" />
              <stop offset="80%" stopColor="#FDE047" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
          </defs>
          <path d="M 10 90 A 80 80 0 0 1 190 90" fill="none" stroke="#1E2A4F" strokeWidth="10" strokeLinecap="round" />
          <path d="M 10 90 A 80 80 0 0 1 190 90" fill="none" stroke="url(#score-gradient)" strokeWidth="10" strokeLinecap="round" strokeDasharray="251.2" strokeDashoffset="30" />
        </svg>
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center">
          <span className="text-blue-200/80 text-sm font-medium">FinScore</span>
          <span className="text-[#FBBF24] text-[42px] font-bold tracking-tight leading-none">8850</span>
        </div>
      </div>
      <p className="text-[#93A5C9] text-sm font-medium mt-2">Tu salud financiera: ¡Excelente, pana!</p>
    </div>
  );
}
