import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), 'apps/frontend/.env.local') });

const uri = process.env.MONGODB_URI;

async function checkIndexes() {
    if (!uri) {
        console.error('MONGODB_URI not found');
        return;
    }
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const dbs = await client.db().admin().listDatabases();
        console.log('Available Databases:', dbs.databases.map(d => d.name));

        const dbNames = dbs.databases.map(d => d.name);

        for (const dbName of dbNames) {
            const db = client.db(dbName);
            const collections = await db.listCollections().toArray();
            const collectionNames = collections.map(c => c.name);

            if (collectionNames.includes('users')) {
                console.log(`\nFound 'users' in: ${dbName}`);
                const indexes = await db.collection('users').indexes();
                console.log(`Indexes for 'users' in ${dbName}:`, JSON.stringify(indexes, null, 2));

                const userCount = await db.collection('users').countDocuments();
                console.log(`User count in ${dbName}: ${userCount}`);
            }
        }
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

checkIndexes();
