'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, ArrowRight, Sparkles } from 'lucide-react';

export default function GoalInputForm() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [refining, setRefining] = useState(false);
    const [loadingText, setLoadingText] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        goal_description: '',
        timeline: '',
        constraints: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleRefineGoal = async () => {
        if (!formData.goal_description || refining) return;

        try {
            setRefining(true);
            const res = await fetch('/api/ai/refine-goal', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ goal: formData.goal_description })
            });
            const data = await res.json();
            if (res.ok && data.refinedGoal) {
                setFormData(prev => ({ ...prev, goal_description: data.refinedGoal }));
            }
        } catch (err) {
            console.error("Refinement failed:", err);
        } finally {
            setRefining(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.title || !formData.goal_description) return;

        try {
            setLoading(true);

            // Step 1: Create Project
            setLoadingText('Saving project metadata...');
            const pRes = await fetch('/api/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const pData = await pRes.json();
            if (!pRes.ok) throw new Error(pData.error);

            // Step 2: Trigger AI Generation
            setLoadingText('Architecting Dependency Graph...');
            const payload = {
                project_id: pData.project_id,
                goal_description: formData.goal_description,
                timeline: formData.timeline,
                constraints: formData.constraints,
            }

            const gRes = await fetch('/api/ai/generate-workflow', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const gData = await gRes.json();
            if (!gRes.ok) throw new Error(gData.error);

            // Redirect to the Project Dashboard and refresh server layout
            router.push(`/project/${pData.project_id}/board`);
            router.refresh();

        } catch (error) {
            console.error(error);
            alert('Failed to initialize graph. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl mx-auto">
            <div className="space-y-2">
                <label htmlFor="title" className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80">Project Title</label>
                <input
                    id="title"
                    name="title"
                    required
                    autoFocus
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g. Project Apollo: Autonomous SaaS Infrastructure"
                    className="w-full px-5 py-4 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/20 transition-all font-medium text-lg placeholder:text-muted-foreground"
                />
            </div>

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <label htmlFor="goal_description" className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80">Project Goal</label>
                    {formData.goal_description && (
                        <button
                            type="button"
                            onClick={handleRefineGoal}
                            disabled={refining}
                            className="flex items-center gap-1.5 text-[10px] text-primary font-bold uppercase tracking-widest hover:opacity-80 transition-opacity disabled:opacity-50"
                        >
                            {refining ? (
                                <Loader2 className="w-3 h-3 animate-spin" />
                            ) : (
                                <Sparkles className="w-3 h-3" />
                            )}
                            AI Orchestrator Refine
                        </button>
                    )}
                </div>
                <div className="relative">
                    <textarea
                        id="goal_description"
                        name="goal_description"
                        required
                        rows={5}
                        value={formData.goal_description}
                        onChange={handleChange}
                        placeholder="Describe the end state. (e.g. Build a high-performance analytics engine with real-time dependency tracking and automated reporting layers)."
                        className="w-full px-5 py-4 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/20 transition-all resize-none pr-10 font-light leading-relaxed placeholder:text-muted-foreground"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label htmlFor="timeline" className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80">Timeline</label>
                    <input
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        placeholder="e.g. Q4 2026 completion"
                        className="w-full px-5 py-4 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/20 transition-all font-medium placeholder:text-muted-foreground"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="constraints" className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80">Constraints</label>
                    <input
                        id="constraints"
                        name="constraints"
                        value={formData.constraints}
                        onChange={handleChange}
                        placeholder="e.g. Zero-trust architecture, edge-first"
                        className="w-full px-5 py-4 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/20 transition-all font-medium placeholder:text-muted-foreground"
                    />
                </div>
            </div>

            <div className="pt-8 border-t border-border flex justify-end">
                <button
                    type="submit"
                    disabled={loading || !formData.title || !formData.goal_description}
                    className="flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-black uppercase tracking-[0.1em] text-sm hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(var(--primary),0.2)] active:scale-95 group"
                >
                    {loading ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            {loadingText}
                        </>
                    ) : (
                        <>
                            Initialize Workflow Plan
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}
