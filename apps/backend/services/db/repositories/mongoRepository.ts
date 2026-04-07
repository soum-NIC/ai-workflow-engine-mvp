import { IDataRepository } from './repository';
import { Project, NewProjectInput, Phase } from '../../../../../shared/types/project';
import { Task, TaskStatus, TaskExecution } from '../../../../../shared/types/task';
import { connectToDatabase } from '../../../../../infra/db/mongodb';
import { ObjectId } from 'mongodb';

export class MongoRepository implements IDataRepository {
    private async getDb() {
        const { db } = await connectToDatabase();
        return db;
    }

    private sanitize<T>(doc: any): T {
        if (!doc) return doc;
        const { _id, ...rest } = doc;
        const sanitized: any = { ...rest, id: _id ? _id.toString() : doc.id };

        // Ensure array fields exist
        if (sanitized.depends_on === undefined) sanitized.depends_on = [];

        // Convert any Date objects to ISO strings to avoid Next.js serialization errors
        Object.keys(sanitized).forEach(key => {
            if (sanitized[key] instanceof Date) {
                sanitized[key] = sanitized[key].toISOString();
            }
        });

        return sanitized as T;
    }

    async createProject(input: NewProjectInput): Promise<Project> {
        const db = await this.getDb();
        const project: any = {
            ...input,
            status: 'active',
            progress_percentage: 0,
            created_at: new Date().toISOString(),
        };
        await db.collection('projects').insertOne(project);
        return this.sanitize<Project>(project);
    }

    async getProjects(userId: string): Promise<Project[]> {
        const db = await this.getDb();
        const cursor = db.collection('projects').find({
            $or: [
                { is_demo_project: true },
                { user_id: userId }
            ]
        }).sort({ created_at: -1 });

        const projects = await cursor.toArray();
        return projects.map(p => this.sanitize<Project>(p));
    }

    async getProject(projectId: string, userId: string): Promise<{ project: Project, phases: Phase[], tasks: Task[] }> {
        const db = await this.getDb();

        let id;
        try {
            id = new ObjectId(projectId);
        } catch {
            id = projectId;
        }

        const project = await db.collection('projects').findOne({
            _id: id as any,
            $or: [
                { is_demo_project: true },
                { user_id: userId }
            ]
        });

        if (!project) throw new Error('Project not found or unauthorized');

        const phases = await db.collection('phases').find({ project_id: projectId }).sort({ phase_order: 1 }).toArray();
        const phaseIds = phases.map(p => p._id.toString());

        let tasks: any[] = [];
        if (phaseIds.length > 0) {
            tasks = await db.collection('tasks').find({ phase_id: { $in: phaseIds } }).sort({ task_order: 1 }).toArray();
        }

        return {
            project: this.sanitize<Project>(project),
            phases: phases.map(p => this.sanitize<Phase>(p)),
            tasks: tasks.map(t => this.sanitize<Task>(t))
        };
    }

    async deleteProjectPhases(projectId: string): Promise<void> {
        const db = await this.getDb();
        const phases = await db.collection('phases').find({ project_id: projectId }).toArray();
        if (phases.length > 0) {
            const phaseIds = phases.map(p => p._id);
            await db.collection('tasks').deleteMany({ phase_id: { $in: phaseIds } });
            await db.collection('phases').deleteMany({ project_id: projectId });
        }
    }

    async createPhase(projectId: string, title: string, order: number): Promise<Phase> {
        const db = await this.getDb();
        const phase: any = {
            project_id: projectId,
            phase_title: title,
            phase_order: order,
            created_at: new Date().toISOString()
        };
        await db.collection('phases').insertOne(phase);
        return this.sanitize<Phase>(phase);
    }

    async createTask(payload: any): Promise<Task> {
        const db = await this.getDb();
        const task: any = {
            ...payload,
            created_at: new Date().toISOString()
        };
        await db.collection('tasks').insertOne(task);
        return this.sanitize<Task>(task);
    }

    async updateTask(taskId: string, payload: any): Promise<Task> {
        const db = await this.getDb();
        let id;
        try { id = new ObjectId(taskId); } catch { id = taskId; }

        const result = await db.collection('tasks').findOneAndUpdate(
            { _id: id as any },
            { $set: payload },
            { returnDocument: 'after' }
        );
        if (!result) throw new Error('Task not found');
        return this.sanitize<Task>(result);
    }

    async getTask(taskId: string): Promise<Task> {
        const db = await this.getDb();
        let id;
        try { id = new ObjectId(taskId); } catch { id = taskId; }
        const task = await db.collection('tasks').findOne({ _id: id as any });
        if (!task) throw new Error('Task not found');
        return this.sanitize<Task>(task);
    }

