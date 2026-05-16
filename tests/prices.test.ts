import assert from 'node:assert/strict'
import { afterEach, describe, it, mock } from 'node:test'
import { fetchExitoBasket, fetchExitoPrice } from '../src/lib/prices'

const originalFetch = global.fetch

afterEach(() => {
  global.fetch = originalFetch
  mock.restoreAll()
})

function vtexProduct(name: string, price: number, brand = 'Marca') {
  return {
    productName: name,
    brand,
    items: [
      {
        name,
        sellers: [
          {
            commertialOffer: {
              Price: price,
              ListPrice: price,
              AvailableQuantity: 10,
            },
          },
        ],
      },
    ],
  }
}

describe('fetchExitoPrice', () => {
  it('filters irrelevant products and outliers before averaging', async () => {
    global.fetch = mock.fn(async () => new Response(JSON.stringify([
      vtexProduct('Huevos AA x12', 12000),
      vtexProduct('Huevos campesinos x30', 28000),
      vtexProduct('Hervidor electrico de huevos', 180000),
      vtexProduct('Televisor', 900000),
    ]))) as unknown as typeof fetch

    const result = await fetchExitoPrice('huevos')

    assert.equal(result.success, true)
    assert.equal(result.avg_price, 20000)
    assert.equal(result.min_price, 12000)
    assert.equal(result.max_price, 28000)
    assert.equal(result.count, 2)
  })

  it('returns a safe failure when VTEX has no products', async () => {
    global.fetch = mock.fn(async () => new Response(JSON.stringify([]))) as unknown as typeof fetch

    const result = await fetchExitoPrice('producto inexistente')

    assert.equal(result.success, false)
    assert.equal(result.avg_price, null)
    assert.equal(result.products.length, 0)
  })
})

describe('fetchExitoBasket', () => {
  it('builds a basket reference from multiple product queries', async () => {
    global.fetch = mock.fn(async (url: string | URL | Request) => {
      const text = String(url)
      if (text.includes('arroz')) return new Response(JSON.stringify([vtexProduct('Arroz Diana 500g', 4500)]))
      if (text.includes('pollo')) return new Response(JSON.stringify([vtexProduct('Pollo pechuga', 16000)]))
      return new Response(JSON.stringify([]))
    }) as unknown as typeof fetch

    const result = await fetchExitoBasket(['arroz', 'pollo'])

    assert.equal(result.success, true)
    assert.equal(result.estimated_total, 20500)
    assert.deepEqual(result.items.map((item) => item.query), ['arroz', 'pollo'])
  })
})
