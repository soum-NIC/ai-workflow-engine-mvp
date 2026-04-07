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
"[project]/infra/db/supabase.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://nstmesiocczlbrtbcjtp.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "sb_publishable_j2hZrmuG51YT_iCUI0zHXQ_MjCL0ysA");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
}),
"[project]/engine/execution/execution-engine.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "executeTaskWithAI",
    ()=>executeTaskWithAI
]);
async function executeTaskWithAI(input) {
    console.log("Executing Autonomous Node:", input.task_title);
    return `### Autonomous Execution Log\n\nSuccess! The Engine has autonomously processed: ${input.task_title}\n\nThe system has fully realized the strategic inputs against the primary project goal.`;
}
}),
"[project]/modules/workflows/task-execution.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "executeAITask",
    ()=>executeAITask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/infra/db/supabase.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$backend$2f$services$2f$db$2f$task$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/backend/services/db/task-service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$engine$2f$execution$2f$execution$2d$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/engine/execution/execution-engine.ts [app-route] (ecmascript)");
;
;
;
async function executeAITask(task_id) {
    // 1. Fetch Task Details to pass the context to the AI
    const { data: task, error: tError } = await __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('tasks').select('*').eq('id', task_id).single();
    if (tError) throw new Error(`Task not found: ${tError.message}`);
    const t = task;
    if (t.task_type !== 'AI') {
        throw new Error('Only AI tasks can be executed autonomously.');
    }
    // 2. Fetch the corresponding Project to get the Goal
    const { data: phase, error: pError } = await __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('phases').select('project_id').eq('id', t.phase_id).single();
    if (pError || !phase) throw new Error('Phase not found for this task.');
    const { data: project, error: projError } = await __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('projects').select('goal_description').eq('id', phase.project_id).single();
    if (projError || !project) throw new Error('Project not found for this phase.');
    // 3. Execute AI Task via the Execution Engine
    const aiResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$engine$2f$execution$2f$execution$2d$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeTaskWithAI"])({
        task_title: t.title,
        task_description: t.description || '',
        project_goal: project.goal_description
    });
    // 4. Save Execution and Update Database Status
    const { execution, task: updatedTask } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$backend$2f$services$2f$db$2f$task$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveTaskExecutionResult"])(task_id, aiResult);
    return updatedTask;
}
}),
"[project]/modules/workflows/execution-orchestrator.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "orchestrateWorkflow",
    ()=>orchestrateWorkflow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/infra/db/supabase.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$modules$2f$workflows$2f$task$2d$execution$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/modules/workflows/task-execution.ts [app-route] (ecmascript)");
;
;
async function orchestrateWorkflow(completedTaskId) {
    console.log(`Orchestrating workflow after completion of task: ${completedTaskId}`);
    // 1. Find directly dependent tasks
    const { data: dependents, error: dError } = await __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('tasks').select('*').eq('dependency_task_id', completedTaskId);
    if (dError) {
        console.error("Error fetching dependent tasks:", dError);
        return;
    }
    if (!dependents || dependents.length === 0) return;
    for (const task of dependents){
        // Since we currently support 1:1 dependency via dependency_task_id,
        // completing the parent makes the child READY.
        console.log(`Unblocking task: ${task.title} (${task.id})`);
        const { data: updatedTask, error: uError } = await __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('tasks').update({
            status: 'READY'
        }).eq('id', task.id).select().single();
        if (uError) {
            console.error(`Failed to unblock task ${task.id}:`, uError);
            continue;
        }
        // 2. Auto-trigger AI tasks
        if (updatedTask.task_type === 'AI') {
            console.log(`Auto-triggering AI execution for: ${updatedTask.title}`);
            try {
                // We call executeAITask which also calls orchestrateWorkflow recursively for its own dependents
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$modules$2f$workflows$2f$task$2d$execution$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAITask"])(updatedTask.id);
            } catch (err) {
                console.error(`Auto-execution failed for task ${updatedTask.id}:`, err);
            }
        }
    }
}
}),
"[project]/apps/backend/services/db/task-service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "saveHumanFeedback",
    ()=>saveHumanFeedback,
    "saveTaskExecutionResult",
    ()=>saveTaskExecutionResult,
    "updateTaskStatus",
    ()=>updateTaskStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/infra/db/supabase.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$modules$2f$workflows$2f$execution$2d$orchestrator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/modules/workflows/execution-orchestrator.ts [app-route] (ecmascript)");
;
;
async function updateTaskStatus(task_id, status) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('tasks').update({
        status
    }).eq('id', task_id).select().single();
    if (error) {
        console.error('Error updating task status:', error);
        throw new Error('Failed to update task status');
    }
    // If a task is manually moved to DONE, orchestrate the next steps
    if (status === 'DONE') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$modules$2f$workflows$2f$execution$2d$orchestrator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["orchestrateWorkflow"])(task_id).catch(console.error);
    }
    return data;
}
async function saveTaskExecutionResult(task_id, ai_result) {
    // 1. Insert execution record
    const { data: execution, error: execError } = await __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('task_executions').insert([
        {
            task_id,
            ai_result
        }
    ]).select().single();
    if (execError) throw new Error(`Failed to save execution: ${execError.message}`);
    // 2. Update task output and mark as DONE
    const { data: task, error: taskError } = await __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('tasks').update({
        ai_output: ai_result,
        status: 'DONE'
    }).eq('id', task_id).select().single();
    if (taskError) throw new Error(`Failed to update task: ${taskError.message}`);
    // 3. Orchestrate next steps in the graph
    // We don't await this to keep the response snappy, or we can await it if we want strict consistency.
    // Let's NOT await it for better UX, but handle it as a background process.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$modules$2f$workflows$2f$execution$2d$orchestrator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["orchestrateWorkflow"])(task_id).catch(console.error);
    return {
        execution: execution,
        task: task
    };
}
async function saveHumanFeedback(task_id, feedback) {
    const { data: task, error: taskError } = await __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('tasks').update({
        ai_output: feedback,
        status: 'DONE'
    }).eq('id', task_id).select().single();
    if (taskError) throw new Error(`Failed to save feedback: ${taskError.message}`);
    // Orchestrate next steps in the graph
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$modules$2f$workflows$2f$execution$2d$orchestrator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["orchestrateWorkflow"])(task_id).catch(console.error);
    return task;
}
}),
"[project]/apps/frontend/app/api/tasks/complete-human/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$backend$2f$services$2f$db$2f$task$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/backend/services/db/task-service.ts [app-route] (ecmascript)");
;
;
async function POST(req) {
    try {
        const { task_id, feedback } = await req.json();
        if (!task_id) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing required task_id"
            }, {
                status: 400
            });
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$backend$2f$services$2f$db$2f$task$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveHumanFeedback"])(task_id, feedback || 'Task completed manually by human executor.');
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

//# sourceMappingURL=%5Broot-of-the-server%5D__cb087bab._.js.map