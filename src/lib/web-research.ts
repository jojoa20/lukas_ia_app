export type WebResearchResult = {
  success: boolean
  query: string
  source: 'Brave Search'
  results: {
    title: string
    url: string
    description: string
    age?: string
  }[]
  message?: string
}

export async function braveWebSearch(query: string, count = 5): Promise<WebResearchResult> {
  const apiKey = process.env.BRAVE_SEARCH_API_KEY || process.env.BRAVE_API_KEY
  if (!apiKey) {
    return {
      success: false,
      query,
      source: 'Brave Search',
      results: [],
      message: 'BRAVE_SEARCH_API_KEY no esta configurada.',
    }
  }

  const url = new URL('https://api.search.brave.com/res/v1/web/search')
  url.searchParams.set('q', query)
  url.searchParams.set('count', String(Math.min(Math.max(count, 1), 10)))
  url.searchParams.set('country', 'CO')
  url.searchParams.set('search_lang', 'es')
  url.searchParams.set('safesearch', 'moderate')
  url.searchParams.set('freshness', 'pm')

  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'X-Subscription-Token': apiKey,
    },
    signal: AbortSignal.timeout(8000),
  })

  if (!response.ok) {
    return {
      success: false,
      query,
      source: 'Brave Search',
      results: [],
      message: `Brave Search HTTP ${response.status}`,
    }
  }

  const json = await response.json()
  const results = (json.web?.results || []).slice(0, count).map((item: any) => ({
    title: item.title || 'Resultado',
    url: item.url || '',
    description: item.description || '',
    age: item.age,
  }))

  return {
    success: results.length > 0,
    query,
    source: 'Brave Search',
    results,
    message: results.length ? undefined : 'Sin resultados relevantes.',
  }
}
