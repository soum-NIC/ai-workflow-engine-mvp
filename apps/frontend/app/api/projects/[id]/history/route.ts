import { NextResponse } from 'next/server';
import { getRepository } from '@backend/services/db/repositories';

const repository = getRepository();

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        if (!id) return NextResponse.json({ error: "Missing project ID" }, { status: 400 });

        const history = await repository.getActivityLogs(id);
        return NextResponse.json(history);
    } catch (error: any) {
        console.error("API Error fetching history:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const { action_type, metadata, task_id } = await req.json();

        if (!id || !action_type) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        await repository.logActivity(id, action_type, metadata, task_id);
        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("API Error logging activity:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
