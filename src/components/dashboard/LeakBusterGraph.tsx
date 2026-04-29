"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";

interface GraphNode extends d3.SimulationNodeDatum {
  id: string;
  type: "center" | "category" | "subcategory";
  label: string;
  amount: number;
  radius: number;
  isAlert?: boolean;
  transactions?: number;
  parent?: string;
}

interface GraphLink extends d3.SimulationLinkDatum<GraphNode> {
  value: number;
}

interface LeakBusterGraphProps {
  nodes?: GraphNode[];
  links?: GraphLink[];
}

const defaultNodes: GraphNode[] = [
  { id: "center", type: "center", label: "Gastos", amount: 1500000, radius: 45 },
  { id: "cat-alim", type: "category", label: "Comida", amount: 465000, radius: 30 },
  { id: "cat-trans", type: "category", label: "Transporte", amount: 320000, radius: 28 },
  { id: "sub-snacks", type: "subcategory", parent: "cat-alim", label: "Mecato", amount: 150000, radius: 18, isAlert: true, transactions: 12 },
  { id: "sub-uber", type: "subcategory", parent: "cat-trans", label: "Plataformas", amount: 180000, radius: 16, isAlert: false, transactions: 8 },
];

const defaultLinks: GraphLink[] = [
  { source: "center", target: "cat-alim", value: 465000 },
  { source: "center", target: "cat-trans", value: 320000 },
  { source: "cat-alim", target: "sub-snacks", value: 150000 },
  { source: "cat-trans", target: "sub-uber", value: 180000 },
];

export default function LeakBusterGraph({
  nodes = defaultNodes,
  links = defaultLinks,
}: LeakBusterGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = svgRef.current.clientWidth || 400;
    const height = svgRef.current.clientHeight || 400;

    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    // Elite Filters & Gradients
    const defs = svg.append("defs");
    
    // Gold Glow
    const goldGlow = defs.append("filter").attr("id", "goldGlow");
    goldGlow.append("feGaussianBlur").attr("stdDeviation", "4").attr("result", "blur");
    goldGlow.append("feComposite").attr("in", "SourceGraphic").attr("in2", "blur").attr("operator", "over");

    // Elite Gradient
    const gradient = defs.append("radialGradient")
      .attr("id", "nodeGradient")
      .attr("cx", "30%")
      .attr("cy", "30%")
      .attr("r", "70%");
    gradient.append("stop").attr("offset", "0%").attr("stop-color", "rgba(255,255,255,0.1)");
    gradient.append("stop").attr("offset", "100%").attr("stop-color", "rgba(255,255,255,0.02)");

    const simulation = d3.forceSimulation<GraphNode>(nodes)
      .force("link", d3.forceLink<GraphNode, GraphLink>(links).id(d => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-150))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius((d: any) => d.radius + 15));

    // Refined Links
    const link = svg.append("g")
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", "rgba(255,255,255,0.05)")
      .attr("stroke-width", 1)
      .attr("stroke-dasharray", "4,4");

    // Elite Nodes
    const nodeGroup = svg.append("g")
      .selectAll("g")
      .data(nodes)
      .enter()
      .append("g")
      .call(d3.drag<SVGGElement, GraphNode>()
        .on("start", (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on("drag", (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on("end", (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }) as any
      );

    // Node Circle - Glassmorphic
    nodeGroup.append("circle")
      .attr("r", d => d.radius)
      .attr("fill", d => d.type === 'center' ? "rgba(255,255,255,0.03)" : "url(#nodeGradient)")
      .attr("stroke", d => {
        if (d.isAlert) return "#D8A93F";
        if (d.type === 'center') return "rgba(255,255,255,0.1)";
        return "rgba(255,255,255,0.05)";
      })
      .attr("stroke-width", d => d.isAlert ? 2 : 1)
      .attr("filter", d => d.isAlert ? "url(#goldGlow)" : null)
      .style("backdrop-filter", "blur(10px)");

    // Node Label - Elite Typography
    nodeGroup.append("text")
      .text(d => d.label)
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .attr("fill", d => d.isAlert ? "#D8A93F" : "rgba(255,255,255,0.4)")
      .attr("font-size", d => d.type === 'center' ? "10px" : "8px")
      .attr("font-weight", "900")
      .attr("letter-spacing", "0.2em")
      .style("text-transform", "uppercase")
      .style("pointer-events", "none");

    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      nodeGroup.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });

    return () => {
      simulation.stop();
    };
  }, [nodes, links]);

  return (
    <div className="w-full aspect-square relative glass-elite rounded-[4rem] border-white/5 overflow-hidden flex items-center justify-center p-8">
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
      <svg ref={svgRef} className="w-full h-full relative z-10" />
      
      {/* Legend / Overlay */}
      <div className="absolute bottom-10 left-10 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D8A93F] shadow-[0_0_8px_#D8A93F]" />
          <span className="text-[8px] text-white/20 font-black uppercase tracking-[0.3em]">Fugas Detectadas</span>
        </div>
      </div>
    </div>
  );
}
