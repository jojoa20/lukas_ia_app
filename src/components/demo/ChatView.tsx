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
    "Analiza mi comportamiento de gasto esta semana.",
    "¿Cómo puedo optimizar mi presupuesto actual?",
    "Registra un gasto y analiza su impacto.",
    "Muéstrame el progreso hacia mi meta principal."
  ];

  return (
    <div className="flex flex-col h-[100dvh] p-8 max-w-lg mx-auto relative">
      <header className="mb-10 pt-6 relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] opacity-50 shadow-[0_0_8px_#00ff9d]" />
          <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Asistente de Inteligencia</p>
        </div>
        <h1 className="text-white font-black text-4xl tracking-tight leading-none">
          Consulta con <span className="text-premium">Lukas</span>
        </h1>
      </header>
      
      <div 
        ref={scrollRef} 
        className="flex-1 overflow-y-auto space-y-10 mb-6 no-scrollbar pr-2 relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {messages.length === 0 && !isLoading && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              <div className="max-w-[95%] p-10 rounded-[3.5rem] rounded-tl-none glass-elite border-white/5 text-white/80 shadow-2xl inner-highlight">
                <p className="text-xl leading-snug font-bold mb-6 text-white">
                  Hola. Estoy listo para analizar tus finanzas.
                </p>
                <p className="text-sm leading-relaxed text-white/50 font-medium">
                  Puedo ayudarte a detectar patrones, optimizar tu presupuesto o simplemente registrar tus movimientos diarios. Mi objetivo es acompañarte en tu crecimiento financiero sin juicios, solo con datos y estrategia.
                </p>
              </div>

              <div className="space-y-5 px-2">
                <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-4">Sugerencias Estratégicas</p>
                <div className="flex flex-col gap-3">
                  {suggestions.map((s, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setInput(s)}
                      className="px-6 py-5 glass-elite rounded-[2rem] text-xs font-bold text-white/60 border-white/5 text-left transition-all hover:text-white"
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
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] p-7 rounded-[3rem] shadow-2xl relative ${
                  m.role === 'user' 
                    ? 'bg-white text-black rounded-tr-none font-bold text-base' 
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start pl-4"
            >
              <div className="flex items-center gap-3 py-4">
                <div className="flex gap-1.5">
                  {[0, 1, 2].map(i => (
                    <motion.div 
                      key={i}
                      animate={{ opacity: [0.2, 1, 0.2] }} 
                      transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }} 
                      className="w-1.5 h-1.5 rounded-full bg-white/20" 
                    />
                  ))}
                </div>
                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Procesando datos</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Elegant Refined Input */}
      <form 
        onSubmit={handleSubmit} 
        className="relative z-20 pb-32"
      >
        <motion.div 
          className="flex gap-4 glass-elite border-white/5 p-4 rounded-[3.5rem] backdrop-blur-3xl shadow-2xl focus-within:border-white/20 transition-all duration-700"
        >
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu consulta..."
            className="flex-1 bg-transparent border-none outline-none text-white px-6 text-base font-medium placeholder:text-white/10"
          />
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-white text-black w-14 h-14 rounded-full flex items-center justify-center font-black disabled:opacity-5 transition-all shadow-xl"
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
