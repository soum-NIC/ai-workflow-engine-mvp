import { NextResponse } from 'next/server';
import { updateTaskStatus } from '@backend/services/db/task-service';

export async function PATCH(req: Request) {
    try {
        const { task_id, status } = await req.json();
        if (!task_id || !status) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }
        const result = await updateTaskStatus(task_id, status);
        return NextResponse.json(result);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
