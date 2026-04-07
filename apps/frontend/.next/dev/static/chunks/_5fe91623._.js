(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/frontend/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/lib/utils.ts [app-client] (ecmascript)");
;
;
function Badge({ className, variant = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
            "border-transparent bg-primary text-primary-foreground": variant === "default",
            "border-transparent bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300": variant === "ai",
            "border-transparent bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300": variant === "human",
            "border-transparent bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300": variant === "success",
            "border-border bg-transparent text-muted-foreground": variant === "outline"
        }, className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/frontend/components/ui/badge.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/frontend/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow active:scale-[0.98]",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm active:scale-[0.98]",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm active:scale-[0.98]",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:scale-[0.98]",
            ghost: "hover:bg-accent hover:text-accent-foreground active:scale-[0.98]",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-lg px-3",
            lg: "h-11 rounded-xl px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/frontend/components/ui/button.tsx",
        lineNumber: 42,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/frontend/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border border-border/50 bg-card text-card-foreground shadow-sm transition-all hover:shadow-md", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/frontend/components/ui/card.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/frontend/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/frontend/components/ui/card.tsx",
        lineNumber: 31,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/frontend/components/ui/card.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/frontend/components/ui/card.tsx",
        lineNumber: 56,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/frontend/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/engine/execution/unified-engine.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computeWorkflowState",
    ()=>computeWorkflowState
]);
const STATUS_LABELS = {
    READY: "Ready to Start",
    BLOCKED: "Waiting on Dependencies",
    RUNNING: "In Progress",
    DONE: "Completed"
};
function computeWorkflowState(tasks) {
    const taskMap = new Map(tasks.map((t)=>[
            t.id,
            t
        ]));
    // 1. Group subtasks
    const parentToChildren = new Map();
    tasks.forEach((t)=>{
        if (t.parent_id) {
            const children = parentToChildren.get(t.parent_id) || [];
            children.push(t);
            parentToChildren.set(t.parent_id, children);
        }
    });
    const blockCache = new Map();
    const visitingBlock = new Set();
    // 2. Structural Blocking Logic
    const getStructuralBlock = (id)=>{
        if (blockCache.has(id)) return blockCache.get(id);
        if (visitingBlock.has(id)) return {
            blocked: false
        };
        const t = taskMap.get(id);
        if (!t) return {
            blocked: true,
            reason: "Task definition missing"
        };
        visitingBlock.add(id);
        // A) Local Dependency Check
        const deps = t.depends_on || [];
        for (const did of deps){
            const depTask = taskMap.get(did);
            if (depTask?.status !== 'DONE') {
                visitingBlock.delete(id);
                const res = {
                    blocked: true,
                    reason: `Waiting on Dependencies (depends on ${depTask?.title || did})`
                };
                blockCache.set(id, res);
                return res;
            }
        }
        // B) Parent Inheritance Check
        if (t.parent_id) {
            const pBlock = getStructuralBlock(t.parent_id);
            if (pBlock.blocked) {
                visitingBlock.delete(id);
                blockCache.set(id, pBlock);
                return pBlock;
            }
        }
        visitingBlock.delete(id);
        const res = {
            blocked: false
        };
        blockCache.set(id, res);
        return res;
    };
    // 3. Status Aggregation Logic
    const statusCache = new Map();
    const resolveFinalStatus = (id)=>{
        if (statusCache.has(id)) return statusCache.get(id);
        const t = taskMap.get(id);
        if (!t) return 'BLOCKED';
        // Block propagation
        if (getStructuralBlock(id).blocked) {
            statusCache.set(id, 'BLOCKED');
            return 'BLOCKED';
        }
        // Hierarchical Aggregation
        const children = parentToChildren.get(id);
        if (children && children.length > 0) {
            const childStatuses = children.map((c)=>resolveFinalStatus(c.id));
            let result;
            if (childStatuses.every((s)=>s === 'DONE')) result = 'DONE';
            else if (childStatuses.some((s)=>s === 'RUNNING' || s === 'DONE')) result = 'RUNNING';
            else if (childStatuses.some((s)=>s === 'READY')) result = 'READY';
            else result = 'BLOCKED';
            statusCache.set(id, result);
            return result;
        }
        // Leaf Node
        const res = t.status || 'READY';
        statusCache.set(id, res);
        return res;
    };
    // 4. Final Mapping
    return tasks.map((t)=>{
        const status = resolveFinalStatus(t.id);
        const blockInfo = getStructuralBlock(t.id);
        let status_explanation = "";
        switch(status){
            case 'BLOCKED':
                status_explanation = blockInfo.reason || "Waiting on Dependencies";
                break;
            case 'READY':
                status_explanation = "Ready to Start (all dependencies completed)";
                break;
            case 'RUNNING':
                status_explanation = "In Progress (executor active)";
                break;
            case 'DONE':
                status_explanation = "Completed (successful execution)";
                break;
        }
        return {
            ...t,
            status,
            level: t.parent_id ? 1 : 0,
            status_label: STATUS_LABELS[status],
            blocked_reason: status === 'BLOCKED' ? blockInfo.reason : undefined,
            status_explanation
        };
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TaskExecutionPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$engine$2f$execution$2f$unified$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/engine/execution/unified-engine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
function TaskExecutionPage() {
    _s();
    const { id, taskId: rawTaskId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const taskId = Array.isArray(rawTaskId) ? rawTaskId[0] : rawTaskId;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [task, setTask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [project, setProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [executing, setExecuting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newFinding, setNewFinding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [allTasks, setAllTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [warning, setWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [updatingDep, setUpdatingDep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isBlocked = task?.status === 'BLOCKED';
    // 1. Status Override Utility
    const saveStatusOverride = (newStatus)=>{
        if (!id || !taskId) return;
        const overrideKey = `workflow_status_overrides_${id}`;
        const overrides = JSON.parse(localStorage.getItem(overrideKey) || '{}');
        overrides[taskId] = newStatus;
        localStorage.setItem(overrideKey, JSON.stringify(overrides));
    };
    // 2. Main Load Effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TaskExecutionPage.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === 'undefined' || !id || !taskId) return;
            async function loadTask() {
                try {
                    setLoading(true);
                    const projectRes = await fetch(`/api/projects/${id}`);
                    let pData = {};
                    if (!projectRes.ok) {
                        if (projectRes.status === 404) {
                            console.warn("Mission context not found on server. Reverting to tactical local cache.");
                            // Attempt to reconstruct context from localStorage
                            const localProj = localStorage.getItem(`workflow_project_${id}`);
                            pData = {
                                project: localProj ? JSON.parse(localProj) : {
                                    id,
                                    title: "Tactical Mission (No Sync)",
                                    is_demo_project: true
                                },
                                tasks: []
                            };
                        } else {
                            throw new Error("Failed to load mission context");
                        }
                    } else {
                        pData = await projectRes.json();
                    }
                    setProject(pData.project);
                    const dbTasks = pData.tasks || [];
                    const localUser = localStorage.getItem(`workflow_user_tasks_${id}`);
                    const userTasks = localUser ? JSON.parse(localUser) : [];
                    const uniqueMap = new Map();
                    [
                        ...userTasks,
                        ...dbTasks
                    ].forEach({
                        "TaskExecutionPage.useEffect.loadTask": (t, index)=>{
                            const finalId = t.id || `recovered-${index}`;
                            uniqueMap.set(finalId, {
                                ...t,
                                id: finalId
                            });
                        }
                    }["TaskExecutionPage.useEffect.loadTask"]);
                    const dedupedById = Array.from(uniqueMap.values());
                    const activeIds = new Set(dedupedById.map({
                        "TaskExecutionPage.useEffect.loadTask": (t)=>t.id
                    }["TaskExecutionPage.useEffect.loadTask"]));
                    const merged = dedupedById.map({
                        "TaskExecutionPage.useEffect.loadTask.merged": (t)=>({
                                ...t,
                                depends_on: (t.depends_on || (t.dependency_task_id ? [
                                    t.dependency_task_id
                                ] : [])).filter({
                                    "TaskExecutionPage.useEffect.loadTask.merged": (i)=>activeIds.has(i)
                                }["TaskExecutionPage.useEffect.loadTask.merged"]),
                                parent_id: t.parent_id || t.parent_task_id
                            })
                    }["TaskExecutionPage.useEffect.loadTask.merged"]);
                    const recomputed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engine$2f$execution$2f$unified$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeWorkflowState"])(merged);
                    setAllTasks(recomputed);
                    const foundTask = recomputed.find({
                        "TaskExecutionPage.useEffect.loadTask.foundTask": (t)=>t.id === taskId
                    }["TaskExecutionPage.useEffect.loadTask.foundTask"]);
                    if (foundTask) {
                        setTask(foundTask);
                        if (foundTask.status === 'READY') {
                            setTask({
                                "TaskExecutionPage.useEffect.loadTask": (prev)=>prev ? {
                                        ...prev,
                                        status: 'RUNNING',
                                        status_label: 'In Progress'
                                    } : null
                            }["TaskExecutionPage.useEffect.loadTask"]);
                            saveStatusOverride('RUNNING');
                            const uTasks = JSON.parse(localStorage.getItem(`workflow_user_tasks_${id}`) || '[]');
                            const idx = uTasks.findIndex({
                                "TaskExecutionPage.useEffect.loadTask.idx": (t)=>t.id === taskId
                            }["TaskExecutionPage.useEffect.loadTask.idx"]);
                            if (idx !== -1) {
                                uTasks[idx].status = 'RUNNING';
                                localStorage.setItem(`workflow_user_tasks_${id}`, JSON.stringify(uTasks));
                            }
                            fetch('/api/tasks/status', {
                                method: 'PATCH',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    task_id: taskId,
                                    status: 'RUNNING'
                                })
                            }).catch(console.error);
                        }
                    } else {
                        setError("Architectural Work Item not found in current mission context.");
                    }
                } catch (err) {
                    setError(err.message);
                } finally{
                    setLoading(false);
                }
            }
            loadTask();
        }
    }["TaskExecutionPage.useEffect"], [
        id,
        taskId
    ]);
    // 3. Draft Persistence Effect (Load)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TaskExecutionPage.useEffect": ()=>{
            if (!id || !taskId || loading || isBlocked) return;
            const draftKey = `workflow_draft_${id}_${taskId}`;
            const savedDraft = localStorage.getItem(draftKey);
            if (savedDraft) {
                const { feedback: f, newFinding: nf } = JSON.parse(savedDraft);
                setFeedback({
                    "TaskExecutionPage.useEffect": (prev)=>prev || f || ''
                }["TaskExecutionPage.useEffect"]);
                setNewFinding({
                    "TaskExecutionPage.useEffect": (prev)=>prev || nf || ''
                }["TaskExecutionPage.useEffect"]);
            }
        }
    }["TaskExecutionPage.useEffect"], [
        id,
        taskId,
        loading,
        isBlocked
    ]);
    // 4. Draft Persistence Effect (Save)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TaskExecutionPage.useEffect": ()=>{
            if (!id || !taskId || loading || isBlocked) return;
            const draftKey = `workflow_draft_${id}_${taskId}`;
            localStorage.setItem(draftKey, JSON.stringify({
                feedback,
                newFinding
            }));
        }
    }["TaskExecutionPage.useEffect"], [
        feedback,
        newFinding,
        id,
        taskId,
        loading,
        isBlocked
    ]);
    // 5. Status Override Watcher
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TaskExecutionPage.useEffect": ()=>{
            if (!id || !taskId || loading || !task) return;
            const overrideKey = `workflow_status_overrides_${id}`;
            const overrides = JSON.parse(localStorage.getItem(overrideKey) || '{}');
            if (overrides[taskId] && task.status !== overrides[taskId]) {
                setTask({
                    "TaskExecutionPage.useEffect": (prev)=>prev ? {
                            ...prev,
                            status: overrides[taskId]
                        } : null
                }["TaskExecutionPage.useEffect"]);
            }
        }
    }["TaskExecutionPage.useEffect"], [
        id,
        taskId,
        loading,
        task?.status
    ]);
    // HANDLERS
    const handleUpdateDependency = async (depId)=>{
        try {
            setUpdatingDep(true);
            const res = await fetch('/api/tasks/dependency', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    task_id: taskId,
                    dependency_task_id: depId
                })
            });
            if (!res.ok) throw new Error("Failed to update dependency");
            const updated = await res.json();
            setTask((prev)=>prev ? {
                    ...prev,
                    depends_on: updated.depends_on || (updated.dependency_task_id ? [
                        updated.dependency_task_id
                    ] : [])
                } : null);
        } catch (err) {
            setError(err.message);
        } finally{
            setUpdatingDep(false);
        }
    };
    const handleExecute = async ()=>{
        if (isBlocked) return;
        try {
            setExecuting(true);
            setError('');
            const res = await fetch('/api/ai/execute-task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    task_id: taskId
                })
            });
            if (!res.ok) throw new Error("Execution failed");
            const updated = await res.json();
            setTask(updated);
        } catch (err) {
            setError(err.message);
        } finally{
            setExecuting(false);
        }
    };
    const handleCompleteHuman = async ()=>{
        if (isBlocked || !feedback.trim() || !task) return;
        setSubmitting(true);
        try {
            const findingsSection = (task.findings || []).length > 0 ? `\n\n### Tactical Findings\n${task.findings.map((f)=>`- **${new Date(f.created_at).toLocaleDateString()} ${new Date(f.created_at).toLocaleTimeString()}**: ${f.text}`).join('\n')}` : '';
            const attachmentsSection = (task.attachments || []).length > 0 ? `\n\n### Strategic Artifacts\n${task.attachments.map((a)=>`- **${a.name}** (${(a.size / 1024).toFixed(1)} KB) - Attached at ${new Date(a.uploaded_at).toLocaleTimeString()}`).join('\n')}` : '';
            const finalFeedback = `### Human Expert Final Analysis\n\n${feedback}${findingsSection}${attachmentsSection}`;
            const res = await fetch('/api/tasks/complete-human', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    task_id: taskId,
                    feedback: finalFeedback
                })
            });
            if (!res.ok) {
                const errorData = await res.json().catch(()=>({}));
                const serverError = errorData.error || res.statusText || 'Unknown server error';
                console.error("Mission sync failure:", serverError);
                const isLocal = taskId?.toString().startsWith('local-');
                const isNotFound = serverError.toLowerCase().includes('not found') || res.status === 404;
                if (isLocal || project?.is_demo_project || isNotFound) {
                    setWarning(`Mission archived locally. Sync failure: ${serverError}`);
                } else {
                    throw new Error(`Failed to submit mission output: ${serverError}`);
                }
            }
            saveStatusOverride('DONE');
            setTask((prev)=>prev ? {
                    ...prev,
                    status: 'DONE',
                    ai_output: finalFeedback
                } : null);
            localStorage.removeItem(`workflow_draft_${id}_${taskId}`);
            // Auto-redirect or refresh since we've completed the mission item
            setTimeout(()=>{
                router.refresh();
            }, 1000);
        } catch (err) {
            setError(err.message);
        } finally{
            setSubmitting(false);
        }
    };
    const handleAddFinding = async ()=>{
        if (isBlocked || !newFinding.trim() || !task) return;
        const finding = {
            id: `f-${Date.now()}`,
            text: newFinding,
            author: 'Human Expert',
            created_at: new Date().toISOString()
        };
        const updatedFindings = [
            ...task.findings || [],
            finding
        ];
        try {
            await fetch(`/api/tasks/${taskId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    findings: updatedFindings
                })
            });
        } catch (err) {
            console.error("Local sync only for finding");
        } finally{
            setTask((prev)=>prev ? {
                    ...prev,
                    findings: updatedFindings
                } : null);
            setNewFinding('');
        }
    };
    const onFileSelected = async (e)=>{
        if (isBlocked) return;
        const file = e.target.files?.[0];
        if (!file || !task) return;
        const fileName = file.name;
        const reader = new FileReader();
        reader.onload = async (event)=>{
            const base64Url = event.target?.result;
            const attachment = {
                id: `a-${Date.now()}`,
                name: fileName,
                url: base64Url || '#',
                size: file.size,
                uploaded_at: new Date().toISOString()
            };
            const updatedAttachments = [
                ...task.attachments || [],
                attachment
            ];
            try {
                await fetch(`/api/tasks/${taskId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        attachments: updatedAttachments
                    })
                });
            } catch (err) {
                console.error("Local sync only for attachment");
            } finally{
                setTask((prev)=>prev ? {
                        ...prev,
                        attachments: updatedAttachments
                    } : null);
            }
        };
        reader.readAsDataURL(file);
    };
    const handleAddAttachment = ()=>fileInputRef.current?.click();
    // RENDER HELPERS
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-12 text-center text-muted-foreground",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
            className: "w-8 h-8 animate-spin mx-auto"
        }, void 0, false, {
            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
            lineNumber: 294,
            columnNumber: 81
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
        lineNumber: 294,
        columnNumber: 25
    }, this);
    if (error || !task) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-12 text-error text-center font-medium bg-error/10 border border-error/20 rounded-lg",
        children: error
    }, void 0, false, {
        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
        lineNumber: 295,
        columnNumber: 32
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-5xl mx-auto space-y-6 pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `/project/${id}/board`,
                className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                        lineNumber: 303,
                        columnNumber: 17
                    }, this),
                    "Back to Workflow Board"
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                lineNumber: 299,
                columnNumber: 13
            }, this),
            warning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 flex items-center gap-3 animate-in fade-in duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "w-4 h-4 text-amber-600 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                        lineNumber: 309,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] text-amber-800 font-bold uppercase tracking-widest",
                        children: warning
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                        lineNumber: 310,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                lineNumber: 308,
                columnNumber: 17
            }, this),
            isBlocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 animate-in slide-in-from-top-2 duration-500 shadow-xl shadow-amber-500/5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-14 h-14 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-500/30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                            className: "w-7 h-7 text-amber-600 animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                            lineNumber: 318,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                        lineNumber: 317,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 text-center md:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-black uppercase tracking-tight text-amber-900 leading-tight",
                                children: "Interaction Blocked"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                lineNumber: 321,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-amber-700/80 font-medium leading-relaxed",
                                children: [
                                    "This mission step is currently ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-black text-amber-800 underline underline-offset-2",
                                        children: "LOCKED"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                        lineNumber: 323,
                                        columnNumber: 60
                                    }, this),
                                    ". You must complete all dependency tasks identified in the workflow architecture before execution can proceed."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                lineNumber: 322,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-center md:justify-start gap-2 mt-3",
                                children: task.depends_on?.map((depId)=>{
                                    const dep = allTasks.find((t)=>t.id === depId);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "outline",
                                        className: "bg-amber-500/10 border-amber-500/20 text-amber-800 text-[9px] font-black uppercase tracking-widest px-2",
                                        children: [
                                            "Waiting on: ",
                                            dep?.title || depId
                                        ]
                                    }, depId, true, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                        lineNumber: 329,
                                        columnNumber: 37
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                lineNumber: 325,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                        lineNumber: 320,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                lineNumber: 316,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: task.task_type === 'AI' ? 'ai' : 'human',
                                    className: "uppercase tracking-widest text-[10px] font-bold",
                                    children: [
                                        task.task_type,
                                        " WORK ITEM"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                    lineNumber: 342,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: task.status === 'DONE' ? 'success' : 'default',
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("uppercase tracking-widest text-[10px] font-bold", task.status === 'BLOCKED' ? 'bg-amber-500 hover:bg-amber-600 text-white border-amber-500' : ''),
                                    children: task.status_label || task.status
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                    lineNumber: 345,
                                    columnNumber: 25
                                }, this),
                                task.status_explanation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[10px] font-black uppercase tracking-tighter italic", task.status === 'BLOCKED' ? "text-amber-600/60" : "text-primary/60"),
                                    children: task.status_explanation
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                    lineNumber: 349,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                            lineNumber: 341,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-page-title mb-2 truncate max-w-full",
                            children: task.title
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                            lineNumber: 357,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground max-w-2xl",
                            children: task.description || "No description provided."
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                            lineNumber: 358,
                            columnNumber: 21
                        }, this),
                        (()=>{
                            const subTasks = allTasks.filter((t)=>t.parent_id === taskId);
                            if (subTasks.length === 0) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 pt-6 border-t border-border/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-4 text-xs font-black uppercase tracking-widest text-primary/60",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                lineNumber: 367,
                                                columnNumber: 37
                                            }, this),
                                            "Child Work Items (",
                                            subTasks.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                        lineNumber: 366,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                        children: subTasks.map((st)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/project/${id}/task/${st.id}`,
                                                className: "group flex flex-col p-3 bg-muted/20 border border-border/40 rounded-xl hover:border-primary/20 hover:bg-muted/40 transition-all shadow-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] font-bold truncate pr-2",
                                                                children: st.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                                lineNumber: 378,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                variant: st.status === 'DONE' ? 'success' : 'outline',
                                                                className: "text-[7px] h-3.5 px-1 uppercase shrink-0 font-black tracking-widest",
                                                                children: st.status === 'DONE' ? 'DONE' : st.status
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                                lineNumber: 379,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[8px] uppercase font-black text-muted-foreground/40",
                                                                children: [
                                                                    st.task_type,
                                                                    " EXECUTION"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                                lineNumber: 384,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-1.5 h-1.5 rounded-full", st.status === 'DONE' ? "bg-emerald-500" : st.status === 'RUNNING' ? "bg-blue-500 animate-pulse" : "bg-muted")
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                                lineNumber: 385,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                        lineNumber: 383,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, st.id, true, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                lineNumber: 372,
                                                columnNumber: 41
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                        lineNumber: 370,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                lineNumber: 365,
                                columnNumber: 29
                            }, this);
                        })(),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-4 mt-6",
                            children: [
                                task.capability && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] uppercase font-bold tracking-widest text-muted-foreground/60",
                                            children: "Capability"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                            lineNumber: 397,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-3 py-1 bg-muted rounded-md text-sm font-medium border border-border/50",
                                            children: task.capability
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                            lineNumber: 398,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                    lineNumber: 396,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1 min-w-[240px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] uppercase font-bold tracking-widest text-primary flex items-center gap-2 font-black leading-none mb-1",
                                            children: [
                                                "Execution Prerequisite ",
                                                updatingDep && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "w-3 h-3 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 72
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                            lineNumber: 404,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "bg-background border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all",
                                            value: task.depends_on?.[0] || "",
                                            onChange: (e)=>handleUpdateDependency(e.target.value || null),
                                            disabled: updatingDep || isBlocked || (project?.is_demo_project ?? false),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "No Prerequisite (Starts Ready)"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                    lineNumber: 413,
                                                    columnNumber: 33
                                                }, this),
                                                allTasks.filter((t)=>t.id !== taskId).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: t.id,
                                                        children: [
                                                            t.title,
                                                            " (",
                                                            t.status,
                                                            ")"
                                                        ]
                                                    }, t.id, true, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 41
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                            lineNumber: 407,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                    lineNumber: 403,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                            lineNumber: 394,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                    lineNumber: 340,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                lineNumber: 339,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 transition-all duration-500", isBlocked ? "opacity-60 pointer-events-none grayscale-[0.5]" : ""),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-1 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        className: "pb-3 border-b border-border bg-muted/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-sm font-bold uppercase tracking-wider text-muted-foreground",
                                            children: "Architect Reasoning"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                            lineNumber: 430,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                        lineNumber: 429,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "pt-4 space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold uppercase text-muted-foreground/60 leading-none",
                                                        children: "Capability Detected"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                        lineNumber: 434,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold text-primary",
                                                        children: task.capability || 'GENERAL_TASK'
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                        lineNumber: 435,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                lineNumber: 433,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold uppercase text-muted-foreground/60 leading-none",
                                                        children: "Executor Type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                        lineNumber: 438,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold",
                                                        children: task.task_type
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                        lineNumber: 439,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                lineNumber: 437,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                        lineNumber: 432,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                lineNumber: 428,
                                columnNumber: 21
                            }, this),
                            task.task_type === 'HUMAN' && task.status !== 'DONE' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "border-primary/20 bg-primary/[0.02]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                className: "pb-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-sm font-black uppercase tracking-widest flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            className: "w-4 h-4 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                            lineNumber: 449,
                                                            columnNumber: 41
                                                        }, this),
                                                        "Mission Findings Log"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                lineNumber: 447,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar",
                                                        children: (task.findings || []).map((finding)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-3 bg-card border border-border/40 rounded-xl relative group shadow-sm",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-foreground/90 font-light leading-relaxed",
                                                                    children: finding.text
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                                    lineNumber: 457,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, finding.id, false, {
                                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                                lineNumber: 456,
                                                                columnNumber: 45
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                        lineNumber: 454,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                value: newFinding,
                                                                onChange: (e)=>setNewFinding(e.target.value),
                                                                placeholder: isBlocked ? "Dependencies incomplete..." : "Enter tactical finding...",
                                                                disabled: isBlocked,
                                                                className: "flex-1 bg-muted/40 border-none rounded-xl p-3 text-xs focus:ring-1 focus:ring-primary/40 outline-none transition-all resize-none h-16"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                                lineNumber: 462,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                onClick: handleAddFinding,
                                                                disabled: isBlocked || !newFinding.trim(),
                                                                size: "icon",
                                                                className: "h-16 w-12 rounded-xl",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                                    lineNumber: 470,
                                                                    columnNumber: 45
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                                lineNumber: 469,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                        lineNumber: 461,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                lineNumber: 453,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                        lineNumber: 446,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "border-info/20 bg-info/[0.02]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                className: "pb-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-sm font-black uppercase tracking-widest flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                                            className: "w-4 h-4 text-info"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                            lineNumber: 479,
                                                            columnNumber: 41
                                                        }, this),
                                                        "Strategic Artifacts"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                    lineNumber: 478,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                lineNumber: 477,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2 max-h-[200px] overflow-y-auto custom-scrollbar",
                                                        children: (task.attachments || []).map((att)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between p-2 bg-card border border-border/40 rounded-lg group shadow-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2 overflow-hidden",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                                                                className: "w-3 h-3 text-info shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                                                lineNumber: 488,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] truncate font-medium",
                                                                                children: att.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                                                lineNumber: 489,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                                        lineNumber: 487,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[8px] opacity-40 font-black uppercase tracking-tighter italic shrink-0",
                                                                        children: [
                                                                            (att.size / 1024).toFixed(0),
                                                                            " KB"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                                        lineNumber: 491,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, att.id, true, {
                                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                                lineNumber: 486,
                                                                columnNumber: 45
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        ref: fileInputRef,
                                                        onChange: onFileSelected,
                                                        style: {
                                                            display: 'none'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                        lineNumber: 497,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        onClick: handleAddAttachment,
                                                        disabled: isBlocked,
                                                        variant: "outline",
                                                        className: "w-full border-dashed border-2 py-8 rounded-2xl text-[10px] uppercase font-black tracking-widest gap-2 bg-transparent hover:bg-info/5 transition-all",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                                lineNumber: 499,
                                                                columnNumber: 41
                                                            }, this),
                                                            "Attach Tactical Document"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                        lineNumber: 498,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                lineNumber: 483,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                        lineNumber: 476,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "border-emerald-500/30 bg-emerald-500/[0.02] shadow-xl shadow-emerald-500/5 relative overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        className: "w-32 h-32 text-emerald-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                        lineNumber: 508,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                    lineNumber: 507,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    className: "pb-3 border-b border-emerald-500/10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-xs font-black uppercase tracking-widest flex items-center gap-2 text-emerald-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                                lineNumber: 512,
                                                                columnNumber: 45
                                                            }, this),
                                                            "Mission Completion Final Release"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                        lineNumber: 511,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                    lineNumber: 510,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    className: "pt-5 space-y-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            value: feedback,
                                                            onChange: (e)=>setFeedback(e.target.value),
                                                            placeholder: isBlocked ? "Mission item currently locked." : "Summarize final outputs for permanent archive...",
                                                            disabled: isBlocked,
                                                            className: "w-full bg-background border border-border/60 rounded-xl p-4 text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/40 outline-none h-40 resize-none transition-all placeholder:italic shadow-inner"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                            lineNumber: 517,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    className: "w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-widest px-8 shadow-xl shadow-emerald-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all rounded-2xl flex items-center justify-center gap-3",
                                                                    onClick: handleCompleteHuman,
                                                                    disabled: isBlocked || submitting || !feedback.trim(),
                                                                    children: submitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                        className: "w-5 h-5 animate-spin"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                                        lineNumber: 530,
                                                                        columnNumber: 63
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                                                lineNumber: 532,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            "Authorize Completion"
                                                                        ]
                                                                    }, void 0, true)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                                    lineNumber: 525,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[8px] text-center font-black uppercase tracking-widest text-muted-foreground/50 px-4 leading-relaxed italic",
                                                                    children: "Finalizing this release will archive the work item and unlock downstream dependencies."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                                    lineNumber: 537,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                            lineNumber: 524,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                    lineNumber: 516,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                            lineNumber: 506,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                        lineNumber: 505,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                lineNumber: 445,
                                columnNumber: 25
                            }, this),
                            task.task_type === 'AI' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(isBlocked ? "border-amber-500/20 shadow-none bg-amber-500/[0.01]" : ""),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                isBlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                    className: "w-5 h-5 text-amber-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                    lineNumber: 551,
                                                    columnNumber: 50
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                    className: "w-5 h-5 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                    lineNumber: 551,
                                                    columnNumber: 96
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-sm font-black uppercase tracking-widest",
                                                    children: "Autonomous Execution"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                    lineNumber: 552,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                            lineNumber: 550,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                        lineNumber: 549,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleExecute,
                                            disabled: isBlocked || executing || (project?.is_demo_project ?? false),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full h-14 flex items-center gap-3 font-black uppercase tracking-widest text-xs rounded-2xl transition-all", isBlocked ? "bg-muted text-muted-foreground opacity-50" : "bg-primary shadow-xl shadow-primary/20 hover:scale-[1.02]"),
                                            children: executing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "w-5 h-5 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                        lineNumber: 561,
                                                        columnNumber: 52
                                                    }, this),
                                                    " Running..."
                                                ]
                                            }, void 0, true) : isBlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                        lineNumber: 561,
                                                        columnNumber: 127
                                                    }, this),
                                                    " Locked"
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                        className: "w-5 h-5 fill-current"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                        lineNumber: 561,
                                                        columnNumber: 170
                                                    }, this),
                                                    " Start Work Item"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                            lineNumber: 556,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                        lineNumber: 555,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                lineNumber: 548,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                        lineNumber: 427,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-1 md:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "h-full min-h-[400px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "border-b border-border bg-muted/20 flex flex-row items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-sm font-black uppercase tracking-widest text-muted-foreground",
                                            children: "Output & Verified Artifacts"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                            lineNumber: 571,
                                            columnNumber: 29
                                        }, this),
                                        task.ai_output && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: ()=>window.print(),
                                            className: "h-8 gap-2 text-[10px] font-black uppercase tracking-widest border-primary/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                    lineNumber: 574,
                                                    columnNumber: 37
                                                }, this),
                                                "Export PDF"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                            lineNumber: 573,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                    lineNumber: 570,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-0",
                                    children: task.ai_output ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "prose prose-sm dark:prose-invert max-w-none p-6 text-body print-content",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                                            children: task.ai_output
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                            lineNumber: 582,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                        lineNumber: 581,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center justify-center p-16 text-center text-muted-foreground h-full min-h-[400px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                className: "w-12 h-12 mb-4 opacity-10"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                lineNumber: 586,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-black uppercase tracking-widest text-xs opacity-40 italic",
                                                children: "Waiting for execution authorization..."
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                                lineNumber: 587,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                        lineNumber: 585,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                                    lineNumber: 579,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                            lineNumber: 569,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                        lineNumber: 568,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
                lineNumber: 426,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/task/[taskId]/page.tsx",
        lineNumber: 298,
        columnNumber: 9
    }, this);
}
_s(TaskExecutionPage, "hqbHCwgZZWOJX6IOyLGXlbmXB3g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = TaskExecutionPage;
var _c;
__turbopack_context__.k.register(_c, "TaskExecutionPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_5fe91623._.js.map