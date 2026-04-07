module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/shared/utils/supabase/server.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
;
;
async function createClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://nstmesiocczlbrtbcjtp.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_j2hZrmuG51YT_iCUI0zHXQ_MjCL0ysA"), {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll (cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options));
                } catch  {
                // The `setAll` method was called from a Server Component.
                // This can be ignored if you have middleware refreshing
                // user sessions.
                }
            }
        }
    });
}
}),
"[project]/apps/backend/services/db/project-service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createProject",
    ()=>createProject,
    "getProject",
    ()=>getProject,
    "getProjects",
    ()=>getProjects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/utils/supabase/server.ts [app-route] (ecmascript)");
;
async function createProject(input) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");
    const payload = {
        ...input,
        user_id: user.id
    };
    const { data, error } = await supabase.from('projects').insert([
        payload
    ]).select().single();
    if (error) {
        console.error('Error creating project:', error);
        throw new Error('Failed to create project');
    }
    return data;
}
async function getProjects(userId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
    const { data, error } = await supabase.from('projects').select('*').or(`is_demo_project.eq.true,user_id.eq.${userId}`).order('created_at', {
        ascending: false
    });
    if (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
    return data;
}
async function getProject(project_id) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");
    const { data: project, error: pError } = await supabase.from('projects').select('*').eq('id', project_id).or(`is_demo_project.eq.true,user_id.eq.${user.id}`) // Security enforcement
    .single();
    if (pError || !project) throw new Error(`Failed to fetch project or unauthorized`);
    const { data: phases, error: phError } = await supabase.from('phases').select('*').eq('project_id', project_id).order('phase_order', {
        ascending: true
    });
    if (phError) throw new Error(`Failed to fetch phases: ${phError.message}`);
    const phaseIds = phases ? phases.map((p)=>p.id) : [];
    let tasks = [];
    if (phaseIds.length > 0) {
        const { data: tData, error: tError } = await supabase.from('tasks').select('*').in('phase_id', phaseIds).order('task_order', {
            ascending: true
        });
        if (tError) throw new Error(`Failed to fetch tasks: ${tError.message}`);
        tasks = tData;
    }
    return {
        project: project,
        phases: phases,
        tasks
    };
}
}),
"[project]/engine/execution/unified-engine.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/modules/workflows/next-action.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNextBestAction",
    ()=>getNextBestAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$backend$2f$services$2f$db$2f$project$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/backend/services/db/project-service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$engine$2f$execution$2f$unified$2d$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/engine/execution/unified-engine.ts [app-route] (ecmascript)");
;
;
async function getNextBestAction(project_id, customTasks) {
    let tasks = [];
    if (customTasks && customTasks.length > 0) {
        tasks = customTasks;
    } else {
        const project = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$backend$2f$services$2f$db$2f$project$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getProject"])(project_id);
        tasks = project.tasks || [];
    }
    // Unify state first
    const recomputed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engine$2f$execution$2f$unified$2d$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeWorkflowState"])(tasks);
    if (!tasks || tasks.length === 0) {
        return {
            next_task: null,
            reasoning: "No tasks available yet."
        };
    }
    const executableTasks = recomputed.filter((t)=>t.status === 'READY');
    if (executableTasks.length === 0) {
        // Check if all tasks are DONE
        const allDone = recomputed.every((t)=>t.status === 'DONE');
        return {
            next_task: null,
            reasoning: allDone ? "All tasks in the workflow have been successfully completed." : "Awaiting completion of prerequisite tasks."
        };
    }
    // 2. Prioritize AI tasks over HUMAN tasks for the next action recommendation
    executableTasks.sort((a, b)=>{
        if (a.task_type === 'AI' && b.task_type !== 'AI') return -1;
        if (a.task_type !== 'AI' && b.task_type === 'AI') return 1;
        return a.task_order - b.task_order;
    });
    const recommendedTask = executableTasks[0];
    // 3. Construct the reasoning based on the executor and capability
    let reason = "";
    if (recommendedTask.task_type === 'AI') {
        reason = `Autonomous step identified. This ${recommendedTask.capability || 'technical'} task can be handled instantly by the AI agent to unblock downstream workflow stages.`;
    } else {
        reason = `Strategic human intervention required. Prerequisites are cleared, allowing you to focus on ${recommendedTask.capability || 'this validation'} step.`;
    }
    // Add specific dependency reasoning if applicable
    if (recommendedTask.status === 'BLOCKED' && recommendedTask.blocked_reason) {
        reason += ` (${recommendedTask.blocked_reason})`;
    }
    return {
        next_task: recommendedTask,
        reasoning: reason
    };
}
}),
"[project]/apps/frontend/app/api/ai/next-action/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$modules$2f$workflows$2f$next$2d$action$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/modules/workflows/next-action.ts [app-route] (ecmascript)");
;
;
async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const projectId = searchParams.get('project_id');
        if (!projectId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing project_id parameter"
            }, {
                status: 400
            });
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$modules$2f$workflows$2f$next$2d$action$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNextBestAction"])(projectId);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result);
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5028caf6._.js.map