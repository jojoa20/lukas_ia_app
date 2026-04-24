module.exports = [
"[project]/LUKAS_APP_ENTREGA/src/lib/supabase/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0037bf5727932d8162559a01506fdeac367f378a68":"createClient","00799da1686fd4d652a35ae724e7ede57d27832380":"getAuthenticatedUser","40c00b8b9dfd11cb4fc41551f7eb42dd69034b6763":"addTransaction"},"",""] */ __turbopack_context__.s([
    "addTransaction",
    ()=>addTransaction,
    "createClient",
    ()=>createClient,
    "getAuthenticatedUser",
    ()=>getAuthenticatedUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function createClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://cvrrygffwmxmemlsdnax.supabase.co"), process.env.SUPABASE_SERVICE_ROLE_KEY, {
        cookies: {
            get (name) {
                return cookieStore.get(name)?.value;
            },
            set (name, value, options) {
                try {
                    cookieStore.set({
                        name,
                        value,
                        ...options
                    });
                } catch  {}
            },
            remove (name, options) {
                try {
                    cookieStore.delete({
                        name,
                        ...options
                    });
                } catch  {}
            }
        }
    });
    supabase.auth.getUser = async ()=>{
        const { data } = await supabase.from('profiles').select('id').limit(1).single();
        if (data) {
            return {
                data: {
                    user: {
                        id: data.id
                    }
                },
                error: null
            };
        }
        return {
            data: {
                user: null
            },
            error: new Error('No profile found')
        };
    };
    return supabase;
}
async function getAuthenticatedUser() {
    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error || !user) throw new Error('No hay perfil en la base de datos');
    return {
        supabase,
        user
    };
}
async function addTransaction(args) {
    try {
        const { supabase, user } = await getAuthenticatedUser();
        const { data, error } = await supabase.from('transactions').insert([
            {
                user_id: user.id,
                tipo: args.monto > 0 ? 'ingreso' : 'gasto',
                monto: Math.abs(args.monto),
                descripcion: args.descripcion,
                categoria: args.categoria || 'otro',
                metodo_entrada: args.metodo_entrada || 'texto',
                es_gasto_hormiga: args.monto < 0 && Math.abs(args.monto) < 20000
            }
        ]).select();
        if (error) throw error;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
        return {
            success: true,
            mensaje: '¡Listo nea!'
        };
    } catch (e) {
        console.error('Error:', e);
        return {
            success: false,
            mensaje: e.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createClient,
    getAuthenticatedUser,
    addTransaction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createClient, "0037bf5727932d8162559a01506fdeac367f378a68", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAuthenticatedUser, "00799da1686fd4d652a35ae724e7ede57d27832380", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addTransaction, "40c00b8b9dfd11cb4fc41551f7eb42dd69034b6763", null);
}),
"[project]/LUKAS_APP_ENTREGA/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/LUKAS_APP_ENTREGA/src/lib/supabase/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$lib$2f$supabase$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/src/lib/supabase/actions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/LUKAS_APP_ENTREGA/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/LUKAS_APP_ENTREGA/src/lib/supabase/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40c00b8b9dfd11cb4fc41551f7eb42dd69034b6763",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$lib$2f$supabase$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addTransaction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$lib$2f$supabase$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/LUKAS_APP_ENTREGA/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/LUKAS_APP_ENTREGA/src/lib/supabase/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$LUKAS_APP_ENTREGA$2f$src$2f$lib$2f$supabase$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LUKAS_APP_ENTREGA/src/lib/supabase/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=LUKAS_APP_ENTREGA_62d35302._.js.map