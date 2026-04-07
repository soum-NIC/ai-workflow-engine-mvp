import { Task, TaskStatus } from '@shared/types/task';

/**
 * Unified Workflow Execution Engine
 * Single Source of Truth for Hierarchical Graph Computation
 */

export interface EnrichedTask extends Task {
    status_label: string;
    blocked_reason?: string;
}

const STATUS_LABELS: Record<TaskStatus, string> = {
    READY: "Ready to Start",
    BLOCKED: "Waiting on Dependencies",
    RUNNING: "In Progress",
    DONE: "Completed"
};

/**
 * Computes the enriched execution state for a set of tasks.
 * Handles: Multi-dependency resolution, Hierarchical aggregation, and Parent-inheritance blocking.
 */
export function computeWorkflowState(tasks: Task[]): EnrichedTask[] {
    const taskMap = new Map<string, Task>(tasks.map(t => [t.id, t]));

    // 1. Group subtasks
    const parentToChildren = new Map<string, Task[]>();
    tasks.forEach(t => {
        if (t.parent_id) {
            const children = parentToChildren.get(t.parent_id) || [];
            children.push(t);
            parentToChildren.set(t.parent_id, children);
        }
    });

    const blockCache = new Map<string, { blocked: boolean, reason?: string }>();
    const visitingBlock = new Set<string>();

    // 2. Structural Blocking Logic
    const getStructuralBlock = (id: string): { blocked: boolean, reason?: string } => {
        if (blockCache.has(id)) return blockCache.get(id)!;
        if (visitingBlock.has(id)) return { blocked: false };

        const t = taskMap.get(id);
        if (!t) return { blocked: true, reason: "Task definition missing" };

        visitingBlock.add(id);

        // A) Local Dependency Check
        const deps = t.depends_on || [];
        for (const did of deps) {
            const depTask = taskMap.get(did);
            if (depTask?.status !== 'DONE') {
                visitingBlock.delete(id);
                const res = {
                    blocked: true,
                    reason: `Waiting on Dependencies (depends on ${depTask?.title || did})`
                };
                blockCache.set(id, res);
                return res;
            }
        }

        // B) Parent Inheritance Check
        if (t.parent_id) {
            const pBlock = getStructuralBlock(t.parent_id);
            if (pBlock.blocked) {
                visitingBlock.delete(id);
                blockCache.set(id, pBlock);
                return pBlock;
            }
        }

        visitingBlock.delete(id);
        const res = { blocked: false };
        blockCache.set(id, res);
        return res;
    };

    // 3. Status Aggregation Logic
    const statusCache = new Map<string, TaskStatus>();
    const resolveFinalStatus = (id: string): TaskStatus => {
        if (statusCache.has(id)) return statusCache.get(id)!;

        const t = taskMap.get(id);
        if (!t) return 'BLOCKED';

        // Block propagation
        if (getStructuralBlock(id).blocked) {
            statusCache.set(id, 'BLOCKED');
            return 'BLOCKED';
        }

        // Hierarchical Aggregation
        const children = parentToChildren.get(id);
        if (children && children.length > 0) {
            const childStatuses = children.map(c => resolveFinalStatus(c.id));
            let result: TaskStatus;

            if (childStatuses.every(s => s === 'DONE')) result = 'DONE';
            else if (childStatuses.some(s => s === 'RUNNING' || s === 'DONE')) result = 'RUNNING';
            else if (childStatuses.some(s => s === 'READY')) result = 'READY';
            else result = 'BLOCKED';

            statusCache.set(id, result);
            return result;
        }

        // Leaf Node
        const res = t.status as TaskStatus || 'READY';
        statusCache.set(id, res);
        return res;
    };

    // 4. Final Mapping
    return tasks.map(t => {
        const status = resolveFinalStatus(t.id);
        const blockInfo = getStructuralBlock(t.id);

        let status_explanation = "";
        switch (status) {
            case 'BLOCKED':
                status_explanation = blockInfo.reason || "Waiting on Dependencies";
                break;
            case 'READY':
                status_explanation = "Ready to Start (all dependencies completed)";
                break;
            case 'RUNNING':
                status_explanation = "In Progress (executor active)";
                break;
            case 'DONE':
                status_explanation = "Completed (successful execution)";
                break;
        }

        return {
            ...t,
            status,
            level: t.parent_id ? 1 : 0,
            status_label: STATUS_LABELS[status],
            blocked_reason: status === 'BLOCKED' ? blockInfo.reason : undefined,
            status_explanation
        };
    });
}
