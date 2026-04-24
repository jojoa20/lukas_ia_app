(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/LUKAS_APP_ENTREGA/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/LUKAS_APP_ENTREGA/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(as || href, replace ? 'replace' : 'push', scroll ?? true, linkInstanceRef.current);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _types.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return _client.createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const _client = __turbopack_context__.r("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)"); //# sourceMappingURL=action-client-wrapper.js.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/is-object.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/format-error-message.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invariant",
    ()=>invariant,
    "warning",
    ()=>warning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/format-error-message.mjs [app-client] (ecmascript)");
;
let warning = ()=>{};
let invariant = ()=>{};
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && ("TURBOPACK compile-time value", "development") !== "production") {
    warning = (check, message, errorCode)=>{
        if (!check && typeof console !== "undefined") {
            console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
    invariant = (check, message, errorCode)=>{
        if (!check) {
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
}
;
 //# sourceMappingURL=errors.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/is-numerical-string.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "noop",
    ()=>noop
]);
/*#__NO_SIDE_EFFECTS__*/ const noop = (any)=>any;
;
 //# sourceMappingURL=noop.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/global-config.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionGlobalConfig",
    ()=>MotionGlobalConfig
]);
const MotionGlobalConfig = {};
;
 //# sourceMappingURL=global-config.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/is-zero-value-string.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/warn-once.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasWarned",
    ()=>hasWarned,
    "warnOnce",
    ()=>warnOnce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/format-error-message.mjs [app-client] (ecmascript)");
;
const warned = new Set();
function hasWarned(message) {
    return warned.has(message);
}
function warnOnce(condition, message, errorCode) {
    if (condition || warned.has(message)) return;
    console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
    warned.add(message);
}
;
 //# sourceMappingURL=warn-once.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/subscription-manager.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubscriptionManager",
    ()=>SubscriptionManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)");
;
class SubscriptionManager {
    constructor(){
        this.subscriptions = [];
    }
    add(handler) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addUniqueItem"])(this.subscriptions, handler);
        return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(this.subscriptions, handler);
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
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/memo.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBezierDefinition",
    ()=>isBezierDefinition
]);
const isBezierDefinition = (easing)=>Array.isArray(easing) && typeof easing[0] === "number";
;
 //# sourceMappingURL=is-bezier-definition.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/velocity-per-second.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/pipe.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cubicBezier",
    ()=>cubicBezier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
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
    if (mX1 === mY1 && mX2 === mY2) return __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
    const getTForX = (aX)=>binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
;
 //# sourceMappingURL=cubic-bezier.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/ease.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easeIn",
    ()=>easeIn,
    "easeInOut",
    ()=>easeInOut,
    "easeOut",
    ()=>easeOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)");
;
const easeIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 1, 1);
const easeOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0, 0, 0.58, 1);
const easeInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 0.58, 1);
;
 //# sourceMappingURL=ease.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/back.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "backIn",
    ()=>backIn,
    "backInOut",
    ()=>backInOut,
    "backOut",
    ()=>backOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-client] (ecmascript)");
;
;
;
const backOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.33, 1.53, 0.69, 0.99);
const backIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseEasing"])(backOut);
const backInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mirrorEasing"])(backIn);
;
 //# sourceMappingURL=back.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anticipate",
    ()=>anticipate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/back.mjs [app-client] (ecmascript)");
;
const anticipate = (p)=>p >= 1 ? 1 : (p *= 2) < 1 ? 0.5 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backIn"])(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
;
 //# sourceMappingURL=anticipate.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/circ.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "circIn",
    ()=>circIn,
    "circInOut",
    ()=>circInOut,
    "circOut",
    ()=>circOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-client] (ecmascript)");
;
;
const circIn = (p)=>1 - Math.sin(Math.acos(p));
const circOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseEasing"])(circIn);
const circInOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mirrorEasing"])(circIn);
;
 //# sourceMappingURL=circ.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/utils/map.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easingDefinitionToFunction",
    ()=>easingDefinitionToFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/back.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/circ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/ease.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const easingLookup = {
    linear: __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"],
    easeIn: __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeIn"],
    easeInOut: __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"],
    easeOut: __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOut"],
    circIn: __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circIn"],
    circInOut: __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circInOut"],
    circOut: __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circOut"],
    backIn: __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backIn"],
    backInOut: __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backInOut"],
    backOut: __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backOut"],
    anticipate: __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anticipate"]
};
const isValidEasing = (easing)=>{
    return typeof easing === "string";
};
const easingDefinitionToFunction = (definition)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBezierDefinition"])(definition)) {
        // If cubic bezier definition, create bezier curve
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`, "cubic-bezier-length");
        const [x1, y1, x2, y2] = definition;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(x1, y1, x2, y2);
    } else if (isValidEasing(definition)) {
        // Else lookup from table
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`, "invalid-easing-type");
        return easingLookup[definition];
    }
    return definition;
};
;
 //# sourceMappingURL=map.mjs.map
}),
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/progress.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/wrap.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/utils/get-easing-for-segment.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEasingForSegment",
    ()=>getEasingForSegment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$wrap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/wrap.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$easing$2d$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs [app-client] (ecmascript)");
