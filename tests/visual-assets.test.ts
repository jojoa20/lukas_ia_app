import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { goalVisual, transactionVisual } from '../src/lib/visual-assets'

describe('transactionVisual', () => {
  it('assigns grocery imagery to market movements', () => {
    const visual = transactionVisual('Mercado del D1', 'Fijos', 'gasto')

    assert.equal(visual.label, 'Mercado')
    assert.match(visual.src, /^data:image\/svg\+xml;utf8,/)
    assert.match(visual.alt, /Mercado/)
  })

  it('assigns income imagery to ingreso movements', () => {
    const visual = transactionVisual('Nomina', 'Ingresos', 'ingreso')

    assert.equal(visual.label, 'Ingreso')
    assert.equal(visual.accent, 'text-green-400')
  })

  it('prioritizes hormiga imagery when the movement is flagged', () => {
    const visual = transactionVisual('Cafe', 'Salidas', 'gasto', true)

    assert.equal(visual.label, 'Hormiga')
  })
})

describe('goalVisual', () => {
  it('assigns travel imagery to trip goals', () => {
    const visual = goalVisual('Viaje a San Andres')

    assert.equal(visual.label, 'Viaje')
    assert.match(visual.src, /^data:image\/svg\+xml;utf8,/)
  })

  it('assigns phone imagery to celular goals', () => {
    const visual = goalVisual('Comprar un celular')

    assert.equal(visual.label, 'Celular')
  })
})
