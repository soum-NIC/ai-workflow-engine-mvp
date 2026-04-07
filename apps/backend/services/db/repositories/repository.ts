import { Project, NewProjectInput, Phase } from '../../../../../shared/types/project';
import { Task, TaskStatus, TaskExecution } from '../../../../../shared/types/task';

export interface IDataRepository {
    // Project operations
    createProject(input: NewProjectInput): Promise<Project>;
    getProjects(userId: string): Promise<Project[]>;
    getProject(projectId: string, userId: string): Promise<{ project: Project, phases: Phase[], tasks: Task[] }>;

    // Workflow/Phase operations
    deleteProjectPhases(projectId: string): Promise<void>;
    createPhase(projectId: string, title: string, order: number): Promise<Phase>;
    createTask(payload: any): Promise<Task>;
    updateTask(taskId: string, payload: any): Promise<Task>;
    getTask(taskId: string): Promise<Task>;
    getPhase(phaseId: string): Promise<Phase>;
    getProjectOnly(projectId: string): Promise<Project>;
    getDependentTasks(completedTaskId: string): Promise<Task[]>;

    // Task operations
    updateTaskStatus(taskId: string, status: TaskStatus): Promise<Task>;
    saveTaskExecutionResult(taskId: string, aiResult: string): Promise<{ execution: TaskExecution, task: Task }>;
    saveHumanFeedback(taskId: string, feedback: string): Promise<Task>;
    getTasksByProjectId(projectId: string): Promise<Task[]>;
    updateProjectProgress(projectId: string, progress: number): Promise<void>;
    deleteTask(taskId: string): Promise<void>;

    // Activity Log operations
    logActivity(projectId: string, actionType: string, metadata: any, taskId?: string): Promise<void>;
    getActivityLogs(projectId: string): Promise<any[]>;

    // User operations
    findUserByEmail(email: string): Promise<any | null>;
    createUser(userData: any): Promise<any>;
}
