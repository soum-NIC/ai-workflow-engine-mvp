export interface AIWorkflowOutput {
    phases: {
        phase_title: string;
        tasks: {
            title: string;
            description: string;
            capability?: string;
            executor_type: 'AI' | 'HUMAN';
            expected_output: string;
            reasoning: string;
            depends_on?: string;
            parent_task_title?: string;
        }[];
    }[];
}

export async function generateStructuredWorkflow(goal: string, timeline?: string, constraints?: string): Promise<AIWorkflowOutput> {
    console.log("Generating contextual workflow for:", goal);

    const groqApiKey = process.env.GROQ_API_KEY;
    if (!groqApiKey) {
        console.warn("GROQ_API_KEY missing - defaulting to mock strategy.");
        return {
            phases: [
                {
                    phase_title: 'Phase 1: Tactical Setup',
                    tasks: [
                        { title: 'Project Scoping', description: 'Define the scope based on the goal.', executor_type: 'AI', expected_output: 'Scope Doc', reasoning: 'Initial alignment.' },
                        { title: 'Goal Approval', description: 'Manual sign-off.', executor_type: 'HUMAN', expected_output: 'Approved Goal', reasoning: 'Safety check.', depends_on: 'Project Scoping' }
                    ]
                }
            ]
        };
    }

    const systemPrompt = `You are an expert project strategist AI. 
Analyze the project goal and generate a structured multi-phase execution workflow.

REQUIREMENTS:
1. Return ONLY a JSON object matching this schema:
{
  "phases": [
    {
      "phase_title": "string",
      "tasks": [
        {
          "title": "string",
          "description": "string",
          "capability": "string (one word category, e.g., RESEARCH, DESIGN, CODE, DEPLOY)",
          "executor_type": "AI" | "HUMAN",
          "expected_output": "string",
          "reasoning": "string",
          "depends_on": "string (the EXACT title of a previous task this task depends on, or undefined)",
          "parent_task_title": "string (the EXACT title of a higher-level task if this is a sub-task, or undefined)"
        }
      ]
    }
  ]
}

2. Scale the complexity (3-5 phases, 2-4 tasks per phase).
3. Assign "AI" executor for technical/analytical tasks and "HUMAN" for strategic/creative/validation tasks.
4. Use logical dependencies. A task's "depends_on" must refer to a task title that exists in a previous phase or earlier in the same phase.
5. Be context-specific. If the goal is "Build a Bakery Website", the tasks should be about menu design, ingredient sourcing, and web deployment.
6. RETURN ONLY THE JSON. NO CONVERSATIONAL TEXT.`;

    try {
        console.log("Requesting Groq strategy with model: llama-3.1-8b-instant");
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${groqApiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama-3.1-8b-instant',
                messages: [
                    { role: 'system', content: systemPrompt },
                    {
                        role: 'user',
                        content: `Plan this mission:
Goal: ${goal}
Timeline: ${timeline || 'Unspecified'}
Constraints: ${constraints || 'None'}`
                    }
                ],
                temperature: 0.3,
                max_tokens: 2000,
                response_format: { type: 'json_object' }
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error("Groq API Error Response:", errorData);
            throw new Error(`AI Generation failed: ${errorData.error?.message || response.statusText}`);
        }

        const data = await response.json();
        const content = data.choices[0].message.content;
        console.log("Raw AI Strategy content received.");

        // Robust JSON parsing
        const cleaned = content.replace(/```json|```/g, '').trim();
        let parsed: AIWorkflowOutput;
        try {
            parsed = JSON.parse(cleaned) as AIWorkflowOutput;
        } catch (e) {
            console.error("Failed to parse AI JSON. Raw content:", content);
            throw new Error("Invalid format received from AI Strategist. Please try again.");
        }

        // Basic validation of the parsed structure
        if (!parsed.phases || !Array.isArray(parsed.phases)) {
            throw new Error("Invalid structure: missing phases array");
        }

        return parsed;
    } catch (error: any) {
        console.error("Workflow generation engine error:", error);
        throw error;
    }
}
