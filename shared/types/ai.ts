export interface AIWorkflowOutput {
    phases: {
        phase_title: string;
        tasks: {
            title: string;
            description: string;
            capability: string;
            executor_type: 'AI' | 'HUMAN';
            expected_output: string;
            depends_on: string | null;
            parent_task_title?: string | null;
            reasoning: string;
        }[];
    }[];
}

export interface AINextActionOutput {
    next_task: string | null;
    reasoning: string;
}
