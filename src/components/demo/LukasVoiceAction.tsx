'use client'

import React, { useState, useCallback } from 'react'
import { useConversation } from '@elevenlabs/react'
import { addTransaction } from '@/lib/supabase/actions'

export default function LukasVoiceButton() {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const conversation = useConversation({
    clientTools: {
      registrar_transaccion: async (parameters: { monto: number, descripcion: string, categoria?: string }) => {
        try {
          console.log("VOZ > Herramienta llamada:", parameters);
          addTransaction({
            monto: parameters.monto,
            descripcion: parameters.descripcion || "Voz",
            categoria: (parameters.categoria || 'otro').toLowerCase(),
            metodo_entrada: 'audio'
          });
          return "¡Hecho nea! Ya lo anoté.";
        } catch (e) {
          console.error("VOZ > Error en DB:", e);
          return "Pailas nea, no pude anotarlo.";
        }
      }
    },
    onConnect: () => console.log('VOZ > Lukas conectado'),
    onDisconnect: () => console.log('VOZ > Lukas desconectado'),
    onError: (err) => {
      console.error('VOZ > Error SDK:', err);
      setErrorMsg("Error de voz");
    },
    onMessage: (msg) => console.log('VOZ > Lukas dijo:', msg)
  });

  const startLukas = useCallback(async () => {
    setErrorMsg(null);
    try {
      console.log("VOZ > Iniciando sesión...");
      await navigator.mediaDevices.getUserMedia({ audio: true });

      const res = await fetch('/api/voice/session');
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Error ${res.status}: ${text.substring(0, 30)}`);
      }

      const data = await res.json();
      if (!data.signedUrl) throw new Error("No se recibió URL firmada");

      await conversation.startSession({ signedUrl: data.signedUrl });
    } catch (err: any) {
      console.error('VOZ > Error al iniciar:', err);
      setErrorMsg(err.message.includes('<!DOCTYPE') ? "API no encontrada (404)" : err.message);
    }
  }, [conversation]);

  const stopLukas = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  const isActive = conversation.status === 'connected';
  const isConnecting = conversation.status === 'connecting';

  return (
    <div className="relative flex flex-col items-center">
      <button
        type="button"
        onClick={isActive ? stopLukas : startLukas}
        disabled={isConnecting}
        className={`p-3.5 rounded-full transition-all shadow-2xl ${isActive ? 'bg-red-500 scale-110' : 'bg-[#D8A93F] hover:scale-105 active:scale-95'
          }`}
      >
        {isConnecting ? (
          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            {isActive ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
            )}
          </svg>
        )}
      </button>

      {errorMsg && (
        <div className="absolute top-[-40px] bg-red-600 text-white text-[9px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap">
          {errorMsg}
        </div>
      )}
    </div>
  )
}
