import { getRepository } from '../apps/backend/services/db/repositories/index';

async function testRepository() {
    process.env.DB_PROVIDER = 'supabase';
    const supabaseRepo = getRepository();
    console.log('Provider: supabase, Repo instance:', supabaseRepo.constructor.name);

    process.env.DB_PROVIDER = 'mongodb';
    const mongoRepo = getRepository();
    console.log('Provider: mongodb, Repo instance:', mongoRepo.constructor.name);

    // Test a basic call (this will fail if not connected/auth, but we can check the call flow)
    try {
        console.log('Testing Supabase project fetch...');
        // We don't have a valid user ID here, so it should throw "unauthorized" or similar
        await supabaseRepo.getProjects('test-user');
    } catch (e: any) {
        console.log('Supabase check (expected error or success):', e.message);
    }
}

testRepository().catch(console.error);
