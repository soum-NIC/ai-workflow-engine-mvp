(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/shared/lib/workflow-validation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateDependency",
    ()=>validateDependency
]);
function validateDependency(taskId, dependencyId, allTasks, newTask) {
    const dep = allTasks.find((t)=>t.id === dependencyId);
    if (!dep) {
        return {
            valid: false,
            error: "Prerequisite Error: The selected dependency does not exist in the current workflow context."
        };
    }
    if (taskId === dependencyId) {
        return {
            valid: false,
            error: "Logical Violation: A work item cannot be a prerequisite for itself."
        };
    }
    if (isCircular(taskId, dependencyId, allTasks)) {
        return {
            valid: false,
            error: "Graph Violation: Circular dependency detected. This would create an infinite execution loop."
        };
    }
    const currentTask = newTask || allTasks.find((t)=>t.id === taskId);
    if (currentTask && currentTask.level === 1) {
        if (dep.parent_id !== currentTask.parent_id) {
            return {
                valid: false,
                error: "Structural Restriction: Subtasks are currently restricted to dependencies within their own parent task."
            };
        }
    }
    if (dep.parent_id === taskId) {
        return {
            valid: false,
            error: "Hierarchy Violation: A parent task cannot depend on its own subtask."
        };
    }
    return {
        valid: true
    };
}
function isCircular(taskId, depId, allTasks) {
    const taskMap = new Map(allTasks.map((t)=>[
            t.id,
            t
        ]));
    const visited = new Set();
    function check(currentId) {
        if (currentId === taskId) return true;
        if (visited.has(currentId)) return false;
        visited.add(currentId);
        const task = taskMap.get(currentId);
        if (!task?.depends_on) return false;
        return task.depends_on.some((nextId)=>check(nextId));
    }
    return check(depId);
}
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
"[project]/apps/frontend/components/ai/chat-proposal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatProposal",
    ()=>ChatProposal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-client] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-client] (ecmascript) <export default as LayoutGrid>");
;
;
;
;
;
function ChatProposal({ proposal, onCommit, isCommitted }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "mt-3 bg-primary/[0.03] border-primary/20 shadow-lg p-4 relative overflow-hidden group",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5 flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "outline",
                                    className: "text-[8px] font-black uppercase tracking-widest bg-primary/10 border-primary/20 text-primary h-4 px-1.5 leading-none",
                                    children: "Suggested Work Item"
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/components/ai/chat-proposal.tsx",
                                    lineNumber: 25,
                                    columnNumber: 25
                                }, this),
                                proposal.parent_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1 text-[8px] font-black text-muted-foreground uppercase tracking-widest",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                                            className: "w-2.5 h-2.5"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/components/ai/chat-proposal.tsx",
                                            lineNumber: 30,
                                            columnNumber: 33
                                        }, this),
                                        "Subtask"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/components/ai/chat-proposal.tsx",
                                    lineNumber: 29,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/frontend/components/ai/chat-proposal.tsx",
                            lineNumber: 24,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-xs font-black tracking-tight",
                            children: proposal.title
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/components/ai/chat-proposal.tsx",
                            lineNumber: 35,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] text-muted-foreground leading-relaxed italic",
                            children: proposal.description
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/components/ai/chat-proposal.tsx",
                            lineNumber: 36,
                            columnNumber: 21
                        }, this),
                        proposal.depends_on && proposal.depends_on.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5 mt-2 opacity-60",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                    className: "w-3 h-3 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/components/ai/chat-proposal.tsx",
                                    lineNumber: 40,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[8px] font-black uppercase tracking-widest text-primary/80",
                                    children: [
                                        "Injects ",
                                        proposal.depends_on.length,
                                        " dependencies"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/components/ai/chat-proposal.tsx",
                                    lineNumber: 41,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/frontend/components/ai/chat-proposal.tsx",
                            lineNumber: 39,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/frontend/components/ai/chat-proposal.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    size: "sm",
                    className: "h-8 rounded-lg text-[9px] font-black uppercase tracking-widest shrink-0",
                    onClick: ()=>onCommit(proposal),
                    disabled: isCommitted,
                    children: isCommitted ? "Injected" : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "w-3.5 h-3.5 mr-1"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/ai/chat-proposal.tsx",
                                lineNumber: 56,
                                columnNumber: 29
                            }, this),
                            "Commit Item"
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/apps/frontend/components/ai/chat-proposal.tsx",
                    lineNumber: 46,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/frontend/components/ai/chat-proposal.tsx",
            lineNumber: 22,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/frontend/components/ai/chat-proposal.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
