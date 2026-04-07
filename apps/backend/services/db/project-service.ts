import { auth } from '@/auth';
import { Project, NewProjectInput, Phase } from '@shared/types/project';
import { Task } from '@shared/types/task';
import { getRepository } from './repositories';

const repository = getRepository();

export async function createProject(input: Omit<NewProjectInput, 'user_id'>): Promise<Project> {
    const session = await auth();
    const user = session?.user;

    if (!user) throw new Error("Unauthorized");

    const payload: NewProjectInput = {
        ...input,
        user_id: user.id,
    };

    return repository.createProject(payload);
}

export async function getProjects(userId: string): Promise<Project[]> {
    return repository.getProjects(userId);
}

export async function getProject(project_id: string): Promise<{ project: Project, phases: Phase[], tasks: Task[] }> {
    const session = await auth();
    const user = session?.user;

    if (!user) throw new Error("Unauthorized");

    return repository.getProject(project_id, user.id!);
}
