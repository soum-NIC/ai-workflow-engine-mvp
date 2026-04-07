import { IDataRepository } from './repository';
import { SupabaseRepository } from './supabaseRepository';
import { MongoRepository } from './mongoRepository';

export function getRepository(): IDataRepository {
    const provider = process.env.DB_PROVIDER || 'supabase';

    if (provider === 'mongodb') {
        return new MongoRepository();
    }

    return new SupabaseRepository();
}

export * from './repository';
