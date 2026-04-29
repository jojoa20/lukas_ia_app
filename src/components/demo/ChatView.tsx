"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

function stripActionTags(text: string) {
  return text.replace(/<action>[\s\S]*?<\/action>/g, "").trim();
}

export default function ChatView({ onNavigate }: { onNavigate?: (tab: string) => void }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: input.trim(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Error del servidor");
      }

      const assistantContent: string =
        json.data?.content || json.choices?.[0]?.message?.content || "Sin respuesta";

      // Handle <action> navigation tags
      const actionMatches = assistantContent.matchAll(/<action>([\s\S]*?)<\/action>/g);
      for (const match of actionMatches) {
        try {
          const action = JSON.parse(match[1]);
          if (action.type === "NAVIGATE" && onNavigate) {
            setTimeout(() => onNavigate(action.page), 800);
          }
        } catch {
          // ignore malformed action tags
        }
      }

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: stripActionTags(assistantContent),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Error desconocido";
      setError(message);
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
                ¡Hola! Soy Lukas, tu pana financiero. ¿En qué te puedo ayudar hoy?
              </p>
            </div>
          </div>
        )}

        {messages.map((m) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, x: m.role === "user" ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-2xl ${
                m.role === "user"
                  ? "bg-[#D8A93F] text-black rounded-tr-none"
                  : "bg-white/10 text-white rounded-tl-none border border-white/10"
              }`}
            >
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.content}</p>
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
          <div className="bg-red-500/20 text-red-400 p-4 rounded-xl text-sm border border-red-500/30">
            ⚠️ {error}
          </div>
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
