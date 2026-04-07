import { getRepository } from '../apps/backend/services/db/repositories/index';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const repository = getRepository();

async function seedMockData() {
    console.log("Seeding Mock Project Dashboard Data...");

    const TEMP_USER_ID = '00000000-0000-0000-0000-000000000000';

    // 1. Create Mock Project
    const project = await repository.createProject({
        user_id: TEMP_USER_ID,
        title: "Mock AI Next.js Platform",
        goal_description: "Build a generic mock SaaS platform to test the dashboard UI and drag-and-drop features seamlessly without generating live API calls.",
        timeline: "1 week",
        constraints: "Strict JSON testing",
    });

    console.log("✅ Created mock project:", project.id);

    // 2. Create Phases
    const phase1 = await repository.createPhase(project.id!, "1. Ideation & Setup", 1);
    const phase2 = await repository.createPhase(project.id!, "2. Core Development", 2);
    const phase3 = await repository.createPhase(project.id!, "3. QA & Launch", 3);

    // 3. Create Tasks
    // Phase 1 Tasks
    const task1 = await repository.createTask({
        phase_id: phase1.id,
        title: "Draft Initial Architecture Document",
        description: "Generate a markdown document outlining the system architecture.",
        task_type: "AI",
        task_order: 1,
        graph_order: 1,
        status: "DONE",
        ai_output: "### Architecture Document\n- **Frontend**: Next.js App Router\n- **Backend**: Supabase PostgreSQL\n- **AI**: Groq LLM"
    });

    const task2 = await repository.createTask({
        phase_id: phase1.id,
        title: "Approve Architecture",
        description: "Review and manually sign off on the AI generated document.",
        task_type: "HUMAN",
        task_order: 2,
        graph_order: 2,
        status: "READY",
        dependency_task_id: task1.id
    });

    // Phase 2 Tasks
    const task3 = await repository.createTask({
        phase_id: phase2.id,
        title: "Scaffold GitHub Repository",
        description: "Run CLI to generate base Next.js boilerplate.",
        task_type: "HUMAN",
        task_order: 3,
        graph_order: 3,
        status: "BLOCKED",
        dependency_task_id: task2.id
    });

    await repository.createTask({
        phase_id: phase2.id,
        title: "Generate Core Styling CSS",
        description: "Build the Tailwind classes for the design system.",
        task_type: "AI",
        task_order: 4,
        graph_order: 4,
        status: "READY"
    });

    // Phase 3 Tasks
    await repository.createTask({
        phase_id: phase3.id,
        title: "Write End to End Tests",
        description: "Generate Playwright tests for the main workflows.",
        task_type: "AI",
        task_order: 5,
        graph_order: 5,
        status: "BLOCKED",
        dependency_task_id: task3.id
    });

    console.log(`✅ Successfully seeded perfectly indexed phase and task data for Project: ${project.id}`);
}

seedMockData().catch(console.error);
