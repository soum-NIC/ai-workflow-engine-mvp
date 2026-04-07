import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI!;

let client: MongoClient;
let db: Db;

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
    if (client && db) {
        return { client, db };
    }

    if (!uri) {
        throw new Error('Please add your Mongo URI to .env.local');
    }

    client = new MongoClient(uri);
    await client.connect();
    db = client.db('ai_kickoff_workflow');

    return { client, db };
}
