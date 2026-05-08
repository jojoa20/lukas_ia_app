"use client";

interface MobileHeaderProps {
  userName?: string;
  streak?: number;
}

export default function MobileHeader({ userName, streak = 0 }: MobileHeaderProps) {
  const isHighStreak = streak >= 7;

  return (
    <div className="mb-4 mt-4">
      {/* Greeting */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-[#EBB33E] font-black tracking-tight text-xl mb-0.5">lukas</h1>
          <h2 className="text-2xl font-bold">
            ¡Qué más, <span className="text-[#EBB33E]">{userName ?? "Pana"}</span>!
          </h2>
        </div>
        {/* Avatar */}
        <div className="w-11 h-11 rounded-full border-2 border-[#EBB33E] shadow-[0_0_12px_rgba(235,179,62,0.4)] bg-[#111827] flex items-center justify-center">
          <svg className="w-5 h-5 text-[#EBB33E]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Racha Badge */}
      {streak > 0 && (
        <div
          className={`w-full border-l-4 p-3 rounded-r-2xl flex items-center gap-3 backdrop-blur-md ${
            isHighStreak
              ? "bg-gradient-to-r from-[#F36E53]/20 to-transparent border-[#F36E53]"
              : "bg-gradient-to-r from-[#EBB33E]/20 to-transparent border-[#EBB33E]"
          }`}
        >
          <div className={`text-xl drop-shadow-md ${isHighStreak ? "animate-bounce" : ""}`}>🔥</div>
          <div>
            <div className={`font-bold text-sm tracking-wide ${isHighStreak ? "text-[#F36E53]" : "text-[#EBB33E]"}`}>
              Racha de Ahorro: {streak} Días
            </div>
            <div className="text-white/60 text-xs">
              {isHighStreak ? "¡Estás en llamas! 🔥" : "Mantén el ritmo para ganar el badge de Oro."}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
