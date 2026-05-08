'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { X } from 'lucide-react'

interface AuthModalProps {
  mode: 'login' | 'signup'
  onClose: () => void
  onToggleMode: () => void
}

export default function AuthModal({ mode, onClose, onToggleMode }: AuthModalProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (mode === 'signup') {
      // Si el nombre está vacío, usar la parte del correo
      const finalName = fullName || email.split('@')[0]
      
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: finalName,
          },
        },
      })

      if (error) {
        setError(error.message)
        setLoading(false)
      } else {
        setSuccess(true)
        setLoading(false)
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        // Mejorar mensaje si es por falta de confirmación
        if (error.message.toLowerCase().includes('email not confirmed')) {
          setError('¡Casi listo! Por favor confirma tu correo electrónico primero.')
        } else {
          setError('Credenciales inválidas. Verifica tu correo y contraseña.')
        }
        setLoading(false)
      } else {
        router.push('/app')
        router.refresh()
      }
    }
  }

  if (success) {
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div className="w-full max-w-md bg-[#111] border border-[#222] rounded-2xl p-8 shadow-2xl relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
            <X size={24} />
          </button>
          <h2 className="text-2xl font-bold text-white mb-4">¡Registro Exitoso!</h2>
          <p className="text-gray-400 mb-6 font-sans">
            Hemos enviado un correo de confirmación. <br/><br/>
            <span className="text-cyan-400 font-bold">IMPORTANTE:</span> Debes confirmar tu correo para poder iniciar sesión.
          </p>
          <button 
            onClick={onToggleMode}
            className="w-full bg-cyan-500 text-black font-bold py-3 rounded-xl hover:bg-cyan-400 transition-colors"
          >
            Ir al login
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md bg-[#111] border border-[#222] rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/10 blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/10 blur-[100px]" />

        {/* Botón de cerrar (X) */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-30 text-gray-500 hover:text-white transition-colors p-2"
        >
          <X size={24} />
        </button>

        <div className="relative z-10 text-center mb-8 font-sans">
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
            {mode === 'login' ? 'Bienvenido a ' : 'Únete a '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Lukas</span>
          </h1>
          <p className="text-gray-400">
            {mode === 'login' ? 'Tu asistente financiero inteligente' : 'Empieza a dominar tus finanzas hoy'}
          </p>
        </div>

        <form onSubmit={handleAuth} className="space-y-5 relative z-10 font-sans">
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg text-sm text-center">
              {error}
            </div>
          )}

          {mode === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">Nombre Completo</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="Tu nombre (opcional)"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="tu@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition-all transform active:scale-[0.98] shadow-lg shadow-cyan-500/20 disabled:opacity-50"
          >
            {loading ? 'Procesando...' : mode === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}
          </button>
        </form>

        <div className="mt-8 text-center text-gray-500 text-sm relative z-10 font-sans">
          {mode === 'login' ? (
            <>
              ¿No tienes cuenta?{' '}
              <button onClick={onToggleMode} className="text-cyan-400 hover:underline font-medium">
                Regístrate aquí
              </button>
            </>
          ) : (
            <>
              ¿Ya tienes cuenta?{' '}
              <button onClick={onToggleMode} className="text-cyan-400 hover:underline font-medium">
                Inicia sesión
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
