import { Task } from '../types/task';

export interface ConfidenceScore {
    score: number;
    factors: {
        dependency: number;
        executability: number;
        logic: number;
        completeness: number;
        pattern: number;
        user_impact: number;
    };
    risky_changes: {
        taskId: string;
        type: 'CIRCULAR' | 'BREAK' | 'ORPHAN';
        severity: 'HIGH' | 'MEDIUM' | 'LOW';
        description: string;
    }[];
}

export function calculateWorkflowConfidence(tasks: Task[]): ConfidenceScore {
    let highRiskCount = 0;
    let mediumRiskCount = 0;
    const riskyChanges: ConfidenceScore['risky_changes'] = [];

    // 1. Detect Risky Changes
    const taskMap = new Map(tasks.map(t => [t.id, t]));

    tasks.forEach(task => {
        // Check for broken dependencies
        task.depends_on.forEach(depId => {
            if (!taskMap.has(depId)) {
                highRiskCount++;
                riskyChanges.push({
                    taskId: task.id,
                    type: 'BREAK',
                    severity: 'HIGH',
                    description: `Task depends on missing ID: ${depId}`
                });
            }
        });

        // Check for circular dependencies (simple depth-limited check)
        if (hasCircularDependency(task.id, taskMap)) {
            highRiskCount++;
            riskyChanges.push({
                taskId: task.id,
                type: 'CIRCULAR',
                severity: 'HIGH',
                description: `Circular dependency detected starting at ${task.title}`
            });
        }

        // Medium risk: Orphan subtasks (Level 1 without parent)
        if (task.level === 1 && (!task.parent_id || !taskMap.has(task.parent_id))) {
            mediumRiskCount++;
            riskyChanges.push({
                taskId: task.id,
                type: 'ORPHAN',
                severity: 'MEDIUM',
                description: `Sub-task "${task.title}" is missing its parent task.`
            });
        }
    });

    // 2. Calculate User Impact Score
    // Score = 100 - (high * 25) - (medium * 10)
    const userImpact = Math.max(0, 100 - (highRiskCount * 25) - (mediumRiskCount * 10));

    // 3. Aggregate Other Factors (Simulated logic/completeness for this phase)
    const baseScore = 100;
    const factors = {
        dependency: tasks.every(t => t.depends_on.length > 0 || (t.level === 0 && t.task_order === 1)) ? 100 : 80,
        executability: tasks.every(t => t.task_type) ? 100 : 70,
        logic: userImpact > 70 ? 95 : 60,
        completeness: tasks.length > 3 ? 100 : 50,
        pattern: 90,
        user_impact: userImpact
    };

    // Final Score calculation
    const score = Math.round(
        (factors.dependency * 0.2) +
        (factors.executability * 0.2) +
        (factors.logic * 0.2) +
        (factors.completeness * 0.1) +
        (factors.pattern * 0.1) +
        (factors.user_impact * 0.2)
    );

    return {
        score,
        factors,
        risky_changes: riskyChanges
    };
}

function hasCircularDependency(taskId: string, taskMap: Map<string, Task>, visited = new Set<string>()): boolean {
    if (visited.has(taskId)) return true;
    if (visited.size > taskMap.size) return false; // Safety break

    visited.add(taskId);
    const task = taskMap.get(taskId);
    if (!task) return false;

    for (const depId of task.depends_on) {
        if (hasCircularDependency(depId, taskMap, new Set(visited))) {
            return true;
        }
    }
    return false;
}
