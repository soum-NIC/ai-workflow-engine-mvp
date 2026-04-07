import { NextResponse } from 'next/server';
import { getDb } from '@infra/db/mongoClient';

export async function GET() {
    try {
        const db = await getDb();
        const collection = db.collection('test_connection');

        // 1. Insert sample document
        const insertResult = await collection.insertOne({
            message: 'MongoDB Connection Test',
            timestamp: new Date(),
            status: 'success'
        });

        // 2. Fetch the document back
        const document = await collection.findOne({ _id: insertResult.insertedId });

        return NextResponse.json({
            success: true,
            message: 'MongoDB is connected and operational.',
            data: document
        });
    } catch (error: any) {
        console.error('MongoDB Connection Error:', error);
        return NextResponse.json({
            success: false,
            error: error.message || 'Failed to connect to MongoDB'
        }, { status: 500 });
    }
}
