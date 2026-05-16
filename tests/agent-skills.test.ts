import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  analyzeSpendingText,
  extractMarketSymbol,
  wantsMarketLookup,
  wantsWebResearch,
} from '../src/lib/agent-skills'

describe('agent spending analysis', () => {
  it('treats mercado as a generic category, not a comparable product', () => {
    const result = analyzeSpendingText('Gaste 50 mil en mercado')

    assert.equal(result.kind, 'generic')
    assert.equal(result.productQuery, 'mercado')
    assert.deepEqual(result.basketItems, [])
  })

  it('treats grocery-store wording as generic even with store names', () => {
    const result = analyzeSpendingText('Pague 180 mil en mercado del D1')

    assert.equal(result.kind, 'generic')
    assert.equal(result.productQuery, 'mercado d1')
  })

  it('keeps broad vegetable market wording generic unless products are listed', () => {
    const result = analyzeSpendingText('Gaste 40 mil en mercado de verduras')

    assert.equal(result.kind, 'generic')
    assert.equal(result.productQuery, 'mercado verduras')
  })

  it('extracts a single comparable product even when amount appears before product', () => {
    const result = analyzeSpendingText('Pague 30000 por huevos')

    assert.equal(result.kind, 'single_product')
    assert.equal(result.productQuery, 'huevos')
    assert.deepEqual(result.basketItems, ['huevos'])
  })

  it('treats comma-separated grocery items as a basket', () => {
    const result = analyzeSpendingText('Compre arroz, pollo y tomate por 50000')

    assert.equal(result.kind, 'basket')
    assert.deepEqual(result.basketItems, ['arroz', 'pollo', 'tomate'])
  })

  it('treats natural "x y y" grocery wording as a basket', () => {
    const result = analyzeSpendingText('Compre leche y pan en 20 mil')

    assert.equal(result.kind, 'basket')
    assert.deepEqual(result.basketItems, ['leche', 'pan'])
  })

  it('does not turn vague compra wording into an empty product', () => {
    const result = analyzeSpendingText('Gaste 120 mil')

    assert.equal(result.kind, 'none')
  })
})

describe('research and market intent detection', () => {
  it('detects market lookup questions and maps common symbols', () => {
    assert.equal(wantsMarketLookup('Como esta el dolar hoy?'), true)
    assert.equal(extractMarketSymbol('Como esta el dolar hoy?'), 'USDCOP=X')
    assert.equal(extractMarketSymbol('TRM Colombia'), 'USDCOP=X')
    assert.equal(extractMarketSymbol('precio de bitcoin'), 'BTC-USD')
    assert.equal(extractMarketSymbol('revisa NVDA'), 'NVDA')
  })

  it('does not mistake normal spending text for financial market lookup', () => {
    assert.equal(wantsMarketLookup('gaste 50 mil en mercado'), false)
    assert.equal(extractMarketSymbol('gaste 50 mil en mercado'), null)
  })

  it('detects fresh web research intent', () => {
    assert.equal(wantsWebResearch('investiga noticias recientes de inflacion en Colombia'), true)
    assert.equal(wantsWebResearch('registrame un almuerzo'), false)
  })
})
