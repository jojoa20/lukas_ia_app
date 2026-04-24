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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
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
        const c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Room"];
        try {
            const e = `room_${Date.now()}`, i = l("pcm_48000"), s = l("pcm_48000"), a = new y(c, e, i, s, n), r = n.livekitUrl || "wss://livekit.rtc.elevenlabs.io";
            var d;
            await c.connect(r, o), await new Promise((e)=>{
                if (a.isConnected) e();
                else {
                    const n = ()=>{
                        c.off(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].Connected, n), e();
                    };
                    c.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].Connected, n);
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
        this.room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].Connected, async function() {
            e.isConnected = !0, console.info("WebRTC room connected");
        }), this.room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].Disconnected, (e)=>{
            this.isConnected = !1, this.disconnect({
                reason: "agent",
                context: new CloseEvent("close", {
                    reason: null == e ? void 0 : e.toString()
                })
            });
        }), this.room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ConnectionStateChanged, (e)=>{
            e === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionState"].Disconnected && (this.isConnected = !1, this.disconnect({
                reason: "error",
                message: `LiveKit connection state changed to ${e}`,
                context: new Event("connection_state_changed")
            }));
        }), this.room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].DataReceived, (e, t)=>{
            try {
                const t = JSON.parse((new TextDecoder).decode(e));
                if ("audio" === t.type) return;
                d(t) ? this.handleMessage(t) : console.warn("Invalid socket event received:", t);
            } catch (t) {
                console.warn("Failed to parse incoming data message:", t), console.warn("Raw payload:", (new TextDecoder).decode(e));
            }
        }), this.room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackSubscribed, async function(t, n, i) {
            if (t.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Audio && i.identity.includes("agent")) {
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
        }), this.room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ActiveSpeakersChanged, async function(t) {
            e.updateMode(t.length > 0 && t[0].identity.startsWith("agent") ? "speaking" : "listening");
        }), this.room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantDisconnected, (e)=>{
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
        const t = this.room.localParticipant.getTrackPublication(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone);
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
            const t = this.room.localParticipant.getTrackPublication(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone);
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
            }, s = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLocalAudioTrack"])(n);
            await this.room.localParticipant.publishTrack(s, {
                name: "microphone",
                source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone
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

//# sourceMappingURL=_9d1246b6._.js.map