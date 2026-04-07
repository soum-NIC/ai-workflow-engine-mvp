export type TaskType = 'AI' | 'HUMAN';
export type TaskStatus = 'READY' | 'BLOCKED' | 'RUNNING' | 'DONE';

export interface Task {
    id: string;
    phase_id: string;
    title: string;
    description?: string;
    capability?: string;
    task_type: TaskType;
    expected_output?: string;
    reasoning?: string;
    status: TaskStatus;
    task_order: number;
    graph_order?: number;
    depends_on: string[]; // List of Work Item IDs
    parent_id?: string; // Parent Work Item ID (Level 0)
    level?: 0 | 1; // 0 = task, 1 = sub-task (Derived UI property)
    ai_output?: string;
    created_at: string;
    meta: {
        source: 'AI' | 'USER' | 'AI_STRATEGIST';
        is_removed: boolean;
    };
    status_label?: string;
    blocked_reason?: string;
    status_explanation?: string;
    attachments?: { id: string; name: string; url: string; size: number; uploaded_at: string }[];
    findings?: { id: string; text: string; author: string; created_at: string }[];
}

export interface TaskExecution {
    id: string;
    task_id: string;
    ai_result: string;
    executed_at: string;
}
