import { NextResponse } from 'next/server';
import { getRepository } from '@/../../apps/backend/services/db/repositories';

export async function POST(req: Request) {
    try {
        const payload = await req.json();
        const repo = getRepository();
        // payload should contain project_id, phase_id, title, description, task_type, etc.
        const task = await repo.createTask(payload);
        return NextResponse.json(task);
    } catch (error: any) {
        console.error('Failed to create task:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
