"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { addTransaction, addGastoHormiga, createBudget, createGroup } from "@/lib/supabase/actions";
import { AudioLines } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  isActionExecuted?: boolean;
}

interface ChatViewProps {
  onNavigate?: (page: string) => void;
}

export default function ChatView({ onNavigate }: ChatViewProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hola. Soy Lukas, tu asistente financiero inteligente. ¿En qué puedo orientarte hoy?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      mediaRecorder.current = recorder;
      audioChunks.current = [];
      recorder.ondataavailable = (e) => audioChunks.current.push(e.data);
      recorder.onstop = async () => {
        const blob = new Blob(audioChunks.current, { type: "audio/webm" });
        const formData = new FormData();
        formData.append("audio", blob);
        setIsLoading(true);
        try {
          const res = await fetch("/api/voice/stt", { method: "POST", body: formData });
          const { text } = await res.json();
          if (text) { setInput(text); await processChatResponse(text); }
        } catch (e) { console.error(e); }
        finally { setIsLoading(false); }
        stream.getTracks().forEach(t => t.stop());
      };
      recorder.start();
      setIsRecording(true);
    } catch (e) { console.error(e); }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && isRecording) {
      mediaRecorder.current.stop();
      setIsRecording(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const text = input;
    setInput("");
    await processChatResponse(text);
  };

  const processChatResponse = async (text: string) => {
    setMessages(prev => [...prev, { role: "user", content: text }]);
    setIsLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: text }].map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Error");

      let assistantContent = result.data?.content || "...";
      let executionLog = "";

      const actionRegex = /[<\[]action[>\]]([\s\S]*?)[<\[]\/action[>\]]/gi;
      let match;
      
      while ((match = actionRegex.exec(assistantContent)) !== null) {
        try {
          const actionData = JSON.parse(match[1]);
          if (actionData.type === "ADD_TRANSACTION") { 
            const res = await addTransaction(actionData); 
            if (!res.success) executionLog += " (Error en transacción)";
          }
          else if (actionData.type === "ADD_GASTO_HORMIGA") { 
            const res = await addGastoHormiga(actionData); 
            if (!res.success) executionLog += " (Error en gasto)";
          }
          else if (actionData.type === "CREATE_GOAL") { 
            const res = await fetch("/api/metas", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              cache: "no-store",
              body: JSON.stringify({
                nombre: actionData.nombre,
                tipo: "ahorro",
                monto_objetivo: Number(actionData.monto) || 0,
                fecha_objetivo: actionData.fecha_objetivo,
                prioridad: Number(actionData.prioridad) || 2,
                emoji: "Meta",
              }),
            });
            if (!res.ok) {
              const result = await res.json().catch(() => null);
              executionLog += " (Error: " + (result?.error?.message || result?.error || "No se pudo crear la meta") + ")";
            }
          }
          else if (actionData.type === "CREATE_BUDGET") {
            const res = await createBudget(actionData);
            if (!res.success) executionLog += " (Error: " + res.error + ")";
          }
          else if (actionData.type === "CREATE_GROUP") {
            const res = await createGroup(actionData);
            if (!res.success) executionLog += " (Error: " + res.error + ")";
          }
          else if (actionData.type === "SET_CURRENT_BALANCE") {
            const res = await fetch("/api/profile", {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify({ balance_actual: Math.max(0, Number(actionData.saldo) || 0) })
            });
            if (!res.ok) executionLog += " (Error actualizando saldo)";
          }
          else if (actionData.type === "NAVIGATE" && onNavigate) { 
            onNavigate(actionData.page); 
          }
        } catch (err) { 
          executionLog += " (Error técnico)";
        }
      }

      const cleanContent = assistantContent.replace(/[<\[]action[>\]][\s\S]*?[<\[]\/action[>\]]/gi, "").replace(/<\/?[^>]+(>|$)/g, "").trim();

      setMessages(prev => [...prev, { role: "assistant", content: (cleanContent || "Listo.") + executionLog, isActionExecuted: !!executionLog.length || true }]);
    } catch (error: any) {
      setMessages(prev => [...prev, { role: "assistant", content: `Error: ${error.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#111827] relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#397DC1]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D8A93F]/10 rounded-full blur-[100px]" />

      <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar" ref={scrollRef}>
        <AnimatePresence initial={false}>
          {messages.map((msg, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl border ${msg.role === "user" ? "bg-[#397DC1] border-white/10 text-white rounded-tr-none" : "bg-white/5 backdrop-blur-md border-white/10 text-white rounded-tl-none"}`}>
                <p className="text-sm">{msg.content}</p>
              </div>
            </motion.div>
          ))}
          {isLoading && <div className="p-4 bg-white/5 rounded-2xl w-16 animate-pulse" />}
        </AnimatePresence>
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-white/5 backdrop-blur-xl border-t border-white/10 z-10">
        <div className="flex gap-3 items-center max-w-4xl mx-auto">
          <motion.button
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onMouseDown={startRecording}
            onMouseUp={stopRecording}
            onMouseLeave={stopRecording}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              isRecording 
                ? "bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)]" 
                : "bg-white/10 text-white/70 hover:bg-white/20"
            }`}
          >
            <AudioLines size={24} className={isRecording ? "animate-pulse" : ""} />
          </motion.button>
          
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Mensaje..."
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#397DC1] transition-colors"
          />
          
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="bg-[#D8A93F] text-[#111827] font-black w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg hover:brightness-110 disabled:opacity-30"
          >
            ➤
          </button>
        </div>
      </form>
    </div>
  );
}
