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
"[project]/apps/backend/services/db/repositories/supabaseRepository.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SupabaseRepository",
    ()=>SupabaseRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/infra/db/supabase.ts [app-route] (ecmascript)");
;
class SupabaseRepository {
    client;
    constructor(client = __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"]){
        this.client = client;
    }
    isUuid(id) {
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        return uuidRegex.test(id);
    }
    async createProject(input) {
        const { data, error } = await this.client.from('projects').insert([
            input
        ]).select().single();
        if (error) throw new Error(`Supabase error creating project: ${error.message}`);
        return data;
    }
    async getProjects(userId) {
        const { data, error } = await this.client.from('projects').select('*').or(`is_demo_project.eq.true,user_id.eq.${userId}`).order('created_at', {
            ascending: false
        });
        if (error) throw new Error(`Supabase error fetching projects: ${error.message}`);
        return data;
    }
    async getProject(projectId, userId) {
        const { data: project, error: pError } = await this.client.from('projects').select('*').eq('id', projectId).or(`is_demo_project.eq.true,user_id.eq.${userId}`).single();
        if (pError || !project) throw new Error(`Project not found or unauthorized`);
        const { data: phases, error: phError } = await this.client.from('phases').select('*').eq('project_id', projectId).order('phase_order', {
            ascending: true
        });
        if (phError) throw new Error(`Failed to fetch phases: ${phError.message}`);
        const phaseIds = phases ? phases.map((p)=>p.id) : [];
        let tasks = [];
        if (phaseIds.length > 0) {
            const { data: tData, error: tError } = await this.client.from('tasks').select('*').in('phase_id', phaseIds).order('task_order', {
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
    async deleteProjectPhases(projectId) {
        const { data: phases } = await this.client.from('phases').select('id').eq('project_id', projectId);
        if (phases && phases.length > 0) {
            const phaseIds = phases.map((p)=>p.id);
            await this.client.from('tasks').delete().in('phase_id', phaseIds);
            await this.client.from('phases').delete().eq('project_id', projectId);
        }
    }
    async createPhase(projectId, title, order) {
        const { data, error } = await this.client.from('phases').insert([
            {
                project_id: projectId,
                phase_title: title,
                phase_order: order
            }
        ]).select().single();
        if (error) throw new Error(`Supabase error creating phase: ${error.message}`);
        return data;
    }
    async createTask(payload) {
        const { data, error } = await this.client.from('tasks').insert([
            payload
        ]).select().single();
        if (error) throw new Error(`Supabase error creating task: ${error.message}`);
        return data;
    }
    async updateTask(taskId, payload) {
        if (!this.isUuid(taskId)) {
            console.log(`Skipping DB update for local-only Task: ${taskId}`);
            return payload;
        }
        const { data, error } = await this.client.from('tasks').update(payload).eq('id', taskId).select().single();
        if (error) throw new Error(`Supabase error updating task: ${error.message}`);
        return data;
    }
    async getTask(taskId) {
        if (!this.isUuid(taskId)) throw new Error(`Task ${taskId} is local-only`);
        const { data, error } = await this.client.from('tasks').select('*').eq('id', taskId).single();
        if (error) throw new Error(`Supabase error fetching task: ${error.message}`);
        return data;
    }
    async getPhase(phaseId) {
        const { data, error } = await this.client.from('phases').select('*').eq('id', phaseId).single();
        if (error) throw new Error(`Supabase error fetching phase: ${error.message}`);
        return data;
    }
    async getProjectOnly(projectId) {
        const { data, error } = await this.client.from('projects').select('*').eq('id', projectId).single();
        if (error) throw new Error(`Supabase error fetching project: ${error.message}`);
        return data;
    }
    async getDependentTasks(completedTaskId) {
        if (!this.isUuid(completedTaskId)) return [];
        const { data, error } = await this.client.from('tasks').select('*').eq('dependency_task_id', completedTaskId);
        if (error) throw new Error(`Supabase error fetching dependent tasks: ${error.message}`);
        return data;
    }
    async updateTaskStatus(taskId, status) {
        if (!this.isUuid(taskId)) return {
            id: taskId,
            status
        };
        const { data, error } = await this.client.from('tasks').update({
            status
        }).eq('id', taskId).select().single();
        if (error) throw new Error(`Supabase error updating task status: ${error.message}`);
        return data;
    }
    async saveTaskExecutionResult(taskId, aiResult) {
        const { data: execution, error: execError } = await this.client.from('task_executions').insert([
            {
                task_id: taskId,
                ai_result: aiResult
            }
        ]).select().single();
        if (execError) throw new Error(`Failed to save execution: ${execError.message}`);
        const { data: task, error: taskError } = await this.client.from('tasks').update({
            ai_output: aiResult,
            status: 'DONE'
        }).eq('id', taskId).select().single();
        if (taskError) throw new Error(`Failed to update task: ${taskError.message}`);
        return {
            execution: execution,
            task: task
        };
    }
    async saveHumanFeedback(taskId, feedback) {
        if (!this.isUuid(taskId)) return {
            id: taskId,
            status: 'DONE',
            ai_output: feedback
        };
        const { data: task, error: taskError } = await this.client.from('tasks').update({
            ai_output: feedback,
            status: 'DONE'
        }).eq('id', taskId).select().single();
        if (taskError) throw new Error(`Failed to save feedback: ${taskError.message}`);
        return task;
    }
    async getTasksByProjectId(projectId) {
        const { data: phases } = await this.client.from('phases').select('id').eq('project_id', projectId);
        const phaseIds = phases ? phases.map((p)=>p.id) : [];
        if (phaseIds.length === 0) return [];
        const { data, error } = await this.client.from('tasks').select('*').in('phase_id', phaseIds);
        if (error) throw new Error(`Supabase error fetching tasks: ${error.message}`);
        return data;
    }
    async updateProjectProgress(projectId, progress) {
        const { error } = await this.client.from('projects').update({
            progress_percentage: progress
        }).eq('id', projectId);
        if (error) throw new Error(`Supabase error updating project progress: ${error.message}`);
    }
    async deleteTask(taskId) {
        const { error } = await this.client.from('tasks').delete().eq('id', taskId);
        if (error) throw new Error(`Supabase error deleting task: ${error.message}`);
    }
    async logActivity(projectId, actionType, metadata, taskId) {
        const { error } = await this.client.from('mission_activities').insert([
            {
                project_id: projectId,
                task_id: taskId,
                action_type: actionType,
                metadata,
                timestamp: new Date().toISOString()
            }
        ]);
        if (error) console.error(`Failed to log activity: ${error.message}`);
    }
    async getActivityLogs(projectId) {
        const { data, error } = await this.client.from('mission_activities').select('*').eq('project_id', projectId).order('timestamp', {
            ascending: false
        });
        if (error) throw new Error(`Failed to fetch activity logs: ${error.message}`);
        return data || [];
    }
}
}),
"[project]/infra/db/mongodb.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connectToDatabase",
    ()=>connectToDatabase
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongodb$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs, [project]/node_modules/mongodb)");
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
    client = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongodb$29$__["MongoClient"](uri);
    await client.connect();
    db = client.db('ai_kickoff_workflow');
    return {
        client,
        db
    };
}
}),
"[project]/apps/backend/services/db/repositories/mongoRepository.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MongoRepository",
    ()=>MongoRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/infra/db/mongodb.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongodb$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs, [project]/node_modules/mongodb)");
