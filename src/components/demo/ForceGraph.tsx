'use client'
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

interface GraphNode {
  id: string
  type: 'center' | 'category' | 'subcategory'
  label: string
  amount: number
  radius: number
  isAlert?: boolean
  isHormiga?: boolean
  x?: number
  y?: number
  fx?: number | null
  fy?: number | null
}

interface GraphLink {
  source: string | GraphNode
  target: string | GraphNode
  value: number
}

interface GraphData {
  nodes: GraphNode[]
  links: GraphLink[]
  summary: {
    total_gastado: number
    fugas_detectadas: number
    monto_en_fugas: number
  }
}

function formatCOP(v: number) {
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`
  if (v >= 1_000) return `$${Math.round(v / 1000)}k`
  return `$${Math.round(v)}`
}

export default function ForceGraph({ period = 'month' }: { period?: string }) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [graphData, setGraphData] = useState<GraphData | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null)

  useEffect(() => {
    fetch(`/api/leak-buster/graph?period=${period}`)
      .then(r => r.json())
      .then(json => {
        if (json.data) setGraphData(json.data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [period])

  useEffect(() => {
    if (!graphData || !svgRef.current) return

    const el = svgRef.current
    const width = el.clientWidth || 360
    const height = 380

    d3.select(el).selectAll('*').remove()

    const svg = d3.select(el)

    const defs = svg.append('defs')

    const glow = defs.append('filter').attr('id', 'fg-glow')
    glow.append('feGaussianBlur').attr('stdDeviation', '3').attr('result', 'blur')
    const m1 = glow.append('feMerge')
    m1.append('feMergeNode').attr('in', 'blur')
    m1.append('feMergeNode').attr('in', 'SourceGraphic')

    const goldGlow = defs.append('filter').attr('id', 'fg-gold-glow')
    goldGlow.append('feGaussianBlur').attr('stdDeviation', '5').attr('result', 'blur')
    const m2 = goldGlow.append('feMerge')
    m2.append('feMergeNode').attr('in', 'blur')
    m2.append('feMergeNode').attr('in', 'SourceGraphic')

    const nodes: GraphNode[] = graphData.nodes.map(n => ({ ...n }))
    const links: GraphLink[] = graphData.links.map(l => ({ ...l }))

    const simulation = d3.forceSimulation(nodes as d3.SimulationNodeDatum[])
      .force('link', d3.forceLink(links)
        .id((d: any) => d.id)
        .distance((l: any) => {
          const src = l.source as GraphNode
          return src.type === 'center' ? 95 : 55
        })
        .strength(0.7)
      )
      .force('charge', d3.forceManyBody().strength(-220))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius((d: any) => (d.radius || 12) + 14))

    const linkEl = svg.append('g')
      .selectAll<SVGLineElement, GraphLink>('line')
      .data(links)
      .join('line')
      .attr('stroke', 'rgba(255,255,255,0.07)')
      .attr('stroke-width', (d: any) => Math.max(1, Math.sqrt(d.value) / 600))

    const nodeEl = svg.append('g')
      .selectAll<SVGGElement, GraphNode>('g')
      .data(nodes)
      .join('g')
      .attr('cursor', 'pointer')
      .on('click', (_event, d) => {
        setSelectedNode(prev => prev?.id === d.id ? null : d)
      })
      .call(
        d3.drag<SVGGElement, GraphNode>()
          .on('start', (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart()
            d.fx = d.x
            d.fy = d.y
          })
          .on('drag', (event, d) => {
            d.fx = event.x
            d.fy = event.y
          })
          .on('end', (event, d) => {
            if (!event.active) simulation.alphaTarget(0)
            d.fx = null
            d.fy = null
          }) as any
      )

    nodeEl.append('circle')
      .attr('r', (d: any) => d.radius || 12)
      .attr('fill', (d: any) => {
        if (d.type === 'center') return '#1a2a5e'
        if (d.type === 'category') return 'rgba(216,169,63,0.12)'
        if (d.isHormiga) return 'rgba(243,110,83,0.12)'
        if (d.isAlert) return 'rgba(239,68,68,0.12)'
        return 'rgba(255,255,255,0.04)'
      })
      .attr('stroke', (d: any) => {
        if (d.type === 'center') return '#D8A93F'
        if (d.type === 'category') return '#D8A93F'
        if (d.isHormiga) return '#F36E53'
        if (d.isAlert) return '#ef4444'
        return 'rgba(255,255,255,0.12)'
      })
      .attr('stroke-width', (d: any) => d.type === 'center' ? 2.5 : d.type === 'category' ? 1.5 : 1)
      .attr('filter', (d: any) => {
        if (d.type === 'center') return 'url(#fg-gold-glow)'
        if (d.isAlert || d.isHormiga) return 'url(#fg-glow)'
        return null
      })

    nodeEl.append('text')
      .text((d: any) => {
        if (d.type === 'center') return formatCOP(d.amount)
        if (d.type === 'category') return d.label
        const lbl: string = d.label
        return lbl.length > 9 ? lbl.slice(0, 8) + '…' : lbl
      })
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'central')
      .attr('fill', (d: any) => {
        if (d.type === 'center') return '#D8A93F'
        if (d.type === 'category') return '#D8A93F'
        if (d.isHormiga) return '#F36E53'
        return 'rgba(255,255,255,0.75)'
      })
      .attr('font-size', (d: any) => d.type === 'center' ? '7.5px' : d.type === 'category' ? '6.5px' : '5.5px')
      .attr('font-weight', (d: any) => d.type !== 'subcategory' ? 'bold' : 'normal')
      .attr('pointer-events', 'none')

    nodeEl.filter((d: any) => d.type === 'category')
      .append('text')
      .text((d: any) => formatCOP(d.amount))
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'central')
      .attr('dy', '1.3em')
      .attr('fill', 'rgba(255,255,255,0.35)')
      .attr('font-size', '5px')
      .attr('pointer-events', 'none')

    simulation.on('tick', () => {
      linkEl
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y)

      nodeEl.attr('transform', (d: any) => `translate(${d.x},${d.y})`)
    })

    return () => { simulation.stop() }
  }, [graphData])

  if (loading) {
    return (
      <div className="w-full h-[380px] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#D8A93F] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!graphData || graphData.nodes.length <= 1) {
    return (
      <div className="w-full h-[200px] flex items-center justify-center text-white/30 text-sm">
        Aún no hay gastos para mostrar en el grafo
      </div>
    )
  }

  return (
    <div className="w-full relative">
      <svg ref={svgRef} className="w-full" style={{ height: 380 }} />
      {selectedNode && (
        <div className="absolute bottom-2 left-3 right-3 bg-[#1a2a5e]/90 backdrop-blur border border-[#D8A93F]/30 rounded-xl p-3 flex items-center justify-between">
          <div>
            <p className="text-white font-bold text-sm">{selectedNode.label}</p>
            <p className="text-[#D8A93F] font-black text-base">{formatCOP(selectedNode.amount || 0)}</p>
          </div>
          <div className="flex gap-2 items-center">
            {selectedNode.isHormiga && (
              <span className="text-[10px] bg-[#F36E53]/20 text-[#F36E53] px-2 py-1 rounded font-bold">🐜 Hormiga</span>
            )}
            {selectedNode.isAlert && !selectedNode.isHormiga && (
              <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-1 rounded font-bold">Fuga detectada</span>
            )}
            <button onClick={() => setSelectedNode(null)} className="text-white/30 text-xs px-1">✕</button>
          </div>
        </div>
      )}
      {graphData.summary.fugas_detectadas > 0 && (
        <p className="text-center text-[10px] text-[#F36E53]/70 mt-1">
          {graphData.summary.fugas_detectadas} fuga{graphData.summary.fugas_detectadas !== 1 ? 's' : ''} detectada{graphData.summary.fugas_detectadas !== 1 ? 's' : ''} · {formatCOP(graphData.summary.monto_en_fugas)} en riesgo
        </p>
      )}
    </div>
  )
}
