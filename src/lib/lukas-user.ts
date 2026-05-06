import crypto from 'crypto'
import { auth, currentUser } from '@clerk/nextjs/server'
import { createAdminClient } from '@/lib/supabase/admin'

export const DEMO_USER_ID = '00000000-0000-4000-8000-000000000001'

export async function getInternalId(clerkId: string): Promise<string> {
  const hash = crypto.createHash('md5').update(clerkId).digest('hex')
  return [
    hash.substring(0, 8),
    hash.substring(8, 12),
    '4' + hash.substring(13, 16),
    '8' + hash.substring(17, 20),
    hash.substring(20, 32),
  ].join('-')
}

export async function getLukasUser(options: { allowDemo?: boolean } = {}) {
  const { allowDemo = true } = options
  const { userId } = await auth()
  const user = userId ? await currentUser() : null

  if (!userId && !allowDemo) {
    throw new Error('Usuario no autenticado')
  }

  const id = userId ? await getInternalId(userId) : DEMO_USER_ID
  const email = user?.emailAddresses[0]?.emailAddress || 'demo@lukas.local'
  const name = user?.firstName || user?.fullName || 'Pana'

  return {
    id,
    clerkId: userId,
    email,
    name,
    isDemo: !userId,
  }
}

export async function ensureProfile(user: Awaited<ReturnType<typeof getLukasUser>>) {
  const adminDB = createAdminClient()
  const { data: profiles } = await adminDB.from('profiles').select('id').eq('id', user.id).limit(1)

  if (!profiles || profiles.length === 0) {
    if (user.clerkId) {
      const { data: clerkProfiles } = await adminDB.from('profiles').select('id').eq('clerk_id', user.clerkId).limit(1)
      if (clerkProfiles && clerkProfiles.length > 0) {
        return clerkProfiles[0]
      }
    }

    const { data: emailProfiles } = await adminDB.from('profiles').select('id').eq('email', user.email).limit(1)
    if (emailProfiles && emailProfiles.length > 0) {
      return emailProfiles[0]
    }

    const { data: inserted } = await adminDB.from('profiles').upsert([{
      id: user.id,
      email: user.email,
      clerk_id: user.clerkId,
      full_name: user.name,
      balance_actual: 0,
      finscore_actual: 500,
      racha_actual_dias: 0,
      pais: 'CO',
      moneda_base: 'COP',
    }], { onConflict: 'id' }).select('id').limit(1)
    return inserted?.[0] || null
  }

  return profiles[0]
}
