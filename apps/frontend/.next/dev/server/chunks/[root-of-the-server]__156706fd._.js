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
"[project]/modules/workflows/next-action.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNextBestAction",
    ()=>getNextBestAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$backend$2f$services$2f$db$2f$project$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/backend/services/db/project-service.ts [app-route] (ecmascript)");
;
async function getNextBestAction(project_id, customTasks) {
    let tasks = [];
    if (customTasks && customTasks.length > 0) {
        tasks = customTasks;
    } else {
        const project = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$backend$2f$services$2f$db$2f$project$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getProject"])(project_id);
        tasks = project.tasks || [];
    }
    if (!tasks || tasks.length === 0) {
        return {
            next_task: null,
            reasoning: "No tasks available yet."
        };
    }
    // 1. Identify "Actionable" tasks: Status is READY AND (No dependency OR Dependency is DONE)
    const taskMap = new Map(tasks.map((t)=>[
            t.id,
            t
        ]));
    const executableTasks = tasks.filter((t)=>{
        if (t.status !== 'READY') return false;
        // If there's a dependency, it must be DONE
        if (t.dependency_task_id) {
            const depTask = taskMap.get(t.dependency_task_id);
            if (!depTask || depTask.status !== 'DONE') return false;
        }
        return true;
    });
    if (executableTasks.length === 0) {
        // Check if all tasks are DONE
        const allDone = tasks.every((t)=>t.status === 'DONE');
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
        reason = `Strategic human intervention required. PRerequisites are cleared, allowing you to focus on ${recommendedTask.capability || 'this validation'} step.`;
    }
    // Add specific dependency reasoning if applicable
    if (recommendedTask.dependency_task_id) {
        const dep = taskMap.get(recommendedTask.dependency_task_id);
        reason += ` (Unblocked by completion of: "${dep?.title}")`;
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

//# sourceMappingURL=%5Broot-of-the-server%5D__156706fd._.js.map