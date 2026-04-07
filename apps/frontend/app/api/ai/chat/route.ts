import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { messages, project, tasks } = await req.json();
        const apiKey = process.env.GROQ_API_KEY;

        if (!apiKey) {
            return NextResponse.json({ error: "GROQ_API_KEY not configured" }, { status: 500 });
        }

        // Context Construction
        const context = `
Current Mission Goal: ${project.title}
Mission Description: ${project.goal_description}

Current Workflow Architecture:
${tasks.map((t: any) => `- [${t.status}] ${t.title} (ID: ${t.id}${t.parent_id ? `, Parent: ${t.parent_id}` : ''}${t.depends_on?.length > 0 ? `, Depends on: ${t.depends_on.join(', ')}` : ''})`).join('\n')}

Role: You are the AI Strategist Command Center. 
Mission: Analyze the workflow, answer questions about execution, and suggest structural improvements.

RESPONSE FORMAT (CRITICAL):
You MUST respond EXCLUSIVELY in a valid JSON object format. Do not include markdown headers or backticks outside the JSON.
Schema: { "text": "your response string", "actions": [ { "type": "PROPOSE_TASK", "payload": { ... } } ] }

CRITICAL RULES:
1. If suggesting new tasks or subtasks, you MUST provide them in the 'actions' array.
2. Actions following this format: { "type": "PROPOSE_TASK", "payload": { "title": string, "description": string, "parent_id": string?, "depends_on": string[]? } }
3. Be concise. Focus on technical execution.
4. Do not hallucinate IDs. Use existing IDs for parents/dependencies.
`;

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    { role: 'system', content: context },
                    ...messages
                ],
                temperature: 0.1,
                response_format: { type: 'json_object' }
            })
        });

        if (!response.ok) {
            const errBody = await response.text();
            console.error("Groq API Error:", errBody);
            return NextResponse.json({ error: `Groq Failure: ${response.status}`, details: errBody }, { status: response.status });
        }

        const data = await response.json();
        const rawContent = data.choices[0].message.content;

        try {
            const content = JSON.parse(rawContent);
            return NextResponse.json(content);
        } catch (parseErr) {
            console.error("Failed to parse AI response as JSON:", rawContent);
            return NextResponse.json({
                text: "Strategic buffer overflow. My analytical output was non-compliant. Please re-state your requirement.",
                error: "JSON_PARSE_FAILURE"
            });
        }

    } catch (error: any) {
        console.error("AI Chat Route Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
