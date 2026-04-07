'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Bot, CheckCircle2, Circle, Clock, KanbanSquare, Loader2, Play, LayoutDashboard, Target, Zap, ArrowRightCircle, Plus } from 'lucide-react';
import { Project, Phase } from '@shared/types/project';
import { Task, TaskStatus } from '@shared/types/task';
import { Badge } from '@/components/ui/badge';
import { BackgroundAnimation } from '@/components/ui/background-animation';
import { computeWorkflowState } from '@/../../engine/execution/unified-engine';
import { cn } from '@shared/lib/utils';
import { AiAssistantSidebar } from '@/components/ai/assistant-sidebar';

export default function ProjectDashboardPage() {
    const { id } = useParams();

    // 1. ALL HOOKS AT TOP LEVEL
    const [projectData, setProjectData] = useState<{ project: Project, phases: Phase[], tasks: Task[] } | null>(null);
    const [nextAction, setNextAction] = useState<{ next_task: Task | null, reasoning: string } | null>(null);
    const [loading, setLoading] = useState(true);
    const [committedProposals, setCommittedProposals] = useState<Set<string>>(new Set());

    // 2. Fetch Logic
    useEffect(() => {
        let active = true;
        async function fetchDashboard() {
            try {
                const [projectRes, actionRes] = await Promise.all([
                    fetch(`/api/projects/${id}`),
                    fetch(`/api/ai/next-action?project_id=${id}`)
                ]);
                if (!active) return;
                if (projectRes.ok) {
                    const pData = await projectRes.json();
                    setProjectData(pData);
                }
                if (actionRes.ok) {
                    const aData = await actionRes.json();
                    setNextAction(aData);
                }
            } catch (error) {
                console.error("Dashboard failed to load", error);
            } finally {
                if (active) setLoading(false);
            }
        }
        fetchDashboard();
        return () => { active = false; };
    }, [id]);

    // 3. Data Processing (Safe against null projectData)
    const project = projectData?.project;
    const initialTasks = projectData?.tasks || [];

    const localUser = (typeof window !== 'undefined' && id) ? localStorage.getItem(`workflow_user_tasks_${id}`) : null;
    const localRemoved = (typeof window !== 'undefined' && id) ? localStorage.getItem(`workflow_removed_tasks_${id}`) : null;
    const userTasks: Task[] = localUser ? JSON.parse(localUser) : [];
    const removedIds = new Set(localRemoved ? JSON.parse(localRemoved) : []);

    const mergedTasks = (() => {
        let list: Task[] = [
            ...initialTasks.filter((t: Task) => t.id && !removedIds.has(t.id)).map(t => ({
                ...t,
                level: t.level ?? 0,
                meta: { source: 'AI' as const, is_removed: false }
            })),
            ...userTasks.map(t => ({
                ...t,
                meta: { source: 'USER' as const, is_removed: false }
            }))
        ];

        // Demo Fallback logic
        if (project?.is_demo_project && list.length === 0) {
            const now = new Date().toISOString();
            return [
                { id: 't1', title: 'Strategy Briefing', description: 'Align product mission with market needs.', status: 'DONE', task_type: 'HUMAN', graph_order: 1, level: 0, phase_id: 'p1', task_order: 1, created_at: now, meta: { source: 'AI', is_removed: false }, depends_on: [] },
                { id: 't1-a', title: 'Competitor Intelligence', description: 'Analyze market gaps.', status: 'DONE', task_type: 'AI', graph_order: 1.1, level: 1, parent_id: 't1', phase_id: 'p1', task_order: 1, created_at: now, meta: { source: 'AI', is_removed: false }, depends_on: [] },
                { id: 't1-b', title: 'Mission Roadmap', description: 'Define execution timeline.', status: 'DONE', task_type: 'AI', graph_order: 1.2, level: 1, parent_id: 't1', phase_id: 'p1', task_order: 2, created_at: now, meta: { source: 'AI', is_removed: false }, depends_on: [] },
                { id: 't2', title: 'Data Architecture AI', description: 'Generate optimal schema based on spec.', status: 'READY', task_type: 'AI', graph_order: 2, depends_on: ['t1'], level: 0, phase_id: 'p1', task_order: 3, created_at: now, meta: { source: 'AI', is_removed: false } },
                { id: 't3', title: 'Frontend Scaffold', description: 'Initialize core UI components.', status: 'BLOCKED', task_type: 'HUMAN', graph_order: 3, depends_on: ['t2'], level: 0, phase_id: 'p1', task_order: 4, created_at: now, meta: { source: 'AI', is_removed: false } }
            ] as Task[];
        }

        const uniqueMap = new Map<string, Task>();
        // Process USER tasks first, then overwrite with DB tasks (Source of Truth for status)
        list.reverse().forEach((t, index) => {
            const finalId = t.id || `recovered-${index}`;
            uniqueMap.set(finalId, { ...t, id: finalId });
        });

        const dedupedById = Array.from(uniqueMap.values());
        const activeIds = new Set(dedupedById.map(t => t.id));
        return dedupedById.map(t => ({
            ...t,
            depends_on: (t.depends_on || ((t as any).dependency_task_id ? [(t as any).dependency_task_id] : [])).filter(id => activeIds.has(id)),
            parent_id: t.parent_id || (t as any).parent_task_id
        })) as Task[];
    })();

    const recomputedBase = computeWorkflowState(mergedTasks);

    // Apply Status Overrides for consistency across Dashboard
    const overrideKey = `workflow_status_overrides_${id}`;
    const overrides = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem(overrideKey) || '{}') : {};

    const recomputed = recomputedBase.map(t => {
        if (overrides[t.id]) {
            return { ...t, status: overrides[t.id] as TaskStatus };
        }
        return t;
    });

    const totalTasks = recomputed.length;
    const completedTasks = recomputed.filter(t => t.status === 'DONE').length;
    const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    const actionable = recomputed.filter(t => t.status === 'READY');
    const sorted = [...actionable].sort((a, b) => {
        if (a.task_type === 'AI' && b.task_type !== 'AI') return -1;
        if (a.task_type !== 'AI' && b.task_type === 'AI') return 1;
        return (a.graph_order || 0) - (b.graph_order || 0);
    });
    const recommended = sorted[0];
    const readyTasksCount = recomputed.filter(t => t.status === 'READY').length;
    const blockedTasksCount = recomputed.filter(t => t.status === 'BLOCKED').length;

    // Calculate how many tasks each task unblocks
    const getUnlocksCount = (taskId: string) => {
        return recomputed.filter(t => t.depends_on?.includes(taskId)).length;
    };

    const snapshotGroups = {
        RUNNING: recomputed.filter(t => t.status === 'RUNNING'),
        READY: recomputed.filter(t => t.status === 'READY').slice(0, 2),
        BLOCKED: recomputed.filter(t => t.status === 'BLOCKED').slice(0, 2),
    };



    const handleTaskAdded = (newTask: Partial<Task>) => {
        const idToUse = newTask.id || `local-${Date.now()}`;
        const taskWithId = {
            ...newTask,
            id: idToUse,
            status: newTask.status || 'READY',
            created_at: new Date().toISOString(),
            meta: { source: 'USER', is_removed: false }
        } as Task;

        const updated = [...userTasks, taskWithId];
        localStorage.setItem(`workflow_user_tasks_${id}`, JSON.stringify(updated));

        // Optimistic refresh
        window.location.reload();
    };

    const [isRegenerating, setIsRegenerating] = useState(false);

    const handleRerunPlan = async () => {
        if (!confirm("This will PERMANENTLY RESET all current mission progress and tactical modifications. The AI Strategist will build a fresh graph from the initial goal. Re-initialize mission?")) return;

        try {
            setIsRegenerating(true);

            // 1. Clear Local Mutations
            localStorage.removeItem(`workflow_user_tasks_${id}`);
            localStorage.removeItem(`workflow_removed_tasks_${id}`);

            // 2. Clear Database (via API) and Regenerate
            const res = await fetch('/api/ai/generate-workflow', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    project_id: id,
                    goal_description: (project?.title || '') + ": " + (project?.goal_description || '')
                })
            });

            if (!res.ok) throw new Error("Strategic regeneration failed");

            setIsRegenerating(false);
            window.location.reload();
        } catch (error) {
            console.error("Regeneration failed", error);
            setIsRegenerating(false);
        }
    };

    // 4. EARLY RETURNS (SAFE because all hooks have executed)
    if (loading) {
        return (
            <div className="flex-1 flex items-center justify-center p-12 text-muted-foreground">
                <Loader2 className="w-8 h-8 animate-spin" />
            </div>
        );
    }

    if (!project) {
        return <div className="p-12 text-center text-muted-foreground">Project not found.</div>;
    }

    return (
        <div className="max-w-full mx-auto px-4 py-3 space-y-4 relative overflow-hidden h-[calc(100vh-80px)] flex flex-col bg-background/40">
            <BackgroundAnimation className="z-[-10] opacity-10" />

            {/* HIGHLIGHTED METRICS STRIP */}
            <div className="grid grid-cols-12 gap-4 bg-background/40 backdrop-blur-md rounded-2xl border border-border/40 p-4 shadow-xl shadow-black/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                {/* PROJECT IDENTITY & PROGRESS */}
                <div className="col-span-12 lg:col-span-3 flex flex-col justify-center gap-3 pr-4 border-r border-border/40">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-xl border border-primary/20">
                            <LayoutDashboard className="w-4 h-4 text-primary" />
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="text-sm font-black tracking-tighter text-foreground/90 truncate">{project.title}</h1>
                            <Badge variant="outline" className="text-[7px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-600 border-emerald-500/20 h-3.5 px-1">Active Mission</Badge>
                        </div>
                    </div>
                </div>

                {/* KPI CARDS */}
                <div className="col-span-12 lg:col-span-9 grid grid-cols-5 gap-3">
                    {[
                        { label: 'Total Items', count: totalTasks, color: 'bg-muted/40 text-muted-foreground', icon: <Target className="w-3.5 h-3.5" /> },
                        { label: 'Completed', count: completedTasks, color: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20', icon: <CheckCircle2 className="w-3.5 h-3.5" /> },
                        { label: 'Ready', count: readyTasksCount, color: 'bg-primary/10 text-primary border-primary/20', icon: <Zap className="w-3.5 h-3.5" /> },
                        { label: 'Waiting', count: blockedTasksCount, color: 'bg-amber-500/10 text-amber-600 border-amber-500/20', icon: <Clock className="w-3.5 h-3.5" /> },
                        { label: 'Progress', count: `${completionPercentage}%`, color: 'bg-primary text-primary-foreground shadow-lg shadow-primary/20', icon: <Play className="w-3.5 h-3.5 fill-current" /> }
                    ].map((kpi, idx) => (
                        <div key={idx} className={cn("p-2.5 rounded-xl border flex flex-col gap-1 transition-all hover:scale-[1.02] shadow-sm", kpi.color)}>
                            <div className="flex items-center justify-between">
                                {kpi.icon}
                                <span className={cn("text-lg font-black tracking-tighter", idx === 4 ? "text-primary-foreground" : "")}>{kpi.count}</span>
                            </div>
                            <span className="text-[7px] font-black uppercase tracking-widest opacity-80 leading-none">{kpi.label}</span>
                        </div>
                    ))}
                </div>

            </div>

            <div className="grid grid-cols-12 gap-5 flex-1 overflow-hidden">
                {/* LEFT COLUMN */}
                <div className="col-span-12 lg:col-span-7 flex flex-col gap-5 overflow-y-auto pr-1 custom-scrollbar">

                    <Card className="border-primary/20 bg-primary/[0.03] shadow-lg shadow-primary/5 rounded-2xl overflow-hidden relative group">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity">
                            <Bot className="w-48 h-48" />
                        </div>
                        <div className="p-5 flex flex-col gap-4 relative z-10">
                            <div className="flex items-center justify-between">
                                <Badge variant="outline" className="text-[9px] font-black uppercase tracking-widest bg-primary/10 border-primary/20 text-primary px-2">NEXT BEST ACTION</Badge>
                                <span className="flex items-center gap-1.5 text-[9px] font-black text-emerald-600 uppercase tracking-widest">
                                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                                    {getUnlocksCount(recommended?.id || '')} Dependencies Unlocked
                                </span>
                            </div>

                            {!recommended ? (
                                <div className="py-8 text-center bg-background/40 rounded-xl border border-dashed border-border/40">
                                    <CheckCircle2 className="w-8 h-8 text-emerald-500/40 mx-auto mb-2" />
                                    <p className="text-xs font-black uppercase text-muted-foreground/60 tracking-widest">Mission Context Complete</p>
                                </div>
                            ) : (
                                <>
                                    <div className="space-y-2">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-[10px] font-black text-primary/60 uppercase tracking-widest">Recommended:</span>
                                            <h2 className="text-xl font-black tracking-tighter leading-[1.1]">{recommended.title}</h2>
                                        </div>
                                        <p className="text-xs text-muted-foreground font-medium leading-relaxed max-w-xl italic">
                                            "Reason: {recommended.status_explanation || `Unlocks ${getUnlocksCount(recommended.id)} dependent items and streamlines the critical path.`}"
                                        </p>
                                    </div>
                                    <div className="flex gap-3 mt-1">
                                        <Link
                                            href={`/project/${id}/task/${recommended.id}`}
                                            className="h-9 px-6 bg-primary text-primary-foreground rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
                                        >
                                            <Play className="w-3.5 h-3.5 fill-current" />
                                            Start Work Item
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { id: 'RUNNING', label: 'In Progress', tasks: snapshotGroups.RUNNING, border: 'border-l-blue-500', bg: 'bg-blue-500/[0.03]' },
                            { id: 'READY', label: 'Ready tasks', tasks: snapshotGroups.READY, border: 'border-l-primary', bg: 'bg-primary/[0.03]' },
                            { id: 'BLOCKED', label: 'Blocked tasks', tasks: snapshotGroups.BLOCKED, border: 'border-l-amber-500', bg: 'bg-amber-500/[0.02]' }
                        ].map(group => (
                            <div key={group.id} className="flex flex-col gap-2">
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 px-1">{group.label}</h3>
                                <div className="space-y-2">
                                    {group.tasks.length === 0 ? (
                                        <div className="p-4 bg-muted/20 border border-dashed border-border/40 rounded-xl text-[9px] text-center font-black uppercase text-muted-foreground/20 italic">No Items</div>
                                    ) : (
                                        group.tasks.map(t => (
                                            <Link
                                                key={t.id}
                                                href={`/project/${id}/task/${t.id}`}
                                                className={cn(
                                                    "p-2.5 bg-card border border-border/40 rounded-xl shadow-sm flex flex-col gap-1 hover:border-primary/40 transition-all group",
                                                    group.border,
                                                    group.bg,
                                                    "border-l-4"
                                                )}
                                            >
                                                <div className="flex items-center justify-between gap-2 overflow-hidden">
                                                    <span className="text-[11px] font-black truncate text-foreground/80 group-hover:text-primary transition-colors">{t.title}</span>
                                                    <div className="flex items-center gap-1">
                                                        {t.status === 'RUNNING' && <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse mr-1" />}
                                                        <Badge variant="outline" className={cn(
                                                            "text-[6px] h-3 px-1 uppercase font-black shrink-0 border-none",
                                                            t.task_type === 'AI' ? "bg-primary/10 text-primary" : "bg-emerald-500/10 text-emerald-600"
                                                        )}>
                                                            {t.task_type === 'AI' ? 'AI AGENT' : 'HUMAN EXPERT'}
                                                        </Badge>
                                                    </div>
                                                </div>
                                                {t.status_explanation && (
                                                    <span className="text-[8px] font-bold text-muted-foreground uppercase truncate tracking-tighter italic opacity-60">
                                                        {t.status_explanation}
                                                    </span>
                                                )}
                                            </Link>
                                        ))
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between items-center px-1">
                        <Link
                            href={`/project/${id}/board`}
                            className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline flex items-center gap-1"
                        >
                            <KanbanSquare className="w-3 h-3" />
                            Open Full Workflow
                        </Link>
                    </div>

                    <div className="mt-2 space-y-3">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 px-1">Quick Actions</h3>
                        <div className="grid grid-cols-3 gap-3">
                            <Link
                                href={`/project/${id}/board`}
                                className="flex items-center justify-center gap-2 p-2.5 bg-muted/40 border border-border/40 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-muted transition-all active:scale-95"
                            >
                                <Plus className="w-3 h-3" />
                                Add Item
                            </Link>
                            <button
                                className="flex items-center justify-center gap-2 p-2.5 bg-muted/40 border border-border/40 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-muted transition-all active:scale-95 opacity-50 cursor-not-allowed"
                            >
                                <Zap className="w-3 h-3" />
                                Subtasks
                            </button>
                            <button
                                onClick={handleRerunPlan}
                                disabled={isRegenerating}
                                className="flex items-center justify-center gap-2 p-2.5 bg-primary/10 border border-primary/20 text-primary rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-primary/20 transition-all active:scale-95"
                            >
                                <Target className={cn("w-3 h-3", isRegenerating && "animate-spin")} />
                                {isRegenerating ? 'Plan...' : 'Re-run Plan'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: AI ASSISTANT PANEL */}
                <div className="col-span-12 lg:col-span-5 flex flex-col h-full overflow-hidden">
                    <AiAssistantSidebar
                        project={project}
                        tasks={recomputed}
                        onTaskAdded={handleTaskAdded}
                        isRegenerating={isRegenerating}
                    />
                </div>

            </div>
        </div>
    );
}