;
;
class MongoRepository {
    async getDb() {
        const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$db$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
        return db;
    }
    sanitize(doc) {
        if (!doc) return doc;
        const { _id, ...rest } = doc;
        const sanitized = {
            ...rest,
            id: _id ? _id.toString() : doc.id
        };
        // Ensure array fields exist
        if (sanitized.depends_on === undefined) sanitized.depends_on = [];
        // Convert any Date objects to ISO strings to avoid Next.js serialization errors
        Object.keys(sanitized).forEach((key)=>{
            if (sanitized[key] instanceof Date) {
                sanitized[key] = sanitized[key].toISOString();
            }
        });
        return sanitized;
    }
    async createProject(input) {
        const db = await this.getDb();
        const project = {
            ...input,
            status: 'active',
            progress_percentage: 0,
            created_at: new Date().toISOString()
        };
        await db.collection('projects').insertOne(project);
        return this.sanitize(project);
    }
    async getProjects(userId) {
        const db = await this.getDb();
        const cursor = db.collection('projects').find({
            $or: [
                {
                    is_demo_project: true
                },
                {
                    user_id: userId
                }
            ]
        }).sort({
            created_at: -1
        });
        const projects = await cursor.toArray();
        return projects.map((p)=>this.sanitize(p));
    }
    async getProject(projectId, userId) {
        const db = await this.getDb();
        let id;
        try {
            id = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongodb$29$__["ObjectId"](projectId);
        } catch  {
            id = projectId;
        }
        const project = await db.collection('projects').findOne({
            _id: id,
            $or: [
                {
                    is_demo_project: true
                },
                {
                    user_id: userId
                }
            ]
        });
        if (!project) throw new Error('Project not found or unauthorized');
        const phases = await db.collection('phases').find({
            project_id: projectId
        }).sort({
            phase_order: 1
        }).toArray();
        const phaseIds = phases.map((p)=>p._id.toString());
        let tasks = [];
        if (phaseIds.length > 0) {
            tasks = await db.collection('tasks').find({
                phase_id: {
                    $in: phaseIds
                }
            }).sort({
                task_order: 1
            }).toArray();
        }
        return {
            project: this.sanitize(project),
            phases: phases.map((p)=>this.sanitize(p)),
            tasks: tasks.map((t)=>this.sanitize(t))
        };
    }
    async deleteProjectPhases(projectId) {
        const db = await this.getDb();
        const phases = await db.collection('phases').find({
            project_id: projectId
        }).toArray();
        if (phases.length > 0) {
            const phaseIds = phases.map((p)=>p._id);
            await db.collection('tasks').deleteMany({
                phase_id: {
                    $in: phaseIds
                }
            });
            await db.collection('phases').deleteMany({
                project_id: projectId
            });
        }
    }
    async createPhase(projectId, title, order) {
        const db = await this.getDb();
        const phase = {
            project_id: projectId,
            phase_title: title,
            phase_order: order,
            created_at: new Date().toISOString()
        };
        await db.collection('phases').insertOne(phase);
        return this.sanitize(phase);
    }
    async createTask(payload) {
        const db = await this.getDb();
        const task = {
            ...payload,
            created_at: new Date().toISOString()
        };
        await db.collection('tasks').insertOne(task);
        return this.sanitize(task);
    }
    async updateTask(taskId, payload) {
        const db = await this.getDb();
        let id;
        try {
            id = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongodb$29$__["ObjectId"](taskId);
        } catch  {
            id = taskId;
        }
        const result = await db.collection('tasks').findOneAndUpdate({
            _id: id
        }, {
            $set: payload
        }, {
            returnDocument: 'after'
        });
        if (!result) throw new Error('Task not found');
        return this.sanitize(result);
    }
    async getTask(taskId) {
        const db = await this.getDb();
        let id;
        try {
            id = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongodb$29$__["ObjectId"](taskId);
        } catch  {
            id = taskId;
        }
        const task = await db.collection('tasks').findOne({
            _id: id
        });
        if (!task) throw new Error('Task not found');
        return this.sanitize(task);
    }
    async getPhase(phaseId) {
        const db = await this.getDb();
        let id;
        try {
            id = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongodb$29$__["ObjectId"](phaseId);
        } catch  {
            id = phaseId;
        }
        const phase = await db.collection('phases').findOne({
            _id: id
        });
        if (!phase) throw new Error('Phase not found');
        return this.sanitize(phase);
    }
    async getProjectOnly(projectId) {
        const db = await this.getDb();
        let id;
        try {
            id = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongodb$29$__["ObjectId"](projectId);
        } catch  {
            id = projectId;
        }
        const project = await db.collection('projects').findOne({
            _id: id
        });
        if (!project) throw new Error('Project not found');
        return this.sanitize(project);
    }
    async getDependentTasks(completedTaskId) {
        const db = await this.getDb();
        const tasks = await db.collection('tasks').find({
            dependency_task_id: completedTaskId
        }).toArray();
        return tasks.map((t)=>this.sanitize(t));
    }
    async updateTaskStatus(taskId, status) {
        const db = await this.getDb();
        let id;
        try {
            id = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongodb$29$__["ObjectId"](taskId);
        } catch  {
            id = taskId;
        }
        const result = await db.collection('tasks').findOneAndUpdate({
            _id: id
        }, {
            $set: {
                status
            }
        }, {
            returnDocument: 'after'
        });
        if (!result) throw new Error('Task not found');
        return this.sanitize(result);
    }
    async saveTaskExecutionResult(taskId, aiResult) {
        const db = await this.getDb();
        let id;
        try {
            id = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongodb$29$__["ObjectId"](taskId);
        } catch  {
            id = taskId;
        }
        const execution = {
            task_id: taskId,
            ai_result: aiResult,
            executed_at: new Date().toISOString()
        };
        await db.collection('task_executions').insertOne(execution);
        const taskResult = await db.collection('tasks').findOneAndUpdate({
            _id: id
        }, {
            $set: {
                ai_output: aiResult,
                status: 'DONE'
            }
        }, {
            returnDocument: 'after'
        });
        if (!taskResult) throw new Error('Task not found');
        return {
            execution: this.sanitize(execution),
            task: this.sanitize(taskResult)
        };
    }
    async saveHumanFeedback(taskId, feedback) {
        const db = await this.getDb();
        let id;
        try {
            id = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongodb$29$__["ObjectId"](taskId);
        } catch  {
            id = taskId;
        }
        const taskResult = await db.collection('tasks').findOneAndUpdate({
            _id: id
        }, {
            $set: {
                ai_output: feedback,
                status: 'DONE'
            }
        }, {
            returnDocument: 'after'
        });
        if (!taskResult) throw new Error('Task not found');
        return this.sanitize(taskResult);
    }
    async getTasksByProjectId(projectId) {
        const db = await this.getDb();
        const phases = await db.collection('phases').find({
            project_id: projectId
        }).toArray();
        const phaseIds = phases.map((p)=>p._id.toString());
        if (phaseIds.length === 0) return [];
        const tasks = await db.collection('tasks').find({
            phase_id: {
                $in: phaseIds
            }
        }).toArray();
        return tasks.map((t)=>this.sanitize(t));
    }
    async updateProjectProgress(projectId, progress) {
        const db = await this.getDb();
        let id;
        try {
            id = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongodb$29$__["ObjectId"](projectId);
        } catch  {
            id = projectId;
        }
        await db.collection('projects').updateOne({
            _id: id
        }, {
            $set: {
                progress_percentage: progress
            }
        });
    }
    async deleteTask(taskId) {
        const db = await this.getDb();
        let id;
        try {
            id = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongodb$29$__["ObjectId"](taskId);
        } catch  {
            id = taskId;
        }
        await db.collection('tasks').deleteOne({
            _id: id
        });
    }
    async logActivity(projectId, actionType, metadata, taskId) {
        const db = await this.getDb();
        const activity = {
            project_id: projectId,
            task_id: taskId,
            action_type: actionType,
            metadata,
            timestamp: new Date().toISOString()
        };
        await db.collection('mission_activities').insertOne(activity);
    }
    async getActivityLogs(projectId) {
        const db = await this.getDb();
        const cursor = db.collection('mission_activities').find({
            project_id: projectId
        }).sort({
            timestamp: -1
        });
        const logs = await cursor.toArray();
        return logs.map((l)=>this.sanitize(l));
    }
}
}),
"[project]/apps/backend/services/db/repositories/repository.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/apps/backend/services/db/repositories/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRepository",
    ()=>getRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$backend$2f$services$2f$db$2f$repositories$2f$supabaseRepository$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/backend/services/db/repositories/supabaseRepository.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$backend$2f$services$2f$db$2f$repositories$2f$mongoRepository$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/backend/services/db/repositories/mongoRepository.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$backend$2f$services$2f$db$2f$repositories$2f$repository$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/backend/services/db/repositories/repository.ts [app-route] (ecmascript)");
