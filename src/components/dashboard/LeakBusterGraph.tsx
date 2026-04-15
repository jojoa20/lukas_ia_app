"use client";

// PASO 1 Fix: Este componente usa D3.js directamente con refs del DOM.
// Requiere "use client" para acceder a window/document y las APIs del browser.
// El import dinámico con ssr:false desde HomeView garantiza que
// el bundle de D3 (~500KB) no bloquee el SSR.

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

// ----- Tipos de datos -----
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

// Datos por defecto mientras se conecta el endpoint real
const defaultNodes: GraphNode[] = [
  { id: "center", type: "center", label: "Ingresos", amount: 3500000, radius: 50 },
  { id: "cat-alim", type: "category", label: "Alimentación", amount: 465000, radius: 35 },
  { id: "cat-trans", type: "category", label: "Transporte", amount: 320000, radius: 30 },
  { id: "cat-ent", type: "category", label: "Entretenimiento", amount: 250000, radius: 28 },
  { id: "sub-snacks", type: "subcategory", parent: "cat-alim", label: "Snacks", amount: 150000, radius: 20, isAlert: true, transactions: 12 },
  { id: "sub-tinto", type: "subcategory", parent: "cat-alim", label: "Tinto ☕", amount: 63000, radius: 15, isAlert: true, transactions: 21 },
  { id: "sub-uber", type: "subcategory", parent: "cat-trans", label: "Uber", amount: 180000, radius: 18, isAlert: false, transactions: 8 },
  { id: "sub-dom", type: "subcategory", parent: "cat-ent", label: "Domicilios", amount: 120000, radius: 17, isAlert: true, transactions: 6 },
];

const defaultLinks: GraphLink[] = [
  { source: "center", target: "cat-alim", value: 465000 },
  { source: "center", target: "cat-trans", value: 320000 },
  { source: "center", target: "cat-ent", value: 250000 },
  { source: "cat-alim", target: "sub-snacks", value: 150000 },
  { source: "cat-alim", target: "sub-tinto", value: 63000 },
  { source: "cat-trans", target: "sub-uber", value: 180000 },
  { source: "cat-ent", target: "sub-dom", value: 120000 },
];

export default function LeakBusterGraph({
  nodes = defaultNodes,
  links = defaultLinks,
}: LeakBusterGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = svgRef.current.clientWidth || 400;
    const height = svgRef.current.clientHeight || 300;

    // Limpiar SVG previo
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Defs: gradientes y filtros glow
    const defs = svg.append("defs");
    const glow = defs.append("filter").attr("id", "glow");
    glow.append("feGaussianBlur").attr("stdDeviation", "3").attr("result", "coloredBlur");
    const feMerge = glow.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "coloredBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    const simulation = d3
      .forceSimulation<GraphNode>(nodes)
      .force(
        "link",
        d3.forceLink<GraphNode, GraphLink>(links)
          .id((d) => d.id)
          .distance(90)
      )
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius((d) => (d as GraphNode).radius + 8));

    // Links
    const link = svg
      .append("g")
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", "rgba(139,92,246,0.3)")
      .attr("stroke-width", (d) => Math.sqrt(d.value / 50000) + 1);

    // Nodes
    const nodeGroup = svg
      .append("g")
      .selectAll("g")
      .data(nodes)
      .enter()
      .append("g")
      .style("cursor", "pointer");

    nodeGroup
      .append("circle")
      .attr("r", (d) => d.radius)
      .attr("fill", (d) => {
        if (d.type === "center") return "rgba(139,92,246,0.9)";
        if (d.isAlert) return "rgba(239,68,68,0.8)";
        if (d.type === "category") return "rgba(59,130,246,0.7)";
        return "rgba(16,185,129,0.7)";
      })
      .attr("filter", (d) => (d.isAlert ? "url(#glow)" : null))
      .attr("stroke", (d) => (d.isAlert ? "#ef4444" : "rgba(255,255,255,0.2)"))
      .attr("stroke-width", (d) => (d.isAlert ? 2 : 1));

    nodeGroup
      .append("text")
      .text((d) => d.label)
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("font-size", (d) => (d.type === "center" ? 11 : 9))
      .attr("fill", "white")
      .attr("font-weight", (d) => (d.type === "center" ? "bold" : "normal"));

    simulation.on("tick", () => {
      link
        .attr("x1", (d) => (d.source as GraphNode).x!)
        .attr("y1", (d) => (d.source as GraphNode).y!)
        .attr("x2", (d) => (d.target as GraphNode).x!)
        .attr("y2", (d) => (d.target as GraphNode).y!);

      nodeGroup.attr("transform", (d) => `translate(${d.x},${d.y})`);
    });

    return () => {
      simulation.stop();
    };
  }, [nodes, links]);

  return (
    <svg
      ref={svgRef}
      className="w-full h-full"
      style={{ minHeight: "280px" }}
    />
  );
}
