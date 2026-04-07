module.exports = [
"[project]/apps/frontend/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Badge({ className, variant = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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
;
}),
"[project]/apps/frontend/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border border-border/50 bg-card text-card-foreground shadow-sm transition-all hover:shadow-md", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/frontend/components/ui/card.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/frontend/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/frontend/components/ui/card.tsx",
        lineNumber: 31,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/frontend/components/ui/card.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/frontend/components/ui/card.tsx",
        lineNumber: 56,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/frontend/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)));
CardFooter.displayName = "CardFooter";
;
}),
"[project]/shared/lib/workflow-validation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/shared/lib/workflow-execution.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computeTopologicalOrder",
    ()=>computeTopologicalOrder,
    "recomputeTaskStatuses",
    ()=>recomputeTaskStatuses
]);
function recomputeTaskStatuses(tasks) {
    const taskMap = new Map(tasks.map((t)=>[
            t.id,
            t
        ]));
    // Group subtasks key: parent_id, val: children[]
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
    // 1. Determine if a task is blocked by its own or parent's dependencies (Structural Blocking)
    const isStructurallyBlocked = (id)=>{
        if (blockCache.has(id)) return blockCache.get(id);
        if (visitingBlock.has(id)) return false; // Cycle safety
        const t = taskMap.get(id);
        if (!t) return true;
        visitingBlock.add(id);
        // A) Check own dependencies
        const deps = t.depends_on || [];
        const selfBlocked = deps.some((did)=>{
            const depTask = taskMap.get(did);
            // We use the initial status for dependencies to avoid deep recursive loops here, 
            // but we'll improve this with a topological approach or two-pass if needed.
            // For now, based on hierarchical rules, we check if the dependency is DONE.
            return depTask?.status !== 'DONE';
        });
        if (selfBlocked) {
            visitingBlock.delete(id);
            blockCache.set(id, true);
            return true;
        }
        // B) Check parent's dependencies (Inheritance)
        if (t.parent_id) {
            if (isStructurallyBlocked(t.parent_id)) {
                visitingBlock.delete(id);
                blockCache.set(id, true);
                return true;
            }
        }
        visitingBlock.delete(id);
        blockCache.set(id, false);
        return false;
    };
    // 2. Compute final statuses
    const statusCache = new Map();
    const resolveFinalStatus = (id)=>{
        if (statusCache.has(id)) return statusCache.get(id);
        const t = taskMap.get(id);
        if (!t) return 'BLOCKED';
        // Rule 1: If structurally blocked by mission prerequisites, it's BLOCKED
        if (isStructurallyBlocked(id)) {
            statusCache.set(id, 'BLOCKED');
            return 'BLOCKED';
        }
        // Rule 2: If it has children, its status is an aggregate
        const children = parentToChildren.get(id);
        if (children && children.length > 0) {
            const childStatuses = children.map((c)=>resolveFinalStatus(c.id));
            if (childStatuses.every((s)=>s === 'DONE')) return 'DONE';
            if (childStatuses.some((s)=>s === 'RUNNING' || s === 'DONE')) return 'RUNNING';
            if (childStatuses.some((s)=>s === 'READY')) return 'READY';
            return 'BLOCKED';
        }
        // Rule 3: Leaf nodes respect their own life-cycle status
        if (t.status === 'DONE') return 'DONE';
        if (t.status === 'RUNNING') return 'RUNNING';
        return 'READY';
    };
    // Force one pass to compute all
    return tasks.map((t)=>({
            ...t,
            status: resolveFinalStatus(t.id)
        }));
}
function computeTopologicalOrder(tasks) {
    const visited = new Set();
    const recStack = new Set();
    const result = [];
    const taskMap = new Map(tasks.map((t)=>[
            t.id,
            t
        ]));
    function visit(task) {
        if (visited.has(task.id)) return;
        if (recStack.has(task.id)) {
            console.warn(`Topological Sort: Cycle detected at task ${task.id}. Execution order may be unstable.`);
            return;
        }
        recStack.add(task.id);
        // Visit dependencies first
        const deps = task.depends_on || [];
        deps.forEach((depId)=>{
            const dep = taskMap.get(depId);
            if (dep) visit(dep);
        });
        recStack.delete(task.id);
        visited.add(task.id);
        result.push(task);
    }
    // Sort by graph_order as secondary priority
    const sortedSeeds = [
        ...tasks
    ].sort((a, b)=>(a.graph_order || 0) - (b.graph_order || 0));
    sortedSeeds.forEach((t)=>visit(t));
    return result;
}
}),
"[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkflowBoardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hello-pangea/dnd/dist/dnd.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__KanbanSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-kanban.js [app-ssr] (ecmascript) <export default as KanbanSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$workflow$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/lib/workflow-validation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$workflow$2d$execution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/lib/workflow-execution.ts [app-ssr] (ecmascript)");
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
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [project, setProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [board, setBoard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        BLOCKED: [],
        READY: [],
        RUNNING: [],
        DONE: []
    });
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('board');
    const [allTasks, setAllTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [userTasks, setUserTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [removedAiTaskIds, setRemovedAiTaskIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [warning, setWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showAddModal, setShowAddModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load from LocalStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const localUser = localStorage.getItem(`workflow_user_tasks_${id}`);
        const localRemoved = localStorage.getItem(`workflow_removed_tasks_${id}`);
        if (localUser) setUserTasks(JSON.parse(localUser));
        if (localRemoved) setRemovedAiTaskIds(new Set(JSON.parse(localRemoved)));
    }, [
        id
    ]);
    // Main hydrator
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!id) return;
        async function fetchInitial() {
            try {
                const res = await fetch(`/api/projects/${id}`);
                if (!res.ok) throw new Error('Failed to fetch project');
                const data = await res.json();
                setProject(data.project);
                setAllTasks(data.tasks || []);
            } catch (error) {
                console.error("Board load error", error);
            } finally{
                setLoading(false);
            }
        }
        fetchInitial();
    }, [
        id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mergeAndCompute = ()=>{
            let merged = [
                ...allTasks.filter((t)=>!removedAiTaskIds.has(t.id)).map((t)=>({
                        ...t,
                        level: t.level ?? 0,
                        meta: {
                            source: 'AI',
                            is_removed: false
                        }
                    })),
                ...userTasks.map((t)=>({
                        ...t,
                        meta: {
                            source: 'USER',
                            is_removed: false
                        }
                    }))
            ];
            const activeIds = new Set(merged.map((t)=>t.id));
            merged = merged.map((t)=>({
                    ...t,
                    depends_on: (t.depends_on || (t.dependency_task_id ? [
                        t.dependency_task_id
                    ] : [])).filter((id)=>activeIds.has(id)),
                    parent_id: t.parent_id || t.parent_task_id
                }));
            const finalTasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$workflow$2d$execution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recomputeTaskStatuses"])(merged);
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
            statuses.forEach((status)=>{
                const tasksInCol = finalTasks.filter((t)=>t.status === status);
                const processed = new Set();
                // Sort base tasks by graph order
                const baseTasks = tasksInCol.filter((t)=>t.level === 0).sort((a, b)=>(a.graph_order || 0) - (b.graph_order || 0));
                baseTasks.forEach((parent)=>{
                    newBoard[status].push(parent);
                    processed.add(parent.id);
                    // Find children that belong in THIS same column
                    const children = tasksInCol.filter((c)=>c.parent_id === parent.id);
                    children.forEach((child)=>{
                        newBoard[status].push(child);
                        processed.add(child.id);
                    });
                });
                // Add any subtasks whose parents are in DIFFERENT columns
                tasksInCol.forEach((t)=>{
                    if (!processed.has(t.id)) {
                        newBoard[status].push(t);
                    }
                });
            });
            setBoard(newBoard);
        };
        if (allTasks.length > 0 || userTasks.length > 0) mergeAndCompute();
    }, [
        allTasks,
        userTasks,
        removedAiTaskIds
    ]);
    const saveLocal = (uTasks, rIds)=>{
        localStorage.setItem(`workflow_user_tasks_${id}`, JSON.stringify(uTasks));
        localStorage.setItem(`workflow_removed_tasks_${id}`, JSON.stringify(Array.from(rIds)));
    };
    const onConnectNodes = (taskId, depId)=>{
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$workflow$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateDependency"])(taskId, depId, [
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
    const onRemoveTask = (taskId)=>{
        const isUser = userTasks.some((t)=>t.id === taskId);
        if (isUser) {
            const next = userTasks.filter((t)=>t.id !== taskId);
            setUserTasks(next);
            saveLocal(next, removedAiTaskIds);
        } else {
            const next = new Set(removedAiTaskIds);
            next.add(taskId);
            setRemovedAiTaskIds(next);
            saveLocal(userTasks, next);
        }
    };
    const onAddTask = (val)=>{
        const taskId = `user-${Date.now()}`;
        if (val.depends_on.length > 0) {
            // Validate first dependency for simplicity in UI, but engine supports many
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$workflow$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateDependency"])(taskId, val.depends_on[0], [
                ...allTasks.filter((t)=>!removedAiTaskIds.has(t.id)),
                ...userTasks
            ]);
            if (!result.valid) {
                setWarning(result.error || "Graph Validation Error");
                return;
            }
        }
        const fullTask = {
            id: taskId,
            phase_id: allTasks[0]?.phase_id || 'default',
            title: val.title || 'Untitled Work Item',
            description: val.description || '',
            task_type: val.task_type || 'HUMAN',
            status: 'READY',
            task_order: (allTasks.length + userTasks.length + 1) * 10,
            graph_order: (allTasks.length + userTasks.length + 1) * 10,
            depends_on: val.depends_on,
            parent_id: val.parent_id,
            level: val.parent_id ? 1 : 0,
            created_at: new Date().toISOString(),
            meta: {
                source: 'USER',
                is_removed: false
            }
        };
        const next = [
            ...userTasks,
            fullTask
        ];
        setUserTasks(next);
        saveLocal(next, removedAiTaskIds);
        setShowAddModal(false);
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-12 text-center text-muted-foreground",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "w-8 h-8 animate-spin mx-auto"
            }, void 0, false, {
                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                lineNumber: 253,
                columnNumber: 72
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
            lineNumber: 253,
            columnNumber: 16
        }, this);
    }
    const columns = [
        {
            id: 'BLOCKED',
            title: 'Waiting',
            color: 'bg-amber-500'
        },
        {
            id: 'READY',
            title: 'Ready to start',
            color: 'bg-indigo-500'
        },
        {
            id: 'RUNNING',
            title: 'In-progress',
            color: 'bg-blue-500'
        },
        {
            id: 'DONE',
            title: 'Completed',
            color: 'bg-emerald-500'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-[1600px] h-[calc(100vh-140px)] flex flex-col mx-auto px-6 relative py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex items-center justify-between pb-4 border-b border-border/40 backdrop-blur-sm sticky top-0 z-[100]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/project/${id}`,
                                className: "p-2 transition-all hover:bg-primary/10 rounded-xl group border border-transparent hover:border-primary/10",
                                title: "Back to Overview",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 272,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 267,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 bg-primary/5 rounded-xl border border-primary/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__KanbanSquare$3e$__["KanbanSquare"], {
                                    className: "w-5 h-5 text-primary/70"
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 275,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 274,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl font-bold tracking-tight text-foreground/90 leading-none",
                                        children: "Workflow Board"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 278,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-muted-foreground/50 font-black uppercase tracking-widest mt-1 opacity-80",
                                        children: project?.title
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 281,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 277,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                        lineNumber: 266,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowAddModal(true),
                                className: "flex items-center gap-2 bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary px-4 py-2 rounded-xl font-bold text-[11px] uppercase tracking-widest transition-all border border-border/40 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-3.5 h-3.5 group-hover:rotate-90 transition-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 292,
                                        columnNumber: 25
                                    }, this),
                                    "Add Task"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 288,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex bg-muted/30 p-1.5 rounded-2xl border border-border/40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setViewMode('board'),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all", viewMode === 'board' ? "bg-card text-foreground shadow-sm" : "hover:bg-card/30 opacity-40 hover:opacity-100"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__KanbanSquare$3e$__["KanbanSquare"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 303,
                                                columnNumber: 29
                                            }, this),
                                            "Board"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 296,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setViewMode('map'),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all", viewMode === 'map' ? "bg-card text-foreground shadow-sm" : "hover:bg-card/30 opacity-40 hover:opacity-100"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 313,
                                                columnNumber: 29
                                            }, this),
                                            "Map"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 306,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 295,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                        lineNumber: 287,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                lineNumber: 265,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-h-0",
                children: viewMode === 'board' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DragDropContext"], {
                    onDragEnd: onDragEnd,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full flex gap-5 overflow-x-auto pb-4 custom-scrollbar px-1",
                        children: columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col min-w-[280px] max-w-[350px] h-full rounded-xl border border-border/40 overflow-hidden transition-all", col.id === 'READY' ? "bg-primary/[0.03] border-primary/20 shadow-inner" : "bg-muted/10"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-4 flex items-center justify-between border-b border-border/40", col.id === 'READY' ? "bg-primary/5" : ""),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-1.5 h-1.5 rounded-full shadow-sm", col.color)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-[12px] uppercase tracking-wider text-foreground/70",
                                                        children: col.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 333,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                className: "px-1.5 h-5 rounded-md bg-muted text-muted-foreground border-none font-bold text-[9px]",
                                                children: board[col.id].length
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 339,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 329,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Droppable"], {
                                        droppableId: col.id,
                                        children: (provided)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                ...provided.droppableProps,
                                                ref: provided.innerRef,
                                                className: "flex-1 overflow-y-auto p-4 custom-scrollbar flex flex-col gap-4",
                                                children: [
                                                    board[col.id].map((task, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskCard, {
                                                            task: task,
                                                            index: index,
                                                            id: id,
                                                            isDemo: project?.is_demo_project ?? false,
                                                            allTasks: [
                                                                ...allTasks.filter((t)=>!removedAiTaskIds.has(t.id)),
                                                                ...userTasks
                                                            ],
                                                            onRemove: ()=>onRemoveTask(task.id)
                                                        }, task.id, false, {
                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                            lineNumber: 352,
                                                            columnNumber: 53
                                                        }, this)),
                                                    provided.placeholder
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 346,
                                                columnNumber: 45
                                            }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 344,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, col.id, true, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 325,
                                columnNumber: 33
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                        lineNumber: 323,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                    lineNumber: 322,
                    columnNumber: 21
                }, this) : viewMode === 'graph' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center h-full text-muted-foreground text-sm font-medium",
                    children: "Graph visualization is temporarily disabled."
                }, void 0, false, {
                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                    lineNumber: 371,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full bg-card rounded-xl border border-border p-8 overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 378,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold",
                                        children: "Dependency Workflow Plan"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 379,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 377,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative pl-8 border-l-2 border-dashed border-border/60 space-y-12",
                                children: [
                                    ...allTasks.filter((t)=>!removedAiTaskIds.has(t.id)),
                                    ...userTasks
                                ].sort((a, b)=>(a.graph_order || 0) - (b.graph_order || 0)).map((task, idx)=>{
                                    const dep = [
                                        ...allTasks,
                                        ...userTasks
                                    ].find((t)=>task.depends_on?.includes(t.id));
                                    const parent = [
                                        ...allTasks,
                                        ...userTasks
                                    ].find((t)=>t.id === task.parent_id);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative group", task.level === 1 ? "ml-12" : ""),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute top-6 w-5 h-5 rounded-full bg-background border-2 z-10 flex items-center justify-center text-[10px] font-bold", task.level === 1 ? "-left-[89px] border-border text-muted-foreground" : "-left-[41px] border-primary"),
                                                children: task.level === 1 ? "↳" : idx + 1
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 390,
                                                columnNumber: 49
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-5 border-l-4", task.status === 'DONE' ? "border-l-emerald-500 opacity-60" : task.status === 'READY' ? "border-l-primary shadow-md scale-[1.02]" : task.status === 'RUNNING' ? "border-l-blue-500 animate-pulse" : "border-l-amber-500/40", task.level === 1 ? "bg-muted/30" : ""),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            variant: task.status === 'DONE' ? 'success' : 'default',
                                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-[9px] uppercase font-bold tracking-widest", task.status === 'BLOCKED' ? "bg-amber-500/20 text-amber-700 hover:bg-amber-500/30 border-amber-500/30 text-[8px]" : ""),
                                                                            children: task.status === 'BLOCKED' ? `Waiting${dep ? ` (depends on ${dep.title})` : ''}` : task.status === 'READY' ? 'Ready to start' : task.status === 'RUNNING' ? 'In-progress' : 'Completed'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                            lineNumber: 406,
                                                                            columnNumber: 65
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm font-bold",
                                                                            children: task.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                            lineNumber: 411,
                                                                            columnNumber: 65
                                                                        }, this),
                                                                        parent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            variant: "default",
                                                                            className: "text-[8px] opacity-70",
                                                                            children: [
                                                                                "Part of ",
                                                                                parent.title
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                            lineNumber: 412,
                                                                            columnNumber: 76
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                    lineNumber: 405,
                                                                    columnNumber: 61
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-muted-foreground line-clamp-2",
                                                                    children: task.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                    lineNumber: 414,
                                                                    columnNumber: 61
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                            lineNumber: 404,
                                                            columnNumber: 57
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: task.task_type === 'AI' ? 'ai' : 'human',
                                                            className: "uppercase text-[9px] font-bold",
                                                            children: task.task_type
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                            lineNumber: 416,
                                                            columnNumber: 57
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 53
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 396,
                                                columnNumber: 49
                                            }, this)
                                        ]
                                    }, task.id, true, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 389,
                                        columnNumber: 45
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 382,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                        lineNumber: 376,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                    lineNumber: 375,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                lineNumber: 320,
                columnNumber: 13
            }, this),
            showAddModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/40 backdrop-blur-sm z-[1000] flex items-center justify-center p-6 animate-in fade-in duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-card w-full max-w-xl rounded-[2rem] border border-border/40 shadow-2xl p-8 relative overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowAddModal(false),
                            className: "absolute top-6 right-6 p-2 rounded-full hover:bg-muted transition-colors opacity-40 hover:opacity-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 435,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                            lineNumber: 434,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold tracking-tight",
                                    children: "Add Work Item"
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 438,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground mt-1",
                                    children: "Inject a human or AI task into the execution graph."
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 439,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                            lineNumber: 437,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "space-y-6",
                            onSubmit: (e)=>{
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget);
                                onAddTask({
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[10px] font-black uppercase text-muted-foreground tracking-widest block mb-2 px-1",
                                            children: "Task Identity"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 453,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            name: "title",
                                            placeholder: "Project Plan / Security Audit / etc.",
                                            className: "w-full bg-muted border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 454,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 452,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[10px] font-black uppercase text-muted-foreground tracking-widest block mb-2 px-1",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 457,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "description",
                                            placeholder: "A brief summary of what needs to be achieved...",
                                            className: "w-full bg-muted border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all h-24 resize-none"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 458,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 456,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] font-black uppercase text-muted-foreground tracking-widest block mb-2 px-1",
                                                    children: "Executor"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                    lineNumber: 462,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "type",
                                                    className: "w-full bg-muted border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-primary/20 outline-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "AI",
                                                            children: "AI Agent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                            lineNumber: 464,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "HUMAN",
                                                            children: "Human Expert"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                            lineNumber: 465,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                    lineNumber: 463,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 461,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] font-black uppercase text-muted-foreground tracking-widest block mb-2 px-1",
                                                    children: "Prerequisite"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                    lineNumber: 469,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "dependency",
                                                    className: "w-full bg-muted border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-primary/20 outline-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "No Dependency"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                            lineNumber: 471,
                                                            columnNumber: 41
                                                        }, this),
                                                        [
                                                            ...allTasks.filter((t)=>!removedAiTaskIds.has(t.id)),
                                                            ...userTasks
                                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: t.id,
                                                                children: t.title
                                                            }, t.id, false, {
                                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                lineNumber: 473,
                                                                columnNumber: 45
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                    lineNumber: 470,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 468,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 460,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[10px] font-black uppercase text-muted-foreground tracking-widest block mb-2 px-1",
                                            children: "Parent (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 479,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            name: "parent",
                                            className: "w-full bg-muted border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-primary/20 outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "No Parent (New Task)"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                    lineNumber: 481,
                                                    columnNumber: 37
                                                }, this),
                                                [
                                                    ...allTasks.filter((t)=>!removedAiTaskIds.has(t.id) && (t.level === 0 || !t.level)),
                                                    ...userTasks.filter((t)=>t.level === 0)
                                                ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: t.id,
                                                        children: t.title
                                                    }, t.id, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                        lineNumber: 483,
                                                        columnNumber: 41
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 480,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 478,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full bg-primary text-primary-foreground py-3.5 rounded-2xl font-bold uppercase tracking-widest text-xs mt-4 shadow-lg hover:opacity-90 active:scale-95 transition-all",
                                    children: "Inject into Workflow"
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 487,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                            lineNumber: 441,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                    lineNumber: 433,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                lineNumber: 432,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
        lineNumber: 264,
        columnNumber: 9
    }, this);
}
function TaskCard({ task, index, id, isDemo, allTasks, onRemove }) {
    const parent = allTasks.find((t)=>t.id === task.parent_id);
    const children = allTasks.filter((t)=>t.parent_id === task.id);
    const isParent = task.level === 0 && children.length > 0;
    // Calculate aggregated progress for parent
    const childDone = children.filter((c)=>c.status === 'DONE').length;
    const progress = children.length > 0 ? Math.round(childDone / children.length * 100) : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Draggable"], {
        draggableId: task.id,
        index: index,
        isDragDisabled: isDemo || isParent,
        children: (provided, snapshot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: provided.innerRef,
                ...provided.draggableProps,
                ...provided.dragHandleProps,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative", task.level === 1 ? "ml-4 pl-3" : ""),
                children: [
                    task.level === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-[2px] top-0 bottom-3 w-[2px] bg-primary/20 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                        lineNumber: 520,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group transition-all relative border bg-card rounded-lg overflow-hidden mb-2 p-2.5", snapshot.isDragging ? "shadow-2xl scale-[1.02] z-50 border-primary shadow-primary/20" : "hover:border-primary/30 shadow-none", task.status === 'BLOCKED' ? "opacity-60 border-border/40" : "border-border/60", task.status === 'READY' ? "border-primary/40 bg-primary/[0.01] ring-1 ring-primary/5 shadow-sm" : "", task.status === 'RUNNING' ? "border-blue-500/50 bg-blue-500/[0.01]" : "", task.status === 'DONE' ? "opacity-30" : ""),
                        title: `${task.title}: ${task.description}`,
                        children: [
                            parent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 flex items-center gap-1.5 px-2 py-1 bg-muted/40 rounded border border-border/20 max-w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[7px] font-black uppercase text-muted-foreground/40 tracking-widest leading-none flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                className: "w-2 h-2"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 539,
                                                columnNumber: 37
                                            }, this),
                                            "PART OF:"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 538,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[8px] font-black text-primary/60 truncate uppercase",
                                        children: parent.title
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 542,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 537,
                                columnNumber: 29
                            }, this),
                            isParent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between px-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[8px] font-black uppercase text-primary/70 tracking-widest leading-none",
                                                children: "Subtask Consistency"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 550,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[8px] font-black text-primary",
                                                children: [
                                                    progress,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 551,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 549,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1 bg-primary/10 rounded-full overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full bg-primary transition-all duration-700",
                                            style: {
                                                width: `${progress}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 554,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 553,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1 mt-2",
                                        children: children.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-1 h-1 rounded-full", c.status === 'DONE' ? "bg-emerald-500" : "bg-muted")
                                            }, c.id, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 558,
                                                columnNumber: 41
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 556,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 548,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute left-0 top-0 bottom-0 w-1", task.status === 'DONE' ? "bg-emerald-500/40" : task.status === 'READY' ? "bg-primary" : task.status === 'RUNNING' ? "bg-blue-500 animate-pulse" : "bg-muted")
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 565,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-2 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-0.5 overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                variant: "outline",
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-[7px] px-1 h-3.5 uppercase font-black border-none", task.status === 'READY' ? "bg-primary text-white" : "bg-muted text-muted-foreground"),
                                                                children: isParent ? 'Container' : task.task_type
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                lineNumber: 576,
                                                                columnNumber: 41
                                                            }, this),
                                                            !isParent && task.depends_on?.length > 0 && task.status === 'BLOCKED' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[8px] font-black text-amber-600/60 uppercase truncate",
                                                                children: "Prerequisites Pending"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                lineNumber: 583,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                        lineNumber: 575,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-bold tracking-tight text-foreground truncate leading-tight mt-1", isParent ? "text-[14px]" : "text-[13px]"),
                                                        children: task.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                        lineNumber: 586,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 574,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    onRemove();
                                                },
                                                className: "p-1 text-muted-foreground/30 hover:text-destructive opacity-0 group-hover:opacity-100 transition-all rounded hover:bg-destructive/10 shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                    lineNumber: 597,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 593,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 573,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-1.5 h-1.5 rounded-full", task.status === 'DONE' ? "bg-emerald-500" : task.status === 'READY' ? "bg-primary" : task.status === 'RUNNING' ? "bg-blue-500 animate-pulse" : "bg-amber-500/20")
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                        lineNumber: 603,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] font-black uppercase text-muted-foreground/60 tracking-wider",
                                                        children: task.status === 'BLOCKED' ? 'Backlog' : task.status === 'READY' ? 'Ready' : task.status === 'RUNNING' ? 'Running' : 'Done'
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                        lineNumber: 609,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 602,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: !isParent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/project/${id}/task/${task.id}`,
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-6 px-2.5 rounded-md text-[8px] font-black transition-all flex items-center gap-1.5 uppercase tracking-widest", task.status === 'READY' ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-muted/50 text-foreground/40 hover:bg-primary/20 hover:text-primary"),
                                                    children: "Execute"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                    lineNumber: 617,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 615,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 601,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 572,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                        lineNumber: 522,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                lineNumber: 510,
                columnNumber: 17
            }, this)
    }, void 0, false, {
        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
        lineNumber: 508,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=_b34c1dc0._.js.map