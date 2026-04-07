import { NextResponse } from "next/server";
import { getProject } from "../../../services/db/project-service";

export async function GET(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;

        if (!id) {
            return NextResponse.json(
                { error: "Project ID missing" },
                { status: 400 }
            );
        }

        const project = await getProject(id);

        if (!project) {
            return NextResponse.json(
                { error: "Project not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(project);
    } catch (error: any) {
        console.error("Project fetch error:", error);
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}
