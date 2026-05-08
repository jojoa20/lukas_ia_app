"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

// Strips <action>...</action> tags from visible text
function cleanContent(text: string): string {
  return text.replace(/<action>[\s\S]*?<\/action>/g, "").trim();
}

// Extracts all action objects from the response
function parseActions(text: string): any[] {
  const actions: any[] = [];
  const regex = /<action>([\s\S]*?)<\/action>/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    try {
      actions.push(JSON.parse(match[1]));
    } catch {
      // ignore malformed JSON
    }
  }
  return actions;
}

interface ChatViewProps {
  messages: ChatMessage[];
  onMessagesChange: (messages: ChatMessage[]) => void;
  onNavigate?: (page: string, opts?: any) => void;
  onRefreshData?: () => void;
}

export default function ChatView({
  messages,
  onMessagesChange,
  onNavigate,
  onRefreshData,
}: ChatViewProps) {
  const [input, setInputState] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const executeActions = useCallback(
    async (actions: any[]) => {
      for (const action of actions) {
        if (action.type === "NAVIGATE" && onNavigate) {
          onNavigate(action.page, action);
        }

        if (action.type === "ADD_TRANSACTION" || action.type === "ADD_GASTO_HORMIGA") {
          try {
            await fetch("/api/transactions", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                monto: action.monto,
                tipo: action.tipo || "gasto",
                categoria: action.categoria || "otro",
                subcategoria: action.subcategoria || action.descripcion || "",
                descripcion: action.descripcion || "",
                es_gasto_hormiga: action.type === "ADD_GASTO_HORMIGA" || action.es_gasto_hormiga || false,
                metodo_entrada: "ai",
              }),
            });
            onRefreshData?.();
          } catch (e) {
            console.error("Error saving transaction:", e);
          }
        }

        if (action.type === "CREATE_GOAL") {
          try {
            await fetch("/api/metas", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                nombre: action.nombre,
                monto_objetivo: action.monto,
                fecha_objetivo: action.fecha_objetivo || undefined,
                prioridad: action.prioridad || 2,
                tipo: "ahorro",
              }),
            });
            onRefreshData?.();
          } catch (e) {
            console.error("Error creating goal:", e);
          }
        }

        if (action.type === "SET_CURRENT_BALANCE") {
          try {
            await fetch("/api/profile", {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ balance_actual: action.saldo }),
            });
            onRefreshData?.();
          } catch (e) {
            console.error("Error updating balance:", e);
          }
        }

        if (action.type === "CREATE_BUDGET") {
          try {
            const now = new Date();
            await fetch("/api/budgets", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                categoria: action.categoria,
                limite_cop: action.limite_cop,
                mes: now.getMonth() + 1,
                anio: now.getFullYear(),
              }),
            });
            onRefreshData?.();
          } catch (e) {
            console.error("Error creating budget:", e);
          }
        }
      }
    },
    [onNavigate, onRefreshData]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInputState("");

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: userText,
    };
    const updatedMessages = [...messages, userMsg];
    onMessagesChange(updatedMessages);
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
      const rawContent: string =
        json?.data?.content || json?.error || "Lukas no pudo responder. Intenta de nuevo.";

      const actions = parseActions(rawContent);
      const visibleContent = cleanContent(rawContent);

      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: visibleContent,
      };
      onMessagesChange([...updatedMessages, assistantMsg]);

      if (actions.length > 0) {
        await executeActions(actions);
      }
    } catch {
      onMessagesChange([
        ...updatedMessages,
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
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-bold text-[#D8A93F]">Habla con Lukas</h1>
        {messages.length > 0 && (
          <button
            onClick={() => onMessagesChange([])}
            className="text-white/30 text-xs hover:text-white/60 transition-colors"
          >
            Limpiar chat
          </button>
        )}
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-4 mb-4 no-scrollbar">
        {messages.length === 0 && !isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[85%] p-4 rounded-2xl bg-white/10 text-white rounded-tl-none border border-white/10">
              <p className="text-sm leading-relaxed font-semibold">¡Hola! Soy Lukas 🤙</p>
              <p className="text-sm leading-relaxed mt-2 opacity-70">
                Dime lo que gastaste, crea metas, actualiza tu saldo o pregúntame cualquier cosa de tus finanzas.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Gasté 50 mil en mercado", "Crea una meta de ahorro", "¿Cuál es mi saldo?"].map((tip) => (
                  <button
                    key={tip}
                    onClick={() => setInputState(tip)}
                    className="text-[11px] bg-white/5 border border-white/10 text-white/60 px-3 py-1.5 rounded-full hover:bg-white/10 transition"
                  >
                    {tip}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {messages.map((m, idx) => (
          <motion.div
            key={m.id || idx}
            initial={{ opacity: 0, y: 8, x: m.role === "user" ? 10 : -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
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
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-start"
          >
            <div className="p-4 rounded-2xl bg-white/10 text-white rounded-tl-none border border-white/10 flex items-center gap-1.5">
              {[0, 150, 300].map((delay) => (
                <span
                  key={delay}
                  className="w-2 h-2 bg-[#D8A93F] rounded-full animate-bounce"
                  style={{ animationDelay: `${delay}ms` }}
                />
              ))}
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
          onChange={(e) => setInputState(e.target.value)}
          placeholder="Dime un gasto, crea una meta..."
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
