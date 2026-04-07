import { IDataRepository } from './repository';
import { Project, NewProjectInput, Phase } from '../../../../../shared/types/project';
import { Task, TaskStatus, TaskExecution } from '../../../../../shared/types/task';
import { supabase as defaultClient } from '../../../../../infra/db/supabase';

export class SupabaseRepository implements IDataRepository {
    private client;

    constructor(client = defaultClient) {
        this.client = client;
    }

    private isUuid(id: string): boolean {
        // More inclusive regex for any 8-4-4-4-12 hex string
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        return uuidRegex.test(id);
    }

    async createProject(input: NewProjectInput): Promise<Project> {
        const { data, error } = await this.client
            .from('projects')
            .insert([input])
            .select()
            .single();

        if (error) throw new Error(`Supabase error creating project: ${error.message}`);
        return data as Project;
    }

    async getProjects(userId: string): Promise<Project[]> {
        const { data, error } = await this.client
            .from('projects')
            .select('*')
            .or(`is_demo_project.eq.true,user_id.eq.${userId}`)
            .order('created_at', { ascending: false });

        if (error) throw new Error(`Supabase error fetching projects: ${error.message}`);
        return data as Project[];
    }

    async getProject(projectId: string, userId: string): Promise<{ project: Project, phases: Phase[], tasks: Task[] }> {
        const { data: project, error: pError } = await this.client
            .from('projects')
            .select('*')
            .eq('id', projectId)
            .or(`is_demo_project.eq.true,user_id.eq.${userId}`)
            .single();

        if (pError || !project) throw new Error(`Project not found or unauthorized`);

        const { data: phases, error: phError } = await this.client
            .from('phases')
            .select('*')
            .eq('project_id', projectId)
            .order('phase_order', { ascending: true });

        if (phError) throw new Error(`Failed to fetch phases: ${phError.message}`);

        const phaseIds = phases ? phases.map((p: any) => p.id) : [];
        let tasks: Task[] = [];

        if (phaseIds.length > 0) {
            const { data: tData, error: tError } = await this.client
                .from('tasks')
                .select('*')
                .in('phase_id', phaseIds)
                .order('task_order', { ascending: true });

            if (tError) throw new Error(`Failed to fetch tasks: ${tError.message}`);
            tasks = tData as Task[];
        }

        return { project: project as Project, phases: phases as Phase[], tasks };
    }

    async deleteProjectPhases(projectId: string): Promise<void> {
        const { data: phases } = await this.client.from('phases').select('id').eq('project_id', projectId);
        if (phases && phases.length > 0) {
            const phaseIds = phases.map((p: any) => p.id);
            await this.client.from('tasks').delete().in('phase_id', phaseIds);
            await this.client.from('phases').delete().eq('project_id', projectId);
        }
    }

    async createPhase(projectId: string, title: string, order: number): Promise<Phase> {
        const { data, error } = await this.client.from('phases').insert([{
            project_id: projectId,
            phase_title: title,
            phase_order: order
        }]).select().single();

        if (error) throw new Error(`Supabase error creating phase: ${error.message}`);
        return data as Phase;
    }

    async createTask(payload: any): Promise<Task> {
        const { data, error } = await this.client.from('tasks').insert([payload]).select().single();
        if (error) throw new Error(`Supabase error creating task: ${error.message}`);
        return data as Task;
    }

    async updateTask(taskId: string, payload: any): Promise<Task> {
        if (!this.isUuid(taskId)) {
            console.log(`Skipping DB update for local-only Task: ${taskId}`);
            return payload as Task;
        }
        const { data, error } = await this.client.from('tasks').update(payload).eq('id', taskId).select().single();
        if (error) throw new Error(`Supabase error updating task: ${error.message}`);
        return data as Task;
    }

    async getTask(taskId: string): Promise<Task> {
        if (!this.isUuid(taskId)) throw new Error(`Task ${taskId} is local-only`);
        const { data, error } = await this.client.from('tasks').select('*').eq('id', taskId).single();
        if (error) throw new Error(`Supabase error fetching task: ${error.message}`);
        return data as Task;
    }

    async getPhase(phaseId: string): Promise<Phase> {
        const { data, error } = await this.client.from('phases').select('*').eq('id', phaseId).single();
        if (error) throw new Error(`Supabase error fetching phase: ${error.message}`);
        return data as Phase;
    }

