import { getRepository } from '../apps/backend/services/db/repositories/index';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config({ path: 'apps/frontend/.env.local' });

const repository = getRepository();

async function seedDemoProjects() {
    console.log("Seeding Global Demo Projects...");

    const demoProjectsData = [
        {
            title: "Build SaaS MVP",
            goal_description: "A fast-tracked SaaS boilerplate with auth, db, and stripe integrations.",
            timeline: "2 weeks",
            constraints: "Strict budget, open source tools only",
        },
        {
            title: "Launch AI Product",
            goal_description: "Build a wrapper around LLMs to extract insights from raw CSVs.",
            timeline: "1 week",
            constraints: "Must use Llama 3 API",
        },
        {
            title: "Startup Product Roadmap",
            goal_description: "Strategic plan for Q3 feature deployments and marketing.",
            timeline: "1 month",
            constraints: "Coordination across 3 teams required",
        }
    ];

    for (const demoData of demoProjectsData) {
        // 1. Create Mock Demo Project
        const project = await repository.createProject({
            ...demoData,
            user_id: null as any, // Null indicates global demo project
            is_demo_project: true,
        });

        console.log(`✅ Created Demo Project: ${project.title} (${project.id})`);

        // 2. Create Phases
        const phase1 = await repository.createPhase(project.id!, "1. Planning & Design", 1);
        const phase2 = await repository.createPhase(project.id!, "2. Core Development", 2);
        const phase3 = await repository.createPhase(project.id!, "3. QA & Launch", 3);

        // 3. Create Tasks
        // Phase 1 Tasks
        const task1 = await repository.createTask({
            phase_id: phase1.id,
            title: "Architecture & Wireframes",
            description: "Design the core loop and db schema.",
            task_type: "AI",
            task_order: 1,
            graph_order: 1,
            status: "DONE",
            ai_output: "### Architecture Document\n- **Frontend**: Next.js App Router\n- **Backend**: Supabase PostgreSQL"
        });

        const task2 = await repository.createTask({
            phase_id: phase1.id,
            title: "Stakeholder Approval",
            description: "Review architecture.",
            task_type: "HUMAN",
            task_order: 2,
            graph_order: 2,
            status: "READY",
            dependency_task_id: task1.id
        });

        // Phase 2 Tasks
        await repository.createTask({
            phase_id: phase2.id,
            title: "Setup Monorepo",
            description: "Initialize turbo repo and apps.",
            task_type: "HUMAN",
            task_order: 3,
            graph_order: 3,
            status: "RUNNING",
            dependency_task_id: task2.id
        });

        await repository.createTask({
            phase_id: phase2.id,
            title: "Initialize Base Auth",
            description: "Setup Supabase middleware.",
            task_type: "AI",
            task_order: 4,
            graph_order: 4,
            status: "READY"
        });

        console.log(`✅ Created tasks for ${project.title}`);
    }

    console.log("✅ Finished Seeding Demo Projects.");
}

seedDemoProjects().catch(console.error);
