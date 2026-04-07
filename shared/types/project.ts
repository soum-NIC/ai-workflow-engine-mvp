export interface Project {
    id: string;
    user_id?: string | null;
    is_demo_project?: boolean;
    title: string;
    goal_description: string;
    timeline?: string;
    constraints?: string;
    status: 'active' | 'completed' | 'inactive';
    progress_percentage: number;
    created_at: string;
}

export interface Phase {
    id: string;
    project_id: string;
    phase_title: string;
    phase_order: number;
    created_at: string;
}

export type NewProjectInput = Omit<Project, 'id' | 'status' | 'progress_percentage' | 'created_at'>;
