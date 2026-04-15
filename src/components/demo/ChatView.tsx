"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatView() {
  const [messages, setMessages] = useState<{role: string, content: string}[]>([
    { role: 'assistant', content: '¡Hola! Soy Lukas, tu pana financiero. ¿En qué te puedo ayudar hoy?' }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Simple fetch to /api/chat
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        body: JSON.stringify({ message: input })
      });
      // Handle streaming or JSON response here
      // For now, let's just stick to a mock response if API is not fully ready
      setMessages(prev => [...prev, { role: 'assistant', content: 'Entendido, Pana. Estoy procesando tu solicitud...' }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Lo siento Pana, tuve un error de conexión.' }]);
    }
  };

  return (
    <div className="flex flex-col h-full p-4 pb-32">
      <h1 className="text-2xl font-bold mb-6 text-[#D8A93F]">Habla con Lukas</h1>
      
      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-4 mb-4 no-scrollbar">
        {messages.map((m, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] p-4 rounded-2xl ${m.role === 'user' ? 'bg-[#D8A93F] text-black rounded-tr-none' : 'bg-white/10 text-white rounded-tl-none border border-white/10'}`}>
              <p className="text-sm leading-relaxed">{m.content}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-2 bg-[#111827] border border-white/10 p-2 rounded-full backdrop-blur-md">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Dime un gasto o pregunta algo..."
          className="flex-1 bg-transparent border-none outline-none text-white px-4 text-sm"
        />
        <button 
          onClick={handleSend}
          className="bg-[#D8A93F] text-black w-10 h-10 rounded-full flex items-center justify-center font-bold"
        >
          →
        </button>
      </div>
    </div>
  );
}