;
;
function getRepository() {
    const provider = process.env.DB_PROVIDER || 'supabase';
    if (provider === 'mongodb') {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$backend$2f$services$2f$db$2f$repositories$2f$mongoRepository$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MongoRepository"]();
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$backend$2f$services$2f$db$2f$repositories$2f$supabaseRepository$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SupabaseRepository"]();
}
;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$backend$2f$services$2f$db$2f$repositories$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/backend/services/db/repositories/index.ts [app-route] (ecmascript) <locals>");
;
;
const repository = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$backend$2f$services$2f$db$2f$repositories$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getRepository"])();
async function createProject(input) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");
    const payload = {
        ...input,
        user_id: user.id
    };
    return repository.createProject(payload);
}
async function getProjects(userId) {
    return repository.getProjects(userId);
}
async function getProject(project_id) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");
    return repository.getProject(project_id, user.id);
}
}),
"[project]/apps/frontend/app/api/projects/[id]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$backend$2f$services$2f$db$2f$project$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/backend/services/db/project-service.ts [app-route] (ecmascript)");
;
;
async function GET(req, context) {
    try {
        const { id } = await context.params;
        if (!id) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Project ID missing"
            }, {
                status: 400
            });
        }
        const project = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$backend$2f$services$2f$db$2f$project$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getProject"])(id);
        if (!project) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Project not found"
            }, {
                status: 404
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(project);
    } catch (error) {
        console.error("Project fetch error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d44300dd._.js.map