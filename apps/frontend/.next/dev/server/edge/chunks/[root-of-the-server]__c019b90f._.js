(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__c019b90f._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/ [middleware-edge] (unsupported edge import 'timers', ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.n(__import_unsupported(`timers`));
}),
"[project]/ [middleware-edge] (unsupported edge import 'crypto', ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.n(__import_unsupported(`crypto`));
}),
"[project]/ [middleware-edge] (unsupported edge import 'fs', ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.n(__import_unsupported(`fs`));
}),
"[project]/ [middleware-edge] (unsupported edge import 'http', ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.n(__import_unsupported(`http`));
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[project]/ [middleware-edge] (unsupported edge import 'stream', ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.n(__import_unsupported(`stream`));
}),
"[externals]/node:events [external] (node:events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}),
"[project]/ [middleware-edge] (unsupported edge import 'dns', ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.n(__import_unsupported(`dns`));
}),
"[project]/ [middleware-edge] (unsupported edge import 'os', ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.n(__import_unsupported(`os`));
}),
"[project]/ [middleware-edge] (unsupported edge import 'process', ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.n(__import_unsupported(`process`));
}),
"[project]/ [middleware-edge] (unsupported edge import 'zlib', ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.n(__import_unsupported(`zlib`));
}),
"[project]/ [middleware-edge] (unsupported edge import 'net', ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.n(__import_unsupported(`net`));
}),
"[project]/ [middleware-edge] (unsupported edge import 'tls', ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.n(__import_unsupported(`tls`));
}),
"[project]/ [middleware-edge] (unsupported edge import 'child_process', ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.n(__import_unsupported(`child_process`));
}),
"[project]/infra/db/mongodb.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connectToDatabase",
    ()=>connectToDatabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mongodb$2f$lib$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mongodb/lib/index.js [middleware-edge] (ecmascript)");
;
const uri = process.env.MONGODB_URI;
let client;
let db;
async function connectToDatabase() {
    if (client && db) {
        return {
            client,
            db
        };
    }
    if (!uri) {
        throw new Error('Please add your Mongo URI to .env.local');
    }
    client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mongodb$2f$lib$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["MongoClient"](uri);
    await client.connect();
    db = client.db('ai_kickoff_workflow');
    return {
        client,
        db
    };
}
}),
"[project]/apps/frontend/auth.config.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authConfig",
    ()=>authConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/node_modules/@auth/core/providers/credentials.js [middleware-edge] (ecmascript)");
;
const authConfig = {
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials) {
                // This will be overridden in the Node-runtime auth.ts 
                // to handle database lookup and bcrypt
                return null;
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async session ({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }
            return session;
        },
        authorized ({ auth, request }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard') || request.nextUrl.pathname.startsWith('/project') || request.nextUrl.pathname.startsWith('/kickoff');
            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn && (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup' || request.nextUrl.pathname === '/')) {
                return Response.redirect(new URL('/dashboard', request.nextUrl));
            }
            return true;
        }
    }
};
}),
"[project]/apps/frontend/auth.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "handlers",
    ()=>handlers,
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/node_modules/@auth/core/providers/credentials.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$auth$2f$mongodb$2d$adapter$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@auth/mongodb-adapter/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$mongodb$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/infra/db/mongodb.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$auth$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/auth.config.ts [middleware-edge] (ecmascript)");
;
;
;
;
;
;
const { handlers, auth, signIn, signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$auth$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["authConfig"],
    adapter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$auth$2f$mongodb$2d$adapter$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["MongoDBAdapter"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$mongodb$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["connectToDatabase"])().then((res)=>res.client)),
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])({
            async authorize (credentials) {
                if (!credentials?.email || !credentials?.password) return null;
                const db = await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$mongodb$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["connectToDatabase"])()).db;
                const user = await db.collection("users").findOne({
                    email: credentials.email
                });
                if (!user || !user.password) {
                    console.error("User not found or password missing");
                    return null;
                }
                const isValid = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].compare(credentials.password, user.password);
                if (!isValid) {
                    console.error("Invalid password");
                    return null;
                }
                return {
                    id: user._id.toString(),
                    email: user.email,
                    name: user.name || user.email.split("@")[0]
                };
            }
        })
    ]
});
}),
"[project]/apps/frontend/middleware.ts [middleware-edge] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/auth.ts [middleware-edge] (ecmascript)");
;
const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|login|signup|$).*)"
    ]
};
}),
"[project]/apps/frontend/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$middleware$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["config"],
    "middleware",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["auth"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$middleware$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/frontend/middleware.ts [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/auth.ts [middleware-edge] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__c019b90f._.js.map