_c = ChatProposal;
var _c;
__turbopack_context__.k.register(_c, "ChatProposal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/frontend/components/ai/assistant-sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiAssistantSidebar",
    ()=>AiAssistantSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ai$2f$chat$2d$proposal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/components/ai/chat-proposal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function AiAssistantSidebar({ project, tasks, onTaskAdded, isRegenerating }) {
    _s();
    const [chatMessages, setChatMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            role: 'assistant',
            text: "Hello strategist. System initialized. I'm analyzing your workflow architecture now."
        }
    ]);
    const [chatInput, setChatInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sendingChat, setSendingChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [committedProposals, setCommittedProposals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    // Auto-analysis message
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AiAssistantSidebar.useEffect": ()=>{
            if (tasks.length > 0 && chatMessages.length === 1) {
                const ready = tasks.filter({
                    "AiAssistantSidebar.useEffect": (t)=>t.status === 'READY'
                }["AiAssistantSidebar.useEffect"]).sort({
                    "AiAssistantSidebar.useEffect": (a, b)=>(a.graph_order || 0) - (b.graph_order || 0)
                }["AiAssistantSidebar.useEffect"])[0];
                if (ready) {
                    setChatMessages({
                        "AiAssistantSidebar.useEffect": (prev)=>[
                                ...prev,
                                {
                                    role: 'assistant',
                                    text: `Analysis complete. The most efficient path forward is to start: "${ready.title}". This will accelerate unblocking downstream dependencies.`
                                }
                            ]
                    }["AiAssistantSidebar.useEffect"]);
                }
            }
        }
    }["AiAssistantSidebar.useEffect"], [
        tasks,
        chatMessages.length
    ]);
    const handleSendChat = async (e)=>{
        e.preventDefault();
        if (!chatInput.trim() || sendingChat) return;
        const userText = chatInput.trim();
        setChatInput('');
        setSendingChat(true);
        const newMessages = [
            ...chatMessages,
            {
                role: 'user',
                text: userText
            }
        ];
        setChatMessages(newMessages);
        try {
            const res = await fetch('/api/ai/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    messages: newMessages.map((m)=>({
                            role: m.role,
                            content: m.text
                        })),
                    project,
                    tasks: tasks
                })
            });
            if (!res.ok) throw new Error("Failed to reach strategist");
            const data = await res.json();
            setChatMessages((prev)=>[
                    ...prev,
                    {
                        role: 'assistant',
                        text: data.text,
                        actions: data.actions || []
                    }
                ]);
        } catch (error) {
            console.error("Chat failed", error);
            setChatMessages((prev)=>[
                    ...prev,
                    {
                        role: 'assistant',
                        text: "System overhead detected. My strategic analysis is momentarily delayed. Please retry."
                    }
                ]);
        } finally{
            setSendingChat(false);
        }
    };
    const handleCommitProposal = (proposal)=>{
        const newTask = {
            id: `ai-suggest-${Date.now()}`,
            title: proposal.title,
            description: proposal.description,
            status: 'READY',
            task_type: 'AI',
            graph_order: Math.max(...tasks.map((t)=>t.graph_order || 0)) + 0.1,
            level: proposal.parent_id ? 1 : 0,
            parent_id: proposal.parent_id,
            depends_on: proposal.depends_on || [],
            phase_id: tasks[0]?.phase_id || 'p1',
            task_order: tasks.length + 1,
            created_at: new Date().toISOString(),
            meta: {
                source: 'AI_STRATEGIST',
                is_removed: false
            }
        };
        onTaskAdded(newTask);
        setCommittedProposals((prev)=>new Set([
                ...prev,
                JSON.stringify(proposal)
            ]));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "flex flex-col border-border/40 bg-card/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl relative h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-border/40 bg-primary/[0.02] flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                className: "w-4 h-4 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/ai/assistant-sidebar.tsx",
                                lineNumber: 106,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-black tracking-tight",
                                children: "AI Command Center"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/ai/assistant-sidebar.tsx",
                                lineNumber: 107,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/components/ai/assistant-sidebar.tsx",
                        lineNumber: 105,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/10 text-emerald-500 rounded text-[9px] font-black uppercase",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-1 h-1 rounded-full bg-emerald-500 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/ai/assistant-sidebar.tsx",
                                lineNumber: 110,
                                columnNumber: 21
                            }, this),
                            "Live"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/components/ai/assistant-sidebar.tsx",
                        lineNumber: 109,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/components/ai/assistant-sidebar.tsx",
                lineNumber: 104,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-4 flex flex-col gap-4 custom-scrollbar",
                children: [
                    chatMessages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("max-w-[85%] rounded-2xl p-3 text-[11px] leading-relaxed shadow-sm", msg.role === 'assistant' ? "bg-muted text-foreground self-start rounded-tl-none border border-border/40" : "bg-primary text-primary-foreground self-end rounded-tr-none"),
                                    children: msg.text
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/components/ai/assistant-sidebar.tsx",
                                    lineNumber: 118,
                                    columnNumber: 25
                                }, this),
                                msg.actions?.map((action, idx)=>action.type === 'PROPOSE_TASK' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "self-start w-[85%]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ai$2f$chat$2d$proposal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatProposal"], {
                                            proposal: action.payload,
                                            onCommit: handleCommitProposal,
                                            isCommitted: committedProposals.has(JSON.stringify(action.payload))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/components/ai/assistant-sidebar.tsx",
                                            lineNumber: 125,
                                            columnNumber: 37
                                        }, this)
                                    }, idx, false, {
                                        fileName: "[project]/apps/frontend/components/ai/assistant-sidebar.tsx",
                                        lineNumber: 124,
                                        columnNumber: 33
                                    }, this))
                            ]
                        }, i, true, {
                            fileName: "[project]/apps/frontend/components/ai/assistant-sidebar.tsx",
                            lineNumber: 117,
                            columnNumber: 21
                        }, this)),
                    (sendingChat || isRegenerating) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-muted-foreground/40 animate-pulse font-black uppercase text-[8px] tracking-widest pl-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                className: "w-3 h-3 animate-bounce"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/ai/assistant-sidebar.tsx",
                                lineNumber: 137,
                                columnNumber: 25
                            }, this),
                            isRegenerating ? 'Regenerating Workflow...' : 'Thinking...'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/components/ai/assistant-sidebar.tsx",
                        lineNumber: 136,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/components/ai/assistant-sidebar.tsx",
                lineNumber: 115,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSendChat,
                className: "p-4 pt-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 bg-muted/50 p-2 rounded-xl border border-border/60 focus-within:border-primary/40 focus-within:ring-2 focus-within:ring-primary/5 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: chatInput,
                                onChange: (e)=>setChatInput(e.target.value),
                                placeholder: "Optimize current phase / add subtasks...",
                                className: "flex-1 bg-transparent border-none text-[11px] outline-none placeholder:text-muted-foreground/50 px-2"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/ai/assistant-sidebar.tsx",
                                lineNumber: 145,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: sendingChat || isRegenerating,
                                className: "h-8 w-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:opacity-90 active:scale-95 transition-all disabled:opacity-20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                    className: "w-4 h-4 -rotate-45"
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/components/ai/assistant-sidebar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/ai/assistant-sidebar.tsx",
                                lineNumber: 151,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/components/ai/assistant-sidebar.tsx",
                        lineNumber: 144,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[8px] text-center mt-3 text-muted-foreground/40 font-black uppercase tracking-widest",
                        children: "Architect Interaction Mode Enabled"
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/components/ai/assistant-sidebar.tsx",
                        lineNumber: 155,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/components/ai/assistant-sidebar.tsx",
                lineNumber: 143,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/frontend/components/ai/assistant-sidebar.tsx",
        lineNumber: 103,
        columnNumber: 9
    }, this);
}
_s(AiAssistantSidebar, "2Hr1CdbAimhBpHRzed0loPh4F90=");
_c = AiAssistantSidebar;
var _c;
__turbopack_context__.k.register(_c, "AiAssistantSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkflowBoardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hello-pangea/dnd/dist/dnd.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$kanban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KanbanSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-kanban.js [app-client] (ecmascript) <export default as KanbanSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$engine$2f$execution$2f$unified$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/engine/execution/unified-engine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$workflow$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/lib/workflow-validation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ai$2f$assistant$2d$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/components/ai/assistant-sidebar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
;
function WorkflowBoardPage() {
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [project, setProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [board, setBoard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        BLOCKED: [],
        READY: [],
        RUNNING: [],
        DONE: []
    });
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('board');
    const [allTasks, setAllTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [userTasks, setUserTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [removedAiTaskIds, setRemovedAiTaskIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [warning, setWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showAddModal, setShowAddModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRegenerating, setIsRegenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load from LocalStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkflowBoardPage.useEffect": ()=>{
            const localUser = localStorage.getItem(`workflow_user_tasks_${id}`);
            const localRemoved = localStorage.getItem(`workflow_removed_tasks_${id}`);
            if (localUser) setUserTasks(JSON.parse(localUser));
            if (localRemoved) setRemovedAiTaskIds(new Set(JSON.parse(localRemoved)));
        }
    }["WorkflowBoardPage.useEffect"], [
        id
    ]);
    // Main hydrator
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkflowBoardPage.useEffect": ()=>{
            if (!id) return;
            async function fetchInitial() {
                try {
                    const res = await fetch(`/api/projects/${id}`);
                    if (!res.ok) throw new Error('Failed to fetch project');
                    const data = await res.json();
                    setProject(data.project);
                    setAllTasks(data.tasks || []);
                } catch (error) {
                    const now = new Date().toISOString();
                    const dbTasks = allTasks;
                    const mergedTasks = [
                        ...dbTasks.filter({
                            "WorkflowBoardPage.useEffect.fetchInitial": (t)=>!removedAiTaskIds.has(t.id)
                        }["WorkflowBoardPage.useEffect.fetchInitial"]).map({
                            "WorkflowBoardPage.useEffect.fetchInitial": (t)=>({
                                    ...t,
                                    level: t.level ?? 0,
                                    meta: {
                                        source: 'AI',
                                        is_removed: false
                                    }
                                })
                        }["WorkflowBoardPage.useEffect.fetchInitial"]),
                        ...userTasks.map({
                            "WorkflowBoardPage.useEffect.fetchInitial": (t)=>({
                                    ...t,
                                    meta: {
                                        source: 'USER',
                                        is_removed: false
                                    }
                                })
                        }["WorkflowBoardPage.useEffect.fetchInitial"])
                    ];
                    const finalSet = project?.is_demo_project && dbTasks.length === 0 && userTasks.length === 0 ? [
                        {
                            id: 't1',
                            title: 'Strategy Briefing',
                            description: 'Align product mission with market needs.',
                            status: 'DONE',
                            task_type: 'HUMAN',
                            graph_order: 1,
                            level: 0,
                            phase_id: 'p1',
                            task_order: 1,
                            created_at: now,
                            meta: {
                                source: 'AI',
                                is_removed: false
                            },
                            depends_on: []
                        },
                        {
                            id: 't1-a',
                            title: 'Competitor Intelligence',
                            description: 'Analyze market gaps.',
                            status: 'DONE',
                            task_type: 'AI',
                            graph_order: 1.1,
                            level: 1,
                            parent_id: 't1',
                            phase_id: 'p1',
                            task_order: 1,
                            created_at: now,
                            meta: {
                                source: 'AI',
                                is_removed: false
                            },
                            depends_on: []
                        },
                        {
                            id: 't1-b',
                            title: 'Mission Roadmap',
                            description: 'Define execution timeline.',
                            status: 'DONE',
                            task_type: 'AI',
                            graph_order: 1.2,
                            level: 1,
                            parent_id: 't1',
                            phase_id: 'p1',
                            task_order: 2,
                            created_at: now,
                            meta: {
                                source: 'AI',
                                is_removed: false
                            },
                            depends_on: []
                        },
                        {
                            id: 't2',
                            title: 'Data Architecture AI',
                            description: 'Generate optimal schema based on spec.',
                            status: 'READY',
                            task_type: 'AI',
                            graph_order: 2,
                            depends_on: [
                                't1'
                            ],
                            level: 0,
                            phase_id: 'p1',
                            task_order: 3,
                            created_at: now,
                            meta: {
                                source: 'AI',
                                is_removed: false
                            }
                        },
                        {
                            id: 't3',
                            title: 'Frontend Scaffold',
                            description: 'Initialize core UI components.',
                            status: 'BLOCKED',
                            task_type: 'HUMAN',
                            graph_order: 3,
                            depends_on: [
                                't2'
                            ],
                            level: 0,
                            phase_id: 'p1',
                            task_order: 4,
                            created_at: now,
                            meta: {
                                source: 'AI',
                                is_removed: false
                            }
                        }
                    ] : mergedTasks;
                    const recomputed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engine$2f$execution$2f$unified$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeWorkflowState"])(finalSet);
                    const newBoard = {
                        BLOCKED: [],
                        READY: [],
                        RUNNING: [],
                        DONE: []
                    };
                    // For each column, group tasks by hierarchy
                    const statuses = [
                        'BLOCKED',
                        'READY',
                        'RUNNING',
                        'DONE'
                    ];
                    statuses.forEach({
                        "WorkflowBoardPage.useEffect.fetchInitial": (status)=>{
                            const tasksInCol = recomputed.filter({
                                "WorkflowBoardPage.useEffect.fetchInitial.tasksInCol": (t)=>t.status === status
                            }["WorkflowBoardPage.useEffect.fetchInitial.tasksInCol"]);
                            const processed = new Set();
                            // Sort base tasks by graph order
                            const baseTasks = tasksInCol.filter({
                                "WorkflowBoardPage.useEffect.fetchInitial.baseTasks": (t)=>t.level === 0
                            }["WorkflowBoardPage.useEffect.fetchInitial.baseTasks"]).sort({
                                "WorkflowBoardPage.useEffect.fetchInitial.baseTasks": (a, b)=>(a.graph_order || 0) - (b.graph_order || 0)
                            }["WorkflowBoardPage.useEffect.fetchInitial.baseTasks"]);
                            baseTasks.forEach({
                                "WorkflowBoardPage.useEffect.fetchInitial": (parent)=>{
                                    newBoard[status].push(parent);
                                    processed.add(parent.id);
                                    // Find children that belong in THIS same column
                                    const children = tasksInCol.filter({
                                        "WorkflowBoardPage.useEffect.fetchInitial.children": (c)=>c.parent_id === parent.id
                                    }["WorkflowBoardPage.useEffect.fetchInitial.children"]);
                                    children.forEach({
                                        "WorkflowBoardPage.useEffect.fetchInitial": (child)=>{
                                            newBoard[status].push(child);
                                            processed.add(child.id);
                                        }
                                    }["WorkflowBoardPage.useEffect.fetchInitial"]);
                                }
                            }["WorkflowBoardPage.useEffect.fetchInitial"]);
                            // Add any subtasks whose parents are in DIFFERENT columns
                            tasksInCol.forEach({
                                "WorkflowBoardPage.useEffect.fetchInitial": (t)=>{
                                    if (!processed.has(t.id)) {
                                        newBoard[status].push(t);
                                    }
                                }
                            }["WorkflowBoardPage.useEffect.fetchInitial"]);
                        }
                    }["WorkflowBoardPage.useEffect.fetchInitial"]);
                    setBoard(newBoard);
                } finally{
                    setLoading(false);
                }
            }
            fetchInitial();
        }
    }["WorkflowBoardPage.useEffect"], [
        id
    ]);
    const mergedTasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WorkflowBoardPage.useMemo[mergedTasks]": ()=>{
            let list = [
                ...allTasks.filter({
                    "WorkflowBoardPage.useMemo[mergedTasks]": (t)=>t.id && !removedAiTaskIds.has(t.id)
                }["WorkflowBoardPage.useMemo[mergedTasks]"]).map({
                    "WorkflowBoardPage.useMemo[mergedTasks]": (t)=>({
                            ...t,
                            level: t.level ?? 0,
                            meta: {
                                source: 'AI',
                                is_removed: false
                            }
                        })
                }["WorkflowBoardPage.useMemo[mergedTasks]"]),
                ...userTasks.map({
                    "WorkflowBoardPage.useMemo[mergedTasks]": (t)=>({
                            ...t,
                            meta: {
                                source: 'USER',
                                is_removed: false
                            }
                        })
                }["WorkflowBoardPage.useMemo[mergedTasks]"])
            ];
            // Demo Fallback logic
            if (project?.is_demo_project && list.length === 0) {
                const now = new Date().toISOString();
                return [
                    {
                        id: 't1',
                        title: 'Strategy Briefing',
                        description: 'Align product mission with market needs.',
                        status: 'DONE',
                        task_type: 'HUMAN',
                        graph_order: 1,
                        level: 0,
                        phase_id: 'p1',
                        task_order: 1,
                        created_at: now,
                        meta: {
                            source: 'AI',
                            is_removed: false
                        },
                        depends_on: []
                    },
                    {
                        id: 't1-a',
                        title: 'Competitor Intelligence',
                        description: 'Analyze market gaps.',
                        status: 'DONE',
                        task_type: 'AI',
                        graph_order: 1.1,
                        level: 1,
                        parent_id: 't1',
                        phase_id: 'p1',
                        task_order: 1,
                        created_at: now,
                        meta: {
                            source: 'AI',
                            is_removed: false
                        },
                        depends_on: []
                    },
                    {
                        id: 't1-b',
                        title: 'Mission Roadmap',
                        description: 'Define execution timeline.',
                        status: 'DONE',
                        task_type: 'AI',
                        graph_order: 1.2,
                        level: 1,
                        parent_id: 't1',
                        phase_id: 'p1',
                        task_order: 2,
                        created_at: now,
                        meta: {
                            source: 'AI',
                            is_removed: false
                        },
                        depends_on: []
                    },
                    {
                        id: 't2',
                        title: 'Data Architecture AI',
                        description: 'Generate optimal schema based on spec.',
                        status: 'READY',
                        task_type: 'AI',
                        graph_order: 2,
                        depends_on: [
                            't1'
                        ],
                        level: 0,
                        phase_id: 'p1',
                        task_order: 3,
                        created_at: now,
                        meta: {
                            source: 'AI',
                            is_removed: false
                        }
                    },
                    {
                        id: 't3',
                        title: 'Frontend Scaffold',
                        description: 'Initialize core UI components.',
                        status: 'BLOCKED',
                        task_type: 'HUMAN',
                        graph_order: 3,
                        depends_on: [
                            't2'
                        ],
                        level: 0,
                        phase_id: 'p1',
                        task_order: 4,
                        created_at: now,
                        meta: {
                            source: 'AI',
                            is_removed: false
                        }
                    }
                ];
            }
            const uniqueMap = new Map();
            // Process USER tasks first, then overwrite with DB tasks (Source of Truth for status)
            list.reverse().forEach({
                "WorkflowBoardPage.useMemo[mergedTasks]": (t, index)=>{
                    const finalId = t.id || `recovered-${index}`;
                    uniqueMap.set(finalId, {
                        ...t,
                        id: finalId
                    });
                }
            }["WorkflowBoardPage.useMemo[mergedTasks]"]);
            const deduped = Array.from(uniqueMap.values());
            const activeIds = new Set(deduped.map({
                "WorkflowBoardPage.useMemo[mergedTasks]": (t)=>t.id
            }["WorkflowBoardPage.useMemo[mergedTasks]"]));
            return deduped.map({
                "WorkflowBoardPage.useMemo[mergedTasks]": (t)=>({
                        ...t,
                        depends_on: (t.depends_on || (t.dependency_task_id ? [
                            t.dependency_task_id
                        ] : [])).filter({
                            "WorkflowBoardPage.useMemo[mergedTasks]": (id)=>activeIds.has(id)
                        }["WorkflowBoardPage.useMemo[mergedTasks]"]),
                        parent_id: t.parent_id || t.parent_task_id
                    })
            }["WorkflowBoardPage.useMemo[mergedTasks]"]);
        }
    }["WorkflowBoardPage.useMemo[mergedTasks]"], [
        allTasks,
        userTasks,
        removedAiTaskIds,
        project
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkflowBoardPage.useEffect": ()=>{
            const mergeAndCompute = {
                "WorkflowBoardPage.useEffect.mergeAndCompute": ()=>{
                    const recomputedBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engine$2f$execution$2f$unified$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeWorkflowState"])(mergedTasks);
                    // Apply Status Overrides for consistency across Board
                    const overrideKey = `workflow_status_overrides_${id}`;
                    const overrides = ("TURBOPACK compile-time truthy", 1) ? JSON.parse(localStorage.getItem(overrideKey) || '{}') : "TURBOPACK unreachable";
                    const finalTasks = recomputedBase.map({
                        "WorkflowBoardPage.useEffect.mergeAndCompute.finalTasks": (t)=>{
                            if (overrides[t.id]) {
                                return {
                                    ...t,
                                    status: overrides[t.id]
                                };
                            }
                            return t;
                        }
                    }["WorkflowBoardPage.useEffect.mergeAndCompute.finalTasks"]);
                    const newBoard = {
                        BLOCKED: [],
                        READY: [],
                        RUNNING: [],
                        DONE: []
                    };
                    const statuses = [
                        'BLOCKED',
                        'READY',
                        'RUNNING',
                        'DONE'
                    ];
                    statuses.forEach({
                        "WorkflowBoardPage.useEffect.mergeAndCompute": (status)=>{
                            newBoard[status] = finalTasks.filter({
                                "WorkflowBoardPage.useEffect.mergeAndCompute": (t)=>t.status === status
                            }["WorkflowBoardPage.useEffect.mergeAndCompute"]);
                        }
                    }["WorkflowBoardPage.useEffect.mergeAndCompute"]);
                    setBoard(newBoard);
                }
            }["WorkflowBoardPage.useEffect.mergeAndCompute"];
            mergeAndCompute();
        }
    }["WorkflowBoardPage.useEffect"], [
        mergedTasks,
        id
    ]);
    const saveLocal = (uTasks, rIds)=>{
        localStorage.setItem(`workflow_user_tasks_${id}`, JSON.stringify(uTasks));
        localStorage.setItem(`workflow_removed_tasks_${id}`, JSON.stringify(Array.from(rIds)));
    };
    const onConnectNodes = (taskId, depId)=>{
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$workflow$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateDependency"])(taskId, depId, [
            ...allTasks.filter((t)=>!removedAiTaskIds.has(t.id)),
            ...userTasks
        ]);
        if (!result.valid) {
            setWarning(result.error || "Connection Error");
            return;
        }
        const isUser = userTasks.some((t)=>t.id === taskId);
        if (isUser) {
            const next = userTasks.map((t)=>t.id === taskId ? {
                    ...t,
                    depends_on: Array.from(new Set([
                        ...t.depends_on || [],
                        depId
                    ]))
                } : t);
            setUserTasks(next);
            saveLocal(next, removedAiTaskIds);
        } else {
            const aiTask = allTasks.find((t)=>t.id === taskId);
            if (aiTask) {
                const updatedAi = {
                    ...aiTask,
                    depends_on: [
                        depId
                    ],
                    meta: {
                        source: 'USER',
                        is_removed: false
                    }
                };
                const nextUser = [
                    ...userTasks,
                    updatedAi
                ];
                const nextRemoved = new Set(removedAiTaskIds);
                nextRemoved.add(taskId);
                setUserTasks(nextUser);
                setRemovedAiTaskIds(nextRemoved);
                saveLocal(nextUser, nextRemoved);
            }
        }
    };
    const onDisconnectNode = (taskId)=>{
        const isUser = userTasks.some((t)=>t.id === taskId);
        if (isUser) {
            const next = userTasks.map((t)=>t.id === taskId ? {
                    ...t,
                    depends_on: []
                } : t);
            setUserTasks(next);
            saveLocal(next, removedAiTaskIds);
        } else {
            const aiTask = allTasks.find((t)=>t.id === taskId);
            if (aiTask) {
                const updatedAi = {
                    ...aiTask,
                    depends_on: [],
                    meta: {
                        source: 'USER',
                        is_removed: false
                    }
                };
                const nextUser = [
                    ...userTasks,
                    updatedAi
                ];
                const nextRemoved = new Set(removedAiTaskIds);
                nextRemoved.add(taskId);
                setUserTasks(nextUser);
                setRemovedAiTaskIds(nextRemoved);
                saveLocal(nextUser, nextRemoved);
            }
        }
    };
    const onRemoveTask = async (taskId)=>{
        const taskToRemove = mergedTasks.find((t)=>t.id === taskId);
        if (taskToRemove?.status === 'DONE') {
            setWarning("Terminal tasks (DONE) cannot be removed. Strategy preservation enabled.");
            return;
        }
        // Dependency Re-alignment: Clear this task from anything that depends on it
        const affectedTasks = mergedTasks.filter((t)=>t.depends_on?.includes(taskId));
        try {
            const isUser = userTasks.some((t)=>t.id === taskId);
            if (isUser) {
                const next = userTasks.filter((t)=>t.id !== taskId).map((t)=>({
                        ...t,
                        depends_on: t.depends_on?.filter((id)=>id !== taskId)
                    }));
                setUserTasks(next);
                saveLocal(next, removedAiTaskIds);
            } else {
                const next = new Set(removedAiTaskIds);
                next.add(taskId);
                setRemovedAiTaskIds(next);
                saveLocal(userTasks, next);
            }
            // Persistence if not demo
            if (project && !project.is_demo_project) {
                await fetch(`/api/tasks/${taskId}`, {
                    method: 'DELETE'
                });
                await fetch(`/api/projects/${id}/history`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        action_type: 'DELETE',
                        task_id: taskId,
                        metadata: {
                            title: taskToRemove?.title,
                            status: taskToRemove?.status
                        }
                    })
                });
            }
        } catch (error) {
            console.error("Deletion sync failed", error);
        }
    };
    const handleTaskAdded = async (newTask)=>{
        try {
            // Find a valid phase_id from existing tasks if possible
            const phaseId = newTask.phase_id || allTasks[0]?.phase_id || 'unknown';
            const taskToSave = {
                ...newTask,
                phase_id: phaseId,
                status: newTask.status || 'READY',
                task_order: mergedTasks.length + 1,
                meta: {
                    source: newTask.meta?.source || 'USER',
                    is_removed: false
                }
            };
            const res = await fetch('/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(taskToSave)
            });
            if (!res.ok) throw new Error('Failed to save task');
            const persisted = await res.json();
            setAllTasks((prev)=>[
                    ...prev,
                    persisted
                ]);
            // Log creation
            if (project && !project.is_demo_project) {
                await fetch(`/api/projects/${id}/history`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        action_type: 'CREATE',
                        task_id: persisted.id,
                        metadata: {
                            title: persisted.title,
                            type: persisted.task_type
                        }
                    })
                });
            }
            setShowAddModal(false);
        } catch (error) {
            console.error('Task persistence failed', error);
            setWarning("Failed to save task to server. It may not be available on other pages.");
            setUserTasks((prev)=>{
                const next = [
                    ...prev,
                    {
                        ...newTask,
                        id: newTask.id || `local-${Date.now()}`
                    }
                ];
                saveLocal(next, removedAiTaskIds);
                return next;
            });
            setShowAddModal(false);
        }
    };
    const onDragEnd = async (result)=>{
        setWarning(null);
        if (!result.destination) return;
        const { source, destination, draggableId } = result;
        if (source.droppableId === destination.droppableId && source.index === destination.index) return;
        const finishStatus = destination.droppableId;
        const isUser = userTasks.some((t)=>t.id === draggableId);
        if (isUser) {
            const next = userTasks.map((t)=>t.id === draggableId ? {
                    ...t,
                    status: finishStatus
                } : t);
            setUserTasks(next);
            saveLocal(next, removedAiTaskIds);
            return;
        }
        if (!project?.is_demo_project) {
            try {
                await fetch('/api/tasks/status', {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        task_id: draggableId,
                        status: finishStatus
                    })
                });
                setAllTasks((prev)=>prev.map((t)=>t.id === draggableId ? {
                            ...t,
                            status: finishStatus
                        } : t));
            } catch (e) {
                console.error("Status sync failed", e);
            }
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-12 text-center text-muted-foreground",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "w-8 h-8 animate-spin mx-auto"
            }, void 0, false, {
                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                lineNumber: 372,
                columnNumber: 72
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
            lineNumber: 372,
            columnNumber: 16
        }, this);
    }
    const columns = [
        {
            id: 'BLOCKED',
            title: 'Blocked',
            color: 'bg-amber-500',
            style: 'bg-amber-500/[0.02] border-amber-500/20'
        },
        {
            id: 'READY',
            title: 'Ready to Start',
            color: 'bg-indigo-500',
            style: 'bg-indigo-500/[0.05] border-indigo-500/30'
        },
        {
            id: 'RUNNING',
            title: 'In Progress',
            color: 'bg-blue-500',
            style: 'bg-blue-500/[0.02] border-blue-500/20'
        },
        {
            id: 'DONE',
            title: 'Completed',
            color: 'bg-emerald-500',
            style: 'bg-emerald-500/[0.02] border-emerald-500/20'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-[calc(100vh-140px)] flex flex-col mx-auto px-6 relative py-4 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex items-center justify-between pb-4 border-b border-border/40 backdrop-blur-sm sticky top-0 z-[100]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/project/${id}`,
                                className: "p-2 transition-all hover:bg-primary/10 rounded-xl group border border-transparent hover:border-primary/10",
                                title: "Back to Overview",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 391,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 386,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 bg-primary/5 rounded-xl border border-primary/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$kanban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KanbanSquare$3e$__["KanbanSquare"], {
                                    className: "w-5 h-5 text-primary/70"
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 394,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 393,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl font-bold tracking-tight text-foreground/90 leading-none",
                                        children: "Workflow Board"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 397,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-muted-foreground/50 font-black uppercase tracking-widest mt-1 opacity-80",
                                        children: project?.title
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 400,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 396,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                        lineNumber: 385,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowAddModal(true),
                                className: "flex items-center gap-2 bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary px-4 py-2 rounded-xl font-bold text-[11px] uppercase tracking-widest transition-all border border-border/40 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-3.5 h-3.5 group-hover:rotate-90 transition-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 411,
                                        columnNumber: 25
                                    }, this),
                                    "Add Task"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 407,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex bg-muted/30 p-1.5 rounded-2xl border border-border/40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setViewMode('board'),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all", viewMode === 'board' ? "bg-card text-foreground shadow-sm" : "hover:bg-card/30 opacity-40 hover:opacity-100"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$kanban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KanbanSquare$3e$__["KanbanSquare"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 422,
                                                columnNumber: 29
                                            }, this),
                                            "Board"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 415,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setViewMode('map'),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all", viewMode === 'map' ? "bg-card text-foreground shadow-sm" : "hover:bg-card/30 opacity-40 hover:opacity-100"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 432,
                                                columnNumber: 29
                                            }, this),
                                            "Map"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 425,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 414,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                        lineNumber: 406,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                lineNumber: 384,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-h-0 flex gap-6 overflow-hidden px-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 overflow-hidden", viewMode === 'board' ? "grid grid-cols-4 gap-4" : "flex flex-col"),
                        children: viewMode === 'board' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragDropContext"], {
                                onDragEnd: onDragEnd,
                                children: columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col h-full rounded-2xl border border-border/40 overflow-hidden transition-all shadow-sm", col.id === 'READY' ? "bg-primary/[0.04] border-primary/30 shadow-md scale-[1.01] z-10" : "bg-muted/10", col.style),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-3 flex items-center justify-between border-b border-border/40 backdrop-blur-md sticky top-0 z-10", col.id === 'READY' ? "bg-primary/10" : "bg-background/80"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-1.5 h-1.5 rounded-full shadow-sm", col.color)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                lineNumber: 455,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-bold text-[12px] uppercase tracking-wider text-foreground/70",
                                                                children: col.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                lineNumber: 456,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                        lineNumber: 454,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        className: "px-1.5 h-5 rounded-md bg-muted text-muted-foreground border-none font-bold text-[9px]",
                                                        children: board[col.id].length
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                        lineNumber: 460,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 450,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Droppable"], {
                                                droppableId: col.id,
                                                children: (provided)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        ...provided.droppableProps,
                                                        ref: provided.innerRef,
                                                        className: "flex-1 overflow-y-auto p-3 custom-scrollbar flex flex-col gap-3",
                                                        children: [
                                                            (()=>{
                                                                const tasksInCol = board[col.id];
                                                                // Flatten calculation for DND
                                                                const renderList = [];
                                                                const processedSubtasks = new Set();
                                                                // 1. Get all parents (even those not in this column)
                                                                const allPossibleParents = mergedTasks.filter((t)=>t.level === 0 || !t.level);
                                                                allPossibleParents.forEach((p)=>{
                                                                    const childrenInCol = tasksInCol.filter((t)=>t.parent_id === p.id);
                                                                    const isParentInCol = tasksInCol.some((t)=>t.id === p.id);
                                                                    if (isParentInCol || childrenInCol.length > 0) {
                                                                        renderList.push({
                                                                            type: 'parent',
                                                                            task: p
                                                                        });
                                                                        if (isParentInCol) {
                                                                            renderList.push({
                                                                                type: 'task',
                                                                                task: tasksInCol.find((t)=>t.id === p.id)
                                                                            });
                                                                            processedSubtasks.add(p.id);
                                                                        }
                                                                        childrenInCol.forEach((c)=>{
                                                                            renderList.push({
                                                                                type: 'task',
                                                                                task: c,
                                                                                parentId: p.id
                                                                            });
                                                                            processedSubtasks.add(c.id);
                                                                        });
                                                                    }
                                                                });
                                                                // 2. Add ANY remaining tasks in this column as flat cards
                                                                tasksInCol.forEach((t)=>{
                                                                    if (!processedSubtasks.has(t.id)) {
                                                                        renderList.push({
                                                                            type: 'task',
                                                                            task: t
                                                                        });
                                                                    }
                                                                });
                                                                return renderList.map((item, idx)=>{
                                                                    if (item.type === 'parent') {
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParentHeader, {
                                                                            parent: item.task,
                                                                            allTasks: mergedTasks
                                                                        }, `parent-header-${item.task.id}-${item.task.status}`, false, {
                                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                            lineNumber: 510,
                                                                            columnNumber: 69
                                                                        }, this);
                                                                    }
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskCard, {
                                                                        task: item.task,
                                                                        index: idx,
                                                                        id: id,
                                                                        isDemo: project?.is_demo_project ?? false,
                                                                        allTasks: mergedTasks,
                                                                        onRemove: ()=>onRemoveTask(item.task.id),
                                                                        indent: !!item.parentId
                                                                    }, `task-card-${item.task.id}`, false, {
                                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                        lineNumber: 518,
                                                                        columnNumber: 65
                                                                    }, this);
                                                                });
                                                            })(),
                                                            provided.placeholder
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                        lineNumber: 467,
                                                        columnNumber: 49
                                                    }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 465,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, col.id, true, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 445,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 443,
                                columnNumber: 29
                            }, this)
                        }, void 0, false) : viewMode === 'graph' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center h-full text-muted-foreground text-sm font-medium",
                            children: "Graph visualization is temporarily disabled."
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                            lineNumber: 540,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full bg-card rounded-xl border border-border p-8 overflow-y-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-4xl mx-auto space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 548,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold",
                                                children: "Dependency Workflow Plan"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 549,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 547,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative pl-8 border-l-2 border-dashed border-border/60 space-y-12",
                                        children: mergedTasks.sort((a, b)=>(a.graph_order || 0) - (b.graph_order || 0)).map((task, idx)=>{
                                            const dep = mergedTasks.find((t)=>task.depends_on?.includes(t.id));
                                            const parent = mergedTasks.find((t)=>t.id === task.parent_id);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative group", task.level === 1 ? "ml-12" : ""),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-6 w-5 h-5 rounded-full bg-background border-2 z-10 flex items-center justify-center text-[10px] font-bold", task.level === 1 ? "-left-[89px] border-border text-muted-foreground" : "-left-[41px] border-primary"),
                                                        children: task.level === 1 ? "↳" : idx + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                        lineNumber: 561,
                                                        columnNumber: 53
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-5 border-l-4", task.status === 'DONE' ? "border-l-emerald-500 opacity-60" : task.status === 'READY' ? "border-l-primary shadow-md scale-[1.02]" : task.status === 'RUNNING' ? "border-l-blue-500 animate-pulse" : "border-l-amber-500/40", task.level === 1 ? "bg-muted/30" : ""),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-start",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-wrap items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                    variant: task.status === 'DONE' ? 'success' : 'default',
                                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[9px] uppercase font-bold tracking-widest", task.status === 'BLOCKED' ? "bg-amber-500/20 text-amber-700 hover:bg-amber-500/30 border-amber-500/30 text-[8px]" : ""),
                                                                                    children: task.status_label
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                                    lineNumber: 577,
                                                                                    columnNumber: 69
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm font-bold",
                                                                                    children: task.title
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                                    lineNumber: 580,
                                                                                    columnNumber: 69
                                                                                }, this),
                                                                                parent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                    variant: "default",
                                                                                    className: "text-[8px] opacity-70",
                                                                                    children: [
                                                                                        "Part of ",
                                                                                        parent.title
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                                    lineNumber: 581,
                                                                                    columnNumber: 80
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                            lineNumber: 576,
                                                                            columnNumber: 65
                                                                        }, this),
                                                                        task.status === 'BLOCKED' && task.blocked_reason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] text-amber-600 font-bold italic mt-1",
                                                                            children: task.blocked_reason
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                            lineNumber: 584,
                                                                            columnNumber: 69
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-muted-foreground line-clamp-2",
                                                                            children: task.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                            lineNumber: 586,
                                                                            columnNumber: 65
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                    lineNumber: 575,
                                                                    columnNumber: 61
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: task.task_type === 'AI' ? 'ai' : 'human',
                                                                    className: "uppercase text-[9px] font-bold",
                                                                    children: task.task_type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                    lineNumber: 588,
                                                                    columnNumber: 61
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                            lineNumber: 574,
                                                            columnNumber: 57
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                        lineNumber: 567,
                                                        columnNumber: 53
                                                    }, this)
                                                ]
                                            }, `map-task-${task.id}`, true, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 559,
                                                columnNumber: 49
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 552,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 545,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                            lineNumber: 544,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                        lineNumber: 440,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[360px] hidden xl:flex h-full shrink-0 border-l border-border/40 pl-4 bg-muted/5",
                        children: project && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ai$2f$assistant$2d$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiAssistantSidebar"], {
                            project: project,
                            tasks: mergedTasks,
                            onTaskAdded: handleTaskAdded,
                            isRegenerating: isRegenerating
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                            lineNumber: 605,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                        lineNumber: 603,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                lineNumber: 439,
                columnNumber: 13
            }, this),
            showAddModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/40 backdrop-blur-sm z-[1000] flex items-center justify-center p-6 animate-in fade-in duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-card w-full max-w-xl rounded-[2rem] border border-border/40 shadow-2xl p-8 relative overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowAddModal(false),
                            className: "absolute top-6 right-6 p-2 rounded-full hover:bg-muted transition-colors opacity-40 hover:opacity-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 620,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                            lineNumber: 619,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold tracking-tight",
                                    children: "Add Work Item"
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 623,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground mt-1",
                                    children: "Inject a human or AI task into the execution graph."
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 624,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                            lineNumber: 622,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "space-y-6",
                            onSubmit: (e)=>{
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget);
                                handleTaskAdded({
                                    title: formData.get('title'),
                                    description: formData.get('description'),
                                    task_type: formData.get('type'),
                                    depends_on: formData.get('dependency') ? [
                                        formData.get('dependency')
                                    ] : [],
                                    parent_id: formData.get('parent') || undefined
                                });
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[10px] font-black uppercase text-muted-foreground tracking-widest block mb-2 px-1",
                                            children: "Task Identity"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 638,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            name: "title",
                                            placeholder: "Project Plan / Security Audit / etc.",
                                            className: "w-full bg-muted border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 639,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 637,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[10px] font-black uppercase text-muted-foreground tracking-widest block mb-2 px-1",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 642,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "description",
                                            placeholder: "A brief summary of what needs to be achieved...",
                                            className: "w-full bg-muted border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all h-24 resize-none"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 643,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 641,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] font-black uppercase text-muted-foreground tracking-widest block mb-2 px-1",
                                                    children: "Executor"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                    lineNumber: 647,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "type",
                                                    className: "w-full bg-muted border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-primary/20 outline-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "AI",
                                                            children: "AI Agent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                            lineNumber: 649,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "HUMAN",
                                                            children: "Human Expert"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                            lineNumber: 650,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                    lineNumber: 648,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 646,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] font-black uppercase text-muted-foreground tracking-widest block mb-2 px-1",
                                                    children: "Prerequisite"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                    lineNumber: 654,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "dependency",
                                                    className: "w-full bg-muted border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-primary/20 outline-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "No Dependency"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                            lineNumber: 656,
                                                            columnNumber: 41
                                                        }, this),
                                                        mergedTasks.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: t.id,
                                                                children: t.title
                                                            }, t.id, false, {
                                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                lineNumber: 658,
                                                                columnNumber: 45
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                    lineNumber: 655,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 653,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 645,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[10px] font-black uppercase text-muted-foreground tracking-widest block mb-2 px-1",
                                            children: "Parent (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 664,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            name: "parent",
                                            className: "w-full bg-muted border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-primary/20 outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "No Parent (New Task)"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                    lineNumber: 666,
                                                    columnNumber: 37
                                                }, this),
                                                mergedTasks.filter((t)=>t.level === 0 || !t.level).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: t.id,
                                                        children: t.title
                                                    }, t.id, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                        lineNumber: 668,
                                                        columnNumber: 41
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 665,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 663,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full bg-primary text-primary-foreground py-3.5 rounded-2xl font-bold uppercase tracking-widest text-xs mt-4 shadow-lg hover:opacity-90 active:scale-95 transition-all",
                                    children: "Inject into Workflow"
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 672,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                            lineNumber: 626,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                    lineNumber: 618,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                lineNumber: 617,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
        lineNumber: 383,
        columnNumber: 9
    }, this);
}
_s(WorkflowBoardPage, "QrByqoF+eWBn8fnXJ4/fWpunnMA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = WorkflowBoardPage;
function ParentHeader({ parent, allTasks }) {
    const totalSubtasks = allTasks.filter((t)=>t.parent_id === parent.id).length;
    const completedSubtasks = allTasks.filter((t)=>t.parent_id === parent.id && t.status === 'DONE').length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4 mb-2 first:mt-0 flex items-center justify-between gap-2 px-2 py-1 bg-muted/20 rounded-lg border border-border/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] font-black uppercase text-foreground/50 tracking-tight flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1 h-3 bg-primary/20 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                        lineNumber: 690,
                        columnNumber: 17
                    }, this),
                    parent.title
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                lineNumber: 689,
                columnNumber: 13
            }, this),
            totalSubtasks > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                variant: "outline",
                className: "text-[7px] h-3.5 px-1 font-black shrink-0 whitespace-nowrap bg-background/50 opacity-40",
                children: [
                    completedSubtasks,
                    "/",
                    totalSubtasks,
                    " DONE"
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                lineNumber: 694,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
        lineNumber: 688,
        columnNumber: 9
    }, this);
}
_c1 = ParentHeader;
function TaskCard({ task, index, id, isDemo, allTasks, onRemove, indent = false }) {
    _s1();
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Draggable"], {
        draggableId: task.id,
        index: index,
        isDragDisabled: isDemo,
        children: (provided, snapshot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: provided.innerRef,
                ...provided.draggableProps,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group", indent ? "pl-3 border-l-2 border-border/10 ml-2" : ""),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    title: (task.depends_on?.length || 0) > 0 ? `Dependencies: ${task.depends_on.map((id)=>allTasks.find((t)=>t.id === id)?.title || id).join(', ')}` : 'No Dependencies',
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-all border bg-card rounded-xl overflow-hidden p-3 relative shadow-sm", snapshot.isDragging ? "shadow-2xl scale-[1.02] z-50 border-primary" : "hover:border-primary/40 hover:shadow-md", task.status === 'BLOCKED' ? "border-amber-500/20 bg-amber-500/[0.01]" : "border-border/60", task.status === 'READY' ? "border-primary/30 bg-primary/[0.02] ring-1 ring-primary/10" : "", task.status === 'DONE' ? "opacity-60 grayscale-[0.3]" : ""),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-2 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 overflow-hidden flex-1 cursor-pointer",
                                    onClick: ()=>setIsExpanded(!isExpanded),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        ...provided.dragHandleProps,
                                                        className: "p-1 hover:bg-muted rounded text-muted-foreground/20 hover:text-primary transition-colors cursor-grab active:cursor-grabbing",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$kanban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KanbanSquare$3e$__["KanbanSquare"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                            lineNumber: 730,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                        lineNumber: 729,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "outline",
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[7px] px-1 h-3.5 uppercase font-black border-none shrink-0", task.task_type === 'AI' ? "bg-primary/10 text-primary" : "bg-emerald-500/10 text-emerald-600"),
                                                        children: task.task_type === 'AI' ? 'AI AGENT' : 'HUMAN EXPERT'
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                        lineNumber: 732,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "p-0.5 opacity-40",
                                                        children: isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                            lineNumber: 739,
                                                            columnNumber: 59
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                            lineNumber: 739,
                                                            columnNumber: 97
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                        lineNumber: 738,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 728,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-bold truncate tracking-tight text-[11px] leading-none text-foreground/90", task.status === 'DONE' ? "line-through" : ""),
                                                children: task.title
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 742,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 727,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 726,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1 shrink-0",
                                    children: [
                                        task.status === 'READY' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/project/${id}/task/${task.id}`,
                                            className: "h-5 px-2 rounded bg-primary text-primary-foreground text-[8px] font-black uppercase tracking-widest hover:scale-[1.05] transition-all flex items-center shadow-sm",
                                            children: "Start"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 753,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/project/${id}/task/${task.id}`,
                                            className: "p-1 hover:bg-muted rounded text-muted-foreground/40 hover:text-foreground",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 761,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 760,
                                            columnNumber: 33
                                        }, this),
                                        task.status !== 'DONE' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                onRemove();
                                            },
                                            className: "p-1 hover:bg-destructive/10 rounded text-muted-foreground/40 hover:text-destructive transition-colors",
                                            title: "Remove from Strategy",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 769,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 764,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 751,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                            lineNumber: 725,
                            columnNumber: 25
                        }, this),
                        isExpanded && task.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 pt-2 border-t border-border/10 animate-in slide-in-from-top-1 duration-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-muted-foreground leading-relaxed",
                                    children: task.description
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 777,
                                    columnNumber: 33
                                }, this),
                                task.capability && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "outline",
                                    className: "mt-2 text-[7px] font-black uppercase tracking-widest px-1",
                                    children: task.capability
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 781,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                            lineNumber: 776,
                            columnNumber: 29
                        }, this),
                        task.status_explanation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[8px] font-bold truncate uppercase tracking-tighter mt-1 italic", task.status === 'BLOCKED' ? "text-amber-600/70" : "text-primary/60"),
                            children: task.status_explanation
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                            lineNumber: 789,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                    lineNumber: 713,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                lineNumber: 708,
                columnNumber: 17
            }, this)
    }, void 0, false, {
        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
        lineNumber: 706,
        columnNumber: 9
    }, this);
}
_s1(TaskCard, "FPNvbbHVlWWR4LKxxNntSxiIS38=");
_c2 = TaskCard;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "WorkflowBoardPage");
__turbopack_context__.k.register(_c1, "ParentHeader");
__turbopack_context__.k.register(_c2, "TaskCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_78f95f0f._.js.map