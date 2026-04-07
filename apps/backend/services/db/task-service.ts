import { TaskStatus, Task, TaskExecution } from '../../../../shared/types/task';
import { orchestrateWorkflow } from '../../../../modules/workflows/execution-orchestrator';
import { getRepository } from './repositories';

const repository = getRepository();

export async function updateTaskStatus(task_id: string, status: TaskStatus): Promise<Task> {
    const data = await repository.updateTaskStatus(task_id, status);

    // If a task is manually moved to DONE, orchestrate the next steps and sync progress
    if (status === 'DONE') {
        orchestrateWorkflow(task_id).catch(console.error);
        syncProjectProgress(task_id).catch(console.error);
    }

    return data;
}

export async function saveTaskExecutionResult(task_id: string, ai_result: string): Promise<{ execution: TaskExecution, task: Task }> {
    const result = await repository.saveTaskExecutionResult(task_id, ai_result);

    // Orchestrate next steps in the graph and sync progress
    orchestrateWorkflow(task_id).catch(console.error);
    syncProjectProgress(task_id).catch(console.error);

    return result;
}

export async function saveHumanFeedback(task_id: string, feedback: string): Promise<Task> {
    const task = await repository.saveHumanFeedback(task_id, feedback);

    // Orchestrate next steps in the graph and sync progress
    orchestrateWorkflow(task_id).catch(console.error);
    syncProjectProgress(task_id).catch(console.error);

    return task;
}

async function syncProjectProgress(taskId: string) {
    try {
        const task = await repository.getTask(taskId);
        if (!task || !task.phase_id) return;

        const phase = await repository.getPhase(task.phase_id);
        if (!phase || !phase.project_id) return;

        const projectId = phase.project_id;

        const allTasks = await repository.getTasksByProjectId(projectId);
        if (allTasks.length === 0) return;

        const completedCount = allTasks.filter(t => t.status === 'DONE').length;
        const progress = Math.round((completedCount / allTasks.length) * 100);

        await repository.updateProjectProgress(projectId, progress);
        console.log(`Synced progress for project ${projectId}: ${progress}%`);
    } catch (err) {
        console.error("Failed to sync project progress:", err);
    }
}
