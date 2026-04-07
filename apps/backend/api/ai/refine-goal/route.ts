import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { goal } = await req.json();
        const groqApiKey = process.env.GROQ_API_KEY;

        if (!groqApiKey) {
            // Mock behavior if no API key
            return NextResponse.json({
                refinedGoal: `Refined: ${goal}. Build a comprehensive digital platform targeting specialized user operations and strategic management.`
            });
        }

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${groqApiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama-3.1-8b-instant',
                messages: [
                    {
                        role: 'system',
                        content: 'You are an expert product strategist. Your task is to refine a short, vague project goal into a clear, professional, and descriptive product objective (1-2 sentences maximum). Return ONLY the refined text itself. Do NOT include any introductory phrases like "Here is a refined objective" or "Refined Goal:". Be concise but impactful.'
                    },
                    { role: 'user', content: `Refine this goal: "${goal}"` }
                ],
                temperature: 0.7
            })
        });

        if (!response.ok) throw new Error('AI Refinement failed');

        const data = await response.json();
        const content = data.choices[0].message.content.trim();
        const refinedGoal = content
            .replace(/^["']|["']$/g, '') // Remove wrapping quotes
            .replace(/^(Here's|Here is|Refined Goal|Refined Objective|A refined product objective)[:\s]*/i, '') // Remove intro text
            .trim();

        return NextResponse.json({ refinedGoal });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
