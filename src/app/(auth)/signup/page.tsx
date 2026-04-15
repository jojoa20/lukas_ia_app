'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
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
  }

  if (success) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 text-center">
        <div className="w-full max-w-md bg-[#111] border border-[#222] rounded-2xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-4">¡Registro Exitoso!</h2>
          <p className="text-gray-400 mb-6">Hemos enviado un correo de confirmación. Por favor verifica tu bandeja de entrada.</p>
          <Link href="/login" className="text-cyan-400 hover:underline">Ir al login</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#111] border border-[#222] rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/20 blur-[100px]" />

        <div className="relative z-10 text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Únete a <span className="text-cyan-400">Lukas</span></h1>
          <p className="text-gray-400">Empieza a dominar tus finanzas hoy</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-6 relative z-10">
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg text-sm text-center">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Nombre Completo</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="Tu nombre"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
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
            <label className="block text-sm font-medium text-gray-400 mb-2">Contraseña</label>
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
            className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? 'Registrando...' : 'Crear Cuenta'}
          </button>
        </form>

        <div className="mt-8 text-center text-gray-500 text-sm relative z-10">
          ¿Ya tienes cuenta?{' '}
          <Link href="/login" className="text-cyan-400 hover:underline">
            Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  )
}
