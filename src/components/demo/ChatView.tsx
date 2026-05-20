"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface PendingReceipt {
  monto: number;
  fecha: string;
  comercio: string;
  descripcion: string;
  tipo: "gasto" | "ingreso";
  banco: string;
  referencia: string | null;
  confianza: number;
  categoria: string;
  receipt_url: string | null;
}

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
  const [pendingReceipt, setPendingReceipt] = React.useState<PendingReceipt | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
                mes: action.mes ?? now.getMonth() + 1,
                anio: action.anio ?? now.getFullYear(),
              }),
            });
            onRefreshData?.();
          } catch (e) {
            console.error("Error creating budget:", e);
          }
        }

        if (action.type === "CREATE_GROUP") {
          try {
            await fetch("/api/groups", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                nombre: action.nombre,
                tipo: action.tipo || "amigos",
                invite_email: action.invite_email || "",
              }),
            });
            onRefreshData?.();
          } catch (e) {
            console.error("Error creating group:", e);
          }
        }

        if (action.type === "SET_GROUP_PERSONAL_BUDGET") {
          try {
            await fetch("/api/groups", {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ personal_budget: action.monto }),
            });
            onRefreshData?.();
          } catch (e) {
            console.error("Error setting group budget:", e);
          }
        }
      }
    },
    [onNavigate, onRefreshData]
  );

  const handleConfirmReceipt = useCallback(async () => {
    if (!pendingReceipt) return;
    const receipt = pendingReceipt;
    setPendingReceipt(null);

    const confirmMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: "Sí, regístralo",
    };
    const updatedMessages = [...messages, confirmMsg];
    onMessagesChange(updatedMessages);
    setIsLoading(true);

    try {
      await fetch("/api/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          monto: receipt.monto,
          tipo: receipt.tipo,
          categoria: receipt.categoria,
          subcategoria: receipt.comercio,
          descripcion: receipt.descripcion,
          metodo_entrada: "ocr_imagen",
          es_gasto_hormiga: false,
          fecha_transaccion: receipt.fecha,
          receipt_url: receipt.receipt_url,
          confianza_ia: receipt.confianza,
        }),
      });
      onRefreshData?.();

      const okMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `Listo pana, registré ${receipt.tipo === "gasto" ? "el gasto" : "el ingreso"} de $${receipt.monto.toLocaleString("es-CO")} en ${receipt.comercio}. ✅`,
      };
      onMessagesChange([...updatedMessages, okMsg]);
    } catch {
      const errMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Hubo un error guardando el movimiento. Intenta de nuevo.",
      };
      onMessagesChange([...updatedMessages, errMsg]);
    } finally {
      setIsLoading(false);
    }
  }, [pendingReceipt, messages, onMessagesChange, onRefreshData]);

  const handleRejectReceipt = useCallback(() => {
    setPendingReceipt(null);
    const rejectMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "assistant",
      content: "Okey pana, lo cancelo. Si quieres registrarlo manualmente dime el monto y el gasto.",
    };
    onMessagesChange([...messages, rejectMsg]);
  }, [pendingReceipt, messages, onMessagesChange]);

  const handleImageSelect = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (fileInputRef.current) fileInputRef.current.value = "";

    const MAX_MB = 10;
    if (file.size > MAX_MB * 1024 * 1024) {
      onMessagesChange([...messages, {
        id: Date.now().toString(),
        role: "assistant",
        content: "La imagen es muy pesada (máx. 10 MB). Intenta con una captura de pantalla más pequeña.",
      }]);
      return;
    }

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: `📎 Comprobante adjunto (${file.name})`,
    };
    const withUser = [...messages, userMsg];
    onMessagesChange(withUser);
    setIsLoading(true);

    try {
      const buffer = await file.arrayBuffer();
      const base64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));

      const res = await fetch("/api/receipts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64: base64, mimeType: file.type }),
      });

      const json = await res.json();

      if (!res.ok || json.error) {
        const errMsg: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: json.error === "No es un comprobante de pago"
            ? "Hmm pana, eso no parece un comprobante de pago. Manda la foto del recibo de Nequi, Davivienda o la factura."
            : "No pude leer el comprobante. Asegúrate de que la foto esté nítida y bien iluminada.",
        };
        onMessagesChange([...withUser, errMsg]);
        return;
      }

      const d = json.data;
      const confianzaTag = d.confianza >= 90 ? "" : ` _(confianza ${d.confianza}%)_`;
      const lukasMsgContent =
        `📄 Encontré esto en tu comprobante${d.banco ? ` de ${d.banco}` : ""}:${confianzaTag}\n\n` +
        `💰 Monto: $${d.monto.toLocaleString("es-CO")}\n` +
        `📅 Fecha: ${d.fecha}\n` +
        `🏪 Comercio: ${d.comercio}\n` +
        `📝 ${d.descripcion}\n` +
        (d.referencia ? `🔖 Ref: ${d.referencia}\n` : "") +
        `\n¿Lo registro en tus ${d.tipo === "gasto" ? "gastos" : "ingresos"} como ${d.categoria}?`;

      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: lukasMsgContent,
      };
      onMessagesChange([...withUser, assistantMsg]);
      setPendingReceipt(d);
    } catch {
      const errMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Error leyendo el comprobante. Verifica tu conexión e intenta de nuevo.",
      };
      onMessagesChange([...withUser, errMsg]);
    } finally {
      setIsLoading(false);
    }
  }, [messages, onMessagesChange]);

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

        {pendingReceipt && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="flex gap-2 ml-1">
              <button
                onClick={handleConfirmReceipt}
                className="bg-[#D8A93F] text-black text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition"
              >
                ✅ Sí, regístralo
              </button>
              <button
                onClick={handleRejectReceipt}
                className="bg-white/10 text-white text-sm px-4 py-2 rounded-full border border-white/10 hover:bg-white/20 transition"
              >
                ❌ No
              </button>
            </div>
          </motion.div>
        )}

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

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,image/heic,application/pdf"
        className="hidden"
        onChange={handleImageSelect}
      />

      <form
        onSubmit={handleSubmit}
        className="flex gap-2 bg-[#111827] border border-white/10 p-2 rounded-full backdrop-blur-md"
      >
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={isLoading}
          title="Adjuntar comprobante (Nequi, Davivienda, factura)"
          className="bg-white/10 hover:bg-[#D8A93F]/20 text-white/70 hover:text-[#D8A93F] w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all border border-white/10 hover:border-[#D8A93F]/40 disabled:opacity-30"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
        <input
          value={input}
          onChange={(e) => setInputState(e.target.value)}
          placeholder="Escribe o toca 📷 para subir comprobante..."
          className="flex-1 bg-transparent border-none outline-none text-white px-2 text-sm"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-[#D8A93F] text-black w-10 h-10 rounded-full flex items-center justify-center font-bold disabled:opacity-50 transition-opacity flex-shrink-0"
        >
          →
        </button>
      </form>
    </div>
  );
}
