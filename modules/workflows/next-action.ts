import { getProject } from '../../apps/backend/services/db/project-service';
import { Task } from '@shared/types/task';
import { computeWorkflowState } from '../../engine/execution/unified-engine';

export async function getNextBestAction(project_id: string, customTasks?: Task[]) {
    let tasks: Task[] = [];
    if (customTasks && customTasks.length > 0) {
        tasks = customTasks;
    } else {
        const project = await getProject(project_id);
        tasks = project.tasks || [];
    }

    // Unify state first
    const recomputed = computeWorkflowState(tasks);

    if (!tasks || tasks.length === 0) {
        return {
            next_task: null,
            reasoning: "No tasks available yet."
        };
    }

    const executableTasks = recomputed.filter(t => t.status === 'READY');

    if (executableTasks.length === 0) {
        // Check if all tasks are DONE
        const allDone = recomputed.every(t => t.status === 'DONE');
        return {
            next_task: null,
            reasoning: allDone
                ? "All tasks in the workflow have been successfully completed."
                : "Awaiting completion of prerequisite tasks."
        };
    }

    // 2. Prioritize AI tasks over HUMAN tasks for the next action recommendation
    executableTasks.sort((a, b) => {
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
        reason = `Strategic human intervention required. Prerequisites are cleared, allowing you to focus on ${recommendedTask.capability || 'this validation'} step.`;
    }

    // Add specific dependency reasoning if applicable
    if (recommendedTask.status === 'BLOCKED' && recommendedTask.blocked_reason) {
        reason += ` (${recommendedTask.blocked_reason})`;
    }

    return {
        next_task: recommendedTask,
        reasoning: reason
    };
}

