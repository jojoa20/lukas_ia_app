'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/app')
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#111] border border-[#222] rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/20 blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/20 blur-[100px]" />

        <div className="relative z-10 text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Bienvenido a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Lukas</span></h1>
          <p className="text-gray-400">Tu asistente financiero inteligente</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6 relative z-10">
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg text-sm text-center">
              {error}
            </div>
          )}

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
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? 'Entrando...' : 'Iniciar Sesión'}
          </button>
        </form>

        <div className="mt-8 text-center text-gray-500 text-sm relative z-10">
          ¿No tienes cuenta?{' '}
          <Link href="/signup" className="text-cyan-400 hover:underline">
            Regístrate aquí
          </Link>
        </div>
      </div>
    </div>
  )
}
