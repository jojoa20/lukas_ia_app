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

  return (
    <div className="flex flex-col h-[100dvh] p-6 max-w-md mx-auto">
      <header className="mb-8 pt-4">
        <h2 className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Asistente IA</h2>
        <h1 className="text-white font-black text-3xl tracking-tight">Habla con <span className="text-[#D8A93F]">Lukas</span></h1>
      </header>
      
      <div 
        ref={scrollRef} 
        className="flex-1 overflow-y-auto space-y-6 mb-4 no-scrollbar pr-2"
      >
        <AnimatePresence>
          {messages.length === 0 && !isLoading && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="max-w-[85%] p-5 rounded-3xl rounded-tl-none glass border-white/5 text-white/90 shadow-2xl">
                <p className="text-sm leading-relaxed font-medium">
                  ¡Qué más, pana! Soy <span className="text-[#D8A93F] font-bold">Lukas</span>. 🤖<br/><br/>
                  Dime qué compraste o pregúntame cómo va tu FinScore. Estoy aquí para que no se te escapen las lucas.
                </p>
              </div>
            </motion.div>
          )}

          {messages.map((m, idx) => (
            <motion.div 
              key={m.id || idx}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] p-5 rounded-[2rem] shadow-xl ${
                  m.role === 'user' 
                    ? 'bg-[#D8A93F] text-black rounded-tr-none font-bold' 
                    : 'glass border-white/5 text-white/90 rounded-tl-none'
                }`}
              >
                {m.parts.map((part, pIdx) => (
                  part.type === 'text' ? (
                    <p key={pIdx} className="text-sm leading-relaxed">{part.text}</p>
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
              <div className="max-w-[85%] p-5 rounded-3xl rounded-tl-none glass border-white/5 text-white/50 italic">
                <div className="flex gap-1">
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }}>•</motion.span>
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}>•</motion.span>
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}>•</motion.span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Premium Input Bar */}
      <form 
        onSubmit={handleSubmit} 
        className="flex gap-2 glass border-white/10 p-2 rounded-[2rem] backdrop-blur-2xl shadow-2xl mb-24 focus-within:border-[#D8A93F]/50 transition-colors"
      >
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Dime un gasto o pregunta algo..."
          className="flex-1 bg-transparent border-none outline-none text-white px-5 text-sm font-medium placeholder:text-white/20"
        />
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-[#D8A93F] text-black w-12 h-12 rounded-full flex items-center justify-center font-black disabled:opacity-30 gold-glow transition-all"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-5 h-5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.button>
      </form>
    </div>
  );
}
