import { NextResponse } from 'next/server';
import { getRepository } from '../../../services/db/repositories';

const repository = getRepository();

export async function PATCH(req: Request) {
    try {
        const { task_id, dependency_task_id, graph_order } = await req.json();

        if (!task_id) {
            return NextResponse.json({ error: "Task ID missing" }, { status: 400 });
        }

        const updates: any = {};
        if (dependency_task_id !== undefined) updates.dependency_task_id = dependency_task_id || null;
        if (graph_order !== undefined) updates.graph_order = graph_order;

        const data = await repository.updateTask(task_id, updates);

        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
