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
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-[340px] bg-[#111] border border-white/5 rounded-[32px] p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
        {/* Subtle Glows */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#D8A93F]/10 blur-[80px]" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#F36E53]/10 blur-[80px]" />

        <div className="relative z-10 text-center mb-10">
          <div className="w-12 h-12 bg-gradient-to-br from-[#D8A93F] to-[#8A6B29] rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-[#D8A93F]/20">
            <span className="text-white text-xl font-black">L</span>
          </div>
          <h1 className="text-2xl font-black text-white mb-1 tracking-tighter italic">Lukas AI</h1>
          <p className="text-white/30 text-[9px] font-bold uppercase tracking-[0.2em]">Inicia sesión, Pana</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 relative z-10">
          {error && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-red-500/10 border border-red-500/30 text-red-500 p-3 rounded-2xl text-[10px] font-bold text-center uppercase tracking-wider">
              {error}
            </motion.div>
          )}

          <div className="space-y-1.5">
            <label className="block text-[9px] font-black text-white/20 uppercase tracking-[0.15em] ml-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-4 py-3 text-white text-xs focus:outline-none focus:border-[#D8A93F]/50 transition-all placeholder:text-white/10"
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-[9px] font-black text-white/20 uppercase tracking-[0.15em] ml-1">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-4 py-3 text-white text-xs focus:outline-none focus:border-[#D8A93F]/50 transition-all placeholder:text-white/10"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black font-black py-4 rounded-2xl hover:bg-[#D8A93F] transition-all disabled:opacity-30 text-[10px] uppercase tracking-[0.2em] shadow-xl mt-4 active:scale-95"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <div className="mt-8 text-center relative z-10">
          <Link href="/signup" className="text-white/30 text-[9px] font-bold uppercase tracking-widest hover:text-white transition-colors">
            ¿No tienes cuenta? <span className="text-[#D8A93F]">Regístrate</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
