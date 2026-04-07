(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/table.js [app-client] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$kanban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Kanban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/kanban.js [app-client] (ecmascript) <export default as Kanban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
                    console.error("Board load error", error);
                } finally{
                    setLoading(false);
                }
            }
            fetchInitial();
        }
    }["WorkflowBoardPage.useEffect"], [
        id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkflowBoardPage.useEffect": ()=>{
            const mergeAndCompute = {
                "WorkflowBoardPage.useEffect.mergeAndCompute": ()=>{
                    let merged = [
                        ...allTasks.filter({
                            "WorkflowBoardPage.useEffect.mergeAndCompute": (t)=>!removedAiTaskIds.has(t.id)
                        }["WorkflowBoardPage.useEffect.mergeAndCompute"]).map({
                            "WorkflowBoardPage.useEffect.mergeAndCompute": (t)=>({
                                    ...t,
                                    level: t.level ?? 0,
                                    meta: {
                                        source: 'AI',
                                        is_removed: false
                                    }
                                })
                        }["WorkflowBoardPage.useEffect.mergeAndCompute"]),
                        ...userTasks.map({
                            "WorkflowBoardPage.useEffect.mergeAndCompute": (t)=>({
                                    ...t,
                                    meta: {
                                        source: 'USER',
                                        is_removed: false
                                    }
                                })
                        }["WorkflowBoardPage.useEffect.mergeAndCompute"])
                    ];
                    const activeIds = new Set(merged.map({
                        "WorkflowBoardPage.useEffect.mergeAndCompute": (t)=>t.id
                    }["WorkflowBoardPage.useEffect.mergeAndCompute"]));
                    merged = merged.map({
                        "WorkflowBoardPage.useEffect.mergeAndCompute": (t)=>({
                                ...t,
                                dependency_task_id: t.dependency_task_id && activeIds.has(t.dependency_task_id) ? t.dependency_task_id : undefined,
                                parent_task_id: t.parent_task_id && activeIds.has(t.parent_task_id) ? t.parent_task_id : undefined
                            })
                    }["WorkflowBoardPage.useEffect.mergeAndCompute"]);
                    const finalTasks = recomputeTaskStatuses(merged);
                    const newBoard = {
                        BLOCKED: [],
                        READY: [],
                        RUNNING: [],
                        DONE: []
                    };
                    const executionPlan = computeTopologicalOrder(finalTasks);
                    executionPlan.forEach({
                        "WorkflowBoardPage.useEffect.mergeAndCompute": (t)=>{
                            const status = t.status;
                            if (newBoard[status]) newBoard[status].push(t);
                        }
                    }["WorkflowBoardPage.useEffect.mergeAndCompute"]);
                    setBoard(newBoard);
                }
            }["WorkflowBoardPage.useEffect.mergeAndCompute"];
            if (allTasks.length > 0 || userTasks.length > 0) mergeAndCompute();
        }
    }["WorkflowBoardPage.useEffect"], [
        allTasks,
        userTasks,
        removedAiTaskIds
    ]);
    const saveLocal = (uTasks, rIds)=>{
        localStorage.setItem(`workflow_user_tasks_${id}`, JSON.stringify(uTasks));
        localStorage.setItem(`workflow_removed_tasks_${id}`, JSON.stringify(Array.from(rIds)));
    };
    const onConnectNodes = (taskId, depId)=>{
        const result = validateDependency(taskId, depId, [
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
                    dependency_task_id: depId
                } : t);
            setUserTasks(next);
            saveLocal(next, removedAiTaskIds);
        } else {
            const aiTask = allTasks.find((t)=>t.id === taskId);
            if (aiTask) {
                const updatedAi = {
                    ...aiTask,
                    dependency_task_id: depId,
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
                    dependency_task_id: undefined
                } : t);
            setUserTasks(next);
            saveLocal(next, removedAiTaskIds);
        } else {
            const aiTask = allTasks.find((t)=>t.id === taskId);
            if (aiTask) {
                const updatedAi = {
                    ...aiTask,
                    dependency_task_id: undefined,
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
    const onAddTask = (newTask)=>{
        const taskId = `user-${Date.now()}`;
        if (newTask.dependency_task_id) {
            const result = validateDependency(taskId, newTask.dependency_task_id, [
                ...allTasks.filter((t)=>!removedAiTaskIds.has(t.id)),
                ...userTasks
            ], newTask);
            if (!result.valid) {
                setWarning(result.error || "Graph Validation Error");
                return;
            }
        }
        const fullTask = {
            id: taskId,
            phase_id: allTasks[0]?.phase_id || 'default',
            title: newTask.title || 'Untitled Work Item',
            description: newTask.description || '',
            task_type: newTask.task_type || 'HUMAN',
            status: 'READY',
            task_order: (allTasks.length + userTasks.length + 1) * 10,
            graph_order: (allTasks.length + userTasks.length + 1) * 10,
            dependency_task_id: newTask.dependency_task_id,
            parent_task_id: newTask.parent_task_id,
            level: newTask.parent_task_id ? 1 : 0,
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-12 text-center text-muted-foreground",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "w-8 h-8 animate-spin mx-auto"
            }, void 0, false, {
                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                lineNumber: 222,
                columnNumber: 72
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
            lineNumber: 222,
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
            title: 'To Do',
            color: 'bg-indigo-500'
        },
        {
            id: 'RUNNING',
            title: 'In Progress',
            color: 'bg-emerald-500'
        },
        {
            id: 'DONE',
            title: 'Completed',
            color: 'bg-emerald-500'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-[1600px] h-[calc(100vh-140px)] flex flex-col mx-auto px-6 relative py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex items-center justify-between pb-4 border-b border-border/40 backdrop-blur-sm sticky top-0 z-[100]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 text-[13px] font-bold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground/40 hover:text-foreground cursor-pointer transition-colors px-1",
                                children: "Projects"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 237,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-3.5 h-3.5 text-muted-foreground/30"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 238,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground/40 hover:text-foreground cursor-pointer transition-colors px-1",
                                children: "V3"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 239,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-3.5 h-3.5 text-muted-foreground/30"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 240,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 px-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-foreground/80",
                                        children: project?.title || 'Product Design'
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 242,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-3 h-3 text-muted-foreground/30 rotate-90"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 243,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 241,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                        lineNumber: 236,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 border-r border-border/40 pr-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-1.5 rounded-full bg-primary/5 text-primary",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "w-4 h-4 cursor-pointer",
                                            onClick: ()=>setShowAddModal(true)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 251,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 250,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                        className: "w-4 h-4 text-muted-foreground/50 cursor-pointer hover:text-foreground transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 253,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "w-4 h-4 text-muted-foreground/50 cursor-pointer hover:text-foreground transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 254,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 249,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 bg-muted/40 p-1 rounded-xl",
                                children: [
                                    {
                                        id: 'table',
                                        title: 'Table',
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 260,
                                            columnNumber: 66
                                        }, this)
                                    },
                                    {
                                        id: 'timeline',
                                        title: 'Timeline',
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 261,
                                            columnNumber: 72
                                        }, this)
                                    },
                                    {
                                        id: 'calendar',
                                        title: 'Calendar',
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 262,
                                            columnNumber: 72
                                        }, this)
                                    },
                                    {
                                        id: 'board',
                                        title: 'Board',
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$kanban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Kanban$3e$__["Kanban"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 263,
                                            columnNumber: 66
                                        }, this)
                                    },
                                    {
                                        id: 'map',
                                        title: 'Gantt',
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 264,
                                            columnNumber: 64
                                        }, this)
                                    }
                                ].map((view)=>{
                                    const active = view.id === 'map' && viewMode === 'map' || view.id === 'board' && viewMode === 'board';
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>(view.id === 'board' || view.id === 'map') && setViewMode(view.id),
                                        className: cn("flex items-center gap-2 px-4 py-1.5 rounded-lg text-[11px] font-bold transition-all", active ? "bg-card text-foreground shadow-sm" : "text-muted-foreground/40 hover:text-foreground hover:bg-card/40"),
                                        children: [
                                            view.icon,
                                            view.title
                                        ]
                                    }, view.id, true, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 268,
                                        columnNumber: 33
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 258,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                        lineNumber: 247,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                lineNumber: 234,
                columnNumber: 13
            }, this),
            warning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 bg-amber-500 text-white rounded-2xl p-4 flex items-center justify-between shadow-xl shadow-amber-500/20 animate-in slide-in-from-top-6 duration-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-bold flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5 bg-white/20 p-1 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 290,
                                columnNumber: 25
                            }, this),
                            warning
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                        lineNumber: 289,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setWarning(null),
                        className: "bg-white/20 hover:bg-white/30 p-1.5 rounded-xl transition-all",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                            lineNumber: 294,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                        lineNumber: 293,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                lineNumber: 288,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-h-0",
                children: viewMode === 'board' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragDropContext"], {
                    onDragEnd: onDragEnd,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full flex gap-10 overflow-x-auto pb-4 custom-scrollbar px-1",
                        children: columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col min-w-[360px] max-w-[360px] h-full overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-6 px-2 flex items-center gap-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-xl tracking-tight text-foreground/90",
                                            children: [
                                                col.title,
                                                " (",
                                                board[col.id].length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 306,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 305,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Droppable"], {
                                        droppableId: col.id,
                                        children: (provided, snapshot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                ...provided.droppableProps,
                                                ref: provided.innerRef,
                                                className: cn("flex-1 overflow-y-auto p-4 flex flex-col gap-4 custom-scrollbar transition-colors", snapshot.isDraggingOver ? "bg-primary/5" : ""),
                                                children: [
                                                    board[col.id].map((task, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskCard, {
                                                            task: task,
                                                            index: index,
                                                            id: id,
                                                            isDemo: project?.is_demo_project ?? false,
                                                            allTasks: [
                                                                ...allTasks.filter((t)=>!removedAiTaskIds.has(t.id)),
                                                                ...userTasks
                                                            ],
                                                            onRemove: ()=>onRemoveTask(task.id),
                                                            col: col
                                                        }, task.id, false, {
                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                            lineNumber: 322,
                                                            columnNumber: 53
                                                        }, this)),
                                                    provided.placeholder
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 313,
                                                columnNumber: 45
                                            }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 311,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, col.id, true, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 304,
                                columnNumber: 33
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                        lineNumber: 302,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                    lineNumber: 301,
                    columnNumber: 21
                }, this) : viewMode === 'graph' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center h-full text-muted-foreground text-sm font-medium",
                    children: "Graph visualization is temporarily disabled."
                }, void 0, false, {
                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                    lineNumber: 342,
                    columnNumber: 21
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
                                        lineNumber: 349,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold",
                                        children: "Dependency Workflow Plan"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 350,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 348,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative pl-8 border-l-2 border-dashed border-border/60 space-y-12",
                                children: [
                                    ...allTasks.filter((t)=>!removedAiTaskIds.has(t.id)),
                                    ...userTasks
                                ].sort((a, b)=>(a.graph_order || 0) - (b.graph_order || 0)).map((task, idx)=>{
                                    const dep = [
                                        ...allTasks,
                                        ...userTasks
                                    ].find((t)=>t.id === task.dependency_task_id);
                                    const parent = [
                                        ...allTasks,
                                        ...userTasks
                                    ].find((t)=>t.id === task.parent_task_id);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: cn("relative group", task.level === 1 ? "ml-12" : ""),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: cn("absolute top-6 w-5 h-5 rounded-full bg-background border-2 z-10 flex items-center justify-center text-[10px] font-bold", task.level === 1 ? "-left-[89px] border-border text-muted-foreground" : "-left-[41px] border-primary"),
                                                children: task.level === 1 ? "↳" : idx + 1
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 361,
                                                columnNumber: 49
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                                className: cn("p-5 border-l-4", task.status === 'DONE' ? "border-l-emerald-500 opacity-60" : task.status === 'READY' ? "border-l-primary shadow-md scale-[1.02]" : task.status === 'RUNNING' ? "border-l-blue-500 animate-pulse" : "border-l-amber-500/40", task.level === 1 ? "bg-muted/30" : ""),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                            variant: task.status === 'DONE' ? 'success' : 'default',
                                                                            className: cn("text-[9px] uppercase font-bold tracking-widest", task.status === 'BLOCKED' ? "bg-amber-500/20 text-amber-700 hover:bg-amber-500/30 border-amber-500/30 text-[8px]" : ""),
                                                                            children: task.status === 'BLOCKED' ? `Waiting on Dependencies${dep ? ` (depends on ${dep.title})` : ''}` : task.status === 'READY' ? 'Ready to Start' : task.status === 'RUNNING' ? 'In Progress' : 'Completed'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                            lineNumber: 377,
                                                                            columnNumber: 65
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm font-bold",
                                                                            children: task.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                            lineNumber: 380,
                                                                            columnNumber: 65
                                                                        }, this),
                                                                        parent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                            variant: "default",
                                                                            className: "text-[8px] opacity-70",
                                                                            children: [
                                                                                "Part of ",
                                                                                parent.title
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                            lineNumber: 381,
                                                                            columnNumber: 76
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                    lineNumber: 376,
                                                                    columnNumber: 61
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-muted-foreground line-clamp-2",
                                                                    children: task.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                    lineNumber: 383,
                                                                    columnNumber: 61
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                            lineNumber: 375,
                                                            columnNumber: 57
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                            variant: task.task_type === 'AI' ? 'ai' : 'human',
                                                            className: "uppercase text-[9px] font-bold",
                                                            children: [
                                                                task.task_type,
                                                                " ",
                                                                task.level === 1 ? 'SUBTASK' : 'EXECUTION'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                            lineNumber: 385,
                                                            columnNumber: 57
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 53
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 367,
                                                columnNumber: 49
                                            }, this)
                                        ]
                                    }, task.id, true, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 360,
                                        columnNumber: 45
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 353,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                        lineNumber: 347,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                    lineNumber: 346,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                lineNumber: 299,
                columnNumber: 13
            }, this),
            showAddModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[200] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-card w-full max-w-md border border-border rounded-2xl shadow-2xl overflow-hidden p-6 animate-in zoom-in-95 duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-black",
                                    children: "Add Manual Work Item"
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 404,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowAddModal(false),
                                    className: "text-muted-foreground hover:text-foreground",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 406,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 405,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                            lineNumber: 403,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "space-y-4",
                            onSubmit: (e)=>{
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget);
                                onAddTask({
                                    title: formData.get('title'),
                                    description: formData.get('description'),
                                    task_type: formData.get('type'),
                                    dependency_task_id: formData.get('dep') || undefined,
                                    parent_task_id: formData.get('parent') || undefined
                                });
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[10px] font-black uppercase text-muted-foreground tracking-widest block mb-1",
                                            children: "Title"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 422,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            name: "title",
                                            required: true,
                                            className: "w-full bg-muted border-none rounded-lg px-4 py-2.5 text-sm focus:ring-1 focus:ring-primary outline-none",
                                            placeholder: "e.g. Code Review"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 423,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 421,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[10px] font-black uppercase text-muted-foreground tracking-widest block mb-1",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 426,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "description",
                                            className: "w-full bg-muted border-none rounded-lg px-4 py-2.5 text-sm focus:ring-1 focus:ring-primary outline-none h-24",
                                            placeholder: "Describe the goal of this task..."
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 427,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 425,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] font-black uppercase text-muted-foreground tracking-widest block mb-1",
                                                    children: "Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "type",
                                                    className: "w-full bg-muted border-none rounded-lg px-4 py-2.5 text-sm focus:ring-1 focus:ring-primary outline-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "HUMAN",
                                                            children: "Human"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                            lineNumber: 433,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "AI",
                                                            children: "AI Agent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                            lineNumber: 434,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 430,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] font-black uppercase text-muted-foreground tracking-widest block mb-1",
                                                    children: "Depends On"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                    lineNumber: 438,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "dep",
                                                    className: "w-full bg-muted border-none rounded-lg px-4 py-2.5 text-sm focus:ring-1 focus:ring-primary outline-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "No Dependency"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                            lineNumber: 440,
                                                            columnNumber: 41
                                                        }, this),
                                                        [
                                                            ...allTasks.filter((t)=>!removedAiTaskIds.has(t.id)),
                                                            ...userTasks
                                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: t.id,
                                                                children: t.title
                                                            }, t.id, false, {
                                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                                lineNumber: 442,
                                                                columnNumber: 45
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 437,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 429,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[10px] font-black uppercase text-muted-foreground tracking-widest block mb-1",
                                            children: "Parent (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 448,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            name: "parent",
                                            className: "w-full bg-muted border-none rounded-lg px-4 py-2.5 text-sm focus:ring-1 focus:ring-primary outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "No Parent (New Task)"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 37
                                                }, this),
                                                [
                                                    ...allTasks.filter((t)=>!removedAiTaskIds.has(t.id) && (t.level === 0 || !t.level)),
                                                    ...userTasks.filter((t)=>t.level === 0)
                                                ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: t.id,
                                                        children: t.title
                                                    }, t.id, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                        lineNumber: 452,
                                                        columnNumber: 41
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                            lineNumber: 449,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 447,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full bg-primary text-primary-foreground py-3 rounded-xl font-black uppercase tracking-widest text-xs mt-4 shadow-lg hover:opacity-90 active:scale-95 transition-all",
                                    children: "Inject into Workflow"
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                    lineNumber: 456,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                            lineNumber: 410,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                    lineNumber: 402,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                lineNumber: 401,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
        lineNumber: 233,
        columnNumber: 9
    }, this);
}
_s(WorkflowBoardPage, "292HaQ77O9rePrafVPVruJ6MqYk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = WorkflowBoardPage;
function TaskCard({ task, index, id, isDemo, allTasks, onRemove, col }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Draggable"], {
        draggableId: task.id,
        index: index,
        isDragDisabled: isDemo,
        children: (provided, snapshot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: provided.innerRef,
                ...provided.draggableProps,
                ...provided.dragHandleProps,
                className: cn(task.level === 1 ? "ml-6 pl-2 border-l-2 border-primary/10" : ""),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                    className: cn("group transition-all relative rounded-[2rem] overflow-hidden border-none shadow-sm mb-4", task.status === 'RUNNING' ? "bg-[#5D5FEF] text-white shadow-[#5D5FEF]/20 shadow-2xl" : "bg-card text-foreground hover:shadow-xl hover:-translate-y-1", snapshot.isDragging ? "shadow-2xl scale-[1.05] z-50 ring-2 ring-primary/20" : "", task.status === 'BLOCKED' ? "opacity-40 grayscale-[0.5]" : ""),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-7 flex flex-col gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                        variant: "default",
                                        className: cn("text-[10px] px-3 py-1 h-6 uppercase font-bold tracking-widest border-none rounded-full", task.status === 'RUNNING' ? "bg-white/20 text-white" : "bg-indigo-50 text-[#5D5FEF]"),
                                        children: col.title
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 489,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 opacity-60",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "flex items-center gap-1.5 text-[10px] font-bold hover:opacity-100 transition-opacity",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                        lineNumber: 502,
                                                        columnNumber: 41
                                                    }, this),
                                                    " Share"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 501,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "p-1 hover:opacity-100 transition-opacity",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                    lineNumber: 505,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 504,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 500,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 488,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-2xl font-bold tracking-tight leading-tight",
                                        children: task.title
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 511,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: cn("text-[13px] leading-relaxed line-clamp-3", task.status === 'RUNNING' ? "text-white/70" : "text-muted-foreground/60"),
                                        children: task.description
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 514,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 510,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center -space-x-2",
                                        children: [
                                            [
                                                1,
                                                2,
                                                3,
                                                4
                                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: cn("w-7 h-7 rounded-full border-2 flex items-center justify-center text-[8px] font-bold", task.status === 'RUNNING' ? "border-[#5D5FEF] bg-white text-[#5D5FEF]" : "border-background bg-muted text-muted-foreground"),
                                                    children: i === 4 ? "+4P" : "👤"
                                                }, i, false, {
                                                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                    lineNumber: 526,
                                                    columnNumber: 41
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: cn("ml-4 text-[11px] font-bold", task.status === 'RUNNING' ? "text-white/60" : "text-muted-foreground/40"),
                                                children: "4 People"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 533,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 524,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: cn("flex items-center gap-1.5 text-[11px] font-bold", task.status === 'RUNNING' ? "text-white/80" : "text-muted-foreground/60"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                        className: "w-3.5 h-3.5 rotate-45"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                        lineNumber: 546,
                                                        columnNumber: 41
                                                    }, this),
                                                    " 4"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 542,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Link, {
                                                href: `/project/${id}/task/${task.id}`,
                                                className: cn("px-4 py-2 rounded-xl text-[11px] font-bold transition-all transition-all flex items-center gap-1.5 uppercase tracking-widest", task.status === 'RUNNING' ? "bg-white text-[#5D5FEF]" : "bg-muted text-foreground hover:bg-primary/10"),
                                                children: [
                                                    "Execute",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                        lineNumber: 556,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                                lineNumber: 548,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                        lineNumber: 541,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                                lineNumber: 522,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                        lineNumber: 487,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                    lineNumber: 477,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
                lineNumber: 471,
                columnNumber: 17
            }, this)
    }, void 0, false, {
        fileName: "[project]/apps/frontend/app/(dashboard)/project/[id]/board/page.tsx",
        lineNumber: 469,
        columnNumber: 9
    }, this);
}
_c1 = TaskCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "WorkflowBoardPage");
__turbopack_context__.k.register(_c1, "TaskCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_frontend_app_%28dashboard%29_project_%5Bid%5D_board_page_tsx_c9f7c229._.js.map