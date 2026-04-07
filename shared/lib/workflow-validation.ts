import { Task } from '../types/task';

/**
 * Validation Engine for Hierarchical Workflow Graphs
 */

export interface ValidationResult {
    valid: boolean;
    error?: string;
}

/**
 * Validates a dependency relationship between two Work Items in a hierarchical graph.
 * 
 * @param taskId The ID of the task that will have the dependency
 * @param dependencyId The ID of the prerequisite task
 * @param allTasks The current set of all active tasks in the graph
 * @param newTask Optional: If validating a task currently being created
 */
export function validateDependency(
    taskId: string,
    dependencyId: string,
    allTasks: Task[],
    newTask?: Partial<Task>
): ValidationResult {
    const dep = allTasks.find(t => t.id === dependencyId);
    if (!dep) {
        return { valid: false, error: "Prerequisite Error: The selected dependency does not exist in the current workflow context." };
    }

    if (taskId === dependencyId) {
        return { valid: false, error: "Logical Violation: A work item cannot be a prerequisite for itself." };
    }

    if (isCircular(taskId, dependencyId, allTasks)) {
        return { valid: false, error: "Graph Violation: Circular dependency detected. This would create an infinite execution loop." };
    }

    const currentTask = newTask || allTasks.find(t => t.id === taskId);
    if (currentTask && currentTask.level === 1) {
        if (dep.parent_id !== currentTask.parent_id) {
            return { valid: false, error: "Structural Restriction: Subtasks are currently restricted to dependencies within their own parent task." };
        }
    }

    if (dep.parent_id === taskId) {
        return { valid: false, error: "Hierarchy Violation: A parent task cannot depend on its own subtask." };
    }

    return { valid: true };
}

function isCircular(taskId: string, depId: string, allTasks: Task[]): boolean {
    const taskMap = new Map(allTasks.map(t => [t.id, t]));
    const visited = new Set<string>();

    function check(currentId: string): boolean {
        if (currentId === taskId) return true;
        if (visited.has(currentId)) return false;

        visited.add(currentId);
        const task = taskMap.get(currentId);
        if (!task?.depends_on) return false;

        return task.depends_on.some(nextId => check(nextId));
    }

    return check(depId);
}
