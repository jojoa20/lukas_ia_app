"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export default function ChatView() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput("");

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: userText,
    };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const json = await res.json();
      const reply = json?.data?.content || json?.error || "Lukas no pudo responder. Intenta de nuevo.";

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: reply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Parece que hay un error de conexión. ¿Intentamos de nuevo?",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full p-4 pb-32">
      <h1 className="text-2xl font-bold mb-6 text-[#D8A93F]">Habla con Lukas</h1>

      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-4 mb-4 no-scrollbar">
        {messages.length === 0 && !isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] p-4 rounded-2xl bg-white/10 text-white rounded-tl-none border border-white/10">
              <p className="text-sm leading-relaxed">
                ¡Hola! Soy Lukas, tu pana financiero. 🤙 ¿En qué te puedo ayudar hoy?
              </p>
            </div>
          </div>
        )}

        {messages.map((m, idx) => (
          <motion.div
            key={m.id || idx}
            initial={{ opacity: 0, x: m.role === "user" ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                m.role === "user"
                  ? "bg-[#D8A93F] text-black rounded-tr-none font-medium"
                  : "bg-white/10 text-white rounded-tl-none border border-white/10"
              }`}
            >
              {m.content}
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

      <form
        onSubmit={handleSubmit}
        className="flex gap-2 bg-[#111827] border border-white/10 p-2 rounded-full backdrop-blur-md"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Dime un gasto o pregunta algo..."
          className="flex-1 bg-transparent border-none outline-none text-white px-4 text-sm"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-[#D8A93F] text-black w-10 h-10 rounded-full flex items-center justify-center font-bold disabled:opacity-50 transition-opacity"
        >
          →
        </button>
      </form>
    </div>
  );
}