    async getPhase(phaseId: string): Promise<Phase> {
        const db = await this.getDb();
        let id;
        try { id = new ObjectId(phaseId); } catch { id = phaseId; }
        const phase = await db.collection('phases').findOne({ _id: id as any });
        if (!phase) throw new Error('Phase not found');
        return this.sanitize<Phase>(phase);
    }

    async getProjectOnly(projectId: string): Promise<Project> {
        const db = await this.getDb();
        let id;
        try { id = new ObjectId(projectId); } catch { id = projectId; }
        const project = await db.collection('projects').findOne({ _id: id as any });
        if (!project) throw new Error('Project not found');
        return this.sanitize<Project>(project);
    }

    async getDependentTasks(completedTaskId: string): Promise<Task[]> {
        const db = await this.getDb();
        const tasks = await db.collection('tasks').find({ dependency_task_id: completedTaskId }).toArray();
        return tasks.map(t => this.sanitize<Task>(t));
    }

    async updateTaskStatus(taskId: string, status: TaskStatus): Promise<Task> {
        const db = await this.getDb();
        let id;
        try { id = new ObjectId(taskId); } catch { id = taskId; }

        const result = await db.collection('tasks').findOneAndUpdate(
            { _id: id as any },
            { $set: { status } },
            { returnDocument: 'after' }
        );

        if (!result) throw new Error('Task not found');
        return this.sanitize<Task>(result);
    }

    async saveTaskExecutionResult(taskId: string, aiResult: string): Promise<{ execution: TaskExecution, task: Task }> {
        const db = await this.getDb();
        let id;
        try { id = new ObjectId(taskId); } catch { id = taskId; }

        const execution: any = {
            task_id: taskId,
            ai_result: aiResult,
            executed_at: new Date().toISOString()
        };
        await db.collection('task_executions').insertOne(execution);

        const taskResult = await db.collection('tasks').findOneAndUpdate(
            { _id: id as any },
            { $set: { ai_output: aiResult, status: 'DONE' } },
            { returnDocument: 'after' }
        );

        if (!taskResult) throw new Error('Task not found');

        return {
            execution: this.sanitize<TaskExecution>(execution),
            task: this.sanitize<Task>(taskResult)
        };
    }

    async saveHumanFeedback(taskId: string, feedback: string): Promise<Task> {
        const db = await this.getDb();
        let id;
        try { id = new ObjectId(taskId); } catch { id = taskId; }

        const taskResult = await db.collection('tasks').findOneAndUpdate(
            { _id: id as any },
            { $set: { ai_output: feedback, status: 'DONE' } },
            { returnDocument: 'after' }
        );

        if (!taskResult) throw new Error('Task not found');
        return this.sanitize<Task>(taskResult);
    }

    async getTasksByProjectId(projectId: string): Promise<Task[]> {
        const db = await this.getDb();
        const phases = await db.collection('phases').find({ project_id: projectId }).toArray();
        const phaseIds = phases.map(p => p._id.toString());

        if (phaseIds.length === 0) return [];

        const tasks = await db.collection('tasks').find({ phase_id: { $in: phaseIds } }).toArray();
        return tasks.map(t => this.sanitize<Task>(t));
    }

    async updateProjectProgress(projectId: string, progress: number): Promise<void> {
        const db = await this.getDb();
        let id;
        try { id = new ObjectId(projectId); } catch { id = projectId; }
        await db.collection('projects').updateOne(
            { _id: id as any },
            { $set: { progress_percentage: progress } }
        );
    }

    async deleteTask(taskId: string): Promise<void> {
        const db = await this.getDb();
        let id;
        try { id = new ObjectId(taskId); } catch { id = taskId; }
        await db.collection('tasks').deleteOne({ _id: id as any });
    }

    async logActivity(projectId: string, actionType: string, metadata: any, taskId?: string): Promise<void> {
        const db = await this.getDb();
        const activity: any = {
            project_id: projectId,
            task_id: taskId,
            action_type: actionType,
            metadata,
            timestamp: new Date().toISOString()
        };
        await db.collection('mission_activities').insertOne(activity);
    }

    async getActivityLogs(projectId: string): Promise<any[]> {
        const db = await this.getDb();
        const cursor = db.collection('mission_activities')
            .find({ project_id: projectId })
            .sort({ timestamp: -1 });

        const logs = await cursor.toArray();
        return logs.map(l => this.sanitize<any>(l));
    }

    async findUserByEmail(email: string): Promise<any | null> {
        const db = await this.getDb();
        const user = await db.collection('users').findOne({ email });
        return user ? this.sanitize<any>(user) : null;
    }

    async createUser(userData: any): Promise<any> {
        const db = await this.getDb();
        const user = {
            ...userData,
            auth_providers: userData.auth_providers || ["email"],
            created_at: new Date().toISOString()
        };
        await db.collection('users').insertOne(user);
        return this.sanitize<any>(user);
    }
}
