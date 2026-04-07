import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load .env.local from apps/frontend
dotenv.config({ path: path.resolve(__dirname, '../apps/frontend/.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function deactivateProjects() {
    console.log("Fetching projects...");
    const { data: projects, error } = await supabase
        .from('projects')
        .select('id, title, is_demo_project, status');

    if (error) {
        console.error("Error fetching projects:", error);
        return;
    }

    console.log(`Found ${projects.length} projects.`);

    const demoProjects = projects.filter(p => p.is_demo_project);
    const nonDemoProjects = projects.filter(p => !p.is_demo_project);

    console.log("Demo Projects:", demoProjects.map(p => p.title));
    console.log("Non-Demo Projects to deactivate:", nonDemoProjects.length);

    for (const project of nonDemoProjects) {
        console.log(`Deleting: ${project.title} (${project.id})...`);
        const { error: deleteError } = await supabase
            .from('projects')
            .delete()
            .eq('id', project.id);

        if (deleteError) {
            console.error(`Failed to delete ${project.title}:`, deleteError.message);
        }
    }

    console.log("Done.");
}

deactivateProjects();
