import { getRepository } from '../../apps/backend/services/db/repositories';
import { Task } from '../../shared/types/task';
import { executeAITask } from './task-execution';

const repository = getRepository();

export async function orchestrateWorkflow(completedTaskId: string) {
    console.log(`Orchestrating workflow after completion of task: ${completedTaskId}`);

    // 1. Find directly dependent tasks
    const dependents = await repository.getDependentTasks(completedTaskId);

    if (!dependents || dependents.length === 0) return;

    for (const task of dependents) {
        // Since we currently support 1:1 dependency via dependency_task_id,
        // completing the parent makes the child READY.

        console.log(`Unblocking task: ${task.title} (${task.id})`);

        const initialStatus = task.task_type === 'AI' ? 'RUNNING' : 'READY';
        const updatedTask = await repository.updateTaskStatus(task.id, initialStatus);

        // 2. Auto-trigger AI tasks
        if (updatedTask.task_type === 'AI') {
            console.log(`Auto-triggering AI execution for: ${updatedTask.title}`);
            try {
                // We call executeAITask which also calls orchestrateWorkflow recursively for its own dependents
                await executeAITask(updatedTask.id);
            } catch (err) {
                console.error(`Auto-execution failed for task ${updatedTask.id}:`, err);
            }
        }
    }
}
