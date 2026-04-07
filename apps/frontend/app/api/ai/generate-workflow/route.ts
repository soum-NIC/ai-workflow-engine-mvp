import { NextResponse } from 'next/server';
import { generateWorkflow } from '@modules/workflows/project-creation';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const result = await generateWorkflow(body);
        return NextResponse.json(result);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
