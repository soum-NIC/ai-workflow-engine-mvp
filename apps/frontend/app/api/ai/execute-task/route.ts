import { NextResponse } from 'next/server';
import { executeAITask } from '@modules/workflows/task-execution';

export async function POST(req: Request) {
    try {
        const { task_id } = await req.json();
        if (!task_id) {
            return NextResponse.json({ error: "Missing task_id field" }, { status: 400 });
        }

        const result = await executeAITask(task_id);
        return NextResponse.json(result);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
