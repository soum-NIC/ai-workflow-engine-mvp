import { getRepository } from '../../apps/backend/services/db/repositories';
import { generateStructuredWorkflow } from '../../engine/validation/structuring-engine';

const repository = getRepository();

export interface WorkflowGenerationInput {
    project_id: string;
    goal_description: string;
    timeline?: string;
    constraints?: string;
}

export async function generateWorkflow({ project_id, goal_description, timeline, constraints }: WorkflowGenerationInput) {
    console.log(`Analyzing goal: ${goal_description}`);

    // 0. Mission Purge: Clear existing architectural data for this project
    await repository.deleteProjectPhases(project_id);

    // 1. Call the AI Workflow Structuring Engine
    const aiOutput = await generateStructuredWorkflow(goal_description, timeline, constraints);

    const titleToIdMap: Record<string, string> = {};
    const tasksWithDependencies: any[] = [];
    const tasksWithParents: any[] = [];

    // 2. Map and Insert Phases & Tasks
    let phaseOrder = 1;
    let taskOrder = 1;

    for (const phaseInput of aiOutput.phases) {
        // Insert Phase
        const phase = await repository.createPhase(project_id, phaseInput.phase_title, phaseOrder++);

        // Insert Tasks
        for (const t of phaseInput.tasks) {
            const payload = {
                phase_id: phase.id,
                title: t.title,
                description: t.description,
                capability: t.capability,
                task_type: t.executor_type, // maps executor_type to task_type
                expected_output: t.expected_output,
                reasoning: t.reasoning,
                task_order: taskOrder,
                graph_order: taskOrder,
                status: t.depends_on ? 'BLOCKED' : 'READY',
                dependency_task_id: null
            };
            taskOrder++;

            const task = await repository.createTask(payload);

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
    for (const dep of tasksWithDependencies) {
        const depId = titleToIdMap[dep.dependency_title];
        if (depId) {
            await repository.updateTask(dep.task_id, { dependency_task_id: depId });
        }
    }

    for (const p of tasksWithParents) {
        const parentId = titleToIdMap[p.parent_title];
        if (parentId) {
            await repository.updateTask(p.task_id, { parent_task_id: parentId });
        }
    }

    return { message: 'Workflow generated successfully' };
}
