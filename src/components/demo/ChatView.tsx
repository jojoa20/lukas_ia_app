"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "@ai-sdk/react";

export default function ChatView() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat({});
  const scrollRef = useRef<HTMLDivElement>(null);
  const isLoading = status === 'submitted';

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    const userMessage = input;
    setInput("");
    await sendMessage({ role: 'user', parts: [{ type: 'text', text: userMessage }] });
  };

  const suggestions = [
    "¿En qué se me fue la plata hoy, Pana? 🤔",
    "¿Cómo va mi meta del viaje? ✈️",
    "Registra un almuerzo de $25k 🍲",
    "Dame un consejo para ahorrar más 💰"
  ];

  return (
    <div className="flex flex-col h-[100dvh] p-8 max-w-lg mx-auto relative">
      <header className="mb-10 pt-6 relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse shadow-[0_0_10px_#00ff9d]" />
          <p className="text-[#D8A93F] text-[10px] font-black uppercase tracking-[0.4em] opacity-80">Lukas Inteligente v2.0</p>
        </div>
        <h1 className="text-white font-black text-4xl tracking-tight leading-none">
          Habla con <span className="text-premium">Lukas</span>
        </h1>
      </header>
      
      <div 
        ref={scrollRef} 
        className="flex-1 overflow-y-auto space-y-8 mb-6 no-scrollbar pr-2 relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {messages.length === 0 && !isLoading && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-10"
            >
              <div className="max-w-[90%] p-8 rounded-[3rem] rounded-tl-none glass-elite border-white/5 text-white/90 shadow-2xl inner-highlight">
                <p className="text-lg leading-relaxed font-bold mb-4">
                  ¡Habla, Pana! ¿Todo bien o qué? 👋
                </p>
                <p className="text-sm leading-relaxed text-white/60 font-medium">
                  Soy tu mano derecha para las lucas. Cuéntame qué compraste hoy o si quieres ver cómo va tu plan de ahorro. <br/><br/>
                  <span className="text-[#D8A93F] font-black">Tu yo del futuro me lo pidió. 😉</span>
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-2">¿Empezamos con esto?</p>
                <div className="flex flex-wrap gap-3">
                  {suggestions.map((s, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(216, 169, 63, 0.1)" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setInput(s)}
                      className="px-6 py-4 glass-elite rounded-[2rem] text-xs font-black text-white/70 border-white/10 hover:text-[#D8A93F] hover:border-[#D8A93F]/30 transition-all text-left"
                    >
                      {s}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {messages.map((m, idx) => (
            <motion.div 
              key={m.id || idx}
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] p-7 rounded-[2.5rem] shadow-2xl relative ${
                  m.role === 'user' 
                    ? 'bg-gradient-to-br from-[#D8A93F] to-[#f3d48d] text-black rounded-tr-none font-black text-base shadow-[0_15px_30px_rgba(216,169,63,0.3)]' 
                    : 'glass-elite border-white/5 text-white/90 rounded-tl-none inner-highlight'
                }`}
              >
                {m.parts.map((part, pIdx) => (
                  part.type === 'text' ? (
                    <p key={pIdx} className="leading-relaxed font-medium">{part.text}</p>
                  ) : null
                ))}
              </div>
            </motion.div>
          ))}

          {isLoading && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex justify-start"
            >
              <div className="max-w-[85%] p-7 rounded-[2.5rem] rounded-tl-none glass-elite border-white/5 flex items-center gap-4">
                <div className="flex gap-2">
                  <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-2.5 h-2.5 rounded-full bg-[#D8A93F]" />
                  <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }} className="w-2.5 h-2.5 rounded-full bg-[#D8A93F]" />
                  <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }} className="w-2.5 h-2.5 rounded-full bg-[#D8A93F]" />
                </div>
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Lukas está analizando...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Premium Personality Input */}
      <form 
        onSubmit={handleSubmit} 
        className="relative z-20 pb-32"
      >
        <motion.div 
          className="flex gap-3 glass-elite border-white/10 p-4 rounded-[3rem] backdrop-blur-3xl shadow-2xl focus-within:border-[#D8A93F]/50 transition-all duration-500 group"
        >
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="¿Qué me cuentas hoy, Pana?"
            className="flex-1 bg-transparent border-none outline-none text-white px-4 text-base font-black placeholder:text-white/10"
          />
          <motion.button 
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-[#D8A93F] text-black w-14 h-14 rounded-full flex items-center justify-center font-black disabled:opacity-20 gold-glow transition-all shadow-[0_10px_20px_rgba(216,169,63,0.4)]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="w-6 h-6">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        </motion.div>
      </form>
    </div>
  );
}
