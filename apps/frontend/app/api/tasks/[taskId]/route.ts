import { NextResponse } from 'next/server';
import { getRepository } from '@backend/services/db/repositories';

const repository = getRepository();

export async function PATCH(req: Request, { params }: { params: Promise<{ taskId: string }> }) {
    try {
        const { taskId } = await params;
        const payload = await req.json();

        if (!taskId) {
            return NextResponse.json({ error: "Missing task ID" }, { status: 400 });
        }

        const updatedTask = await repository.updateTask(taskId, payload);
        return NextResponse.json(updatedTask);
    } catch (error: any) {
        console.error("API Error updating task:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ taskId: string }> }) {
    try {
        const { taskId } = await params;
        if (!taskId) {
            return NextResponse.json({ error: "Missing task ID" }, { status: 400 });
        }

        await repository.deleteTask(taskId);
        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("API Error deleting task:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
