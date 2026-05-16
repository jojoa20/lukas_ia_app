import assert from 'node:assert/strict'
import { afterEach, describe, it, mock } from 'node:test'
import { fetchYahooQuote } from '../src/lib/market-data'
import { braveWebSearch } from '../src/lib/web-research'

const originalFetch = global.fetch
const originalBraveKey = process.env.BRAVE_SEARCH_API_KEY
const originalBraveApiKey = process.env.BRAVE_API_KEY

afterEach(() => {
  global.fetch = originalFetch
  process.env.BRAVE_SEARCH_API_KEY = originalBraveKey
  process.env.BRAVE_API_KEY = originalBraveApiKey
  mock.restoreAll()
})

describe('fetchYahooQuote', () => {
  it('normalizes Yahoo chart data into a market quote', async () => {
    global.fetch = mock.fn(async () => new Response(JSON.stringify({
      chart: {
        result: [
          {
            meta: {
              currency: 'USD',
              regularMarketPrice: 105,
              previousClose: 100,
              regularMarketTime: 1_768_875_200,
            },
          },
        ],
      },
    }))) as unknown as typeof fetch

    const quote = await fetchYahooQuote('AAPL')

    assert.equal(quote.success, true)
    assert.equal(quote.symbol, 'AAPL')
    assert.equal(quote.price, 105)
    assert.equal(quote.change, 5)
    assert.equal(quote.changePercent, 5)
    assert.equal(quote.currency, 'USD')
  })

  it('returns a safe failure if Yahoo rejects the request', async () => {
    global.fetch = mock.fn(async () => new Response('nope', { status: 500 })) as unknown as typeof fetch

    const quote = await fetchYahooQuote('AAPL')

    assert.equal(quote.success, false)
    assert.equal(quote.price, null)
    assert.match(quote.message || '', /Yahoo HTTP 500/)
  })
})

describe('braveWebSearch', () => {
  it('does not call fetch when no API key is configured', async () => {
    delete process.env.BRAVE_SEARCH_API_KEY
    delete process.env.BRAVE_API_KEY
    const fetchMock = mock.fn(async () => new Response('{}'))
    global.fetch = fetchMock as unknown as typeof fetch

    const result = await braveWebSearch('inflacion Colombia')

    assert.equal(result.success, false)
    assert.equal(result.results.length, 0)
    assert.equal(fetchMock.mock.callCount(), 0)
  })

  it('maps Brave web results into a compact source list', async () => {
    process.env.BRAVE_SEARCH_API_KEY = 'test-key'
    global.fetch = mock.fn(async () => new Response(JSON.stringify({
      web: {
        results: [
          {
            title: 'Inflacion baja',
            url: 'https://example.com/inflacion',
            description: 'La inflacion anual bajo segun el reporte.',
            age: '2 days ago',
          },
        ],
      },
    }))) as unknown as typeof fetch

    const result = await braveWebSearch('inflacion Colombia')

    assert.equal(result.success, true)
    assert.equal(result.results[0].title, 'Inflacion baja')
    assert.equal(result.results[0].url, 'https://example.com/inflacion')
  })
})
