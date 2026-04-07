import { NextResponse } from 'next/server';
import { getNextBestAction } from '../../../../../modules/workflows/next-action';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const projectId = searchParams.get('project_id');

        if (!projectId) {
            return NextResponse.json({ error: "Missing project_id parameter" }, { status: 400 });
        }

        const result = await getNextBestAction(projectId);
        return NextResponse.json(result);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
