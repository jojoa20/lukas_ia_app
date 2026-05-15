import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createAdminClient } from '@/lib/supabase/admin'
import { ensureProfile, getLukasUser } from '@/lib/lukas-user'

const groupSchema = z.object({
  nombre: z.string().min(3).max(50),
  tipo: z.enum(['pareja', 'familia', 'amigos', 'otro']).default('amigos'),
  invite_email: z.string().email().optional().or(z.literal('')),
})

const patchSchema = z.object({
  personal_budget: z.number().nonnegative(),
})

async function sendInviteEmail(params: { to: string; groupName: string; inviterName: string }) {
  if (!process.env.RESEND_API_KEY) {
    return { sent: false, reason: 'RESEND_API_KEY no configurada' }
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL || 'Lukas <onboarding@resend.dev>',
      to: params.to,
      subject: `${params.inviterName} te invito a un grupo en Lukas`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111827">
          <h2>Te invitaron a Lukas</h2>
          <p>${params.inviterName} quiere compartir contigo el grupo <strong>${params.groupName}</strong>.</p>
          <p>Entra a Lukas, crea tu cuenta o inicia sesion con este correo para unirte.</p>
          <p><a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://lukas-app.vercel.app'}/sign-in">Abrir Lukas</a></p>
        </div>
      `,
    }),
  })

  if (!res.ok) {
    const errorText = await res.text().catch(() => '')
    return { sent: false, reason: errorText || 'No se pudo enviar el correo' }
  }

  return { sent: true }
}

export async function GET() {
  const user = await getLukasUser({ allowDemo: false })
  const ensuredProfile = await ensureProfile(user)
  const userId = ensuredProfile?.id || user.id
  const adminDB = createAdminClient()

  const { data: memberships, error } = await adminDB
    .from('group_members')
    .select('group_id, rol, groups(*)')
    .eq('user_id', userId)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const groups = (memberships || [])
    .map((row: any) => {
      const group = Array.isArray(row.groups) ? row.groups[0] : row.groups
      return group ? { ...group, rol: row.rol } : null
    })
    .filter(Boolean)

  const { data: profile } = await adminDB
    .from('profiles')
    .select('balance_actual, finscore_actual, meta_ahorro_mensual')
    .eq('id', userId)
    .limit(1)
    .maybeSingle()

  return NextResponse.json({
    data: groups,
    meta: {
      profile,
      personal_budget: Number(profile?.meta_ahorro_mensual || 0),
    },
  })
}

export async function POST(req: Request) {
  const user = await getLukasUser({ allowDemo: false })
  const ensuredProfile = await ensureProfile(user)
  const userId = ensuredProfile?.id || user.id
  const adminDB = createAdminClient()

  const body = await req.json()
  const parsed = groupSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  const { invite_email, ...groupPayload } = parsed.data

  const { data: group, error: groupError } = await adminDB
    .from('groups')
    .insert({ ...groupPayload, created_by: userId })
    .select()
    .single()

  if (groupError) return NextResponse.json({ error: groupError.message }, { status: 500 })

  const { error: memberError } = await adminDB
    .from('group_members')
    .insert({ group_id: group.id, user_id: userId, rol: 'admin' })

  if (memberError) return NextResponse.json({ error: memberError.message }, { status: 500 })

  let invitation = null
  if (invite_email) {
    const emailResult = await sendInviteEmail({
      to: invite_email,
      groupName: group.nombre,
      inviterName: user.name,
    })

    invitation = {
      email: invite_email,
      sent: emailResult.sent,
      reason: emailResult.reason,
    }

    await adminDB
      .from('group_invitations')
      .insert({
        group_id: group.id,
        email: invite_email,
        invited_by: userId,
        status: emailResult.sent ? 'sent' : 'pending',
      })
      .then(() => null, () => null)
  }

  return NextResponse.json({ data: { ...group, invitation } }, { status: 201 })
}

export async function PATCH(req: Request) {
  const user = await getLukasUser({ allowDemo: false })
  const ensuredProfile = await ensureProfile(user)
  const userId = ensuredProfile?.id || user.id
  const adminDB = createAdminClient()

  const body = await req.json()
  const parsed = patchSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  const { data, error } = await adminDB
    .from('profiles')
    .select('balance_actual, finscore_actual, meta_ahorro_mensual')
    .eq('id', userId)
    .limit(1)
    .maybeSingle()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const currentBalance = Number(data?.balance_actual || 0)
  if (parsed.data.personal_budget > currentBalance) {
    return NextResponse.json({ error: 'No puedes asignar ese presupuesto: tu saldo actual es menor.' }, { status: 400 })
  }

  const { data: updatedProfile, error: updateError } = await adminDB
    .from('profiles')
    .update({ meta_ahorro_mensual: parsed.data.personal_budget })
    .eq('id', userId)
    .select('balance_actual, finscore_actual, meta_ahorro_mensual')
    .limit(1)
    .maybeSingle()

  if (updateError) return NextResponse.json({ error: updateError.message }, { status: 500 })

  return NextResponse.json({
    data: updatedProfile,
    meta: {
      personal_budget: Number(updatedProfile?.meta_ahorro_mensual || parsed.data.personal_budget),
    },
  })
}
