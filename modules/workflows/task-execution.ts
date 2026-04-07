import { getRepository } from '../../apps/backend/services/db/repositories';
import { saveTaskExecutionResult } from '../../apps/backend/services/db/task-service';
import { Task } from '../../shared/types/task';
import { executeTaskWithAI } from '../../engine/execution/execution-engine';

const repository = getRepository();

export async function executeAITask(task_id: string) {
    // 1. Fetch Task Details to pass the context to the AI
    const t = await repository.getTask(task_id);

    if (t.task_type !== 'AI') {
        throw new Error('Only AI tasks can be executed autonomously.');
    }

    // 2. Set Status to RUNNING so the UI reflects active work
    await repository.updateTaskStatus(task_id, 'RUNNING');

    // 3. Fetch the corresponding Project to get the Goal
    const phase = await repository.getPhase(t.phase_id);
    const project = await repository.getProjectOnly(phase.project_id);

    // 3. Execute AI Task via the Execution Engine
    const aiResult = await executeTaskWithAI({
        task_title: t.title,
        task_description: t.description || '',
        project_goal: project.goal_description
    });

    // 4. Save Execution and Update Database Status
    const { execution, task: updatedTask } = await saveTaskExecutionResult(task_id, aiResult);

    return updatedTask;
}
