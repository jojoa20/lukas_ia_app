type AgentEvent = {
  event: string
  userId?: string
  message?: string
  metadata?: Record<string, unknown>
}

export function logAgentEvent({ event, userId, message, metadata = {} }: AgentEvent) {
  if (process.env.LUKAS_AGENT_OBSERVABILITY === 'off') return

  console.info(JSON.stringify({
    scope: 'lukas-agent',
    event,
    userId,
    message,
    metadata,
    timestamp: new Date().toISOString(),
  }))
}
