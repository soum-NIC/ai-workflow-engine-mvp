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
"[project]/engine/validation/structuring-engine.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateStructuredWorkflow",
    ()=>generateStructuredWorkflow
]);
async function generateStructuredWorkflow(goal, timeline, constraints) {
    console.log("Generating workflow for:", goal);
    return {
        phases: [
            {
                phase_title: 'Phase 1: Initialization',
                tasks: [
                    {
                        title: 'Analyze Capabilities',
                        description: 'Extract technical capability requirements from input.',
                        capability: 'ANALYSIS',
                        executor_type: 'AI',
                        expected_output: 'List of required capabilities.',
                        reasoning: 'First logical step before planning architectures.',
                        depends_on: undefined
                    },
                    {
                        title: 'Approve Strategy',
                        description: 'Manual operator validation of the initial findings.',
                        capability: 'STRATEGY',
                        executor_type: 'HUMAN',
                        expected_output: 'Authorized execution plan.',
                        reasoning: 'Requires explicit human alignment.',
                        depends_on: 'Analyze Capabilities'
                    }
                ]
            }
        ]
    };
}
}),
"[project]/modules/workflows/project-creation.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateWorkflow",
    ()=>generateWorkflow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/infra/db/supabase.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$engine$2f$validation$2f$structuring$2d$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/engine/validation/structuring-engine.ts [app-route] (ecmascript)");
;
;
async function generateWorkflow({ project_id, goal_description, timeline, constraints }) {
    console.log(`Analyzing goal: ${goal_description}`);
    // 0. Mission Purge: Clear existing architectural data for this project
    const { data: oldPhases } = await __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('phases').select('id').eq('project_id', project_id);
    if (oldPhases && oldPhases.length > 0) {
        const phaseIds = oldPhases.map((p)=>p.id);
        await __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('tasks').delete().in('phase_id', phaseIds);
        await __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('phases').delete().eq('project_id', project_id);
    }
    // 1. Call the AI Workflow Structuring Engine
    const aiOutput = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$engine$2f$validation$2f$structuring$2d$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateStructuredWorkflow"])(goal_description, timeline, constraints);
    const titleToIdMap = {};
    const tasksWithDependencies = [];
    const tasksWithParents = [];
    // 2. Map and Insert Phases & Tasks
    let phaseOrder = 1;
    let taskOrder = 1;
    for (const phaseInput of aiOutput.phases){
        // Insert Phase
        const { data: phase, error: pError } = await __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('phases').insert([
            {
                project_id,
                phase_title: phaseInput.phase_title,
                phase_order: phaseOrder++
            }
        ]).select().single();
        if (pError) throw new Error(`Phase creation failed: ${pError.message}`);
        // Insert Tasks
        for (const t of phaseInput.tasks){
            const payload = {
                phase_id: phase.id,
                title: t.title,
                description: t.description,
                capability: t.capability,
                task_type: t.executor_type,
                expected_output: t.expected_output,
                reasoning: t.reasoning,
                task_order: taskOrder,
                graph_order: taskOrder,
                status: t.depends_on ? 'BLOCKED' : 'READY',
                dependency_task_id: null // Will be populated in second pass
            };
            taskOrder++;
            const { data: task, error: tError } = await __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('tasks').insert([
                payload
            ]).select().single();
            if (tError) throw new Error(`Task creation failed: ${tError.message}`);
            // Track the task ID by its title to resolve relationships later
            titleToIdMap[task.title] = task.id;
            if (t.depends_on) {
                tasksWithDependencies.push({
                    task_id: task.id,
                    dependency_title: t.depends_on
                });
            }
            if (t.parent_task_title) {
                tasksWithParents.push({
                    task_id: task.id,
                    parent_title: t.parent_task_title
                });
            }
        }
    }
    // 3. Second pass to update dependencies and parents
    for (const dep of tasksWithDependencies){
        const depId = titleToIdMap[dep.dependency_title];
        if (depId) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('tasks').update({
                dependency_task_id: depId
            }).eq('id', dep.task_id);
        }
    }
    for (const p of tasksWithParents){
        const parentId = titleToIdMap[p.parent_title];
        if (parentId) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('tasks').update({
                parent_task_id: parentId
            }).eq('id', p.task_id);
        }
    }
    return {
        message: 'Workflow generated successfully'
    };
}
}),
"[project]/apps/frontend/app/api/ai/generate-workflow/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$modules$2f$workflows$2f$project$2d$creation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/modules/workflows/project-creation.ts [app-route] (ecmascript)");
;
;
async function POST(req) {
    try {
        const body = await req.json();
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$modules$2f$workflows$2f$project$2d$creation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateWorkflow"])(body);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__5178e512._.js.map