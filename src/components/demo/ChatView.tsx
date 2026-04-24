// @ts-nocheck
"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useChat } from "@ai-sdk/react";
import LukasVoiceButton from "./LukasVoiceAction";

export default function ChatView() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    initialMessages: [
      { id: '1', role: 'assistant', content: '¡Hola! Soy Lukas, tu pana financiero. ¿En qué te puedo ayudar hoy?' }
    ]
  });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <div className="flex flex-col h-full p-4 pb-32">
      <h1 className="text-2xl font-bold mb-6 text-[#D8A93F]">Habla con Lukas</h1>
      
      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-4 mb-4 no-scrollbar">
        {messages.map((m) => (
          <motion.div 
            key={m.id}
            initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] p-4 rounded-2xl ${m.role === 'user' ? 'bg-[#D8A93F] text-black rounded-tr-none' : 'bg-white/10 text-white rounded-tl-none border border-white/10'}`}>
              <p className="text-sm leading-relaxed">{m.content}</p>
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
      </div>

      <div className="flex items-center gap-3 bg-[#111827] border border-white/10 p-2 pr-4 rounded-full backdrop-blur-md">
        <form onSubmit={handleSubmit} className="flex-1 flex gap-2">
          <input 
            value={input}
            onChange={handleInputChange}
            placeholder="Dime un gasto o pregunta algo..."
            className="flex-1 bg-transparent border-none outline-none text-white px-4 text-sm"
          />
          <button 
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-[#D8A93F] text-black w-10 h-10 rounded-full flex items-center justify-center font-bold disabled:opacity-50"
          >
            →
          </button>
        </form>
        <div className="w-px h-8 bg-white/10" />
        <LukasVoiceButton />
      </div>
    </div>
  );
}
