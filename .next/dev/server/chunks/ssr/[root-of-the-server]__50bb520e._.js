module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/LUKAS_APP_ENTREGA/src/components/demo/SplashScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SplashScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
;
function SplashScreen({ onFinishLoading }) {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>{
            setIsVisible(false);
            setTimeout(onFinishLoading, 800);
        }, 5000); // 5 seconds to give time to see the login button
        return ()=>clearTimeout(timer);
    }, [
        onFinishLoading
    ]);
    // SVG Nodes coordinates
    const nodes = [
        {
            cx: 50,
            cy: 50
        },
        {
            cx: 150,
            cy: 30
        },
        {
            cx: 100,
            cy: 100
        },
        {
            cx: 40,
            cy: 150
        },
        {
            cx: 160,
            cy: 140
        }
    ];
    const lines = [
        {
            x1: 50,
            y1: 50,
            x2: 100,
            y2: 100
        },
        {
            x1: 150,
            y1: 30,
            x2: 100,
            y2: 100
        },
        {
            x1: 40,
            y1: 150,
            x2: 100,
            y2: 100
        },
        {
            x1: 160,
            y1: 140,
            x2: 100,
            y2: 100
        },
        {
            x1: 50,
            y1: 50,
            x2: 40,
            y2: 150
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 1
            },
            exit: {
                opacity: 0,
                scale: 1.05
            },
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            },
            className: "bg-[#21428D] fixed inset-0 z-[100] flex flex-col items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-[200px] h-[200px] flex items-center justify-center mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "200",
                        height: "200",
                        viewBox: "0 0 200 200",
                        className: "overflow-visible drop-shadow-[0_0_15px_rgba(216,169,63,0.5)]",
                        children: [
                            lines.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].line, {
                                    x1: line.x1,
                                    y1: line.y1,
                                    x2: line.x2,
                                    y2: line.y2,
                                    stroke: "#D8A93F",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    initial: {
                                        pathLength: 0,
                                        opacity: 0
                                    },
                                    animate: {
                                        pathLength: 1,
                                        opacity: 0.6
                                    },
                                    transition: {
                                        duration: 1.5,
                                        ease: "easeInOut",
                                        delay: 0.2
                                    }
                                }, `line-${i}`, false, {
                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/SplashScreen.tsx",
                                    lineNumber: 51,
                                    columnNumber: 17
                                }, this)),
                            nodes.map((node, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].circle, {
                                    cx: node.cx,
                                    cy: node.cy,
                                    r: "6",
                                    fill: i === 2 ? "#D8A93F" : "#F36E53",
                                    stroke: "#111827",
                                    strokeWidth: "2",
                                    initial: {
                                        scale: 0
                                    },
                                    animate: {
                                        scale: 1
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 15,
                                        delay: 1.2 + i * 0.1
                                    },
                                    className: "drop-shadow-[0_0_8px_rgba(243,110,83,0.8)]"
                                }, `node-${i}`, false, {
                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/SplashScreen.tsx",
                                    lineNumber: 68,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].circle, {
                                cx: 100,
                                cy: 100,
                                r: "12",
                                fill: "none",
                                stroke: "#D8A93F",
                                strokeWidth: "2",
                                initial: {
                                    scale: 0,
                                    opacity: 1
                                },
                                animate: {
                                    scale: 2.5,
                                    opacity: 0
                                },
                                transition: {
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: 1.8
                                }
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/SplashScreen.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/SplashScreen.tsx",
                        lineNumber: 48,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/SplashScreen.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.8,
                        delay: 0.8
                    },
                    className: "text-[#D8A93F] text-4xl font-black tracking-tighter drop-shadow-[0_0_20px_rgba(216,169,63,0.8)]",
                    children: "Lukas AI"
                }, void 0, false, {
                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/SplashScreen.tsx",
                    lineNumber: 108,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: 0.8,
                        delay: 1.2
                    },
                    className: "text-white/40 text-[10px] mt-2 tracking-[0.2em] uppercase font-bold italic",
                    children: "Iniciando Experiencia..."
                }, void 0, false, {
                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/SplashScreen.tsx",
                    lineNumber: 116,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5,
                        delay: 2.0
                    },
                    className: "absolute bottom-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/login",
                        className: "px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all backdrop-blur-md",
                        children: "Iniciar Sesión"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/SplashScreen.tsx",
                        lineNumber: 132,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/SplashScreen.tsx",
                    lineNumber: 126,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/SplashScreen.tsx",
            lineNumber: 40,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/SplashScreen.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AlertModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function AlertModal({ onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#111827]/80 backdrop-blur-md animate-in fade-in duration-300",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#1a2a5e] border-2 border-[#F36E53]/40 w-full max-w-sm rounded-[32px] p-6 shadow-[0_20px_60px_rgba(243,110,83,0.25)] relative overflow-hidden animate-in slide-in-from-bottom-10 zoom-in-95 duration-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -top-20 -right-20 w-[150px] h-[150px] bg-[#F36E53] rounded-full blur-[80px] opacity-40"
                }, void 0, false, {
                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-start mb-6 relative z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-full bg-[#F36E53]/10 border border-[#F36E53]/30 flex items-center justify-center text-[#F36E53] shadow-[0_0_15px_rgba(243,110,83,0.5)]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2.5",
                                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                        }, void 0, false, {
                                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                                            lineNumber: 20,
                                            columnNumber: 95
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                                        lineNumber: 20,
                                        columnNumber: 16
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                                    lineNumber: 19,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-white font-bold text-lg leading-tight",
                                            children: "Gasto Hormiga"
                                        }, void 0, false, {
                                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                                            lineNumber: 23,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#F36E53] font-medium text-sm",
                                            children: "Cluster Detectado"
                                        }, void 0, false, {
                                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                                            lineNumber: 24,
                                            columnNumber: 16
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                                    lineNumber: 22,
                                    columnNumber: 14
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 text-white/50 hover:text-white transition-colors bg-white/5 rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2.5",
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                                    lineNumber: 28,
                                    columnNumber: 92
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 relative z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[42px] font-black text-white tracking-tighter drop-shadow-md",
                            children: [
                                "$150.000 ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl text-white/50 font-medium",
                                    children: "COP"
                                }, void 0, false, {
                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                                    lineNumber: 34,
                                    columnNumber: 23
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                            lineNumber: 33,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/70 text-sm mt-1",
                            children: "Acumulado en los últimos 7 días"
                        }, void 0, false, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                            lineNumber: 36,
                            columnNumber: 12
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#111827]/50 rounded-2xl p-4 mb-6 border border-white/5 relative z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-white/60 uppercase tracking-wider text-[11px] font-bold mb-3",
                            children: "Desglose de fugas"
                        }, void 0, false, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-3",
                            children: [
                                {
                                    icon: "☕️",
                                    name: "Tinto diario (x7)",
                                    amount: "$21.000"
                                },
                                {
                                    icon: "🥟",
                                    name: "Empanadas y Pan",
                                    amount: "$35.000"
                                },
                                {
                                    icon: "🚕",
                                    name: "Uber cortos (x3)",
                                    amount: "$45.000"
                                },
                                {
                                    icon: "🍫",
                                    name: "Máquina Snacks",
                                    amount: "$49.000"
                                }
                            ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex justify-between items-center text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-white/10 w-8 h-8 rounded-full flex items-center justify-center text-base",
                                                    children: item.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 22
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-medium",
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 22
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                                            lineNumber: 50,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/80 font-bold",
                                            children: item.amount
                                        }, void 0, false, {
                                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                                            lineNumber: 54,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                                    lineNumber: 49,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 relative z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full bg-gradient-to-r from-[#D8A93F] to-[#E5B951] text-[#111827] font-bold text-base py-4 rounded-full shadow-[0_0_20px_rgba(216,169,63,0.5)] active:scale-95 transition-transform",
                            onClick: onClose,
                            children: "Crear Alerta Estricta"
                        }, void 0, false, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full bg-transparent border-2 border-white/20 text-white hover:bg-white/5 font-bold text-base py-3.5 rounded-full active:scale-95 transition-all",
                            onClick: onClose,
                            children: "Ignorar por ahora"
                        }, void 0, false, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$demo$2f$AlertModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/src/components/demo/AlertModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function AnimatedNumber({ value }) {
    const [displayValue, setDisplayValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animate"])(0, value, {
            duration: 2,
            ease: "easeOut",
            onUpdate: (v)=>setDisplayValue(Math.round(v))
        });
        return controls.stop;
    }, [
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: displayValue
    }, void 0, false);
}
function HomeView({ onOpenAlert }) {
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch('/api/profile').then((res)=>res.json()).then((json)=>{
            if (json.data) setProfile(json.data);
            setLoading(false);
        }).catch(()=>setLoading(false));
    }, []);
    const name = profile?.full_name || "Parcero";
    const score = profile?.finscore_actual || 0;
    const racha = profile?.racha_actual_dias || 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 10
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            scale: 0.95
        },
        className: "flex flex-col p-5 pb-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6 mt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                        className: "text-white font-bold text-[28px] leading-tight",
                        children: [
                            "¡Qué más, Pana!",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                                lineNumber: 55,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#D8A93F]",
                                children: [
                                    name,
                                    "!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center ml-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-full border-2 border-[#D8A93F] shadow-[0_0_15px_rgba(216,169,63,0.4)] overflow-hidden bg-[#111827] flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 text-[#D8A93F]",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                                    clipRule: "evenodd"
                                }, void 0, false, {
                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-gradient-to-r from-[#D8A93F]/20 to-transparent border-l-4 border-[#D8A93F] p-4 rounded-r-2xl mb-6 flex items-center gap-3 backdrop-blur-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl",
                        children: "🔥"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[#D8A93F] font-bold text-sm",
                                children: [
                                    "Racha: ",
                                    racha,
                                    " Días"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white/70 text-xs",
                                children: "¡Sigue así para subir de nivel!"
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center relative shadow-lg mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-[280px] h-[140px] mb-4 overflow-hidden flex justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 200 100",
                            className: "w-[240px] h-[120px] drop-shadow-[0_0_15px_rgba(216,169,63,0.6)] overflow-visible",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M 10 90 A 80 80 0 0 1 190 90",
                                    fill: "none",
                                    stroke: "#1a2a5e",
                                    strokeWidth: "12",
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                                    d: "M 10 90 A 80 80 0 0 1 190 90",
                                    fill: "none",
                                    stroke: "#D8A93F",
                                    strokeWidth: "12",
                                    strokeLinecap: "round",
                                    strokeDasharray: "251.2",
                                    initial: {
                                        strokeDashoffset: 251.2
                                    },
                                    animate: {
                                        strokeDashoffset: 251.2 - 251.2 * (score / 10000)
                                    },
                                    transition: {
                                        duration: 2,
                                        ease: "easeOut"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-x-0 bottom-2 flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/60 text-sm mb-1 uppercase tracking-widest",
                                    children: "FinScore"
                                }, void 0, false, {
                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#D8A93F] text-[52px] font-black tracking-tighter leading-none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedNumber, {
                                        value: score
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 p-4 rounded-2xl border border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[13px] font-bold text-white mb-3",
                                children: "Presupuesto"
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1.5 w-full bg-[#111827] rounded-full overflow-hidden mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full bg-[#D8A93F] w-[75%]"
                                }, void 0, false, {
                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] text-white/50 text-right",
                                children: "75% usado"
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 p-4 rounded-2xl border border-white/10",
                        onClick: ()=>setShowModal(true),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[13px] font-bold text-white mb-3",
                                children: "Alertas"
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 bg-red-500 rounded-full animate-ping"
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-red-400 font-bold",
                                        children: "Gasto Hormiga"
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$demo$2f$AlertModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onClose: ()=>setShowModal(false)
                }, void 0, false, {
                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                    lineNumber: 119,
                    columnNumber: 23
                }, this)
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[project]/LUKAS_APP_ENTREGA/src/lib/supabase/data:b0f8c5 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addTransaction",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40c00b8b9dfd11cb4fc41551f7eb42dd69034b6763":"addTransaction"},"LUKAS_APP_ENTREGA/src/lib/supabase/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40c00b8b9dfd11cb4fc41551f7eb42dd69034b6763", __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addTransaction");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcblxuaW1wb3J0IHsgY3JlYXRlU2VydmVyQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3NzcidcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tICduZXh0L2hlYWRlcnMnXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDbGllbnQoKSB7XG4gIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpXG5cbiAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVTZXJ2ZXJDbGllbnQoXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMISxcbiAgICBwcm9jZXNzLmVudi5TVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZISxcbiAgICB7XG4gICAgICBjb29raWVzOiB7XG4gICAgICAgIGdldChuYW1lOiBzdHJpbmcpIHsgcmV0dXJuIGNvb2tpZVN0b3JlLmdldChuYW1lKT8udmFsdWUgfSxcbiAgICAgICAgc2V0KG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7IHRyeSB7IGNvb2tpZVN0b3JlLnNldCh7IG5hbWUsIHZhbHVlLCAuLi5vcHRpb25zIH0pIH0gY2F0Y2gge30gfSxcbiAgICAgICAgcmVtb3ZlKG5hbWUsIG9wdGlvbnMpIHsgdHJ5IHsgY29va2llU3RvcmUuZGVsZXRlKHsgbmFtZSwgLi4ub3B0aW9ucyB9KSB9IGNhdGNoIHt9IH0sXG4gICAgICB9LFxuICAgIH1cbiAgKTtcblxuICBzdXBhYmFzZS5hdXRoLmdldFVzZXIgPSBhc3luYyAoKTogUHJvbWlzZTxhbnk+ID0+IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ3Byb2ZpbGVzJykuc2VsZWN0KCdpZCcpLmxpbWl0KDEpLnNpbmdsZSgpO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICByZXR1cm4geyBkYXRhOiB7IHVzZXI6IHsgaWQ6IGRhdGEuaWQgfSB9LCBlcnJvcjogbnVsbCB9O1xuICAgIH1cbiAgICByZXR1cm4geyBkYXRhOiB7IHVzZXI6IG51bGwgfSwgZXJyb3I6IG5ldyBFcnJvcignTm8gcHJvZmlsZSBmb3VuZCcpIH07XG4gIH07XG5cbiAgcmV0dXJuIHN1cGFiYXNlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXV0aGVudGljYXRlZFVzZXIoKSB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcbiAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG4gIGlmIChlcnJvciB8fCAhdXNlcikgdGhyb3cgbmV3IEVycm9yKCdObyBoYXkgcGVyZmlsIGVuIGxhIGJhc2UgZGUgZGF0b3MnKVxuICByZXR1cm4geyBzdXBhYmFzZSwgdXNlciB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRUcmFuc2FjdGlvbihhcmdzOiB7IFxuICBtb250bzogbnVtYmVyLCBcbiAgZGVzY3JpcGNpb246IHN0cmluZywgXG4gIGNhdGVnb3JpYT86IHN0cmluZyxcbiAgbWV0b2RvX2VudHJhZGE/OiAndGV4dG8nIHwgJ2F1ZGlvJyB8ICdtYW51YWwnIHwgJ29jcl9pbWFnZW4nIFxufSkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgc3VwYWJhc2UsIHVzZXIgfSA9IGF3YWl0IGdldEF1dGhlbnRpY2F0ZWRVc2VyKClcbiAgICBcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKCd0cmFuc2FjdGlvbnMnKS5pbnNlcnQoW3sgXG4gICAgICB1c2VyX2lkOiB1c2VyLmlkLCBcbiAgICAgIHRpcG86IGFyZ3MubW9udG8gPiAwID8gJ2luZ3Jlc28nIDogJ2dhc3RvJywgXG4gICAgICBtb250bzogTWF0aC5hYnMoYXJncy5tb250byksIFxuICAgICAgZGVzY3JpcGNpb246IGFyZ3MuZGVzY3JpcGNpb24sXG4gICAgICBjYXRlZ29yaWE6IGFyZ3MuY2F0ZWdvcmlhIHx8ICdvdHJvJyxcbiAgICAgIG1ldG9kb19lbnRyYWRhOiBhcmdzLm1ldG9kb19lbnRyYWRhIHx8ICd0ZXh0bycsXG4gICAgICBlc19nYXN0b19ob3JtaWdhOiBhcmdzLm1vbnRvIDwgMCAmJiBNYXRoLmFicyhhcmdzLm1vbnRvKSA8IDIwMDAwXG4gICAgfV0pLnNlbGVjdCgpO1xuXG4gICAgaWYgKGVycm9yKSB0aHJvdyBlcnJvcjtcblxuICAgIHJldmFsaWRhdGVQYXRoKCcvJyk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVuc2FqZTogJ8KhTGlzdG8gbmVhIScgfTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZSk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lbnNhamU6IGUubWVzc2FnZSB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdUQXVDc0IsMkxBQUEifQ==
}),
"[project]/LUKAS_APP_ENTREGA/src/components/demo/LukasVoiceAction.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LukasVoiceButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$react$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@elevenlabs/react/dist/lib.modern.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$lib$2f$supabase$2f$data$3a$b0f8c5__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/src/lib/supabase/data:b0f8c5 [app-ssr] (ecmascript) <text/javascript>");
'use client';
;
;
;
;
function LukasVoiceButton() {
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const conversation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$react$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useConversation"])({
        clientTools: {
            registrar_transaccion: async (parameters)=>{
                try {
                    console.log("VOZ > Herramienta llamada:", parameters);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$lib$2f$supabase$2f$data$3a$b0f8c5__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addTransaction"])({
                        monto: parameters.monto,
                        descripcion: parameters.descripcion || "Voz",
                        categoria: (parameters.categoria || 'otro').toLowerCase(),
                        metodo_entrada: 'audio'
                    });
                    return "¡Hecho nea! Ya lo anoté.";
                } catch (e) {
                    console.error("VOZ > Error en DB:", e);
                    return "Pailas nea, no pude anotarlo.";
                }
            }
        },
        onConnect: ()=>console.log('VOZ > Lukas conectado'),
        onDisconnect: ()=>console.log('VOZ > Lukas desconectado'),
        onError: (err)=>{
            console.error('VOZ > Error SDK:', err);
            setErrorMsg("Error de voz");
        },
        onMessage: (msg)=>console.log('VOZ > Lukas dijo:', msg)
    });
    const startLukas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setErrorMsg(null);
        try {
            console.log("VOZ > Iniciando sesión...");
            await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            const res = await fetch('/api/voice/session');
            if (!res.ok) {
                const text = await res.text();
                throw new Error(`Error ${res.status}: ${text.substring(0, 30)}`);
            }
            const data = await res.json();
            if (!data.signedUrl) throw new Error("No se recibió URL firmada");
            await conversation.startSession({
                signedUrl: data.signedUrl
            });
        } catch (err) {
            console.error('VOZ > Error al iniciar:', err);
            setErrorMsg(err.message.includes('<!DOCTYPE') ? "API no encontrada (404)" : err.message);
        }
    }, [
        conversation
    ]);
    const stopLukas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        await conversation.endSession();
    }, [
        conversation
    ]);
    const isActive = conversation.status === 'connected';
    const isConnecting = conversation.status === 'connecting';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: isActive ? stopLukas : startLukas,
                disabled: isConnecting,
                className: `p-3.5 rounded-full transition-all shadow-2xl ${isActive ? 'bg-red-500 scale-110' : 'bg-[#D8A93F] hover:scale-105 active:scale-95'}`,
                children: isConnecting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/LukasVoiceAction.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-6 h-6 text-white",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2.5",
                    viewBox: "0 0 24 24",
                    children: isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M6 18L18 6M6 6l12 12"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/LukasVoiceAction.tsx",
                        lineNumber: 80,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/LukasVoiceAction.tsx",
                        lineNumber: 82,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/LukasVoiceAction.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/LukasVoiceAction.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[-40px] bg-red-600 text-white text-[9px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap",
                children: errorMsg
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/LukasVoiceAction.tsx",
                lineNumber: 89,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/LukasVoiceAction.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
"[project]/LUKAS_APP_ENTREGA/src/components/demo/ChatView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ai-sdk/react/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$demo$2f$LukasVoiceAction$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/src/components/demo/LukasVoiceAction.tsx [app-ssr] (ecmascript)");
// @ts-nocheck
"use client";
;
;
;
;
;
function ChatView() {
    const { messages, input, handleInputChange, handleSubmit, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChat"])({
        initialMessages: [
            {
                id: '1',
                role: 'assistant',
                content: '¡Hola! Soy Lukas, tu pana financiero. ¿En qué te puedo ayudar hoy?'
            }
        ]
    });
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [
        messages,
        isLoading
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full p-4 pb-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-6 text-[#D8A93F]",
                children: "Habla con Lukas"
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/ChatView.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollRef,
                className: "flex-1 overflow-y-auto space-y-4 mb-4 no-scrollbar",
                children: [
                    messages.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: m.role === 'user' ? 20 : -20
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            className: `flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `max-w-[80%] p-4 rounded-2xl ${m.role === 'user' ? 'bg-[#D8A93F] text-black rounded-tr-none' : 'bg-white/10 text-white rounded-tl-none border border-white/10'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm leading-relaxed",
                                    children: m.content
                                }, void 0, false, {
                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/ChatView.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/ChatView.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        }, m.id, false, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/ChatView.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)),
                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        className: "flex justify-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-[80%] p-4 rounded-2xl bg-white/10 text-white rounded-tl-none border border-white/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm leading-relaxed animate-pulse",
                                children: "Lukas está pensando..."
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/ChatView.tsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/ChatView.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/ChatView.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/ChatView.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 bg-[#111827] border border-white/10 p-2 pr-4 rounded-full backdrop-blur-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "flex-1 flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: input,
                                onChange: handleInputChange,
                                placeholder: "Dime un gasto o pregunta algo...",
                                className: "flex-1 bg-transparent border-none outline-none text-white px-4 text-sm"
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/ChatView.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isLoading || !input.trim(),
                                className: "bg-[#D8A93F] text-black w-10 h-10 rounded-full flex items-center justify-center font-bold disabled:opacity-50",
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/ChatView.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/ChatView.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-8 bg-white/10"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/ChatView.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$demo$2f$LukasVoiceAction$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/ChatView.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/ChatView.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/ChatView.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnalyticsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
;
;
function AnalyticsView() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            x: -20
        },
        animate: {
            opacity: 1,
            x: 0
        },
        exit: {
            opacity: 0,
            scale: 0.95
        },
        transition: {
            duration: 0.4
        },
        className: "flex flex-col p-5 pb-28",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                initial: {
                    y: -20,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    delay: 0.1,
                    type: "spring",
                    stiffness: 100
                },
                className: "text-white font-bold text-[28px] mb-6 tracking-tight drop-shadow-md",
                children: "Análisis y Grupos"
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.9
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    delay: 0.2,
                    duration: 0.4
                },
                className: "bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center relative shadow-lg shadow-black/20 w-full mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white/70 text-sm font-medium uppercase tracking-widest mb-4 w-full text-left",
                        children: "Presupuesto: Mecato y Rumba"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-[200px] h-[200px] mb-2 flex justify-center items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-[#F36E53]/20 blur-[50px] rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 100 100",
                                className: "w-[180px] h-[180px] drop-shadow-[0_0_15px_rgba(243,110,83,0.5)] transform -rotate-90",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                            id: "coral-gradient",
                                            x1: "0%",
                                            y1: "0%",
                                            x2: "100%",
                                            y2: "100%",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "0%",
                                                    stopColor: "#F9D472"
                                                }, void 0, false, {
                                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "50%",
                                                    stopColor: "#F36E53"
                                                }, void 0, false, {
                                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "100%",
                                                    stopColor: "#D9381E"
                                                }, void 0, false, {
                                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "50",
                                        cy: "50",
                                        r: "40",
                                        fill: "none",
                                        stroke: "#1a2a5e",
                                        strokeWidth: "14"
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].circle, {
                                        cx: "50",
                                        cy: "50",
                                        r: "40",
                                        fill: "none",
                                        stroke: "url(#coral-gradient)",
                                        strokeWidth: "14",
                                        strokeLinecap: "round",
                                        strokeDasharray: "251.2",
                                        initial: {
                                            strokeDashoffset: 251.2
                                        },
                                        animate: {
                                            strokeDashoffset: 25.12
                                        },
                                        transition: {
                                            duration: 1.5,
                                            delay: 0.4,
                                            ease: "easeOut"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex flex-col items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/60 text-[10px] font-bold uppercase tracking-wider",
                                        children: "Gastado"
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white text-3xl font-black drop-shadow-md",
                                        children: "90%"
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between w-full mt-4 text-sm font-medium px-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#F36E53]",
                                children: "$450.000"
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white/40",
                                children: "de $500.000"
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 0.3,
                    duration: 0.4
                },
                className: "bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative shadow-lg shadow-black/20 w-full mb-6 max-w-[600px] mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white/70 text-sm font-medium uppercase tracking-widest mb-4",
                        children: "Gasto Grupal (Flujo)"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full relative h-[180px] overflow-hidden flex items-center justify-center bg-[#111827]/30 rounded-xl border border-white/5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 300 150",
                                className: "w-full h-full absolute inset-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                id: "flow1",
                                                x1: "0%",
                                                y1: "0%",
                                                x2: "100%",
                                                y2: "0%",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "0%",
                                                        stopColor: "#1a2a5e"
                                                    }, void 0, false, {
                                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 18
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "100%",
                                                        stopColor: "#D8A93F"
                                                    }, void 0, false, {
                                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 18
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                                lineNumber: 90,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                id: "flow2",
                                                x1: "0%",
                                                y1: "0%",
                                                x2: "100%",
                                                y2: "0%",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "0%",
                                                        stopColor: "#1a2a5e"
                                                    }, void 0, false, {
                                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 18
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "100%",
                                                        stopColor: "#397DC1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 18
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                                lineNumber: 94,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                id: "flow3",
                                                x1: "0%",
                                                y1: "0%",
                                                x2: "100%",
                                                y2: "0%",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "0%",
                                                        stopColor: "#1a2a5e"
                                                    }, void 0, false, {
                                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 18
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "100%",
                                                        stopColor: "#F36E53"
                                                    }, void 0, false, {
                                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 18
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                                lineNumber: 98,
                                                columnNumber: 16
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                        lineNumber: 89,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                                        d: "M 50,75 C 100,75 150,30 220,30",
                                        fill: "none",
                                        stroke: "url(#flow1)",
                                        strokeWidth: "15",
                                        strokeLinecap: "round",
                                        opacity: "0.6",
                                        className: "animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                        lineNumber: 105,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                                        d: "M 50,75 C 100,75 150,75 220,75",
                                        fill: "none",
                                        stroke: "url(#flow2)",
                                        strokeWidth: "20",
                                        strokeLinecap: "round",
                                        opacity: "0.4"
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                        lineNumber: 110,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                                        d: "M 50,75 C 100,75 150,120 220,120",
                                        fill: "none",
                                        stroke: "url(#flow3)",
                                        strokeWidth: "35",
                                        strokeLinecap: "round",
                                        opacity: "0.8"
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                        lineNumber: 114,
                                        columnNumber: 14
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-2 top-1/2 -translate-y-1/2 bg-[#21428D] px-2 py-3 rounded-lg border border-white/20 text-center shadow-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-white/50 uppercase font-black tracking-widest leading-none",
                                        children: "Total"
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-white font-bold text-sm mt-1",
                                        children: "$450k"
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-4 top-4 flex bg-[#111827] px-2 py-1 rounded shadow-lg border border-[#D8A93F]/50 items-center justify-between w-[90px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-white",
                                        children: "Tú"
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-[#D8A93F] font-bold",
                                        children: "100k"
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-4 top-[60px] flex bg-[#111827] px-2 py-1 rounded shadow-lg border border-[#397DC1]/50 items-center justify-between w-[90px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-white",
                                        children: "Sofía"
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-[#397DC1] font-bold",
                                        children: "140k"
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-4 bottom-4 flex bg-[#111827] px-2 py-1 rounded shadow-lg border border-[#F36E53]/50 items-center justify-between w-[90px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-white flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-[#F36E53] w-1.5 h-1.5 rounded-full animate-ping"
                                            }, void 0, false, {
                                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                                lineNumber: 139,
                                                columnNumber: 16
                                            }, this),
                                            "Andrés"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-[#F36E53] font-bold",
                                        children: "210k"
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h3, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 0.8
                },
                className: "text-white/70 text-sm font-medium uppercase tracking-widest mb-4 px-2 mt-2",
                children: "Últimos Movimientos"
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3",
                children: [
                    {
                        icon: "🛍️",
                        title: "Zara Premium",
                        cat: "Ropa",
                        amount: "-$120.000",
                        color: "#397DC1"
                    },
                    {
                        icon: "🍔",
                        title: "El Corral",
                        cat: "Mecato",
                        amount: "-$35.000",
                        color: "#F36E53"
                    },
                    {
                        icon: "💸",
                        title: "Transferencia de mamá",
                        cat: "Ingresos",
                        amount: "+$250.000",
                        color: "#D8A93F",
                        isPos: true
                    },
                    {
                        icon: "🎬",
                        title: "Netflix",
                        cat: "Suscripciones",
                        amount: "-$22.000",
                        color: "#397DC1"
                    }
                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -10
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            delay: 0.9 + i * 0.1
                        },
                        className: `bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center justify-between shadow-sm hover:bg-white/10 transition-colors`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-tr shadow-inner",
                                        style: {
                                            background: `linear-gradient(to top right, #111827, ${item.color}33)`,
                                            borderColor: `${item.color}4D`,
                                            borderWidth: '1px'
                                        },
                                        children: item.icon
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-white font-bold",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/50 text-xs mt-0.5",
                                                children: item.cat
                                            }, void 0, false, {
                                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `font-black tracking-tight ${item.isPos ? 'text-[#D8A93F]' : 'text-white'}`,
                                children: item.amount
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/LUKAS_APP_ENTREGA/src/components/demo/MetasView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MetasView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
;
;
;
function MetasView() {
    const [metas, setMetas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nombre, setNombre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [monto, setMonto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch('/api/metas').then((res)=>res.json()).then((json)=>{
            if (json.data) setMetas(json.data);
            setLoading(false);
        }).catch(()=>setLoading(false));
    }, []);
    const handleCreate = async ()=>{
        if (!nombre || !monto) return;
        const res = await fetch('/api/metas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre,
                monto_objetivo: Number(monto)
            })
        });
        if (res.ok) {
            const json = await res.json();
            setMetas((prev)=>[
                    json.data,
                    ...prev
                ]);
            setShowModal(false);
            setNombre("");
            setMonto("");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        className: "p-4 bottom-24 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-[#D8A93F]",
                        children: "Tus Metas"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/MetasView.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowModal(true),
                        className: "bg-[#D8A93F] text-black px-4 py-2 rounded-full font-bold text-sm",
                        children: "+ Nueva Meta"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/MetasView.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/MetasView.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#111827] p-6 rounded-2xl w-full max-w-sm border border-white/10 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-white",
                            children: "Crear Meta"
                        }, void 0, false, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/MetasView.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white",
                            placeholder: "Nombre (ej. Viaje a San Andr├®s)",
                            value: nombre,
                            onChange: (e)=>setNombre(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/MetasView.tsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white",
                            placeholder: "Monto Objetivo",
                            type: "number",
                            value: monto,
                            onChange: (e)=>setMonto(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/MetasView.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 justify-end mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowModal(false),
                                    className: "px-4 py-2 text-white/50",
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/MetasView.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCreate,
                                    className: "bg-[#D8A93F] text-black px-6 py-2 rounded-lg font-bold",
                                    children: "Guardar"
                                }, void 0, false, {
                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/MetasView.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/MetasView.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/MetasView.tsx",
                    lineNumber: 59,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/MetasView.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-pulse space-y-4",
                children: [
                    1,
                    2
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-24 bg-white/5 rounded-2xl"
                    }, i, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/MetasView.tsx",
                        lineNumber: 95,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/MetasView.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this) : metas.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 pb-20",
                children: metas.map((meta)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 p-5 rounded-2xl border border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold",
                                children: meta.nombre
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/MetasView.tsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2 w-full bg-black rounded-full mt-2 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        width: 0
                                    },
                                    animate: {
                                        width: `${meta.porcentaje_completado}%`
                                    },
                                    className: "h-full bg-[#D8A93F] rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/MetasView.tsx",
                                    lineNumber: 104,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/MetasView.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs mt-2 opacity-50",
                                children: [
                                    "$",
                                    (meta.monto_actual / 1000000).toFixed(1),
                                    "M / $",
                                    (meta.monto_objetivo / 1000000).toFixed(1),
                                    "M"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/MetasView.tsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this)
                        ]
                    }, meta.id, true, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/MetasView.tsx",
                        lineNumber: 101,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/MetasView.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/5 p-8 rounded-2xl text-center border border-dashed border-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "opacity-50",
                    children: "No tienes metas activas."
                }, void 0, false, {
                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/MetasView.tsx",
                    lineNumber: 118,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/MetasView.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/MetasView.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HistorialView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
;
;
;
function HistorialView() {
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Form state
    const [monto, setMonto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [tipo, setTipo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('gasto');
    const [categoria, setCategoria] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [descripcion, setDescripcion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch('/api/transactions').then((res)=>res.json()).then((json)=>{
            if (json.data) setTransactions(json.data);
            setLoading(false);
        }).catch(()=>setLoading(false));
    }, []);
    const handleSaveTransaction = async ()=>{
        if (!monto || !categoria || !descripcion) return;
        setLoading(true);
        const payload = {
            monto: Number(monto),
            tipo,
            categoria,
            descripcion
        };
        try {
            const res = await fetch('/api/transactions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (res.ok) {
                const json = await res.json();
                // Aseguramos que la transacci├│n se agrega al tope visual
                setTransactions((prev)=>[
                        json.data,
                        ...prev
                    ]);
                setShowModal(false);
                setMonto("");
                setCategoria("");
                setDescripcion("");
            }
        } catch (e) {
            console.error(e);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        className: "p-4 mb-24 min-h-screen relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-6 text-[#D8A93F]",
                children: "Mi Actividad"
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            loading && transactions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 animate-pulse",
                children: [
                    1,
                    2,
                    3,
                    4
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-16 bg-white/5 rounded-2xl"
                    }, i, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this) : transactions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: transactions.map((tx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "bg-white/5 p-4 rounded-2xl flex justify-between items-center border border-white/5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-10 h-10 rounded-full flex items-center justify-center ${tx.tipo === 'ingreso' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`,
                                        children: tx.tipo === 'ingreso' ? 'Ôåô' : 'Ôåæ'
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-sm",
                                                children: tx.descripcion || tx.categoria
                                            }, void 0, false, {
                                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                                                lineNumber: 92,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] opacity-40 uppercase tracking-wider",
                                                children: new Date(tx.fecha_transaccion).toLocaleDateString()
                                            }, void 0, false, {
                                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `font-bold ${tx.tipo === 'ingreso' ? 'text-green-400' : 'text-white'}`,
                                        children: [
                                            tx.tipo === 'ingreso' ? '+' : '-',
                                            "$",
                                            tx.monto.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this),
                                    tx.es_gasto_hormiga && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] text-[#D8A93F] font-semibold",
                                        children: "Gasto Hormiga ­ƒÉ£"
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                                        lineNumber: 101,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this)
                        ]
                    }, tx.id, true, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                        lineNumber: 81,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "opacity-50 text-sm",
                    children: "No hay movimientos registrados."
                }, void 0, false, {
                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                    lineNumber: 109,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowModal(true),
                className: "fixed bottom-24 right-6 w-14 h-14 bg-[#D8A93F] rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 2.5,
                    stroke: "black",
                    className: "w-6 h-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M12 4.5v15m7.5-7.5h-15"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#111827] p-6 rounded-3xl w-full max-w-sm border border-white/10 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-white mb-2",
                            children: "Registrar Movimiento"
                        }, void 0, false, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 mb-4 p-1 bg-white/5 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setTipo('gasto'),
                                    className: `flex-1 py-2 text-sm font-bold rounded-md ${tipo === 'gasto' ? 'bg-red-500/20 text-red-400' : 'text-white/50'}`,
                                    children: "Gasto"
                                }, void 0, false, {
                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setTipo('ingreso'),
                                    className: `flex-1 py-2 text-sm font-bold rounded-md ${tipo === 'ingreso' ? 'bg-green-500/20 text-green-400' : 'text-white/50'}`,
                                    children: "Ingreso"
                                }, void 0, false, {
                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            className: "w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white text-lg font-bold",
                            placeholder: "$ Monto",
                            value: monto,
                            onChange: (e)=>setMonto(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white",
                            placeholder: "Categor├¡a (Ej. Comida, Transporte)",
                            value: categoria,
                            onChange: (e)=>setCategoria(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white",
                            placeholder: "Descripci├│n opcional",
                            value: descripcion,
                            onChange: (e)=>setDescripcion(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                            lineNumber: 157,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 justify-end mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowModal(false),
                                    className: "px-4 py-3 text-white/50 font-semibold",
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSaveTransaction,
                                    disabled: loading || !monto || !categoria,
                                    className: "bg-[#D8A93F] text-black px-6 py-3 rounded-xl font-bold flex-1 disabled:opacity-50 flex items-center justify-center gap-2",
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "animate-spin text-xl",
                                        children: "Ôå╗"
                                    }, void 0, false, {
                                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                                        lineNumber: 176,
                                        columnNumber: 28
                                    }, this) : "Guardar"
                                }, void 0, false, {
                                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                            lineNumber: 164,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                    lineNumber: 126,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
}),
"[project]/LUKAS_APP_ENTREGA/src/components/demo/BottomNav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
;
;
function BottomNav({ activeTab, onChangeTab }) {
    const tabs = [
        {
            id: "presupuesto",
            label: "Presupuesto",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 sm:w-6 sm:h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/BottomNav.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/BottomNav.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/BottomNav.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        },
        {
            id: "metas",
            label: "Metas",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 sm:w-6 sm:h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                }, void 0, false, {
                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/BottomNav.tsx",
                    lineNumber: 26,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/BottomNav.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        },
        {
            id: "chat",
            label: "Hablar",
            isCenter: true,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6 sm:w-8 sm:h-8",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2.5",
                    d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                }, void 0, false, {
                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/BottomNav.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/BottomNav.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        },
        {
            id: "analytics",
            label: "Grupos",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 sm:w-6 sm:h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                }, void 0, false, {
                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/BottomNav.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/BottomNav.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this)
        },
        {
            id: "historial",
            label: "Historial",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 sm:w-6 sm:h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                }, void 0, false, {
                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/BottomNav.tsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/BottomNav.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute bottom-0 left-0 right-0 h-20 sm:h-24 bg-[#111827]/95 backdrop-blur-xl border-t border-white/10 flex items-center justify-between px-2 sm:px-6 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]",
        children: tabs.map((tab)=>{
            const isActive = activeTab === tab.id || activeTab === "home" && tab.id === "presupuesto";
            if (tab.isCenter) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative -top-6 flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            onClick: ()=>onChangeTab("chat"),
                            className: "w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#D8A93F] to-[#F36E53] text-[#111827] flex items-center justify-center shadow-[0_10px_20px_rgba(243,110,83,0.4)] border-4 border-[#111827]",
                            children: tab.icon
                        }, void 0, false, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/BottomNav.tsx",
                            lineNumber: 68,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] mt-2 font-bold text-white tracking-widest uppercase",
                            children: tab.label
                        }, void 0, false, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/BottomNav.tsx",
                            lineNumber: 76,
                            columnNumber: 15
                        }, this)
                    ]
                }, tab.id, true, {
                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/BottomNav.tsx",
                    lineNumber: 67,
                    columnNumber: 13
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onChangeTab(tab.id === "presupuesto" ? "home" : tab.id),
                className: `flex flex-col items-center justify-center p-2 min-w-[60px] sm:min-w-[70px] transition-all duration-300 ${isActive ? "text-[#D8A93F]" : "text-white/40 hover:text-white"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mb-1 transition-transform duration-300 ${isActive ? "scale-110 drop-shadow-[0_0_8px_rgba(216,169,63,0.8)]" : ""}`,
                        children: tab.icon
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/BottomNav.tsx",
                        lineNumber: 91,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-[8px] sm:text-[9px] font-bold tracking-wider uppercase ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100 transition-opacity"}`,
                        children: tab.label
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/BottomNav.tsx",
                        lineNumber: 94,
                        columnNumber: 13
                    }, this),
                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        layoutId: "activeTabDot",
                        className: "w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#D8A93F] mt-1 shadow-[0_0_8px_rgba(216,169,63,1)]"
                    }, void 0, false, {
                        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/BottomNav.tsx",
                        lineNumber: 100,
                        columnNumber: 15
                    }, this)
                ]
            }, tab.id, true, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/BottomNav.tsx",
                lineNumber: 84,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/BottomNav.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
}),
"[project]/LUKAS_APP_ENTREGA/src/components/demo/DemoContainer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DemoContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$demo$2f$SplashScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/src/components/demo/SplashScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$demo$2f$HomeView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/src/components/demo/HomeView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$demo$2f$ChatView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/src/components/demo/ChatView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$demo$2f$AnalyticsView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/src/components/demo/AnalyticsView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$demo$2f$MetasView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/src/components/demo/MetasView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$demo$2f$HistorialView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/src/components/demo/HistorialView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$demo$2f$BottomNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/src/components/demo/BottomNav.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function DemoContainer() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("home"); // home, chat, analytics
    const [showAlert, setShowAlert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSplash, setShowSplash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full w-full relative",
        children: [
            showSplash && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$demo$2f$SplashScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onFinishLoading: ()=>setShowSplash(false)
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/DemoContainer.tsx",
                lineNumber: 19,
                columnNumber: 22
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto no-scrollbar pb-24 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: [
                        activeTab === "home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$demo$2f$HomeView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            onOpenAlert: ()=>setShowAlert(true)
                        }, "home", false, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/DemoContainer.tsx",
                            lineNumber: 24,
                            columnNumber: 36
                        }, this),
                        activeTab === "chat" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$demo$2f$ChatView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, "chat", false, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/DemoContainer.tsx",
                            lineNumber: 25,
                            columnNumber: 36
                        }, this),
                        activeTab === "analytics" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$demo$2f$AnalyticsView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, "analytics", false, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/DemoContainer.tsx",
                            lineNumber: 26,
                            columnNumber: 41
                        }, this),
                        activeTab === "metas" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$demo$2f$MetasView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, "metas", false, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/DemoContainer.tsx",
                            lineNumber: 27,
                            columnNumber: 37
                        }, this),
                        activeTab === "historial" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$demo$2f$HistorialView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, "historial", false, {
                            fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/DemoContainer.tsx",
                            lineNumber: 28,
                            columnNumber: 41
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/DemoContainer.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/DemoContainer.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$components$2f$demo$2f$BottomNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                activeTab: activeTab,
                onChangeTab: setActiveTab
            }, void 0, false, {
                fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/DemoContainer.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/LUKAS_APP_ENTREGA/src/components/demo/DemoContainer.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__50bb520e._.js.map