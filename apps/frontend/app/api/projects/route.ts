import { NextResponse } from 'next/server';
import { createProject } from '@backend/services/db/project-service';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const project = await createProject(body);
        return NextResponse.json({ project_id: project.id });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
