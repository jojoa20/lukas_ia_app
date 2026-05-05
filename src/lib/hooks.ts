import { useEffect, useState, useCallback } from 'react'
import { Profile, Transaction, Meta, FinScoreHistory } from './supabase'

// Helper para fetcher
async function fetcher(url: string) {
  const res = await fetch(url)
  const json = await res.json()
  if (!res.ok) throw new Error(json.error?.message || 'Error en la petición')
  return json.data
}

// ─── Hook: Perfil del usuario ─────────────────────────────────────────────────
export function useProfile() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const refresh = useCallback(async () => {
    setLoading(true)
    try {
      const data = await fetcher('/api/profile')
      setProfile(data)
      setError(null)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  return { profile, loading, error, refresh }
}

// ─── Hook: FinScore ──────────────────────────────────────────────
export function useFinScore() {
  const { profile, loading: profileLoading, refresh: refreshProfile } = useProfile()
  const [history, setHistory] = useState<FinScoreHistory[]>([])
  const [loading, setLoading] = useState(true)

  const refreshAction = useCallback(async () => {
    setLoading(true)
    try {
      await refreshProfile()
      // En el futuro podríamos llamar a /api/finscore/history
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [refreshProfile])

  return { 
    score: profile?.finscore_actual || 0, 
    loading: profileLoading || loading, 
    refresh: refreshAction 
  }
}

// ─── Hook: Transacciones ──────────────────────────────────────────────────
export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const refresh = useCallback(async () => {
    setLoading(true)
    try {
      const data = await fetcher('/api/transactions')
      setTransactions(data)
      setError(null)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  return { transactions, loading, error, refresh }
}

// ─── Hook: Metas ──────────────────────────────────────────────────────────
export function useMetas() {
  const [metas, setMetas] = useState<Meta[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const refresh = useCallback(async () => {
    setLoading(true)
    try {
      const data = await fetcher('/api/metas')
      setMetas(data)
      setError(null)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  return { metas, loading, error, refresh }
}

// ─── Hook: Alertas Hormiga ─────────────────────────────────────────────────
export function useHormigaAlerts(days: number = 7) {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetcher(`/api/alerts/hormiga?days=${days}`)
      .then(setData)
      .finally(() => setLoading(false))
  }, [days])

  return { data, loading }
}

// ─── Acción: Agregar transacción ──────────────────────────────────────────────
export async function addTransaction(tx: Omit<Transaction, 'id' | 'created_at'>) {
  try {
    const res = await fetch('/api/transactions', {
      method: 'POST',
      body: JSON.stringify(tx)
    })
    const json = await res.json()
    if (!res.ok) return { ok: false, error: json.error?.message }
    return { ok: true, data: json.data }
  } catch (err: any) {
    return { ok: false, error: err.message }
  }
}