    async getProjectOnly(projectId: string): Promise<Project> {
        const { data, error } = await this.client.from('projects').select('*').eq('id', projectId).single();
        if (error) throw new Error(`Supabase error fetching project: ${error.message}`);
        return data as Project;
    }

    async getDependentTasks(completedTaskId: string): Promise<Task[]> {
        if (!this.isUuid(completedTaskId)) return [];
        const { data, error } = await this.client.from('tasks').select('*').eq('dependency_task_id', completedTaskId);
        if (error) throw new Error(`Supabase error fetching dependent tasks: ${error.message}`);
        return data as Task[];
    }

    async updateTaskStatus(taskId: string, status: TaskStatus): Promise<Task> {
        if (!this.isUuid(taskId)) return { id: taskId, status } as Task;
        const { data, error } = await this.client
            .from('tasks')
            .update({ status })
            .eq('id', taskId)
            .select()
            .single();

        if (error) throw new Error(`Supabase error updating task status: ${error.message}`);
        return data as Task;
    }

    async saveTaskExecutionResult(taskId: string, aiResult: string): Promise<{ execution: TaskExecution, task: Task }> {
        const { data: execution, error: execError } = await this.client
            .from('task_executions')
            .insert([{ task_id: taskId, ai_result: aiResult }])
            .select()
            .single();

        if (execError) throw new Error(`Failed to save execution: ${execError.message}`);

        const { data: task, error: taskError } = await this.client
            .from('tasks')
            .update({ ai_output: aiResult, status: 'DONE' })
            .eq('id', taskId)
            .select()
            .single();

        if (taskError) throw new Error(`Failed to update task: ${taskError.message}`);

        return { execution: execution as TaskExecution, task: task as Task };
    }

    async saveHumanFeedback(taskId: string, feedback: string): Promise<Task> {
        if (!this.isUuid(taskId)) return { id: taskId, status: 'DONE', ai_output: feedback } as Task;
        const { data: task, error: taskError } = await this.client
            .from('tasks')
            .update({ ai_output: feedback, status: 'DONE' })
            .eq('id', taskId)
            .select()
            .single();

        if (taskError) throw new Error(`Failed to save feedback: ${taskError.message}`);
        return task as Task;
    }

    async getTasksByProjectId(projectId: string): Promise<Task[]> {
        const { data: phases } = await this.client.from('phases').select('id').eq('project_id', projectId);
        const phaseIds = phases ? phases.map((p: any) => p.id) : [];

        if (phaseIds.length === 0) return [];

        const { data, error } = await this.client
            .from('tasks')
            .select('*')
            .in('phase_id', phaseIds);

        if (error) throw new Error(`Supabase error fetching tasks: ${error.message}`);
        return data as Task[];
    }

    async updateProjectProgress(projectId: string, progress: number): Promise<void> {
        const { error } = await this.client
            .from('projects')
            .update({ progress_percentage: progress })
            .eq('id', projectId);

        if (error) throw new Error(`Supabase error updating project progress: ${error.message}`);
    }

    async deleteTask(taskId: string): Promise<void> {
        const { error } = await this.client.from('tasks').delete().eq('id', taskId);
        if (error) throw new Error(`Supabase error deleting task: ${error.message}`);
    }

    async logActivity(projectId: string, actionType: string, metadata: any, taskId?: string): Promise<void> {
        const { error } = await this.client
            .from('mission_activities')
            .insert([{
                project_id: projectId,
                task_id: taskId,
                action_type: actionType,
                metadata,
                timestamp: new Date().toISOString()
            }]);
        if (error) console.error(`Failed to log activity: ${error.message}`);
    }

    async getActivityLogs(projectId: string): Promise<any[]> {
        const { data, error } = await this.client
            .from('mission_activities')
            .select('*')
            .eq('project_id', projectId)
            .order('timestamp', { ascending: false });

        if (error) throw new Error(`Failed to fetch activity logs: ${error.message}`);
        return data || [];
    }

    async findUserByEmail(email: string): Promise<any | null> {
        return null;
    }

    async createUser(userData: any): Promise<any> {
        return userData;
    }
}
