"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useChat } from "@ai-sdk/react";

export default function ChatView() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status, error } = useChat({ id: "lukas-ai-session" });
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
    <div className="flex flex-col h-full p-4 pb-32">
      <h1 className="text-2xl font-bold mb-6 text-[#D8A93F]">Habla con Lukas</h1>
      
      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-4 mb-4 no-scrollbar">
        {messages.length === 0 && !isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] p-4 rounded-2xl bg-white/10 text-white rounded-tl-none border border-white/10">
              <p className="text-sm leading-relaxed">¡Hola! Soy Lukas, tu pana financiero. ¿En qué te puedo ayudar hoy?</p>
            </div>
          </div>
        )}
        {messages.map((m, idx) => (
          <motion.div 
            key={m.id || idx}
            initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] p-4 rounded-2xl ${m.role === 'user' ? 'bg-[#D8A93F] text-black rounded-tr-none' : 'bg-white/10 text-white rounded-tl-none border border-white/10'}`}>
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
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-start"
          >
            <div className="max-w-[80%] p-4 rounded-2xl bg-white/10 text-white rounded-tl-none border border-white/10">
              <p className="text-sm leading-relaxed animate-pulse">Lukas está pensando...</p>
            </div>
          </motion.div>
        )}
        {error && (
          <div className="bg-red-500/20 text-red-500 p-4 rounded-xl text-sm border border-red-500/50">
            Error: {error.message || "Fallo en la comunicación con Lukas"}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 bg-[#111827] border border-white/10 p-2 rounded-full backdrop-blur-md">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Dime un gasto o pregunta algo..."
          className="flex-1 bg-transparent border-none outline-none text-white px-4 text-sm"
        />
        <button 
          type="submit"
          disabled={isLoading || !(input || "").trim()}
          className="bg-[#D8A93F] text-black w-10 h-10 rounded-full flex items-center justify-center font-bold disabled:opacity-50"
        >
          →
        </button>
      </form>
    </div>
  );
}
