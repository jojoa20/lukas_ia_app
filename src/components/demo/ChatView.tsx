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
    "¿En qué se me está yendo la plata?",
    "¿Cómo va mi meta del viaje?",
    "Registra un gasto de $50k en sushi",
    "Analiza mis fugas de ayer"
  ];

  return (
    <div className="flex flex-col h-[100dvh] p-8 max-w-lg mx-auto relative">
      {/* AI Atmosphere Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#D8A93F]/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#1a2a5e]/20 blur-[120px] rounded-full" />
      </div>

      <header className="mb-10 pt-6 relative z-10">
        <p className="text-[#D8A93F] text-[10px] font-black uppercase tracking-[0.4em] mb-2 opacity-80">AI Intelligent Core</p>
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
              className="space-y-8"
            >
              <div className="max-w-[90%] p-7 rounded-[2.5rem] rounded-tl-none glass-elite border-white/5 text-white/90 shadow-2xl inner-highlight">
                <p className="text-base leading-relaxed font-medium">
                  ¡Qué más, pana! Soy <span className="text-[#D8A93F] font-black uppercase tracking-wider">Lukas</span>. 🤖<br/><br/>
                  Analizo tus finanzas en tiempo real para que tu plata rinda. ¿Qué quieres que revisemos hoy?
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-2">Sugerencias inteligentes</p>
                <div className="flex flex-wrap gap-3">
                  {suggestions.map((s, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(216, 169, 63, 0.1)" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setInput(s)}
                      className="px-5 py-3 glass-elite rounded-2xl text-[11px] font-bold text-white/70 border-white/10 hover:text-[#D8A93F] hover:border-[#D8A93F]/30 transition-all"
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
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] p-6 rounded-[2.5rem] shadow-2xl relative ${
                  m.role === 'user' 
                    ? 'bg-gradient-to-br from-[#D8A93F] to-[#f3d48d] text-black rounded-tr-none font-black text-base shadow-[0_15px_30px_rgba(216,169,63,0.3)]' 
                    : 'glass-elite border-white/5 text-white/90 rounded-tl-none inner-highlight'
                }`}
              >
                {m.parts.map((part, pIdx) => (
                  part.type === 'text' ? (
                    <p key={pIdx} className="leading-relaxed">{part.text}</p>
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
              <div className="max-w-[85%] p-6 rounded-[2.5rem] rounded-tl-none glass-elite border-white/5 flex items-center gap-4">
                <div className="flex gap-1.5">
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }} 
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-2 h-2 rounded-full bg-[#D8A93F]" 
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }} 
                    transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
                    className="w-2 h-2 rounded-full bg-[#D8A93F]" 
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }} 
                    transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}
                    className="w-2 h-2 rounded-full bg-[#D8A93F]" 
                  />
                </div>
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Analizando datos</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Futuristic Elite Input Bar */}
      <form 
        onSubmit={handleSubmit} 
        className="relative z-20 pb-32"
      >
        <motion.div 
          className="flex gap-3 glass-elite border-white/10 p-3 rounded-[3rem] backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] focus-within:border-[#D8A93F]/50 transition-all duration-500 group"
        >
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-xl opacity-40 group-focus-within:opacity-100 transition-opacity">
            ✨
          </div>
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="¿En qué te puedo ayudar, pana?"
            className="flex-1 bg-transparent border-none outline-none text-white px-2 text-base font-bold placeholder:text-white/10"
          />
          <motion.button 
            whileHover={{ scale: 1.05, x: 2 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-[#D8A93F] text-black w-14 h-14 rounded-full flex items-center justify-center font-black disabled:opacity-20 gold-glow transition-all"
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
