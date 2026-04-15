(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function MobileHeader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center mb-6 mt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-[#EBB33E] font-black tracking-tight text-xl mb-1",
                children: "lukas"
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileHeader.tsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold",
                children: "¡Qué más, Pana!"
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileHeader.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileHeader.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = MobileHeader;
var _c;
__turbopack_context__.k.register(_c, "MobileHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileFinScore.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileFinScore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function MobileFinScore({ score, loading = false }) {
    const getScoreData = (currentScore)=>{
        if (currentScore < 400) {
            return {
                color: "#ff7a59",
                text: "¡Peligro, pana!",
                delta: "↓ (-10)",
                deltaColor: "text-red-500"
            };
        } else if (currentScore < 700) {
            return {
                color: "#f59e0b",
                text: "Ponte las pilas...",
                delta: "↑ (+5)",
                deltaColor: "text-yellow-500"
            };
        } else {
            return {
                color: "#6ee7b7",
                text: "¡Excelente, pana!",
                delta: "↑ (+25)",
                deltaColor: "text-[#2dd4bf]"
            };
        }
    };
    const { color, text, delta, deltaColor } = getScoreData(score);
    // Math for SVG
    const radius = 100;
    const circumference = Math.PI * radius;
    const fillPercentage = Math.max(0, Math.min(1000, score)) / 1000;
    const dashoffset = circumference - fillPercentage * circumference;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-[220px] h-[110px] mx-auto overflow-hidden mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex justify-center items-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-[200px] h-[200px] transform rotate-180",
                            viewBox: "0 0 240 240",
                            preserveAspectRatio: "xMidYMid meet",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: "gaugeGradientMobile",
                                        x1: "0%",
                                        y1: "0%",
                                        x2: "100%",
                                        y2: "0%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: "#ff7a59"
                                            }, void 0, false, {
                                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileFinScore.tsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "50%",
                                                stopColor: "#f59e0b"
                                            }, void 0, false, {
                                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileFinScore.tsx",
                                                lineNumber: 57,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: color
                                            }, void 0, false, {
                                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileFinScore.tsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileFinScore.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileFinScore.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M 20 120 A 100 100 0 0 1 220 120",
                                    fill: "none",
                                    stroke: "rgba(255,255,255,0.1)",
                                    strokeWidth: "20",
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileFinScore.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M 20 120 A 100 100 0 0 1 220 120",
                                    fill: "none",
                                    stroke: "url(#gaugeGradientMobile)",
                                    strokeWidth: "20",
                                    strokeLinecap: "round",
                                    strokeDasharray: circumference,
                                    strokeDashoffset: dashoffset,
                                    className: "transition-all duration-[1200ms] ease-out"
                                }, void 0, false, {
                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileFinScore.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileFinScore.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileFinScore.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] uppercase tracking-wider text-white/70 mb-1",
                                children: "Finscore:"
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileFinScore.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center items-end gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-24 h-12 bg-white/10 animate-pulse rounded-lg"
                                }, void 0, false, {
                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileFinScore.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileFinScore.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center items-end gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-5xl font-black leading-none",
                                        children: score
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileFinScore.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-sm font-bold mb-1 ${deltaColor}`,
                                        children: delta
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileFinScore.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileFinScore.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileFinScore.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileFinScore.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-white/80 mt-2",
                children: [
                    "Tu salud financiera: ",
                    text
                ]
            }, void 0, true, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileFinScore.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileFinScore.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c = MobileFinScore;
var _c;
__turbopack_context__.k.register(_c, "MobileFinScore");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileLeakBuster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
// Formatea números como moneda COP
const formatCOP = (amount)=>new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    }).format(amount);
function MobileLeakBuster({ gastoHormigaTotal = 0, gastosHormigaCount = 0, transactions = [], loading = false }) {
    // Contar suscripciones activas (categoría = streaming / automoto)
    const suscripciones = transactions.filter((t)=>t.categoria === "streaming" || t.subcategoria === "streaming").length;
    // Agrupar gastos hormiga por categoría para los nodos del grafo
    const hormigasByCategory = transactions.filter((t)=>t.es_gasto_hormiga).reduce((acc, t)=>{
        const key = t.subcategoria || t.categoria;
        acc[key] = (acc[key] || 0) + Number(t.monto);
        return acc;
    }, {});
    const topCategorias = Object.entries(hormigasByCategory).sort(([, a], [, b])=>b - a).slice(0, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white/5 border border-white/10 rounded-[20px] backdrop-blur-md flex-1 flex flex-col p-4 mb-4 relative z-10 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold",
                        children: "Lukas AI - Leak Buster"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-white/60",
                        children: 'Identificador de fugas "Gastos Hormiga"'
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-[250px] w-full flex justify-center items-center bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-[80px] h-[80px] bg-[#2E2659] rounded-full flex justify-center items-center text-center text-[10px] leading-tight z-10 border-2 border-[#554499] shadow-[0_0_20px_rgba(85,68,153,0.5)]",
                        children: [
                            "Ingresos /",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, this),
                            "Quincena"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-[100px] h-[2px] bg-gradient-to-r from-[#554499]/80 to-transparent left-1/2 top-1/2 origin-left rotate-[190deg] z-0"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-[80px] h-[2px] bg-gradient-to-r from-[#554499]/80 to-transparent left-1/2 top-1/2 origin-left rotate-[230deg] z-0"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-[90px] h-[2px] bg-gradient-to-r from-[#554499]/80 to-transparent left-1/2 top-1/2 origin-left rotate-[270deg] z-0"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-[110px] h-[2px] bg-gradient-to-r from-[#554499]/80 to-transparent left-1/2 top-1/2 origin-left rotate-[340deg] z-0"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-[100px] h-[2px] bg-gradient-to-r from-[#554499]/80 to-transparent left-1/2 top-1/2 origin-left rotate-[90deg] z-0"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-[120px] h-[2px] bg-gradient-to-r from-[#554499]/80 to-[#F15A42]/80 left-1/2 top-1/2 origin-left rotate-[45deg] z-0"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute rounded-full z-10 w-[30px] h-[30px] top-[40px] left-[30px] bg-[#EBB33E] shadow-[0_0_15px_rgba(235,179,62,0.3)]"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute text-[9px] text-white/70 whitespace-nowrap top-[75px] left-[15px]",
                        children: "Streaming"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute rounded-full z-10 w-[25px] h-[25px] top-[10px] left-[80px] bg-[#EBB33E] shadow-[0_0_15px_rgba(235,179,62,0.3)]"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute text-[9px] text-white/70 whitespace-nowrap top-[0px] left-[65px]",
                        children: "Automoto"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute rounded-full z-10 w-[25px] h-[25px] top-[140px] left-[40px] bg-[#EBB33E] shadow-[0_0_15px_rgba(235,179,62,0.3)]"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute text-[9px] text-white/70 whitespace-nowrap top-[135px] left-[10px]",
                        children: topCategorias[2]?.[0] ?? "Cafés"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute rounded-full z-10 w-[15px] h-[15px] top-[10px] left-[160px] bg-[#3B3877] shadow-[0_0_15px_rgba(59,56,119,0.3)]"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute text-[9px] text-white/70 whitespace-nowrap top-[0px] left-[150px]",
                        children: "Alquiler"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute rounded-full z-10 w-[35px] h-[35px] top-[50px] right-[40px] bg-[#3B3877] shadow-[0_0_15px_rgba(59,56,119,0.3)]"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute text-[9px] text-white/70 whitespace-nowrap top-[35px] right-[40px]",
                        children: [
                            "Ahorro",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                                lineNumber: 86,
                                columnNumber: 108
                            }, this),
                            "Prog."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute rounded-full z-10 w-[45px] h-[45px] bottom-[40px] right-[40px] bg-[#F15A42] animate-pulse shadow-[0_0_20px_rgba(241,90,66,0.6)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-2 h-2 bg-[#F15A42] rounded-full top-[-10px] left-[10px]"
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-2 h-2 bg-[#F15A42] rounded-full top-[-5px] right-[-5px]"
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-2 h-2 bg-[#F15A42] rounded-full bottom-[5px] right-[-10px]"
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[20px] left-[20px] bg-[#1a1525]/90 border border-[#F15A42]/50 rounded-lg p-2 z-20 w-[130px] shadow-xl backdrop-blur-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9px] font-bold text-[#F15A42] mb-[2px] uppercase",
                                children: "Cluster Alerta:"
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-white font-semibold",
                                children: "Gastos Hormiga"
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-20 h-3 bg-white/10 animate-pulse rounded mt-1"
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-3 bg-white/10 animate-pulse rounded mt-1"
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] text-white/70 mt-1",
                                        children: [
                                            "Acum.: ",
                                            formatCOP(gastoHormigaTotal)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] text-white/70",
                                        children: [
                                            gastosHormigaCount,
                                            " Trans."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4 border-t border-white/10 pt-4 mt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-white/70",
                                children: "Suscripciones"
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-bold",
                                children: [
                                    "activas:",
                                    " ",
                                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block w-4 h-4 bg-white/10 animate-pulse rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#EBB33E]",
                                        children: suscripciones || 6
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-white/70",
                                children: "Micro-recompensas:"
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-bold text-[#EBB33E]",
                                children: "3 pendientes"
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = MobileLeakBuster;
var _c;
__turbopack_context__.k.register(_c, "MobileLeakBuster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileBottomBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileBottomBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function MobileBottomBar({ onTransactionAdd }) {
    _s();
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleMicClick = ()=>{
        setIsRecording(!isRecording);
        if (!isRecording) {
            // Simulate voice input after 2 seconds
            setTimeout(()=>{
                setIsRecording(false);
                onTransactionAdd(-15000, "Gasto Hormiga (Café)");
            }, 2000);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-auto pb-6 w-full px-4 relative z-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-2 text-center text-[10px] font-semibold text-white/80 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-center border-r border-white/10 pr-2 cursor-pointer hover:text-white transition",
                        children: [
                            "Ver mi",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileBottomBar.tsx",
                                lineNumber: 28,
                                columnNumber: 17
                            }, this),
                            "presupuesto"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileBottomBar.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-center border-r border-white/10 px-2 cursor-pointer hover:text-white transition",
                        children: [
                            "Metas de",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileBottomBar.tsx",
                                lineNumber: 31,
                                columnNumber: 19
                            }, this),
                            "ahorro"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileBottomBar.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-center pl-2 cursor-pointer hover:text-white transition",
                        children: [
                            "Historial de",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileBottomBar.tsx",
                                lineNumber: 34,
                                columnNumber: 23
                            }, this),
                            "transacciones"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileBottomBar.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileBottomBar.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: handleMicClick,
                className: `h-[60px] rounded-[30px] flex items-center px-5 cursor-pointer transition-all duration-300 ${isRecording ? "bg-[#ff7a59] shadow-[0_0_40px_rgba(255,122,89,0.5)] scale-105" : "bg-[#B3E5D1] shadow-[0_0_30px_rgba(179,229,209,0.3)] hover:scale-[1.02]"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: `w-6 h-6 mr-3 ${isRecording ? "text-white animate-pulse" : "text-[#1a1525]"}`,
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        }, void 0, false, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileBottomBar.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileBottomBar.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-lg font-semibold flex-1 ${isRecording ? "text-white" : "text-[#1a1525] opacity-80"}`,
                        children: isRecording ? "Escuchando..." : "Dime un gasto..."
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileBottomBar.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    !isRecording && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-6 h-6 text-[#1a1525]",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileBottomBar.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileBottomBar.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileBottomBar.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileBottomBar.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileBottomBar.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(MobileBottomBar, "NOd79/f2BaY9QoyKdQLHCBEoQiE=");
_c = MobileBottomBar;
var _c;
__turbopack_context__.k.register(_c, "MobileBottomBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/LUKAS_APP_ENTREGA/src/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://cvrrygffwmxmemlsdnax.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "sb_publishable_lKMeMHkUFMad6tnnC85ruA_bagW2RHM");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/LUKAS_APP_ENTREGA/src/lib/hooks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addTransaction",
    ()=>addTransaction,
    "useFinScore",
    ()=>useFinScore,
    "useProfile",
    ()=>useProfile,
    "useTransactions",
    ()=>useTransactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/src/lib/supabase.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
function useProfile(userId) {
    _s();
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProfile.useEffect": ()=>{
            if (!userId) return;
            const fetch = {
                "useProfile.useEffect.fetch": async ()=>{
                    setLoading(true);
                    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('*').eq('id', userId).single();
                    if (error) setError(error.message);
                    else setProfile(data);
                    setLoading(false);
                }
            }["useProfile.useEffect.fetch"];
            fetch();
        }
    }["useProfile.useEffect"], [
        userId
    ]);
    return {
        profile,
        loading,
        error
    };
}
_s(useProfile, "2vMMKA/p+mq4xHlKmIhZMU9AgAU=");
function useFinScore(userId) {
    _s1();
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFinScore.useCallback[refresh]": async ()=>{
            if (!userId) return;
            setLoading(true);
            // Score actual desde el perfil
            const { data: profileData } = await __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('finscore_actual').eq('id', userId).single();
            if (profileData) setScore(profileData.finscore_actual);
            // Historia de los últimos 7 días
            const { data: histData } = await __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('finscore_history').select('*').eq('user_id', userId).order('fecha', {
                ascending: false
            }).limit(7);
            if (histData) setHistory(histData);
            setLoading(false);
        }
    }["useFinScore.useCallback[refresh]"], [
        userId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFinScore.useEffect": ()=>{
            refresh();
        }
    }["useFinScore.useEffect"], [
        refresh
    ]);
    return {
        score,
        history,
        loading,
        refresh
    };
}
_s1(useFinScore, "KOiYSDv0bXaR7KZXJdHrblek83I=");
function useTransactions(userId) {
    _s2();
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [gastoHormigaTotal, setGastoHormigaTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [gastosHormigaCount, setGastosHormigaCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTransactions.useCallback[refresh]": async ()=>{
            if (!userId) return;
            setLoading(true);
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('transactions').select('*').eq('user_id', userId).order('fecha_transaccion', {
                ascending: false
            }).limit(20);
            if (data) {
                setTransactions(data);
                // Calcular gastos hormiga del mes
                const hormigaTxns = data.filter({
                    "useTransactions.useCallback[refresh].hormigaTxns": (t)=>t.es_gasto_hormiga === true
                }["useTransactions.useCallback[refresh].hormigaTxns"]);
                const total = hormigaTxns.reduce({
                    "useTransactions.useCallback[refresh].total": (acc, t)=>acc + Number(t.monto)
                }["useTransactions.useCallback[refresh].total"], 0);
                setGastoHormigaTotal(total);
                setGastosHormigaCount(hormigaTxns.length);
            }
            setLoading(false);
        }
    }["useTransactions.useCallback[refresh]"], [
        userId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTransactions.useEffect": ()=>{
            refresh();
        }
    }["useTransactions.useEffect"], [
        refresh
    ]);
    return {
        transactions,
        gastoHormigaTotal,
        gastosHormigaCount,
        loading,
        refresh
    };
}
_s2(useTransactions, "Q1q6Amkn3SOOb833LlRajQz8OJM=");
async function addTransaction(tx) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('transactions').insert([
        tx
    ]).select().single();
    if (error) {
        console.error('Error al guardar transacción:', error.message);
        return {
            ok: false,
            error: error.message
        };
    }
    // Actualizar el FinScore: si es gasto, restar 15 puntos
    if (tx.tipo === 'gasto') {
        await __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].rpc('update_finscore', {
            p_user_id: tx.user_id,
            p_delta: tx.es_gasto_hormiga ? -20 : -10
        }).maybeSingle();
        // Fallback: actualizar directamente si la función no existe
        const { data: prof } = await __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('finscore_actual').eq('id', tx.user_id).single();
        if (prof) {
            const newScore = Math.max(0, prof.finscore_actual - (tx.es_gasto_hormiga ? 20 : 10));
            await __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').update({
                finscore_actual: newScore,
                updated_at: new Date().toISOString()
            }).eq('id', tx.user_id);
        }
    }
    return {
        ok: true,
        data
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/LUKAS_APP_ENTREGA/src/app/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$mobile$2f$MobileHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$mobile$2f$MobileFinScore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileFinScore.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$mobile$2f$MobileLeakBuster$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileLeakBuster.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$mobile$2f$MobileBottomBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/src/components/mobile/MobileBottomBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/src/lib/hooks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// ID del usuario de demo (el que se creó con el seed). 
// En producción esto vendría de supabase.auth.getUser()
const DEMO_USER_ID = "00000000-0000-0000-0000-000000000001";
function MobileApp() {
    _s();
    const { score: finScore, loading: scoreLoading, refresh: refreshScore } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFinScore"])(DEMO_USER_ID);
    const { gastoHormigaTotal, gastosHormigaCount, transactions, loading: txLoading, refresh: refreshTx } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactions"])(DEMO_USER_ID);
    // Fallback mientras carga
    const displayScore = scoreLoading ? 650 : finScore;
    const handleAddTransaction = async (amount, category)=>{
        const isGasto = amount < 0;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addTransaction"])({
            user_id: DEMO_USER_ID,
            tipo: isGasto ? "gasto" : "ingreso",
            monto: Math.abs(amount),
            categoria: category,
            descripcion: category,
            metodo_entrada: "audio",
            confianza_ia: 0.95,
            confirmada_por_usuario: false,
            es_gasto_hormiga: isGasto && Math.abs(amount) < 50000,
            fecha_transaccion: new Date().toISOString().split("T")[0]
        });
        // Refrescar datos
        await refreshScore();
        await refreshTx();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col w-full h-full px-4 overflow-y-auto no-scrollbar relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$mobile$2f$MobileHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/app/app/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$mobile$2f$MobileFinScore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                score: displayScore,
                loading: scoreLoading
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/app/app/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$mobile$2f$MobileLeakBuster$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                gastoHormigaTotal: gastoHormigaTotal,
                gastosHormigaCount: gastosHormigaCount,
                transactions: transactions,
                loading: txLoading
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/app/app/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$mobile$2f$MobileBottomBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onTransactionAdd: handleAddTransaction
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/app/app/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/LUKAS_APP_ENTREGA/src/app/app/page.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(MobileApp, "l7FqfRQv53zzI9bCoANltEJfHPs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFinScore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactions"]
    ];
});
_c = MobileApp;
var _c;
__turbopack_context__.k.register(_c, "MobileApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=LUKAS_APP_ENTREGA_src_162f3a13._.js.map