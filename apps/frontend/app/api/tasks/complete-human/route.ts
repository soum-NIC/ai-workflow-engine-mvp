import { NextResponse } from 'next/server';
import { saveHumanFeedback } from '@backend/services/db/task-service';

export async function POST(req: Request) {
    try {
        const { task_id, feedback } = await req.json();

        if (!task_id) {
            return NextResponse.json({ error: "Missing required task_id" }, { status: 400 });
        }

        const result = await saveHumanFeedback(task_id, feedback || 'Task completed manually by human executor.');
        return NextResponse.json(result);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