;
;
function getEasingForSegment(easing, i) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$easing$2d$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEasingArray"])(easing) ? easing[(0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$wrap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrap"])(0, easing.length, i)] : easing;
}
;
 //# sourceMappingURL=get-easing-for-segment.mjs.map
}),
"[project]/node_modules/throttleit/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/node_modules/@ai-sdk/provider/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/node_modules/eventsource-parser/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/node_modules/eventsource-parser/dist/stream.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventSourceParserStream",
    ()=>EventSourceParserStream
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/eventsource-parser/dist/index.js [app-client] (ecmascript)");
;
;
class EventSourceParserStream extends TransformStream {
    constructor({ onError, onRetry, onComment } = {}){
        let parser;
        super({
            start (controller) {
                parser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createParser"])({
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
"[project]/node_modules/@ai-sdk/provider-utils/dist/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/download-error.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ai-sdk/provider/dist/index.mjs [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'zod/v4'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'zod/v3'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
// src/parse-json-event-stream.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/eventsource-parser/dist/stream.js [app-client] (ecmascript) <locals>");
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
var DownloadError = class extends (_b = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AISDKError"], _a = symbol, _b) {
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AISDKError"].hasMarker(error, marker);
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
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
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
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"]({
                message: `Cannot connect to API: ${cause.message}`,
                cause,
                url,
                requestBodyValues,
                isRetryable: true
            });
        }
    }
    if (isBunNetworkError(error)) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"]({
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
                if (isAbortError(error) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"].isInstance(error)) {
                    throw error;
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"]({
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
                if (isAbortError(error) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"].isInstance(error)) {
                    throw error;
                }
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"]({
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
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadAPIKeyError"]({
            message: `${description} API key must be a string.`
        });
    }
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === "undefined") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadAPIKeyError"]({
            message: `${description} API key is missing. Pass it using the '${apiKeyParameterName}' parameter. Environment variables are not supported in this environment.`
        });
    }
    apiKey = __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[environmentVariableName];
    if (apiKey == null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadAPIKeyError"]({
            message: `${description} API key is missing. Pass it using the '${apiKeyParameterName}' parameter or the ${environmentVariableName} environment variable.`
        });
    }
    if (typeof apiKey !== "string") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadAPIKeyError"]({
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
    if (settingValue != null || typeof __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === "undefined") {
        return void 0;
    }
    settingValue = __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[environmentVariableName];
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
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadSettingError"]({
            message: `${description} setting must be a string.`
        });
    }
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === "undefined") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadSettingError"]({
            message: `${description} setting is missing. Pass it using the '${settingName}' parameter. Environment variables are not supported in this environment.`
        });
    }
    settingValue = __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[environmentVariableName];
    if (settingValue == null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadSettingError"]({
            message: `${description} setting is missing. Pass it using the '${settingName}' parameter or the ${environmentVariableName} environment variable.`
        });
    }
    if (typeof settingValue !== "string") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadSettingError"]({
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
    if (((_a2 = def.type) == null ? void 0 : _a2._def) && ((_c = (_b2 = def.type) == null ? void 0 : _b2._def) == null ? void 0 : _c.typeName) !== ZodFirstPartyTypeKind.ZodAny) {
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
    if (((_b2 = def.keyType) == null ? void 0 : _b2._def.typeName) === ZodFirstPartyTypeKind2.ZodString && ((_c = def.keyType._def.checks) == null ? void 0 : _c.length)) {
        const { type, ...keyType } = parseStringDef(def.keyType._def, refs);
        return {
            ...schema,
            propertyNames: keyType
        };
    } else if (((_d = def.keyType) == null ? void 0 : _d._def.typeName) === ZodFirstPartyTypeKind2.ZodEnum) {
        return {
            ...schema,
            propertyNames: {
                enum: def.keyType._def.values
            }
        };
    } else if (((_e = def.keyType) == null ? void 0 : _e._def.typeName) === ZodFirstPartyTypeKind2.ZodBranded && def.keyType._def.type._def.typeName === ZodFirstPartyTypeKind2.ZodString && ((_f = def.keyType._def.type._def.checks) == null ? void 0 : _f.length)) {
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
        case ZodFirstPartyTypeKind3.ZodString:
            return parseStringDef(def, refs);
        case ZodFirstPartyTypeKind3.ZodNumber:
            return parseNumberDef(def);
        case ZodFirstPartyTypeKind3.ZodObject:
            return parseObjectDef(def, refs);
        case ZodFirstPartyTypeKind3.ZodBigInt:
            return parseBigintDef(def);
        case ZodFirstPartyTypeKind3.ZodBoolean:
            return parseBooleanDef();
        case ZodFirstPartyTypeKind3.ZodDate:
            return parseDateDef(def, refs);
        case ZodFirstPartyTypeKind3.ZodUndefined:
            return parseUndefinedDef();
        case ZodFirstPartyTypeKind3.ZodNull:
            return parseNullDef();
        case ZodFirstPartyTypeKind3.ZodArray:
            return parseArrayDef(def, refs);
        case ZodFirstPartyTypeKind3.ZodUnion:
        case ZodFirstPartyTypeKind3.ZodDiscriminatedUnion:
            return parseUnionDef(def, refs);
        case ZodFirstPartyTypeKind3.ZodIntersection:
            return parseIntersectionDef(def, refs);
        case ZodFirstPartyTypeKind3.ZodTuple:
            return parseTupleDef(def, refs);
        case ZodFirstPartyTypeKind3.ZodRecord:
            return parseRecordDef(def, refs);
        case ZodFirstPartyTypeKind3.ZodLiteral:
            return parseLiteralDef(def);
        case ZodFirstPartyTypeKind3.ZodEnum:
            return parseEnumDef(def);
        case ZodFirstPartyTypeKind3.ZodNativeEnum:
            return parseNativeEnumDef(def);
        case ZodFirstPartyTypeKind3.ZodNullable:
            return parseNullableDef(def, refs);
        case ZodFirstPartyTypeKind3.ZodOptional:
            return parseOptionalDef(def, refs);
        case ZodFirstPartyTypeKind3.ZodMap:
            return parseMapDef(def, refs);
        case ZodFirstPartyTypeKind3.ZodSet:
            return parseSetDef(def, refs);
        case ZodFirstPartyTypeKind3.ZodLazy:
            return ()=>def.getter()._def;
        case ZodFirstPartyTypeKind3.ZodPromise:
            return parsePromiseDef(def, refs);
        case ZodFirstPartyTypeKind3.ZodNaN:
        case ZodFirstPartyTypeKind3.ZodNever:
            return parseNeverDef();
        case ZodFirstPartyTypeKind3.ZodEffects:
            return parseEffectsDef(def, refs);
        case ZodFirstPartyTypeKind3.ZodAny:
            return parseAnyDef();
        case ZodFirstPartyTypeKind3.ZodUnknown:
            return parseUnknownDef();
        case ZodFirstPartyTypeKind3.ZodDefault:
            return parseDefaultDef(def, refs);
        case ZodFirstPartyTypeKind3.ZodBranded:
            return parseBrandedDef(def, refs);
        case ZodFirstPartyTypeKind3.ZodReadonly:
            return parseReadonlyDef(def, refs);
        case ZodFirstPartyTypeKind3.ZodCatch:
            return parseCatchDef(def, refs);
        case ZodFirstPartyTypeKind3.ZodPipeline:
            return parsePipelineDef(def, refs);
        case ZodFirstPartyTypeKind3.ZodFunction:
        case ZodFirstPartyTypeKind3.ZodVoid:
        case ZodFirstPartyTypeKind3.ZodSymbol:
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
                error: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeValidationError"]({
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
    ()=>addAdditionalPropertiesToJsonSchema(z4.toJSONSchema(zodSchema2, {
            target: "draft-7",
            io: "input",
            reused: useReferences ? "ref" : "inline"
        })), {
        validate: async (value)=>{
            const result = await z4.safeParseAsync(zodSchema2, value);
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
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeValidationError"].wrap({
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
            error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeValidationError"].wrap({
                value,
                cause: result.error,
                context
            }),
            rawValue: value
        };
    } catch (error) {
        return {
            success: false,
            error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeValidationError"].wrap({
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
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JSONParseError"].isInstance(error) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeValidationError"].isInstance(error)) {
            throw error;
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JSONParseError"]({
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
            error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JSONParseError"].isInstance(error) ? error : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JSONParseError"]({
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
    return stream.pipeThrough(new TextDecoderStream()).pipeThrough(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$stream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EventSourceParserStream"]()).pipeThrough(new TransformStream({
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
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
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
                if (isAbortError(error) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"].isInstance(error)) {
                    throw error;
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"]({
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
                if (isAbortError(error) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"].isInstance(error)) {
                    throw error;
                }
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"]({
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
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"]({
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
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"]({
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
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"]({
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
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyResponseBodyError"]({});
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
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"]({
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
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"]({
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
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"]({
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
            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICallError"]({
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
"[project]/node_modules/@ai-sdk/react/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'ai'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
// src/throttle.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$throttleit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/throttleit/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'swr'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
// src/use-object.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@ai-sdk/provider-utils/dist/index.mjs [app-client] (ecmascript) <locals>");
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
    return waitMs != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$throttleit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(fn, waitMs) : fn;
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
var Chat = class extends AbstractChat {
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
    const callbacksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!("chat" in options) ? {
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
    const chatRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("chat" in options ? options.chat : new Chat(optionsWithCallbacks));
    const shouldRecreateChat = "chat" in options && options.chat !== chatRef.current || "id" in options && chatRef.current.id !== options.id;
    if (shouldRecreateChat) {
        chatRef.current = "chat" in options ? options.chat : new Chat(optionsWithCallbacks);
    }
    const subscribeToMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChat.useCallback[subscribeToMessages]": (update)=>chatRef.current["~registerMessagesCallback"](update, throttleWaitMs)
    }["useChat.useCallback[subscribeToMessages]"], // `chatRef.current.id` is required to trigger re-subscription when the chat ID changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        throttleWaitMs,
        chatRef.current.id
    ]);
    const messages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribeToMessages, {
        "useChat.useSyncExternalStore[messages]": ()=>chatRef.current.messages
    }["useChat.useSyncExternalStore[messages]"], {
        "useChat.useSyncExternalStore[messages]": ()=>chatRef.current.messages
    }["useChat.useSyncExternalStore[messages]"]);
    const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(chatRef.current["~registerStatusCallback"], {
        "useChat.useSyncExternalStore[status]": ()=>chatRef.current.status
    }["useChat.useSyncExternalStore[status]"], {
        "useChat.useSyncExternalStore[status]": ()=>chatRef.current.status
    }["useChat.useSyncExternalStore[status]"]);
    const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(chatRef.current["~registerErrorCallback"], {
        "useChat.useSyncExternalStore[error]": ()=>chatRef.current.error
    }["useChat.useSyncExternalStore[error]"], {
        "useChat.useSyncExternalStore[error]": ()=>chatRef.current.error
    }["useChat.useSyncExternalStore[error]"]);
    const setMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChat.useCallback[setMessages]": (messagesParam)=>{
            if (typeof messagesParam === "function") {
                messagesParam = messagesParam(chatRef.current.messages);
            }
            chatRef.current.messages = messagesParam;
        }
    }["useChat.useCallback[setMessages]"], [
        chatRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChat.useEffect": ()=>{
            if (resume) {
                chatRef.current.resumeStream();
            }
        }
    }["useChat.useEffect"], [
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
    const hookId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const completionId = id || hookId;
    const { data, mutate } = useSWR([
        api,
        completionId
    ], null, {
        fallbackData: initialCompletion
    });
    const { data: isLoading = false, mutate: mutateLoading } = useSWR([
        completionId,
        "loading"
    ], null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(void 0);
    const completion = data;
    const [abortController, setAbortController] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const extraMetadataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        credentials,
        headers,
        body
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCompletion.useEffect2": ()=>{
            extraMetadataRef.current = {
                credentials,
                headers,
                body
            };
        }
    }["useCompletion.useEffect2"], [
        credentials,
        headers,
        body
    ]);
    const triggerRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCompletion.useCallback2[triggerRequest]": async (prompt, options)=>callCompletionApi({
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
                setCompletion: throttle({
                    "useCompletion.useCallback2[triggerRequest]": (completion2)=>mutate(completion2, false)
                }["useCompletion.useCallback2[triggerRequest]"], throttleWaitMs),
                setLoading: mutateLoading,
                setError,
                setAbortController,
                onFinish,
                onError
            })
    }["useCompletion.useCallback2[triggerRequest]"], [
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
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCompletion.useCallback2[stop]": ()=>{
            if (abortController) {
                abortController.abort();
                setAbortController(null);
            }
        }
    }["useCompletion.useCallback2[stop]"], [
        abortController
    ]);
    const setCompletion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCompletion.useCallback2[setCompletion]": (completion2)=>{
            mutate(completion2, false);
        }
    }["useCompletion.useCallback2[setCompletion]"], [
        mutate
    ]);
    const complete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCompletion.useCallback2[complete]": async (prompt, options)=>{
            return triggerRequest(prompt, options);
        }
    }["useCompletion.useCallback2[complete]"], [
        triggerRequest
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialInput);
    const handleSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCompletion.useCallback2[handleSubmit]": (event)=>{
            var _a;
            (_a = event == null ? void 0 : event.preventDefault) == null ? void 0 : _a.call(event);
            return input ? complete(input) : void 0;
        }
    }["useCompletion.useCallback2[handleSubmit]"], [
        input,
        complete
    ]);
    const handleInputChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCompletion.useCallback2[handleInputChange]": (e)=>{
            setInput(e.target.value);
        }
    }["useCompletion.useCallback2[handleInputChange]"], [
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
    const hookId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const completionId = id != null ? id : hookId;
    const { data, mutate } = useSWR2([
        api,
        completionId
    ], null, {
        fallbackData: initialValue
    });
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(void 0);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const abortControllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useObject.useCallback3[stop]": ()=>{
            var _a;
            try {
                (_a = abortControllerRef.current) == null ? void 0 : _a.abort();
            } catch (ignored) {} finally{
                setIsLoading(false);
                abortControllerRef.current = null;
            }
        }
    }["useObject.useCallback3[stop]"], []);
    const submit = async (input)=>{
        var _a;
        try {
            clearObject();
            setIsLoading(true);
            const abortController = new AbortController();
            abortControllerRef.current = abortController;
            const resolvedHeaders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(headers);
            const actualFetch = fetch2 != null ? fetch2 : getOriginalFetch();
            const response = await actualFetch(api, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["normalizeHeaders"])(resolvedHeaders)
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
                    const { value } = await parsePartialJson(accumulatedText);
                    const currentObject = value;
                    if (!isDeepEqualData(latestObject, currentObject)) {
                        latestObject = currentObject;
                        mutate(currentObject);
                    }
                },
                async close () {
                    setIsLoading(false);
                    abortControllerRef.current = null;
                    if (onFinish != null) {
                        const validationResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["safeValidateTypes"])({
                            value: latestObject,
                            schema: asSchema(schema)
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
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAbortError"])(error2)) {
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
"[project]/node_modules/@elevenlabs/client/dist/lib.modern.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
(()=>{
    const e1 = new Error("Cannot find module 'livekit-client'");
    e1.code = 'MODULE_NOT_FOUND';
    throw e1;
})();
;
function s() {
    return s = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", s.apply(null, arguments);
}
const a = new Uint8Array(0);
class r {
    static getFullOptions(e1) {
        var t1;
        const n1 = function(e1) {
            var t1, n1;
            const { textOnly: o1 } = null != (t1 = null == (n1 = e1.overrides) ? void 0 : n1.conversation) ? t1 : {}, { textOnly: i1 } = e1;
            return "boolean" == typeof i1 ? ("boolean" == typeof o1 && i1 !== o1 && console.warn(`Conflicting textOnly options provided: ${i1} via options.textOnly (will be used) and ${o1} via options.overrides.conversation.textOnly (will be ignored)`), i1) : "boolean" == typeof o1 ? o1 : void 0;
        }(e1);
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
        }, e1, {
            textOnly: n1,
            overrides: s({}, e1.overrides, {
                conversation: s({}, null == (t1 = e1.overrides) ? void 0 : t1.conversation, {
                    textOnly: n1
                })
            })
        });
    }
    constructor(e1, t1){
        var n1 = this;
        this.options = void 0, this.connection = void 0, this.lastInterruptTimestamp = 0, this.mode = "listening", this.status = "connecting", this.volume = 1, this.currentEventId = 1, this.lastFeedbackEventId = 0, this.canSendFeedback = !1, this.endSessionWithDetails = async function(e1) {
            "connected" !== n1.status && "connecting" !== n1.status || (n1.updateStatus("disconnecting"), await n1.handleEndSession(), n1.updateStatus("disconnected"), n1.options.onDisconnect && n1.options.onDisconnect(e1));
        }, this.onMessage = async function(e1) {
            switch(e1.type){
                case "interruption":
                    return void n1.handleInterruption(e1);
                case "agent_response":
                    return void n1.handleAgentResponse(e1);
                case "user_transcript":
                    return void n1.handleUserTranscript(e1);
                case "internal_tentative_agent_response":
                    return void n1.handleTentativeAgentResponse(e1);
                case "client_tool_call":
                    try {
                        await n1.handleClientToolCall(e1);
                    } catch (t1) {
                        n1.onError(`Unexpected error in client tool call handling: ${t1 instanceof Error ? t1.message : String(t1)}`, {
                            clientToolName: e1.client_tool_call.tool_name,
                            toolCallId: e1.client_tool_call.tool_call_id
                        });
                    }
                    return;
                case "audio":
                    return void n1.handleAudio(e1);
                case "vad_score":
                    return void n1.handleVadScore(e1);
                case "ping":
                    return void n1.connection.sendMessage({
                        type: "pong",
                        event_id: e1.ping_event.event_id
                    });
                case "mcp_tool_call":
                    return void n1.handleMCPToolCall(e1);
                case "mcp_connection_status":
                    return void n1.handleMCPConnectionStatus(e1);
                case "agent_tool_request":
                    return void n1.handleAgentToolRequest(e1);
                case "agent_tool_response":
                    return void n1.handleAgentToolResponse(e1);
                case "conversation_initiation_metadata":
                    return void n1.handleConversationMetadata(e1);
                case "asr_initiation_metadata":
                    return void n1.handleAsrInitiationMetadata(e1);
                case "agent_chat_response_part":
                    return void n1.handleAgentChatResponsePart(e1);
                case "guardrail_triggered":
                    return void n1.handleGuardrailTriggered(e1);
                case "error":
                    return void n1.handleErrorEvent(e1);
                default:
                    return void (n1.options.onDebug && n1.options.onDebug(e1));
            }
        }, this.setVolume = ({ volume: e1 })=>{
            this.volume = e1;
        }, this.options = e1, this.connection = t1, this.options.onConnect && this.options.onConnect({
            conversationId: t1.conversationId
        }), this.connection.onMessage(this.onMessage), this.connection.onDisconnect(this.endSessionWithDetails), this.connection.onModeChange((e1)=>this.updateMode(e1)), this.updateStatus("connected");
    }
    endSession() {
        return this.endSessionWithDetails({
            reason: "user"
        });
    }
    async handleEndSession() {
        this.connection.close();
    }
    updateMode(e1) {
        e1 !== this.mode && (this.mode = e1, this.options.onModeChange && this.options.onModeChange({
            mode: e1
        }));
    }
    updateStatus(e1) {
        e1 !== this.status && (this.status = e1, this.options.onStatusChange && this.options.onStatusChange({
            status: e1
        }));
    }
    updateCanSendFeedback() {
        const e1 = this.currentEventId !== this.lastFeedbackEventId;
        this.canSendFeedback !== e1 && (this.canSendFeedback = e1, this.options.onCanSendFeedbackChange && this.options.onCanSendFeedbackChange({
            canSendFeedback: e1
        }));
    }
    handleInterruption(e1) {
        e1.interruption_event && (this.lastInterruptTimestamp = e1.interruption_event.event_id, this.options.onInterruption && this.options.onInterruption({
            event_id: e1.interruption_event.event_id
        }));
    }
    handleAgentResponse(e1) {
        this.options.onMessage && this.options.onMessage({
            source: "ai",
            role: "agent",
            message: e1.agent_response_event.agent_response,
            event_id: e1.agent_response_event.event_id
        });
    }
    handleUserTranscript(e1) {
        this.options.onMessage && this.options.onMessage({
            source: "user",
            role: "user",
            message: e1.user_transcription_event.user_transcript,
            event_id: e1.user_transcription_event.event_id
        });
    }
    handleTentativeAgentResponse(e1) {
        this.options.onDebug && this.options.onDebug({
            type: "tentative_agent_response",
            response: e1.tentative_agent_response_internal_event.tentative_agent_response
        });
    }
    handleVadScore(e1) {
        this.options.onVadScore && this.options.onVadScore({
            vadScore: e1.vad_score_event.vad_score
        });
    }
    async handleClientToolCall(e1) {
        if (Object.prototype.hasOwnProperty.call(this.options.clientTools, e1.client_tool_call.tool_name)) try {
            var t1;
            const n1 = null != (t1 = await this.options.clientTools[e1.client_tool_call.tool_name](e1.client_tool_call.parameters)) ? t1 : "Client tool execution successful.", o1 = "object" == typeof n1 ? JSON.stringify(n1) : String(n1);
            this.connection.sendMessage({
                type: "client_tool_result",
                tool_call_id: e1.client_tool_call.tool_call_id,
                result: o1,
                is_error: !1
            });
        } catch (t1) {
            this.onError(`Client tool execution failed with following error: ${null == t1 ? void 0 : t1.message}`, {
                clientToolName: e1.client_tool_call.tool_name
            }), this.connection.sendMessage({
                type: "client_tool_result",
                tool_call_id: e1.client_tool_call.tool_call_id,
                result: `Client tool execution failed: ${null == t1 ? void 0 : t1.message}`,
                is_error: !0
            });
        }
        else {
            if (this.options.onUnhandledClientToolCall) return void this.options.onUnhandledClientToolCall(e1.client_tool_call);
            this.onError(`Client tool with name ${e1.client_tool_call.tool_name} is not defined on client`, {
                clientToolName: e1.client_tool_call.tool_name
            }), this.connection.sendMessage({
                type: "client_tool_result",
                tool_call_id: e1.client_tool_call.tool_call_id,
                result: `Client tool with name ${e1.client_tool_call.tool_name} is not defined on client`,
                is_error: !0
            });
        }
    }
    handleAudio(e1) {}
    handleMCPToolCall(e1) {
        this.options.onMCPToolCall && this.options.onMCPToolCall(e1.mcp_tool_call);
    }
    handleMCPConnectionStatus(e1) {
        this.options.onMCPConnectionStatus && this.options.onMCPConnectionStatus(e1.mcp_connection_status);
    }
    handleAgentToolRequest(e1) {
        this.options.onAgentToolRequest && this.options.onAgentToolRequest(e1.agent_tool_request);
    }
    handleAgentToolResponse(e1) {
        "end_call" === e1.agent_tool_response.tool_name && this.endSessionWithDetails({
            reason: "agent",
            context: new CloseEvent("end_call", {
                reason: "Agent ended the call"
            })
        }), this.options.onAgentToolResponse && this.options.onAgentToolResponse(e1.agent_tool_response);
    }
    handleConversationMetadata(e1) {
        this.options.onConversationMetadata && this.options.onConversationMetadata(e1.conversation_initiation_metadata_event);
    }
    handleAsrInitiationMetadata(e1) {
        this.options.onAsrInitiationMetadata && this.options.onAsrInitiationMetadata(e1.asr_initiation_metadata_event);
    }
    handleAgentChatResponsePart(e1) {
        this.options.onAgentChatResponsePart && this.options.onAgentChatResponsePart(e1.text_response_part);
    }
    handleGuardrailTriggered(e1) {
        this.options.onGuardrailTriggered && this.options.onGuardrailTriggered();
    }
    handleErrorEvent(e1) {
        const t1 = e1.error_event.error_type, n1 = e1.error_event.message || e1.error_event.reason || "Unknown error";
        "max_duration_exceeded" !== t1 ? this.onError(`Server error: ${n1}`, {
            errorType: t1,
            code: e1.error_event.code,
            debugMessage: e1.error_event.debug_message,
            details: e1.error_event.details
        }) : this.endSessionWithDetails({
            reason: "error",
            message: n1,
            context: new Event("max_duration_exceeded")
        });
    }
    onError(e1, t1) {
        console.error(e1, t1), this.options.onError && this.options.onError(e1, t1);
    }
    getId() {
        return this.connection.conversationId;
    }
    isOpen() {
        return "connected" === this.status;
    }
    setMicMuted(e1) {
        this.connection.setMicMuted(e1);
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
    sendFeedback(e1) {
        this.canSendFeedback ? (this.connection.sendMessage({
            type: "feedback",
            score: e1 ? "like" : "dislike",
            event_id: this.currentEventId
        }), this.lastFeedbackEventId = this.currentEventId, this.updateCanSendFeedback()) : console.warn(0 === this.lastFeedbackEventId ? "Cannot send feedback: the conversation has not started yet." : "Cannot send feedback: feedback has already been sent for the current response.");
    }
    sendContextualUpdate(e1) {
        this.connection.sendMessage({
            type: "contextual_update",
            text: e1
        });
    }
    sendUserMessage(e1) {
        this.connection.sendMessage({
            type: "user_message",
            text: e1
        });
    }
    sendUserActivity() {
        this.connection.sendMessage({
            type: "user_activity"
        });
    }
    sendMCPToolApprovalResult(e1, t1) {
        this.connection.sendMessage({
            type: "mcp_tool_approval_result",
            tool_call_id: e1,
            is_approved: t1
        });
    }
    sendMultimodalMessage(e1) {
        this.connection.sendMessage({
            type: "multimodal_message",
            text: e1.text ? {
                type: "user_message",
                text: e1.text
            } : void 0,
            file: e1.fileId ? {
                type: "file_input",
                file_id: e1.fileId
            } : void 0
        });
    }
}
class c {
    constructor(e1 = {}){
        this.queue = [], this.disconnectionDetails = null, this.onDisconnectCallback = null, this.onMessageCallback = null, this.onModeChangeCallback = null, this.onDebug = void 0, this.onDebug = e1.onDebug;
    }
    debug(e1) {
        this.onDebug && this.onDebug(e1);
    }
    onMessage(e1) {
        this.onMessageCallback = e1;
        const t1 = this.queue;
        this.queue = [], t1.length > 0 && queueMicrotask(()=>{
            t1.forEach(e1);
        });
    }
    onDisconnect(e1) {
        this.onDisconnectCallback = e1;
        const t1 = this.disconnectionDetails;
        t1 && queueMicrotask(()=>{
            e1(t1);
        });
    }
    onModeChange(e1) {
        this.onModeChangeCallback = e1;
    }
    updateMode(e1) {
        var t1;
        null == (t1 = this.onModeChangeCallback) || t1.call(this, e1);
    }
    disconnect(e1) {
        var t1;
        this.disconnectionDetails || (this.disconnectionDetails = e1, null == (t1 = this.onDisconnectCallback) || t1.call(this, e1));
    }
    handleMessage(e1) {
        this.onMessageCallback ? this.onMessageCallback(e1) : this.queue.push(e1);
    }
}
function l(e1) {
    const [t1, n1] = e1.split("_");
    if (![
        "pcm",
        "ulaw"
    ].includes(t1)) throw new Error(`Invalid format: ${e1}`);
    const o1 = Number.parseInt(n1);
    if (Number.isNaN(o1)) throw new Error(`Invalid sample rate: ${n1}`);
    return {
        format: t1,
        sampleRate: o1
    };
}
const u = "0.16.0";
function d(e1) {
    return !!e1.type;
}
const h = "conversation_initiation_client_data";
function p(e1) {
    var t1;
    const n1 = {
        type: h
    };
    var o1, i1, s, a, r, c, l, u;
    return e1.overrides && (n1.conversation_config_override = {
        agent: {
            prompt: null == (o1 = e1.overrides.agent) ? void 0 : o1.prompt,
            first_message: null == (i1 = e1.overrides.agent) ? void 0 : i1.firstMessage,
            language: null == (s = e1.overrides.agent) ? void 0 : s.language
        },
        tts: {
            voice_id: null == (a = e1.overrides.tts) ? void 0 : a.voiceId,
            speed: null == (r = e1.overrides.tts) ? void 0 : r.speed,
            stability: null == (c = e1.overrides.tts) ? void 0 : c.stability,
            similarity_boost: null == (l = e1.overrides.tts) ? void 0 : l.similarityBoost
        },
        conversation: {
            text_only: null == (u = e1.overrides.conversation) ? void 0 : u.textOnly
        }
    }), e1.customLlmExtraBody && (n1.custom_llm_extra_body = e1.customLlmExtraBody), e1.dynamicVariables && (n1.dynamic_variables = e1.dynamicVariables), e1.userId && (n1.user_id = e1.userId), null != (t1 = e1.overrides) && t1.client && (n1.source_info = {
        source: e1.overrides.client.source,
        version: e1.overrides.client.version
    }), n1;
}
class m extends Error {
    constructor(e1, t1){
        super(e1), this.closeCode = void 0, this.closeReason = void 0, this.name = "SessionConnectionError", this.closeCode = null == t1 ? void 0 : t1.closeCode, this.closeReason = null == t1 ? void 0 : t1.closeReason;
    }
}
class v extends c {
    constructor(e1, t1, n1, o1){
        super(), this.socket = void 0, this.conversationId = void 0, this.inputFormat = void 0, this.outputFormat = void 0, this.socket = e1, this.conversationId = t1, this.inputFormat = n1, this.outputFormat = o1, this.socket.addEventListener("error", (e1)=>{
            setTimeout(()=>this.disconnect({
                    reason: "error",
                    message: "The connection was closed due to a socket error.",
                    context: e1
                }), 0);
        }), this.socket.addEventListener("close", (e1)=>{
            this.disconnect(1e3 === e1.code ? {
                reason: "agent",
                context: e1,
                closeCode: e1.code,
                closeReason: e1.reason || void 0
            } : {
                reason: "error",
                message: e1.reason || "The connection was closed by the server.",
                context: e1,
                closeCode: e1.code,
                closeReason: e1.reason || void 0
            });
        }), this.socket.addEventListener("message", (e1)=>{
            try {
                const t1 = JSON.parse(e1.data);
                if (!d(t1)) return void this.debug({
                    type: "invalid_event",
                    message: "Received invalid socket event",
                    data: e1.data
                });
                this.handleMessage(t1);
            } catch (t1) {
                this.debug({
                    type: "parsing_error",
                    message: "Failed to parse socket message",
                    error: t1 instanceof Error ? t1.message : String(t1),
                    data: e1.data
                });
            }
        });
    }
    static async create(e1) {
        let t1 = null;
        try {
            var n1, o1, i1;
            const s = null != (n1 = e1.origin) ? n1 : "wss://api.elevenlabs.io";
            let a;
            const r = (null == (o1 = e1.overrides) || null == (o1 = o1.client) ? void 0 : o1.version) || u, c = (null == (i1 = e1.overrides) || null == (i1 = i1.client) ? void 0 : i1.source) || "js_sdk";
            if (e1.signedUrl) {
                const t1 = e1.signedUrl.includes("?") ? "&" : "?";
                a = `${e1.signedUrl}${t1}source=${c}&version=${r}`;
            } else a = `${s}/v1/convai/conversation?agent_id=${e1.agentId}&source=${c}&version=${r}`;
            e1.environment && (a += `&environment=${encodeURIComponent(e1.environment)}`);
            const h = [
                "convai"
            ];
            e1.authorization && h.push(`bearer.${e1.authorization}`), t1 = new WebSocket(a, h);
            const g = await new Promise((n1, o1)=>{
                t1.addEventListener("open", ()=>{
                    var n1;
                    const o1 = p(e1);
                    null == (n1 = t1) || n1.send(JSON.stringify(o1));
                }, {
                    once: !0
                }), t1.addEventListener("error", (e1)=>{
                    setTimeout(()=>o1(new m("The connection was closed due to a socket error.")), 0);
                }), t1.addEventListener("close", (e1)=>{
                    o1(new m(e1.reason || (1e3 === e1.code ? "Connection closed normally before session could be established." : "Connection closed unexpectedly before session could be established."), {
                        closeCode: e1.code,
                        closeReason: e1.reason || void 0
                    }));
                }), t1.addEventListener("message", (e1)=>{
                    const t1 = JSON.parse(e1.data);
                    d(t1) && ("conversation_initiation_metadata" === t1.type ? n1(t1.conversation_initiation_metadata_event) : console.warn("First received message is not conversation metadata."));
                }, {
                    once: !0
                });
            }), { conversation_id: f, agent_output_audio_format: _, user_input_audio_format: w } = g, b = l(null != w ? w : "pcm_16000"), y = l(_);
            return new v(t1, f, b, y);
        } catch (e1) {
            var s;
            throw null == (s = t1) || s.close(), e1;
        }
    }
    close() {
        this.socket.close(1e3, "User ended conversation");
    }
    sendMessage(e1) {
        this.socket.send(JSON.stringify(e1));
    }
    async setMicMuted(e1) {
        console.warn(`WebSocket connection setMicMuted called with ${e1}, but this is handled by VoiceConversation`);
    }
}
function g(e1) {
    const t1 = new Uint8Array(e1);
    return window.btoa(String.fromCharCode(...t1));
}
function f(e1) {
    const t1 = window.atob(e1), n1 = t1.length, o1 = new Uint8Array(n1);
    for(let e1 = 0; e1 < n1; e1++)o1[e1] = t1.charCodeAt(e1);
    return o1.buffer;
}
const _ = new Map;
function w(e1, t1) {
    return async (n1, o1)=>{
        const i1 = _.get(e1);
        if (i1) return n1.addModule(i1);
        if (o1) try {
            return await n1.addModule(o1), void _.set(e1, o1);
        } catch (t1) {
            throw new Error(`Failed to load the ${e1} worklet module from path: ${o1}. Error: ${t1}`);
        }
        const s = new Blob([
            t1
        ], {
            type: "application/javascript"
        }), a = URL.createObjectURL(s);
        try {
            return await n1.addModule(a), void _.set(e1, a);
        } catch (e1) {
            URL.revokeObjectURL(a);
        }
        try {
            const o1 = `data:application/javascript;base64,${btoa(t1)}`;
            await n1.addModule(o1), _.set(e1, o1);
        } catch (t1) {
            throw new Error(`Failed to load the ${e1} worklet module. Make sure the browser supports AudioWorklets. If you are using a strict CSP, you may need to self-host the worklet files.`);
        }
    };
}
const b = w("rawAudioProcessor", '/*\n * ulaw encoding logic taken from the wavefile library\n * https://github.com/rochars/wavefile/blob/master/lib/codecs/mulaw.js\n * USED BY @elevenlabs/client\n */\n\nconst BIAS = 0x84;\nconst CLIP = 32635;\nconst encodeTable = [\n  0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,\n  4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,\n  5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,\n  5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,\n  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,\n  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,\n  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,\n  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,\n  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,\n  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,\n  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,\n  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,\n  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,\n  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,\n  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,\n  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7\n];\n\nfunction encodeSample(sample) {\n  let sign;\n  let exponent;\n  let mantissa;\n  let muLawSample;\n  sign = (sample >> 8) & 0x80;\n  if (sign !== 0) sample = -sample;\n  sample = sample + BIAS;\n  if (sample > CLIP) sample = CLIP;\n  exponent = encodeTable[(sample>>7) & 0xFF];\n  mantissa = (sample >> (exponent+3)) & 0x0F;\n  muLawSample = ~(sign | (exponent << 4) | mantissa);\n  \n  return muLawSample;\n}\n\nclass RawAudioProcessor extends AudioWorkletProcessor {\n  constructor() {\n    super();\n              \n    this.port.onmessage = ({ data }) => {\n      switch (data.type) {\n        case "setFormat":\n          this.isMuted = false;\n          this.buffer = []; // Initialize an empty buffer\n          this.bufferSize = data.sampleRate / 10;\n          this.format = data.format;\n\n          if (globalThis.LibSampleRate && sampleRate !== data.sampleRate) {\n            globalThis.LibSampleRate.create(1, sampleRate, data.sampleRate).then(resampler => {\n              this.resampler = resampler;\n            });\n          }\n          break;\n        case "setMuted":\n          this.isMuted = data.isMuted;\n          break;\n      }\n    };\n  }\n  process(inputs) {\n    if (!this.buffer) {\n      return true;\n    }\n    \n    const input = inputs[0]; // Get the first input node\n    if (input.length > 0) {\n      let channelData = input[0]; // Get the first channel\'s data\n\n      // Resample the audio if necessary\n      if (this.resampler) {\n        channelData = this.resampler.full(channelData);\n      }\n\n      // Add channel data to the buffer\n      this.buffer.push(...channelData);\n      // Get max volume \n      let sum = 0.0;\n      for (let i = 0; i < channelData.length; i++) {\n        sum += channelData[i] * channelData[i];\n      }\n      const maxVolume = Math.sqrt(sum / channelData.length);\n      // Check if buffer size has reached or exceeded the threshold\n      if (this.buffer.length >= this.bufferSize) {\n        const float32Array = this.isMuted \n          ? new Float32Array(this.buffer.length)\n          : new Float32Array(this.buffer);\n\n        let encodedArray = this.format === "ulaw"\n          ? new Uint8Array(float32Array.length)\n          : new Int16Array(float32Array.length);\n\n        // Iterate through the Float32Array and convert each sample to PCM16\n        for (let i = 0; i < float32Array.length; i++) {\n          // Clamp the value to the range [-1, 1]\n          let sample = Math.max(-1, Math.min(1, float32Array[i]));\n\n          // Scale the sample to the range [-32768, 32767]\n          let value = sample < 0 ? sample * 32768 : sample * 32767;\n          if (this.format === "ulaw") {\n            value = encodeSample(Math.round(value));\n          }\n\n          encodedArray[i] = value;\n        }\n\n        // Send the buffered data to the main script\n        this.port.postMessage([encodedArray, maxVolume]);\n\n        // Clear the buffer after sending\n        this.buffer = [];\n      }\n    }\n    return true; // Continue processing\n  }\n}\nregisterProcessor("rawAudioProcessor", RawAudioProcessor);\n');
class y extends c {
    constructor(e1, t1, n1, o1, i1 = {}){
        super(i1), this.conversationId = void 0, this.inputFormat = void 0, this.outputFormat = void 0, this.room = void 0, this.isConnected = !1, this.audioEventId = 1, this.audioCaptureContext = null, this.audioElements = [], this.outputDeviceId = null, this.outputAnalyser = null, this.outputFrequencyData = null, this.room = e1, this.conversationId = t1, this.inputFormat = n1, this.outputFormat = o1, this.setupRoomEventListeners();
    }
    static async create(n1) {
        let o1;
        if ("conversationToken" in n1 && n1.conversationToken) o1 = n1.conversationToken;
        else {
            if (!("agentId" in n1) || !n1.agentId) throw new Error("Either conversationToken or agentId is required for WebRTC connection");
            try {
                var i1, s, a;
                const e1 = (null == (i1 = n1.overrides) || null == (i1 = i1.client) ? void 0 : i1.version) || u, t1 = (null == (s = n1.overrides) || null == (s = s.client) ? void 0 : s.source) || "js_sdk";
                let c = `${(r = null != (a = n1.origin) ? a : "https://api.elevenlabs.io", r.replace(/^wss:\/\//, "https://"))}/v1/convai/conversation/token?agent_id=${n1.agentId}&source=${t1}&version=${e1}`;
                n1.environment && (c += `&environment=${encodeURIComponent(n1.environment)}`);
                const l = await fetch(c);
                if (!l.ok) throw new Error(`ElevenLabs API returned ${l.status} ${l.statusText}`);
                if (o1 = (await l.json()).token, !o1) throw new Error("No conversation token received from API");
            } catch (e1) {
                let t1 = e1 instanceof Error ? e1.message : String(e1);
                throw e1 instanceof Error && e1.message.includes("401") && (t1 = "Your agent has authentication enabled, but no signed URL or conversation token was provided."), new Error(`Failed to fetch conversation token for agent ${n1.agentId}: ${t1}`);
            }
        }
        var r;
        const c = new e;
        try {
            const e1 = `room_${Date.now()}`, i1 = l("pcm_48000"), s = l("pcm_48000"), a = new y(c, e1, i1, s, n1), r = n1.livekitUrl || "wss://livekit.rtc.elevenlabs.io";
            var d;
            await c.connect(r, o1), await new Promise((e1)=>{
                if (a.isConnected) e1();
                else {
                    const n1 = ()=>{
                        c.off(t.Connected, n1), e1();
                    };
                    c.on(t.Connected, n1);
                }
            }), c.name && (a.conversationId = (null == (d = c.name.match(/(conv_[a-zA-Z0-9]+)/)) ? void 0 : d[0]) || c.name), n1.textOnly || await c.localParticipant.setMicrophoneEnabled(!0);
            const u = p(n1);
            return a.debug({
                type: h,
                message: u
            }), await a.sendMessage(u), a;
        } catch (e1) {
            throw await c.disconnect(), e1;
        }
    }
    setupRoomEventListeners() {
        var e1 = this;
        this.room.on(t.Connected, async function() {
            e1.isConnected = !0, console.info("WebRTC room connected");
        }), this.room.on(t.Disconnected, (e1)=>{
            this.isConnected = !1, this.disconnect({
                reason: "agent",
                context: new CloseEvent("close", {
                    reason: null == e1 ? void 0 : e1.toString()
                })
            });
        }), this.room.on(t.ConnectionStateChanged, (e1)=>{
            e1 === n.Disconnected && (this.isConnected = !1, this.disconnect({
                reason: "error",
                message: `LiveKit connection state changed to ${e1}`,
                context: new Event("connection_state_changed")
            }));
        }), this.room.on(t.DataReceived, (e1, t1)=>{
            try {
                const t1 = JSON.parse((new TextDecoder).decode(e1));
                if ("audio" === t1.type) return;
                d(t1) ? this.handleMessage(t1) : console.warn("Invalid socket event received:", t1);
            } catch (t1) {
                console.warn("Failed to parse incoming data message:", t1), console.warn("Raw payload:", (new TextDecoder).decode(e1));
            }
        }), this.room.on(t.TrackSubscribed, async function(t1, n1, i1) {
            if (t1.kind === o.Kind.Audio && i1.identity.includes("agent")) {
                const n1 = t1, o1 = n1.attach();
                if (o1.autoplay = !0, o1.controls = !1, e1.outputDeviceId && o1.setSinkId) try {
                    await o1.setSinkId(e1.outputDeviceId);
                } catch (e1) {
                    console.warn("Failed to set output device for new audio element:", e1);
                }
                o1.style.display = "none", document.body.appendChild(o1), e1.audioElements.push(o1), 1 === e1.audioElements.length && (null == e1.onDebug || e1.onDebug({
                    type: "audio_element_ready"
                })), await e1.setupAudioCapture(n1);
            }
        }), this.room.on(t.ActiveSpeakersChanged, async function(t1) {
            e1.updateMode(t1.length > 0 && t1[0].identity.startsWith("agent") ? "speaking" : "listening");
        }), this.room.on(t.ParticipantDisconnected, (e1)=>{
            var t1;
            null != (t1 = e1.identity) && t1.startsWith("agent") && this.disconnect({
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
                this.room.localParticipant.audioTrackPublications.forEach((e1)=>{
                    e1.track && e1.track.stop();
                });
            } catch (e1) {
                console.warn("Error stopping local tracks:", e1);
            }
            this.audioCaptureContext && (this.audioCaptureContext.close().catch((e1)=>{
                console.warn("Error closing audio capture context:", e1);
            }), this.audioCaptureContext = null), this.audioElements.forEach((e1)=>{
                e1.parentNode && e1.parentNode.removeChild(e1);
            }), this.audioElements = [], this.room.disconnect();
        }
    }
    async sendMessage(e1) {
        if (this.isConnected && this.room.localParticipant) {
            if (!("user_audio_chunk" in e1)) try {
                const t1 = (new TextEncoder).encode(JSON.stringify(e1));
                await this.room.localParticipant.publishData(t1, {
                    reliable: !0
                });
            } catch (t1) {
                this.debug({
                    type: "send_message_error",
                    message: {
                        message: e1,
                        error: t1
                    }
                }), console.error("Failed to send message via WebRTC:", t1);
            }
        } else console.warn("Cannot send message: room not connected or no local participant");
    }
    getRoom() {
        return this.room;
    }
    async setMicMuted(e1) {
        if (!this.isConnected || !this.room.localParticipant) return void console.warn("Cannot set microphone muted: room not connected or no local participant");
        const t1 = this.room.localParticipant.getTrackPublication(o.Source.Microphone);
        if (null != t1 && t1.track) try {
            e1 ? await t1.track.mute() : await t1.track.unmute();
        } catch (t1) {
            await this.room.localParticipant.setMicrophoneEnabled(!e1);
        }
        else await this.room.localParticipant.setMicrophoneEnabled(!e1);
    }
    async setupAudioCapture(e1) {
        try {
            const t1 = new AudioContext;
            this.audioCaptureContext = t1, this.outputAnalyser = t1.createAnalyser(), this.outputAnalyser.fftSize = 2048, this.outputAnalyser.smoothingTimeConstant = .8;
            const n1 = new MediaStream([
                e1.mediaStreamTrack
            ]), o1 = t1.createMediaStreamSource(n1);
            o1.connect(this.outputAnalyser), await b(t1.audioWorklet);
            const i1 = new AudioWorkletNode(t1, "rawAudioProcessor");
            this.outputAnalyser.connect(i1), i1.port.postMessage({
                type: "setFormat",
                format: this.outputFormat.format,
                sampleRate: this.outputFormat.sampleRate
            }), i1.port.onmessage = (e1)=>{
                const [t1, n1] = e1.data;
                if (n1 > .01) {
                    const e1 = g(t1.buffer), n1 = this.audioEventId++;
                    this.handleMessage({
                        type: "audio",
                        audio_event: {
                            audio_base_64: e1,
                            event_id: n1
                        }
                    });
                }
            }, o1.connect(i1);
        } catch (e1) {
            console.warn("Failed to set up audio capture:", e1);
        }
    }
    setAudioVolume(e1) {
        this.audioElements.forEach((t1)=>{
            t1.volume = e1;
        });
    }
    async setAudioOutputDevice(e1) {
        if (!("setSinkId" in HTMLAudioElement.prototype)) throw new Error("setSinkId is not supported in this browser");
        const t1 = this.audioElements.map(async function(t1) {
            try {
                await t1.setSinkId(e1);
            } catch (e1) {
                throw console.error("Failed to set sink ID for audio element:", e1), e1;
            }
        });
        await Promise.all(t1), this.outputDeviceId = e1;
    }
    async setAudioInputDevice(e1) {
        if (!this.isConnected || !this.room.localParticipant) throw new Error("Cannot change input device: room not connected or no local participant");
        try {
            const t1 = this.room.localParticipant.getTrackPublication(o.Source.Microphone);
            null != t1 && t1.track && (await t1.track.stop(), await this.room.localParticipant.unpublishTrack(t1.track));
            const n1 = {
                deviceId: {
                    exact: e1
                },
                echoCancellation: !0,
                noiseSuppression: !0,
                autoGainControl: !0,
                channelCount: {
                    ideal: 1
                }
            }, s = await i(n1);
            await this.room.localParticipant.publishTrack(s, {
                name: "microphone",
                source: o.Source.Microphone
            });
        } catch (e1) {
            console.error("Failed to change input device:", e1);
            try {
                await this.room.localParticipant.setMicrophoneEnabled(!0);
            } catch (e1) {
                console.error("Failed to recover microphone after device switch error:", e1);
            }
            throw e1;
        }
    }
    getOutputByteFrequencyData() {
        return this.outputAnalyser ? (null != this.outputFrequencyData || (this.outputFrequencyData = new Uint8Array(this.outputAnalyser.frequencyBinCount)), this.outputAnalyser.getByteFrequencyData(this.outputFrequencyData), this.outputFrequencyData) : null;
    }
}
async function S(e1) {
    const t1 = function(e1) {
        return e1.connectionType ? e1.connectionType : "conversationToken" in e1 && e1.conversationToken ? "webrtc" : "websocket";
    }(e1);
    switch(t1){
        case "websocket":
            return v.create(e1);
        case "webrtc":
            return y.create(e1);
        default:
            throw new Error(`Unknown connection type: ${t1}`);
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
async function C(e1 = {
    default: 0,
    android: 3e3
}) {
    let t1 = e1.default;
    var n1;
    if (/android/i.test(navigator.userAgent)) t1 = null != (n1 = e1.android) ? n1 : t1;
    else if (E()) {
        var o1;
        t1 = null != (o1 = e1.ios) ? o1 : t1;
    }
    t1 > 0 && await new Promise((e1)=>setTimeout(e1, t1));
}
class k extends r {
    constructor(...e1){
        super(...e1), this.type = "text";
    }
    static async startSession(e1) {
        const t1 = r.getFullOptions(e1);
        t1.onStatusChange && t1.onStatusChange({
            status: "connecting"
        }), t1.onCanSendFeedbackChange && t1.onCanSendFeedbackChange({
            canSendFeedback: !1
        }), t1.onModeChange && t1.onModeChange({
            mode: "listening"
        }), t1.onCanSendFeedbackChange && t1.onCanSendFeedbackChange({
            canSendFeedback: !1
        });
        let n1 = null;
        try {
            return await C(t1.connectionDelay), n1 = await S(e1), new k(t1, n1);
        } catch (e1) {
            var o1;
            throw t1.onStatusChange && t1.onStatusChange({
                status: "disconnected"
            }), null == (o1 = n1) || o1.close(), e1;
        }
    }
}
async function R(e1, t1) {
    const n1 = t1 || "https://cdn.jsdelivr.net/npm/@alexanderolsen/libsamplerate-js@2.1.2/dist/libsamplerate.worklet.js";
    await e1.audioWorklet.addModule(n1);
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
    static async create({ sampleRate: e1, format: t1, preferHeadphonesForIosDevices: n1, inputDeviceId: o1, workletPaths: i1, libsampleratePath: a, onError: r }) {
        let c = null, l = null;
        try {
            const u = s({
                sampleRate: {
                    ideal: e1
                }
            }, I);
            if (E() && n1) {
                const e1 = (await window.navigator.mediaDevices.enumerateDevices()).find((e1)=>"audioinput" === e1.kind && [
                        "airpod",
                        "headphone",
                        "earphone"
                    ].find((t1)=>e1.label.toLowerCase().includes(t1)));
                e1 && (u.deviceId = {
                    ideal: e1.deviceId
                });
            }
            o1 && (u.deviceId = M.getDeviceIdConstraint(o1));
            const d = navigator.mediaDevices.getSupportedConstraints().sampleRate;
            c = new window.AudioContext(d ? {
                sampleRate: e1
            } : {});
            const h = c.createAnalyser();
            d || await R(c, a), await b(c.audioWorklet, null == i1 ? void 0 : i1.rawAudioProcessor);
            const p = s({
                voiceIsolation: !0
            }, u);
            l = await navigator.mediaDevices.getUserMedia({
                audio: p
            });
            const m = c.createMediaStreamSource(l), v = new AudioWorkletNode(c, "rawAudioProcessor");
            v.port.postMessage({
                type: "setFormat",
                format: t1,
                sampleRate: e1
            }), m.connect(h), h.connect(v), await c.resume();
            const g = await navigator.permissions.query({
                name: "microphone"
            });
            return new M(c, h, v, l, m, g, r);
        } catch (e1) {
            var u, d;
            throw null == (u = l) || u.getTracks().forEach((e1)=>{
                e1.stop();
            }), null == (d = c) || d.close(), e1;
        }
    }
    static getDeviceIdConstraint(e1) {
        if (e1) return E() ? {
            ideal: e1
        } : {
            exact: e1
        };
    }
    constructor(e1, t1, n1, o1, i1, s, a = console.error){
        this.context = void 0, this.analyser = void 0, this.worklet = void 0, this.inputStream = void 0, this.mediaStreamSource = void 0, this.permissions = void 0, this.onError = void 0, this.settingInput = !1, this.handlePermissionsChange = ()=>{
            if ("denied" === this.permissions.state) this.onError("Microphone permission denied");
            else if (!this.settingInput) {
                var e1;
                const [t1] = this.inputStream.getAudioTracks(), { deviceId: n1 } = null != (e1 = null == t1 ? void 0 : t1.getSettings()) ? e1 : {};
                this.setInputDevice(n1).catch((e1)=>{
                    this.onError("Failed to reset input device after permission change:", e1);
                });
            }
        }, this.context = e1, this.analyser = t1, this.worklet = n1, this.inputStream = o1, this.mediaStreamSource = i1, this.permissions = s, this.onError = a, this.permissions.addEventListener("change", this.handlePermissionsChange);
    }
    forgetInputStreamAndSource() {
        for (const e1 of this.inputStream.getTracks())e1.stop();
        this.mediaStreamSource.disconnect();
    }
    async close() {
        this.forgetInputStreamAndSource(), this.permissions.removeEventListener("change", this.handlePermissionsChange), await this.context.close();
    }
    setMuted(e1) {
        this.worklet.port.postMessage({
            type: "setMuted",
            isMuted: e1
        });
    }
    async setInputDevice(e1) {
        try {
            if (this.settingInput) throw new Error("Input device is already being set");
            this.settingInput = !0;
            const t1 = s({}, I);
            e1 && (t1.deviceId = M.getDeviceIdConstraint(e1));
            const n1 = s({
                voiceIsolation: !0
            }, t1), o1 = await navigator.mediaDevices.getUserMedia({
                audio: n1
            });
            this.forgetInputStreamAndSource(), this.inputStream = o1, this.mediaStreamSource = this.context.createMediaStreamSource(o1), this.mediaStreamSource.connect(this.analyser);
        } catch (e1) {
            throw this.onError("Failed to switch input device:", e1), e1;
        } finally{
            this.settingInput = !1;
        }
    }
}
const A = w("audioConcatProcessor", '/*\n * ulaw decoding logic taken from the wavefile library\n * https://github.com/rochars/wavefile/blob/master/lib/codecs/mulaw.js\n * USED BY @elevenlabs/client\n */\n\nconst decodeTable = [0, 132, 396, 924, 1980, 4092, 8316, 16764];\n\nfunction decodeSample(muLawSample) {\n  let sign;\n  let exponent;\n  let mantissa;\n  let sample;\n  muLawSample = ~muLawSample;\n  sign = muLawSample & 0x80;\n  exponent = (muLawSample >> 4) & 0x07;\n  mantissa = muLawSample & 0x0f;\n  sample = decodeTable[exponent] + (mantissa << (exponent + 3));\n  if (sign !== 0) sample = -sample;\n\n  return sample;\n}\n\nclass AudioConcatProcessor extends AudioWorkletProcessor {\n  constructor() {\n    super();\n    this.buffers = []; // Initialize an empty buffer\n    this.cursor = 0;\n    this.currentBuffer = null;\n    this.wasInterrupted = false;\n    this.finished = false;\n\n    this.port.onmessage = ({ data }) => {\n      switch (data.type) {\n        case "setFormat":\n          this.format = data.format;\n          if (globalThis.LibSampleRate && sampleRate !== data.sampleRate) {\n            globalThis.LibSampleRate.create(\n              1,\n              data.sampleRate,\n              sampleRate\n            ).then(resampler => {\n              this.resampler = resampler;\n            });\n          }\n          break;\n        case "buffer":\n          this.wasInterrupted = false;\n          this.buffers.push(\n            this.format === "ulaw"\n              ? new Uint8Array(data.buffer)\n              : new Int16Array(data.buffer)\n          );\n          break;\n        case "interrupt":\n          this.wasInterrupted = true;\n          break;\n        case "clearInterrupted":\n          if (this.wasInterrupted) {\n            this.wasInterrupted = false;\n            this.buffers = [];\n            this.currentBuffer = null;\n          }\n      }\n    };\n  }\n  process(_, outputs) {\n    let finished = false;\n    const output = outputs[0][0];\n    for (let i = 0; i < output.length; i++) {\n      if (!this.currentBuffer) {\n        if (this.buffers.length === 0) {\n          finished = true;\n          break;\n        }\n        this.currentBuffer = this.buffers.shift();\n        if (this.resampler) {\n          this.currentBuffer = this.resampler.full(this.currentBuffer);\n        }\n        this.cursor = 0;\n      }\n\n      let value = this.currentBuffer[this.cursor];\n      if (this.format === "ulaw") {\n        value = decodeSample(value);\n      }\n      output[i] = value / 32768;\n      this.cursor++;\n\n      if (this.cursor >= this.currentBuffer.length) {\n        this.currentBuffer = null;\n      }\n    }\n\n    if (this.finished !== finished) {\n      this.finished = finished;\n      this.port.postMessage({ type: "process", finished });\n    }\n\n    return true; // Continue processing\n  }\n}\n\nregisterProcessor("audioConcatProcessor", AudioConcatProcessor);\n');
class D {
    static async create({ sampleRate: e1, format: t1, outputDeviceId: n1, workletPaths: o1, libsampleratePath: i1 }) {
        let s = null, a = null;
        try {
            const r = navigator.mediaDevices.getSupportedConstraints().sampleRate;
            s = new AudioContext(r ? {
                sampleRate: e1
            } : {});
            const c = s.createAnalyser(), l = s.createGain();
            a = new Audio, a.src = "", a.load(), a.autoplay = !0, a.style.display = "none", document.body.appendChild(a);
            const u = s.createMediaStreamDestination();
            a.srcObject = u.stream, l.connect(c), c.connect(u), r && s.sampleRate === e1 || (s.sampleRate !== e1 && console.warn(`[ConversationalAI] Sample rate ${e1} not available, resampling to ${s.sampleRate}`), await R(s, i1)), await A(s.audioWorklet, null == o1 ? void 0 : o1.audioConcatProcessor);
            const d = new AudioWorkletNode(s, "audioConcatProcessor");
            return d.port.postMessage({
                type: "setFormat",
                format: t1,
                sampleRate: e1
            }), d.connect(l), await s.resume(), n1 && a.setSinkId && await a.setSinkId(n1), new D(s, c, l, d, a);
        } catch (e1) {
            var r, c;
            throw null != (r = a) && r.parentNode && a.parentNode.removeChild(a), null == (c = a) || c.pause(), s && "closed" !== s.state && await s.close(), e1;
        }
    }
    constructor(e1, t1, n1, o1, i1){
        this.context = void 0, this.analyser = void 0, this.gain = void 0, this.worklet = void 0, this.audioElement = void 0, this.context = e1, this.analyser = t1, this.gain = n1, this.worklet = o1, this.audioElement = i1;
    }
    async setOutputDevice(e1) {
        if (!("setSinkId" in HTMLAudioElement.prototype)) throw new Error("setSinkId is not supported in this browser");
        await this.audioElement.setSinkId(e1 || "");
    }
    async close() {
        this.audioElement.parentNode && this.audioElement.parentNode.removeChild(this.audioElement), this.audioElement.pause(), await this.context.close();
    }
}
class T extends r {
    static async requestWakeLock() {
        if ("wakeLock" in navigator) try {
            return await navigator.wakeLock.request("screen");
        } catch (e1) {}
        return null;
    }
    static async startSession(e1) {
        var t1;
        const n1 = r.getFullOptions(e1);
        n1.onStatusChange && n1.onStatusChange({
            status: "connecting"
        }), n1.onCanSendFeedbackChange && n1.onCanSendFeedbackChange({
            canSendFeedback: !1
        });
        let o1 = null, i1 = null, a = null, c = null, l = null;
        (null == (t1 = e1.useWakeLock) || t1) && (l = await T.requestWakeLock());
        try {
            var u;
            return c = await navigator.mediaDevices.getUserMedia({
                audio: !0
            }), await C(n1.connectionDelay), i1 = await S(e1), [o1, a] = await Promise.all([
                M.create(s({}, i1.inputFormat, {
                    preferHeadphonesForIosDevices: e1.preferHeadphonesForIosDevices,
                    inputDeviceId: e1.inputDeviceId,
                    workletPaths: e1.workletPaths,
                    libsampleratePath: e1.libsampleratePath
                })),
                D.create(s({}, i1.outputFormat, {
                    outputDeviceId: e1.outputDeviceId,
                    workletPaths: e1.workletPaths
                }))
            ]), null == (u = c) || u.getTracks().forEach((e1)=>{
                e1.stop();
            }), c = null, new T(n1, i1, o1, a, l);
        } catch (e1) {
            var d, h, p, m;
            n1.onStatusChange && n1.onStatusChange({
                status: "disconnected"
            }), null == (d = c) || d.getTracks().forEach((e1)=>{
                e1.stop();
            }), null == (h = i1) || h.close(), await (null == (p = o1) ? void 0 : p.close()), await (null == (m = a) ? void 0 : m.close());
            try {
                var v;
                await (null == (v = l) ? void 0 : v.release()), l = null;
            } catch (e1) {}
            throw e1;
        }
    }
    constructor(e1, t1, n1, o1, i1){
        super(e1, t1), this.input = void 0, this.output = void 0, this.wakeLock = void 0, this.type = "voice", this.inputFrequencyData = void 0, this.outputFrequencyData = void 0, this.visibilityChangeHandler = null, this.onInputWorkletMessage = (e1)=>{
            "connected" === this.status && this.connection.sendMessage({
                user_audio_chunk: g(e1.data[0].buffer)
            });
        }, this.onOutputWorkletMessage = ({ data: e1 })=>{
            "process" === e1.type && this.updateMode(e1.finished ? "listening" : "speaking");
        }, this.addAudioBase64Chunk = (e1)=>{
            this.output.gain.gain.cancelScheduledValues(this.output.context.currentTime), this.output.gain.gain.value = this.volume, this.output.worklet.port.postMessage({
                type: "clearInterrupted"
            }), this.output.worklet.port.postMessage({
                type: "buffer",
                buffer: f(e1)
            });
        }, this.fadeOutAudio = ()=>{
            this.updateMode("listening"), this.output.worklet.port.postMessage({
                type: "interrupt"
            }), this.output.gain.gain.exponentialRampToValueAtTime(1e-4, this.output.context.currentTime + 2), setTimeout(()=>{
                this.output.gain.gain.value = this.volume, this.output.worklet.port.postMessage({
                    type: "clearInterrupted"
                });
            }, 2e3);
        }, this.calculateVolume = (e1)=>{
            if (0 === e1.length) return 0;
            let t1 = 0;
            for(let n1 = 0; n1 < e1.length; n1++)t1 += e1[n1] / 255;
            return t1 /= e1.length, t1 < 0 ? 0 : t1 > 1 ? 1 : t1;
        }, this.setVolume = ({ volume: e1 })=>{
            const t1 = Number.isFinite(e1) ? Math.min(1, Math.max(0, e1)) : 1;
            this.volume = t1, this.connection instanceof y ? this.connection.setAudioVolume(t1) : this.output.gain.gain.value = t1;
        }, this.input = n1, this.output = o1, this.wakeLock = i1, this.input.worklet.port.onmessage = this.onInputWorkletMessage, this.output.worklet.port.onmessage = this.onOutputWorkletMessage, i1 && (this.visibilityChangeHandler = ()=>{
            var e1;
            "visible" === document.visibilityState && null != (e1 = this.wakeLock) && e1.released && T.requestWakeLock().then((e1)=>{
                this.wakeLock = e1;
            });
        }, document.addEventListener("visibilitychange", this.visibilityChangeHandler));
    }
    async handleEndSession() {
        await super.handleEndSession(), this.visibilityChangeHandler && document.removeEventListener("visibilitychange", this.visibilityChangeHandler);
        try {
            var e1;
            await (null == (e1 = this.wakeLock) ? void 0 : e1.release()), this.wakeLock = null;
        } catch (e1) {}
        await this.input.close(), await this.output.close();
    }
    handleInterruption(e1) {
        super.handleInterruption(e1), this.fadeOutAudio();
    }
    handleAudio(e1) {
        var t1, n1;
        super.handleAudio(e1), e1.audio_event.alignment && this.options.onAudioAlignment && this.options.onAudioAlignment(e1.audio_event.alignment), this.lastInterruptTimestamp <= e1.audio_event.event_id && (e1.audio_event.audio_base_64 && (null == (t1 = (n1 = this.options).onAudio) || t1.call(n1, e1.audio_event.audio_base_64), this.connection instanceof y || this.addAudioBase64Chunk(e1.audio_event.audio_base_64)), this.currentEventId = e1.audio_event.event_id, this.updateCanSendFeedback(), this.updateMode("speaking"));
    }
    setMicMuted(e1) {
        this.connection instanceof y ? this.connection.setMicMuted(e1) : this.input.setMuted(e1);
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
    async changeInputDevice({ sampleRate: e1, format: t1, preferHeadphonesForIosDevices: n1, inputDeviceId: o1 }) {
        try {
            if (this.connection instanceof v) try {
                return await this.input.setInputDevice(o1), this.input;
            } catch (e1) {
                console.warn("Failed to change device on existing input, recreating:", e1);
            }
            this.connection instanceof y && await this.connection.setAudioInputDevice(o1 || ""), await this.input.close();
            const i1 = await M.create({
                sampleRate: null != e1 ? e1 : this.connection.inputFormat.sampleRate,
                format: null != t1 ? t1 : this.connection.inputFormat.format,
                preferHeadphonesForIosDevices: n1,
                inputDeviceId: o1,
                workletPaths: this.options.workletPaths,
                libsampleratePath: this.options.libsampleratePath,
                onError: this.options.onError
            });
            return this.input = i1, this.input.worklet.port.onmessage = this.onInputWorkletMessage, this.input;
        } catch (e1) {
            throw console.error("Error changing input device", e1), e1;
        }
    }
    async changeOutputDevice({ sampleRate: e1, format: t1, outputDeviceId: n1 }) {
        try {
            if (this.connection instanceof v) try {
                return await this.output.setOutputDevice(n1), this.output;
            } catch (e1) {
                console.warn("Failed to change device on existing output, recreating:", e1);
            }
            this.connection instanceof y && await this.connection.setAudioOutputDevice(n1 || ""), await this.output.close();
            const o1 = await D.create({
                sampleRate: null != e1 ? e1 : this.connection.outputFormat.sampleRate,
                format: null != t1 ? t1 : this.connection.outputFormat.format,
                outputDeviceId: n1,
                workletPaths: this.options.workletPaths
            });
            return this.output = o1, this.output;
        } catch (e1) {
            throw console.error("Error changing output device", e1), e1;
        }
    }
}
function F(e1, t1, n1 = "https://api.elevenlabs.io") {
    const o1 = {};
    return "boolean" == typeof t1 ? o1.feedback = t1 ? "like" : "dislike" : (o1.rating = t1.rating, o1.comment = t1.comment), fetch(`${n1}/v1/convai/conversations/${e1}/feedback`, {
        method: "POST",
        body: JSON.stringify(o1),
        headers: {
            "Content-Type": "application/json"
        }
    });
}
class P {
    constructor(){
        this.listeners = new Map;
    }
    on(e1, t1) {
        this.listeners.has(e1) || this.listeners.set(e1, new Set);
        const n1 = this.listeners.get(e1);
        n1 && n1.add(t1);
    }
    off(e1, t1) {
        const n1 = this.listeners.get(e1);
        n1 && n1.delete(t1);
    }
    emit(e1, ...t1) {
        const n1 = this.listeners.get(e1);
        n1 && n1.forEach((e1)=>{
            e1(...t1);
        });
    }
}
var x;
!function(e1) {
    e1.SESSION_STARTED = "session_started", e1.PARTIAL_TRANSCRIPT = "partial_transcript", e1.COMMITTED_TRANSCRIPT = "committed_transcript", e1.COMMITTED_TRANSCRIPT_WITH_TIMESTAMPS = "committed_transcript_with_timestamps", e1.AUTH_ERROR = "auth_error", e1.ERROR = "error", e1.OPEN = "open", e1.CLOSE = "close", e1.QUOTA_EXCEEDED = "quota_exceeded", e1.COMMIT_THROTTLED = "commit_throttled", e1.TRANSCRIBER_ERROR = "transcriber_error", e1.UNACCEPTED_TERMS = "unaccepted_terms", e1.RATE_LIMITED = "rate_limited", e1.INPUT_ERROR = "input_error", e1.QUEUE_OVERFLOW = "queue_overflow", e1.RESOURCE_EXHAUSTED = "resource_exhausted", e1.SESSION_TIME_LIMIT_EXCEEDED = "session_time_limit_exceeded", e1.CHUNK_SIZE_EXCEEDED = "chunk_size_exceeded", e1.INSUFFICIENT_AUDIO_ACTIVITY = "insufficient_audio_activity";
}(x || (x = {}));
class O {
    constructor(e1){
        this.websocket = null, this.eventEmitter = new P, this.currentSampleRate = 16e3, this._audioCleanup = void 0, this.currentSampleRate = e1;
    }
    setWebSocket(e1) {
        this.websocket = e1, this.websocket.readyState === WebSocket.OPEN ? this.eventEmitter.emit(x.OPEN) : this.websocket.addEventListener("open", ()=>{
            this.eventEmitter.emit(x.OPEN);
        }), this.websocket.addEventListener("message", (e1)=>{
            try {
                const t1 = JSON.parse(e1.data);
                switch(t1.message_type){
                    case "session_started":
                        this.eventEmitter.emit(x.SESSION_STARTED, t1);
                        break;
                    case "partial_transcript":
                        this.eventEmitter.emit(x.PARTIAL_TRANSCRIPT, t1);
                        break;
                    case "committed_transcript":
                        this.eventEmitter.emit(x.COMMITTED_TRANSCRIPT, t1);
                        break;
                    case "committed_transcript_with_timestamps":
                        this.eventEmitter.emit(x.COMMITTED_TRANSCRIPT_WITH_TIMESTAMPS, t1);
                        break;
                    case "auth_error":
                        this.eventEmitter.emit(x.AUTH_ERROR, t1), this.eventEmitter.emit(x.ERROR, t1);
                        break;
                    case "quota_exceeded":
                        this.eventEmitter.emit(x.QUOTA_EXCEEDED, t1), this.eventEmitter.emit(x.ERROR, t1);
                        break;
                    case "commit_throttled":
                        this.eventEmitter.emit(x.COMMIT_THROTTLED, t1), this.eventEmitter.emit(x.ERROR, t1);
                        break;
                    case "transcriber_error":
                        this.eventEmitter.emit(x.TRANSCRIBER_ERROR, t1), this.eventEmitter.emit(x.ERROR, t1);
                        break;
                    case "unaccepted_terms":
                        this.eventEmitter.emit(x.UNACCEPTED_TERMS, t1), this.eventEmitter.emit(x.ERROR, t1);
                        break;
                    case "rate_limited":
                        this.eventEmitter.emit(x.RATE_LIMITED, t1), this.eventEmitter.emit(x.ERROR, t1);
                        break;
                    case "input_error":
                        this.eventEmitter.emit(x.INPUT_ERROR, t1), this.eventEmitter.emit(x.ERROR, t1);
                        break;
                    case "queue_overflow":
                        this.eventEmitter.emit(x.QUEUE_OVERFLOW, t1), this.eventEmitter.emit(x.ERROR, t1);
                        break;
                    case "resource_exhausted":
                        this.eventEmitter.emit(x.RESOURCE_EXHAUSTED, t1), this.eventEmitter.emit(x.ERROR, t1);
                        break;
                    case "session_time_limit_exceeded":
                        this.eventEmitter.emit(x.SESSION_TIME_LIMIT_EXCEEDED, t1), this.eventEmitter.emit(x.ERROR, t1);
                        break;
                    case "chunk_size_exceeded":
                        this.eventEmitter.emit(x.CHUNK_SIZE_EXCEEDED, t1), this.eventEmitter.emit(x.ERROR, t1);
                        break;
                    case "insufficient_audio_activity":
                        this.eventEmitter.emit(x.INSUFFICIENT_AUDIO_ACTIVITY, t1), this.eventEmitter.emit(x.ERROR, t1);
                        break;
                    case "error":
                        this.eventEmitter.emit(x.ERROR, t1);
                        break;
                    default:
                        console.warn("Unknown message type:", t1);
                }
            } catch (t1) {
                console.error("Failed to parse WebSocket message:", t1, e1.data), this.eventEmitter.emit(x.ERROR, new Error(`Failed to parse message: ${t1}`));
            }
        }), this.websocket.addEventListener("error", (e1)=>{
            console.error("WebSocket error:", e1), this.eventEmitter.emit(x.ERROR, e1);
        }), this.websocket.addEventListener("close", (e1)=>{
            if (console.log(`WebSocket closed: code=${e1.code}, reason="${e1.reason}", wasClean=${e1.wasClean}`), !e1.wasClean || 1e3 !== e1.code && 1005 !== e1.code) {
                const t1 = `WebSocket closed unexpectedly: ${e1.code} - ${e1.reason || "No reason provided"}`;
                console.error(t1), this.eventEmitter.emit(x.ERROR, new Error(t1));
            }
            this.eventEmitter.emit(x.CLOSE, e1);
        });
    }
    on(e1, t1) {
        this.eventEmitter.on(e1, t1);
    }
    off(e1, t1) {
        this.eventEmitter.off(e1, t1);
    }
    send(e1) {
        var t1, n1;
        if (!this.websocket || this.websocket.readyState !== WebSocket.OPEN) throw new Error("WebSocket is not connected");
        const o1 = {
            message_type: "input_audio_chunk",
            audio_base_64: e1.audioBase64,
            commit: null != (t1 = e1.commit) && t1,
            sample_rate: null != (n1 = e1.sampleRate) ? n1 : this.currentSampleRate,
            previous_text: e1.previousText
        };
        this.websocket.send(JSON.stringify(o1));
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
!function(e1) {
    e1.PCM_8000 = "pcm_8000", e1.PCM_16000 = "pcm_16000", e1.PCM_22050 = "pcm_22050", e1.PCM_24000 = "pcm_24000", e1.PCM_44100 = "pcm_44100", e1.PCM_48000 = "pcm_48000", e1.ULAW_8000 = "ulaw_8000";
}(U || (U = {})), function(e1) {
    e1.MANUAL = "manual", e1.VAD = "vad";
}(N || (N = {}));
class W {
    static getWebSocketUri(e1 = W.DEFAULT_BASE_URI) {
        return `${e1}/v1/speech-to-text/realtime`;
    }
    static buildWebSocketUri(e1) {
        const t1 = W.getWebSocketUri(e1.baseUri), n1 = new URLSearchParams;
        if (n1.append("model_id", e1.modelId), n1.append("token", e1.token), void 0 !== e1.commitStrategy && n1.append("commit_strategy", e1.commitStrategy), void 0 !== e1.audioFormat && n1.append("audio_format", e1.audioFormat), void 0 !== e1.vadSilenceThresholdSecs) {
            if (e1.vadSilenceThresholdSecs <= .3 || e1.vadSilenceThresholdSecs > 3) throw new Error("vadSilenceThresholdSecs must be between 0.3 and 3.0");
            n1.append("vad_silence_threshold_secs", e1.vadSilenceThresholdSecs.toString());
        }
        if (void 0 !== e1.vadThreshold) {
            if (e1.vadThreshold < .1 || e1.vadThreshold > .9) throw new Error("vadThreshold must be between 0.1 and 0.9");
            n1.append("vad_threshold", e1.vadThreshold.toString());
        }
        if (void 0 !== e1.minSpeechDurationMs) {
            if (e1.minSpeechDurationMs <= 50 || e1.minSpeechDurationMs > 2e3) throw new Error("minSpeechDurationMs must be between 50 and 2000");
            n1.append("min_speech_duration_ms", e1.minSpeechDurationMs.toString());
        }
        if (void 0 !== e1.minSilenceDurationMs) {
            if (e1.minSilenceDurationMs <= 50 || e1.minSilenceDurationMs > 2e3) throw new Error("minSilenceDurationMs must be between 50 and 2000");
            n1.append("min_silence_duration_ms", e1.minSilenceDurationMs.toString());
        }
        void 0 !== e1.languageCode && n1.append("language_code", e1.languageCode), void 0 !== e1.includeTimestamps && n1.append("include_timestamps", e1.includeTimestamps ? "true" : "false");
        const o1 = n1.toString();
        return o1 ? `${t1}?${o1}` : t1;
    }
    static connect(e1) {
        if (!e1.modelId) throw new Error("modelId is required");
        const t1 = new O("microphone" in e1 && e1.microphone ? 16e3 : e1.sampleRate), n1 = W.buildWebSocketUri(e1), o1 = new WebSocket(n1);
        return "microphone" in e1 && e1.microphone && o1.addEventListener("open", ()=>{
            W.streamFromMicrophone(e1, t1);
        }), t1.setWebSocket(o1), t1;
    }
    static async streamFromMicrophone(e1, t1) {
        const n1 = 16e3;
        try {
            var o1, i1, s, a, r, c, l, u, d, h;
            const p = await navigator.mediaDevices.getUserMedia({
                audio: {
                    deviceId: null == (o1 = e1.microphone) ? void 0 : o1.deviceId,
                    echoCancellation: null == (i1 = null == (s = e1.microphone) ? void 0 : s.echoCancellation) || i1,
                    noiseSuppression: null == (a = null == (r = e1.microphone) ? void 0 : r.noiseSuppression) || a,
                    autoGainControl: null == (c = null == (l = e1.microphone) ? void 0 : l.autoGainControl) || c,
                    channelCount: null != (u = null == (d = e1.microphone) ? void 0 : d.channelCount) ? u : 1,
                    sampleRate: {
                        ideal: n1
                    }
                }
            }), m = null == (h = p.getAudioTracks()[0]) ? void 0 : h.getSettings(), v = null == m ? void 0 : m.sampleRate, g = new AudioContext(v ? {
                sampleRate: v
            } : {});
            await L(g.audioWorklet);
            const f = g.createMediaStreamSource(p), _ = new AudioWorkletNode(g, "scribeAudioProcessor");
            g.sampleRate !== n1 && _.port.postMessage({
                type: "configure",
                inputSampleRate: g.sampleRate,
                outputSampleRate: n1
            }), _.port.onmessage = (e1)=>{
                const { audioData: n1 } = e1.data, o1 = new Uint8Array(n1);
                let i1 = "";
                for(let e1 = 0; e1 < o1.length; e1++)i1 += String.fromCharCode(o1[e1]);
                const s = btoa(i1);
                t1.send({
                    audioBase64: s
                });
            }, f.connect(_), "suspended" === g.state && await g.resume(), t1._audioCleanup = ()=>{
                p.getTracks().forEach((e1)=>{
                    e1.stop();
                }), f.disconnect(), _.disconnect(), g.close();
            };
        } catch (e1) {
            throw console.error("Failed to start microphone streaming:", e1), e1;
        }
    }
}
W.DEFAULT_BASE_URI = "wss://api.elevenlabs.io";
class q extends r {
    static startSession(e1) {
        const t1 = q.getFullOptions(e1);
        return t1.textOnly ? k.startSession(t1) : T.startSession(t1);
    }
}
;
 //# sourceMappingURL=lib.modern.js.map
}),
"[project]/node_modules/@elevenlabs/react/dist/lib.modern.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@elevenlabs/client/dist/lib.modern.js [app-client] (ecmascript)");
;
;
;
function u() {
    return u = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", u.apply(null, arguments);
}
function a(i = {}) {
    const { onSessionStarted: a1, onPartialTranscript: s, onCommittedTranscript: c, onCommittedTranscriptWithTimestamps: d, onError: v, onAuthError: m, onQuotaExceededError: g, onCommitThrottledError: T, onTranscriberError: p, onUnacceptedTermsError: h, onRateLimitedError: C, onInputError: S, onQueueOverflowError: E, onResourceExhaustedError: M, onSessionTimeLimitExceededError: I, onChunkSizeExceededError: D, onInsufficientAudioActivityError: w, onConnect: A, onDisconnect: R, token: b, modelId: y, baseUri: f, commitStrategy: O, vadSilenceThresholdSecs: U, vadThreshold: k, minSpeechDurationMs: F, minSilenceDurationMs: _, languageCode: P, microphone: x, audioFormat: N, sampleRate: V, autoConnect: L = !1, includeTimestamps: q } = i, B = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), [H, $] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("disconnected"), [Q, W] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), [X, G] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), [j, z] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            var n;
            null == (n = B.current) || n.close();
        }, []);
    const K = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(async (n = {})=>{
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
            if (u) Q = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scribe"].connect({
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
                Q = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scribe"].connect({
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
            B.current = Q, Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealtimeEvents"].SESSION_STARTED, ()=>{
                $("connected"), null == a1 || a1();
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealtimeEvents"].PARTIAL_TRANSCRIPT, (n)=>{
                const e = n;
                W(e.text), $("transcribing"), null == s || s(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealtimeEvents"].COMMITTED_TRANSCRIPT, (n)=>{
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
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealtimeEvents"].COMMITTED_TRANSCRIPT_WITH_TIMESTAMPS, (n)=>{
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
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealtimeEvents"].ERROR, (n)=>{
                const e = n;
                z(e.error), $("error"), null == v || v(new Error(e.error));
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealtimeEvents"].AUTH_ERROR, (n)=>{
                const e = n;
                z(e.error), $("error"), null == m || m(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealtimeEvents"].QUOTA_EXCEEDED, (n)=>{
                const e = n;
                z(e.error), $("error"), null == g || g(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealtimeEvents"].COMMIT_THROTTLED, (n)=>{
                const e = n;
                z(e.error), $("error"), null == T || T(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealtimeEvents"].TRANSCRIBER_ERROR, (n)=>{
                const e = n;
                z(e.error), $("error"), null == p || p(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealtimeEvents"].UNACCEPTED_TERMS, (n)=>{
                const e = n;
                z(e.error), $("error"), null == h || h(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealtimeEvents"].RATE_LIMITED, (n)=>{
                const e = n;
                z(e.error), $("error"), null == C || C(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealtimeEvents"].INPUT_ERROR, (n)=>{
                const e = n;
                z(e.error), $("error"), null == S || S(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealtimeEvents"].QUEUE_OVERFLOW, (n)=>{
                const e = n;
                z(e.error), $("error"), null == E || E(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealtimeEvents"].RESOURCE_EXHAUSTED, (n)=>{
                const e = n;
                z(e.error), $("error"), null == M || M(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealtimeEvents"].SESSION_TIME_LIMIT_EXCEEDED, (n)=>{
                const e = n;
                z(e.error), $("error"), null == I || I(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealtimeEvents"].CHUNK_SIZE_EXCEEDED, (n)=>{
                const e = n;
                z(e.error), $("error"), null == D || D(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealtimeEvents"].INSUFFICIENT_AUDIO_ACTIVITY, (n)=>{
                const e = n;
                z(e.error), $("error"), null == w || w(e);
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealtimeEvents"].OPEN, ()=>{
                null == A || A();
            }), Q.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealtimeEvents"].CLOSE, ()=>{
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
    ]), Y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        var n;
        null == (n = B.current) || n.close(), B.current = null, $("disconnected");
    }, []), Z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((n, e)=>{
        if (!B.current) throw new Error("Not connected to Scribe");
        B.current.send(u({
            audioBase64: n
        }, e));
    }, []), J = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!B.current) throw new Error("Not connected to Scribe");
        B.current.commit();
    }, []), nn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        G([]), W("");
    }, []), en = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>B.current, []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }(o, s), g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1), [h, C] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("disconnected"), [S, E] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), [M, I] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("listening"), D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t), w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(l);
    return D.current = t, w.current = l, (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        var n;
        void 0 !== t && (null == g || null == (n = g.current) || n.setMicMuted(t));
    }, [
        t
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        var n;
        void 0 !== l && (null == g || null == (n = g.current) || n.setVolume({
            volume: l
        }));
    }, [
        l
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
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
                if (T.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$elevenlabs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Conversation"].startSession(u({}, null != m1 ? m1 : {}, null != n ? n : {}, {
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
]);

//# sourceMappingURL=_299955cd._.js.map