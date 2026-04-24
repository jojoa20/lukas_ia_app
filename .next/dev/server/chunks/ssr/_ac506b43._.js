module.exports = [
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/is-object.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isObject",
    ()=>isObject
]);
function isObject(value) {
    return typeof value === "object" && value !== null;
}
;
 //# sourceMappingURL=is-object.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/clamp.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
const clamp = (min, max, v)=>{
    if (v > max) return max;
    if (v < min) return min;
    return v;
};
;
 //# sourceMappingURL=clamp.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatErrorMessage",
    ()=>formatErrorMessage
]);
function formatErrorMessage(message, errorCode) {
    return errorCode ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}` : message;
}
;
 //# sourceMappingURL=format-error-message.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invariant",
    ()=>invariant,
    "warning",
    ()=>warning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)");
;
let warning = ()=>{};
let invariant = ()=>{};
if (typeof process !== "undefined" && ("TURBOPACK compile-time value", "development") !== "production") {
    warning = (check, message, errorCode)=>{
        if (!check && typeof console !== "undefined") {
            console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
    invariant = (check, message, errorCode)=>{
        if (!check) {
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
}
;
 //# sourceMappingURL=errors.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/is-numerical-string.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNumericalString",
    ()=>isNumericalString
]);
/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */ const isNumericalString = (v)=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);
;
 //# sourceMappingURL=is-numerical-string.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "noop",
    ()=>noop
]);
/*#__NO_SIDE_EFFECTS__*/ const noop = (any)=>any;
;
 //# sourceMappingURL=noop.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/global-config.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionGlobalConfig",
    ()=>MotionGlobalConfig
]);
const MotionGlobalConfig = {};
;
 //# sourceMappingURL=global-config.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/is-zero-value-string.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isZeroValueString",
    ()=>isZeroValueString
]);
/**
 * Check if the value is a zero value string like "0px" or "0%"
 */ const isZeroValueString = (v)=>/^0[^.\s]+$/u.test(v);
;
 //# sourceMappingURL=is-zero-value-string.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/warn-once.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasWarned",
    ()=>hasWarned,
    "warnOnce",
    ()=>warnOnce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)");
;
const warned = new Set();
function hasWarned(message) {
    return warned.has(message);
}
function warnOnce(condition, message, errorCode) {
    if (condition || warned.has(message)) return;
    console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
    warned.add(message);
}
;
 //# sourceMappingURL=warn-once.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/time-conversion.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "millisecondsToSeconds",
    ()=>millisecondsToSeconds,
    "secondsToMilliseconds",
    ()=>secondsToMilliseconds
]);
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */ /*#__NO_SIDE_EFFECTS__*/ const secondsToMilliseconds = (seconds)=>seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/ const millisecondsToSeconds = (milliseconds)=>milliseconds / 1000;
;
 //# sourceMappingURL=time-conversion.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/array.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addUniqueItem",
    ()=>addUniqueItem,
    "moveItem",
    ()=>moveItem,
    "removeItem",
    ()=>removeItem
]);
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) arr.splice(index, 1);
}
// Adapted from array-move
function moveItem([...arr], fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}
;
 //# sourceMappingURL=array.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/subscription-manager.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubscriptionManager",
    ()=>SubscriptionManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/array.mjs [app-ssr] (ecmascript)");
;
class SubscriptionManager {
    constructor(){
        this.subscriptions = [];
    }
    add(handler) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addUniqueItem"])(this.subscriptions, handler);
        return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeItem"])(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions) return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */ this.subscriptions[0](a, b, c);
        } else {
            for(let i = 0; i < numSubscriptions; i++){
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */ const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}
;
 //# sourceMappingURL=subscription-manager.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/memo.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "memo",
    ()=>memo
]);
/*#__NO_SIDE_EFFECTS__*/ function memo(callback) {
    let result;
    return ()=>{
        if (result === undefined) result = callback();
        return result;
    };
}
;
 //# sourceMappingURL=memo.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBezierDefinition",
    ()=>isBezierDefinition
]);
const isBezierDefinition = (easing)=>Array.isArray(easing) && typeof easing[0] === "number";
;
 //# sourceMappingURL=is-bezier-definition.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/velocity-per-second.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "velocityPerSecond",
    ()=>velocityPerSecond
]);
/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/ function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}
;
 //# sourceMappingURL=velocity-per-second.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/pipe.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pipe",
    ()=>pipe
]);
/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */ const combineFunctions = (a, b)=>(v)=>b(a(v));
const pipe = (...transformers)=>transformers.reduce(combineFunctions);
;
 //# sourceMappingURL=pipe.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cubicBezier",
    ()=>cubicBezier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
;
/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticeably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/ // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2)=>(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        } else {
            lowerBound = currentT;
        }
    }while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations)
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) return __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
    const getTForX = (aX)=>binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
;
 //# sourceMappingURL=cubic-bezier.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/ease.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easeIn",
    ()=>easeIn,
    "easeInOut",
    ()=>easeInOut,
    "easeOut",
    ()=>easeOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
;
const easeIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 1, 1);
const easeOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0, 0, 0.58, 1);
const easeInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 0.58, 1);
;
 //# sourceMappingURL=ease.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isEasingArray",
    ()=>isEasingArray
]);
const isEasingArray = (ease)=>{
    return Array.isArray(ease) && typeof ease[0] !== "number";
};
;
 //# sourceMappingURL=is-easing-array.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mirrorEasing",
    ()=>mirrorEasing
]);
// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
const mirrorEasing = (easing)=>(p)=>p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
;
 //# sourceMappingURL=mirror.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reverseEasing",
    ()=>reverseEasing
]);
// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
const reverseEasing = (easing)=>(p)=>1 - easing(1 - p);
;
 //# sourceMappingURL=reverse.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "backIn",
    ()=>backIn,
    "backInOut",
    ()=>backInOut,
    "backOut",
    ()=>backOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)");
;
;
;
const backOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.33, 1.53, 0.69, 0.99);
const backIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseEasing"])(backOut);
const backInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mirrorEasing"])(backIn);
;
 //# sourceMappingURL=back.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anticipate",
    ()=>anticipate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)");
;
const anticipate = (p)=>p >= 1 ? 1 : (p *= 2) < 1 ? 0.5 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backIn"])(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
;
 //# sourceMappingURL=anticipate.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/circ.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "circIn",
    ()=>circIn,
    "circInOut",
    ()=>circInOut,
    "circOut",
    ()=>circOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)");
;
;
const circIn = (p)=>1 - Math.sin(Math.acos(p));
const circOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseEasing"])(circIn);
const circInOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mirrorEasing"])(circIn);
;
 //# sourceMappingURL=circ.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/utils/map.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easingDefinitionToFunction",
    ()=>easingDefinitionToFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/circ.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/ease.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const easingLookup = {
    linear: __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"],
    easeIn: __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeIn"],
    easeInOut: __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"],
    easeOut: __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeOut"],
    circIn: __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circIn"],
    circInOut: __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circInOut"],
    circOut: __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circOut"],
    backIn: __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backIn"],
    backInOut: __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backInOut"],
    backOut: __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backOut"],
    anticipate: __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["anticipate"]
};
const isValidEasing = (easing)=>{
    return typeof easing === "string";
};
const easingDefinitionToFunction = (definition)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBezierDefinition"])(definition)) {
        // If cubic bezier definition, create bezier curve
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`, "cubic-bezier-length");
        const [x1, y1, x2, y2] = definition;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(x1, y1, x2, y2);
    } else if (isValidEasing(definition)) {
        // Else lookup from table
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`, "invalid-easing-type");
        return easingLookup[definition];
    }
    return definition;
};
;
 //# sourceMappingURL=map.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/progress.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "progress",
    ()=>progress
]);
/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/ /*#__NO_SIDE_EFFECTS__*/ const progress = (from, to, value)=>{
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
;
 //# sourceMappingURL=progress.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/wrap.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrap",
    ()=>wrap
]);
const wrap = (min, max, v)=>{
    const rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};
;
 //# sourceMappingURL=wrap.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/utils/get-easing-for-segment.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEasingForSegment",
    ()=>getEasingForSegment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$wrap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/wrap.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$easing$2d$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs [app-ssr] (ecmascript)");
;
;
function getEasingForSegment(easing, i) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$easing$2d$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEasingArray"])(easing) ? easing[(0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$wrap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrap"])(0, easing.length, i)] : easing;
}
;
 //# sourceMappingURL=get-easing-for-segment.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/node_modules/@ai-sdk/provider/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AISDKError",
    ()=>AISDKError,
    "APICallError",
    ()=>APICallError,
    "EmptyResponseBodyError",
    ()=>EmptyResponseBodyError,
    "InvalidArgumentError",
    ()=>InvalidArgumentError,
    "InvalidPromptError",
    ()=>InvalidPromptError,
    "InvalidResponseDataError",
    ()=>InvalidResponseDataError,
    "JSONParseError",
    ()=>JSONParseError,
    "LoadAPIKeyError",
    ()=>LoadAPIKeyError,
    "LoadSettingError",
    ()=>LoadSettingError,
    "NoContentGeneratedError",
    ()=>NoContentGeneratedError,
    "NoSuchModelError",
    ()=>NoSuchModelError,
    "TooManyEmbeddingValuesForCallError",
    ()=>TooManyEmbeddingValuesForCallError,
    "TypeValidationError",
    ()=>TypeValidationError,
    "UnsupportedFunctionalityError",
    ()=>UnsupportedFunctionalityError,
    "getErrorMessage",
    ()=>getErrorMessage,
    "isJSONArray",
    ()=>isJSONArray,
    "isJSONObject",
    ()=>isJSONObject,
    "isJSONValue",
    ()=>isJSONValue
]);
// src/errors/ai-sdk-error.ts
var marker = "vercel.ai.error";
var symbol = Symbol.for(marker);
var _a, _b;
var AISDKError = class _AISDKError extends (_b = Error, _a = symbol, _b) {
    /**
   * Creates an AI SDK Error.
   *
   * @param {Object} params - The parameters for creating the error.
   * @param {string} params.name - The name of the error.
   * @param {string} params.message - The error message.
   * @param {unknown} [params.cause] - The underlying cause of the error.
   */ constructor({ name: name14, message, cause }){
        super(message);
        this[_a] = true;
        this.name = name14;
        this.cause = cause;
    }
    /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */ static isInstance(error) {
        return _AISDKError.hasMarker(error, marker);
    }
    static hasMarker(error, marker15) {
        const markerSymbol = Symbol.for(marker15);
        return error != null && typeof error === "object" && markerSymbol in error && typeof error[markerSymbol] === "boolean" && error[markerSymbol] === true;
    }
};
// src/errors/api-call-error.ts
var name = "AI_APICallError";
var marker2 = `vercel.ai.error.${name}`;
var symbol2 = Symbol.for(marker2);
var _a2, _b2;
var APICallError = class extends (_b2 = AISDKError, _a2 = symbol2, _b2) {
    constructor({ message, url, requestBodyValues, statusCode, responseHeaders, responseBody, cause, isRetryable = statusCode != null && (statusCode === 408 || // request timeout
    statusCode === 409 || // conflict
    statusCode === 429 || // too many requests
    statusCode >= 500), // server error
    data }){
        super({
            name,
            message,
            cause
        });
        this[_a2] = true;
        this.url = url;
        this.requestBodyValues = requestBodyValues;
        this.statusCode = statusCode;
        this.responseHeaders = responseHeaders;
        this.responseBody = responseBody;
        this.isRetryable = isRetryable;
        this.data = data;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker2);
    }
};
// src/errors/empty-response-body-error.ts
var name2 = "AI_EmptyResponseBodyError";
var marker3 = `vercel.ai.error.${name2}`;
var symbol3 = Symbol.for(marker3);
var _a3, _b3;
var EmptyResponseBodyError = class extends (_b3 = AISDKError, _a3 = symbol3, _b3) {
    // used in isInstance
    constructor({ message = "Empty response body" } = {}){
        super({
            name: name2,
            message
        });
        this[_a3] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker3);
    }
};
// src/errors/get-error-message.ts
function getErrorMessage(error) {
    if (error == null) {
        return "unknown error";
    }
    if (typeof error === "string") {
        return error;
    }
    if (error instanceof Error) {
        return error.message;
    }
    return JSON.stringify(error);
}
// src/errors/invalid-argument-error.ts
var name3 = "AI_InvalidArgumentError";
var marker4 = `vercel.ai.error.${name3}`;
var symbol4 = Symbol.for(marker4);
var _a4, _b4;
var InvalidArgumentError = class extends (_b4 = AISDKError, _a4 = symbol4, _b4) {
    constructor({ message, cause, argument }){
        super({
            name: name3,
            message,
            cause
        });
        this[_a4] = true;
        this.argument = argument;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker4);
    }
};
// src/errors/invalid-prompt-error.ts
var name4 = "AI_InvalidPromptError";
var marker5 = `vercel.ai.error.${name4}`;
var symbol5 = Symbol.for(marker5);
var _a5, _b5;
var InvalidPromptError = class extends (_b5 = AISDKError, _a5 = symbol5, _b5) {
    constructor({ prompt, message, cause }){
        super({
            name: name4,
            message: `Invalid prompt: ${message}`,
            cause
        });
        this[_a5] = true;
        this.prompt = prompt;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker5);
    }
};
// src/errors/invalid-response-data-error.ts
var name5 = "AI_InvalidResponseDataError";
var marker6 = `vercel.ai.error.${name5}`;
var symbol6 = Symbol.for(marker6);
var _a6, _b6;
var InvalidResponseDataError = class extends (_b6 = AISDKError, _a6 = symbol6, _b6) {
    constructor({ data, message = `Invalid response data: ${JSON.stringify(data)}.` }){
        super({
            name: name5,
            message
        });
        this[_a6] = true;
        this.data = data;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker6);
    }
};
// src/errors/json-parse-error.ts
var name6 = "AI_JSONParseError";
var marker7 = `vercel.ai.error.${name6}`;
var symbol7 = Symbol.for(marker7);
var _a7, _b7;
var JSONParseError = class extends (_b7 = AISDKError, _a7 = symbol7, _b7) {
    constructor({ text, cause }){
        super({
            name: name6,
            message: `JSON parsing failed: Text: ${text}.
Error message: ${getErrorMessage(cause)}`,
            cause
        });
        this[_a7] = true;
        this.text = text;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker7);
    }
};
// src/errors/load-api-key-error.ts
var name7 = "AI_LoadAPIKeyError";
var marker8 = `vercel.ai.error.${name7}`;
var symbol8 = Symbol.for(marker8);
var _a8, _b8;
var LoadAPIKeyError = class extends (_b8 = AISDKError, _a8 = symbol8, _b8) {
    // used in isInstance
    constructor({ message }){
        super({
            name: name7,
            message
        });
        this[_a8] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker8);
    }
};
// src/errors/load-setting-error.ts
var name8 = "AI_LoadSettingError";
var marker9 = `vercel.ai.error.${name8}`;
var symbol9 = Symbol.for(marker9);
var _a9, _b9;
var LoadSettingError = class extends (_b9 = AISDKError, _a9 = symbol9, _b9) {
    // used in isInstance
    constructor({ message }){
        super({
            name: name8,
            message
        });
        this[_a9] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker9);
    }
};
// src/errors/no-content-generated-error.ts
var name9 = "AI_NoContentGeneratedError";
var marker10 = `vercel.ai.error.${name9}`;
var symbol10 = Symbol.for(marker10);
var _a10, _b10;
var NoContentGeneratedError = class extends (_b10 = AISDKError, _a10 = symbol10, _b10) {
    // used in isInstance
    constructor({ message = "No content generated." } = {}){
        super({
            name: name9,
            message
        });
        this[_a10] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker10);
    }
};
// src/errors/no-such-model-error.ts
var name10 = "AI_NoSuchModelError";
var marker11 = `vercel.ai.error.${name10}`;
var symbol11 = Symbol.for(marker11);
var _a11, _b11;
var NoSuchModelError = class extends (_b11 = AISDKError, _a11 = symbol11, _b11) {
    constructor({ errorName = name10, modelId, modelType, message = `No such ${modelType}: ${modelId}` }){
        super({
            name: errorName,
            message
        });
        this[_a11] = true;
        this.modelId = modelId;
        this.modelType = modelType;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker11);
    }
};
// src/errors/too-many-embedding-values-for-call-error.ts
var name11 = "AI_TooManyEmbeddingValuesForCallError";
var marker12 = `vercel.ai.error.${name11}`;
var symbol12 = Symbol.for(marker12);
var _a12, _b12;
var TooManyEmbeddingValuesForCallError = class extends (_b12 = AISDKError, _a12 = symbol12, _b12) {
    constructor(options){
        super({
            name: name11,
            message: `Too many values for a single embedding call. The ${options.provider} model "${options.modelId}" can only embed up to ${options.maxEmbeddingsPerCall} values per call, but ${options.values.length} values were provided.`
        });
        this[_a12] = true;
        this.provider = options.provider;
        this.modelId = options.modelId;
        this.maxEmbeddingsPerCall = options.maxEmbeddingsPerCall;
        this.values = options.values;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker12);
    }
};
// src/errors/type-validation-error.ts
var name12 = "AI_TypeValidationError";
var marker13 = `vercel.ai.error.${name12}`;
var symbol13 = Symbol.for(marker13);
var _a13, _b13;
var TypeValidationError = class _TypeValidationError extends (_b13 = AISDKError, _a13 = symbol13, _b13) {
    constructor({ value, cause, context }){
        let contextPrefix = "Type validation failed";
        if (context == null ? void 0 : context.field) {
            contextPrefix += ` for ${context.field}`;
        }
        if ((context == null ? void 0 : context.entityName) || (context == null ? void 0 : context.entityId)) {
            contextPrefix += " (";
            const parts = [];
            if (context.entityName) {
                parts.push(context.entityName);
            }
            if (context.entityId) {
                parts.push(`id: "${context.entityId}"`);
            }
            contextPrefix += parts.join(", ");
            contextPrefix += ")";
        }
        super({
            name: name12,
            message: `${contextPrefix}: Value: ${JSON.stringify(value)}.
Error message: ${getErrorMessage(cause)}`,
            cause
        });
        this[_a13] = true;
        this.value = value;
        this.context = context;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker13);
    }
    /**
   * Wraps an error into a TypeValidationError.
   * If the cause is already a TypeValidationError with the same value and context, it returns the cause.
   * Otherwise, it creates a new TypeValidationError.
   *
   * @param {Object} params - The parameters for wrapping the error.
   * @param {unknown} params.value - The value that failed validation.
   * @param {unknown} params.cause - The original error or cause of the validation failure.
   * @param {TypeValidationContext} params.context - Optional context about what is being validated.
   * @returns {TypeValidationError} A TypeValidationError instance.
   */ static wrap({ value, cause, context }) {
        var _a15, _b15, _c;
        if (_TypeValidationError.isInstance(cause) && cause.value === value && ((_a15 = cause.context) == null ? void 0 : _a15.field) === (context == null ? void 0 : context.field) && ((_b15 = cause.context) == null ? void 0 : _b15.entityName) === (context == null ? void 0 : context.entityName) && ((_c = cause.context) == null ? void 0 : _c.entityId) === (context == null ? void 0 : context.entityId)) {
            return cause;
        }
        return new _TypeValidationError({
            value,
            cause,
            context
        });
    }
};
// src/errors/unsupported-functionality-error.ts
var name13 = "AI_UnsupportedFunctionalityError";
var marker14 = `vercel.ai.error.${name13}`;
var symbol14 = Symbol.for(marker14);
var _a14, _b14;
var UnsupportedFunctionalityError = class extends (_b14 = AISDKError, _a14 = symbol14, _b14) {
    constructor({ functionality, message = `'${functionality}' functionality not supported.` }){
        super({
            name: name13,
            message
        });
        this[_a14] = true;
        this.functionality = functionality;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker14);
    }
};
// src/json-value/is-json.ts
function isJSONValue(value) {
    if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
        return true;
    }
    if (Array.isArray(value)) {
        return value.every(isJSONValue);
    }
    if (typeof value === "object") {
        return Object.entries(value).every(([key, val])=>typeof key === "string" && (val === void 0 || isJSONValue(val)));
    }
    return false;
}
function isJSONArray(value) {
    return Array.isArray(value) && value.every(isJSONValue);
}
function isJSONObject(value) {
    return value != null && typeof value === "object" && Object.entries(value).every(([key, val])=>typeof key === "string" && (val === void 0 || isJSONValue(val)));
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/eventsource-parser/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParseError",
    ()=>ParseError,
    "createParser",
    ()=>createParser
]);
class ParseError extends Error {
    constructor(message, options){
        super(message), this.name = "ParseError", this.type = options.type, this.field = options.field, this.value = options.value, this.line = options.line;
    }
}
const LF = 10, CR = 13, SPACE = 32;
function noop(_arg) {}
function createParser(callbacks) {
    if (typeof callbacks == "function") throw new TypeError("`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?");
    const { onEvent = noop, onError = noop, onRetry = noop, onComment } = callbacks, pendingFragments = [];
    let isFirstChunk = !0, id, data = "", dataLines = 0, eventType;
    function feed(chunk) {
        if (isFirstChunk && (isFirstChunk = !1, chunk.charCodeAt(0) === 239 && chunk.charCodeAt(1) === 187 && chunk.charCodeAt(2) === 191 && (chunk = chunk.slice(3))), pendingFragments.length === 0) {
            const trailing2 = processLines(chunk);
            trailing2 !== "" && pendingFragments.push(trailing2);
            return;
        }
        if (chunk.indexOf(`
`) === -1 && chunk.indexOf("\r") === -1) {
            pendingFragments.push(chunk);
            return;
        }
        pendingFragments.push(chunk);
        const input = pendingFragments.join("");
        pendingFragments.length = 0;
        const trailing = processLines(input);
        trailing !== "" && pendingFragments.push(trailing);
    }
    function processLines(chunk) {
        let searchIndex = 0;
        if (chunk.indexOf("\r") === -1) {
            let lfIndex = chunk.indexOf(`
`, searchIndex);
            for(; lfIndex !== -1;){
                if (searchIndex === lfIndex) {
                    dataLines > 0 && onEvent({
                        id,
                        event: eventType,
                        data
                    }), id = void 0, data = "", dataLines = 0, eventType = void 0, searchIndex = lfIndex + 1, lfIndex = chunk.indexOf(`
`, searchIndex);
                    continue;
                }
                const firstCharCode = chunk.charCodeAt(searchIndex);
                if (isDataPrefix(chunk, searchIndex, firstCharCode)) {
                    const valueStart = chunk.charCodeAt(searchIndex + 5) === SPACE ? searchIndex + 6 : searchIndex + 5, value = chunk.slice(valueStart, lfIndex);
                    if (dataLines === 0 && chunk.charCodeAt(lfIndex + 1) === LF) {
                        onEvent({
                            id,
                            event: eventType,
                            data: value
                        }), id = void 0, data = "", eventType = void 0, searchIndex = lfIndex + 2, lfIndex = chunk.indexOf(`
`, searchIndex);
                        continue;
                    }
                    data = dataLines === 0 ? value : `${data}
${value}`, dataLines++;
                } else isEventPrefix(chunk, searchIndex, firstCharCode) ? eventType = chunk.slice(chunk.charCodeAt(searchIndex + 6) === SPACE ? searchIndex + 7 : searchIndex + 6, lfIndex) || void 0 : parseLine(chunk, searchIndex, lfIndex);
                searchIndex = lfIndex + 1, lfIndex = chunk.indexOf(`
`, searchIndex);
            }
            return chunk.slice(searchIndex);
        }
        for(; searchIndex < chunk.length;){
            const crIndex = chunk.indexOf("\r", searchIndex), lfIndex = chunk.indexOf(`
`, searchIndex);
            let lineEnd = -1;
            if (crIndex !== -1 && lfIndex !== -1 ? lineEnd = crIndex < lfIndex ? crIndex : lfIndex : crIndex !== -1 ? crIndex === chunk.length - 1 ? lineEnd = -1 : lineEnd = crIndex : lfIndex !== -1 && (lineEnd = lfIndex), lineEnd === -1) break;
            parseLine(chunk, searchIndex, lineEnd), searchIndex = lineEnd + 1, chunk.charCodeAt(searchIndex - 1) === CR && chunk.charCodeAt(searchIndex) === LF && searchIndex++;
        }
        return chunk.slice(searchIndex);
    }
    function parseLine(chunk, start, end) {
        if (start === end) {
            dispatchEvent();
            return;
        }
        const firstCharCode = chunk.charCodeAt(start);
        if (isDataPrefix(chunk, start, firstCharCode)) {
            const valueStart = chunk.charCodeAt(start + 5) === SPACE ? start + 6 : start + 5, value2 = chunk.slice(valueStart, end);
            data = dataLines === 0 ? value2 : `${data}
${value2}`, dataLines++;
            return;
        }
        if (isEventPrefix(chunk, start, firstCharCode)) {
            eventType = chunk.slice(chunk.charCodeAt(start + 6) === SPACE ? start + 7 : start + 6, end) || void 0;
            return;
        }
        if (firstCharCode === 105 && chunk.charCodeAt(start + 1) === 100 && chunk.charCodeAt(start + 2) === 58) {
            const value2 = chunk.slice(chunk.charCodeAt(start + 3) === SPACE ? start + 4 : start + 3, end);
            id = value2.includes("\0") ? void 0 : value2;
            return;
        }
        if (firstCharCode === 58) {
            if (onComment) {
                const line2 = chunk.slice(start, end);
                onComment(line2.slice(chunk.charCodeAt(start + 1) === SPACE ? 2 : 1));
            }
            return;
        }
        const line = chunk.slice(start, end), fieldSeparatorIndex = line.indexOf(":");
        if (fieldSeparatorIndex === -1) {
            processField(line, "", line);
            return;
        }
        const field = line.slice(0, fieldSeparatorIndex), offset = line.charCodeAt(fieldSeparatorIndex + 1) === SPACE ? 2 : 1, value = line.slice(fieldSeparatorIndex + offset);
        processField(field, value, line);
    }
    function processField(field, value, line) {
        switch(field){
            case "event":
                eventType = value || void 0;
                break;
            case "data":
                data = dataLines === 0 ? value : `${data}
${value}`, dataLines++;
                break;
            case "id":
                id = value.includes("\0") ? void 0 : value;
                break;
            case "retry":
                /^\d+$/.test(value) ? onRetry(parseInt(value, 10)) : onError(new ParseError(`Invalid \`retry\` value: "${value}"`, {
                    type: "invalid-retry",
                    value,
                    line
                }));
                break;
            default:
                onError(new ParseError(`Unknown field "${field.length > 20 ? `${field.slice(0, 20)}\u2026` : field}"`, {
                    type: "unknown-field",
                    field,
                    value,
                    line
                }));
                break;
        }
    }
    function dispatchEvent() {
        dataLines > 0 && onEvent({
            id,
            event: eventType,
            data
        }), id = void 0, data = "", dataLines = 0, eventType = void 0;
    }
    function reset(options = {}) {
        if (options.consume && pendingFragments.length > 0) {
            const incompleteLine = pendingFragments.join("");
            parseLine(incompleteLine, 0, incompleteLine.length);
        }
        isFirstChunk = !0, id = void 0, data = "", dataLines = 0, eventType = void 0, pendingFragments.length = 0;
    }
    return {
        feed,
        reset
    };
}
function isDataPrefix(chunk, i, firstCharCode) {
    return firstCharCode === 100 && chunk.charCodeAt(i + 1) === 97 && chunk.charCodeAt(i + 2) === 116 && chunk.charCodeAt(i + 3) === 97 && chunk.charCodeAt(i + 4) === 58;
}
function isEventPrefix(chunk, i, firstCharCode) {
    return firstCharCode === 101 && chunk.charCodeAt(i + 1) === 118 && chunk.charCodeAt(i + 2) === 101 && chunk.charCodeAt(i + 3) === 110 && chunk.charCodeAt(i + 4) === 116 && chunk.charCodeAt(i + 5) === 58;
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/eventsource-parser/dist/stream.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventSourceParserStream",
    ()=>EventSourceParserStream
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/eventsource-parser/dist/index.js [app-ssr] (ecmascript)");
;
;
class EventSourceParserStream extends TransformStream {
    constructor({ onError, onRetry, onComment } = {}){
        let parser;
        super({
            start (controller) {
                parser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createParser"])({
                    onEvent: (event)=>{
                        controller.enqueue(event);
                    },
                    onError (error) {
                        onError === "terminate" ? controller.error(error) : typeof onError == "function" && onError(error);
                    },
                    onRetry,
                    onComment
                });
            },
            transform (chunk) {
                parser.feed(chunk);
            }
        });
    }
}
;
 //# sourceMappingURL=stream.js.map
}),
"[project]/node_modules/@ai-sdk/provider-utils/dist/index.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_MAX_DOWNLOAD_SIZE",
    ()=>DEFAULT_MAX_DOWNLOAD_SIZE,
    "DelayedPromise",
    ()=>DelayedPromise,
    "DownloadError",
    ()=>DownloadError,
    "VERSION",
    ()=>VERSION,
    "asSchema",
    ()=>asSchema,
    "combineHeaders",
    ()=>combineHeaders,
    "convertAsyncIteratorToReadableStream",
    ()=>convertAsyncIteratorToReadableStream,
    "convertBase64ToUint8Array",
    ()=>convertBase64ToUint8Array,
    "convertImageModelFileToDataUri",
    ()=>convertImageModelFileToDataUri,
    "convertToBase64",
    ()=>convertToBase64,
    "convertToFormData",
    ()=>convertToFormData,
    "convertUint8ArrayToBase64",
    ()=>convertUint8ArrayToBase64,
    "createBinaryResponseHandler",
    ()=>createBinaryResponseHandler,
    "createEventSourceResponseHandler",
    ()=>createEventSourceResponseHandler,
    "createIdGenerator",
    ()=>createIdGenerator,
    "createJsonErrorResponseHandler",
    ()=>createJsonErrorResponseHandler,
    "createJsonResponseHandler",
    ()=>createJsonResponseHandler,
    "createProviderToolFactory",
    ()=>createProviderToolFactory,
    "createProviderToolFactoryWithOutputSchema",
    ()=>createProviderToolFactoryWithOutputSchema,
    "createStatusCodeErrorResponseHandler",
    ()=>createStatusCodeErrorResponseHandler,
    "createToolNameMapping",
    ()=>createToolNameMapping,
    "delay",
    ()=>delay,
    "downloadBlob",
    ()=>downloadBlob,
    "dynamicTool",
    ()=>dynamicTool,
    "executeTool",
    ()=>executeTool,
    "extractResponseHeaders",
    ()=>extractResponseHeaders,
    "generateId",
    ()=>generateId,
    "getErrorMessage",
    ()=>getErrorMessage,
    "getFromApi",
    ()=>getFromApi,
    "getRuntimeEnvironmentUserAgent",
    ()=>getRuntimeEnvironmentUserAgent,
    "injectJsonInstructionIntoMessages",
    ()=>injectJsonInstructionIntoMessages,
    "isAbortError",
    ()=>isAbortError,
    "isNonNullable",
    ()=>isNonNullable,
    "isParsableJson",
    ()=>isParsableJson,
    "isUrlSupported",
    ()=>isUrlSupported,
    "jsonSchema",
    ()=>jsonSchema,
    "lazySchema",
    ()=>lazySchema,
    "loadApiKey",
    ()=>loadApiKey,
    "loadOptionalSetting",
    ()=>loadOptionalSetting,
    "loadSetting",
    ()=>loadSetting,
    "mediaTypeToExtension",
    ()=>mediaTypeToExtension,
    "normalizeHeaders",
    ()=>normalizeHeaders,
    "parseJSON",
    ()=>parseJSON,
    "parseJsonEventStream",
    ()=>parseJsonEventStream,
    "parseProviderOptions",
    ()=>parseProviderOptions,
    "postFormDataToApi",
    ()=>postFormDataToApi,
    "postJsonToApi",
    ()=>postJsonToApi,
    "postToApi",
    ()=>postToApi,
    "readResponseWithSizeLimit",
    ()=>readResponseWithSizeLimit,
    "removeUndefinedEntries",
    ()=>removeUndefinedEntries,
    "resolve",
    ()=>resolve,
    "safeParseJSON",
    ()=>safeParseJSON,
    "safeValidateTypes",
    ()=>safeValidateTypes,
    "stripFileExtension",
    ()=>stripFileExtension,
    "tool",
    ()=>tool,
    "validateDownloadUrl",
    ()=>validateDownloadUrl,
    "validateTypes",
    ()=>validateTypes,
    "withUserAgentSuffix",
    ()=>withUserAgentSuffix,
    "withoutTrailingSlash",
    ()=>withoutTrailingSlash,
    "zodSchema",
    ()=>zodSchema
]);
// src/download-error.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ai-sdk/provider/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/parse.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/core/to-json-schema.js [app-ssr] (ecmascript)");
// src/to-json-schema/zod3-to-json-schema/select-parser.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/types.js [app-ssr] (ecmascript)");
// src/parse-json-event-stream.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$stream$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/eventsource-parser/dist/stream.js [app-ssr] (ecmascript) <locals>");
// src/combine-headers.ts
function combineHeaders(...headers) {
    return headers.reduce((combinedHeaders, currentHeaders)=>({
            ...combinedHeaders,
            ...currentHeaders != null ? currentHeaders : {}
        }), {});
}
// src/convert-async-iterator-to-readable-stream.ts
function convertAsyncIteratorToReadableStream(iterator) {
    let cancelled = false;
    return new ReadableStream({
        /**
     * Called when the consumer wants to pull more data from the stream.
     *
     * @param {ReadableStreamDefaultController<T>} controller - The controller to enqueue data into the stream.
     * @returns {Promise<void>}
     */ async pull (controller) {
            if (cancelled) return;
            try {
                const { value, done } = await iterator.next();
                if (done) {
                    controller.close();
                } else {
                    controller.enqueue(value);
                }
            } catch (error) {
                controller.error(error);
            }
        },
        /**
     * Called when the consumer cancels the stream.
     */ async cancel (reason) {
            cancelled = true;
            if (iterator.return) {
                try {
                    await iterator.return(reason);
                } catch (e) {}
            }
        }
    });
}
// src/create-tool-name-mapping.ts
function createToolNameMapping({ tools = [], providerToolNames, resolveProviderToolName }) {
    var _a2;
    const customToolNameToProviderToolName = {};
    const providerToolNameToCustomToolName = {};
    for (const tool2 of tools){
        if (tool2.type === "provider") {
            const providerToolName = (_a2 = resolveProviderToolName == null ? void 0 : resolveProviderToolName(tool2)) != null ? _a2 : tool2.id in providerToolNames ? providerToolNames[tool2.id] : void 0;
            if (providerToolName == null) {
                continue;
            }
            customToolNameToProviderToolName[tool2.name] = providerToolName;
            providerToolNameToCustomToolName[providerToolName] = tool2.name;
        }
    }
    return {
        toProviderToolName: (customToolName)=>{
            var _a3;
            return (_a3 = customToolNameToProviderToolName[customToolName]) != null ? _a3 : customToolName;
        },
        toCustomToolName: (providerToolName)=>{
            var _a3;
            return (_a3 = providerToolNameToCustomToolName[providerToolName]) != null ? _a3 : providerToolName;
        }
    };
}
// src/delay.ts
async function delay(delayInMs, options) {
    if (delayInMs == null) {
        return Promise.resolve();
    }
    const signal = options == null ? void 0 : options.abortSignal;
    return new Promise((resolve2, reject)=>{
        if (signal == null ? void 0 : signal.aborted) {
            reject(createAbortError());
            return;
        }
        const timeoutId = setTimeout(()=>{
            cleanup();
            resolve2();
        }, delayInMs);
        const cleanup = ()=>{
            clearTimeout(timeoutId);
            signal == null ? void 0 : signal.removeEventListener("abort", onAbort);
        };
        const onAbort = ()=>{
            cleanup();
            reject(createAbortError());
        };
        signal == null ? void 0 : signal.addEventListener("abort", onAbort);
    });
}
function createAbortError() {
    return new DOMException("Delay was aborted", "AbortError");
}
// src/delayed-promise.ts
var DelayedPromise = class {
    constructor(){
        this.status = {
            type: "pending"
        };
        this._resolve = void 0;
        this._reject = void 0;
    }
    get promise() {
        if (this._promise) {
            return this._promise;
        }
        this._promise = new Promise((resolve2, reject)=>{
            if (this.status.type === "resolved") {
                resolve2(this.status.value);
            } else if (this.status.type === "rejected") {
                reject(this.status.error);
            }
            this._resolve = resolve2;
            this._reject = reject;
        });
        return this._promise;
    }
    resolve(value) {
        var _a2;
        this.status = {
            type: "resolved",
            value
        };
        if (this._promise) {
            (_a2 = this._resolve) == null ? void 0 : _a2.call(this, value);
        }
    }
    reject(error) {
        var _a2;
        this.status = {
            type: "rejected",
            error
        };
        if (this._promise) {
            (_a2 = this._reject) == null ? void 0 : _a2.call(this, error);
        }
    }
    isResolved() {
        return this.status.type === "resolved";
    }
    isRejected() {
        return this.status.type === "rejected";
    }
    isPending() {
        return this.status.type === "pending";
    }
};
// src/extract-response-headers.ts
function extractResponseHeaders(response) {
    return Object.fromEntries([
        ...response.headers
    ]);
}
// src/uint8-utils.ts
var { btoa, atob } = globalThis;
function convertBase64ToUint8Array(base64String) {
    const base64Url = base64String.replace(/-/g, "+").replace(/_/g, "/");
    const latin1string = atob(base64Url);
    return Uint8Array.from(latin1string, (byte)=>byte.codePointAt(0));
}
function convertUint8ArrayToBase64(array) {
    let latin1string = "";
    for(let i = 0; i < array.length; i++){
        latin1string += String.fromCodePoint(array[i]);
    }
    return btoa(latin1string);
}
function convertToBase64(value) {
    return value instanceof Uint8Array ? convertUint8ArrayToBase64(value) : value;
}
// src/convert-image-model-file-to-data-uri.ts
function convertImageModelFileToDataUri(file) {
    if (file.type === "url") return file.url;
    return `data:${file.mediaType};base64,${typeof file.data === "string" ? file.data : convertUint8ArrayToBase64(file.data)}`;
}
// src/convert-to-form-data.ts
function convertToFormData(input, options = {}) {
    const { useArrayBrackets = true } = options;
    const formData = new FormData();
    for (const [key, value] of Object.entries(input)){
        if (value == null) {
            continue;
        }
        if (Array.isArray(value)) {
            if (value.length === 1) {
                formData.append(key, value[0]);
                continue;
            }
            const arrayKey = useArrayBrackets ? `${key}[]` : key;
            for (const item of value){
                formData.append(arrayKey, item);
            }
            continue;
        }
        formData.append(key, value);
    }
    return formData;
}
;
var name = "AI_DownloadError";
var marker = `vercel.ai.error.${name}`;
var symbol = Symbol.for(marker);
var _a, _b;
var DownloadError = class extends (_b = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AISDKError"], _a = symbol, _b) {
    constructor({ url, statusCode, statusText, cause, message = cause == null ? `Failed to download ${url}: ${statusCode} ${statusText}` : `Failed to download ${url}: ${cause}` }){
        super({
            name,
            message,
            cause
        });
        this[_a] = true;
        this.url = url;
        this.statusCode = statusCode;
        this.statusText = statusText;
    }
    static isInstance(error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AISDKError"].hasMarker(error, marker);
    }
};
// src/read-response-with-size-limit.ts
var DEFAULT_MAX_DOWNLOAD_SIZE = 2 * 1024 * 1024 * 1024;
async function readResponseWithSizeLimit({ response, url, maxBytes = DEFAULT_MAX_DOWNLOAD_SIZE }) {
    const contentLength = response.headers.get("content-length");
    if (contentLength != null) {
        const length = parseInt(contentLength, 10);
        if (!isNaN(length) && length > maxBytes) {
            throw new DownloadError({
                url,
                message: `Download of ${url} exceeded maximum size of ${maxBytes} bytes (Content-Length: ${length}).`
            });
        }
    }
    const body = response.body;
    if (body == null) {
        return new Uint8Array(0);
    }
    const reader = body.getReader();
    const chunks = [];
    let totalBytes = 0;
    try {
        while(true){
            const { done, value } = await reader.read();
            if (done) {
                break;
            }
            totalBytes += value.length;
            if (totalBytes > maxBytes) {
                throw new DownloadError({
                    url,
                    message: `Download of ${url} exceeded maximum size of ${maxBytes} bytes.`
                });
            }
            chunks.push(value);
        }
    } finally{
        try {
            await reader.cancel();
        } finally{
            reader.releaseLock();
        }
    }
    const result = new Uint8Array(totalBytes);
    let offset = 0;
    for (const chunk of chunks){
        result.set(chunk, offset);
        offset += chunk.length;
    }
    return result;
}
// src/validate-download-url.ts
function validateDownloadUrl(url) {
    let parsed;
    try {
        parsed = new URL(url);
    } catch (e) {
        throw new DownloadError({
            url,
            message: `Invalid URL: ${url}`
        });
    }
    if (parsed.protocol === "data:") {
        return;
    }
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
        throw new DownloadError({
            url,
            message: `URL scheme must be http, https, or data, got ${parsed.protocol}`
        });
    }
    const hostname = parsed.hostname;
    if (!hostname) {
        throw new DownloadError({
            url,
            message: `URL must have a hostname`
        });
    }
    if (hostname === "localhost" || hostname.endsWith(".local") || hostname.endsWith(".localhost")) {
        throw new DownloadError({
            url,
            message: `URL with hostname ${hostname} is not allowed`
        });
    }
    if (hostname.startsWith("[") && hostname.endsWith("]")) {
        const ipv6 = hostname.slice(1, -1);
        if (isPrivateIPv6(ipv6)) {
            throw new DownloadError({
                url,
                message: `URL with IPv6 address ${hostname} is not allowed`
            });
        }
        return;
    }
    if (isIPv4(hostname)) {
        if (isPrivateIPv4(hostname)) {
            throw new DownloadError({
                url,
                message: `URL with IP address ${hostname} is not allowed`
            });
        }
        return;
    }
}
function isIPv4(hostname) {
    const parts = hostname.split(".");
    if (parts.length !== 4) return false;
    return parts.every((part)=>{
        const num = Number(part);
        return Number.isInteger(num) && num >= 0 && num <= 255 && String(num) === part;
    });
}
function isPrivateIPv4(ip) {
    const parts = ip.split(".").map(Number);
    const [a, b] = parts;
    if (a === 0) return true;
    if (a === 10) return true;
    if (a === 127) return true;
    if (a === 169 && b === 254) return true;
    if (a === 172 && b >= 16 && b <= 31) return true;
    if (a === 192 && b === 168) return true;
    return false;
}
function isPrivateIPv6(ip) {
    const normalized = ip.toLowerCase();
    if (normalized === "::1") return true;
    if (normalized === "::") return true;
    if (normalized.startsWith("::ffff:")) {
        const mappedPart = normalized.slice(7);
        if (isIPv4(mappedPart)) {
            return isPrivateIPv4(mappedPart);
        }
        const hexParts = mappedPart.split(":");
        if (hexParts.length === 2) {
            const high = parseInt(hexParts[0], 16);
            const low = parseInt(hexParts[1], 16);
            if (!isNaN(high) && !isNaN(low)) {
                const a = high >> 8 & 255;
                const b = high & 255;
                const c = low >> 8 & 255;
                const d = low & 255;
                return isPrivateIPv4(`${a}.${b}.${c}.${d}`);
            }
        }
    }
    if (normalized.startsWith("fc") || normalized.startsWith("fd")) return true;
    if (normalized.startsWith("fe80")) return true;
    return false;
}
// src/download-blob.ts
async function downloadBlob(url, options) {
    var _a2, _b2;
    validateDownloadUrl(url);
    try {
        const response = await fetch(url, {
            signal: options == null ? void 0 : options.abortSignal
        });
        if (response.redirected) {
            validateDownloadUrl(response.url);
        }
        if (!response.ok) {
            throw new DownloadError({
                url,
                statusCode: response.status,
                statusText: response.statusText
            });
        }
        const data = await readResponseWithSizeLimit({
            response,
            url,
            maxBytes: (_a2 = options == null ? void 0 : options.maxBytes) != null ? _a2 : DEFAULT_MAX_DOWNLOAD_SIZE
        });
        const contentType = (_b2 = response.headers.get("content-type")) != null ? _b2 : void 0;
        return new Blob([
            data
        ], contentType ? {
            type: contentType
        } : void 0);
    } catch (error) {
        if (DownloadError.isInstance(error)) {
            throw error;
        }
        throw new DownloadError({
            url,
            cause: error
        });
    }
}
;
var createIdGenerator = ({ prefix, size = 16, alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", separator = "-" } = {})=>{
    const generator = ()=>{
        const alphabetLength = alphabet.length;
        const chars = new Array(size);
        for(let i = 0; i < size; i++){
            chars[i] = alphabet[Math.random() * alphabetLength | 0];
        }
        return chars.join("");
    };
    if (prefix == null) {
        return generator;
    }
    if (alphabet.includes(separator)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
            argument: "separator",
            message: `The separator "${separator}" must not be part of the alphabet "${alphabet}".`
        });
    }
    return ()=>`${prefix}${separator}${generator()}`;
};
var generateId = createIdGenerator();
// src/get-error-message.ts
function getErrorMessage(error) {
    if (error == null) {
        return "unknown error";
    }
    if (typeof error === "string") {
        return error;
    }
    if (error instanceof Error) {
        return error.message;
    }
    return JSON.stringify(error);
}
;
;
// src/is-abort-error.ts
function isAbortError(error) {
    return (error instanceof Error || error instanceof DOMException) && (error.name === "AbortError" || error.name === "ResponseAborted" || // Next.js
    error.name === "TimeoutError");
}
// src/handle-fetch-error.ts
var FETCH_FAILED_ERROR_MESSAGES = [
    "fetch failed",
    "failed to fetch"
];
var BUN_ERROR_CODES = [
    "ConnectionRefused",
    "ConnectionClosed",
    "FailedToOpenSocket",
    "ECONNRESET",
    "ECONNREFUSED",
    "ETIMEDOUT",
    "EPIPE"
];
function isBunNetworkError(error) {
    if (!(error instanceof Error)) {
        return false;
    }
    const code = error.code;
    if (typeof code === "string" && BUN_ERROR_CODES.includes(code)) {
        return true;
    }
    return false;
}
function handleFetchError({ error, url, requestBodyValues }) {
    if (isAbortError(error)) {
        return error;
    }
    if (error instanceof TypeError && FETCH_FAILED_ERROR_MESSAGES.includes(error.message.toLowerCase())) {
        const cause = error.cause;
        if (cause != null) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                message: `Cannot connect to API: ${cause.message}`,
                cause,
                url,
                requestBodyValues,
                isRetryable: true
            });
        }
    }
    if (isBunNetworkError(error)) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
            message: `Cannot connect to API: ${error.message}`,
            cause: error,
            url,
            requestBodyValues,
            isRetryable: true
        });
    }
    return error;
}
// src/get-runtime-environment-user-agent.ts
function getRuntimeEnvironmentUserAgent(globalThisAny = globalThis) {
    var _a2, _b2, _c;
    if (globalThisAny.window) {
        return `runtime/browser`;
    }
    if ((_a2 = globalThisAny.navigator) == null ? void 0 : _a2.userAgent) {
        return `runtime/${globalThisAny.navigator.userAgent.toLowerCase()}`;
    }
    if ((_c = (_b2 = globalThisAny.process) == null ? void 0 : _b2.versions) == null ? void 0 : _c.node) {
        return `runtime/node.js/${globalThisAny.process.version.substring(0)}`;
    }
    if (globalThisAny.EdgeRuntime) {
        return `runtime/vercel-edge`;
    }
    return "runtime/unknown";
}
// src/normalize-headers.ts
function normalizeHeaders(headers) {
    if (headers == null) {
        return {};
    }
    const normalized = {};
    if (headers instanceof Headers) {
        headers.forEach((value, key)=>{
            normalized[key.toLowerCase()] = value;
        });
    } else {
        if (!Array.isArray(headers)) {
            headers = Object.entries(headers);
        }
        for (const [key, value] of headers){
            if (value != null) {
                normalized[key.toLowerCase()] = value;
            }
        }
    }
    return normalized;
}
// src/with-user-agent-suffix.ts
function withUserAgentSuffix(headers, ...userAgentSuffixParts) {
    const normalizedHeaders = new Headers(normalizeHeaders(headers));
    const currentUserAgentHeader = normalizedHeaders.get("user-agent") || "";
    normalizedHeaders.set("user-agent", [
        currentUserAgentHeader,
        ...userAgentSuffixParts
    ].filter(Boolean).join(" "));
    return Object.fromEntries(normalizedHeaders.entries());
}
// src/version.ts
var VERSION = ("TURBOPACK compile-time truthy", 1) ? "4.0.23" : "TURBOPACK unreachable";
// src/get-from-api.ts
var getOriginalFetch = ()=>globalThis.fetch;
var getFromApi = async ({ url, headers = {}, successfulResponseHandler, failedResponseHandler, abortSignal, fetch: fetch2 = getOriginalFetch() })=>{
    try {
        const response = await fetch2(url, {
            method: "GET",
            headers: withUserAgentSuffix(headers, `ai-sdk/provider-utils/${VERSION}`, getRuntimeEnvironmentUserAgent()),
            signal: abortSignal
        });
        const responseHeaders = extractResponseHeaders(response);
        if (!response.ok) {
            let errorInformation;
            try {
                errorInformation = await failedResponseHandler({
                    response,
                    url,
                    requestBodyValues: {}
                });
            } catch (error) {
                if (isAbortError(error) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"].isInstance(error)) {
                    throw error;
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: "Failed to process error response",
                    cause: error,
                    statusCode: response.status,
                    url,
                    responseHeaders,
                    requestBodyValues: {}
                });
            }
            throw errorInformation.value;
        }
        try {
            return await successfulResponseHandler({
                response,
                url,
                requestBodyValues: {}
            });
        } catch (error) {
            if (error instanceof Error) {
                if (isAbortError(error) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"].isInstance(error)) {
                    throw error;
                }
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                message: "Failed to process successful response",
                cause: error,
                statusCode: response.status,
                url,
                responseHeaders,
                requestBodyValues: {}
            });
        }
    } catch (error) {
        throw handleFetchError({
            error,
            url,
            requestBodyValues: {}
        });
    }
};
// src/inject-json-instruction.ts
var DEFAULT_SCHEMA_PREFIX = "JSON schema:";
var DEFAULT_SCHEMA_SUFFIX = "You MUST answer with a JSON object that matches the JSON schema above.";
var DEFAULT_GENERIC_SUFFIX = "You MUST answer with JSON.";
function injectJsonInstruction({ prompt, schema, schemaPrefix = schema != null ? DEFAULT_SCHEMA_PREFIX : void 0, schemaSuffix = schema != null ? DEFAULT_SCHEMA_SUFFIX : DEFAULT_GENERIC_SUFFIX }) {
    return [
        prompt != null && prompt.length > 0 ? prompt : void 0,
        prompt != null && prompt.length > 0 ? "" : void 0,
        // add a newline if prompt is not null
        schemaPrefix,
        schema != null ? JSON.stringify(schema) : void 0,
        schemaSuffix
    ].filter((line)=>line != null).join("\n");
}
function injectJsonInstructionIntoMessages({ messages, schema, schemaPrefix, schemaSuffix }) {
    var _a2, _b2;
    const systemMessage = ((_a2 = messages[0]) == null ? void 0 : _a2.role) === "system" ? {
        ...messages[0]
    } : {
        role: "system",
        content: ""
    };
    systemMessage.content = injectJsonInstruction({
        prompt: systemMessage.content,
        schema,
        schemaPrefix,
        schemaSuffix
    });
    return [
        systemMessage,
        ...((_b2 = messages[0]) == null ? void 0 : _b2.role) === "system" ? messages.slice(1) : messages
    ];
}
// src/is-non-nullable.ts
function isNonNullable(value) {
    return value != null;
}
// src/is-url-supported.ts
function isUrlSupported({ mediaType, url, supportedUrls }) {
    url = url.toLowerCase();
    mediaType = mediaType.toLowerCase();
    return Object.entries(supportedUrls).map(([key, value])=>{
        const mediaType2 = key.toLowerCase();
        return mediaType2 === "*" || mediaType2 === "*/*" ? {
            mediaTypePrefix: "",
            regexes: value
        } : {
            mediaTypePrefix: mediaType2.replace(/\*/, ""),
            regexes: value
        };
    }).filter(({ mediaTypePrefix })=>mediaType.startsWith(mediaTypePrefix)).flatMap(({ regexes })=>regexes).some((pattern)=>pattern.test(url));
}
;
function loadApiKey({ apiKey, environmentVariableName, apiKeyParameterName = "apiKey", description }) {
    if (typeof apiKey === "string") {
        return apiKey;
    }
    if (apiKey != null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadAPIKeyError"]({
            message: `${description} API key must be a string.`
        });
    }
    if (typeof process === "undefined") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadAPIKeyError"]({
            message: `${description} API key is missing. Pass it using the '${apiKeyParameterName}' parameter. Environment variables are not supported in this environment.`
        });
    }
    apiKey = process.env[environmentVariableName];
    if (apiKey == null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadAPIKeyError"]({
            message: `${description} API key is missing. Pass it using the '${apiKeyParameterName}' parameter or the ${environmentVariableName} environment variable.`
        });
    }
    if (typeof apiKey !== "string") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadAPIKeyError"]({
            message: `${description} API key must be a string. The value of the ${environmentVariableName} environment variable is not a string.`
        });
    }
    return apiKey;
}
// src/load-optional-setting.ts
function loadOptionalSetting({ settingValue, environmentVariableName }) {
    if (typeof settingValue === "string") {
        return settingValue;
    }
    if (settingValue != null || typeof process === "undefined") {
        return void 0;
    }
    settingValue = process.env[environmentVariableName];
    if (settingValue == null || typeof settingValue !== "string") {
        return void 0;
    }
    return settingValue;
}
;
function loadSetting({ settingValue, environmentVariableName, settingName, description }) {
    if (typeof settingValue === "string") {
        return settingValue;
    }
    if (settingValue != null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadSettingError"]({
            message: `${description} setting must be a string.`
        });
    }
    if (typeof process === "undefined") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadSettingError"]({
            message: `${description} setting is missing. Pass it using the '${settingName}' parameter. Environment variables are not supported in this environment.`
        });
    }
    settingValue = process.env[environmentVariableName];
    if (settingValue == null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadSettingError"]({
            message: `${description} setting is missing. Pass it using the '${settingName}' parameter or the ${environmentVariableName} environment variable.`
        });
    }
    if (typeof settingValue !== "string") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadSettingError"]({
            message: `${description} setting must be a string. The value of the ${environmentVariableName} environment variable is not a string.`
        });
    }
    return settingValue;
}
// src/media-type-to-extension.ts
function mediaTypeToExtension(mediaType) {
    var _a2;
    const [_type, subtype = ""] = mediaType.toLowerCase().split("/");
    return (_a2 = ({
        mpeg: "mp3",
        "x-wav": "wav",
        opus: "ogg",
        mp4: "m4a",
        "x-m4a": "m4a"
    })[subtype]) != null ? _a2 : subtype;
}
;
// src/secure-json-parse.ts
var suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
var suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function _parse(text) {
    const obj = JSON.parse(text);
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    if (suspectProtoRx.test(text) === false && suspectConstructorRx.test(text) === false) {
        return obj;
    }
    return filter(obj);
}
function filter(obj) {
    let next = [
        obj
    ];
    while(next.length){
        const nodes = next;
        next = [];
        for (const node of nodes){
            if (Object.prototype.hasOwnProperty.call(node, "__proto__")) {
                throw new SyntaxError("Object contains forbidden prototype property");
            }
            if (Object.prototype.hasOwnProperty.call(node, "constructor") && node.constructor !== null && typeof node.constructor === "object" && Object.prototype.hasOwnProperty.call(node.constructor, "prototype")) {
                throw new SyntaxError("Object contains forbidden prototype property");
            }
            for(const key in node){
                const value = node[key];
                if (value && typeof value === "object") {
                    next.push(value);
                }
            }
        }
    }
    return obj;
}
function secureJsonParse(text) {
    const { stackTraceLimit } = Error;
    try {
        Error.stackTraceLimit = 0;
    } catch (e) {
        return _parse(text);
    }
    try {
        return _parse(text);
    } finally{
        Error.stackTraceLimit = stackTraceLimit;
    }
}
;
;
;
// src/add-additional-properties-to-json-schema.ts
function addAdditionalPropertiesToJsonSchema(jsonSchema2) {
    if (jsonSchema2.type === "object" || Array.isArray(jsonSchema2.type) && jsonSchema2.type.includes("object")) {
        jsonSchema2.additionalProperties = false;
        const { properties } = jsonSchema2;
        if (properties != null) {
            for (const key of Object.keys(properties)){
                properties[key] = visit(properties[key]);
            }
        }
    }
    if (jsonSchema2.items != null) {
        jsonSchema2.items = Array.isArray(jsonSchema2.items) ? jsonSchema2.items.map(visit) : visit(jsonSchema2.items);
    }
    if (jsonSchema2.anyOf != null) {
        jsonSchema2.anyOf = jsonSchema2.anyOf.map(visit);
    }
    if (jsonSchema2.allOf != null) {
        jsonSchema2.allOf = jsonSchema2.allOf.map(visit);
    }
    if (jsonSchema2.oneOf != null) {
        jsonSchema2.oneOf = jsonSchema2.oneOf.map(visit);
    }
    const { definitions } = jsonSchema2;
    if (definitions != null) {
        for (const key of Object.keys(definitions)){
            definitions[key] = visit(definitions[key]);
        }
    }
    return jsonSchema2;
}
function visit(def) {
    if (typeof def === "boolean") return def;
    return addAdditionalPropertiesToJsonSchema(def);
}
// src/to-json-schema/zod3-to-json-schema/options.ts
var ignoreOverride = /* @__PURE__ */ Symbol("Let zodToJsonSchema decide on which parser to use");
var defaultOptions = {
    name: void 0,
    $refStrategy: "root",
    basePath: [
        "#"
    ],
    effectStrategy: "input",
    pipeStrategy: "all",
    dateStrategy: "format:date-time",
    mapStrategy: "entries",
    removeAdditionalStrategy: "passthrough",
    allowedAdditionalProperties: true,
    rejectedAdditionalProperties: false,
    definitionPath: "definitions",
    strictUnions: false,
    definitions: {},
    errorMessages: false,
    patternStrategy: "escape",
    applyRegexFlags: false,
    emailStrategy: "format:email",
    base64Strategy: "contentEncoding:base64",
    nameStrategy: "ref"
};
var getDefaultOptions = (options)=>typeof options === "string" ? {
        ...defaultOptions,
        name: options
    } : {
        ...defaultOptions,
        ...options
    };
;
// src/to-json-schema/zod3-to-json-schema/parsers/any.ts
function parseAnyDef() {
    return {};
}
;
function parseArrayDef(def, refs) {
    var _a2, _b2, _c;
    const res = {
        type: "array"
    };
    if (((_a2 = def.type) == null ? void 0 : _a2._def) && ((_c = (_b2 = def.type) == null ? void 0 : _b2._def) == null ? void 0 : _c.typeName) !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodAny) {
        res.items = parseDef(def.type._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "items"
            ]
        });
    }
    if (def.minLength) {
        res.minItems = def.minLength.value;
    }
    if (def.maxLength) {
        res.maxItems = def.maxLength.value;
    }
    if (def.exactLength) {
        res.minItems = def.exactLength.value;
        res.maxItems = def.exactLength.value;
    }
    return res;
}
// src/to-json-schema/zod3-to-json-schema/parsers/bigint.ts
function parseBigintDef(def) {
    const res = {
        type: "integer",
        format: "int64"
    };
    if (!def.checks) return res;
    for (const check of def.checks){
        switch(check.kind){
            case "min":
                if (check.inclusive) {
                    res.minimum = check.value;
                } else {
                    res.exclusiveMinimum = check.value;
                }
                break;
            case "max":
                if (check.inclusive) {
                    res.maximum = check.value;
                } else {
                    res.exclusiveMaximum = check.value;
                }
                break;
            case "multipleOf":
                res.multipleOf = check.value;
                break;
        }
    }
    return res;
}
// src/to-json-schema/zod3-to-json-schema/parsers/boolean.ts
function parseBooleanDef() {
    return {
        type: "boolean"
    };
}
// src/to-json-schema/zod3-to-json-schema/parsers/branded.ts
function parseBrandedDef(_def, refs) {
    return parseDef(_def.type._def, refs);
}
// src/to-json-schema/zod3-to-json-schema/parsers/catch.ts
var parseCatchDef = (def, refs)=>{
    return parseDef(def.innerType._def, refs);
};
// src/to-json-schema/zod3-to-json-schema/parsers/date.ts
function parseDateDef(def, refs, overrideDateStrategy) {
    const strategy = overrideDateStrategy != null ? overrideDateStrategy : refs.dateStrategy;
    if (Array.isArray(strategy)) {
        return {
            anyOf: strategy.map((item, i)=>parseDateDef(def, refs, item))
        };
    }
    switch(strategy){
        case "string":
        case "format:date-time":
            return {
                type: "string",
                format: "date-time"
            };
        case "format:date":
            return {
                type: "string",
                format: "date"
            };
        case "integer":
            return integerDateParser(def);
    }
}
var integerDateParser = (def)=>{
    const res = {
        type: "integer",
        format: "unix-time"
    };
    for (const check of def.checks){
        switch(check.kind){
            case "min":
                res.minimum = check.value;
                break;
            case "max":
                res.maximum = check.value;
                break;
        }
    }
    return res;
};
// src/to-json-schema/zod3-to-json-schema/parsers/default.ts
function parseDefaultDef(_def, refs) {
    return {
        ...parseDef(_def.innerType._def, refs),
        default: _def.defaultValue()
    };
}
// src/to-json-schema/zod3-to-json-schema/parsers/effects.ts
function parseEffectsDef(_def, refs) {
    return refs.effectStrategy === "input" ? parseDef(_def.schema._def, refs) : parseAnyDef();
}
// src/to-json-schema/zod3-to-json-schema/parsers/enum.ts
function parseEnumDef(def) {
    return {
        type: "string",
        enum: Array.from(def.values)
    };
}
// src/to-json-schema/zod3-to-json-schema/parsers/intersection.ts
var isJsonSchema7AllOfType = (type)=>{
    if ("type" in type && type.type === "string") return false;
    return "allOf" in type;
};
function parseIntersectionDef(def, refs) {
    const allOf = [
        parseDef(def.left._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "allOf",
                "0"
            ]
        }),
        parseDef(def.right._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "allOf",
                "1"
            ]
        })
    ].filter((x)=>!!x);
    const mergedAllOf = [];
    allOf.forEach((schema)=>{
        if (isJsonSchema7AllOfType(schema)) {
            mergedAllOf.push(...schema.allOf);
        } else {
            let nestedSchema = schema;
            if ("additionalProperties" in schema && schema.additionalProperties === false) {
                const { additionalProperties, ...rest } = schema;
                nestedSchema = rest;
            }
            mergedAllOf.push(nestedSchema);
        }
    });
    return mergedAllOf.length ? {
        allOf: mergedAllOf
    } : void 0;
}
// src/to-json-schema/zod3-to-json-schema/parsers/literal.ts
function parseLiteralDef(def) {
    const parsedType = typeof def.value;
    if (parsedType !== "bigint" && parsedType !== "number" && parsedType !== "boolean" && parsedType !== "string") {
        return {
            type: Array.isArray(def.value) ? "array" : "object"
        };
    }
    return {
        type: parsedType === "bigint" ? "integer" : parsedType,
        const: def.value
    };
}
;
// src/to-json-schema/zod3-to-json-schema/parsers/string.ts
var emojiRegex = void 0;
var zodPatterns = {
    /**
   * `c` was changed to `[cC]` to replicate /i flag
   */ cuid: /^[cC][^\s-]{8,}$/,
    cuid2: /^[0-9a-z]+$/,
    ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
    /**
   * `a-z` was added to replicate /i flag
   */ email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
    /**
   * Constructed a valid Unicode RegExp
   *
   * Lazily instantiate since this type of regex isn't supported
   * in all envs (e.g. React Native).
   *
   * See:
   * https://github.com/colinhacks/zod/issues/2433
   * Fix in Zod:
   * https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
   */ emoji: ()=>{
        if (emojiRegex === void 0) {
            emojiRegex = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
        }
        return emojiRegex;
    },
    /**
   * Unused
   */ uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
    /**
   * Unused
   */ ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
    /**
   * Unused
   */ ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
    ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
    base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
    nanoid: /^[a-zA-Z0-9_-]{21}$/,
    jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function parseStringDef(def, refs) {
    const res = {
        type: "string"
    };
    if (def.checks) {
        for (const check of def.checks){
            switch(check.kind){
                case "min":
                    res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
                    break;
                case "max":
                    res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
                    break;
                case "email":
                    switch(refs.emailStrategy){
                        case "format:email":
                            addFormat(res, "email", check.message, refs);
                            break;
                        case "format:idn-email":
                            addFormat(res, "idn-email", check.message, refs);
                            break;
                        case "pattern:zod":
                            addPattern(res, zodPatterns.email, check.message, refs);
                            break;
                    }
                    break;
                case "url":
                    addFormat(res, "uri", check.message, refs);
                    break;
                case "uuid":
                    addFormat(res, "uuid", check.message, refs);
                    break;
                case "regex":
                    addPattern(res, check.regex, check.message, refs);
                    break;
                case "cuid":
                    addPattern(res, zodPatterns.cuid, check.message, refs);
                    break;
                case "cuid2":
                    addPattern(res, zodPatterns.cuid2, check.message, refs);
                    break;
                case "startsWith":
                    addPattern(res, RegExp(`^${escapeLiteralCheckValue(check.value, refs)}`), check.message, refs);
                    break;
                case "endsWith":
                    addPattern(res, RegExp(`${escapeLiteralCheckValue(check.value, refs)}$`), check.message, refs);
                    break;
                case "datetime":
                    addFormat(res, "date-time", check.message, refs);
                    break;
                case "date":
                    addFormat(res, "date", check.message, refs);
                    break;
                case "time":
                    addFormat(res, "time", check.message, refs);
                    break;
                case "duration":
                    addFormat(res, "duration", check.message, refs);
                    break;
                case "length":
                    res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
                    res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
                    break;
                case "includes":
                    {
                        addPattern(res, RegExp(escapeLiteralCheckValue(check.value, refs)), check.message, refs);
                        break;
                    }
                case "ip":
                    {
                        if (check.version !== "v6") {
                            addFormat(res, "ipv4", check.message, refs);
                        }
                        if (check.version !== "v4") {
                            addFormat(res, "ipv6", check.message, refs);
                        }
                        break;
                    }
                case "base64url":
                    addPattern(res, zodPatterns.base64url, check.message, refs);
                    break;
                case "jwt":
                    addPattern(res, zodPatterns.jwt, check.message, refs);
                    break;
                case "cidr":
                    {
                        if (check.version !== "v6") {
                            addPattern(res, zodPatterns.ipv4Cidr, check.message, refs);
                        }
                        if (check.version !== "v4") {
                            addPattern(res, zodPatterns.ipv6Cidr, check.message, refs);
                        }
                        break;
                    }
                case "emoji":
                    addPattern(res, zodPatterns.emoji(), check.message, refs);
                    break;
                case "ulid":
                    {
                        addPattern(res, zodPatterns.ulid, check.message, refs);
                        break;
                    }
                case "base64":
                    {
                        switch(refs.base64Strategy){
                            case "format:binary":
                                {
                                    addFormat(res, "binary", check.message, refs);
                                    break;
                                }
                            case "contentEncoding:base64":
                                {
                                    res.contentEncoding = "base64";
                                    break;
                                }
                            case "pattern:zod":
                                {
                                    addPattern(res, zodPatterns.base64, check.message, refs);
                                    break;
                                }
                        }
                        break;
                    }
                case "nanoid":
                    {
                        addPattern(res, zodPatterns.nanoid, check.message, refs);
                    }
                case "toLowerCase":
                case "toUpperCase":
                case "trim":
                    break;
                default:
                    /* @__PURE__ */ ((_)=>{})(check);
            }
        }
    }
    return res;
}
function escapeLiteralCheckValue(literal, refs) {
    return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(literal) : literal;
}
var ALPHA_NUMERIC = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function escapeNonAlphaNumeric(source) {
    let result = "";
    for(let i = 0; i < source.length; i++){
        if (!ALPHA_NUMERIC.has(source[i])) {
            result += "\\";
        }
        result += source[i];
    }
    return result;
}
function addFormat(schema, value, message, refs) {
    var _a2;
    if (schema.format || ((_a2 = schema.anyOf) == null ? void 0 : _a2.some((x)=>x.format))) {
        if (!schema.anyOf) {
            schema.anyOf = [];
        }
        if (schema.format) {
            schema.anyOf.push({
                format: schema.format
            });
            delete schema.format;
        }
        schema.anyOf.push({
            format: value,
            ...message && refs.errorMessages && {
                errorMessage: {
                    format: message
                }
            }
        });
    } else {
        schema.format = value;
    }
}
function addPattern(schema, regex, message, refs) {
    var _a2;
    if (schema.pattern || ((_a2 = schema.allOf) == null ? void 0 : _a2.some((x)=>x.pattern))) {
        if (!schema.allOf) {
            schema.allOf = [];
        }
        if (schema.pattern) {
            schema.allOf.push({
                pattern: schema.pattern
            });
            delete schema.pattern;
        }
        schema.allOf.push({
            pattern: stringifyRegExpWithFlags(regex, refs),
            ...message && refs.errorMessages && {
                errorMessage: {
                    pattern: message
                }
            }
        });
    } else {
        schema.pattern = stringifyRegExpWithFlags(regex, refs);
    }
}
function stringifyRegExpWithFlags(regex, refs) {
    var _a2;
    if (!refs.applyRegexFlags || !regex.flags) {
        return regex.source;
    }
    const flags = {
        i: regex.flags.includes("i"),
        // Case-insensitive
        m: regex.flags.includes("m"),
        // `^` and `$` matches adjacent to newline characters
        s: regex.flags.includes("s")
    };
    const source = flags.i ? regex.source.toLowerCase() : regex.source;
    let pattern = "";
    let isEscaped = false;
    let inCharGroup = false;
    let inCharRange = false;
    for(let i = 0; i < source.length; i++){
        if (isEscaped) {
            pattern += source[i];
            isEscaped = false;
            continue;
        }
        if (flags.i) {
            if (inCharGroup) {
                if (source[i].match(/[a-z]/)) {
                    if (inCharRange) {
                        pattern += source[i];
                        pattern += `${source[i - 2]}-${source[i]}`.toUpperCase();
                        inCharRange = false;
                    } else if (source[i + 1] === "-" && ((_a2 = source[i + 2]) == null ? void 0 : _a2.match(/[a-z]/))) {
                        pattern += source[i];
                        inCharRange = true;
                    } else {
                        pattern += `${source[i]}${source[i].toUpperCase()}`;
                    }
                    continue;
                }
            } else if (source[i].match(/[a-z]/)) {
                pattern += `[${source[i]}${source[i].toUpperCase()}]`;
                continue;
            }
        }
        if (flags.m) {
            if (source[i] === "^") {
                pattern += `(^|(?<=[\r
]))`;
                continue;
            } else if (source[i] === "$") {
                pattern += `($|(?=[\r
]))`;
                continue;
            }
        }
        if (flags.s && source[i] === ".") {
            pattern += inCharGroup ? `${source[i]}\r
` : `[${source[i]}\r
]`;
            continue;
        }
        pattern += source[i];
        if (source[i] === "\\") {
            isEscaped = true;
        } else if (inCharGroup && source[i] === "]") {
            inCharGroup = false;
        } else if (!inCharGroup && source[i] === "[") {
            inCharGroup = true;
        }
    }
    try {
        new RegExp(pattern);
    } catch (e) {
        console.warn(`Could not convert regex pattern at ${refs.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`);
        return regex.source;
    }
    return pattern;
}
// src/to-json-schema/zod3-to-json-schema/parsers/record.ts
function parseRecordDef(def, refs) {
    var _a2, _b2, _c, _d, _e, _f;
    const schema = {
        type: "object",
        additionalProperties: (_a2 = parseDef(def.valueType._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "additionalProperties"
            ]
        })) != null ? _a2 : refs.allowedAdditionalProperties
    };
    if (((_b2 = def.keyType) == null ? void 0 : _b2._def.typeName) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodString && ((_c = def.keyType._def.checks) == null ? void 0 : _c.length)) {
        const { type, ...keyType } = parseStringDef(def.keyType._def, refs);
        return {
            ...schema,
            propertyNames: keyType
        };
    } else if (((_d = def.keyType) == null ? void 0 : _d._def.typeName) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodEnum) {
        return {
            ...schema,
            propertyNames: {
                enum: def.keyType._def.values
            }
        };
    } else if (((_e = def.keyType) == null ? void 0 : _e._def.typeName) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBranded && def.keyType._def.type._def.typeName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodString && ((_f = def.keyType._def.type._def.checks) == null ? void 0 : _f.length)) {
        const { type, ...keyType } = parseBrandedDef(def.keyType._def, refs);
        return {
            ...schema,
            propertyNames: keyType
        };
    }
    return schema;
}
// src/to-json-schema/zod3-to-json-schema/parsers/map.ts
function parseMapDef(def, refs) {
    if (refs.mapStrategy === "record") {
        return parseRecordDef(def, refs);
    }
    const keys = parseDef(def.keyType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "items",
            "items",
            "0"
        ]
    }) || parseAnyDef();
    const values = parseDef(def.valueType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "items",
            "items",
            "1"
        ]
    }) || parseAnyDef();
    return {
        type: "array",
        maxItems: 125,
        items: {
            type: "array",
            items: [
                keys,
                values
            ],
            minItems: 2,
            maxItems: 2
        }
    };
}
// src/to-json-schema/zod3-to-json-schema/parsers/native-enum.ts
function parseNativeEnumDef(def) {
    const object = def.values;
    const actualKeys = Object.keys(def.values).filter((key)=>{
        return typeof object[object[key]] !== "number";
    });
    const actualValues = actualKeys.map((key)=>object[key]);
    const parsedTypes = Array.from(new Set(actualValues.map((values)=>typeof values)));
    return {
        type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : [
            "string",
            "number"
        ],
        enum: actualValues
    };
}
// src/to-json-schema/zod3-to-json-schema/parsers/never.ts
function parseNeverDef() {
    return {
        not: parseAnyDef()
    };
}
// src/to-json-schema/zod3-to-json-schema/parsers/null.ts
function parseNullDef() {
    return {
        type: "null"
    };
}
// src/to-json-schema/zod3-to-json-schema/parsers/union.ts
var primitiveMappings = {
    ZodString: "string",
    ZodNumber: "number",
    ZodBigInt: "integer",
    ZodBoolean: "boolean",
    ZodNull: "null"
};
function parseUnionDef(def, refs) {
    const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
    if (options.every((x)=>x._def.typeName in primitiveMappings && (!x._def.checks || !x._def.checks.length))) {
        const types = options.reduce((types2, x)=>{
            const type = primitiveMappings[x._def.typeName];
            return type && !types2.includes(type) ? [
                ...types2,
                type
            ] : types2;
        }, []);
        return {
            type: types.length > 1 ? types : types[0]
        };
    } else if (options.every((x)=>x._def.typeName === "ZodLiteral" && !x.description)) {
        const types = options.reduce((acc, x)=>{
            const type = typeof x._def.value;
            switch(type){
                case "string":
                case "number":
                case "boolean":
                    return [
                        ...acc,
                        type
                    ];
                case "bigint":
                    return [
                        ...acc,
                        "integer"
                    ];
                case "object":
                    if (x._def.value === null) return [
                        ...acc,
                        "null"
                    ];
                case "symbol":
                case "undefined":
                case "function":
                default:
                    return acc;
            }
        }, []);
        if (types.length === options.length) {
            const uniqueTypes = types.filter((x, i, a)=>a.indexOf(x) === i);
            return {
                type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
                enum: options.reduce((acc, x)=>{
                    return acc.includes(x._def.value) ? acc : [
                        ...acc,
                        x._def.value
                    ];
                }, [])
            };
        }
    } else if (options.every((x)=>x._def.typeName === "ZodEnum")) {
        return {
            type: "string",
            enum: options.reduce((acc, x)=>[
                    ...acc,
                    ...x._def.values.filter((x2)=>!acc.includes(x2))
                ], [])
        };
    }
    return asAnyOf(def, refs);
}
var asAnyOf = (def, refs)=>{
    const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x, i)=>parseDef(x._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "anyOf",
                `${i}`
            ]
        })).filter((x)=>!!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0));
    return anyOf.length ? {
        anyOf
    } : void 0;
};
// src/to-json-schema/zod3-to-json-schema/parsers/nullable.ts
function parseNullableDef(def, refs) {
    if ([
        "ZodString",
        "ZodNumber",
        "ZodBigInt",
        "ZodBoolean",
        "ZodNull"
    ].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) {
        return {
            type: [
                primitiveMappings[def.innerType._def.typeName],
                "null"
            ]
        };
    }
    const base = parseDef(def.innerType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "anyOf",
            "0"
        ]
    });
    return base && {
        anyOf: [
            base,
            {
                type: "null"
            }
        ]
    };
}
// src/to-json-schema/zod3-to-json-schema/parsers/number.ts
function parseNumberDef(def) {
    const res = {
        type: "number"
    };
    if (!def.checks) return res;
    for (const check of def.checks){
        switch(check.kind){
            case "int":
                res.type = "integer";
                break;
            case "min":
                if (check.inclusive) {
                    res.minimum = check.value;
                } else {
                    res.exclusiveMinimum = check.value;
                }
                break;
            case "max":
                if (check.inclusive) {
                    res.maximum = check.value;
                } else {
                    res.exclusiveMaximum = check.value;
                }
                break;
            case "multipleOf":
                res.multipleOf = check.value;
                break;
        }
    }
    return res;
}
// src/to-json-schema/zod3-to-json-schema/parsers/object.ts
function parseObjectDef(def, refs) {
    const result = {
        type: "object",
        properties: {}
    };
    const required = [];
    const shape = def.shape();
    for(const propName in shape){
        let propDef = shape[propName];
        if (propDef === void 0 || propDef._def === void 0) {
            continue;
        }
        const propOptional = safeIsOptional(propDef);
        const parsedDef = parseDef(propDef._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "properties",
                propName
            ],
            propertyPath: [
                ...refs.currentPath,
                "properties",
                propName
            ]
        });
        if (parsedDef === void 0) {
            continue;
        }
        result.properties[propName] = parsedDef;
        if (!propOptional) {
            required.push(propName);
        }
    }
    if (required.length) {
        result.required = required;
    }
    const additionalProperties = decideAdditionalProperties(def, refs);
    if (additionalProperties !== void 0) {
        result.additionalProperties = additionalProperties;
    }
    return result;
}
function decideAdditionalProperties(def, refs) {
    if (def.catchall._def.typeName !== "ZodNever") {
        return parseDef(def.catchall._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "additionalProperties"
            ]
        });
    }
    switch(def.unknownKeys){
        case "passthrough":
            return refs.allowedAdditionalProperties;
        case "strict":
            return refs.rejectedAdditionalProperties;
        case "strip":
            return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
    }
}
function safeIsOptional(schema) {
    try {
        return schema.isOptional();
    } catch (e) {
        return true;
    }
}
// src/to-json-schema/zod3-to-json-schema/parsers/optional.ts
var parseOptionalDef = (def, refs)=>{
    var _a2;
    if (refs.currentPath.toString() === ((_a2 = refs.propertyPath) == null ? void 0 : _a2.toString())) {
        return parseDef(def.innerType._def, refs);
    }
    const innerSchema = parseDef(def.innerType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "anyOf",
            "1"
        ]
    });
    return innerSchema ? {
        anyOf: [
            {
                not: parseAnyDef()
            },
            innerSchema
        ]
    } : parseAnyDef();
};
// src/to-json-schema/zod3-to-json-schema/parsers/pipeline.ts
var parsePipelineDef = (def, refs)=>{
    if (refs.pipeStrategy === "input") {
        return parseDef(def.in._def, refs);
    } else if (refs.pipeStrategy === "output") {
        return parseDef(def.out._def, refs);
    }
    const a = parseDef(def.in._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "allOf",
            "0"
        ]
    });
    const b = parseDef(def.out._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "allOf",
            a ? "1" : "0"
        ]
    });
    return {
        allOf: [
            a,
            b
        ].filter((x)=>x !== void 0)
    };
};
// src/to-json-schema/zod3-to-json-schema/parsers/promise.ts
function parsePromiseDef(def, refs) {
    return parseDef(def.type._def, refs);
}
// src/to-json-schema/zod3-to-json-schema/parsers/set.ts
function parseSetDef(def, refs) {
    const items = parseDef(def.valueType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "items"
        ]
    });
    const schema = {
        type: "array",
        uniqueItems: true,
        items
    };
    if (def.minSize) {
        schema.minItems = def.minSize.value;
    }
    if (def.maxSize) {
        schema.maxItems = def.maxSize.value;
    }
    return schema;
}
// src/to-json-schema/zod3-to-json-schema/parsers/tuple.ts
function parseTupleDef(def, refs) {
    if (def.rest) {
        return {
            type: "array",
            minItems: def.items.length,
            items: def.items.map((x, i)=>parseDef(x._def, {
                    ...refs,
                    currentPath: [
                        ...refs.currentPath,
                        "items",
                        `${i}`
                    ]
                })).reduce((acc, x)=>x === void 0 ? acc : [
                    ...acc,
                    x
                ], []),
            additionalItems: parseDef(def.rest._def, {
                ...refs,
                currentPath: [
                    ...refs.currentPath,
                    "additionalItems"
                ]
            })
        };
    } else {
        return {
            type: "array",
            minItems: def.items.length,
            maxItems: def.items.length,
            items: def.items.map((x, i)=>parseDef(x._def, {
                    ...refs,
                    currentPath: [
                        ...refs.currentPath,
                        "items",
                        `${i}`
                    ]
                })).reduce((acc, x)=>x === void 0 ? acc : [
                    ...acc,
                    x
                ], [])
        };
    }
}
// src/to-json-schema/zod3-to-json-schema/parsers/undefined.ts
function parseUndefinedDef() {
    return {
        not: parseAnyDef()
    };
}
// src/to-json-schema/zod3-to-json-schema/parsers/unknown.ts
function parseUnknownDef() {
    return parseAnyDef();
}
// src/to-json-schema/zod3-to-json-schema/parsers/readonly.ts
var parseReadonlyDef = (def, refs)=>{
    return parseDef(def.innerType._def, refs);
};
// src/to-json-schema/zod3-to-json-schema/select-parser.ts
var selectParser = (def, typeName, refs)=>{
    switch(typeName){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodString:
            return parseStringDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNumber:
            return parseNumberDef(def);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodObject:
            return parseObjectDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBigInt:
            return parseBigintDef(def);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBoolean:
            return parseBooleanDef();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodDate:
            return parseDateDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodUndefined:
            return parseUndefinedDef();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNull:
            return parseNullDef();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodArray:
            return parseArrayDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodUnion:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodDiscriminatedUnion:
            return parseUnionDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodIntersection:
            return parseIntersectionDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodTuple:
            return parseTupleDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodRecord:
            return parseRecordDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodLiteral:
            return parseLiteralDef(def);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodEnum:
            return parseEnumDef(def);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNativeEnum:
            return parseNativeEnumDef(def);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNullable:
            return parseNullableDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodOptional:
            return parseOptionalDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodMap:
            return parseMapDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodSet:
            return parseSetDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodLazy:
            return ()=>def.getter()._def;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodPromise:
            return parsePromiseDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNaN:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNever:
            return parseNeverDef();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodEffects:
            return parseEffectsDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodAny:
            return parseAnyDef();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodUnknown:
            return parseUnknownDef();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodDefault:
            return parseDefaultDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBranded:
            return parseBrandedDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodReadonly:
            return parseReadonlyDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodCatch:
            return parseCatchDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodPipeline:
            return parsePipelineDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodFunction:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodVoid:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodSymbol:
            return void 0;
        default:
            return /* @__PURE__ */ ((_)=>void 0)(typeName);
    }
};
// src/to-json-schema/zod3-to-json-schema/get-relative-path.ts
var getRelativePath = (pathA, pathB)=>{
    let i = 0;
    for(; i < pathA.length && i < pathB.length; i++){
        if (pathA[i] !== pathB[i]) break;
    }
    return [
        (pathA.length - i).toString(),
        ...pathB.slice(i)
    ].join("/");
};
// src/to-json-schema/zod3-to-json-schema/parse-def.ts
function parseDef(def, refs, forceResolution = false) {
    var _a2;
    const seenItem = refs.seen.get(def);
    if (refs.override) {
        const overrideResult = (_a2 = refs.override) == null ? void 0 : _a2.call(refs, def, refs, seenItem, forceResolution);
        if (overrideResult !== ignoreOverride) {
            return overrideResult;
        }
    }
    if (seenItem && !forceResolution) {
        const seenSchema = get$ref(seenItem, refs);
        if (seenSchema !== void 0) {
            return seenSchema;
        }
    }
    const newItem = {
        def,
        path: refs.currentPath,
        jsonSchema: void 0
    };
    refs.seen.set(def, newItem);
    const jsonSchemaOrGetter = selectParser(def, def.typeName, refs);
    const jsonSchema2 = typeof jsonSchemaOrGetter === "function" ? parseDef(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
    if (jsonSchema2) {
        addMeta(def, refs, jsonSchema2);
    }
    if (refs.postProcess) {
        const postProcessResult = refs.postProcess(jsonSchema2, def, refs);
        newItem.jsonSchema = jsonSchema2;
        return postProcessResult;
    }
    newItem.jsonSchema = jsonSchema2;
    return jsonSchema2;
}
var get$ref = (item, refs)=>{
    switch(refs.$refStrategy){
        case "root":
            return {
                $ref: item.path.join("/")
            };
        case "relative":
            return {
                $ref: getRelativePath(refs.currentPath, item.path)
            };
        case "none":
        case "seen":
            {
                if (item.path.length < refs.currentPath.length && item.path.every((value, index)=>refs.currentPath[index] === value)) {
                    console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`);
                    return parseAnyDef();
                }
                return refs.$refStrategy === "seen" ? parseAnyDef() : void 0;
            }
    }
};
var addMeta = (def, refs, jsonSchema2)=>{
    if (def.description) {
        jsonSchema2.description = def.description;
    }
    return jsonSchema2;
};
// src/to-json-schema/zod3-to-json-schema/refs.ts
var getRefs = (options)=>{
    const _options = getDefaultOptions(options);
    const currentPath = _options.name !== void 0 ? [
        ..._options.basePath,
        _options.definitionPath,
        _options.name
    ] : _options.basePath;
    return {
        ..._options,
        currentPath,
        propertyPath: void 0,
        seen: new Map(Object.entries(_options.definitions).map(([name2, def])=>[
                def._def,
                {
                    def: def._def,
                    path: [
                        ..._options.basePath,
                        _options.definitionPath,
                        name2
                    ],
                    // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
                    jsonSchema: void 0
                }
            ]))
    };
};
// src/to-json-schema/zod3-to-json-schema/zod3-to-json-schema.ts
var zod3ToJsonSchema = (schema, options)=>{
    var _a2;
    const refs = getRefs(options);
    let definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce((acc, [name3, schema2])=>{
        var _a3;
        return {
            ...acc,
            [name3]: (_a3 = parseDef(schema2._def, {
                ...refs,
                currentPath: [
                    ...refs.basePath,
                    refs.definitionPath,
                    name3
                ]
            }, true)) != null ? _a3 : parseAnyDef()
        };
    }, {}) : void 0;
    const name2 = typeof options === "string" ? options : (options == null ? void 0 : options.nameStrategy) === "title" ? void 0 : options == null ? void 0 : options.name;
    const main = (_a2 = parseDef(schema._def, name2 === void 0 ? refs : {
        ...refs,
        currentPath: [
            ...refs.basePath,
            refs.definitionPath,
            name2
        ]
    }, false)) != null ? _a2 : parseAnyDef();
    const title = typeof options === "object" && options.name !== void 0 && options.nameStrategy === "title" ? options.name : void 0;
    if (title !== void 0) {
        main.title = title;
    }
    const combined = name2 === void 0 ? definitions ? {
        ...main,
        [refs.definitionPath]: definitions
    } : main : {
        $ref: [
            ...refs.$refStrategy === "relative" ? [] : refs.basePath,
            refs.definitionPath,
            name2
        ].join("/"),
        [refs.definitionPath]: {
            ...definitions,
            [name2]: main
        }
    };
    combined.$schema = "http://json-schema.org/draft-07/schema#";
    return combined;
};
// src/schema.ts
var schemaSymbol = /* @__PURE__ */ Symbol.for("vercel.ai.schema");
function lazySchema(createSchema) {
    let schema;
    return ()=>{
        if (schema == null) {
            schema = createSchema();
        }
        return schema;
    };
}
function jsonSchema(jsonSchema2, { validate } = {}) {
    return {
        [schemaSymbol]: true,
        _type: void 0,
        // should never be used directly
        get jsonSchema () {
            if (typeof jsonSchema2 === "function") {
                jsonSchema2 = jsonSchema2();
            }
            return jsonSchema2;
        },
        validate
    };
}
function isSchema(value) {
    return typeof value === "object" && value !== null && schemaSymbol in value && value[schemaSymbol] === true && "jsonSchema" in value && "validate" in value;
}
function asSchema(schema) {
    return schema == null ? jsonSchema({
        properties: {},
        additionalProperties: false
    }) : isSchema(schema) ? schema : "~standard" in schema ? schema["~standard"].vendor === "zod" ? zodSchema(schema) : standardSchema(schema) : schema();
}
function standardSchema(standardSchema2) {
    return jsonSchema(()=>addAdditionalPropertiesToJsonSchema(standardSchema2["~standard"].jsonSchema.input({
            target: "draft-07"
        })), {
        validate: async (value)=>{
            const result = await standardSchema2["~standard"].validate(value);
            return "value" in result ? {
                success: true,
                value: result.value
            } : {
                success: false,
                error: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypeValidationError"]({
                    value,
                    cause: result.issues
                })
            };
        }
    });
}
function zod3Schema(zodSchema2, options) {
    var _a2;
    const useReferences = (_a2 = options == null ? void 0 : options.useReferences) != null ? _a2 : false;
    return jsonSchema(// defer json schema creation to avoid unnecessary computation when only validation is needed
    ()=>zod3ToJsonSchema(zodSchema2, {
            $refStrategy: useReferences ? "root" : "none"
        }), {
        validate: async (value)=>{
            const result = await zodSchema2.safeParseAsync(value);
            return result.success ? {
                success: true,
                value: result.data
            } : {
                success: false,
                error: result.error
            };
        }
    });
}
function zod4Schema(zodSchema2, options) {
    var _a2;
    const useReferences = (_a2 = options == null ? void 0 : options.useReferences) != null ? _a2 : false;
    return jsonSchema(// defer json schema creation to avoid unnecessary computation when only validation is needed
    ()=>addAdditionalPropertiesToJsonSchema(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toJSONSchema"](zodSchema2, {
            target: "draft-7",
            io: "input",
            reused: useReferences ? "ref" : "inline"
        })), {
        validate: async (value)=>{
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeParseAsync"](zodSchema2, value);
            return result.success ? {
                success: true,
                value: result.data
            } : {
                success: false,
                error: result.error
            };
        }
    });
}
function isZod4Schema(zodSchema2) {
    return "_zod" in zodSchema2;
}
function zodSchema(zodSchema2, options) {
    if (isZod4Schema(zodSchema2)) {
        return zod4Schema(zodSchema2, options);
    } else {
        return zod3Schema(zodSchema2, options);
    }
}
// src/validate-types.ts
async function validateTypes({ value, schema, context }) {
    const result = await safeValidateTypes({
        value,
        schema,
        context
    });
    if (!result.success) {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypeValidationError"].wrap({
            value,
            cause: result.error,
            context
        });
    }
    return result.value;
}
async function safeValidateTypes({ value, schema, context }) {
    const actualSchema = asSchema(schema);
    try {
        if (actualSchema.validate == null) {
            return {
                success: true,
                value,
                rawValue: value
            };
        }
        const result = await actualSchema.validate(value);
        if (result.success) {
            return {
                success: true,
                value: result.value,
                rawValue: value
            };
        }
        return {
            success: false,
            error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypeValidationError"].wrap({
                value,
                cause: result.error,
                context
            }),
            rawValue: value
        };
    } catch (error) {
        return {
            success: false,
            error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypeValidationError"].wrap({
                value,
                cause: error,
                context
            }),
            rawValue: value
        };
    }
}
// src/parse-json.ts
async function parseJSON({ text, schema }) {
    try {
        const value = secureJsonParse(text);
        if (schema == null) {
            return value;
        }
        return validateTypes({
            value,
            schema
        });
    } catch (error) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JSONParseError"].isInstance(error) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypeValidationError"].isInstance(error)) {
            throw error;
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JSONParseError"]({
            text,
            cause: error
        });
    }
}
async function safeParseJSON({ text, schema }) {
    try {
        const value = secureJsonParse(text);
        if (schema == null) {
            return {
                success: true,
                value,
                rawValue: value
            };
        }
        return await safeValidateTypes({
            value,
            schema
        });
    } catch (error) {
        return {
            success: false,
            error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JSONParseError"].isInstance(error) ? error : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JSONParseError"]({
                text,
                cause: error
            }),
            rawValue: void 0
        };
    }
}
function isParsableJson(input) {
    try {
        secureJsonParse(input);
        return true;
    } catch (e) {
        return false;
    }
}
;
function parseJsonEventStream({ stream, schema }) {
    return stream.pipeThrough(new TextDecoderStream()).pipeThrough(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$stream$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EventSourceParserStream"]()).pipeThrough(new TransformStream({
        async transform ({ data }, controller) {
            if (data === "[DONE]") {
                return;
            }
            controller.enqueue(await safeParseJSON({
                text: data,
                schema
            }));
        }
    }));
}
;
async function parseProviderOptions({ provider, providerOptions, schema }) {
    if ((providerOptions == null ? void 0 : providerOptions[provider]) == null) {
        return void 0;
    }
    const parsedProviderOptions = await safeValidateTypes({
        value: providerOptions[provider],
        schema
    });
    if (!parsedProviderOptions.success) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
            argument: "providerOptions",
            message: `invalid ${provider} provider options`,
            cause: parsedProviderOptions.error
        });
    }
    return parsedProviderOptions.value;
}
;
var getOriginalFetch2 = ()=>globalThis.fetch;
var postJsonToApi = async ({ url, headers, body, failedResponseHandler, successfulResponseHandler, abortSignal, fetch: fetch2 })=>postToApi({
        url,
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: {
            content: JSON.stringify(body),
            values: body
        },
        failedResponseHandler,
        successfulResponseHandler,
        abortSignal,
        fetch: fetch2
    });
var postFormDataToApi = async ({ url, headers, formData, failedResponseHandler, successfulResponseHandler, abortSignal, fetch: fetch2 })=>postToApi({
        url,
        headers,
        body: {
            content: formData,
            values: Object.fromEntries(formData.entries())
        },
        failedResponseHandler,
        successfulResponseHandler,
        abortSignal,
        fetch: fetch2
    });
var postToApi = async ({ url, headers = {}, body, successfulResponseHandler, failedResponseHandler, abortSignal, fetch: fetch2 = getOriginalFetch2() })=>{
    try {
        const response = await fetch2(url, {
            method: "POST",
            headers: withUserAgentSuffix(headers, `ai-sdk/provider-utils/${VERSION}`, getRuntimeEnvironmentUserAgent()),
            body: body.content,
            signal: abortSignal
        });
        const responseHeaders = extractResponseHeaders(response);
        if (!response.ok) {
            let errorInformation;
            try {
                errorInformation = await failedResponseHandler({
                    response,
                    url,
                    requestBodyValues: body.values
                });
            } catch (error) {
                if (isAbortError(error) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"].isInstance(error)) {
                    throw error;
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: "Failed to process error response",
                    cause: error,
                    statusCode: response.status,
                    url,
                    responseHeaders,
                    requestBodyValues: body.values
                });
            }
            throw errorInformation.value;
        }
        try {
            return await successfulResponseHandler({
                response,
                url,
                requestBodyValues: body.values
            });
        } catch (error) {
            if (error instanceof Error) {
                if (isAbortError(error) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"].isInstance(error)) {
                    throw error;
                }
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                message: "Failed to process successful response",
                cause: error,
                statusCode: response.status,
                url,
                responseHeaders,
                requestBodyValues: body.values
            });
        }
    } catch (error) {
        throw handleFetchError({
            error,
            url,
            requestBodyValues: body.values
        });
    }
};
// src/types/tool.ts
function tool(tool2) {
    return tool2;
}
function dynamicTool(tool2) {
    return {
        ...tool2,
        type: "dynamic"
    };
}
// src/provider-tool-factory.ts
function createProviderToolFactory({ id, inputSchema }) {
    return ({ execute, outputSchema, needsApproval, toModelOutput, onInputStart, onInputDelta, onInputAvailable, ...args })=>tool({
            type: "provider",
            id,
            args,
            inputSchema,
            outputSchema,
            execute,
            needsApproval,
            toModelOutput,
            onInputStart,
            onInputDelta,
            onInputAvailable
        });
}
function createProviderToolFactoryWithOutputSchema({ id, inputSchema, outputSchema, supportsDeferredResults }) {
    return ({ execute, needsApproval, toModelOutput, onInputStart, onInputDelta, onInputAvailable, ...args })=>tool({
            type: "provider",
            id,
            args,
            inputSchema,
            outputSchema,
            execute,
            needsApproval,
            toModelOutput,
            onInputStart,
            onInputDelta,
            onInputAvailable,
            supportsDeferredResults
        });
}
// src/remove-undefined-entries.ts
function removeUndefinedEntries(record) {
    return Object.fromEntries(Object.entries(record).filter(([_key, value])=>value != null));
}
// src/resolve.ts
async function resolve(value) {
    if (typeof value === "function") {
        value = value();
    }
    return Promise.resolve(value);
}
;
var createJsonErrorResponseHandler = ({ errorSchema, errorToMessage, isRetryable })=>async ({ response, url, requestBodyValues })=>{
        const responseBody = await response.text();
        const responseHeaders = extractResponseHeaders(response);
        if (responseBody.trim() === "") {
            return {
                responseHeaders,
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: response.statusText,
                    url,
                    requestBodyValues,
                    statusCode: response.status,
                    responseHeaders,
                    responseBody,
                    isRetryable: isRetryable == null ? void 0 : isRetryable(response)
                })
            };
        }
        try {
            const parsedError = await parseJSON({
                text: responseBody,
                schema: errorSchema
            });
            return {
                responseHeaders,
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: errorToMessage(parsedError),
                    url,
                    requestBodyValues,
                    statusCode: response.status,
                    responseHeaders,
                    responseBody,
                    data: parsedError,
                    isRetryable: isRetryable == null ? void 0 : isRetryable(response, parsedError)
                })
            };
        } catch (parseError) {
            return {
                responseHeaders,
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: response.statusText,
                    url,
                    requestBodyValues,
                    statusCode: response.status,
                    responseHeaders,
                    responseBody,
                    isRetryable: isRetryable == null ? void 0 : isRetryable(response)
                })
            };
        }
    };
var createEventSourceResponseHandler = (chunkSchema)=>async ({ response })=>{
        const responseHeaders = extractResponseHeaders(response);
        if (response.body == null) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyResponseBodyError"]({});
        }
        return {
            responseHeaders,
            value: parseJsonEventStream({
                stream: response.body,
                schema: chunkSchema
            })
        };
    };
var createJsonResponseHandler = (responseSchema)=>async ({ response, url, requestBodyValues })=>{
        const responseBody = await response.text();
        const parsedResult = await safeParseJSON({
            text: responseBody,
            schema: responseSchema
        });
        const responseHeaders = extractResponseHeaders(response);
        if (!parsedResult.success) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                message: "Invalid JSON response",
                cause: parsedResult.error,
                statusCode: response.status,
                responseHeaders,
                responseBody,
                url,
                requestBodyValues
            });
        }
        return {
            responseHeaders,
            value: parsedResult.value,
            rawValue: parsedResult.rawValue
        };
    };
var createBinaryResponseHandler = ()=>async ({ response, url, requestBodyValues })=>{
        const responseHeaders = extractResponseHeaders(response);
        if (!response.body) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                message: "Response body is empty",
                url,
                requestBodyValues,
                statusCode: response.status,
                responseHeaders,
                responseBody: void 0
            });
        }
        try {
            const buffer = await response.arrayBuffer();
            return {
                responseHeaders,
                value: new Uint8Array(buffer)
            };
        } catch (error) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                message: "Failed to read response as array buffer",
                url,
                requestBodyValues,
                statusCode: response.status,
                responseHeaders,
                responseBody: void 0,
                cause: error
            });
        }
    };
var createStatusCodeErrorResponseHandler = ()=>async ({ response, url, requestBodyValues })=>{
        const responseHeaders = extractResponseHeaders(response);
        const responseBody = await response.text();
        return {
            responseHeaders,
            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                message: response.statusText,
                url,
                requestBodyValues,
                statusCode: response.status,
                responseHeaders,
                responseBody
            })
        };
    };
// src/strip-file-extension.ts
function stripFileExtension(filename) {
    const firstDotIndex = filename.indexOf(".");
    return firstDotIndex === -1 ? filename : filename.slice(0, firstDotIndex);
}
// src/without-trailing-slash.ts
function withoutTrailingSlash(url) {
    return url == null ? void 0 : url.replace(/\/$/, "");
}
// src/is-async-iterable.ts
function isAsyncIterable(obj) {
    return obj != null && typeof obj[Symbol.asyncIterator] === "function";
}
// src/types/execute-tool.ts
async function* executeTool({ execute, input, options }) {
    const result = execute(input, options);
    if (isAsyncIterable(result)) {
        let lastOutput;
        for await (const output of result){
            lastOutput = output;
            yield {
                type: "preliminary",
                output
            };
        }
        yield {
            type: "final",
            output: lastOutput
        };
    } else {
        yield {
            type: "final",
            output: await result
        };
    }
}
;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/@vercel/oidc/dist/get-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var get_context_exports = {};
__export(get_context_exports, {
    SYMBOL_FOR_REQ_CONTEXT: ()=>SYMBOL_FOR_REQ_CONTEXT,
    getContext: ()=>getContext
});
module.exports = __toCommonJS(get_context_exports);
const SYMBOL_FOR_REQ_CONTEXT = Symbol.for("@vercel/request-context");
function getContext() {
    const fromSymbol = globalThis;
    return fromSymbol[SYMBOL_FOR_REQ_CONTEXT]?.get?.() ?? {};
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    SYMBOL_FOR_REQ_CONTEXT,
    getContext
});
}),
"[project]/node_modules/@vercel/oidc/dist/token-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var token_error_exports = {};
__export(token_error_exports, {
    VercelOidcTokenError: ()=>VercelOidcTokenError
});
module.exports = __toCommonJS(token_error_exports);
class VercelOidcTokenError extends Error {
    constructor(message, cause){
        super(message);
        this.name = "VercelOidcTokenError";
        this.cause = cause;
    }
    toString() {
        if (this.cause) {
            return `${this.name}: ${this.message}: ${this.cause}`;
        }
        return `${this.name}: ${this.message}`;
    }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    VercelOidcTokenError
});
}),
"[project]/node_modules/@vercel/oidc/dist/get-vercel-oidc-token.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var get_vercel_oidc_token_exports = {};
__export(get_vercel_oidc_token_exports, {
    getVercelOidcToken: ()=>getVercelOidcToken,
    getVercelOidcTokenSync: ()=>getVercelOidcTokenSync
});
module.exports = __toCommonJS(get_vercel_oidc_token_exports);
var import_get_context = __turbopack_context__.r("[project]/node_modules/@vercel/oidc/dist/get-context.js [app-ssr] (ecmascript)");
var import_token_error = __turbopack_context__.r("[project]/node_modules/@vercel/oidc/dist/token-error.js [app-ssr] (ecmascript)");
async function getVercelOidcToken(options) {
    let token = "";
    let err;
    try {
        token = getVercelOidcTokenSync();
    } catch (error) {
        err = error;
    }
    try {
        const [{ getTokenPayload, isExpired }, { refreshToken }] = await Promise.all([
            await __turbopack_context__.A("[project]/node_modules/@vercel/oidc/dist/token-util.js [app-ssr] (ecmascript, async loader)"),
            await __turbopack_context__.A("[project]/node_modules/@vercel/oidc/dist/token.js [app-ssr] (ecmascript, async loader)")
        ]);
        if (!token || isExpired(getTokenPayload(token), options?.expirationBufferMs)) {
            await refreshToken(options);
            token = getVercelOidcTokenSync();
        }
    } catch (error) {
        let message = err instanceof Error ? err.message : "";
        if (error instanceof Error) {
            message = `${message}
${error.message}`;
        }
        if (message) {
            throw new import_token_error.VercelOidcTokenError(message);
        }
        throw error;
    }
    return token;
}
function getVercelOidcTokenSync() {
    const token = (0, import_get_context.getContext)().headers?.["x-vercel-oidc-token"] ?? process.env.VERCEL_OIDC_TOKEN;
    if (!token) {
        throw new Error(`The 'x-vercel-oidc-token' header is missing from the request. Do you have the OIDC option enabled in the Vercel project settings?`);
    }
    return token;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    getVercelOidcToken,
    getVercelOidcTokenSync
});
}),
"[project]/node_modules/@vercel/oidc/dist/auth-errors.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var auth_errors_exports = {};
__export(auth_errors_exports, {
    AccessTokenMissingError: ()=>AccessTokenMissingError,
    RefreshAccessTokenFailedError: ()=>RefreshAccessTokenFailedError
});
module.exports = __toCommonJS(auth_errors_exports);
class AccessTokenMissingError extends Error {
    constructor(){
        super("No authentication found. Please log in with the Vercel CLI (vercel login).");
        this.name = "AccessTokenMissingError";
    }
}
class RefreshAccessTokenFailedError extends Error {
    constructor(cause){
        super("Failed to refresh authentication token.", {
            cause
        });
        this.name = "RefreshAccessTokenFailedError";
    }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    AccessTokenMissingError,
    RefreshAccessTokenFailedError
});
}),
"[project]/node_modules/@vercel/oidc/dist/token-io.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var token_io_exports = {};
__export(token_io_exports, {
    findRootDir: ()=>findRootDir,
    getUserDataDir: ()=>getUserDataDir
});
module.exports = __toCommonJS(token_io_exports);
var import_path = __toESM(__turbopack_context__.r("[externals]/path [external] (path, cjs)"));
var import_fs = __toESM(__turbopack_context__.r("[externals]/fs [external] (fs, cjs)"));
var import_os = __toESM(__turbopack_context__.r("[externals]/os [external] (os, cjs)"));
var import_token_error = __turbopack_context__.r("[project]/node_modules/@vercel/oidc/dist/token-error.js [app-ssr] (ecmascript)");
function findRootDir() {
    try {
        let dir = process.cwd();
        while(dir !== import_path.default.dirname(dir)){
            const pkgPath = import_path.default.join(dir, ".vercel");
            if (import_fs.default.existsSync(pkgPath)) {
                return dir;
            }
            dir = import_path.default.dirname(dir);
        }
    } catch (e) {
        throw new import_token_error.VercelOidcTokenError("Token refresh only supported in node server environments");
    }
    return null;
}
function getUserDataDir() {
    if (process.env.XDG_DATA_HOME) {
        return process.env.XDG_DATA_HOME;
    }
    switch(import_os.default.platform()){
        case "darwin":
            return import_path.default.join(import_os.default.homedir(), "Library/Application Support");
        case "linux":
            return import_path.default.join(import_os.default.homedir(), ".local/share");
        case "win32":
            if (process.env.LOCALAPPDATA) {
                return process.env.LOCALAPPDATA;
            }
            return null;
        default:
            return null;
    }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    findRootDir,
    getUserDataDir
});
}),
"[project]/node_modules/@vercel/oidc/dist/auth-config.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var auth_config_exports = {};
__export(auth_config_exports, {
    isValidAccessToken: ()=>isValidAccessToken,
    readAuthConfig: ()=>readAuthConfig,
    writeAuthConfig: ()=>writeAuthConfig
});
module.exports = __toCommonJS(auth_config_exports);
var fs = __toESM(__turbopack_context__.r("[externals]/fs [external] (fs, cjs)"));
var path = __toESM(__turbopack_context__.r("[externals]/path [external] (path, cjs)"));
var import_token_util = __turbopack_context__.r("[project]/node_modules/@vercel/oidc/dist/token-util.js [app-ssr] (ecmascript)");
function getAuthConfigPath() {
    const dataDir = (0, import_token_util.getVercelDataDir)();
    if (!dataDir) {
        throw new Error(`Unable to find Vercel CLI data directory. Your platform: ${process.platform}. Supported: darwin, linux, win32.`);
    }
    return path.join(dataDir, "auth.json");
}
function readAuthConfig() {
    try {
        const authPath = getAuthConfigPath();
        if (!fs.existsSync(authPath)) {
            return null;
        }
        const content = fs.readFileSync(authPath, "utf8");
        if (!content) {
            return null;
        }
        return JSON.parse(content);
    } catch (error) {
        return null;
    }
}
function writeAuthConfig(config) {
    const authPath = getAuthConfigPath();
    const authDir = path.dirname(authPath);
    if (!fs.existsSync(authDir)) {
        fs.mkdirSync(authDir, {
            mode: 504,
            recursive: true
        });
    }
    fs.writeFileSync(authPath, JSON.stringify(config, null, 2), {
        mode: 384
    });
}
function isValidAccessToken(authConfig, expirationBufferMs = 0) {
    if (!authConfig.token) return false;
    if (typeof authConfig.expiresAt !== "number") return true;
    const nowInSeconds = Math.floor(Date.now() / 1e3);
    const bufferInSeconds = expirationBufferMs / 1e3;
    return authConfig.expiresAt >= nowInSeconds + bufferInSeconds;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    isValidAccessToken,
    readAuthConfig,
    writeAuthConfig
});
}),
"[project]/node_modules/@vercel/oidc/dist/oauth.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var oauth_exports = {};
__export(oauth_exports, {
    processTokenResponse: ()=>processTokenResponse,
    refreshTokenRequest: ()=>refreshTokenRequest
});
module.exports = __toCommonJS(oauth_exports);
var import_os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
const VERCEL_ISSUER = "https://vercel.com";
const VERCEL_CLI_CLIENT_ID = "cl_HYyOPBNtFMfHhaUn9L4QPfTZz6TP47bp";
const userAgent = `@vercel/oidc node-${process.version} ${(0, import_os.platform)()} (${(0, import_os.arch)()}) ${(0, import_os.hostname)()}`;
let _tokenEndpoint = null;
async function getTokenEndpoint() {
    if (_tokenEndpoint) {
        return _tokenEndpoint;
    }
    const discoveryUrl = `${VERCEL_ISSUER}/.well-known/openid-configuration`;
    const response = await fetch(discoveryUrl, {
        headers: {
            "user-agent": userAgent
        }
    });
    if (!response.ok) {
        throw new Error("Failed to discover OAuth endpoints");
    }
    const metadata = await response.json();
    if (!metadata || typeof metadata.token_endpoint !== "string") {
        throw new Error("Invalid OAuth discovery response");
    }
    const endpoint = metadata.token_endpoint;
    _tokenEndpoint = endpoint;
    return endpoint;
}
async function refreshTokenRequest(options) {
    const tokenEndpoint = await getTokenEndpoint();
    return await fetch(tokenEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "user-agent": userAgent
        },
        body: new URLSearchParams({
            client_id: VERCEL_CLI_CLIENT_ID,
            grant_type: "refresh_token",
            ...options
        })
    });
}
async function processTokenResponse(response) {
    const json = await response.json();
    if (!response.ok) {
        const errorMsg = typeof json === "object" && json && "error" in json ? String(json.error) : "Token refresh failed";
        return [
            new Error(errorMsg)
        ];
    }
    if (typeof json !== "object" || json === null) {
        return [
            new Error("Invalid token response")
        ];
    }
    if (typeof json.access_token !== "string") {
        return [
            new Error("Missing access_token in response")
        ];
    }
    if (json.token_type !== "Bearer") {
        return [
            new Error("Invalid token_type in response")
        ];
    }
    if (typeof json.expires_in !== "number") {
        return [
            new Error("Missing expires_in in response")
        ];
    }
    return [
        null,
        json
    ];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    processTokenResponse,
    refreshTokenRequest
});
}),
"[project]/node_modules/@vercel/oidc/dist/token-util.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var token_util_exports = {};
__export(token_util_exports, {
    assertVercelOidcTokenResponse: ()=>assertVercelOidcTokenResponse,
    findProjectInfo: ()=>findProjectInfo,
    getTokenPayload: ()=>getTokenPayload,
    getVercelDataDir: ()=>getVercelDataDir,
    getVercelOidcToken: ()=>getVercelOidcToken,
    getVercelToken: ()=>getVercelToken,
    isExpired: ()=>isExpired,
    loadToken: ()=>loadToken,
    saveToken: ()=>saveToken
});
module.exports = __toCommonJS(token_util_exports);
var path = __toESM(__turbopack_context__.r("[externals]/path [external] (path, cjs)"));
var fs = __toESM(__turbopack_context__.r("[externals]/fs [external] (fs, cjs)"));
var import_token_error = __turbopack_context__.r("[project]/node_modules/@vercel/oidc/dist/token-error.js [app-ssr] (ecmascript)");
var import_token_io = __turbopack_context__.r("[project]/node_modules/@vercel/oidc/dist/token-io.js [app-ssr] (ecmascript)");
var import_auth_config = __turbopack_context__.r("[project]/node_modules/@vercel/oidc/dist/auth-config.js [app-ssr] (ecmascript)");
var import_oauth = __turbopack_context__.r("[project]/node_modules/@vercel/oidc/dist/oauth.js [app-ssr] (ecmascript)");
var import_auth_errors = __turbopack_context__.r("[project]/node_modules/@vercel/oidc/dist/auth-errors.js [app-ssr] (ecmascript)");
function getVercelDataDir() {
    const vercelFolder = "com.vercel.cli";
    const dataDir = (0, import_token_io.getUserDataDir)();
    if (!dataDir) {
        return null;
    }
    return path.join(dataDir, vercelFolder);
}
async function getVercelToken(options) {
    const authConfig = (0, import_auth_config.readAuthConfig)();
    if (!authConfig?.token) {
        throw new import_auth_errors.AccessTokenMissingError();
    }
    if ((0, import_auth_config.isValidAccessToken)(authConfig, options?.expirationBufferMs)) {
        return authConfig.token;
    }
    if (!authConfig.refreshToken) {
        (0, import_auth_config.writeAuthConfig)({});
        throw new import_auth_errors.RefreshAccessTokenFailedError("No refresh token available");
    }
    try {
        const tokenResponse = await (0, import_oauth.refreshTokenRequest)({
            refresh_token: authConfig.refreshToken
        });
        const [tokensError, tokens] = await (0, import_oauth.processTokenResponse)(tokenResponse);
        if (tokensError || !tokens) {
            (0, import_auth_config.writeAuthConfig)({});
            throw new import_auth_errors.RefreshAccessTokenFailedError(tokensError);
        }
        const updatedConfig = {
            token: tokens.access_token,
            expiresAt: Math.floor(Date.now() / 1e3) + tokens.expires_in
        };
        if (tokens.refresh_token) {
            updatedConfig.refreshToken = tokens.refresh_token;
        }
        (0, import_auth_config.writeAuthConfig)(updatedConfig);
        return updatedConfig.token;
    } catch (error) {
        (0, import_auth_config.writeAuthConfig)({});
        if (error instanceof import_auth_errors.AccessTokenMissingError || error instanceof import_auth_errors.RefreshAccessTokenFailedError) {
            throw error;
        }
        throw new import_auth_errors.RefreshAccessTokenFailedError(error);
    }
}
async function getVercelOidcToken(authToken, projectId, teamId) {
    const url = `https://api.vercel.com/v1/projects/${projectId}/token?source=vercel-oidc-refresh${teamId ? `&teamId=${teamId}` : ""}`;
    const res = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    });
    if (!res.ok) {
        throw new import_token_error.VercelOidcTokenError(`Failed to refresh OIDC token: ${res.statusText}`);
    }
    const tokenRes = await res.json();
    assertVercelOidcTokenResponse(tokenRes);
    return tokenRes;
}
function assertVercelOidcTokenResponse(res) {
    if (!res || typeof res !== "object") {
        throw new TypeError("Vercel OIDC token is malformed. Expected an object. Please run `vc env pull` and try again");
    }
    if (!("token" in res) || typeof res.token !== "string") {
        throw new TypeError("Vercel OIDC token is malformed. Expected a string-valued token property. Please run `vc env pull` and try again");
    }
}
function findProjectInfo() {
    const dir = (0, import_token_io.findRootDir)();
    if (!dir) {
        throw new import_token_error.VercelOidcTokenError("Unable to find project root directory. Have you linked your project with `vc link?`");
    }
    const prjPath = path.join(dir, ".vercel", "project.json");
    if (!fs.existsSync(prjPath)) {
        throw new import_token_error.VercelOidcTokenError("project.json not found, have you linked your project with `vc link?`");
    }
    const prj = JSON.parse(fs.readFileSync(prjPath, "utf8"));
    if (typeof prj.projectId !== "string" && typeof prj.orgId !== "string") {
        throw new TypeError("Expected a string-valued projectId property. Try running `vc link` to re-link your project.");
    }
    return {
        projectId: prj.projectId,
        teamId: prj.orgId
    };
}
function saveToken(token, projectId) {
    const dir = (0, import_token_io.getUserDataDir)();
    if (!dir) {
        throw new import_token_error.VercelOidcTokenError("Unable to find user data directory. Please reach out to Vercel support.");
    }
    const tokenPath = path.join(dir, "com.vercel.token", `${projectId}.json`);
    const tokenJson = JSON.stringify(token);
    fs.mkdirSync(path.dirname(tokenPath), {
        mode: 504,
        recursive: true
    });
    fs.writeFileSync(tokenPath, tokenJson);
    fs.chmodSync(tokenPath, 432);
    return;
}
function loadToken(projectId) {
    const dir = (0, import_token_io.getUserDataDir)();
    if (!dir) {
        throw new import_token_error.VercelOidcTokenError("Unable to find user data directory. Please reach out to Vercel support.");
    }
    const tokenPath = path.join(dir, "com.vercel.token", `${projectId}.json`);
    if (!fs.existsSync(tokenPath)) {
        return null;
    }
    const token = JSON.parse(fs.readFileSync(tokenPath, "utf8"));
    assertVercelOidcTokenResponse(token);
    return token;
}
function getTokenPayload(token) {
    const tokenParts = token.split(".");
    if (tokenParts.length !== 3) {
        throw new import_token_error.VercelOidcTokenError("Invalid token. Please run `vc env pull` and try again");
    }
    const base64 = tokenParts[1].replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64.padEnd(base64.length + (4 - base64.length % 4) % 4, "=");
    return JSON.parse(Buffer.from(padded, "base64").toString("utf8"));
}
function isExpired(token, bufferMs = 0) {
    return token.exp * 1e3 < Date.now() + bufferMs;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    assertVercelOidcTokenResponse,
    findProjectInfo,
    getTokenPayload,
    getVercelDataDir,
    getVercelOidcToken,
    getVercelToken,
    isExpired,
    loadToken,
    saveToken
});
}),
"[project]/node_modules/@vercel/oidc/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var src_exports = {};
__export(src_exports, {
    AccessTokenMissingError: ()=>import_auth_errors.AccessTokenMissingError,
    RefreshAccessTokenFailedError: ()=>import_auth_errors.RefreshAccessTokenFailedError,
    getContext: ()=>import_get_context.getContext,
    getVercelOidcToken: ()=>import_get_vercel_oidc_token.getVercelOidcToken,
    getVercelOidcTokenSync: ()=>import_get_vercel_oidc_token.getVercelOidcTokenSync,
    getVercelToken: ()=>import_token_util.getVercelToken
});
module.exports = __toCommonJS(src_exports);
var import_get_vercel_oidc_token = __turbopack_context__.r("[project]/node_modules/@vercel/oidc/dist/get-vercel-oidc-token.js [app-ssr] (ecmascript)");
var import_get_context = __turbopack_context__.r("[project]/node_modules/@vercel/oidc/dist/get-context.js [app-ssr] (ecmascript)");
var import_auth_errors = __turbopack_context__.r("[project]/node_modules/@vercel/oidc/dist/auth-errors.js [app-ssr] (ecmascript)");
var import_token_util = __turbopack_context__.r("[project]/node_modules/@vercel/oidc/dist/token-util.js [app-ssr] (ecmascript)");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    AccessTokenMissingError,
    RefreshAccessTokenFailedError,
    getContext,
    getVercelOidcToken,
    getVercelOidcTokenSync,
    getVercelToken
});
}),
"[project]/node_modules/@ai-sdk/gateway/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GatewayAuthenticationError",
    ()=>GatewayAuthenticationError,
    "GatewayError",
    ()=>GatewayError,
    "GatewayInternalServerError",
    ()=>GatewayInternalServerError,
    "GatewayInvalidRequestError",
    ()=>GatewayInvalidRequestError,
    "GatewayModelNotFoundError",
    ()=>GatewayModelNotFoundError,
    "GatewayRateLimitError",
    ()=>GatewayRateLimitError,
    "GatewayResponseError",
    ()=>GatewayResponseError,
    "createGateway",
    ()=>createGatewayProvider,
    "createGatewayProvider",
    ()=>createGatewayProvider,
    "gateway",
    ()=>gateway
]);
// src/gateway-provider.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@ai-sdk/provider-utils/dist/index.mjs [app-ssr] (ecmascript) <locals>");
// src/errors/as-gateway-error.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ai-sdk/provider/dist/index.mjs [app-ssr] (ecmascript)");
// src/errors/create-gateway-error.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
// src/vercel-environment.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$oidc$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vercel/oidc/dist/index.js [app-ssr] (ecmascript)");
;
;
;
// src/errors/gateway-error.ts
var marker = "vercel.ai.gateway.error";
var symbol = Symbol.for(marker);
var _a, _b;
var GatewayError = class _GatewayError extends (_b = Error, _a = symbol, _b) {
    constructor({ message, statusCode = 500, cause, generationId }){
        super(generationId ? `${message} [${generationId}]` : message);
        this[_a] = true;
        this.statusCode = statusCode;
        this.cause = cause;
        this.generationId = generationId;
    }
    /**
   * Checks if the given error is a Gateway Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is a Gateway Error, false otherwise.
   */ static isInstance(error) {
        return _GatewayError.hasMarker(error);
    }
    static hasMarker(error) {
        return typeof error === "object" && error !== null && symbol in error && error[symbol] === true;
    }
};
// src/errors/gateway-authentication-error.ts
var name = "GatewayAuthenticationError";
var marker2 = `vercel.ai.gateway.error.${name}`;
var symbol2 = Symbol.for(marker2);
var _a2, _b2;
var GatewayAuthenticationError = class _GatewayAuthenticationError extends (_b2 = GatewayError, _a2 = symbol2, _b2) {
    constructor({ message = "Authentication failed", statusCode = 401, cause, generationId } = {}){
        super({
            message,
            statusCode,
            cause,
            generationId
        });
        this[_a2] = true;
        // used in isInstance
        this.name = name;
        this.type = "authentication_error";
    }
    static isInstance(error) {
        return GatewayError.hasMarker(error) && symbol2 in error;
    }
    /**
   * Creates a contextual error message when authentication fails
   */ static createContextualError({ apiKeyProvided, oidcTokenProvided, message = "Authentication failed", statusCode = 401, cause, generationId }) {
        let contextualMessage;
        if (apiKeyProvided) {
            contextualMessage = `AI Gateway authentication failed: Invalid API key.

Create a new API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys

Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.`;
        } else if (oidcTokenProvided) {
            contextualMessage = `AI Gateway authentication failed: Invalid OIDC token.

Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.

Alternatively, use an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys`;
        } else {
            contextualMessage = `AI Gateway authentication failed: No authentication provided.

Option 1 - API key:
Create an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys
Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.

Option 2 - OIDC token:
Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.`;
        }
        return new _GatewayAuthenticationError({
            message: contextualMessage,
            statusCode,
            cause,
            generationId
        });
    }
};
// src/errors/gateway-invalid-request-error.ts
var name2 = "GatewayInvalidRequestError";
var marker3 = `vercel.ai.gateway.error.${name2}`;
var symbol3 = Symbol.for(marker3);
var _a3, _b3;
var GatewayInvalidRequestError = class extends (_b3 = GatewayError, _a3 = symbol3, _b3) {
    constructor({ message = "Invalid request", statusCode = 400, cause, generationId } = {}){
        super({
            message,
            statusCode,
            cause,
            generationId
        });
        this[_a3] = true;
        // used in isInstance
        this.name = name2;
        this.type = "invalid_request_error";
    }
    static isInstance(error) {
        return GatewayError.hasMarker(error) && symbol3 in error;
    }
};
// src/errors/gateway-rate-limit-error.ts
var name3 = "GatewayRateLimitError";
var marker4 = `vercel.ai.gateway.error.${name3}`;
var symbol4 = Symbol.for(marker4);
var _a4, _b4;
var GatewayRateLimitError = class extends (_b4 = GatewayError, _a4 = symbol4, _b4) {
    constructor({ message = "Rate limit exceeded", statusCode = 429, cause, generationId } = {}){
        super({
            message,
            statusCode,
            cause,
            generationId
        });
        this[_a4] = true;
        // used in isInstance
        this.name = name3;
        this.type = "rate_limit_exceeded";
    }
    static isInstance(error) {
        return GatewayError.hasMarker(error) && symbol4 in error;
    }
};
;
;
var name4 = "GatewayModelNotFoundError";
var marker5 = `vercel.ai.gateway.error.${name4}`;
var symbol5 = Symbol.for(marker5);
var modelNotFoundParamSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        modelId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })));
var _a5, _b5;
var GatewayModelNotFoundError = class extends (_b5 = GatewayError, _a5 = symbol5, _b5) {
    constructor({ message = "Model not found", statusCode = 404, modelId, cause, generationId } = {}){
        super({
            message,
            statusCode,
            cause,
            generationId
        });
        this[_a5] = true;
        // used in isInstance
        this.name = name4;
        this.type = "model_not_found";
        this.modelId = modelId;
    }
    static isInstance(error) {
        return GatewayError.hasMarker(error) && symbol5 in error;
    }
};
// src/errors/gateway-internal-server-error.ts
var name5 = "GatewayInternalServerError";
var marker6 = `vercel.ai.gateway.error.${name5}`;
var symbol6 = Symbol.for(marker6);
var _a6, _b6;
var GatewayInternalServerError = class extends (_b6 = GatewayError, _a6 = symbol6, _b6) {
    constructor({ message = "Internal server error", statusCode = 500, cause, generationId } = {}){
        super({
            message,
            statusCode,
            cause,
            generationId
        });
        this[_a6] = true;
        // used in isInstance
        this.name = name5;
        this.type = "internal_server_error";
    }
    static isInstance(error) {
        return GatewayError.hasMarker(error) && symbol6 in error;
    }
};
// src/errors/gateway-response-error.ts
var name6 = "GatewayResponseError";
var marker7 = `vercel.ai.gateway.error.${name6}`;
var symbol7 = Symbol.for(marker7);
var _a7, _b7;
var GatewayResponseError = class extends (_b7 = GatewayError, _a7 = symbol7, _b7) {
    constructor({ message = "Invalid response from Gateway", statusCode = 502, response, validationError, cause, generationId } = {}){
        super({
            message,
            statusCode,
            cause,
            generationId
        });
        this[_a7] = true;
        // used in isInstance
        this.name = name6;
        this.type = "response_error";
        this.response = response;
        this.validationError = validationError;
    }
    static isInstance(error) {
        return GatewayError.hasMarker(error) && symbol7 in error;
    }
};
;
async function createGatewayErrorFromResponse({ response, statusCode, defaultMessage = "Gateway request failed", cause, authMethod }) {
    var _a9;
    const parseResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["safeValidateTypes"])({
        value: response,
        schema: gatewayErrorResponseSchema
    });
    if (!parseResult.success) {
        const rawGenerationId = typeof response === "object" && response !== null && "generationId" in response ? response.generationId : void 0;
        return new GatewayResponseError({
            message: `Invalid error response format: ${defaultMessage}`,
            statusCode,
            response,
            validationError: parseResult.error,
            cause,
            generationId: rawGenerationId
        });
    }
    const validatedResponse = parseResult.value;
    const errorType = validatedResponse.error.type;
    const message = validatedResponse.error.message;
    const generationId = (_a9 = validatedResponse.generationId) != null ? _a9 : void 0;
    switch(errorType){
        case "authentication_error":
            return GatewayAuthenticationError.createContextualError({
                apiKeyProvided: authMethod === "api-key",
                oidcTokenProvided: authMethod === "oidc",
                statusCode,
                cause,
                generationId
            });
        case "invalid_request_error":
            return new GatewayInvalidRequestError({
                message,
                statusCode,
                cause,
                generationId
            });
        case "rate_limit_exceeded":
            return new GatewayRateLimitError({
                message,
                statusCode,
                cause,
                generationId
            });
        case "model_not_found":
            {
                const modelResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["safeValidateTypes"])({
                    value: validatedResponse.error.param,
                    schema: modelNotFoundParamSchema
                });
                return new GatewayModelNotFoundError({
                    message,
                    statusCode,
                    modelId: modelResult.success ? modelResult.value.modelId : void 0,
                    cause,
                    generationId
                });
            }
        case "internal_server_error":
            return new GatewayInternalServerError({
                message,
                statusCode,
                cause,
                generationId
            });
        default:
            return new GatewayInternalServerError({
                message,
                statusCode,
                cause,
                generationId
            });
    }
}
var gatewayErrorResponseSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
            param: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown().nullish(),
            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
            ]).nullish()
        }),
        generationId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish()
    })));
// src/errors/gateway-timeout-error.ts
var name7 = "GatewayTimeoutError";
var marker8 = `vercel.ai.gateway.error.${name7}`;
var symbol8 = Symbol.for(marker8);
var _a8, _b8;
var GatewayTimeoutError = class _GatewayTimeoutError extends (_b8 = GatewayError, _a8 = symbol8, _b8) {
    constructor({ message = "Request timed out", statusCode = 408, cause, generationId } = {}){
        super({
            message,
            statusCode,
            cause,
            generationId
        });
        this[_a8] = true;
        // used in isInstance
        this.name = name7;
        this.type = "timeout_error";
    }
    static isInstance(error) {
        return GatewayError.hasMarker(error) && symbol8 in error;
    }
    /**
   * Creates a helpful timeout error message with troubleshooting guidance
   */ static createTimeoutError({ originalMessage, statusCode = 408, cause, generationId }) {
        const message = `Gateway request timed out: ${originalMessage}

    This is a client-side timeout. To resolve this, increase your timeout configuration: https://vercel.com/docs/ai-gateway/capabilities/video-generation#extending-timeouts-for-node.js`;
        return new _GatewayTimeoutError({
            message,
            statusCode,
            cause,
            generationId
        });
    }
};
// src/errors/as-gateway-error.ts
function isTimeoutError(error) {
    if (!(error instanceof Error)) {
        return false;
    }
    const errorCode = error.code;
    if (typeof errorCode === "string") {
        const undiciTimeoutCodes = [
            "UND_ERR_HEADERS_TIMEOUT",
            "UND_ERR_BODY_TIMEOUT",
            "UND_ERR_CONNECT_TIMEOUT"
        ];
        return undiciTimeoutCodes.includes(errorCode);
    }
    return false;
}
async function asGatewayError(error, authMethod) {
    var _a9;
    if (GatewayError.isInstance(error)) {
        return error;
    }
    if (isTimeoutError(error)) {
        return GatewayTimeoutError.createTimeoutError({
            originalMessage: error instanceof Error ? error.message : "Unknown error",
            cause: error
        });
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"].isInstance(error)) {
        if (error.cause && isTimeoutError(error.cause)) {
            return GatewayTimeoutError.createTimeoutError({
                originalMessage: error.message,
                cause: error
            });
        }
        return await createGatewayErrorFromResponse({
            response: extractApiCallResponse(error),
            statusCode: (_a9 = error.statusCode) != null ? _a9 : 500,
            defaultMessage: "Gateway request failed",
            cause: error,
            authMethod
        });
    }
    return await createGatewayErrorFromResponse({
        response: {},
        statusCode: 500,
        defaultMessage: error instanceof Error ? `Gateway request failed: ${error.message}` : "Unknown Gateway error",
        cause: error,
        authMethod
    });
}
// src/errors/extract-api-call-response.ts
function extractApiCallResponse(error) {
    if (error.data !== void 0) {
        return error.data;
    }
    if (error.responseBody != null) {
        try {
            return JSON.parse(error.responseBody);
        } catch (e) {
            return error.responseBody;
        }
    }
    return {};
}
;
;
var GATEWAY_AUTH_METHOD_HEADER = "ai-gateway-auth-method";
async function parseAuthMethod(headers) {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["safeValidateTypes"])({
        value: headers[GATEWAY_AUTH_METHOD_HEADER],
        schema: gatewayAuthMethodSchema
    });
    return result.success ? result.value : void 0;
}
var gatewayAuthMethodSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("api-key"),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("oidc")
    ])));
;
;
// src/gateway-model-entry.ts
var KNOWN_MODEL_TYPES = [
    "embedding",
    "image",
    "language",
    "reranking",
    "video"
];
// src/gateway-fetch-metadata.ts
var GatewayFetchMetadata = class {
    constructor(config){
        this.config = config;
    }
    async getAvailableModels() {
        try {
            const { value } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFromApi"])({
                url: `${this.config.baseURL}/config`,
                headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.headers()),
                successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(gatewayAvailableModelsResponseSchema),
                failedResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
                    errorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(),
                    errorToMessage: (data)=>data
                }),
                fetch: this.config.fetch
            });
            return value;
        } catch (error) {
            throw await asGatewayError(error);
        }
    }
    async getCredits() {
        try {
            const baseUrl = new URL(this.config.baseURL);
            const { value } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFromApi"])({
                url: `${baseUrl.origin}/v1/credits`,
                headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.headers()),
                successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(gatewayCreditsResponseSchema),
                failedResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
                    errorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(),
                    errorToMessage: (data)=>data
                }),
                fetch: this.config.fetch
            });
            return value;
        } catch (error) {
            throw await asGatewayError(error);
        }
    }
};
var gatewayAvailableModelsResponseSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        models: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
            pricing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                input: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                output: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                input_cache_read: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
                input_cache_write: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish()
            }).transform(({ input, output, input_cache_read, input_cache_write })=>({
                    input,
                    output,
                    ...input_cache_read ? {
                        cachedInputTokens: input_cache_read
                    } : {},
                    ...input_cache_write ? {
                        cacheCreationInputTokens: input_cache_write
                    } : {}
                })).nullish(),
            specification: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                specificationVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("v3"),
                provider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                modelId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
            }),
            modelType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish()
        })).transform((models)=>models.filter((m)=>m.modelType == null || KNOWN_MODEL_TYPES.includes(m.modelType)))
    })));
var gatewayCreditsResponseSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        balance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        total_used: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    }).transform(({ balance, total_used })=>({
            balance,
            totalUsed: total_used
        }))));
;
;
var GatewaySpendReport = class {
    constructor(config){
        this.config = config;
    }
    async getSpendReport(params) {
        try {
            const baseUrl = new URL(this.config.baseURL);
            const searchParams = new URLSearchParams();
            searchParams.set("start_date", params.startDate);
            searchParams.set("end_date", params.endDate);
            if (params.groupBy) {
                searchParams.set("group_by", params.groupBy);
            }
            if (params.datePart) {
                searchParams.set("date_part", params.datePart);
            }
            if (params.userId) {
                searchParams.set("user_id", params.userId);
            }
            if (params.model) {
                searchParams.set("model", params.model);
            }
            if (params.provider) {
                searchParams.set("provider", params.provider);
            }
            if (params.credentialType) {
                searchParams.set("credential_type", params.credentialType);
            }
            if (params.tags && params.tags.length > 0) {
                searchParams.set("tags", params.tags.join(","));
            }
            const { value } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFromApi"])({
                url: `${baseUrl.origin}/v1/report?${searchParams.toString()}`,
                headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.headers()),
                successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(gatewaySpendReportResponseSchema),
                failedResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
                    errorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(),
                    errorToMessage: (data)=>data
                }),
                fetch: this.config.fetch
            });
            return value;
        } catch (error) {
            throw await asGatewayError(error);
        }
    }
};
var gatewaySpendReportResponseSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        results: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            day: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            hour: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            user: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            model: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            tag: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            provider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            credential_type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                "byok",
                "system"
            ]).optional(),
            total_cost: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            market_cost: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
            input_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
            output_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
            cached_input_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
            cache_creation_input_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
            reasoning_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
            request_count: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional()
        }).transform(({ credential_type, total_cost, market_cost, input_tokens, output_tokens, cached_input_tokens, cache_creation_input_tokens, reasoning_tokens, request_count, ...rest })=>({
                ...rest,
                ...credential_type !== void 0 ? {
                    credentialType: credential_type
                } : {},
                totalCost: total_cost,
                ...market_cost !== void 0 ? {
                    marketCost: market_cost
                } : {},
                ...input_tokens !== void 0 ? {
                    inputTokens: input_tokens
                } : {},
                ...output_tokens !== void 0 ? {
                    outputTokens: output_tokens
                } : {},
                ...cached_input_tokens !== void 0 ? {
                    cachedInputTokens: cached_input_tokens
                } : {},
                ...cache_creation_input_tokens !== void 0 ? {
                    cacheCreationInputTokens: cache_creation_input_tokens
                } : {},
                ...reasoning_tokens !== void 0 ? {
                    reasoningTokens: reasoning_tokens
                } : {},
                ...request_count !== void 0 ? {
                    requestCount: request_count
                } : {}
            })))
    })));
;
;
var GatewayGenerationInfoFetcher = class {
    constructor(config){
        this.config = config;
    }
    async getGenerationInfo(params) {
        try {
            const baseUrl = new URL(this.config.baseURL);
            const { value } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFromApi"])({
                url: `${baseUrl.origin}/v1/generation?id=${encodeURIComponent(params.id)}`,
                headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.headers()),
                successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(gatewayGenerationInfoResponseSchema),
                failedResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
                    errorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(),
                    errorToMessage: (data)=>data
                }),
                fetch: this.config.fetch
            });
            return value;
        } catch (error) {
            throw await asGatewayError(error);
        }
    }
};
var gatewayGenerationInfoResponseSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            total_cost: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            upstream_inference_cost: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            usage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            created_at: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            model: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            is_byok: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
            provider_name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            streamed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
            finish_reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            latency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            generation_time: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            native_tokens_prompt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            native_tokens_completion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            native_tokens_reasoning: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            native_tokens_cached: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            native_tokens_cache_creation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            billable_web_search_calls: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
        }).transform(({ total_cost, upstream_inference_cost, created_at, is_byok, provider_name, finish_reason, generation_time, native_tokens_prompt, native_tokens_completion, native_tokens_reasoning, native_tokens_cached, native_tokens_cache_creation, billable_web_search_calls, ...rest })=>({
                ...rest,
                totalCost: total_cost,
                upstreamInferenceCost: upstream_inference_cost,
                createdAt: created_at,
                isByok: is_byok,
                providerName: provider_name,
                finishReason: finish_reason,
                generationTime: generation_time,
                promptTokens: native_tokens_prompt,
                completionTokens: native_tokens_completion,
                reasoningTokens: native_tokens_reasoning,
                cachedTokens: native_tokens_cached,
                cacheCreationTokens: native_tokens_cache_creation,
                billableWebSearchCalls: billable_web_search_calls
            }))
    }).transform(({ data })=>data)));
;
;
var GatewayLanguageModel = class {
    constructor(modelId, config){
        this.modelId = modelId;
        this.config = config;
        this.specificationVersion = "v3";
        this.supportedUrls = {
            "*/*": [
                /.*/
            ]
        };
    }
    get provider() {
        return this.config.provider;
    }
    async getArgs(options) {
        const { abortSignal: _abortSignal, ...optionsWithoutSignal } = options;
        return {
            args: this.maybeEncodeFileParts(optionsWithoutSignal),
            warnings: []
        };
    }
    async doGenerate(options) {
        const { args, warnings } = await this.getArgs(options);
        const { abortSignal } = options;
        const resolvedHeaders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.headers());
        try {
            const { responseHeaders, value: responseBody, rawValue: rawResponse } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
                url: this.getUrl(),
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])(resolvedHeaders, options.headers, this.getModelConfigHeaders(this.modelId, false), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.o11yHeaders)),
                body: args,
                successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()),
                failedResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
                    errorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(),
                    errorToMessage: (data)=>data
                }),
                ...abortSignal && {
                    abortSignal
                },
                fetch: this.config.fetch
            });
            return {
                ...responseBody,
                request: {
                    body: args
                },
                response: {
                    headers: responseHeaders,
                    body: rawResponse
                },
                warnings
            };
        } catch (error) {
            throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
        }
    }
    async doStream(options) {
        const { args, warnings } = await this.getArgs(options);
        const { abortSignal } = options;
        const resolvedHeaders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.headers());
        try {
            const { value: response, responseHeaders } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
                url: this.getUrl(),
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])(resolvedHeaders, options.headers, this.getModelConfigHeaders(this.modelId, true), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.o11yHeaders)),
                body: args,
                successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEventSourceResponseHandler"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()),
                failedResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
                    errorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(),
                    errorToMessage: (data)=>data
                }),
                ...abortSignal && {
                    abortSignal
                },
                fetch: this.config.fetch
            });
            return {
                stream: response.pipeThrough(new TransformStream({
                    start (controller) {
                        if (warnings.length > 0) {
                            controller.enqueue({
                                type: "stream-start",
                                warnings
                            });
                        }
                    },
                    transform (chunk, controller) {
                        if (chunk.success) {
                            const streamPart = chunk.value;
                            if (streamPart.type === "raw" && !options.includeRawChunks) {
                                return;
                            }
                            if (streamPart.type === "response-metadata" && streamPart.timestamp && typeof streamPart.timestamp === "string") {
                                streamPart.timestamp = new Date(streamPart.timestamp);
                            }
                            controller.enqueue(streamPart);
                        } else {
                            controller.error(chunk.error);
                        }
                    }
                })),
                request: {
                    body: args
                },
                response: {
                    headers: responseHeaders
                }
            };
        } catch (error) {
            throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
        }
    }
    isFilePart(part) {
        return part && typeof part === "object" && "type" in part && part.type === "file";
    }
    /**
   * Encodes file parts in the prompt to base64. Mutates the passed options
   * instance directly to avoid copying the file data.
   * @param options - The options to encode.
   * @returns The options with the file parts encoded.
   */ maybeEncodeFileParts(options) {
        for (const message of options.prompt){
            for (const part of message.content){
                if (this.isFilePart(part)) {
                    const filePart = part;
                    if (filePart.data instanceof Uint8Array) {
                        const buffer = Uint8Array.from(filePart.data);
                        const base64Data = Buffer.from(buffer).toString("base64");
                        filePart.data = new URL(`data:${filePart.mediaType || "application/octet-stream"};base64,${base64Data}`);
                    }
                }
            }
        }
        return options;
    }
    getUrl() {
        return `${this.config.baseURL}/language-model`;
    }
    getModelConfigHeaders(modelId, streaming) {
        return {
            "ai-language-model-specification-version": "3",
            "ai-language-model-id": modelId,
            "ai-language-model-streaming": String(streaming)
        };
    }
};
;
;
var GatewayEmbeddingModel = class {
    constructor(modelId, config){
        this.modelId = modelId;
        this.config = config;
        this.specificationVersion = "v3";
        this.maxEmbeddingsPerCall = 2048;
        this.supportsParallelCalls = true;
    }
    get provider() {
        return this.config.provider;
    }
    async doEmbed({ values, headers, abortSignal, providerOptions }) {
        var _a9;
        const resolvedHeaders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.headers());
        try {
            const { responseHeaders, value: responseBody, rawValue } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
                url: this.getUrl(),
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])(resolvedHeaders, headers != null ? headers : {}, this.getModelConfigHeaders(), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.o11yHeaders)),
                body: {
                    values,
                    ...providerOptions ? {
                        providerOptions
                    } : {}
                },
                successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(gatewayEmbeddingResponseSchema),
                failedResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
                    errorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(),
                    errorToMessage: (data)=>data
                }),
                ...abortSignal && {
                    abortSignal
                },
                fetch: this.config.fetch
            });
            return {
                embeddings: responseBody.embeddings,
                usage: (_a9 = responseBody.usage) != null ? _a9 : void 0,
                providerMetadata: responseBody.providerMetadata,
                response: {
                    headers: responseHeaders,
                    body: rawValue
                },
                warnings: []
            };
        } catch (error) {
            throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
        }
    }
    getUrl() {
        return `${this.config.baseURL}/embedding-model`;
    }
    getModelConfigHeaders() {
        return {
            "ai-embedding-model-specification-version": "3",
            "ai-model-id": this.modelId
        };
    }
};
var gatewayEmbeddingResponseSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        embeddings: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number())),
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            tokens: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
        }).nullish(),
        providerMetadata: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown())).optional()
    })));
;
;
var GatewayImageModel = class {
    constructor(modelId, config){
        this.modelId = modelId;
        this.config = config;
        this.specificationVersion = "v3";
        // Set a very large number to prevent client-side splitting of requests
        this.maxImagesPerCall = Number.MAX_SAFE_INTEGER;
    }
    get provider() {
        return this.config.provider;
    }
    async doGenerate({ prompt, n, size, aspectRatio, seed, files, mask, providerOptions, headers, abortSignal }) {
        var _a9, _b9, _c, _d;
        const resolvedHeaders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.headers());
        try {
            const { responseHeaders, value: responseBody, rawValue } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
                url: this.getUrl(),
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])(resolvedHeaders, headers != null ? headers : {}, this.getModelConfigHeaders(), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.o11yHeaders)),
                body: {
                    prompt,
                    n,
                    ...size && {
                        size
                    },
                    ...aspectRatio && {
                        aspectRatio
                    },
                    ...seed && {
                        seed
                    },
                    ...providerOptions && {
                        providerOptions
                    },
                    ...files && {
                        files: files.map((file)=>maybeEncodeImageFile(file))
                    },
                    ...mask && {
                        mask: maybeEncodeImageFile(mask)
                    }
                },
                successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(gatewayImageResponseSchema),
                failedResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
                    errorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(),
                    errorToMessage: (data)=>data
                }),
                ...abortSignal && {
                    abortSignal
                },
                fetch: this.config.fetch
            });
            return {
                images: responseBody.images,
                // Always base64 strings from server
                warnings: (_a9 = responseBody.warnings) != null ? _a9 : [],
                providerMetadata: responseBody.providerMetadata,
                response: {
                    timestamp: /* @__PURE__ */ new Date(),
                    modelId: this.modelId,
                    headers: responseHeaders
                },
                ...responseBody.usage != null && {
                    usage: {
                        inputTokens: (_b9 = responseBody.usage.inputTokens) != null ? _b9 : void 0,
                        outputTokens: (_c = responseBody.usage.outputTokens) != null ? _c : void 0,
                        totalTokens: (_d = responseBody.usage.totalTokens) != null ? _d : void 0
                    }
                }
            };
        } catch (error) {
            throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
        }
    }
    getUrl() {
        return `${this.config.baseURL}/image-model`;
    }
    getModelConfigHeaders() {
        return {
            "ai-image-model-specification-version": "3",
            "ai-model-id": this.modelId
        };
    }
};
function maybeEncodeImageFile(file) {
    if (file.type === "file" && file.data instanceof Uint8Array) {
        return {
            ...file,
            data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertUint8ArrayToBase64"])(file.data)
        };
    }
    return file;
}
var providerMetadataEntrySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    images: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown()).optional()
}).catchall(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown());
var gatewayImageWarningSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("unsupported"),
        feature: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        details: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("compatibility"),
        feature: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        details: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("other"),
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })
]);
var gatewayImageUsageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    inputTokens: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
    outputTokens: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
    totalTokens: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish()
});
var gatewayImageResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    images: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    // Always base64 strings over the wire
    warnings: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(gatewayImageWarningSchema).optional(),
    providerMetadata: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), providerMetadataEntrySchema).optional(),
    usage: gatewayImageUsageSchema.optional()
});
;
;
;
var GatewayVideoModel = class {
    constructor(modelId, config){
        this.modelId = modelId;
        this.config = config;
        this.specificationVersion = "v3";
        // Set a very large number to prevent client-side splitting of requests
        this.maxVideosPerCall = Number.MAX_SAFE_INTEGER;
    }
    get provider() {
        return this.config.provider;
    }
    async doGenerate({ prompt, n, aspectRatio, resolution, duration, fps, seed, image, providerOptions, headers, abortSignal }) {
        var _a9;
        const resolvedHeaders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.headers());
        try {
            const { responseHeaders, value: responseBody } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
                url: this.getUrl(),
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])(resolvedHeaders, headers != null ? headers : {}, this.getModelConfigHeaders(), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.o11yHeaders), {
                    accept: "text/event-stream"
                }),
                body: {
                    prompt,
                    n,
                    ...aspectRatio && {
                        aspectRatio
                    },
                    ...resolution && {
                        resolution
                    },
                    ...duration && {
                        duration
                    },
                    ...fps && {
                        fps
                    },
                    ...seed && {
                        seed
                    },
                    ...providerOptions && {
                        providerOptions
                    },
                    ...image && {
                        image: maybeEncodeVideoFile(image)
                    }
                },
                successfulResponseHandler: async ({ response, url, requestBodyValues })=>{
                    if (response.body == null) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                            message: "SSE response body is empty",
                            url,
                            requestBodyValues,
                            statusCode: response.status
                        });
                    }
                    const eventStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseJsonEventStream"])({
                        stream: response.body,
                        schema: gatewayVideoEventSchema
                    });
                    const reader = eventStream.getReader();
                    const { done, value: parseResult } = await reader.read();
                    reader.releaseLock();
                    if (done || !parseResult) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                            message: "SSE stream ended without a data event",
                            url,
                            requestBodyValues,
                            statusCode: response.status
                        });
                    }
                    if (!parseResult.success) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                            message: "Failed to parse video SSE event",
                            cause: parseResult.error,
                            url,
                            requestBodyValues,
                            statusCode: response.status
                        });
                    }
                    const event = parseResult.value;
                    if (event.type === "error") {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                            message: event.message,
                            statusCode: event.statusCode,
                            url,
                            requestBodyValues,
                            responseHeaders: Object.fromEntries([
                                ...response.headers
                            ]),
                            responseBody: JSON.stringify(event),
                            data: {
                                error: {
                                    message: event.message,
                                    type: event.errorType,
                                    param: event.param
                                }
                            }
                        });
                    }
                    return {
                        value: {
                            videos: event.videos,
                            warnings: event.warnings,
                            providerMetadata: event.providerMetadata
                        },
                        responseHeaders: Object.fromEntries([
                            ...response.headers
                        ])
                    };
                },
                failedResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
                    errorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(),
                    errorToMessage: (data)=>data
                }),
                ...abortSignal && {
                    abortSignal
                },
                fetch: this.config.fetch
            });
            return {
                videos: responseBody.videos,
                warnings: (_a9 = responseBody.warnings) != null ? _a9 : [],
                providerMetadata: responseBody.providerMetadata,
                response: {
                    timestamp: /* @__PURE__ */ new Date(),
                    modelId: this.modelId,
                    headers: responseHeaders
                }
            };
        } catch (error) {
            throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
        }
    }
    getUrl() {
        return `${this.config.baseURL}/video-model`;
    }
    getModelConfigHeaders() {
        return {
            "ai-video-model-specification-version": "3",
            "ai-model-id": this.modelId
        };
    }
};
function maybeEncodeVideoFile(file) {
    if (file.type === "file" && file.data instanceof Uint8Array) {
        return {
            ...file,
            data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertUint8ArrayToBase64"])(file.data)
        };
    }
    return file;
}
var providerMetadataEntrySchema2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    videos: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown()).optional()
}).catchall(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown());
var gatewayVideoDataSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("url"),
        url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        mediaType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("base64"),
        data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        mediaType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })
]);
var gatewayVideoWarningSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("unsupported"),
        feature: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        details: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("compatibility"),
        feature: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        details: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("other"),
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })
]);
var gatewayVideoEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("result"),
        videos: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(gatewayVideoDataSchema),
        warnings: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(gatewayVideoWarningSchema).optional(),
        providerMetadata: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), providerMetadataEntrySchema2).optional()
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("error"),
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        errorType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        statusCode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        param: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown().nullable()
    })
]);
;
;
var GatewayRerankingModel = class {
    constructor(modelId, config){
        this.modelId = modelId;
        this.config = config;
        this.specificationVersion = "v3";
    }
    get provider() {
        return this.config.provider;
    }
    async doRerank({ documents, query, topN, headers, abortSignal, providerOptions }) {
        const resolvedHeaders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.headers());
        try {
            const { responseHeaders, value: responseBody, rawValue } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
                url: this.getUrl(),
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])(resolvedHeaders, headers != null ? headers : {}, this.getModelConfigHeaders(), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.o11yHeaders)),
                body: {
                    documents,
                    query,
                    ...topN != null ? {
                        topN
                    } : {},
                    ...providerOptions ? {
                        providerOptions
                    } : {}
                },
                successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(gatewayRerankingResponseSchema),
                failedResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
                    errorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(),
                    errorToMessage: (data)=>data
                }),
                ...abortSignal && {
                    abortSignal
                },
                fetch: this.config.fetch
            });
            return {
                ranking: responseBody.ranking,
                providerMetadata: responseBody.providerMetadata,
                response: {
                    headers: responseHeaders,
                    body: rawValue
                },
                warnings: []
            };
        } catch (error) {
            throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
        }
    }
    getUrl() {
        return `${this.config.baseURL}/reranking-model`;
    }
    getModelConfigHeaders() {
        return {
            "ai-reranking-model-specification-version": "3",
            "ai-model-id": this.modelId
        };
    }
};
var gatewayRerankingResponseSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        ranking: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            index: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            relevanceScore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
        })),
        providerMetadata: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown())).optional()
    })));
;
;
var parallelSearchInputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        objective: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("Natural-language description of the web research goal, including source or freshness guidance and broader context from the task. Maximum 5000 characters."),
        search_queries: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional().describe("Optional search queries to supplement the objective. Maximum 200 characters per query."),
        mode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "one-shot",
            "agentic"
        ]).optional().describe('Mode preset: "one-shot" for comprehensive results with longer excerpts (default), "agentic" for concise, token-efficient results for multi-step workflows.'),
        max_results: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional().describe("Maximum number of results to return (1-20). Defaults to 10 if not specified."),
        source_policy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            include_domains: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional().describe("List of domains to include in search results."),
            exclude_domains: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional().describe("List of domains to exclude from search results."),
            after_date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe("Only include results published after this date (ISO 8601 format).")
        }).optional().describe("Source policy for controlling which domains to include/exclude and freshness."),
        excerpts: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            max_chars_per_result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional().describe("Maximum characters per result."),
            max_chars_total: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional().describe("Maximum total characters across all results.")
        }).optional().describe("Excerpt configuration for controlling result length."),
        fetch_policy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            max_age_seconds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional().describe("Maximum age in seconds for cached content. Set to 0 to always fetch fresh content.")
        }).optional().describe("Fetch policy for controlling content freshness.")
    })));
var parallelSearchOutputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        // Success response
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            searchId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            results: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                excerpt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                publishDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
                relevanceScore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional()
            }))
        }),
        // Error response
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                "api_error",
                "rate_limit",
                "timeout",
                "invalid_input",
                "configuration_error",
                "unknown"
            ]),
            statusCode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        })
    ])));
var parallelSearchToolFactory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createProviderToolFactoryWithOutputSchema"])({
    id: "gateway.parallel_search",
    inputSchema: parallelSearchInputSchema,
    outputSchema: parallelSearchOutputSchema
});
var parallelSearch = (config = {})=>parallelSearchToolFactory(config);
;
;
var perplexitySearchInputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string())
        ]).describe("Search query (string) or multiple queries (array of up to 5 strings). Multi-query searches return combined results from all queries."),
        max_results: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional().describe("Maximum number of search results to return (1-20, default: 10)"),
        max_tokens_per_page: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional().describe("Maximum number of tokens to extract per search result page (256-2048, default: 2048)"),
        max_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional().describe("Maximum total tokens across all search results (default: 25000, max: 1000000)"),
        country: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe("Two-letter ISO 3166-1 alpha-2 country code for regional search results (e.g., 'US', 'GB', 'FR')"),
        search_domain_filter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional().describe("List of domains to include or exclude from search results (max 20). To include: ['nature.com', 'science.org']. To exclude: ['-example.com', '-spam.net']"),
        search_language_filter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional().describe("List of ISO 639-1 language codes to filter results (max 10, lowercase). Examples: ['en', 'fr', 'de']"),
        search_after_date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe("Include only results published after this date. Format: 'MM/DD/YYYY' (e.g., '3/1/2025'). Cannot be used with search_recency_filter."),
        search_before_date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe("Include only results published before this date. Format: 'MM/DD/YYYY' (e.g., '3/15/2025'). Cannot be used with search_recency_filter."),
        last_updated_after_filter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe("Include only results last updated after this date. Format: 'MM/DD/YYYY' (e.g., '3/1/2025'). Cannot be used with search_recency_filter."),
        last_updated_before_filter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe("Include only results last updated before this date. Format: 'MM/DD/YYYY' (e.g., '3/15/2025'). Cannot be used with search_recency_filter."),
        search_recency_filter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "day",
            "week",
            "month",
            "year"
        ]).optional().describe("Filter results by relative time period. Cannot be used with search_after_date or search_before_date.")
    })));
var perplexitySearchOutputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        // Success response
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            results: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                snippet: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
                lastUpdated: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
            })),
            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        // Error response
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                "api_error",
                "rate_limit",
                "timeout",
                "invalid_input",
                "unknown"
            ]),
            statusCode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        })
    ])));
var perplexitySearchToolFactory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createProviderToolFactoryWithOutputSchema"])({
    id: "gateway.perplexity_search",
    inputSchema: perplexitySearchInputSchema,
    outputSchema: perplexitySearchOutputSchema
});
var perplexitySearch = (config = {})=>perplexitySearchToolFactory(config);
// src/gateway-tools.ts
var gatewayTools = {
    /**
   * Search the web using Parallel AI's Search API for LLM-optimized excerpts.
   *
   * Takes a natural language objective and returns relevant excerpts,
   * replacing multiple keyword searches with a single call for broad
   * or complex queries. Supports different search types for depth vs
   * breadth tradeoffs.
   */ parallelSearch,
    /**
   * Search the web using Perplexity's Search API for real-time information,
   * news, research papers, and articles.
   *
   * Provides ranked search results with advanced filtering options including
   * domain, language, date range, and recency filters.
   */ perplexitySearch
};
;
;
async function getVercelRequestId() {
    var _a9;
    return (_a9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$oidc$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContext"])().headers) == null ? void 0 : _a9["x-vercel-id"];
}
;
// src/version.ts
var VERSION = ("TURBOPACK compile-time truthy", 1) ? "3.0.104" : "TURBOPACK unreachable";
// src/gateway-provider.ts
var AI_GATEWAY_PROTOCOL_VERSION = "0.0.1";
function createGatewayProvider(options = {}) {
    var _a9, _b9;
    let pendingMetadata = null;
    let metadataCache = null;
    const cacheRefreshMillis = (_a9 = options.metadataCacheRefreshMillis) != null ? _a9 : 1e3 * 60 * 5;
    let lastFetchTime = 0;
    const baseURL = (_b9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withoutTrailingSlash"])(options.baseURL)) != null ? _b9 : "https://ai-gateway.vercel.sh/v3/ai";
    const getHeaders = async ()=>{
        try {
            const auth = await getGatewayAuthToken(options);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withUserAgentSuffix"])({
                Authorization: `Bearer ${auth.token}`,
                "ai-gateway-protocol-version": AI_GATEWAY_PROTOCOL_VERSION,
                [GATEWAY_AUTH_METHOD_HEADER]: auth.authMethod,
                ...options.headers
            }, `ai-sdk/gateway/${VERSION}`);
        } catch (error) {
            throw GatewayAuthenticationError.createContextualError({
                apiKeyProvided: false,
                oidcTokenProvided: false,
                statusCode: 401,
                cause: error
            });
        }
    };
    const createO11yHeaders = ()=>{
        const deploymentId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadOptionalSetting"])({
            settingValue: void 0,
            environmentVariableName: "VERCEL_DEPLOYMENT_ID"
        });
        const environment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadOptionalSetting"])({
            settingValue: void 0,
            environmentVariableName: "VERCEL_ENV"
        });
        const region = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadOptionalSetting"])({
            settingValue: void 0,
            environmentVariableName: "VERCEL_REGION"
        });
        const projectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadOptionalSetting"])({
            settingValue: void 0,
            environmentVariableName: "VERCEL_PROJECT_ID"
        });
        return async ()=>{
            const requestId = await getVercelRequestId();
            return {
                ...deploymentId && {
                    "ai-o11y-deployment-id": deploymentId
                },
                ...environment && {
                    "ai-o11y-environment": environment
                },
                ...region && {
                    "ai-o11y-region": region
                },
                ...requestId && {
                    "ai-o11y-request-id": requestId
                },
                ...projectId && {
                    "ai-o11y-project-id": projectId
                }
            };
        };
    };
    const createLanguageModel = (modelId)=>{
        return new GatewayLanguageModel(modelId, {
            provider: "gateway",
            baseURL,
            headers: getHeaders,
            fetch: options.fetch,
            o11yHeaders: createO11yHeaders()
        });
    };
    const getAvailableModels = async ()=>{
        var _a10, _b10, _c;
        const now = (_c = (_b10 = (_a10 = options._internal) == null ? void 0 : _a10.currentDate) == null ? void 0 : _b10.call(_a10).getTime()) != null ? _c : Date.now();
        if (!pendingMetadata || now - lastFetchTime > cacheRefreshMillis) {
            lastFetchTime = now;
            pendingMetadata = new GatewayFetchMetadata({
                baseURL,
                headers: getHeaders,
                fetch: options.fetch
            }).getAvailableModels().then((metadata)=>{
                metadataCache = metadata;
                return metadata;
            }).catch(async (error)=>{
                throw await asGatewayError(error, await parseAuthMethod(await getHeaders()));
            });
        }
        return metadataCache ? Promise.resolve(metadataCache) : pendingMetadata;
    };
    const getCredits = async ()=>{
        return new GatewayFetchMetadata({
            baseURL,
            headers: getHeaders,
            fetch: options.fetch
        }).getCredits().catch(async (error)=>{
            throw await asGatewayError(error, await parseAuthMethod(await getHeaders()));
        });
    };
    const getSpendReport = async (params)=>{
        return new GatewaySpendReport({
            baseURL,
            headers: getHeaders,
            fetch: options.fetch
        }).getSpendReport(params).catch(async (error)=>{
            throw await asGatewayError(error, await parseAuthMethod(await getHeaders()));
        });
    };
    const getGenerationInfo = async (params)=>{
        return new GatewayGenerationInfoFetcher({
            baseURL,
            headers: getHeaders,
            fetch: options.fetch
        }).getGenerationInfo(params).catch(async (error)=>{
            throw await asGatewayError(error, await parseAuthMethod(await getHeaders()));
        });
    };
    const provider = function(modelId) {
        if (new.target) {
            throw new Error("The Gateway Provider model function cannot be called with the new keyword.");
        }
        return createLanguageModel(modelId);
    };
    provider.specificationVersion = "v3";
    provider.getAvailableModels = getAvailableModels;
    provider.getCredits = getCredits;
    provider.getSpendReport = getSpendReport;
    provider.getGenerationInfo = getGenerationInfo;
    provider.imageModel = (modelId)=>{
        return new GatewayImageModel(modelId, {
            provider: "gateway",
            baseURL,
            headers: getHeaders,
            fetch: options.fetch,
            o11yHeaders: createO11yHeaders()
        });
    };
    provider.languageModel = createLanguageModel;
    const createEmbeddingModel = (modelId)=>{
        return new GatewayEmbeddingModel(modelId, {
            provider: "gateway",
            baseURL,
            headers: getHeaders,
            fetch: options.fetch,
            o11yHeaders: createO11yHeaders()
        });
    };
    provider.embeddingModel = createEmbeddingModel;
    provider.textEmbeddingModel = createEmbeddingModel;
    provider.videoModel = (modelId)=>{
        return new GatewayVideoModel(modelId, {
            provider: "gateway",
            baseURL,
            headers: getHeaders,
            fetch: options.fetch,
            o11yHeaders: createO11yHeaders()
        });
    };
    const createRerankingModel = (modelId)=>{
        return new GatewayRerankingModel(modelId, {
            provider: "gateway",
            baseURL,
            headers: getHeaders,
            fetch: options.fetch,
            o11yHeaders: createO11yHeaders()
        });
    };
    provider.rerankingModel = createRerankingModel;
    provider.reranking = createRerankingModel;
    provider.chat = provider.languageModel;
    provider.embedding = provider.embeddingModel;
    provider.image = provider.imageModel;
    provider.video = provider.videoModel;
    provider.tools = gatewayTools;
    return provider;
}
var gateway = createGatewayProvider();
async function getGatewayAuthToken(options) {
    const apiKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadOptionalSetting"])({
        settingValue: options.apiKey,
        environmentVariableName: "AI_GATEWAY_API_KEY"
    });
    if (apiKey) {
        return {
            token: apiKey,
            authMethod: "api-key"
        };
    }
    const oidcToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$oidc$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVercelOidcToken"])();
    return {
        token: oidcToken,
        authMethod: "oidc"
    };
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/@opentelemetry/api/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s([
    "_globalThis",
    ()=>_globalThis
]);
var _globalThis = typeof globalThis === 'object' ? globalThis : /*TURBOPACK member replacement*/ __turbopack_context__.g; //# sourceMappingURL=globalThis.js.map
}),
"[project]/node_modules/@opentelemetry/api/build/esm/version.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // this is autogenerated file, see scripts/version-update.js
__turbopack_context__.s([
    "VERSION",
    ()=>VERSION
]);
var VERSION = '1.9.0'; //# sourceMappingURL=version.js.map
}),
"[project]/node_modules/@opentelemetry/api/build/esm/internal/semver.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_makeCompatibilityCheck",
    ()=>_makeCompatibilityCheck,
    "isCompatible",
    ()=>isCompatible
]);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/version.js [app-ssr] (ecmascript)");
;
var re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function _makeCompatibilityCheck(ownVersion) {
    var acceptedVersions = new Set([
        ownVersion
    ]);
    var rejectedVersions = new Set();
    var myVersionMatch = ownVersion.match(re);
    if (!myVersionMatch) {
        // we cannot guarantee compatibility so we always return noop
        return function() {
            return false;
        };
    }
    var ownVersionParsed = {
        major: +myVersionMatch[1],
        minor: +myVersionMatch[2],
        patch: +myVersionMatch[3],
        prerelease: myVersionMatch[4]
    };
    // if ownVersion has a prerelease tag, versions must match exactly
    if (ownVersionParsed.prerelease != null) {
        return function isExactmatch(globalVersion) {
            return globalVersion === ownVersion;
        };
    }
    function _reject(v) {
        rejectedVersions.add(v);
        return false;
    }
    function _accept(v) {
        acceptedVersions.add(v);
        return true;
    }
    return function isCompatible(globalVersion) {
        if (acceptedVersions.has(globalVersion)) {
            return true;
        }
        if (rejectedVersions.has(globalVersion)) {
            return false;
        }
        var globalVersionMatch = globalVersion.match(re);
        if (!globalVersionMatch) {
            // cannot parse other version
            // we cannot guarantee compatibility so we always noop
            return _reject(globalVersion);
        }
        var globalVersionParsed = {
            major: +globalVersionMatch[1],
            minor: +globalVersionMatch[2],
            patch: +globalVersionMatch[3],
            prerelease: globalVersionMatch[4]
        };
        // if globalVersion has a prerelease tag, versions must match exactly
        if (globalVersionParsed.prerelease != null) {
            return _reject(globalVersion);
        }
        // major versions must match
        if (ownVersionParsed.major !== globalVersionParsed.major) {
            return _reject(globalVersion);
        }
        if (ownVersionParsed.major === 0) {
            if (ownVersionParsed.minor === globalVersionParsed.minor && ownVersionParsed.patch <= globalVersionParsed.patch) {
                return _accept(globalVersion);
            }
            return _reject(globalVersion);
        }
        if (ownVersionParsed.minor <= globalVersionParsed.minor) {
            return _accept(globalVersion);
        }
        return _reject(globalVersion);
    };
}
var isCompatible = _makeCompatibilityCheck(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VERSION"]); //# sourceMappingURL=semver.js.map
}),
"[project]/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGlobal",
    ()=>getGlobal,
    "registerGlobal",
    ()=>registerGlobal,
    "unregisterGlobal",
    ()=>unregisterGlobal
]);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/version.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$semver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/internal/semver.js [app-ssr] (ecmascript)");
;
;
;
var major = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VERSION"].split('.')[0];
var GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for("opentelemetry.js.api." + major);
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_globalThis"];
function registerGlobal(type, instance, diag, allowOverride) {
    var _a;
    if (allowOverride === void 0) {
        allowOverride = false;
    }
    var api = _global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a !== void 0 ? _a : {
        version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VERSION"]
    };
    if (!allowOverride && api[type]) {
        // already registered an API of this type
        var err = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + type);
        diag.error(err.stack || err.message);
        return false;
    }
    if (api.version !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VERSION"]) {
        // All registered APIs must be of the same version exactly
        var err = new Error("@opentelemetry/api: Registration of version v" + api.version + " for " + type + " does not match previously registered API v" + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VERSION"]);
        diag.error(err.stack || err.message);
        return false;
    }
    api[type] = instance;
    diag.debug("@opentelemetry/api: Registered a global for " + type + " v" + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VERSION"] + ".");
    return true;
}
function getGlobal(type) {
    var _a, _b;
    var globalVersion = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a === void 0 ? void 0 : _a.version;
    if (!globalVersion || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$semver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCompatible"])(globalVersion)) {
        return;
    }
    return (_b = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b === void 0 ? void 0 : _b[type];
}
function unregisterGlobal(type, diag) {
    diag.debug("@opentelemetry/api: Unregistering a global for " + type + " v" + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VERSION"] + ".");
    var api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
    if (api) {
        delete api[type];
    }
} //# sourceMappingURL=global-utils.js.map
}),
"[project]/node_modules/@opentelemetry/api/build/esm/context/context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Get a key to uniquely identify a context value */ __turbopack_context__.s([
    "ROOT_CONTEXT",
    ()=>ROOT_CONTEXT,
    "createContextKey",
    ()=>createContextKey
]);
function createContextKey(description) {
    // The specification states that for the same input, multiple calls should
    // return different keys. Due to the nature of the JS dependency management
    // system, this creates problems where multiple versions of some package
    // could hold different keys for the same property.
    //
    // Therefore, we use Symbol.for which returns the same key for the same input.
    return Symbol.for(description);
}
var BaseContext = function() {
    /**
     * Construct a new context which inherits values from an optional parent context.
     *
     * @param parentContext a context from which to inherit values
     */ function BaseContext(parentContext) {
        // for minification
        var self = this;
        self._currentContext = parentContext ? new Map(parentContext) : new Map();
        self.getValue = function(key) {
            return self._currentContext.get(key);
        };
        self.setValue = function(key, value) {
            var context = new BaseContext(self._currentContext);
            context._currentContext.set(key, value);
            return context;
        };
        self.deleteValue = function(key) {
            var context = new BaseContext(self._currentContext);
            context._currentContext.delete(key);
            return context;
        };
    }
    return BaseContext;
}();
var ROOT_CONTEXT = new BaseContext(); //# sourceMappingURL=context.js.map
}),
"[project]/node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NoopContextManager",
    ()=>NoopContextManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/context/context.js [app-ssr] (ecmascript)");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __read = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
;
var NoopContextManager = function() {
    function NoopContextManager() {}
    NoopContextManager.prototype.active = function() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROOT_CONTEXT"];
    };
    NoopContextManager.prototype.with = function(_context, fn, thisArg) {
        var args = [];
        for(var _i = 3; _i < arguments.length; _i++){
            args[_i - 3] = arguments[_i];
        }
        return fn.call.apply(fn, __spreadArray([
            thisArg
        ], __read(args), false));
    };
    NoopContextManager.prototype.bind = function(_context, target) {
        return target;
    };
    NoopContextManager.prototype.enable = function() {
        return this;
    };
    NoopContextManager.prototype.disable = function() {
        return this;
    };
    return NoopContextManager;
}();
;
 //# sourceMappingURL=NoopContextManager.js.map
}),
"[project]/node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DiagComponentLogger",
    ()=>DiagComponentLogger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __read = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
;
/**
 * Component Logger which is meant to be used as part of any component which
 * will add automatically additional namespace in front of the log message.
 * It will then forward all message to global diag logger
 * @example
 * const cLogger = diag.createComponentLogger({ namespace: '@opentelemetry/instrumentation-http' });
 * cLogger.debug('test');
 * // @opentelemetry/instrumentation-http test
 */ var DiagComponentLogger = function() {
    function DiagComponentLogger(props) {
        this._namespace = props.namespace || 'DiagComponentLogger';
    }
    DiagComponentLogger.prototype.debug = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        return logProxy('debug', this._namespace, args);
    };
    DiagComponentLogger.prototype.error = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        return logProxy('error', this._namespace, args);
    };
    DiagComponentLogger.prototype.info = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        return logProxy('info', this._namespace, args);
    };
    DiagComponentLogger.prototype.warn = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        return logProxy('warn', this._namespace, args);
    };
    DiagComponentLogger.prototype.verbose = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        return logProxy('verbose', this._namespace, args);
    };
    return DiagComponentLogger;
}();
;
function logProxy(funcName, namespace, args) {
    var logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGlobal"])('diag');
    // shortcut if logger not set
    if (!logger) {
        return;
    }
    args.unshift(namespace);
    return logger[funcName].apply(logger, __spreadArray([], __read(args), false));
} //# sourceMappingURL=ComponentLogger.js.map
}),
"[project]/node_modules/@opentelemetry/api/build/esm/diag/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Defines the available internal logging levels for the diagnostic logger, the numeric values
 * of the levels are defined to match the original values from the initial LogLevel to avoid
 * compatibility/migration issues for any implementation that assume the numeric ordering.
 */ __turbopack_context__.s([
    "DiagLogLevel",
    ()=>DiagLogLevel
]);
var DiagLogLevel;
(function(DiagLogLevel) {
    /** Diagnostic Logging level setting to disable all logging (except and forced logs) */ DiagLogLevel[DiagLogLevel["NONE"] = 0] = "NONE";
    /** Identifies an error scenario */ DiagLogLevel[DiagLogLevel["ERROR"] = 30] = "ERROR";
    /** Identifies a warning scenario */ DiagLogLevel[DiagLogLevel["WARN"] = 50] = "WARN";
    /** General informational log message */ DiagLogLevel[DiagLogLevel["INFO"] = 60] = "INFO";
    /** General debug log message */ DiagLogLevel[DiagLogLevel["DEBUG"] = 70] = "DEBUG";
    /**
     * Detailed trace level logging should only be used for development, should only be set
     * in a development environment.
     */ DiagLogLevel[DiagLogLevel["VERBOSE"] = 80] = "VERBOSE";
    /** Used to set the logging level to include all logging */ DiagLogLevel[DiagLogLevel["ALL"] = 9999] = "ALL";
})(DiagLogLevel || (DiagLogLevel = {})); //# sourceMappingURL=types.js.map
}),
"[project]/node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createLogLevelDiagLogger",
    ()=>createLogLevelDiagLogger
]);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/diag/types.js [app-ssr] (ecmascript)");
;
function createLogLevelDiagLogger(maxLevel, logger) {
    if (maxLevel < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiagLogLevel"].NONE) {
        maxLevel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiagLogLevel"].NONE;
    } else if (maxLevel > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiagLogLevel"].ALL) {
        maxLevel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiagLogLevel"].ALL;
    }
    // In case the logger is null or undefined
    logger = logger || {};
    function _filterFunc(funcName, theLevel) {
        var theFunc = logger[funcName];
        if (typeof theFunc === 'function' && maxLevel >= theLevel) {
            return theFunc.bind(logger);
        }
        return function() {};
    }
    return {
        error: _filterFunc('error', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiagLogLevel"].ERROR),
        warn: _filterFunc('warn', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiagLogLevel"].WARN),
        info: _filterFunc('info', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiagLogLevel"].INFO),
        debug: _filterFunc('debug', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiagLogLevel"].DEBUG),
        verbose: _filterFunc('verbose', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiagLogLevel"].VERBOSE)
    };
} //# sourceMappingURL=logLevelLogger.js.map
}),
"[project]/node_modules/@opentelemetry/api/build/esm/api/diag.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DiagAPI",
    ()=>DiagAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$ComponentLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$internal$2f$logLevelLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/diag/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __read = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
;
;
;
;
var API_NAME = 'diag';
/**
 * Singleton object which represents the entry point to the OpenTelemetry internal
 * diagnostic API
 */ var DiagAPI = function() {
    /**
     * Private internal constructor
     * @private
     */ function DiagAPI() {
        function _logProxy(funcName) {
            return function() {
                var args = [];
                for(var _i = 0; _i < arguments.length; _i++){
                    args[_i] = arguments[_i];
                }
                var logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGlobal"])('diag');
                // shortcut if logger not set
                if (!logger) return;
                return logger[funcName].apply(logger, __spreadArray([], __read(args), false));
            };
        }
        // Using self local variable for minification purposes as 'this' cannot be minified
        var self = this;
        // DiagAPI specific functions
        var setLogger = function(logger, optionsOrLogLevel) {
            var _a, _b, _c;
            if (optionsOrLogLevel === void 0) {
                optionsOrLogLevel = {
                    logLevel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiagLogLevel"].INFO
                };
            }
            if (logger === self) {
                // There isn't much we can do here.
                // Logging to the console might break the user application.
                // Try to log to self. If a logger was previously registered it will receive the log.
                var err = new Error('Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation');
                self.error((_a = err.stack) !== null && _a !== void 0 ? _a : err.message);
                return false;
            }
            if (typeof optionsOrLogLevel === 'number') {
                optionsOrLogLevel = {
                    logLevel: optionsOrLogLevel
                };
            }
            var oldLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGlobal"])('diag');
            var newLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$internal$2f$logLevelLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogLevelDiagLogger"])((_b = optionsOrLogLevel.logLevel) !== null && _b !== void 0 ? _b : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiagLogLevel"].INFO, logger);
            // There already is an logger registered. We'll let it know before overwriting it.
            if (oldLogger && !optionsOrLogLevel.suppressOverrideMessage) {
                var stack = (_c = new Error().stack) !== null && _c !== void 0 ? _c : '<failed to generate stacktrace>';
                oldLogger.warn("Current logger will be overwritten from " + stack);
                newLogger.warn("Current logger will overwrite one already registered from " + stack);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerGlobal"])('diag', newLogger, self, true);
        };
        self.setLogger = setLogger;
        self.disable = function() {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unregisterGlobal"])(API_NAME, self);
        };
        self.createComponentLogger = function(options) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$ComponentLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiagComponentLogger"](options);
        };
        self.verbose = _logProxy('verbose');
        self.debug = _logProxy('debug');
        self.info = _logProxy('info');
        self.warn = _logProxy('warn');
        self.error = _logProxy('error');
    }
    /** Get the singleton instance of the DiagAPI API */ DiagAPI.instance = function() {
        if (!this._instance) {
            this._instance = new DiagAPI();
        }
        return this._instance;
    };
    return DiagAPI;
}();
;
 //# sourceMappingURL=diag.js.map
}),
"[project]/node_modules/@opentelemetry/api/build/esm/api/context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContextAPI",
    ()=>ContextAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$NoopContextManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/api/diag.js [app-ssr] (ecmascript)");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __read = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
;
;
;
var API_NAME = 'context';
var NOOP_CONTEXT_MANAGER = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$NoopContextManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopContextManager"]();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Context API
 */ var ContextAPI = function() {
    /** Empty private constructor prevents end users from constructing a new instance of the API */ function ContextAPI() {}
    /** Get the singleton instance of the Context API */ ContextAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new ContextAPI();
        }
        return this._instance;
    };
    /**
     * Set the current context manager.
     *
     * @returns true if the context manager was successfully registered, else false
     */ ContextAPI.prototype.setGlobalContextManager = function(contextManager) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerGlobal"])(API_NAME, contextManager, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiagAPI"].instance());
    };
    /**
     * Get the currently active context
     */ ContextAPI.prototype.active = function() {
        return this._getContextManager().active();
    };
    /**
     * Execute a function with an active context
     *
     * @param context context to be active during function execution
     * @param fn function to execute in a context
     * @param thisArg optional receiver to be used for calling fn
     * @param args optional arguments forwarded to fn
     */ ContextAPI.prototype.with = function(context, fn, thisArg) {
        var _a;
        var args = [];
        for(var _i = 3; _i < arguments.length; _i++){
            args[_i - 3] = arguments[_i];
        }
        return (_a = this._getContextManager()).with.apply(_a, __spreadArray([
            context,
            fn,
            thisArg
        ], __read(args), false));
    };
    /**
     * Bind a context to a target function or event emitter
     *
     * @param context context to bind to the event emitter or function. Defaults to the currently active context
     * @param target function or event emitter to bind
     */ ContextAPI.prototype.bind = function(context, target) {
        return this._getContextManager().bind(context, target);
    };
    ContextAPI.prototype._getContextManager = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGlobal"])(API_NAME) || NOOP_CONTEXT_MANAGER;
    };
    /** Disable and remove the global context manager */ ContextAPI.prototype.disable = function() {
        this._getContextManager().disable();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unregisterGlobal"])(API_NAME, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiagAPI"].instance());
    };
    return ContextAPI;
}();
;
 //# sourceMappingURL=context.js.map
}),
"[project]/node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "TraceFlags",
    ()=>TraceFlags
]);
var TraceFlags;
(function(TraceFlags) {
    /** Represents no flag set. */ TraceFlags[TraceFlags["NONE"] = 0] = "NONE";
    /** Bit to represent whether trace is sampled in trace flags. */ TraceFlags[TraceFlags["SAMPLED"] = 1] = "SAMPLED";
})(TraceFlags || (TraceFlags = {})); //# sourceMappingURL=trace_flags.js.map
}),
"[project]/node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INVALID_SPANID",
    ()=>INVALID_SPANID,
    "INVALID_SPAN_CONTEXT",
    ()=>INVALID_SPAN_CONTEXT,
    "INVALID_TRACEID",
    ()=>INVALID_TRACEID
]);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$trace_flags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js [app-ssr] (ecmascript)");
;
var INVALID_SPANID = '0000000000000000';
var INVALID_TRACEID = '00000000000000000000000000000000';
var INVALID_SPAN_CONTEXT = {
    traceId: INVALID_TRACEID,
    spanId: INVALID_SPANID,
    traceFlags: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$trace_flags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TraceFlags"].NONE
}; //# sourceMappingURL=invalid-span-constants.js.map
}),
"[project]/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NonRecordingSpan",
    ()=>NonRecordingSpan
]);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$invalid$2d$span$2d$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js [app-ssr] (ecmascript)");
;
/**
 * The NonRecordingSpan is the default {@link Span} that is used when no Span
 * implementation is available. All operations are no-op including context
 * propagation.
 */ var NonRecordingSpan = function() {
    function NonRecordingSpan(_spanContext) {
        if (_spanContext === void 0) {
            _spanContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$invalid$2d$span$2d$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID_SPAN_CONTEXT"];
        }
        this._spanContext = _spanContext;
    }
    // Returns a SpanContext.
    NonRecordingSpan.prototype.spanContext = function() {
        return this._spanContext;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setAttribute = function(_key, _value) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setAttributes = function(_attributes) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.addEvent = function(_name, _attributes) {
        return this;
    };
    NonRecordingSpan.prototype.addLink = function(_link) {
        return this;
    };
    NonRecordingSpan.prototype.addLinks = function(_links) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setStatus = function(_status) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.updateName = function(_name) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.end = function(_endTime) {};
    // isRecording always returns false for NonRecordingSpan.
    NonRecordingSpan.prototype.isRecording = function() {
        return false;
    };
    // By default does nothing
    NonRecordingSpan.prototype.recordException = function(_exception, _time) {};
    return NonRecordingSpan;
}();
;
 //# sourceMappingURL=NonRecordingSpan.js.map
}),
"[project]/node_modules/@opentelemetry/api/build/esm/trace/context-utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteSpan",
    ()=>deleteSpan,
    "getActiveSpan",
    ()=>getActiveSpan,
    "getSpan",
    ()=>getSpan,
    "getSpanContext",
    ()=>getSpanContext,
    "setSpan",
    ()=>setSpan,
    "setSpanContext",
    ()=>setSpanContext
]);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/context/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/api/context.js [app-ssr] (ecmascript)");
;
;
;
/**
 * span key
 */ var SPAN_KEY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextKey"])('OpenTelemetry Context Key SPAN');
function getSpan(context) {
    return context.getValue(SPAN_KEY) || undefined;
}
function getActiveSpan() {
    return getSpan(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextAPI"].getInstance().active());
}
function setSpan(context, span) {
    return context.setValue(SPAN_KEY, span);
}
function deleteSpan(context) {
    return context.deleteValue(SPAN_KEY);
}
function setSpanContext(context, spanContext) {
    return setSpan(context, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NonRecordingSpan"](spanContext));
}
function getSpanContext(context) {
    var _a;
    return (_a = getSpan(context)) === null || _a === void 0 ? void 0 : _a.spanContext();
} //# sourceMappingURL=context-utils.js.map
}),
"[project]/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isSpanContextValid",
    ()=>isSpanContextValid,
    "isValidSpanId",
    ()=>isValidSpanId,
    "isValidTraceId",
    ()=>isValidTraceId,
    "wrapSpanContext",
    ()=>wrapSpanContext
]);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$invalid$2d$span$2d$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js [app-ssr] (ecmascript)");
;
;
var VALID_TRACEID_REGEX = /^([0-9a-f]{32})$/i;
var VALID_SPANID_REGEX = /^[0-9a-f]{16}$/i;
function isValidTraceId(traceId) {
    return VALID_TRACEID_REGEX.test(traceId) && traceId !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$invalid$2d$span$2d$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID_TRACEID"];
}
function isValidSpanId(spanId) {
    return VALID_SPANID_REGEX.test(spanId) && spanId !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$invalid$2d$span$2d$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID_SPANID"];
}
function isSpanContextValid(spanContext) {
    return isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId);
}
function wrapSpanContext(spanContext) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NonRecordingSpan"](spanContext);
} //# sourceMappingURL=spancontext-utils.js.map
}),
"[project]/node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NoopTracer",
    ()=>NoopTracer
]);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/api/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/trace/context-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js [app-ssr] (ecmascript)");
;
;
;
;
var contextApi = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextAPI"].getInstance();
/**
 * No-op implementations of {@link Tracer}.
 */ var NoopTracer = function() {
    function NoopTracer() {}
    // startSpan starts a noop span.
    NoopTracer.prototype.startSpan = function(name, options, context) {
        if (context === void 0) {
            context = contextApi.active();
        }
        var root = Boolean(options === null || options === void 0 ? void 0 : options.root);
        if (root) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NonRecordingSpan"]();
        }
        var parentFromContext = context && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpanContext"])(context);
        if (isSpanContext(parentFromContext) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSpanContextValid"])(parentFromContext)) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NonRecordingSpan"](parentFromContext);
        } else {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NonRecordingSpan"]();
        }
    };
    NoopTracer.prototype.startActiveSpan = function(name, arg2, arg3, arg4) {
        var opts;
        var ctx;
        var fn;
        if (arguments.length < 2) {
            return;
        } else if (arguments.length === 2) {
            fn = arg2;
        } else if (arguments.length === 3) {
            opts = arg2;
            fn = arg3;
        } else {
            opts = arg2;
            ctx = arg3;
            fn = arg4;
        }
        var parentContext = ctx !== null && ctx !== void 0 ? ctx : contextApi.active();
        var span = this.startSpan(name, opts, parentContext);
        var contextWithSpanSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setSpan"])(parentContext, span);
        return contextApi.with(contextWithSpanSet, fn, undefined, span);
    };
    return NoopTracer;
}();
;
function isSpanContext(spanContext) {
    return typeof spanContext === 'object' && typeof spanContext['spanId'] === 'string' && typeof spanContext['traceId'] === 'string' && typeof spanContext['traceFlags'] === 'number';
} //# sourceMappingURL=NoopTracer.js.map
}),
"[project]/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProxyTracer",
    ()=>ProxyTracer
]);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NoopTracer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js [app-ssr] (ecmascript)");
;
var NOOP_TRACER = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NoopTracer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopTracer"]();
/**
 * Proxy tracer provided by the proxy tracer provider
 */ var ProxyTracer = function() {
    function ProxyTracer(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    ProxyTracer.prototype.startSpan = function(name, options, context) {
        return this._getTracer().startSpan(name, options, context);
    };
    ProxyTracer.prototype.startActiveSpan = function(_name, _options, _context, _fn) {
        var tracer = this._getTracer();
        return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
    };
    /**
     * Try to get a tracer from the proxy tracer provider.
     * If the proxy tracer provider has no delegate, return a noop tracer.
     */ ProxyTracer.prototype._getTracer = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
        if (!tracer) {
            return NOOP_TRACER;
        }
        this._delegate = tracer;
        return this._delegate;
    };
    return ProxyTracer;
}();
;
 //# sourceMappingURL=ProxyTracer.js.map
}),
"[project]/node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NoopTracerProvider",
    ()=>NoopTracerProvider
]);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NoopTracer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js [app-ssr] (ecmascript)");
;
/**
 * An implementation of the {@link TracerProvider} which returns an impotent
 * Tracer for all calls to `getTracer`.
 *
 * All operations are no-op.
 */ var NoopTracerProvider = function() {
    function NoopTracerProvider() {}
    NoopTracerProvider.prototype.getTracer = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NoopTracer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopTracer"]();
    };
    return NoopTracerProvider;
}();
;
 //# sourceMappingURL=NoopTracerProvider.js.map
}),
"[project]/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProxyTracerProvider",
    ()=>ProxyTracerProvider
]);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$ProxyTracer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NoopTracerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js [app-ssr] (ecmascript)");
;
;
var NOOP_TRACER_PROVIDER = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NoopTracerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopTracerProvider"]();
/**
 * Tracer provider which provides {@link ProxyTracer}s.
 *
 * Before a delegate is set, tracers provided are NoOp.
 *   When a delegate is set, traces are provided from the delegate.
 *   When a delegate is set after tracers have already been provided,
 *   all tracers already provided will use the provided delegate implementation.
 */ var ProxyTracerProvider = function() {
    function ProxyTracerProvider() {}
    /**
     * Get a {@link ProxyTracer}
     */ ProxyTracerProvider.prototype.getTracer = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateTracer(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$ProxyTracer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyTracer"](this, name, version, options);
    };
    ProxyTracerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : NOOP_TRACER_PROVIDER;
    };
    /**
     * Set the delegate tracer provider
     */ ProxyTracerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyTracerProvider.prototype.getDelegateTracer = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getTracer(name, version, options);
    };
    return ProxyTracerProvider;
}();
;
 //# sourceMappingURL=ProxyTracerProvider.js.map
}),
"[project]/node_modules/@opentelemetry/api/build/esm/api/trace.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TraceAPI",
    ()=>TraceAPI
]);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$ProxyTracerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/trace/context-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/api/diag.js [app-ssr] (ecmascript)");
;
;
;
;
;
var API_NAME = 'trace';
/**
 * Singleton object which represents the entry point to the OpenTelemetry Tracing API
 */ var TraceAPI = function() {
    /** Empty private constructor prevents end users from constructing a new instance of the API */ function TraceAPI() {
        this._proxyTracerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$ProxyTracerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyTracerProvider"]();
        this.wrapSpanContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapSpanContext"];
        this.isSpanContextValid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSpanContextValid"];
        this.deleteSpan = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteSpan"];
        this.getSpan = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpan"];
        this.getActiveSpan = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActiveSpan"];
        this.getSpanContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpanContext"];
        this.setSpan = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setSpan"];
        this.setSpanContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setSpanContext"];
    }
    /** Get the singleton instance of the Trace API */ TraceAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new TraceAPI();
        }
        return this._instance;
    };
    /**
     * Set the current global tracer.
     *
     * @returns true if the tracer provider was successfully registered, else false
     */ TraceAPI.prototype.setGlobalTracerProvider = function(provider) {
        var success = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerGlobal"])(API_NAME, this._proxyTracerProvider, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiagAPI"].instance());
        if (success) {
            this._proxyTracerProvider.setDelegate(provider);
        }
        return success;
    };
    /**
     * Returns the global tracer provider.
     */ TraceAPI.prototype.getTracerProvider = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGlobal"])(API_NAME) || this._proxyTracerProvider;
    };
    /**
     * Returns a tracer from the global tracer provider.
     */ TraceAPI.prototype.getTracer = function(name, version) {
        return this.getTracerProvider().getTracer(name, version);
    };
    /** Remove the global tracer provider */ TraceAPI.prototype.disable = function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unregisterGlobal"])(API_NAME, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiagAPI"].instance());
        this._proxyTracerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$ProxyTracerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyTracerProvider"]();
    };
    return TraceAPI;
}();
;
 //# sourceMappingURL=trace.js.map
}),
"[project]/node_modules/@opentelemetry/api/build/esm/trace-api.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trace",
    ()=>trace
]);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$trace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/api/trace.js [app-ssr] (ecmascript)");
;
var trace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$trace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TraceAPI"].getInstance(); //# sourceMappingURL=trace-api.js.map
}),
"[project]/node_modules/@opentelemetry/api/build/esm/trace/status.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * An enumeration of status codes.
 */ __turbopack_context__.s([
    "SpanStatusCode",
    ()=>SpanStatusCode
]);
var SpanStatusCode;
(function(SpanStatusCode) {
    /**
     * The default status.
     */ SpanStatusCode[SpanStatusCode["UNSET"] = 0] = "UNSET";
    /**
     * The operation has been validated by an Application developer or
     * Operator to have completed successfully.
     */ SpanStatusCode[SpanStatusCode["OK"] = 1] = "OK";
    /**
     * The operation contains an error.
     */ SpanStatusCode[SpanStatusCode["ERROR"] = 2] = "ERROR";
})(SpanStatusCode || (SpanStatusCode = {})); //# sourceMappingURL=status.js.map
}),
"[project]/node_modules/@opentelemetry/api/build/esm/context-api.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "context",
    ()=>context
]);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/api/context.js [app-ssr] (ecmascript)");
;
var context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextAPI"].getInstance(); //# sourceMappingURL=context-api.js.map
}),
"[project]/node_modules/throttleit/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function throttle(function_, wait) {
    if (typeof function_ !== 'function') {
        throw new TypeError(`Expected the first argument to be a \`function\`, got \`${typeof function_}\`.`);
    }
    // TODO: Add `wait` validation too in the next major version.
    let timeoutId;
    let lastCallTime = 0;
    return function throttled(...arguments_) {
        clearTimeout(timeoutId);
        const now = Date.now();
        const timeSinceLastCall = now - lastCallTime;
        const delayForNextCall = wait - timeSinceLastCall;
        if (delayForNextCall <= 0) {
            lastCallTime = now;
            function_.apply(this, arguments_);
        } else {
            timeoutId = setTimeout(()=>{
                lastCallTime = Date.now();
                function_.apply(this, arguments_);
            }, delayForNextCall);
        }
    };
}
module.exports = throttle;
}),
"[project]/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot();
            objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
        }
        cachedValue = useState({
            inst: {
                value: value,
                getSnapshot: getSnapshot
            }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({
                inst: inst
            });
        }, [
            subscribe,
            value,
            getSnapshot
        ]);
        useEffect(function() {
            checkIfSnapshotChanged(inst) && forceUpdate({
                inst: inst
            });
            return subscribe(function() {
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
            });
        }, [
            subscribe
        ]);
        useDebugValue(value);
        return value;
    }
    function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
            var nextValue = latestGetSnapshot();
            return !objectIs(inst, nextValue);
        } catch (error) {
            return !0;
        }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = ("TURBOPACK compile-time truthy", 1) ? useSyncExternalStore$1 : "TURBOPACK unreachable";
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/node_modules/swr/dist/_internal/events.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ERROR_REVALIDATE_EVENT",
    ()=>ERROR_REVALIDATE_EVENT,
    "FOCUS_EVENT",
    ()=>FOCUS_EVENT,
    "MUTATE_EVENT",
    ()=>MUTATE_EVENT,
    "RECONNECT_EVENT",
    ()=>RECONNECT_EVENT
]);
const FOCUS_EVENT = 0;
const RECONNECT_EVENT = 1;
const MUTATE_EVENT = 2;
const ERROR_REVALIDATE_EVENT = 3;
;
}),
"[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A",
    ()=>noop,
    "B",
    ()=>isPromiseLike,
    "I",
    ()=>IS_SERVER,
    "O",
    ()=>OBJECT,
    "S",
    ()=>SWRConfigContext,
    "U",
    ()=>UNDEFINED,
    "a",
    ()=>isFunction,
    "b",
    ()=>SWRGlobalState,
    "c",
    ()=>cache,
    "d",
    ()=>defaultConfig,
    "e",
    ()=>isUndefined,
    "f",
    ()=>mergeConfigs,
    "g",
    ()=>SWRConfig,
    "h",
    ()=>initCache,
    "i",
    ()=>isWindowDefined,
    "j",
    ()=>mutate,
    "k",
    ()=>compare,
    "l",
    ()=>stableHash,
    "m",
    ()=>mergeObjects,
    "n",
    ()=>internalMutate,
    "o",
    ()=>getTimestamp,
    "p",
    ()=>preset,
    "q",
    ()=>defaultConfigOptions,
    "r",
    ()=>IS_REACT_LEGACY,
    "s",
    ()=>serialize,
    "t",
    ()=>rAF,
    "u",
    ()=>useIsomorphicLayoutEffect,
    "v",
    ()=>slowConnection,
    "w",
    ()=>isDocumentDefined,
    "x",
    ()=>isLegacyDeno,
    "y",
    ()=>hasRequestAnimationFrame,
    "z",
    ()=>createCacheHelper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/events.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dequal$2f$lite$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dequal/lite/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
// Global state used to deduplicate requests and store listeners
const SWRGlobalState = new WeakMap();
// Shared state between server components and client components
const noop = ()=>{};
// Using noop() as the undefined value as undefined can be replaced
// by something else. Prettier ignore and extra parentheses are necessary here
// to ensure that tsc doesn't remove the __NOINLINE__ comment.
// prettier-ignore
const UNDEFINED = /*#__NOINLINE__*/ noop();
const OBJECT = Object;
const isUndefined = (v)=>v === UNDEFINED;
const isFunction = (v)=>typeof v == 'function';
const mergeObjects = (a, b)=>({
        ...a,
        ...b
    });
const isPromiseLike = (x)=>isFunction(x.then);
const EMPTY_CACHE = {};
const INITIAL_CACHE = {};
const STR_UNDEFINED = 'undefined';
// NOTE: Use the function to guarantee it's re-evaluated between jsdom and node runtime for tests.
const isWindowDefined = ("TURBOPACK compile-time value", "undefined") != STR_UNDEFINED;
const isDocumentDefined = typeof document != STR_UNDEFINED;
const isLegacyDeno = isWindowDefined && 'Deno' in window;
const hasRequestAnimationFrame = ()=>isWindowDefined && typeof window['requestAnimationFrame'] != STR_UNDEFINED;
const createCacheHelper = (cache, key)=>{
    const state = SWRGlobalState.get(cache);
    return [
        // Getter
        ()=>!isUndefined(key) && cache.get(key) || EMPTY_CACHE,
        // Setter
        (info)=>{
            if (!isUndefined(key)) {
                const prev = cache.get(key);
                // Before writing to the store, we keep the value in the initial cache
                // if it's not there yet.
                if (!(key in INITIAL_CACHE)) {
                    INITIAL_CACHE[key] = prev;
                }
                state[5](key, mergeObjects(prev, info), prev || EMPTY_CACHE);
            }
        },
        // Subscriber
        state[6],
        // Get server cache snapshot
        ()=>{
            if (!isUndefined(key)) {
                // If the cache was updated on the client, we return the stored initial value.
                if (key in INITIAL_CACHE) return INITIAL_CACHE[key];
            }
            // If we haven't done any client-side updates, we return the current value.
            return !isUndefined(key) && cache.get(key) || EMPTY_CACHE;
        }
    ];
} // export { UNDEFINED, OBJECT, isUndefined, isFunction, mergeObjects, isPromiseLike }
;
/**
 * Due to the bug https://bugs.chromium.org/p/chromium/issues/detail?id=678075,
 * it's not reliable to detect if the browser is currently online or offline
 * based on `navigator.onLine`.
 * As a workaround, we always assume it's online on the first load, and change
 * the status upon `online` or `offline` events.
 */ let online = true;
const isOnline = ()=>online;
// For node and React Native, `add/removeEventListener` doesn't exist on window.
const [onWindowEvent, offWindowEvent] = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : [
    noop,
    noop
];
const isVisible = ()=>{
    const visibilityState = isDocumentDefined && document.visibilityState;
    return isUndefined(visibilityState) || visibilityState !== 'hidden';
};
const initFocus = (callback)=>{
    // focus revalidate
    if (isDocumentDefined) {
        document.addEventListener('visibilitychange', callback);
    }
    onWindowEvent('focus', callback);
    return ()=>{
        if (isDocumentDefined) {
            document.removeEventListener('visibilitychange', callback);
        }
        offWindowEvent('focus', callback);
    };
};
const initReconnect = (callback)=>{
    // revalidate on reconnected
    const onOnline = ()=>{
        online = true;
        callback();
    };
    // nothing to revalidate, just update the status
    const onOffline = ()=>{
        online = false;
    };
    onWindowEvent('online', onOnline);
    onWindowEvent('offline', onOffline);
    return ()=>{
        offWindowEvent('online', onOnline);
        offWindowEvent('offline', onOffline);
    };
};
const preset = {
    isOnline,
    isVisible
};
const defaultConfigOptions = {
    initFocus,
    initReconnect
};
const IS_REACT_LEGACY = !__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useId;
const IS_SERVER = !isWindowDefined || isLegacyDeno;
// Polyfill requestAnimationFrame
const rAF = (f)=>hasRequestAnimationFrame() ? "TURBOPACK unreachable" : setTimeout(f, 1);
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
const useIsomorphicLayoutEffect = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"] : "TURBOPACK unreachable";
// This assignment is to extend the Navigator type to use effectiveType.
const navigatorConnection = typeof navigator !== 'undefined' && navigator.connection;
// Adjust the config based on slow connection status (<= 70Kbps).
const slowConnection = !IS_SERVER && navigatorConnection && ([
    'slow-2g',
    '2g'
].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);
// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
const table = new WeakMap();
const getTypeName = (value)=>OBJECT.prototype.toString.call(value);
const isObjectTypeName = (typeName, type)=>typeName === `[object ${type}]`;
// counter of the key
let counter = 0;
// A stable hash implementation that supports:
// - Fast and ensures unique hash properties
// - Handles unserializable values
// - Handles object key ordering
// - Generates short results
//
// This is not a serialization function, and the result is not guaranteed to be
// parsable.
const stableHash = (arg)=>{
    const type = typeof arg;
    const typeName = getTypeName(arg);
    const isDate = isObjectTypeName(typeName, 'Date');
    const isRegex = isObjectTypeName(typeName, 'RegExp');
    const isPlainObject = isObjectTypeName(typeName, 'Object');
    let result;
    let index;
    if (OBJECT(arg) === arg && !isDate && !isRegex) {
        // Object/function, not null/date/regexp. Use WeakMap to store the id first.
        // If it's already hashed, directly return the result.
        result = table.get(arg);
        if (result) return result;
        // Store the hash first for circular reference detection before entering the
        // recursive `stableHash` calls.
        // For other objects like set and map, we use this id directly as the hash.
        result = ++counter + '~';
        table.set(arg, result);
        if (Array.isArray(arg)) {
            // Array.
            result = '@';
            for(index = 0; index < arg.length; index++){
                result += stableHash(arg[index]) + ',';
            }
            table.set(arg, result);
        }
        if (isPlainObject) {
            // Object, sort keys.
            result = '#';
            const keys = OBJECT.keys(arg).sort();
            while(!isUndefined(index = keys.pop())){
                if (!isUndefined(arg[index])) {
                    result += index + ':' + stableHash(arg[index]) + ',';
                }
            }
            table.set(arg, result);
        }
    } else {
        result = isDate ? arg.toJSON() : type == 'symbol' ? arg.toString() : type == 'string' ? JSON.stringify(arg) : '' + arg;
    }
    return result;
};
const serialize = (key)=>{
    if (isFunction(key)) {
        try {
            key = key();
        } catch (err) {
            // dependencies not ready
            key = '';
        }
    }
    // Use the original key as the argument of fetcher. This can be a string or an
    // array of values.
    const args = key;
    // If key is not falsy, or not an empty array, hash it.
    key = typeof key == 'string' ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : '';
    return [
        key,
        args
    ];
};
// Global timestamp.
let __timestamp = 0;
const getTimestamp = ()=>++__timestamp;
async function internalMutate(...args) {
    const [cache, _key, _data, _opts] = args;
    // When passing as a boolean, it's explicitly used to disable/enable
    // revalidation.
    const options = mergeObjects({
        populateCache: true,
        throwOnError: true
    }, typeof _opts === 'boolean' ? {
        revalidate: _opts
    } : _opts || {});
    let populateCache = options.populateCache;
    const rollbackOnErrorOption = options.rollbackOnError;
    let optimisticData = options.optimisticData;
    const rollbackOnError = (error)=>{
        return typeof rollbackOnErrorOption === 'function' ? rollbackOnErrorOption(error) : rollbackOnErrorOption !== false;
    };
    const throwOnError = options.throwOnError;
    // If the second argument is a key filter, return the mutation results for all
    // filtered keys.
    if (isFunction(_key)) {
        const keyFilter = _key;
        const matchedKeys = [];
        const it = cache.keys();
        for (const key of it){
            if (!/^\$(inf|sub)\$/.test(key) && keyFilter(cache.get(key)._k)) {
                matchedKeys.push(key);
            }
        }
        return Promise.all(matchedKeys.map(mutateByKey));
    }
    return mutateByKey(_key);
    //TURBOPACK unreachable
    ;
    async function mutateByKey(_k) {
        // Serialize key
        const [key] = serialize(_k);
        if (!key) return;
        const [get, set] = createCacheHelper(cache, key);
        const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = SWRGlobalState.get(cache);
        const startRevalidate = ()=>{
            const revalidators = EVENT_REVALIDATORS[key];
            const revalidate = isFunction(options.revalidate) ? options.revalidate(get().data, _k) : options.revalidate !== false;
            if (revalidate) {
                // Invalidate the key by deleting the concurrent request markers so new
                // requests will not be deduped.
                delete FETCH[key];
                delete PRELOAD[key];
                if (revalidators && revalidators[0]) {
                    return revalidators[0](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MUTATE_EVENT"]).then(()=>get().data);
                }
            }
            return get().data;
        };
        // If there is no new data provided, revalidate the key with current state.
        if (args.length < 3) {
            // Revalidate and broadcast state.
            return startRevalidate();
        }
        let data = _data;
        let error;
        let isError = false;
        // Update global timestamps.
        const beforeMutationTs = getTimestamp();
        MUTATION[key] = [
            beforeMutationTs,
            0
        ];
        const hasOptimisticData = !isUndefined(optimisticData);
        const state = get();
        // `displayedData` is the current value on screen. It could be the optimistic value
        // that is going to be overridden by a `committedData`, or get reverted back.
        // `committedData` is the validated value that comes from a fetch or mutation.
        const displayedData = state.data;
        const currentData = state._c;
        const committedData = isUndefined(currentData) ? displayedData : currentData;
        // Do optimistic data update.
        if (hasOptimisticData) {
            optimisticData = isFunction(optimisticData) ? optimisticData(committedData, displayedData) : optimisticData;
            // When we set optimistic data, backup the current committedData data in `_c`.
            set({
                data: optimisticData,
                _c: committedData
            });
        }
        if (isFunction(data)) {
            // `data` is a function, call it passing current cache value.
            try {
                data = data(committedData);
            } catch (err) {
                // If it throws an error synchronously, we shouldn't update the cache.
                error = err;
                isError = true;
            }
        }
        // `data` is a promise/thenable, resolve the final data first.
        if (data && isPromiseLike(data)) {
            // This means that the mutation is async, we need to check timestamps to
            // avoid race conditions.
            data = await data.catch((err)=>{
                error = err;
                isError = true;
            });
            // Check if other mutations have occurred since we've started this mutation.
            // If there's a race we don't update cache or broadcast the change,
            // just return the data.
            if (beforeMutationTs !== MUTATION[key][0]) {
                if (isError) throw error;
                return data;
            } else if (isError && hasOptimisticData && rollbackOnError(error)) {
                // Rollback. Always populate the cache in this case but without
                // transforming the data.
                populateCache = true;
                // Reset data to be the latest committed data, and clear the `_c` value.
                set({
                    data: committedData,
                    _c: UNDEFINED
                });
            }
        }
        // If we should write back the cache after request.
        if (populateCache) {
            if (!isError) {
                // Transform the result into data.
                if (isFunction(populateCache)) {
                    const populateCachedData = populateCache(data, committedData);
                    set({
                        data: populateCachedData,
                        error: UNDEFINED,
                        _c: UNDEFINED
                    });
                } else {
                    // Only update cached data and reset the error if there's no error. Data can be `undefined` here.
                    set({
                        data,
                        error: UNDEFINED,
                        _c: UNDEFINED
                    });
                }
            }
        }
        // Reset the timestamp to mark the mutation has ended.
        MUTATION[key][1] = getTimestamp();
        // Update existing SWR Hooks' internal states:
        Promise.resolve(startRevalidate()).then(()=>{
            // The mutation and revalidation are ended, we can clear it since the data is
            // not an optimistic value anymore.
            set({
                _c: UNDEFINED
            });
        });
        // Throw error or return data
        if (isError) {
            if (throwOnError) throw error;
            return;
        }
        return data;
    }
}
const revalidateAllKeys = (revalidators, type)=>{
    for(const key in revalidators){
        if (revalidators[key][0]) revalidators[key][0](type);
    }
};
const initCache = (provider, options)=>{
    // The global state for a specific provider will be used to deduplicate
    // requests and store listeners. As well as a mutate function that is bound to
    // the cache.
    // The provider's global state might be already initialized. Let's try to get the
    // global state associated with the provider first.
    if (!SWRGlobalState.has(provider)) {
        const opts = mergeObjects(defaultConfigOptions, options);
        // If there's no global state bound to the provider, create a new one with the
        // new mutate function.
        const EVENT_REVALIDATORS = Object.create(null);
        const mutate = internalMutate.bind(UNDEFINED, provider);
        let unmount = noop;
        const subscriptions = Object.create(null);
        const subscribe = (key, callback)=>{
            const subs = subscriptions[key] || [];
            subscriptions[key] = subs;
            subs.push(callback);
            return ()=>subs.splice(subs.indexOf(callback), 1);
        };
        const setter = (key, value, prev)=>{
            provider.set(key, value);
            const subs = subscriptions[key];
            if (subs) {
                for (const fn of subs){
                    fn(value, prev);
                }
            }
        };
        const initProvider = ()=>{
            if (!SWRGlobalState.has(provider)) {
                // Update the state if it's new, or if the provider has been extended.
                SWRGlobalState.set(provider, [
                    EVENT_REVALIDATORS,
                    Object.create(null),
                    Object.create(null),
                    Object.create(null),
                    mutate,
                    setter,
                    subscribe
                ]);
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
            }
        };
        initProvider();
        // This is a new provider, we need to initialize it and setup DOM events
        // listeners for `focus` and `reconnect` actions.
        // We might want to inject an extra layer on top of `provider` in the future,
        // such as key serialization, auto GC, etc.
        // For now, it's just a `Map` interface without any modifications.
        return [
            provider,
            mutate,
            initProvider,
            unmount
        ];
    }
    return [
        provider,
        SWRGlobalState.get(provider)[4]
    ];
};
// error retry
const onErrorRetry = (_, __, config, revalidate, opts)=>{
    const maxRetryCount = config.errorRetryCount;
    const currentRetryCount = opts.retryCount;
    // Exponential backoff
    const timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
    if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
        return;
    }
    setTimeout(revalidate, timeout, opts);
};
const compare = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dequal$2f$lite$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dequal"];
// Default cache provider
const [cache, mutate] = initCache(new Map());
// Default config
const defaultConfig = mergeObjects({
    // events
    onLoadingSlow: noop,
    onSuccess: noop,
    onError: noop,
    onErrorRetry,
    onDiscarded: noop,
    // switches
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: true,
    shouldRetryOnError: true,
    // timeouts
    errorRetryInterval: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 5000,
    focusThrottleInterval: 5 * 1000,
    dedupingInterval: 2 * 1000,
    loadingTimeout: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 3000,
    // providers
    compare,
    isPaused: ()=>false,
    cache,
    mutate,
    fallback: {}
}, preset);
const mergeConfigs = (a, b)=>{
    // Need to create a new object to avoid mutating the original here.
    const v = mergeObjects(a, b);
    // If two configs are provided, merge their `use` and `fallback` options.
    if (b) {
        const { use: u1, fallback: f1 } = a;
        const { use: u2, fallback: f2 } = b;
        if (u1 && u2) {
            v.use = u1.concat(u2);
        }
        if (f1 && f2) {
            v.fallback = mergeObjects(f1, f2);
        }
    }
    return v;
};
const SWRConfigContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
const SWRConfig = (props)=>{
    const { value } = props;
    const parentConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SWRConfigContext);
    const isFunctionalConfig = isFunction(value);
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>isFunctionalConfig ? value(parentConfig) : value, [
        isFunctionalConfig,
        parentConfig,
        value
    ]);
    // Extend parent context values and middleware.
    const extendedConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>isFunctionalConfig ? config : mergeConfigs(parentConfig, config), [
        isFunctionalConfig,
        parentConfig,
        config
    ]);
    // Should not use the inherited provider.
    const provider = config && config.provider;
    // initialize the cache only on first access.
    const cacheContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(UNDEFINED);
    if (provider && !cacheContextRef.current) {
        cacheContextRef.current = initCache(provider(extendedConfig.cache || cache), config);
    }
    const cacheContext = cacheContextRef.current;
    // Override the cache if a new provider is given.
    if (cacheContext) {
        extendedConfig.cache = cacheContext[0];
        extendedConfig.mutate = cacheContext[1];
    }
    // Unsubscribe events.
    useIsomorphicLayoutEffect(()=>{
        if (cacheContext) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            cacheContext[2] && cacheContext[2]();
            return cacheContext[3];
        }
    }, []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(SWRConfigContext.Provider, mergeObjects(props, {
        value: extendedConfig
    }));
};
;
}),
"[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export U as UNDEFINED>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UNDEFINED",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["U"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export O as OBJECT>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OBJECT",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["O"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export g as SWRConfig>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SWRConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export d as defaultConfig>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/swr/dist/_internal/constants.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INFINITE_PREFIX",
    ()=>INFINITE_PREFIX
]);
const INFINITE_PREFIX = '$inf$';
;
}),
"[project]/node_modules/swr/dist/_internal/index.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalize",
    ()=>normalize,
    "preload",
    ()=>preload,
    "subscribeCallback",
    ()=>subscribeCallback,
    "useSWRConfig",
    ()=>useSWRConfig,
    "withArgs",
    ()=>withArgs,
    "withMiddleware",
    ()=>withMiddleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/events.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/constants.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
// @ts-expect-error
const enableDevtools = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"] && window.__SWR_DEVTOOLS_USE__;
const use = enableDevtools ? window.__SWR_DEVTOOLS_USE__ : [];
const setupDevTools = ()=>{
    if (enableDevtools) {
        // @ts-expect-error
        window.__SWR_DEVTOOLS_REACT__ = __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
    }
};
const normalize = (args)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(args[1]) ? [
        args[0],
        args[1],
        args[2] || {}
    ] : [
        args[0],
        null,
        (args[1] === null ? args[2] : args[1]) || {}
    ];
};
const useSWRConfig = ()=>{
    const parentConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["S"]);
    const mergedConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"], parentConfig), [
        parentConfig
    ]);
    return mergedConfig;
};
const preload = (key_, fetcher)=>{
    // preload should be a no-op on the server
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I"]) {
        return undefined;
    }
    const [key, fnArg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])(key_);
    const [, , , PRELOAD] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"].get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"]);
    // Prevent preload to be called multiple times before used.
    if (PRELOAD[key]) return PRELOAD[key];
    const req = fetcher(fnArg);
    PRELOAD[key] = req;
    return req;
};
const middleware = (useSWRNext)=>(key_, fetcher_, config)=>{
        // fetcher might be a sync function, so this should not be an async function
        const fetcher = fetcher_ && ((...args)=>{
            const [key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])(key_);
            const [, , , PRELOAD] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"].get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"]);
            if (key.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INFINITE_PREFIX"])) {
                // we want the infinite fetcher to be called.
                // handling of the PRELOAD cache happens there.
                return fetcher_(...args);
            }
            const req = PRELOAD[key];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(req)) return fetcher_(...args);
            delete PRELOAD[key];
            return req;
        });
        return useSWRNext(key_, fetcher, config);
    };
const BUILT_IN_MIDDLEWARE = use.concat(middleware);
// It's tricky to pass generic types as parameters, so we just directly override
// the types here.
const withArgs = (hook)=>{
    return function useSWRArgs(...args) {
        // Get the default and inherited configuration.
        const fallbackConfig = useSWRConfig();
        // Normalize arguments.
        const [key, fn, _config] = normalize(args);
        // Merge configurations.
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"])(fallbackConfig, _config);
        // Apply middleware
        let next = hook;
        const { use } = config;
        const middleware = (use || []).concat(BUILT_IN_MIDDLEWARE);
        for(let i = middleware.length; i--;){
            next = middleware[i](next);
        }
        return next(key, fn || config.fetcher || null, config);
    };
};
// Add a callback function to a list of keyed callback functions and return
// the unsubscribe function.
const subscribeCallback = (key, callbacks, callback)=>{
    const keyedRevalidators = callbacks[key] || (callbacks[key] = []);
    keyedRevalidators.push(callback);
    return ()=>{
        const index = keyedRevalidators.indexOf(callback);
        if (index >= 0) {
            // O(1): faster than splice
            keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
            keyedRevalidators.pop();
        }
    };
};
// Create a custom hook with a middleware
const withMiddleware = (useSWR, middleware)=>{
    return (...args)=>{
        const [key, fn, config] = normalize(args);
        const uses = (config.use || []).concat(middleware);
        return useSWR(key, fn, {
            ...config,
            use: uses
        });
    };
};
setupDevTools();
;
}),
"[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export b as SWRGlobalState>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SWRGlobalState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export s as serialize>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serialize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export z as createCacheHelper>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCacheHelper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export e as isUndefined>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isUndefined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export B as isPromiseLike>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPromiseLike",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["B"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export I as IS_SERVER>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IS_SERVER",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export A as noop>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "noop",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["A"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export o as getTimestamp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTimestamp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export a as isFunction>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isFunction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/swr/dist/_internal/events.mjs [app-ssr] (ecmascript) <export * as revalidateEvents>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "revalidateEvents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/events.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export n as internalMutate>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "internalMutate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export u as useIsomorphicLayoutEffect>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsomorphicLayoutEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export t as rAF>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "rAF",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export r as IS_REACT_LEGACY>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IS_REACT_LEGACY",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export m as mergeObjects>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeObjects",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/swr/dist/index/index.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SWRConfig",
    ()=>SWRConfig,
    "default",
    ()=>useSWR,
    "unstable_serialize",
    ()=>unstable_serialize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__U__as__UNDEFINED$3e$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export U as UNDEFINED>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__O__as__OBJECT$3e$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export O as OBJECT>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__g__as__SWRConfig$3e$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export g as SWRConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__defaultConfig$3e$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export d as defaultConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__b__as__SWRGlobalState$3e$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export b as SWRGlobalState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__s__as__serialize$3e$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export s as serialize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__z__as__createCacheHelper$3e$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export z as createCacheHelper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export e as isUndefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__B__as__isPromiseLike$3e$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export B as isPromiseLike>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__I__as__IS_SERVER$3e$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export I as IS_SERVER>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__A__as__noop$3e$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export A as noop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__o__as__getTimestamp$3e$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export o as getTimestamp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__isFunction$3e$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export a as isFunction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__revalidateEvents$3e$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/events.mjs [app-ssr] (ecmascript) <export * as revalidateEvents>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__n__as__internalMutate$3e$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export n as internalMutate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__u__as__useIsomorphicLayoutEffect$3e$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export u as useIsomorphicLayoutEffect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__t__as__rAF$3e$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export t as rAF>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__r__as__IS_REACT_LEGACY$3e$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export r as IS_REACT_LEGACY>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__m__as__mergeObjects$3e$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs [app-ssr] (ecmascript) <export m as mergeObjects>");
;
;
;
;
// Shared state between server components and client components
const noop = ()=>{};
// Using noop() as the undefined value as undefined can be replaced
// by something else. Prettier ignore and extra parentheses are necessary here
// to ensure that tsc doesn't remove the __NOINLINE__ comment.
// prettier-ignore
const UNDEFINED = /*#__NOINLINE__*/ noop();
const OBJECT = Object;
const isUndefined = (v)=>v === UNDEFINED;
const isFunction = (v)=>typeof v == 'function';
// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
const table = new WeakMap();
const getTypeName = (value)=>OBJECT.prototype.toString.call(value);
const isObjectTypeName = (typeName, type)=>typeName === `[object ${type}]`;
// counter of the key
let counter = 0;
// A stable hash implementation that supports:
// - Fast and ensures unique hash properties
// - Handles unserializable values
// - Handles object key ordering
// - Generates short results
//
// This is not a serialization function, and the result is not guaranteed to be
// parsable.
const stableHash = (arg)=>{
    const type = typeof arg;
    const typeName = getTypeName(arg);
    const isDate = isObjectTypeName(typeName, 'Date');
    const isRegex = isObjectTypeName(typeName, 'RegExp');
    const isPlainObject = isObjectTypeName(typeName, 'Object');
    let result;
    let index;
    if (OBJECT(arg) === arg && !isDate && !isRegex) {
        // Object/function, not null/date/regexp. Use WeakMap to store the id first.
        // If it's already hashed, directly return the result.
        result = table.get(arg);
        if (result) return result;
        // Store the hash first for circular reference detection before entering the
        // recursive `stableHash` calls.
        // For other objects like set and map, we use this id directly as the hash.
        result = ++counter + '~';
        table.set(arg, result);
        if (Array.isArray(arg)) {
            // Array.
            result = '@';
            for(index = 0; index < arg.length; index++){
                result += stableHash(arg[index]) + ',';
            }
            table.set(arg, result);
        }
        if (isPlainObject) {
            // Object, sort keys.
            result = '#';
            const keys = OBJECT.keys(arg).sort();
            while(!isUndefined(index = keys.pop())){
                if (!isUndefined(arg[index])) {
                    result += index + ':' + stableHash(arg[index]) + ',';
                }
            }
            table.set(arg, result);
        }
    } else {
        result = isDate ? arg.toJSON() : type == 'symbol' ? arg.toString() : type == 'string' ? JSON.stringify(arg) : '' + arg;
    }
    return result;
};
const serialize = (key)=>{
    if (isFunction(key)) {
        try {
            key = key();
        } catch (err) {
            // dependencies not ready
            key = '';
        }
    }
    // Use the original key as the argument of fetcher. This can be a string or an
    // array of values.
    const args = key;
    // If key is not falsy, or not an empty array, hash it.
    key = typeof key == 'string' ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : '';
    return [
        key,
        args
    ];
};
const unstable_serialize = (key)=>serialize(key)[0];
/// <reference types="react/experimental" />
const use = __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].use || // This extra generic is to avoid TypeScript mixing up the generic and JSX sytax
// and emitting an error.
// We assume that this is only for the `use(thenable)` case, not `use(context)`.
// https://github.com/facebook/react/blob/aed00dacfb79d17c53218404c52b1c7aa59c4a89/packages/react-server/src/ReactFizzThenable.js#L45
((thenable)=>{
    switch(thenable.status){
        case 'pending':
            throw thenable;
        case 'fulfilled':
            return thenable.value;
        case 'rejected':
            throw thenable.reason;
        default:
            thenable.status = 'pending';
            thenable.then((v)=>{
                thenable.status = 'fulfilled';
                thenable.value = v;
            }, (e)=>{
                thenable.status = 'rejected';
                thenable.reason = e;
            });
            throw thenable;
    }
});
const WITH_DEDUPE = {
    dedupe: true
};
const resolvedUndef = Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__U__as__UNDEFINED$3e$__["UNDEFINED"]);
const sub = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__A__as__noop$3e$__["noop"];
/**
 * The core implementation of the useSWR hook.
 *
 * This is the main handler function that implements all SWR functionality including
 * data fetching, caching, revalidation, error handling, and state management.
 * It manages the complete lifecycle of SWR requests from initialization through
 * cleanup.
 *
 * Key responsibilities:
 * - Key serialization and normalization
 * - Cache state management and synchronization
 * - Automatic and manual revalidation
 * - Error handling and retry logic
 * - Suspense integration
 * - Loading state management
 * - Effect cleanup and memory management
 *
 * @template Data - The type of data returned by the fetcher
 * @template Error - The type of error that can be thrown
 *
 * @param _key - The SWR key (string, array, object, function, or falsy)
 * @param fetcher - The fetcher function to retrieve data, or null to disable fetching
 * @param config - Complete SWR configuration object with both public and internal options
 *
 * @returns SWRResponse object containing data, error, mutate function, and loading states
 *
 * @internal This is the internal implementation. Use `useSWR` instead.
 */ const useSWRHandler = (_key, fetcher, config)=>{
    const { cache, compare, suspense, fallbackData, revalidateOnMount, revalidateIfStale, refreshInterval, refreshWhenHidden, refreshWhenOffline, keepPreviousData, strictServerPrefetchWarning } = config;
    const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__b__as__SWRGlobalState$3e$__["SWRGlobalState"].get(cache);
    // `key` is the identifier of the SWR internal state,
    // `fnArg` is the argument/arguments parsed from the key, which will be passed
    // to the fetcher.
    // All of them are derived from `_key`.
    const [key, fnArg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__s__as__serialize$3e$__["serialize"])(_key);
    // If it's the initial render of this hook.
    const initialMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // If the hook is unmounted already. This will be used to prevent some effects
    // to be called after unmounting.
    const unmountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Refs to keep the key and config.
    const keyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(key);
    const fetcherRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(fetcher);
    const configRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(config);
    const getConfig = ()=>configRef.current;
    const isActive = ()=>getConfig().isVisible() && getConfig().isOnline();
    const [getCache, setCache, subscribeCache, getInitialCache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__z__as__createCacheHelper$3e$__["createCacheHelper"])(cache, key);
    const stateDependencies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({}).current;
    // Resolve the fallback data from either the inline option, or the global provider.
    // If it's a promise, we simply let React suspend and resolve it for us.
    const fallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(fallbackData) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(config.fallback) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__U__as__UNDEFINED$3e$__["UNDEFINED"] : config.fallback[key] : fallbackData;
    const isEqual = (prev, current)=>{
        for(const _ in stateDependencies){
            const t = _;
            if (t === 'data') {
                if (!compare(prev[t], current[t])) {
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(prev[t])) {
                        return false;
                    }
                    if (!compare(returnedData, current[t])) {
                        return false;
                    }
                }
            } else {
                if (current[t] !== prev[t]) {
                    return false;
                }
            }
        }
        return true;
    };
    const isInitialMount = !initialMountedRef.current;
    const getSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const cachedData = getCache();
        const initialData = getInitialCache();
        const getSelectedCache = (state)=>{
            // We only select the needed fields from the state.
            const snapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__m__as__mergeObjects$3e$__["mergeObjects"])(state);
            delete snapshot._k;
            const shouldStartRequest = (()=>{
                if (!key) return false;
                if (!fetcher) return false;
                // If it's paused, we skip revalidation.
                if (getConfig().isPaused()) return false;
                // If `revalidateOnMount` is set, we take the value directly.
                if (isInitialMount && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(revalidateOnMount)) return revalidateOnMount;
                const data = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(fallback) ? fallback : snapshot.data;
                if (suspense) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(data) || revalidateIfStale;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(data) || revalidateIfStale;
            })();
            if (!shouldStartRequest) {
                return snapshot;
            }
            return {
                isValidating: true,
                isLoading: true,
                ...snapshot
            };
        };
        const clientSnapshot = getSelectedCache(cachedData);
        const serverSnapshot = cachedData === initialData ? clientSnapshot : getSelectedCache(initialData);
        // To make sure that we are returning the same object reference to avoid
        // unnecessary re-renders, we keep the previous snapshot and use deep
        // comparison to check if we need to return a new one.
        let memorizedSnapshot = clientSnapshot;
        return [
            ()=>{
                const newSnapshot = getSelectedCache(getCache());
                const compareResult = isEqual(newSnapshot, memorizedSnapshot);
                if (compareResult) {
                    // Mentally, we should always return the `memorizedSnapshot` here
                    // as there's no change between the new and old snapshots.
                    // However, since the `isEqual` function only compares selected fields,
                    // the values of the unselected fields might be changed. That's
                    // simply because we didn't track them.
                    // To support the case in https://github.com/vercel/swr/pull/2576,
                    // we need to update these fields in the `memorizedSnapshot` too
                    // with direct mutations to ensure the snapshot is always up-to-date
                    // even for the unselected fields, but only trigger re-renders when
                    // the selected fields are changed.
                    memorizedSnapshot.data = newSnapshot.data;
                    memorizedSnapshot.isLoading = newSnapshot.isLoading;
                    memorizedSnapshot.isValidating = newSnapshot.isValidating;
                    memorizedSnapshot.error = newSnapshot.error;
                    return memorizedSnapshot;
                } else {
                    memorizedSnapshot = newSnapshot;
                    return newSnapshot;
                }
            },
            ()=>serverSnapshot
        ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        cache,
        key
    ]);
    // Get the current state that SWR should return.
    const cached = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((callback)=>subscribeCache(key, (current, prev)=>{
            if (!isEqual(prev, current)) callback();
        }), [
        cache,
        key
    ]), getSnapshot[0], getSnapshot[1]);
    const hasRevalidator = EVENT_REVALIDATORS[key] && EVENT_REVALIDATORS[key].length > 0;
    const cachedData = cached.data;
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(cachedData) ? fallback && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__B__as__isPromiseLike$3e$__["isPromiseLike"])(fallback) ? use(fallback) : fallback : cachedData;
    const error = cached.error;
    // Use a ref to store previously returned data. Use the initial data as its initial value.
    const laggyDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(data);
    const returnedData = keepPreviousData ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(cachedData) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(laggyDataRef.current) ? data : laggyDataRef.current : cachedData : data;
    const hasKeyButNoData = key && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(data);
    const hydrationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Note: the conditionally hook call is fine because the environment
    // `IS_SERVER` never changes.
    // @ts-expect-error -- use hydrationRef directly
    !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__I__as__IS_SERVER$3e$__["IS_SERVER"] && // getServerSnapshot is only called during hydration
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(sub, ()=>{
        hydrationRef.current = false;
        return hydrationRef;
    }, ()=>{
        hydrationRef.current = true;
        return hydrationRef;
    });
    const isHydration = hydrationRef.current;
    // During the initial SSR render, warn if the key has no data pre-fetched via:
    // - fallback data
    // - preload calls
    // - initial data from the cache provider
    // We only warn once for each key during Hydration.
    if (strictServerPrefetchWarning && isHydration && !suspense && hasKeyButNoData) {
        console.warn(`Missing pre-initiated data for serialized key "${key}" during server-side rendering. Data fetching should be initiated on the server and provided to SWR via fallback data. You can set "strictServerPrefetchWarning: false" to disable this warning.`);
    }
    // Resolve the default validating state:
    // If it's able to validate, and it should revalidate when mount, this will be true.
    // - Suspense mode and there's stale data for the initial render.
    // - Not suspense mode and there is no fallback data and `revalidateIfStale` is enabled.
    // - `revalidateIfStale` is enabled but `data` is not defined.
    const shouldDoInitialRevalidation = (()=>{
        if (!key || !fetcher) return false;
        // If it's paused, we skip revalidation.
        if (getConfig().isPaused()) return false;
        // if a key already has revalidators and also has error, we should not trigger revalidation
        if (hasRevalidator && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(error)) return false;
        // If `revalidateOnMount` is set, we take the value directly.
        if (isInitialMount && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(revalidateOnMount)) return revalidateOnMount;
        // Under suspense mode, it will always fetch on render if there is no
        // stale data so no need to revalidate immediately mount it again.
        // If data exists, only revalidate if `revalidateIfStale` is true.
        if (suspense) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(data) ? false : revalidateIfStale;
        // If there is no stale data, we need to revalidate when mount;
        // If `revalidateIfStale` is set to true, we will always revalidate.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(data) || revalidateIfStale;
    })();
    const defaultValidatingState = isInitialMount && shouldDoInitialRevalidation;
    const isValidating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(cached.isValidating) ? defaultValidatingState : cached.isValidating;
    const isLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(cached.isLoading) ? defaultValidatingState : cached.isLoading;
    // The revalidation function is a carefully crafted wrapper of the original
    // `fetcher`, to correctly handle the many edge cases.
    const revalidate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (revalidateOpts)=>{
        const currentFetcher = fetcherRef.current;
        if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
            return false;
        }
        let newData;
        let startAt;
        let loading = true;
        const opts = revalidateOpts || {};
        // If there is no ongoing concurrent request, or `dedupe` is not set, a
        // new request should be initiated.
        const shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
        /*
         For React 17
         Do unmount check for calls:
         If key has changed during the revalidation, or the component has been
         unmounted, old dispatch and old event callbacks should not take any
         effect

        For React 18
        only check if key has changed
        https://github.com/reactwg/react-18/discussions/82
      */ const callbackSafeguard = ()=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__r__as__IS_REACT_LEGACY$3e$__["IS_REACT_LEGACY"]) {
                return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
            }
            return key === keyRef.current;
        };
        // The final state object when the request finishes.
        const finalState = {
            isValidating: false,
            isLoading: false
        };
        const finishRequestAndUpdateState = ()=>{
            setCache(finalState);
        };
        const cleanupState = ()=>{
            // Check if it's still the same request before deleting it.
            const requestInfo = FETCH[key];
            if (requestInfo && requestInfo[1] === startAt) {
                delete FETCH[key];
            }
        };
        // Start fetching. Change the `isValidating` state, update the cache.
        const initialState = {
            isValidating: true
        };
        // It is in the `isLoading` state, if and only if there is no cached data.
        // This bypasses fallback data and laggy data.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(getCache().data)) {
            initialState.isLoading = true;
        }
        try {
            if (shouldStartNewRequest) {
                setCache(initialState);
                // If no cache is being rendered currently (it shows a blank page),
                // we trigger the loading slow event.
                if (config.loadingTimeout && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(getCache().data)) {
                    setTimeout(()=>{
                        if (loading && callbackSafeguard()) {
                            getConfig().onLoadingSlow(key, config);
                        }
                    }, config.loadingTimeout);
                }
                // Start the request and save the timestamp.
                // Key must be truthy if entering here.
                FETCH[key] = [
                    currentFetcher(fnArg),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__o__as__getTimestamp$3e$__["getTimestamp"])()
                ];
            }
            // Wait until the ongoing request is done. Deduplication is also
            // considered here.
            ;
            [newData, startAt] = FETCH[key];
            newData = await newData;
            if (shouldStartNewRequest) {
                // If the request isn't interrupted, clean it up after the
                // deduplication interval.
                setTimeout(cleanupState, config.dedupingInterval);
            }
            // If there're other ongoing request(s), started after the current one,
            // we need to ignore the current one to avoid possible race conditions:
            //   req1------------------>res1        (current one)
            //        req2---------------->res2
            // the request that fired later will always be kept.
            // The timestamp maybe be `undefined` or a number
            if (!FETCH[key] || FETCH[key][1] !== startAt) {
                if (shouldStartNewRequest) {
                    if (callbackSafeguard()) {
                        getConfig().onDiscarded(key);
                    }
                }
                return false;
            }
            // Clear error.
            finalState.error = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__U__as__UNDEFINED$3e$__["UNDEFINED"];
            // If there're other mutations(s), that overlapped with the current revalidation:
            // case 1:
            //   req------------------>res
            //       mutate------>end
            // case 2:
            //         req------------>res
            //   mutate------>end
            // case 3:
            //   req------------------>res
            //       mutate-------...---------->
            // we have to ignore the revalidation result (res) because it's no longer fresh.
            // meanwhile, a new revalidation should be triggered when the mutation ends.
            const mutationInfo = MUTATION[key];
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(mutationInfo) && // case 1
            (startAt <= mutationInfo[0] || // case 2
            startAt <= mutationInfo[1] || // case 3
            mutationInfo[1] === 0)) {
                finishRequestAndUpdateState();
                if (shouldStartNewRequest) {
                    if (callbackSafeguard()) {
                        getConfig().onDiscarded(key);
                    }
                }
                return false;
            }
            // Deep compare with the latest state to avoid extra re-renders.
            // For local state, compare and assign.
            const cacheData = getCache().data;
            // Since the compare fn could be custom fn
            // cacheData might be different from newData even when compare fn returns True
            finalState.data = compare(cacheData, newData) ? cacheData : newData;
            // Trigger the successful callback if it's the original request.
            if (shouldStartNewRequest) {
                if (callbackSafeguard()) {
                    getConfig().onSuccess(newData, key, config);
                }
            }
        } catch (err) {
            cleanupState();
            const currentConfig = getConfig();
            const { shouldRetryOnError } = currentConfig;
            // Not paused, we continue handling the error. Otherwise, discard it.
            if (!currentConfig.isPaused()) {
                // Get a new error, don't use deep comparison for errors.
                finalState.error = err;
                // Error event and retry logic. Only for the actual request, not
                // deduped ones.
                if (shouldStartNewRequest && callbackSafeguard()) {
                    currentConfig.onError(err, key, currentConfig);
                    if (shouldRetryOnError === true || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__isFunction$3e$__["isFunction"])(shouldRetryOnError) && shouldRetryOnError(err)) {
                        if (!getConfig().revalidateOnFocus || !getConfig().revalidateOnReconnect || isActive()) {
                            // If it's inactive, stop. It will auto-revalidate when
                            // refocusing or reconnecting.
                            // When retrying, deduplication is always enabled.
                            currentConfig.onErrorRetry(err, key, currentConfig, (_opts)=>{
                                const revalidators = EVENT_REVALIDATORS[key];
                                if (revalidators && revalidators[0]) {
                                    revalidators[0](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__revalidateEvents$3e$__["revalidateEvents"].ERROR_REVALIDATE_EVENT, _opts);
                                }
                            }, {
                                retryCount: (opts.retryCount || 0) + 1,
                                dedupe: true
                            });
                        }
                    }
                }
            }
        }
        // Mark loading as stopped.
        loading = false;
        // Update the current hook's state.
        finishRequestAndUpdateState();
        return true;
    }, // `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        key,
        cache
    ]);
    // Similar to the global mutate but bound to the current cache and key.
    // `cache` isn't allowed to change during the lifecycle.
    const boundMutate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((...args)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__n__as__internalMutate$3e$__["internalMutate"])(cache, keyRef.current, ...args);
    }, []);
    // The logic for updating refs.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__u__as__useIsomorphicLayoutEffect$3e$__["useIsomorphicLayoutEffect"])(()=>{
        fetcherRef.current = fetcher;
        configRef.current = config;
        // Handle laggy data updates. If there's cached data of the current key,
        // it'll be the correct reference.
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(cachedData)) {
            laggyDataRef.current = cachedData;
        }
    });
    // After mounted or key changed.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__u__as__useIsomorphicLayoutEffect$3e$__["useIsomorphicLayoutEffect"])(()=>{
        if (!key) return;
        const softRevalidate = revalidate.bind(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__U__as__UNDEFINED$3e$__["UNDEFINED"], WITH_DEDUPE);
        let nextFocusRevalidatedAt = 0;
        if (getConfig().revalidateOnFocus) {
            const initNow = Date.now();
            nextFocusRevalidatedAt = initNow + getConfig().focusThrottleInterval;
        }
        // Expose revalidators to global event listeners. So we can trigger
        // revalidation from the outside.
        const onRevalidate = (type, opts = {})=>{
            if (type == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__revalidateEvents$3e$__["revalidateEvents"].FOCUS_EVENT) {
                const now = Date.now();
                if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
                    nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
                    softRevalidate();
                }
            } else if (type == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__revalidateEvents$3e$__["revalidateEvents"].RECONNECT_EVENT) {
                if (getConfig().revalidateOnReconnect && isActive()) {
                    softRevalidate();
                }
            } else if (type == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__revalidateEvents$3e$__["revalidateEvents"].MUTATE_EVENT) {
                return revalidate();
            } else if (type == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__revalidateEvents$3e$__["revalidateEvents"].ERROR_REVALIDATE_EVENT) {
                return revalidate(opts);
            }
            return;
        };
        const unsubEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subscribeCallback"])(key, EVENT_REVALIDATORS, onRevalidate);
        // Mark the component as mounted and update corresponding refs.
        unmountedRef.current = false;
        keyRef.current = key;
        initialMountedRef.current = true;
        // Keep the original key in the cache.
        setCache({
            _k: fnArg
        });
        // Trigger a revalidation
        if (shouldDoInitialRevalidation) {
            // Performance optimization: if a request is already in progress for this key,
            // skip the revalidation to avoid redundant work
            if (!FETCH[key]) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(data) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__I__as__IS_SERVER$3e$__["IS_SERVER"]) {
                    // Revalidate immediately.
                    softRevalidate();
                } else {
                    // Delay the revalidate if we have data to return so we won't block
                    // rendering.
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__t__as__rAF$3e$__["rAF"])(softRevalidate);
                }
            }
        }
        return ()=>{
            // Mark it as unmounted.
            unmountedRef.current = true;
            unsubEvents();
        };
    }, [
        key
    ]);
    // Polling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__u__as__useIsomorphicLayoutEffect$3e$__["useIsomorphicLayoutEffect"])(()=>{
        let timer;
        function next() {
            // Use the passed interval
            // ...or invoke the function with the updated data to get the interval
            const interval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__isFunction$3e$__["isFunction"])(refreshInterval) ? refreshInterval(getCache().data) : refreshInterval;
            // We only start the next interval if `refreshInterval` is not 0, and:
            // - `force` is true, which is the start of polling
            // - or `timer` is not 0, which means the effect wasn't canceled
            if (interval && timer !== -1) {
                timer = setTimeout(execute, interval);
            }
        }
        function execute() {
            // Check if it's OK to execute:
            // Only revalidate when the page is visible, online, and not errored.
            if (!getCache().error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
                revalidate(WITH_DEDUPE).then(next);
            } else {
                // Schedule the next interval to check again.
                next();
            }
        }
        next();
        return ()=>{
            if (timer) {
                clearTimeout(timer);
                timer = -1;
            }
        };
    }, [
        refreshInterval,
        refreshWhenHidden,
        refreshWhenOffline,
        key
    ]);
    // Display debug info in React DevTools.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDebugValue"])(returnedData);
    // In Suspense mode, we can't return the empty `data` state.
    // If there is an `error`, the `error` needs to be thrown to the error boundary.
    // If there is no `error`, the `revalidation` promise needs to be thrown to
    // the suspense boundary.
    if (suspense) {
        // SWR should throw when trying to use Suspense on the server with React 18,
        // without providing any fallback data. This causes hydration errors. See:
        // https://github.com/vercel/swr/issues/1832
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__r__as__IS_REACT_LEGACY$3e$__["IS_REACT_LEGACY"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__I__as__IS_SERVER$3e$__["IS_SERVER"] && hasKeyButNoData) {
            throw new Error('Fallback data is required when using Suspense in SSR.');
        }
        // Always update fetcher and config refs even with the Suspense mode.
        if (hasKeyButNoData) {
            fetcherRef.current = fetcher;
            configRef.current = config;
            unmountedRef.current = false;
        }
        const req = PRELOAD[key];
        const mutateReq = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(req) && hasKeyButNoData ? boundMutate(req) : resolvedUndef;
        use(mutateReq);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(error) && hasKeyButNoData) {
            throw error;
        }
        const revalidation = hasKeyButNoData ? revalidate(WITH_DEDUPE) : resolvedUndef;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(returnedData) && hasKeyButNoData) {
            // @ts-ignore modify react promise status
            revalidation.status = 'fulfilled';
            // @ts-ignore modify react promise value
            revalidation.value = true;
        }
        use(revalidation);
    }
    const swrResponse = {
        mutate: boundMutate,
        get data () {
            stateDependencies.data = true;
            return returnedData;
        },
        get error () {
            stateDependencies.error = true;
            return error;
        },
        get isValidating () {
            stateDependencies.isValidating = true;
            return isValidating;
        },
        get isLoading () {
            stateDependencies.isLoading = true;
            return isLoading;
        }
    };
    return swrResponse;
};
const SWRConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__O__as__OBJECT$3e$__["OBJECT"].defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__g__as__SWRConfig$3e$__["SWRConfig"], 'defaultValue', {
    value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$12s$2d$CCVTDPOP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__defaultConfig$3e$__["defaultConfig"]
});
/**
 * A hook to fetch data.
 *
 * @see {@link https://swr.vercel.app}
 *
 * @example
 * ```jsx
 * import useSWR from 'swr'
 * function Profile() {
 *   const { data, error, isLoading } = useSWR('/api/user', fetcher)
 *   if (error) return <div>failed to load</div>
 *   if (isLoading) return <div>loading...</div>
 *   return <div>hello {data.name}!</div>
 * }
 * ```
 */ const useSWR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withArgs"])(useSWRHandler);
;
}),
"[project]/node_modules/dequal/lite/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dequal",
    ()=>dequal
]);
var has = Object.prototype.hasOwnProperty;
function dequal(foo, bar) {
    var ctor, len;
    if (foo === bar) return true;
    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
        if (ctor === Date) return foo.getTime() === bar.getTime();
        if (ctor === RegExp) return foo.toString() === bar.toString();
        if (ctor === Array) {
            if ((len = foo.length) === bar.length) {
                while(len-- && dequal(foo[len], bar[len]));
            }
            return len === -1;
        }
        if (!ctor || typeof foo === 'object') {
            len = 0;
            for(ctor in foo){
                if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
                if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
            }
            return Object.keys(bar).length === len;
        }
    }
    return foo !== foo && bar !== bar;
}
}),
"[project]/node_modules/@ai-sdk/react/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Chat",
    ()=>Chat,
    "experimental_useObject",
    ()=>experimental_useObject,
    "useChat",
    ()=>useChat,
    "useCompletion",
    ()=>useCompletion
]);
// src/use-chat.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// src/chat.react.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ai/dist/index.mjs [app-ssr] (ecmascript) <locals>");
// src/throttle.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$throttleit$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/throttleit/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/index/index.mjs [app-ssr] (ecmascript) <locals>");
// src/use-object.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@ai-sdk/provider-utils/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
;
;
;
function throttle(fn, waitMs) {
    return waitMs != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$throttleit$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(fn, waitMs) : fn;
}
// src/chat.react.ts
var _messages, _status, _error, _messagesCallbacks, _statusCallbacks, _errorCallbacks, _callMessagesCallbacks, _callStatusCallbacks, _callErrorCallbacks;
var ReactChatState = class {
    constructor(initialMessages = []){
        __privateAdd(this, _messages, void 0);
        __privateAdd(this, _status, "ready");
        __privateAdd(this, _error, void 0);
        __privateAdd(this, _messagesCallbacks, /* @__PURE__ */ new Set());
        __privateAdd(this, _statusCallbacks, /* @__PURE__ */ new Set());
        __privateAdd(this, _errorCallbacks, /* @__PURE__ */ new Set());
        this.pushMessage = (message)=>{
            __privateSet(this, _messages, __privateGet(this, _messages).concat(message));
            __privateGet(this, _callMessagesCallbacks).call(this);
        };
        this.popMessage = ()=>{
            __privateSet(this, _messages, __privateGet(this, _messages).slice(0, -1));
            __privateGet(this, _callMessagesCallbacks).call(this);
        };
        this.replaceMessage = (index, message)=>{
            __privateSet(this, _messages, [
                ...__privateGet(this, _messages).slice(0, index),
                // We deep clone the message here to ensure the new React Compiler (currently in RC) detects deeply nested parts/metadata changes:
                this.snapshot(message),
                ...__privateGet(this, _messages).slice(index + 1)
            ]);
            __privateGet(this, _callMessagesCallbacks).call(this);
        };
        this.snapshot = (value)=>structuredClone(value);
        this["~registerMessagesCallback"] = (onChange, throttleWaitMs)=>{
            const callback = throttleWaitMs ? throttle(onChange, throttleWaitMs) : onChange;
            __privateGet(this, _messagesCallbacks).add(callback);
            return ()=>{
                __privateGet(this, _messagesCallbacks).delete(callback);
            };
        };
        this["~registerStatusCallback"] = (onChange)=>{
            __privateGet(this, _statusCallbacks).add(onChange);
            return ()=>{
                __privateGet(this, _statusCallbacks).delete(onChange);
            };
        };
        this["~registerErrorCallback"] = (onChange)=>{
            __privateGet(this, _errorCallbacks).add(onChange);
            return ()=>{
                __privateGet(this, _errorCallbacks).delete(onChange);
            };
        };
        __privateAdd(this, _callMessagesCallbacks, ()=>{
            __privateGet(this, _messagesCallbacks).forEach((callback)=>callback());
        });
        __privateAdd(this, _callStatusCallbacks, ()=>{
            __privateGet(this, _statusCallbacks).forEach((callback)=>callback());
        });
        __privateAdd(this, _callErrorCallbacks, ()=>{
            __privateGet(this, _errorCallbacks).forEach((callback)=>callback());
        });
        __privateSet(this, _messages, initialMessages);
    }
    get status() {
        return __privateGet(this, _status);
    }
    set status(newStatus) {
        __privateSet(this, _status, newStatus);
        __privateGet(this, _callStatusCallbacks).call(this);
    }
    get error() {
        return __privateGet(this, _error);
    }
    set error(newError) {
        __privateSet(this, _error, newError);
        __privateGet(this, _callErrorCallbacks).call(this);
    }
    get messages() {
        return __privateGet(this, _messages);
    }
    set messages(newMessages) {
        __privateSet(this, _messages, [
            ...newMessages
        ]);
        __privateGet(this, _callMessagesCallbacks).call(this);
    }
};
_messages = new WeakMap();
_status = new WeakMap();
_error = new WeakMap();
_messagesCallbacks = new WeakMap();
_statusCallbacks = new WeakMap();
_errorCallbacks = new WeakMap();
_callMessagesCallbacks = new WeakMap();
_callStatusCallbacks = new WeakMap();
_callErrorCallbacks = new WeakMap();
var _state;
var Chat = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AbstractChat"] {
    constructor({ messages, ...init }){
        const state = new ReactChatState(messages);
        super({
            ...init,
            state
        });
        __privateAdd(this, _state, void 0);
        this["~registerMessagesCallback"] = (onChange, throttleWaitMs)=>__privateGet(this, _state)["~registerMessagesCallback"](onChange, throttleWaitMs);
        this["~registerStatusCallback"] = (onChange)=>__privateGet(this, _state)["~registerStatusCallback"](onChange);
        this["~registerErrorCallback"] = (onChange)=>__privateGet(this, _state)["~registerErrorCallback"](onChange);
        __privateSet(this, _state, state);
    }
};
_state = new WeakMap();
// src/use-chat.ts
function useChat({ experimental_throttle: throttleWaitMs, resume = false, ...options } = {}) {
    const callbacksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(!("chat" in options) ? {
        onToolCall: options.onToolCall,
        onData: options.onData,
        onFinish: options.onFinish,
        onError: options.onError,
        sendAutomaticallyWhen: options.sendAutomaticallyWhen
    } : {});
    if (!("chat" in options)) {
        callbacksRef.current = {
            onToolCall: options.onToolCall,
            onData: options.onData,
            onFinish: options.onFinish,
            onError: options.onError,
            sendAutomaticallyWhen: options.sendAutomaticallyWhen
        };
    }
    const optionsWithCallbacks = {
        ...options,
        onToolCall: (arg)=>{
            var _a, _b;
            return (_b = (_a = callbacksRef.current).onToolCall) == null ? void 0 : _b.call(_a, arg);
        },
        onData: (arg)=>{
            var _a, _b;
            return (_b = (_a = callbacksRef.current).onData) == null ? void 0 : _b.call(_a, arg);
        },
        onFinish: (arg)=>{
            var _a, _b;
            return (_b = (_a = callbacksRef.current).onFinish) == null ? void 0 : _b.call(_a, arg);
        },
        onError: (arg)=>{
            var _a, _b;
            return (_b = (_a = callbacksRef.current).onError) == null ? void 0 : _b.call(_a, arg);
        },
        sendAutomaticallyWhen: (arg)=>{
            var _a, _b, _c;
            return (_c = (_b = (_a = callbacksRef.current).sendAutomaticallyWhen) == null ? void 0 : _b.call(_a, arg)) != null ? _c : false;
        }
    };
    const chatRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("chat" in options ? options.chat : new Chat(optionsWithCallbacks));
    const shouldRecreateChat = "chat" in options && options.chat !== chatRef.current || "id" in options && chatRef.current.id !== options.id;
    if (shouldRecreateChat) {
        chatRef.current = "chat" in options ? options.chat : new Chat(optionsWithCallbacks);
    }
    const subscribeToMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((update)=>chatRef.current["~registerMessagesCallback"](update, throttleWaitMs), // `chatRef.current.id` is required to trigger re-subscription when the chat ID changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        throttleWaitMs,
        chatRef.current.id
    ]);
    const messages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribeToMessages, ()=>chatRef.current.messages, ()=>chatRef.current.messages);
    const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(chatRef.current["~registerStatusCallback"], ()=>chatRef.current.status, ()=>chatRef.current.status);
    const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(chatRef.current["~registerErrorCallback"], ()=>chatRef.current.error, ()=>chatRef.current.error);
    const setMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((messagesParam)=>{
        if (typeof messagesParam === "function") {
            messagesParam = messagesParam(chatRef.current.messages);
        }
        chatRef.current.messages = messagesParam;
    }, [
        chatRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (resume) {
            chatRef.current.resumeStream();
        }
    }, [
        resume,
        chatRef
    ]);
    return {
        id: chatRef.current.id,
        messages,
        setMessages,
        sendMessage: chatRef.current.sendMessage,
        regenerate: chatRef.current.regenerate,
        clearError: chatRef.current.clearError,
        stop: chatRef.current.stop,
        error,
        resumeStream: chatRef.current.resumeStream,
        status,
        /**
     * @deprecated Use `addToolOutput` instead.
     */ addToolResult: chatRef.current.addToolOutput,
        addToolOutput: chatRef.current.addToolOutput,
        addToolApprovalResponse: chatRef.current.addToolApprovalResponse
    };
}
;
;
;
function useCompletion({ api = "/api/completion", id, initialCompletion = "", initialInput = "", credentials, headers, body, streamProtocol = "data", fetch: fetch2, onFinish, onError, experimental_throttle: throttleWaitMs } = {}) {
    const hookId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const completionId = id || hookId;
    const { data, mutate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])([
        api,
        completionId
    ], null, {
        fallbackData: initialCompletion
    });
    const { data: isLoading = false, mutate: mutateLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])([
        completionId,
        "loading"
    ], null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(void 0);
    const completion = data;
    const [abortController, setAbortController] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const extraMetadataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        credentials,
        headers,
        body
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        extraMetadataRef.current = {
            credentials,
            headers,
            body
        };
    }, [
        credentials,
        headers,
        body
    ]);
    const triggerRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (prompt, options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["callCompletionApi"])({
            api,
            prompt,
            credentials: extraMetadataRef.current.credentials,
            headers: {
                ...extraMetadataRef.current.headers,
                ...options == null ? void 0 : options.headers
            },
            body: {
                ...extraMetadataRef.current.body,
                ...options == null ? void 0 : options.body
            },
            streamProtocol,
            fetch: fetch2,
            // throttle streamed ui updates:
            setCompletion: throttle((completion2)=>mutate(completion2, false), throttleWaitMs),
            setLoading: mutateLoading,
            setError,
            setAbortController,
            onFinish,
            onError
        }), [
        mutate,
        mutateLoading,
        api,
        extraMetadataRef,
        setAbortController,
        onFinish,
        onError,
        setError,
        streamProtocol,
        fetch2,
        throttleWaitMs
    ]);
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (abortController) {
            abortController.abort();
            setAbortController(null);
        }
    }, [
        abortController
    ]);
    const setCompletion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((completion2)=>{
        mutate(completion2, false);
    }, [
        mutate
    ]);
    const complete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (prompt, options)=>{
        return triggerRequest(prompt, options);
    }, [
        triggerRequest
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialInput);
    const handleSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        var _a;
        (_a = event == null ? void 0 : event.preventDefault) == null ? void 0 : _a.call(event);
        return input ? complete(input) : void 0;
    }, [
        input,
        complete
    ]);
    const handleInputChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        setInput(e.target.value);
    }, [
        setInput
    ]);
    return {
        completion,
        complete,
        error,
        setCompletion,
        stop,
        input,
        setInput,
        handleInputChange,
        handleSubmit,
        isLoading
    };
}
;
;
;
;
var getOriginalFetch = ()=>fetch;
function useObject({ api, id, schema, // required, in the future we will use it for validation
initialValue, fetch: fetch2, onError, onFinish, headers, credentials }) {
    const hookId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const completionId = id != null ? id : hookId;
    const { data, mutate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])([
        api,
        completionId
    ], null, {
        fallbackData: initialValue
    });
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(void 0);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const abortControllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        var _a;
        try {
            (_a = abortControllerRef.current) == null ? void 0 : _a.abort();
        } catch (ignored) {} finally{
            setIsLoading(false);
            abortControllerRef.current = null;
        }
    }, []);
    const submit = async (input)=>{
        var _a;
        try {
            clearObject();
            setIsLoading(true);
            const abortController = new AbortController();
            abortControllerRef.current = abortController;
            const resolvedHeaders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(headers);
            const actualFetch = fetch2 != null ? fetch2 : getOriginalFetch();
            const response = await actualFetch(api, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["normalizeHeaders"])(resolvedHeaders)
                },
                credentials,
                signal: abortController.signal,
                body: JSON.stringify(input)
            });
            if (!response.ok) {
                throw new Error((_a = await response.text()) != null ? _a : "Failed to fetch the response.");
            }
            if (response.body == null) {
                throw new Error("The response body is empty.");
            }
            let accumulatedText = "";
            let latestObject = void 0;
            await response.body.pipeThrough(new TextDecoderStream()).pipeTo(new WritableStream({
                async write (chunk) {
                    accumulatedText += chunk;
                    const { value } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parsePartialJson"])(accumulatedText);
                    const currentObject = value;
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isDeepEqualData"])(latestObject, currentObject)) {
                        latestObject = currentObject;
                        mutate(currentObject);
                    }
                },
                async close () {
                    setIsLoading(false);
                    abortControllerRef.current = null;
                    if (onFinish != null) {
                        const validationResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["safeValidateTypes"])({
                            value: latestObject,
                            schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["asSchema"])(schema)
                        });
                        onFinish(validationResult.success ? {
                            object: validationResult.value,
                            error: void 0
                        } : {
                            object: void 0,
                            error: validationResult.error
                        });
                    }
                }
            }));
        } catch (error2) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAbortError"])(error2)) {
                return;
            }
            if (onError && error2 instanceof Error) {
                onError(error2);
            }
            setIsLoading(false);
            setError(error2 instanceof Error ? error2 : new Error(String(error2)));
        }
    };
    const clear = ()=>{
        stop();
        clearObject();
    };
    const clearObject = ()=>{
        setError(void 0);
        setIsLoading(false);
        mutate(void 0);
    };
    return {
        submit,
        object: data,
        error,
        isLoading,
        stop,
        clear
    };
}
var experimental_useObject = useObject;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/@elevenlabs/client/dist/lib.modern.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioFormat",
    ()=>U,
    "CommitStrategy",
    ()=>N,
    "Conversation",
    ()=>q,
    "Input",
    ()=>M,
    "Output",
    ()=>D,
    "RealtimeConnection",
    ()=>O,
    "RealtimeEvents",
    ()=>x,
    "Scribe",
    ()=>W,
    "SessionConnectionError",
    ()=>m,
    "TextConversation",
    ()=>k,
    "VoiceConversation",
    ()=>T,
    "WebRTCConnection",
    ()=>y,
    "WebSocketConnection",
    ()=>v,
    "createConnection",
    ()=>S,
    "postOverallFeedback",
    ()=>F
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-ssr] (ecmascript)");
;
function s() {
    return s = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", s.apply(null, arguments);
}
const a = new Uint8Array(0);
class r {
    static getFullOptions(e) {
        var t;
        const n = function(e) {
            var t, n;
            const { textOnly: o } = null != (t = null == (n = e.overrides) ? void 0 : n.conversation) ? t : {}, { textOnly: i } = e;
            return "boolean" == typeof i ? ("boolean" == typeof o && i !== o && console.warn(`Conflicting textOnly options provided: ${i} via options.textOnly (will be used) and ${o} via options.overrides.conversation.textOnly (will be ignored)`), i) : "boolean" == typeof o ? o : void 0;
        }(e);
        return s({
            clientTools: {},
            onConnect: ()=>{},
            onDebug: ()=>{},
            onDisconnect: ()=>{},
            onError: ()=>{},
            onMessage: ()=>{},
            onAudio: ()=>{},
            onModeChange: ()=>{},
            onStatusChange: ()=>{},
            onCanSendFeedbackChange: ()=>{},
            onInterruption: ()=>{}
        }, e, {
            textOnly: n,
            overrides: s({}, e.overrides, {
                conversation: s({}, null == (t = e.overrides) ? void 0 : t.conversation, {
                    textOnly: n
                })
            })
        });
    }
    constructor(e, t){
        var n = this;
        this.options = void 0, this.connection = void 0, this.lastInterruptTimestamp = 0, this.mode = "listening", this.status = "connecting", this.volume = 1, this.currentEventId = 1, this.lastFeedbackEventId = 0, this.canSendFeedback = !1, this.endSessionWithDetails = async function(e) {
            "connected" !== n.status && "connecting" !== n.status || (n.updateStatus("disconnecting"), await n.handleEndSession(), n.updateStatus("disconnected"), n.options.onDisconnect && n.options.onDisconnect(e));
        }, this.onMessage = async function(e) {
            switch(e.type){
                case "interruption":
                    return void n.handleInterruption(e);
                case "agent_response":
                    return void n.handleAgentResponse(e);
                case "user_transcript":
                    return void n.handleUserTranscript(e);
                case "internal_tentative_agent_response":
                    return void n.handleTentativeAgentResponse(e);
                case "client_tool_call":
                    try {
                        await n.handleClientToolCall(e);
                    } catch (t) {
                        n.onError(`Unexpected error in client tool call handling: ${t instanceof Error ? t.message : String(t)}`, {
                            clientToolName: e.client_tool_call.tool_name,
                            toolCallId: e.client_tool_call.tool_call_id
                        });
                    }
                    return;
                case "audio":
                    return void n.handleAudio(e);
                case "vad_score":
                    return void n.handleVadScore(e);
                case "ping":
                    return void n.connection.sendMessage({
                        type: "pong",
                        event_id: e.ping_event.event_id
                    });
                case "mcp_tool_call":
                    return void n.handleMCPToolCall(e);
                case "mcp_connection_status":
                    return void n.handleMCPConnectionStatus(e);
                case "agent_tool_request":
                    return void n.handleAgentToolRequest(e);
                case "agent_tool_response":
                    return void n.handleAgentToolResponse(e);
                case "conversation_initiation_metadata":
                    return void n.handleConversationMetadata(e);
                case "asr_initiation_metadata":
                    return void n.handleAsrInitiationMetadata(e);
                case "agent_chat_response_part":
                    return void n.handleAgentChatResponsePart(e);
                case "guardrail_triggered":
                    return void n.handleGuardrailTriggered(e);
                case "error":
                    return void n.handleErrorEvent(e);
                default:
                    return void (n.options.onDebug && n.options.onDebug(e));
            }
        }, this.setVolume = ({ volume: e })=>{
            this.volume = e;
        }, this.options = e, this.connection = t, this.options.onConnect && this.options.onConnect({
            conversationId: t.conversationId
        }), this.connection.onMessage(this.onMessage), this.connection.onDisconnect(this.endSessionWithDetails), this.connection.onModeChange((e)=>this.updateMode(e)), this.updateStatus("connected");
    }
    endSession() {
        return this.endSessionWithDetails({
            reason: "user"
        });
    }
    async handleEndSession() {
        this.connection.close();
    }
    updateMode(e) {
        e !== this.mode && (this.mode = e, this.options.onModeChange && this.options.onModeChange({
            mode: e
        }));
    }
    updateStatus(e) {
        e !== this.status && (this.status = e, this.options.onStatusChange && this.options.onStatusChange({
            status: e
        }));
    }
    updateCanSendFeedback() {
        const e = this.currentEventId !== this.lastFeedbackEventId;
        this.canSendFeedback !== e && (this.canSendFeedback = e, this.options.onCanSendFeedbackChange && this.options.onCanSendFeedbackChange({
            canSendFeedback: e
        }));
    }
    handleInterruption(e) {
        e.interruption_event && (this.lastInterruptTimestamp = e.interruption_event.event_id, this.options.onInterruption && this.options.onInterruption({
            event_id: e.interruption_event.event_id
        }));
    }
    handleAgentResponse(e) {
        this.options.onMessage && this.options.onMessage({
            source: "ai",
            role: "agent",
            message: e.agent_response_event.agent_response,
            event_id: e.agent_response_event.event_id
        });
    }
    handleUserTranscript(e) {
        this.options.onMessage && this.options.onMessage({
            source: "user",
            role: "user",
            message: e.user_transcription_event.user_transcript,
            event_id: e.user_transcription_event.event_id
        });
    }
    handleTentativeAgentResponse(e) {
        this.options.onDebug && this.options.onDebug({
            type: "tentative_agent_response",
            response: e.tentative_agent_response_internal_event.tentative_agent_response
        });
    }
    handleVadScore(e) {
        this.options.onVadScore && this.options.onVadScore({
            vadScore: e.vad_score_event.vad_score
        });
    }
    async handleClientToolCall(e) {
        if (Object.prototype.hasOwnProperty.call(this.options.clientTools, e.client_tool_call.tool_name)) try {
            var t;
            const n = null != (t = await this.options.clientTools[e.client_tool_call.tool_name](e.client_tool_call.parameters)) ? t : "Client tool execution successful.", o = "object" == typeof n ? JSON.stringify(n) : String(n);
            this.connection.sendMessage({
                type: "client_tool_result",
                tool_call_id: e.client_tool_call.tool_call_id,
                result: o,
                is_error: !1
            });
        } catch (t) {
            this.onError(`Client tool execution failed with following error: ${null == t ? void 0 : t.message}`, {
                clientToolName: e.client_tool_call.tool_name
            }), this.connection.sendMessage({
                type: "client_tool_result",
                tool_call_id: e.client_tool_call.tool_call_id,
                result: `Client tool execution failed: ${null == t ? void 0 : t.message}`,
                is_error: !0
            });
        }
        else {
            if (this.options.onUnhandledClientToolCall) return void this.options.onUnhandledClientToolCall(e.client_tool_call);
            this.onError(`Client tool with name ${e.client_tool_call.tool_name} is not defined on client`, {
                clientToolName: e.client_tool_call.tool_name
            }), this.connection.sendMessage({
                type: "client_tool_result",
                tool_call_id: e.client_tool_call.tool_call_id,
                result: `Client tool with name ${e.client_tool_call.tool_name} is not defined on client`,
                is_error: !0
            });
        }
    }
    handleAudio(e) {}
    handleMCPToolCall(e) {
        this.options.onMCPToolCall && this.options.onMCPToolCall(e.mcp_tool_call);
    }
    handleMCPConnectionStatus(e) {
        this.options.onMCPConnectionStatus && this.options.onMCPConnectionStatus(e.mcp_connection_status);
    }
    handleAgentToolRequest(e) {
        this.options.onAgentToolRequest && this.options.onAgentToolRequest(e.agent_tool_request);
    }
    handleAgentToolResponse(e) {
        "end_call" === e.agent_tool_response.tool_name && this.endSessionWithDetails({
            reason: "agent",
            context: new CloseEvent("end_call", {
                reason: "Agent ended the call"
            })
        }), this.options.onAgentToolResponse && this.options.onAgentToolResponse(e.agent_tool_response);
    }
    handleConversationMetadata(e) {
        this.options.onConversationMetadata && this.options.onConversationMetadata(e.conversation_initiation_metadata_event);
    }
    handleAsrInitiationMetadata(e) {
        this.options.onAsrInitiationMetadata && this.options.onAsrInitiationMetadata(e.asr_initiation_metadata_event);
    }
    handleAgentChatResponsePart(e) {
        this.options.onAgentChatResponsePart && this.options.onAgentChatResponsePart(e.text_response_part);
    }
    handleGuardrailTriggered(e) {
        this.options.onGuardrailTriggered && this.options.onGuardrailTriggered();
    }
    handleErrorEvent(e) {
        const t = e.error_event.error_type, n = e.error_event.message || e.error_event.reason || "Unknown error";
        "max_duration_exceeded" !== t ? this.onError(`Server error: ${n}`, {
            errorType: t,
            code: e.error_event.code,
            debugMessage: e.error_event.debug_message,
            details: e.error_event.details
        }) : this.endSessionWithDetails({
            reason: "error",
            message: n,
            context: new Event("max_duration_exceeded")
        });
    }
    onError(e, t) {
        console.error(e, t), this.options.onError && this.options.onError(e, t);
    }
    getId() {
        return this.connection.conversationId;
    }
    isOpen() {
        return "connected" === this.status;
    }
    setMicMuted(e) {
        this.connection.setMicMuted(e);
    }
    getInputByteFrequencyData() {
        return a;
    }
    getOutputByteFrequencyData() {
        return a;
    }
    getInputVolume() {
        return 0;
    }
    getOutputVolume() {
        return 0;
    }
    sendFeedback(e) {
        this.canSendFeedback ? (this.connection.sendMessage({
            type: "feedback",
            score: e ? "like" : "dislike",
            event_id: this.currentEventId
        }), this.lastFeedbackEventId = this.currentEventId, this.updateCanSendFeedback()) : console.warn(0 === this.lastFeedbackEventId ? "Cannot send feedback: the conversation has not started yet." : "Cannot send feedback: feedback has already been sent for the current response.");
    }
    sendContextualUpdate(e) {
        this.connection.sendMessage({
            type: "contextual_update",
            text: e
        });
    }
    sendUserMessage(e) {
        this.connection.sendMessage({
            type: "user_message",
            text: e
        });
    }
    sendUserActivity() {
        this.connection.sendMessage({
            type: "user_activity"
        });
    }
    sendMCPToolApprovalResult(e, t) {
        this.connection.sendMessage({
            type: "mcp_tool_approval_result",
            tool_call_id: e,
            is_approved: t
        });
    }
    sendMultimodalMessage(e) {
        this.connection.sendMessage({
            type: "multimodal_message",
            text: e.text ? {
                type: "user_message",
                text: e.text
            } : void 0,
            file: e.fileId ? {
                type: "file_input",
                file_id: e.fileId
            } : void 0
        });
    }
}
class c {
    constructor(e = {}){
        this.queue = [], this.disconnectionDetails = null, this.onDisconnectCallback = null, this.onMessageCallback = null, this.onModeChangeCallback = null, this.onDebug = void 0, this.onDebug = e.onDebug;
    }
    debug(e) {
        this.onDebug && this.onDebug(e);
    }
    onMessage(e) {
        this.onMessageCallback = e;
        const t = this.queue;
        this.queue = [], t.length > 0 && queueMicrotask(()=>{
            t.forEach(e);
        });
    }
    onDisconnect(e) {
        this.onDisconnectCallback = e;
        const t = this.disconnectionDetails;
        t && queueMicrotask(()=>{
            e(t);
        });
    }
    onModeChange(e) {
        this.onModeChangeCallback = e;
    }
    updateMode(e) {
        var t;
        null == (t = this.onModeChangeCallback) || t.call(this, e);
    }
    disconnect(e) {
        var t;
        this.disconnectionDetails || (this.disconnectionDetails = e, null == (t = this.onDisconnectCallback) || t.call(this, e));
    }
    handleMessage(e) {
        this.onMessageCallback ? this.onMessageCallback(e) : this.queue.push(e);
    }
}
function l(e) {
    const [t, n] = e.split("_");
    if (![
        "pcm",
        "ulaw"
    ].includes(t)) throw new Error(`Invalid format: ${e}`);
    const o = Number.parseInt(n);
    if (Number.isNaN(o)) throw new Error(`Invalid sample rate: ${n}`);
    return {
        format: t,
        sampleRate: o
    };
}
const u = "0.16.0";
function d(e) {
    return !!e.type;
}
const h = "conversation_initiation_client_data";
function p(e) {
    var t;
    const n = {
        type: h
    };
    var o, i, s, a, r, c, l, u;
    return e.overrides && (n.conversation_config_override = {
        agent: {
            prompt: null == (o = e.overrides.agent) ? void 0 : o.prompt,
            first_message: null == (i = e.overrides.agent) ? void 0 : i.firstMessage,
            language: null == (s = e.overrides.agent) ? void 0 : s.language
        },
        tts: {
            voice_id: null == (a = e.overrides.tts) ? void 0 : a.voiceId,
            speed: null == (r = e.overrides.tts) ? void 0 : r.speed,
            stability: null == (c = e.overrides.tts) ? void 0 : c.stability,
            similarity_boost: null == (l = e.overrides.tts) ? void 0 : l.similarityBoost
        },
        conversation: {
            text_only: null == (u = e.overrides.conversation) ? void 0 : u.textOnly
        }
    }), e.customLlmExtraBody && (n.custom_llm_extra_body = e.customLlmExtraBody), e.dynamicVariables && (n.dynamic_variables = e.dynamicVariables), e.userId && (n.user_id = e.userId), null != (t = e.overrides) && t.client && (n.source_info = {
        source: e.overrides.client.source,
        version: e.overrides.client.version
    }), n;
}
class m extends Error {
    constructor(e, t){
        super(e), this.closeCode = void 0, this.closeReason = void 0, this.name = "SessionConnectionError", this.closeCode = null == t ? void 0 : t.closeCode, this.closeReason = null == t ? void 0 : t.closeReason;
    }
}
class v extends c {
    constructor(e, t, n, o){
        super(), this.socket = void 0, this.conversationId = void 0, this.inputFormat = void 0, this.outputFormat = void 0, this.socket = e, this.conversationId = t, this.inputFormat = n, this.outputFormat = o, this.socket.addEventListener("error", (e)=>{
            setTimeout(()=>this.disconnect({
                    reason: "error",
                    message: "The connection was closed due to a socket error.",
                    context: e
                }), 0);
        }), this.socket.addEventListener("close", (e)=>{
            this.disconnect(1e3 === e.code ? {
                reason: "agent",
                context: e,
                closeCode: e.code,
                closeReason: e.reason || void 0
            } : {
                reason: "error",
                message: e.reason || "The connection was closed by the server.",
                context: e,
                closeCode: e.code,
                closeReason: e.reason || void 0
            });
        }), this.socket.addEventListener("message", (e)=>{
            try {
                const t = JSON.parse(e.data);
                if (!d(t)) return void this.debug({
                    type: "invalid_event",
                    message: "Received invalid socket event",
                    data: e.data
                });
                this.handleMessage(t);
            } catch (t) {
                this.debug({
                    type: "parsing_error",
                    message: "Failed to parse socket message",
                    error: t instanceof Error ? t.message : String(t),
                    data: e.data
                });
            }
        });
    }
    static async create(e) {
        let t = null;
        try {
            var n, o, i;
            const s = null != (n = e.origin) ? n : "wss://api.elevenlabs.io";
            let a;
            const r = (null == (o = e.overrides) || null == (o = o.client) ? void 0 : o.version) || u, c = (null == (i = e.overrides) || null == (i = i.client) ? void 0 : i.source) || "js_sdk";
            if (e.signedUrl) {
                const t = e.signedUrl.includes("?") ? "&" : "?";
                a = `${e.signedUrl}${t}source=${c}&version=${r}`;
            } else a = `${s}/v1/convai/conversation?agent_id=${e.agentId}&source=${c}&version=${r}`;
            e.environment && (a += `&environment=${encodeURIComponent(e.environment)}`);
            const h = [
                "convai"
            ];
            e.authorization && h.push(`bearer.${e.authorization}`), t = new WebSocket(a, h);
            const g = await new Promise((n, o)=>{
                t.addEventListener("open", ()=>{
                    var n;
                    const o = p(e);
                    null == (n = t) || n.send(JSON.stringify(o));
                }, {
                    once: !0
                }), t.addEventListener("error", (e)=>{
                    setTimeout(()=>o(new m("The connection was closed due to a socket error.")), 0);
                }), t.addEventListener("close", (e)=>{
                    o(new m(e.reason || (1e3 === e.code ? "Connection closed normally before session could be established." : "Connection closed unexpectedly before session could be established."), {
                        closeCode: e.code,
                        closeReason: e.reason || void 0
                    }));
                }), t.addEventListener("message", (e)=>{
                    const t = JSON.parse(e.data);
                    d(t) && ("conversation_initiation_metadata" === t.type ? n(t.conversation_initiation_metadata_event) : console.warn("First received message is not conversation metadata."));
                }, {
                    once: !0
                });
            }), { conversation_id: f, agent_output_audio_format: _, user_input_audio_format: w } = g, b = l(null != w ? w : "pcm_16000"), y = l(_);
            return new v(t, f, b, y);
        } catch (e) {
            var s;
            throw null == (s = t) || s.close(), e;
        }
    }
    close() {
        this.socket.close(1e3, "User ended conversation");
    }
    sendMessage(e) {
        this.socket.send(JSON.stringify(e));
    }
    async setMicMuted(e) {
        console.warn(`WebSocket connection setMicMuted called with ${e}, but this is handled by VoiceConversation`);
    }
}
function g(e) {
    const t = new Uint8Array(e);
    return window.btoa(String.fromCharCode(...t));
}
function f(e) {
    const t = window.atob(e), n = t.length, o = new Uint8Array(n);
    for(let e = 0; e < n; e++)o[e] = t.charCodeAt(e);
    return o.buffer;
}
const _ = new Map;
function w(e, t) {
    return async (n, o)=>{
        const i = _.get(e);
        if (i) return n.addModule(i);
        if (o) try {
            return await n.addModule(o), void _.set(e, o);
        } catch (t) {
            throw new Error(`Failed to load the ${e} worklet module from path: ${o}. Error: ${t}`);
        }
        const s = new Blob([
            t
        ], {
            type: "application/javascript"
        }), a = URL.createObjectURL(s);
        try {
            return await n.addModule(a), void _.set(e, a);
        } catch (e) {
            URL.revokeObjectURL(a);
        }
        try {
            const o = `data:application/javascript;base64,${btoa(t)}`;
            await n.addModule(o), _.set(e, o);
        } catch (t) {
            throw new Error(`Failed to load the ${e} worklet module. Make sure the browser supports AudioWorklets. If you are using a strict CSP, you may need to self-host the worklet files.`);
        }
    };
}
const b = w("rawAudioProcessor", '/*\n * ulaw encoding logic taken from the wavefile library\n * https://github.com/rochars/wavefile/blob/master/lib/codecs/mulaw.js\n * USED BY @elevenlabs/client\n */\n\nconst BIAS = 0x84;\nconst CLIP = 32635;\nconst encodeTable = [\n  0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,\n  4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,\n  5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,\n  5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,\n  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,\n  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,\n  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,\n  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,\n  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,\n  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,\n  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,\n  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,\n  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,\n  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,\n  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,\n  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7\n];\n\nfunction encodeSample(sample) {\n  let sign;\n  let exponent;\n  let mantissa;\n  let muLawSample;\n  sign = (sample >> 8) & 0x80;\n  if (sign !== 0) sample = -sample;\n  sample = sample + BIAS;\n  if (sample > CLIP) sample = CLIP;\n  exponent = encodeTable[(sample>>7) & 0xFF];\n  mantissa = (sample >> (exponent+3)) & 0x0F;\n  muLawSample = ~(sign | (exponent << 4) | mantissa);\n  \n  return muLawSample;\n}\n\nclass RawAudioProcessor extends AudioWorkletProcessor {\n  constructor() {\n    super();\n              \n    this.port.onmessage = ({ data }) => {\n      switch (data.type) {\n        case "setFormat":\n          this.isMuted = false;\n          this.buffer = []; // Initialize an empty buffer\n          this.bufferSize = data.sampleRate / 10;\n          this.format = data.format;\n\n          if (globalThis.LibSampleRate && sampleRate !== data.sampleRate) {\n            globalThis.LibSampleRate.create(1, sampleRate, data.sampleRate).then(resampler => {\n              this.resampler = resampler;\n            });\n          }\n          break;\n        case "setMuted":\n          this.isMuted = data.isMuted;\n          break;\n      }\n    };\n  }\n  process(inputs) {\n    if (!this.buffer) {\n      return true;\n    }\n    \n    const input = inputs[0]; // Get the first input node\n    if (input.length > 0) {\n      let channelData = input[0]; // Get the first channel\'s data\n\n      // Resample the audio if necessary\n      if (this.resampler) {\n        channelData = this.resampler.full(channelData);\n      }\n\n      // Add channel data to the buffer\n      this.buffer.push(...channelData);\n      // Get max volume \n      let sum = 0.0;\n      for (let i = 0; i < channelData.length; i++) {\n        sum += channelData[i] * channelData[i];\n      }\n      const maxVolume = Math.sqrt(sum / channelData.length);\n      // Check if buffer size has reached or exceeded the threshold\n      if (this.buffer.length >= this.bufferSize) {\n        const float32Array = this.isMuted \n          ? new Float32Array(this.buffer.length)\n          : new Float32Array(this.buffer);\n\n        let encodedArray = this.format === "ulaw"\n          ? new Uint8Array(float32Array.length)\n          : new Int16Array(float32Array.length);\n\n        // Iterate through the Float32Array and convert each sample to PCM16\n        for (let i = 0; i < float32Array.length; i++) {\n          // Clamp the value to the range [-1, 1]\n          let sample = Math.max(-1, Math.min(1, float32Array[i]));\n\n          // Scale the sample to the range [-32768, 32767]\n          let value = sample < 0 ? sample * 32768 : sample * 32767;\n          if (this.format === "ulaw") {\n            value = encodeSample(Math.round(value));\n          }\n\n          encodedArray[i] = value;\n        }\n\n        // Send the buffered data to the main script\n        this.port.postMessage([encodedArray, maxVolume]);\n\n        // Clear the buffer after sending\n        this.buffer = [];\n      }\n    }\n    return true; // Continue processing\n  }\n}\nregisterProcessor("rawAudioProcessor", RawAudioProcessor);\n');
class y extends c {
    constructor(e, t, n, o, i = {}){
        super(i), this.conversationId = void 0, this.inputFormat = void 0, this.outputFormat = void 0, this.room = void 0, this.isConnected = !1, this.audioEventId = 1, this.audioCaptureContext = null, this.audioElements = [], this.outputDeviceId = null, this.outputAnalyser = null, this.outputFrequencyData = null, this.room = e, this.conversationId = t, this.inputFormat = n, this.outputFormat = o, this.setupRoomEventListeners();
    }
    static async create(n) {
        let o;
        if ("conversationToken" in n && n.conversationToken) o = n.conversationToken;
        else {
            if (!("agentId" in n) || !n.agentId) throw new Error("Either conversationToken or agentId is required for WebRTC connection");
            try {
                var i, s, a;
                const e = (null == (i = n.overrides) || null == (i = i.client) ? void 0 : i.version) || u, t = (null == (s = n.overrides) || null == (s = s.client) ? void 0 : s.source) || "js_sdk";
                let c = `${(r = null != (a = n.origin) ? a : "https://api.elevenlabs.io", r.replace(/^wss:\/\//, "https://"))}/v1/convai/conversation/token?agent_id=${n.agentId}&source=${t}&version=${e}`;
                n.environment && (c += `&environment=${encodeURIComponent(n.environment)}`);
                const l = await fetch(c);
                if (!l.ok) throw new Error(`ElevenLabs API returned ${l.status} ${l.statusText}`);
                if (o = (await l.json()).token, !o) throw new Error("No conversation token received from API");
            } catch (e) {
                let t = e instanceof Error ? e.message : String(e);
                throw e instanceof Error && e.message.includes("401") && (t = "Your agent has authentication enabled, but no signed URL or conversation token was provided."), new Error(`Failed to fetch conversation token for agent ${n.agentId}: ${t}`);
            }
        }
        var r;
        const c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Room"];
        try {
            const e = `room_${Date.now()}`, i = l("pcm_48000"), s = l("pcm_48000"), a = new y(c, e, i, s, n), r = n.livekitUrl || "wss://livekit.rtc.elevenlabs.io";
            var d;
            await c.connect(r, o), await new Promise((e)=>{
                if (a.isConnected) e();
                else {
                    const n = ()=>{
                        c.off(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoomEvent"].Connected, n), e();
                    };
                    c.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoomEvent"].Connected, n);
                }
            }), c.name && (a.conversationId = (null == (d = c.name.match(/(conv_[a-zA-Z0-9]+)/)) ? void 0 : d[0]) || c.name), n.textOnly || await c.localParticipant.setMicrophoneEnabled(!0);
            const u = p(n);
            return a.debug({
                type: h,
                message: u
            }), await a.sendMessage(u), a;
        } catch (e) {
            throw await c.disconnect(), e;
        }
    }
    setupRoomEventListeners() {
        var e = this;
        this.room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoomEvent"].Connected, async function() {
            e.isConnected = !0, console.info("WebRTC room connected");
        }), this.room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoomEvent"].Disconnected, (e)=>{
            this.isConnected = !1, this.disconnect({
                reason: "agent",
                context: new CloseEvent("close", {
                    reason: null == e ? void 0 : e.toString()
                })
            });
        }), this.room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoomEvent"].ConnectionStateChanged, (e)=>{
            e === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectionState"].Disconnected && (this.isConnected = !1, this.disconnect({
                reason: "error",
                message: `LiveKit connection state changed to ${e}`,
                context: new Event("connection_state_changed")
            }));
        }), this.room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoomEvent"].DataReceived, (e, t)=>{
            try {
                const t = JSON.parse((new TextDecoder).decode(e));
                if ("audio" === t.type) return;
                d(t) ? this.handleMessage(t) : console.warn("Invalid socket event received:", t);
            } catch (t) {
                console.warn("Failed to parse incoming data message:", t), console.warn("Raw payload:", (new TextDecoder).decode(e));
            }
        }), this.room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoomEvent"].TrackSubscribed, async function(t, n, i) {
            if (t.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Kind.Audio && i.identity.includes("agent")) {
                const n = t, o = n.attach();
                if (o.autoplay = !0, o.controls = !1, e.outputDeviceId && o.setSinkId) try {
                    await o.setSinkId(e.outputDeviceId);
                } catch (e) {
                    console.warn("Failed to set output device for new audio element:", e);
                }
                o.style.display = "none", document.body.appendChild(o), e.audioElements.push(o), 1 === e.audioElements.length && (null == e.onDebug || e.onDebug({
                    type: "audio_element_ready"
                })), await e.setupAudioCapture(n);
            }
        }), this.room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoomEvent"].ActiveSpeakersChanged, async function(t) {
            e.updateMode(t.length > 0 && t[0].identity.startsWith("agent") ? "speaking" : "listening");
        }), this.room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantDisconnected, (e)=>{
            var t;
            null != (t = e.identity) && t.startsWith("agent") && this.disconnect({
                reason: "agent",
                context: new CloseEvent("close", {
                    reason: "agent disconnected"
                })
            });
        });
    }
    close() {
        if (this.isConnected) {
            try {
                this.room.localParticipant.audioTrackPublications.forEach((e)=>{
                    e.track && e.track.stop();
                });
            } catch (e) {
                console.warn("Error stopping local tracks:", e);
            }
            this.audioCaptureContext && (this.audioCaptureContext.close().catch((e)=>{
                console.warn("Error closing audio capture context:", e);
            }), this.audioCaptureContext = null), this.audioElements.forEach((e)=>{
                e.parentNode && e.parentNode.removeChild(e);
            }), this.audioElements = [], this.room.disconnect();
        }
    }
    async sendMessage(e) {
        if (this.isConnected && this.room.localParticipant) {
            if (!("user_audio_chunk" in e)) try {
                const t = (new TextEncoder).encode(JSON.stringify(e));
                await this.room.localParticipant.publishData(t, {
                    reliable: !0
                });
            } catch (t) {
                this.debug({
                    type: "send_message_error",
                    message: {
                        message: e,
                        error: t
                    }
                }), console.error("Failed to send message via WebRTC:", t);
            }
        } else console.warn("Cannot send message: room not connected or no local participant");
    }
    getRoom() {
        return this.room;
    }
    async setMicMuted(e) {
        if (!this.isConnected || !this.room.localParticipant) return void console.warn("Cannot set microphone muted: room not connected or no local participant");
        const t = this.room.localParticipant.getTrackPublication(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.Microphone);
        if (null != t && t.track) try {
            e ? await t.track.mute() : await t.track.unmute();
        } catch (t) {
            await this.room.localParticipant.setMicrophoneEnabled(!e);
        }
        else await this.room.localParticipant.setMicrophoneEnabled(!e);
    }
    async setupAudioCapture(e) {
        try {
            const t = new AudioContext;
            this.audioCaptureContext = t, this.outputAnalyser = t.createAnalyser(), this.outputAnalyser.fftSize = 2048, this.outputAnalyser.smoothingTimeConstant = .8;
            const n = new MediaStream([
                e.mediaStreamTrack
            ]), o = t.createMediaStreamSource(n);
            o.connect(this.outputAnalyser), await b(t.audioWorklet);
            const i = new AudioWorkletNode(t, "rawAudioProcessor");
            this.outputAnalyser.connect(i), i.port.postMessage({
                type: "setFormat",
                format: this.outputFormat.format,
                sampleRate: this.outputFormat.sampleRate
            }), i.port.onmessage = (e)=>{
                const [t, n] = e.data;
                if (n > .01) {
                    const e = g(t.buffer), n = this.audioEventId++;
                    this.handleMessage({
                        type: "audio",
                        audio_event: {
                            audio_base_64: e,
                            event_id: n
                        }
                    });
                }
            }, o.connect(i);
        } catch (e) {
            console.warn("Failed to set up audio capture:", e);
        }
    }
    setAudioVolume(e) {
        this.audioElements.forEach((t)=>{
            t.volume = e;
        });
    }
    async setAudioOutputDevice(e) {
        if (!("setSinkId" in HTMLAudioElement.prototype)) throw new Error("setSinkId is not supported in this browser");
        const t = this.audioElements.map(async function(t) {
            try {
                await t.setSinkId(e);
            } catch (e) {
                throw console.error("Failed to set sink ID for audio element:", e), e;
            }
        });
        await Promise.all(t), this.outputDeviceId = e;
    }
    async setAudioInputDevice(e) {
        if (!this.isConnected || !this.room.localParticipant) throw new Error("Cannot change input device: room not connected or no local participant");
        try {
            const t = this.room.localParticipant.getTrackPublication(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.Microphone);
            null != t && t.track && (await t.track.stop(), await this.room.localParticipant.unpublishTrack(t.track));
            const n = {
                deviceId: {
                    exact: e
                },
                echoCancellation: !0,
                noiseSuppression: !0,
                autoGainControl: !0,
                channelCount: {
                    ideal: 1
                }
            }, s = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLocalAudioTrack"])(n);
            await this.room.localParticipant.publishTrack(s, {
                name: "microphone",
                source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.Microphone
            });
        } catch (e) {
            console.error("Failed to change input device:", e);
            try {
                await this.room.localParticipant.setMicrophoneEnabled(!0);
            } catch (e) {
                console.error("Failed to recover microphone after device switch error:", e);
            }
            throw e;
        }
    }
    getOutputByteFrequencyData() {
        return this.outputAnalyser ? (null != this.outputFrequencyData || (this.outputFrequencyData = new Uint8Array(this.outputAnalyser.frequencyBinCount)), this.outputAnalyser.getByteFrequencyData(this.outputFrequencyData), this.outputFrequencyData) : null;
    }
}
async function S(e) {
    const t = function(e) {
        return e.connectionType ? e.connectionType : "conversationToken" in e && e.conversationToken ? "webrtc" : "websocket";
    }(e);
    switch(t){
        case "websocket":
            return v.create(e);
        case "webrtc":
            return y.create(e);
        default:
            throw new Error(`Unknown connection type: ${t}`);
    }
}
function E() {
    return [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod"
    ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
async function C(e = {
    default: 0,
    android: 3e3
}) {
    let t = e.default;
    var n;
    if (/android/i.test(navigator.userAgent)) t = null != (n = e.android) ? n : t;
    else if (E()) {
        var o;
        t = null != (o = e.ios) ? o : t;
    }
    t > 0 && await new Promise((e)=>setTimeout(e, t));
}
class k extends r {
    constructor(...e){
        super(...e), this.type = "text";
    }
    static async startSession(e) {
        const t = r.getFullOptions(e);
        t.onStatusChange && t.onStatusChange({
            status: "connecting"
        }), t.onCanSendFeedbackChange && t.onCanSendFeedbackChange({
            canSendFeedback: !1
        }), t.onModeChange && t.onModeChange({
            mode: "listening"
        }), t.onCanSendFeedbackChange && t.onCanSendFeedbackChange({
            canSendFeedback: !1
        });
        let n = null;
        try {
            return await C(t.connectionDelay), n = await S(e), new k(t, n);
        } catch (e) {
            var o;
            throw t.onStatusChange && t.onStatusChange({
                status: "disconnected"
            }), null == (o = n) || o.close(), e;
        }
    }
}
async function R(e, t) {
    const n = t || "https://cdn.jsdelivr.net/npm/@alexanderolsen/libsamplerate-js@2.1.2/dist/libsamplerate.worklet.js";
    await e.audioWorklet.addModule(n);
}
const I = {
    echoCancellation: !0,
    noiseSuppression: !0,
    autoGainControl: !0,
    channelCount: {
        ideal: 1
    }
};
class M {
    static async create({ sampleRate: e, format: t, preferHeadphonesForIosDevices: n, inputDeviceId: o, workletPaths: i, libsampleratePath: a, onError: r }) {
        let c = null, l = null;
        try {
            const u = s({
                sampleRate: {
                    ideal: e
                }
            }, I);
            if (E() && n) {
                const e = (await window.navigator.mediaDevices.enumerateDevices()).find((e)=>"audioinput" === e.kind && [
                        "airpod",
                        "headphone",
                        "earphone"
                    ].find((t)=>e.label.toLowerCase().includes(t)));
                e && (u.deviceId = {
                    ideal: e.deviceId
                });
            }
            o && (u.deviceId = M.getDeviceIdConstraint(o));
            const d = navigator.mediaDevices.getSupportedConstraints().sampleRate;
            c = new window.AudioContext(d ? {
                sampleRate: e
            } : {});
            const h = c.createAnalyser();
            d || await R(c, a), await b(c.audioWorklet, null == i ? void 0 : i.rawAudioProcessor);
            const p = s({
                voiceIsolation: !0
            }, u);
            l = await navigator.mediaDevices.getUserMedia({
                audio: p
            });
            const m = c.createMediaStreamSource(l), v = new AudioWorkletNode(c, "rawAudioProcessor");
            v.port.postMessage({
                type: "setFormat",
                format: t,
                sampleRate: e
            }), m.connect(h), h.connect(v), await c.resume();
            const g = await navigator.permissions.query({
                name: "microphone"
            });
            return new M(c, h, v, l, m, g, r);
        } catch (e) {
            var u, d;
            throw null == (u = l) || u.getTracks().forEach((e)=>{
                e.stop();
            }), null == (d = c) || d.close(), e;
        }
    }
    static getDeviceIdConstraint(e) {
        if (e) return E() ? {
            ideal: e
        } : {
            exact: e
        };
    }
    constructor(e, t, n, o, i, s, a = console.error){
        this.context = void 0, this.analyser = void 0, this.worklet = void 0, this.inputStream = void 0, this.mediaStreamSource = void 0, this.permissions = void 0, this.onError = void 0, this.settingInput = !1, this.handlePermissionsChange = ()=>{
            if ("denied" === this.permissions.state) this.onError("Microphone permission denied");
            else if (!this.settingInput) {
                var e;
                const [t] = this.inputStream.getAudioTracks(), { deviceId: n } = null != (e = null == t ? void 0 : t.getSettings()) ? e : {};
                this.setInputDevice(n).catch((e)=>{
                    this.onError("Failed to reset input device after permission change:", e);
                });
            }
        }, this.context = e, this.analyser = t, this.worklet = n, this.inputStream = o, this.mediaStreamSource = i, this.permissions = s, this.onError = a, this.permissions.addEventListener("change", this.handlePermissionsChange);
    }
    forgetInputStreamAndSource() {
        for (const e of this.inputStream.getTracks())e.stop();
        this.mediaStreamSource.disconnect();
    }
    async close() {
        this.forgetInputStreamAndSource(), this.permissions.removeEventListener("change", this.handlePermissionsChange), await this.context.close();
    }
    setMuted(e) {
        this.worklet.port.postMessage({
            type: "setMuted",
            isMuted: e
        });
    }
    async setInputDevice(e) {
        try {
            if (this.settingInput) throw new Error("Input device is already being set");
            this.settingInput = !0;
            const t = s({}, I);
            e && (t.deviceId = M.getDeviceIdConstraint(e));
            const n = s({
                voiceIsolation: !0
            }, t), o = await navigator.mediaDevices.getUserMedia({
                audio: n
            });
            this.forgetInputStreamAndSource(), this.inputStream = o, this.mediaStreamSource = this.context.createMediaStreamSource(o), this.mediaStreamSource.connect(this.analyser);
        } catch (e) {
            throw this.onError("Failed to switch input device:", e), e;
        } finally{
            this.settingInput = !1;
        }
    }
}
const A = w("audioConcatProcessor", '/*\n * ulaw decoding logic taken from the wavefile library\n * https://github.com/rochars/wavefile/blob/master/lib/codecs/mulaw.js\n * USED BY @elevenlabs/client\n */\n\nconst decodeTable = [0, 132, 396, 924, 1980, 4092, 8316, 16764];\n\nfunction decodeSample(muLawSample) {\n  let sign;\n  let exponent;\n  let mantissa;\n  let sample;\n  muLawSample = ~muLawSample;\n  sign = muLawSample & 0x80;\n  exponent = (muLawSample >> 4) & 0x07;\n  mantissa = muLawSample & 0x0f;\n  sample = decodeTable[exponent] + (mantissa << (exponent + 3));\n  if (sign !== 0) sample = -sample;\n\n  return sample;\n}\n\nclass AudioConcatProcessor extends AudioWorkletProcessor {\n  constructor() {\n    super();\n    this.buffers = []; // Initialize an empty buffer\n    this.cursor = 0;\n    this.currentBuffer = null;\n    this.wasInterrupted = false;\n    this.finished = false;\n\n    this.port.onmessage = ({ data }) => {\n      switch (data.type) {\n        case "setFormat":\n          this.format = data.format;\n          if (globalThis.LibSampleRate && sampleRate !== data.sampleRate) {\n            globalThis.LibSampleRate.create(\n              1,\n              data.sampleRate,\n              sampleRate\n            ).then(resampler => {\n              this.resampler = resampler;\n            });\n          }\n          break;\n        case "buffer":\n          this.wasInterrupted = false;\n          this.buffers.push(\n            this.format === "ulaw"\n              ? new Uint8Array(data.buffer)\n              : new Int16Array(data.buffer)\n          );\n          break;\n        case "interrupt":\n          this.wasInterrupted = true;\n          break;\n        case "clearInterrupted":\n          if (this.wasInterrupted) {\n            this.wasInterrupted = false;\n            this.buffers = [];\n            this.currentBuffer = null;\n          }\n      }\n    };\n  }\n  process(_, outputs) {\n    let finished = false;\n    const output = outputs[0][0];\n    for (let i = 0; i < output.length; i++) {\n      if (!this.currentBuffer) {\n        if (this.buffers.length === 0) {\n          finished = true;\n          break;\n        }\n        this.currentBuffer = this.buffers.shift();\n        if (this.resampler) {\n          this.currentBuffer = this.resampler.full(this.currentBuffer);\n        }\n        this.cursor = 0;\n      }\n\n      let value = this.currentBuffer[this.cursor];\n      if (this.format === "ulaw") {\n        value = decodeSample(value);\n      }\n      output[i] = value / 32768;\n      this.cursor++;\n\n      if (this.cursor >= this.currentBuffer.length) {\n        this.currentBuffer = null;\n      }\n    }\n\n    if (this.finished !== finished) {\n      this.finished = finished;\n      this.port.postMessage({ type: "process", finished });\n    }\n\n    return true; // Continue processing\n  }\n}\n\nregisterProcessor("audioConcatProcessor", AudioConcatProcessor);\n');
class D {
    static async create({ sampleRate: e, format: t, outputDeviceId: n, workletPaths: o, libsampleratePath: i }) {
        let s = null, a = null;
        try {
            const r = navigator.mediaDevices.getSupportedConstraints().sampleRate;
            s = new AudioContext(r ? {
                sampleRate: e
            } : {});
            const c = s.createAnalyser(), l = s.createGain();
            a = new Audio, a.src = "", a.load(), a.autoplay = !0, a.style.display = "none", document.body.appendChild(a);
            const u = s.createMediaStreamDestination();
            a.srcObject = u.stream, l.connect(c), c.connect(u), r && s.sampleRate === e || (s.sampleRate !== e && console.warn(`[ConversationalAI] Sample rate ${e} not available, resampling to ${s.sampleRate}`), await R(s, i)), await A(s.audioWorklet, null == o ? void 0 : o.audioConcatProcessor);
            const d = new AudioWorkletNode(s, "audioConcatProcessor");
            return d.port.postMessage({
                type: "setFormat",
                format: t,
                sampleRate: e
            }), d.connect(l), await s.resume(), n && a.setSinkId && await a.setSinkId(n), new D(s, c, l, d, a);
        } catch (e) {
            var r, c;
            throw null != (r = a) && r.parentNode && a.parentNode.removeChild(a), null == (c = a) || c.pause(), s && "closed" !== s.state && await s.close(), e;
        }
    }
    constructor(e, t, n, o, i){
        this.context = void 0, this.analyser = void 0, this.gain = void 0, this.worklet = void 0, this.audioElement = void 0, this.context = e, this.analyser = t, this.gain = n, this.worklet = o, this.audioElement = i;
    }
    async setOutputDevice(e) {
        if (!("setSinkId" in HTMLAudioElement.prototype)) throw new Error("setSinkId is not supported in this browser");
        await this.audioElement.setSinkId(e || "");
    }
    async close() {
        this.audioElement.parentNode && this.audioElement.parentNode.removeChild(this.audioElement), this.audioElement.pause(), await this.context.close();
    }
}
class T extends r {
    static async requestWakeLock() {
        if ("wakeLock" in navigator) try {
            return await navigator.wakeLock.request("screen");
        } catch (e) {}
        return null;
    }
    static async startSession(e) {
        var t;
        const n = r.getFullOptions(e);
        n.onStatusChange && n.onStatusChange({
            status: "connecting"
        }), n.onCanSendFeedbackChange && n.onCanSendFeedbackChange({
            canSendFeedback: !1
        });
        let o = null, i = null, a = null, c = null, l = null;
        (null == (t = e.useWakeLock) || t) && (l = await T.requestWakeLock());
        try {
            var u;
            return c = await navigator.mediaDevices.getUserMedia({
                audio: !0
            }), await C(n.connectionDelay), i = await S(e), [o, a] = await Promise.all([
                M.create(s({}, i.inputFormat, {
                    preferHeadphonesForIosDevices: e.preferHeadphonesForIosDevices,
                    inputDeviceId: e.inputDeviceId,
                    workletPaths: e.workletPaths,
                    libsampleratePath: e.libsampleratePath
                })),
                D.create(s({}, i.outputFormat, {
                    outputDeviceId: e.outputDeviceId,
                    workletPaths: e.workletPaths
                }))
            ]), null == (u = c) || u.getTracks().forEach((e)=>{
                e.stop();
            }), c = null, new T(n, i, o, a, l);
        } catch (e) {
            var d, h, p, m;
            n.onStatusChange && n.onStatusChange({
                status: "disconnected"
            }), null == (d = c) || d.getTracks().forEach((e)=>{
                e.stop();
            }), null == (h = i) || h.close(), await (null == (p = o) ? void 0 : p.close()), await (null == (m = a) ? void 0 : m.close());
            try {
                var v;
                await (null == (v = l) ? void 0 : v.release()), l = null;
            } catch (e) {}
            throw e;
        }
    }
    constructor(e, t, n, o, i){
        super(e, t), this.input = void 0, this.output = void 0, this.wakeLock = void 0, this.type = "voice", this.inputFrequencyData = void 0, this.outputFrequencyData = void 0, this.visibilityChangeHandler = null, this.onInputWorkletMessage = (e)=>{
            "connected" === this.status && this.connection.sendMessage({
                user_audio_chunk: g(e.data[0].buffer)
            });
        }, this.onOutputWorkletMessage = ({ data: e })=>{
            "process" === e.type && this.updateMode(e.finished ? "listening" : "speaking");
        }, this.addAudioBase64Chunk = (e)=>{
            this.output.gain.gain.cancelScheduledValues(this.output.context.currentTime), this.output.gain.gain.value = this.volume, this.output.worklet.port.postMessage({
                type: "clearInterrupted"
            }), this.output.worklet.port.postMessage({
                type: "buffer",
                buffer: f(e)
            });
        }, this.fadeOutAudio = ()=>{
            this.updateMode("listening"), this.output.worklet.port.postMessage({
                type: "interrupt"
            }), this.output.gain.gain.exponentialRampToValueAtTime(1e-4, this.output.context.currentTime + 2), setTimeout(()=>{
                this.output.gain.gain.value = this.volume, this.output.worklet.port.postMessage({
                    type: "clearInterrupted"
                });
            }, 2e3);
        }, this.calculateVolume = (e)=>{
            if (0 === e.length) return 0;
            let t = 0;
            for(let n = 0; n < e.length; n++)t += e[n] / 255;
            return t /= e.length, t < 0 ? 0 : t > 1 ? 1 : t;
        }, this.setVolume = ({ volume: e })=>{
            const t = Number.isFinite(e) ? Math.min(1, Math.max(0, e)) : 1;
            this.volume = t, this.connection instanceof y ? this.connection.setAudioVolume(t) : this.output.gain.gain.value = t;
        }, this.input = n, this.output = o, this.wakeLock = i, this.input.worklet.port.onmessage = this.onInputWorkletMessage, this.output.worklet.port.onmessage = this.onOutputWorkletMessage, i && (this.visibilityChangeHandler = ()=>{
            var e;
            "visible" === document.visibilityState && null != (e = this.wakeLock) && e.released && T.requestWakeLock().then((e)=>{
                this.wakeLock = e;
            });
        }, document.addEventListener("visibilitychange", this.visibilityChangeHandler));
    }
    async handleEndSession() {
        await super.handleEndSession(), this.visibilityChangeHandler && document.removeEventListener("visibilitychange", this.visibilityChangeHandler);
        try {
            var e;
            await (null == (e = this.wakeLock) ? void 0 : e.release()), this.wakeLock = null;
        } catch (e) {}
        await this.input.close(), await this.output.close();
    }
    handleInterruption(e) {
        super.handleInterruption(e), this.fadeOutAudio();
    }
    handleAudio(e) {
        var t, n;
        super.handleAudio(e), e.audio_event.alignment && this.options.onAudioAlignment && this.options.onAudioAlignment(e.audio_event.alignment), this.lastInterruptTimestamp <= e.audio_event.event_id && (e.audio_event.audio_base_64 && (null == (t = (n = this.options).onAudio) || t.call(n, e.audio_event.audio_base_64), this.connection instanceof y || this.addAudioBase64Chunk(e.audio_event.audio_base_64)), this.currentEventId = e.audio_event.event_id, this.updateCanSendFeedback(), this.updateMode("speaking"));
    }
    setMicMuted(e) {
        this.connection instanceof y ? this.connection.setMicMuted(e) : this.input.setMuted(e);
    }
    getInputByteFrequencyData() {
        return null != this.inputFrequencyData || (this.inputFrequencyData = new Uint8Array(this.input.analyser.frequencyBinCount)), this.input.analyser.getByteFrequencyData(this.inputFrequencyData), this.inputFrequencyData;
    }
    getOutputByteFrequencyData() {
        return this.connection instanceof y ? this.connection.getOutputByteFrequencyData() || new Uint8Array(1024) : (null != this.outputFrequencyData || (this.outputFrequencyData = new Uint8Array(this.output.analyser.frequencyBinCount)), this.output.analyser.getByteFrequencyData(this.outputFrequencyData), this.outputFrequencyData);
    }
    getInputVolume() {
        return this.calculateVolume(this.getInputByteFrequencyData());
    }
    getOutputVolume() {
        return this.calculateVolume(this.getOutputByteFrequencyData());
    }
    async changeInputDevice({ sampleRate: e, format: t, preferHeadphonesForIosDevices: n, inputDeviceId: o }) {
        try {
            if (this.connection instanceof v) try {
                return await this.input.setInputDevice(o), this.input;
            } catch (e) {
                console.warn("Failed to change device on existing input, recreating:", e);
            }
            this.connection instanceof y && await this.connection.setAudioInputDevice(o || ""), await this.input.close();
            const i = await M.create({
                sampleRate: null != e ? e : this.connection.inputFormat.sampleRate,
                format: null != t ? t : this.connection.inputFormat.format,
                preferHeadphonesForIosDevices: n,
                inputDeviceId: o,
                workletPaths: this.options.workletPaths,
                libsampleratePath: this.options.libsampleratePath,
                onError: this.options.onError
            });
            return this.input = i, this.input.worklet.port.onmessage = this.onInputWorkletMessage, this.input;
        } catch (e) {
            throw console.error("Error changing input device", e), e;
        }
    }
    async changeOutputDevice({ sampleRate: e, format: t, outputDeviceId: n }) {
        try {
            if (this.connection instanceof v) try {
                return await this.output.setOutputDevice(n), this.output;
            } catch (e) {
                console.warn("Failed to change device on existing output, recreating:", e);
            }
            this.connection instanceof y && await this.connection.setAudioOutputDevice(n || ""), await this.output.close();
            const o = await D.create({
                sampleRate: null != e ? e : this.connection.outputFormat.sampleRate,
                format: null != t ? t : this.connection.outputFormat.format,
                outputDeviceId: n,
                workletPaths: this.options.workletPaths
            });
            return this.output = o, this.output;
        } catch (e) {
            throw console.error("Error changing output device", e), e;
        }
    }
}
function F(e, t, n = "https://api.elevenlabs.io") {
    const o = {};
    return "boolean" == typeof t ? o.feedback = t ? "like" : "dislike" : (o.rating = t.rating, o.comment = t.comment), fetch(`${n}/v1/convai/conversations/${e}/feedback`, {
        method: "POST",
        body: JSON.stringify(o),
        headers: {
            "Content-Type": "application/json"
        }
    });
}
class P {
    constructor(){
        this.listeners = new Map;
    }
    on(e, t) {
        this.listeners.has(e) || this.listeners.set(e, new Set);
        const n = this.listeners.get(e);
        n && n.add(t);
    }
    off(e, t) {
        const n = this.listeners.get(e);
        n && n.delete(t);
    }
    emit(e, ...t) {
        const n = this.listeners.get(e);
        n && n.forEach((e)=>{
            e(...t);
        });
    }
}
var x;
!function(e) {
    e.SESSION_STARTED = "session_started", e.PARTIAL_TRANSCRIPT = "partial_transcript", e.COMMITTED_TRANSCRIPT = "committed_transcript", e.COMMITTED_TRANSCRIPT_WITH_TIMESTAMPS = "committed_transcript_with_timestamps", e.AUTH_ERROR = "auth_error", e.ERROR = "error", e.OPEN = "open", e.CLOSE = "close", e.QUOTA_EXCEEDED = "quota_exceeded", e.COMMIT_THROTTLED = "commit_throttled", e.TRANSCRIBER_ERROR = "transcriber_error", e.UNACCEPTED_TERMS = "unaccepted_terms", e.RATE_LIMITED = "rate_limited", e.INPUT_ERROR = "input_error", e.QUEUE_OVERFLOW = "queue_overflow", e.RESOURCE_EXHAUSTED = "resource_exhausted", e.SESSION_TIME_LIMIT_EXCEEDED = "session_time_limit_exceeded", e.CHUNK_SIZE_EXCEEDED = "chunk_size_exceeded", e.INSUFFICIENT_AUDIO_ACTIVITY = "insufficient_audio_activity";
}(x || (x = {}));
class O {
    constructor(e){
        this.websocket = null, this.eventEmitter = new P, this.currentSampleRate = 16e3, this._audioCleanup = void 0, this.currentSampleRate = e;
    }
    setWebSocket(e) {
        this.websocket = e, this.websocket.readyState === WebSocket.OPEN ? this.eventEmitter.emit(x.OPEN) : this.websocket.addEventListener("open", ()=>{
            this.eventEmitter.emit(x.OPEN);
        }), this.websocket.addEventListener("message", (e)=>{
            try {
                const t = JSON.parse(e.data);
                switch(t.message_type){
                    case "session_started":
                        this.eventEmitter.emit(x.SESSION_STARTED, t);
                        break;
                    case "partial_transcript":
                        this.eventEmitter.emit(x.PARTIAL_TRANSCRIPT, t);
                        break;
                    case "committed_transcript":
                        this.eventEmitter.emit(x.COMMITTED_TRANSCRIPT, t);
                        break;
                    case "committed_transcript_with_timestamps":
                        this.eventEmitter.emit(x.COMMITTED_TRANSCRIPT_WITH_TIMESTAMPS, t);
                        break;
                    case "auth_error":
                        this.eventEmitter.emit(x.AUTH_ERROR, t), this.eventEmitter.emit(x.ERROR, t);
                        break;
                    case "quota_exceeded":
                        this.eventEmitter.emit(x.QUOTA_EXCEEDED, t), this.eventEmitter.emit(x.ERROR, t);
                        break;
                    case "commit_throttled":
                        this.eventEmitter.emit(x.COMMIT_THROTTLED, t), this.eventEmitter.emit(x.ERROR, t);
                        break;
                    case "transcriber_error":
                        this.eventEmitter.emit(x.TRANSCRIBER_ERROR, t), this.eventEmitter.emit(x.ERROR, t);
                        break;
                    case "unaccepted_terms":
                        this.eventEmitter.emit(x.UNACCEPTED_TERMS, t), this.eventEmitter.emit(x.ERROR, t);
                        break;
                    case "rate_limited":
                        this.eventEmitter.emit(x.RATE_LIMITED, t), this.eventEmitter.emit(x.ERROR, t);
                        break;
                    case "input_error":
                        this.eventEmitter.emit(x.INPUT_ERROR, t), this.eventEmitter.emit(x.ERROR, t);
                        break;
                    case "queue_overflow":
                        this.eventEmitter.emit(x.QUEUE_OVERFLOW, t), this.eventEmitter.emit(x.ERROR, t);
                        break;
                    case "resource_exhausted":
                        this.eventEmitter.emit(x.RESOURCE_EXHAUSTED, t), this.eventEmitter.emit(x.ERROR, t);
                        break;
                    case "session_time_limit_exceeded":
                        this.eventEmitter.emit(x.SESSION_TIME_LIMIT_EXCEEDED, t), this.eventEmitter.emit(x.ERROR, t);
                        break;
                    case "chunk_size_exceeded":
                        this.eventEmitter.emit(x.CHUNK_SIZE_EXCEEDED, t), this.eventEmitter.emit(x.ERROR, t);
                        break;
                    case "insufficient_audio_activity":
                        this.eventEmitter.emit(x.INSUFFICIENT_AUDIO_ACTIVITY, t), this.eventEmitter.emit(x.ERROR, t);
                        break;
                    case "error":
                        this.eventEmitter.emit(x.ERROR, t);
                        break;
                    default:
                        console.warn("Unknown message type:", t);
                }
            } catch (t) {
                console.error("Failed to parse WebSocket message:", t, e.data), this.eventEmitter.emit(x.ERROR, new Error(`Failed to parse message: ${t}`));
            }
        }), this.websocket.addEventListener("error", (e)=>{
            console.error("WebSocket error:", e), this.eventEmitter.emit(x.ERROR, e);
        }), this.websocket.addEventListener("close", (e)=>{
            if (console.log(`WebSocket closed: code=${e.code}, reason="${e.reason}", wasClean=${e.wasClean}`), !e.wasClean || 1e3 !== e.code && 1005 !== e.code) {
                const t = `WebSocket closed unexpectedly: ${e.code} - ${e.reason || "No reason provided"}`;
                console.error(t), this.eventEmitter.emit(x.ERROR, new Error(t));
            }
            this.eventEmitter.emit(x.CLOSE, e);
        });
    }
    on(e, t) {
        this.eventEmitter.on(e, t);
    }
    off(e, t) {
        this.eventEmitter.off(e, t);
    }
    send(e) {
        var t, n;
        if (!this.websocket || this.websocket.readyState !== WebSocket.OPEN) throw new Error("WebSocket is not connected");
        const o = {
            message_type: "input_audio_chunk",
            audio_base_64: e.audioBase64,
            commit: null != (t = e.commit) && t,
            sample_rate: null != (n = e.sampleRate) ? n : this.currentSampleRate,
            previous_text: e.previousText
        };
        this.websocket.send(JSON.stringify(o));
    }
    commit() {
        if (!this.websocket || this.websocket.readyState !== WebSocket.OPEN) throw new Error("WebSocket is not connected");
        this.websocket.send(JSON.stringify({
            message_type: "input_audio_chunk",
            audio_base_64: "",
            commit: !0,
            sample_rate: this.currentSampleRate
        }));
    }
    close() {
        this._audioCleanup && this._audioCleanup(), this.websocket && this.websocket.close(1e3, "User ended session");
    }
}
const L = w("scribeAudioProcessor", '/*\n * Scribe Audio Processor for converting microphone audio to PCM16 format\n * Supports resampling for browsers like Firefox that don\'t support\n * AudioContext sample rate constraints.\n * USED BY @elevenlabs/client\n */\n\nclass ScribeAudioProcessor extends AudioWorkletProcessor {\n  constructor() {\n    super();\n    this.buffer = [];\n    this.bufferSize = 4096; // Buffer size for optimal chunk transmission\n\n    // Resampling state\n    this.inputSampleRate = null;\n    this.outputSampleRate = null;\n    this.resampleRatio = 1;\n    this.lastSample = 0;\n    this.resampleAccumulator = 0;\n\n    this.port.onmessage = ({ data }) => {\n      if (data.type === "configure") {\n        this.inputSampleRate = data.inputSampleRate;\n        this.outputSampleRate = data.outputSampleRate;\n        if (this.inputSampleRate && this.outputSampleRate) {\n          this.resampleRatio = this.inputSampleRate / this.outputSampleRate;\n        }\n      }\n    };\n  }\n\n  // Linear interpolation resampling\n  resample(inputData) {\n    if (this.resampleRatio === 1 || !this.inputSampleRate) {\n      return inputData;\n    }\n\n    const outputSamples = [];\n\n    for (let i = 0; i < inputData.length; i++) {\n      const currentSample = inputData[i];\n\n      // Generate output samples using linear interpolation\n      while (this.resampleAccumulator < 1) {\n        const interpolated =\n          this.lastSample +\n          (currentSample - this.lastSample) * this.resampleAccumulator;\n        outputSamples.push(interpolated);\n        this.resampleAccumulator += this.resampleRatio;\n      }\n\n      this.resampleAccumulator -= 1;\n      this.lastSample = currentSample;\n    }\n\n    return new Float32Array(outputSamples);\n  }\n\n  process(inputs) {\n    const input = inputs[0];\n    if (input.length > 0) {\n      let channelData = input[0]; // Get first channel (mono)\n\n      // Resample if needed (for Firefox and other browsers that don\'t\n      // support AudioContext sample rate constraints)\n      if (this.resampleRatio !== 1) {\n        channelData = this.resample(channelData);\n      }\n\n      // Add incoming audio to buffer\n      for (let i = 0; i < channelData.length; i++) {\n        this.buffer.push(channelData[i]);\n      }\n\n      // When buffer reaches threshold, convert and send\n      if (this.buffer.length >= this.bufferSize) {\n        const float32Array = new Float32Array(this.buffer);\n        const int16Array = new Int16Array(float32Array.length);\n\n        // Convert Float32 [-1, 1] to Int16 [-32768, 32767]\n        for (let i = 0; i < float32Array.length; i++) {\n          // Clamp the value to prevent overflow\n          const sample = Math.max(-1, Math.min(1, float32Array[i]));\n          // Scale to PCM16 range\n          int16Array[i] = sample < 0 ? sample * 32768 : sample * 32767;\n        }\n\n        // Send to main thread as transferable ArrayBuffer\n        this.port.postMessage(\n          {\n            audioData: int16Array.buffer\n          },\n          [int16Array.buffer]\n        );\n\n        // Clear buffer\n        this.buffer = [];\n      }\n    }\n\n    return true; // Continue processing\n  }\n}\n\nregisterProcessor("scribeAudioProcessor", ScribeAudioProcessor);\n\n');
var U, N;
!function(e) {
    e.PCM_8000 = "pcm_8000", e.PCM_16000 = "pcm_16000", e.PCM_22050 = "pcm_22050", e.PCM_24000 = "pcm_24000", e.PCM_44100 = "pcm_44100", e.PCM_48000 = "pcm_48000", e.ULAW_8000 = "ulaw_8000";
}(U || (U = {})), function(e) {
    e.MANUAL = "manual", e.VAD = "vad";
}(N || (N = {}));
class W {
    static getWebSocketUri(e = W.DEFAULT_BASE_URI) {
        return `${e}/v1/speech-to-text/realtime`;
    }
    static buildWebSocketUri(e) {
        const t = W.getWebSocketUri(e.baseUri), n = new URLSearchParams;
        if (n.append("model_id", e.modelId), n.append("token", e.token), void 0 !== e.commitStrategy && n.append("commit_strategy", e.commitStrategy), void 0 !== e.audioFormat && n.append("audio_format", e.audioFormat), void 0 !== e.vadSilenceThresholdSecs) {
            if (e.vadSilenceThresholdSecs <= .3 || e.vadSilenceThresholdSecs > 3) throw new Error("vadSilenceThresholdSecs must be between 0.3 and 3.0");
            n.append("vad_silence_threshold_secs", e.vadSilenceThresholdSecs.toString());
        }
        if (void 0 !== e.vadThreshold) {
            if (e.vadThreshold < .1 || e.vadThreshold > .9) throw new Error("vadThreshold must be between 0.1 and 0.9");
            n.append("vad_threshold", e.vadThreshold.toString());
        }
        if (void 0 !== e.minSpeechDurationMs) {
            if (e.minSpeechDurationMs <= 50 || e.minSpeechDurationMs > 2e3) throw new Error("minSpeechDurationMs must be between 50 and 2000");
            n.append("min_speech_duration_ms", e.minSpeechDurationMs.toString());
        }
        if (void 0 !== e.minSilenceDurationMs) {
            if (e.minSilenceDurationMs <= 50 || e.minSilenceDurationMs > 2e3) throw new Error("minSilenceDurationMs must be between 50 and 2000");
            n.append("min_silence_duration_ms", e.minSilenceDurationMs.toString());
        }
        void 0 !== e.languageCode && n.append("language_code", e.languageCode), void 0 !== e.includeTimestamps && n.append("include_timestamps", e.includeTimestamps ? "true" : "false");
        const o = n.toString();
        return o ? `${t}?${o}` : t;
    }
    static connect(e) {
        if (!e.modelId) throw new Error("modelId is required");
        const t = new O("microphone" in e && e.microphone ? 16e3 : e.sampleRate), n = W.buildWebSocketUri(e), o = new WebSocket(n);
        return "microphone" in e && e.microphone && o.addEventListener("open", ()=>{
            W.streamFromMicrophone(e, t);
        }), t.setWebSocket(o), t;
    }
    static async streamFromMicrophone(e, t) {
        const n = 16e3;
        try {
            var o, i, s, a, r, c, l, u, d, h;
            const p = await navigator.mediaDevices.getUserMedia({
                audio: {
                    deviceId: null == (o = e.microphone) ? void 0 : o.deviceId,
                    echoCancellation: null == (i = null == (s = e.microphone) ? void 0 : s.echoCancellation) || i,
                    noiseSuppression: null == (a = null == (r = e.microphone) ? void 0 : r.noiseSuppression) || a,
                    autoGainControl: null == (c = null == (l = e.microphone) ? void 0 : l.autoGainControl) || c,
                    channelCount: null != (u = null == (d = e.microphone) ? void 0 : d.channelCount) ? u : 1,
                    sampleRate: {
                        ideal: n
                    }
                }
            }), m = null == (h = p.getAudioTracks()[0]) ? void 0 : h.getSettings(), v = null == m ? void 0 : m.sampleRate, g = new AudioContext(v ? {
                sampleRate: v
            } : {});
            await L(g.audioWorklet);
            const f = g.createMediaStreamSource(p), _ = new AudioWorkletNode(g, "scribeAudioProcessor");
            g.sampleRate !== n && _.port.postMessage({
                type: "configure",
                inputSampleRate: g.sampleRate,
                outputSampleRate: n
            }), _.port.onmessage = (e)=>{
                const { audioData: n } = e.data, o = new Uint8Array(n);
                let i = "";
                for(let e = 0; e < o.length; e++)i += String.fromCharCode(o[e]);
                const s = btoa(i);
                t.send({
                    audioBase64: s
                });
            }, f.connect(_), "suspended" === g.state && await g.resume(), t._audioCleanup = ()=>{
                p.getTracks().forEach((e)=>{
                    e.stop();
                }), f.disconnect(), _.disconnect(), g.close();
            };
        } catch (e) {
            throw console.error("Failed to start microphone streaming:", e), e;
        }
    }
}
W.DEFAULT_BASE_URI = "wss://api.elevenlabs.io";
class q extends r {
    static startSession(e) {
        const t = q.getFullOptions(e);
        return t.textOnly ? k.startSession(t) : T.startSession(t);
    }
}
;
 //# sourceMappingURL=lib.modern.js.map
}),
"[project]/node_modules/@elevenlabs/react/dist/lib.modern.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLivekitUrlForLocation",
    ()=>v,
    "getOriginForLocation",
    ()=>d,
    "parseLocation",
    ()=>c,
    "useConversation",
    ()=>m,
    "useScribe",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@elevenlabs/client/dist/lib.modern.js [app-ssr] (ecmascript)");
;
;
;
function u() {
    return u = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", u.apply(null, arguments);
}
function a(i = {}) {
    const { onSessionStarted: a1, onPartialTranscript: s, onCommittedTranscript: c, onCommittedTranscriptWithTimestamps: d, onError: v, onAuthError: m, onQuotaExceededError: g, onCommitThrottledError: T, onTranscriberError: p, onUnacceptedTermsError: h, onRateLimitedError: C, onInputError: S, onQueueOverflowError: E, onResourceExhaustedError: M, onSessionTimeLimitExceededError: I, onChunkSizeExceededError: D, onInsufficientAudioActivityError: w, onConnect: A, onDisconnect: R, token: b, modelId: y, baseUri: f, commitStrategy: O, vadSilenceThresholdSecs: U, vadThreshold: k, minSpeechDurationMs: F, minSilenceDurationMs: _, languageCode: P, microphone: x, audioFormat: N, sampleRate: V, autoConnect: L = !1, includeTimestamps: q } = i, B = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), [H, $] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("disconnected"), [Q, W] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""), [X, G] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]), [j, z] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            var n;
            null == (n = B.current) || n.close();
        }, []);
    const K = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (n = {})=>{
        if (B.current) console.warn("Already connected");
        else try {
            var e, r;
            $("connecting"), z(null);
            const o = n.token || b, i = n.modelId || y;
            if (!o) throw new Error("Token is required");
            if (!i) throw new Error("Model ID is required");
            const u = n.microphone || x, L = n.audioFormat || N, H = n.sampleRate || V;
            let Q;
            const X = null != (e = null != (r = n.includeTimestamps) ? r : q) ? e : !(!n.onCommittedTranscriptWithTimestamps && !d);
            if (u) Q = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scribe"].connect({
                token: o,
                modelId: i,
                baseUri: n.baseUri || f,
                commitStrategy: n.commitStrategy || O,
                vadSilenceThresholdSecs: n.vadSilenceThresholdSecs || U,
                vadThreshold: n.vadThreshold || k,
                minSpeechDurationMs: n.minSpeechDurationMs || F,
                minSilenceDurationMs: n.minSilenceDurationMs || _,
                languageCode: n.languageCode || P,
                microphone: u,
                includeTimestamps: X
            });
            else {
                if (!L || !H) throw new Error("Either microphone options or (audioFormat + sampleRate) must be provided");
                Q = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scribe"].connect({
                    token: o,
                    modelId: i,
                    baseUri: n.baseUri || f,
                    commitStrategy: n.commitStrategy || O,
                    vadSilenceThresholdSecs: n.vadSilenceThresholdSecs || U,
                    vadThreshold: n.vadThreshold || k,
                    minSpeechDurationMs: n.minSpeechDurationMs || F,
                    minSilenceDurationMs: n.minSilenceDurationMs || _,
                    languageCode: n.languageCode || P,
                    includeTimestamps: X,
                    audioFormat: L,
                    sampleRate: H
                });
            }
            B.current = Q, Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RealtimeEvents"].SESSION_STARTED, ()=>{
                $("connected"), null == a1 || a1();
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RealtimeEvents"].PARTIAL_TRANSCRIPT, (n)=>{
                const e = n;
                W(e.text), $("transcribing"), null == s || s(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RealtimeEvents"].COMMITTED_TRANSCRIPT, (n)=>{
                const e = n, r = {
                    id: `${Date.now()}-${Math.random()}`,
                    text: e.text,
                    timestamp: Date.now(),
                    isFinal: !0
                };
                G((n)=>[
                        ...n,
                        r
                    ]), W(""), null == c || c(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RealtimeEvents"].COMMITTED_TRANSCRIPT_WITH_TIMESTAMPS, (n)=>{
                const e = n, r = {
                    id: `${Date.now()}-${Math.random()}`,
                    text: e.text,
                    timestamp: Date.now(),
                    isFinal: !0,
                    words: e.words
                };
                G((n)=>[
                        ...n,
                        r
                    ]), W(""), null == d || d(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RealtimeEvents"].ERROR, (n)=>{
                const e = n;
                z(e.error), $("error"), null == v || v(new Error(e.error));
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RealtimeEvents"].AUTH_ERROR, (n)=>{
                const e = n;
                z(e.error), $("error"), null == m || m(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RealtimeEvents"].QUOTA_EXCEEDED, (n)=>{
                const e = n;
                z(e.error), $("error"), null == g || g(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RealtimeEvents"].COMMIT_THROTTLED, (n)=>{
                const e = n;
                z(e.error), $("error"), null == T || T(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RealtimeEvents"].TRANSCRIBER_ERROR, (n)=>{
                const e = n;
                z(e.error), $("error"), null == p || p(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RealtimeEvents"].UNACCEPTED_TERMS, (n)=>{
                const e = n;
                z(e.error), $("error"), null == h || h(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RealtimeEvents"].RATE_LIMITED, (n)=>{
                const e = n;
                z(e.error), $("error"), null == C || C(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RealtimeEvents"].INPUT_ERROR, (n)=>{
                const e = n;
                z(e.error), $("error"), null == S || S(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RealtimeEvents"].QUEUE_OVERFLOW, (n)=>{
                const e = n;
                z(e.error), $("error"), null == E || E(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RealtimeEvents"].RESOURCE_EXHAUSTED, (n)=>{
                const e = n;
                z(e.error), $("error"), null == M || M(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RealtimeEvents"].SESSION_TIME_LIMIT_EXCEEDED, (n)=>{
                const e = n;
                z(e.error), $("error"), null == I || I(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RealtimeEvents"].CHUNK_SIZE_EXCEEDED, (n)=>{
                const e = n;
                z(e.error), $("error"), null == D || D(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RealtimeEvents"].INSUFFICIENT_AUDIO_ACTIVITY, (n)=>{
                const e = n;
                z(e.error), $("error"), null == w || w(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RealtimeEvents"].OPEN, ()=>{
                null == A || A();
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RealtimeEvents"].CLOSE, ()=>{
                $("disconnected"), B.current = null, null == R || R();
            });
        } catch (n) {
            const e = n instanceof Error ? n.message : "Failed to connect";
            throw z(e), $("error"), n;
        }
    }, [
        b,
        y,
        f,
        O,
        U,
        k,
        F,
        _,
        P,
        x,
        N,
        V,
        q,
        a1,
        s,
        c,
        d,
        v,
        m,
        g,
        T,
        p,
        h,
        C,
        S,
        E,
        M,
        I,
        D,
        w,
        A,
        R
    ]), Y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        var n;
        null == (n = B.current) || n.close(), B.current = null, $("disconnected");
    }, []), Z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((n, e)=>{
        if (!B.current) throw new Error("Not connected to Scribe");
        B.current.send(u({
            audioBase64: n
        }, e));
    }, []), J = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!B.current) throw new Error("Not connected to Scribe");
        B.current.commit();
    }, []), nn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        G([]), W("");
    }, []), en = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>B.current, []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        L && K();
    }, [
        L,
        K
    ]), {
        status: H,
        isConnected: "connected" === H || "transcribing" === H,
        isTranscribing: "transcribing" === H,
        partialTranscript: Q,
        committedTranscripts: X,
        error: j,
        connect: K,
        disconnect: Y,
        sendAudio: Z,
        commit: J,
        clearTranscripts: nn,
        getConnection: en
    };
}
const s = [
    "micMuted",
    "volume",
    "serverLocation"
];
function c(n = "us") {
    switch(n){
        case "eu-residency":
        case "in-residency":
        case "us":
        case "global":
            return n;
        default:
            return console.warn(`[ConversationalAI] Invalid server-location: ${n}. Defaulting to "us"`), "us";
    }
}
function d(n) {
    return ({
        us: "wss://api.elevenlabs.io",
        "eu-residency": "wss://api.eu.residency.elevenlabs.io",
        "in-residency": "wss://api.in.residency.elevenlabs.io",
        global: "wss://api.elevenlabs.io"
    })[n];
}
function v(n) {
    return ({
        us: "wss://livekit.rtc.elevenlabs.io",
        "eu-residency": "wss://livekit.rtc.eu.residency.elevenlabs.io",
        "in-residency": "wss://livekit.rtc.in.residency.elevenlabs.io",
        global: "wss://livekit.rtc.elevenlabs.io"
    })[n];
}
function m(o = {}) {
    const { micMuted: t, volume: l, serverLocation: a } = o, m1 = function(n, e) {
        if (null == n) return {};
        var r = {};
        for(var o in n)if (({}).hasOwnProperty.call(n, o)) {
            if (-1 !== e.indexOf(o)) continue;
            r[o] = n[o];
        }
        return r;
    }(o, s), g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(!1), [h, C] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("disconnected"), [S, E] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1), [M, I] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("listening"), D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(t), w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(l);
    return D.current = t, w.current = l, (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        var n;
        void 0 !== t && (null == g || null == (n = g.current) || n.setMicMuted(t));
    }, [
        t
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        var n;
        void 0 !== l && (null == g || null == (n = g.current) || n.setVolume({
            volume: l
        }));
    }, [
        l
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            var n;
            p.current = !0, T.current ? T.current.then((n)=>n.endSession()) : null == (n = g.current) || n.endSession();
        }, []), {
        startSession: async (n)=>{
            var e;
            if (null != (e = g.current) && e.isOpen()) return g.current.getId();
            if (T.current) return (await T.current).getId();
            p.current = !1;
            try {
                var r, o, t, l, s, h, S, M, A, R;
                const e = c((null == n ? void 0 : n.serverLocation) || a), b = d(e), y = v(e);
                if (T.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Conversation"].startSession(u({}, null != m1 ? m1 : {}, null != n ? n : {}, {
                    origin: b,
                    livekitUrl: (null == n ? void 0 : n.livekitUrl) || (null == m1 ? void 0 : m1.livekitUrl) || y,
                    overrides: u({}, null != (r = null == m1 ? void 0 : m1.overrides) ? r : {}, null != (o = null == n ? void 0 : n.overrides) ? o : {}, {
                        client: u({}, null != (t = null == m1 || null == (l = m1.overrides) ? void 0 : l.client) ? t : {}, null != (s = null == n || null == (h = n.overrides) ? void 0 : h.client) ? s : {}, {
                            source: (null == n || null == (S = n.overrides) || null == (S = S.client) ? void 0 : S.source) || (null == m1 || null == (M = m1.overrides) || null == (M = M.client) ? void 0 : M.source) || "react_sdk",
                            version: (null == n || null == (A = n.overrides) || null == (A = A.client) ? void 0 : A.version) || (null == m1 || null == (R = m1.overrides) || null == (R = R.client) ? void 0 : R.version) || "0.15.0"
                        })
                    }),
                    onConnect: (null == n ? void 0 : n.onConnect) || (null == m1 ? void 0 : m1.onConnect),
                    onDisconnect: (null == n ? void 0 : n.onDisconnect) || (null == m1 ? void 0 : m1.onDisconnect),
                    onError: (null == n ? void 0 : n.onError) || (null == m1 ? void 0 : m1.onError),
                    onMessage: (null == n ? void 0 : n.onMessage) || (null == m1 ? void 0 : m1.onMessage),
                    onAudio: (null == n ? void 0 : n.onAudio) || (null == m1 ? void 0 : m1.onAudio),
                    onDebug: (null == n ? void 0 : n.onDebug) || (null == m1 ? void 0 : m1.onDebug),
                    onUnhandledClientToolCall: (null == n ? void 0 : n.onUnhandledClientToolCall) || (null == m1 ? void 0 : m1.onUnhandledClientToolCall),
                    onVadScore: (null == n ? void 0 : n.onVadScore) || (null == m1 ? void 0 : m1.onVadScore),
                    onInterruption: (null == n ? void 0 : n.onInterruption) || (null == m1 ? void 0 : m1.onInterruption),
                    onAgentToolRequest: (null == n ? void 0 : n.onAgentToolRequest) || (null == m1 ? void 0 : m1.onAgentToolRequest),
                    onAgentToolResponse: (null == n ? void 0 : n.onAgentToolResponse) || (null == m1 ? void 0 : m1.onAgentToolResponse),
                    onConversationMetadata: (null == n ? void 0 : n.onConversationMetadata) || (null == m1 ? void 0 : m1.onConversationMetadata),
                    onMCPToolCall: (null == n ? void 0 : n.onMCPToolCall) || (null == m1 ? void 0 : m1.onMCPToolCall),
                    onMCPConnectionStatus: (null == n ? void 0 : n.onMCPConnectionStatus) || (null == m1 ? void 0 : m1.onMCPConnectionStatus),
                    onAsrInitiationMetadata: (null == n ? void 0 : n.onAsrInitiationMetadata) || (null == m1 ? void 0 : m1.onAsrInitiationMetadata),
                    onAgentChatResponsePart: (null == n ? void 0 : n.onAgentChatResponsePart) || (null == m1 ? void 0 : m1.onAgentChatResponsePart),
                    onAudioAlignment: (null == n ? void 0 : n.onAudioAlignment) || (null == m1 ? void 0 : m1.onAudioAlignment),
                    onGuardrailTriggered: (null == n ? void 0 : n.onGuardrailTriggered) || (null == m1 ? void 0 : m1.onGuardrailTriggered),
                    onModeChange: ({ mode: e })=>{
                        var r;
                        I(e), null == (r = (null == n ? void 0 : n.onModeChange) || (null == m1 ? void 0 : m1.onModeChange)) || r({
                            mode: e
                        });
                    },
                    onStatusChange: ({ status: e })=>{
                        var r;
                        C(e), null == (r = (null == n ? void 0 : n.onStatusChange) || (null == m1 ? void 0 : m1.onStatusChange)) || r({
                            status: e
                        });
                    },
                    onCanSendFeedbackChange: ({ canSendFeedback: e })=>{
                        var r;
                        E(e), null == (r = (null == n ? void 0 : n.onCanSendFeedbackChange) || (null == m1 ? void 0 : m1.onCanSendFeedbackChange)) || r({
                            canSendFeedback: e
                        });
                    }
                })), g.current = await T.current, p.current) throw await g.current.endSession(), g.current = null, T.current = null, new Error("Session cancelled during connection");
                return void 0 !== D.current && g.current.setMicMuted(D.current), void 0 !== w.current && g.current.setVolume({
                    volume: w.current
                }), g.current.getId();
            } finally{
                T.current = null;
            }
        },
        endSession: async ()=>{
            p.current = !0;
            const n = T.current, e = g.current;
            if (g.current = null, n) {
                const e = await n;
                await e.endSession();
            } else await (null == e ? void 0 : e.endSession());
        },
        setVolume: ({ volume: n })=>{
            var e;
            null == (e = g.current) || e.setVolume({
                volume: n
            });
        },
        getInputByteFrequencyData: ()=>{
            var n;
            return null == (n = g.current) ? void 0 : n.getInputByteFrequencyData();
        },
        getOutputByteFrequencyData: ()=>{
            var n;
            return null == (n = g.current) ? void 0 : n.getOutputByteFrequencyData();
        },
        getInputVolume: ()=>{
            var n, e;
            return null != (n = null == (e = g.current) ? void 0 : e.getInputVolume()) ? n : 0;
        },
        getOutputVolume: ()=>{
            var n, e;
            return null != (n = null == (e = g.current) ? void 0 : e.getOutputVolume()) ? n : 0;
        },
        sendFeedback: (n)=>{
            var e;
            null == (e = g.current) || e.sendFeedback(n);
        },
        getId: ()=>{
            var n;
            return null == (n = g.current) ? void 0 : n.getId();
        },
        sendContextualUpdate: (n)=>{
            var e;
            null == (e = g.current) || e.sendContextualUpdate(n);
        },
        sendUserMessage: (n)=>{
            var e;
            null == (e = g.current) || e.sendUserMessage(n);
        },
        sendUserActivity: ()=>{
            var n;
            null == (n = g.current) || n.sendUserActivity();
        },
        sendMCPToolApprovalResult: (n, e)=>{
            var r;
            null == (r = g.current) || r.sendMCPToolApprovalResult(n, e);
        },
        sendMultimodalMessage: (n)=>{
            var e;
            null == (e = g.current) || e.sendMultimodalMessage(n);
        },
        changeInputDevice: async (n)=>{
            if (g.current && "changeInputDevice" in g.current) return await g.current.changeInputDevice(n);
            throw new Error("Device switching is only available for voice conversations");
        },
        changeOutputDevice: async (n)=>{
            if (g.current && "changeOutputDevice" in g.current) return await g.current.changeOutputDevice(n);
            throw new Error("Device switching is only available for voice conversations");
        },
        status: h,
        canSendFeedback: S,
        micMuted: t,
        isSpeaking: "speaking" === M
    };
}
;
 //# sourceMappingURL=lib.modern.js.map
}),
];

//# sourceMappingURL=_ac506b43._.js.map