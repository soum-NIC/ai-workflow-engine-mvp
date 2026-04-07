'use client';

import { useEffect, useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { Project } from '@shared/types/project';
import { Task, TaskStatus } from '@shared/types/task';
import {
    Loader2, KanbanSquare, ArrowUpRight, Plus, Trash2, X,
    ChevronRight, ChevronLeft, Filter, Search as SearchIcon, Table, Clock, Calendar, Kanban, BarChart3, Share2, MoreHorizontal as MoreIcon,
    ChevronDown
} from 'lucide-react';
import { computeWorkflowState } from '@/../../engine/execution/unified-engine';
import { calculateWorkflowConfidence, ConfidenceScore } from '@shared/lib/confidence-engine';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { cn } from '@shared/lib/utils';
import { Card } from '@/components/ui/card';
import { validateDependency } from '@shared/lib/workflow-validation';
import { WorkflowGraphView } from '@/components/workflow/graph-view';
import { AiAssistantSidebar } from '@/components/ai/assistant-sidebar';
import { HistorySidebar } from '@/components/project/HistorySidebar';
import { History, ShieldAlert, TrendingDown, TrendingUp, Info } from 'lucide-react';

type BoardData = {
    BLOCKED: Task[];
    READY: Task[];
    RUNNING: Task[];
    DONE: Task[];
};

export default function WorkflowBoardPage() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState<Project | null>(null);
    const [board, setBoard] = useState<BoardData>({ BLOCKED: [], READY: [], RUNNING: [], DONE: [] });
    const [viewMode, setViewMode] = useState<'board' | 'map' | 'graph'>('board');

    const [allTasks, setAllTasks] = useState<Task[]>([]);
    const [userTasks, setUserTasks] = useState<Task[]>([]);
    const [removedAiTaskIds, setRemovedAiTaskIds] = useState<Set<string>>(new Set());
    const [warning, setWarning] = useState<string | null>(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [isRegenerating, setIsRegenerating] = useState(false);
    const [sidebarView, setSidebarView] = useState<'ai' | 'history'>('ai');
    const [historyTrigger, setHistoryTrigger] = useState(0);

    const refreshHistory = () => setHistoryTrigger(prev => prev + 1);

    // Calculate Confidence Score
    const confidence: ConfidenceScore = useMemo(() => {
        const list: Task[] = [
            ...allTasks.filter(t => t.id && !removedAiTaskIds.has(t.id)),
            ...userTasks
        ];
        return calculateWorkflowConfidence(list);
    }, [allTasks, userTasks, removedAiTaskIds]);

    const prevConfidence = useMemo(() => {
        // Simple mock of previous confidence for delta tracking
        return 90;
    }, [id]);

    // Load from LocalStorage on mount
    useEffect(() => {
        const localUser = localStorage.getItem(`workflow_user_tasks_${id}`);
        const localRemoved = localStorage.getItem(`workflow_removed_tasks_${id}`);
        if (localUser) setUserTasks(JSON.parse(localUser));
        if (localRemoved) setRemovedAiTaskIds(new Set(JSON.parse(localRemoved)));
    }, [id]);

    // Main hydrator
    useEffect(() => {
        if (!id) return;
        async function fetchInitial() {
            try {
                const res = await fetch(`/api/projects/${id}`);
                if (!res.ok) {
                    if (res.status === 404) {
                        console.warn("Project not found on server. Reverting to tactical local cache.");
                        const localProj = localStorage.getItem(`workflow_project_${id}`);
                        if (localProj) setProject(JSON.parse(localProj));
                        else setProject({ id, title: "Tactical Mission (No Sync)", is_demo_project: true } as Project);
                    } else {
                        throw new Error('Failed to fetch project');
                    }
                } else {
                    const data = await res.json();
                    setProject(data.project);
                    setAllTasks(data.tasks || []);
                }
            } catch (error) {
                const now = new Date().toISOString();
                const dbTasks = allTasks;
                const mergedTasks = [
                    ...dbTasks.filter(t => !removedAiTaskIds.has(t.id)).map(t => ({
                        ...t,
                        level: t.level ?? 0,
                        meta: { source: 'AI' as const, is_removed: false }
                    })),
                    ...userTasks.map(t => ({
                        ...t,
                        meta: { source: 'USER' as const, is_removed: false }
                    }))
                ];

                const finalSet = project?.is_demo_project && dbTasks.length === 0 && userTasks.length === 0
                    ? [
                        { id: 't1', title: 'Strategy Briefing', description: 'Align product mission with market needs.', status: 'DONE', task_type: 'HUMAN', graph_order: 1, level: 0, phase_id: 'p1', task_order: 1, created_at: now, meta: { source: 'AI', is_removed: false }, depends_on: [] },
                        { id: 't1-a', title: 'Competitor Intelligence', description: 'Analyze market gaps.', status: 'DONE', task_type: 'AI', graph_order: 1.1, level: 1, parent_id: 't1', phase_id: 'p1', task_order: 1, created_at: now, meta: { source: 'AI', is_removed: false }, depends_on: [] },
                        { id: 't1-b', title: 'Mission Roadmap', description: 'Define execution timeline.', status: 'DONE', task_type: 'AI', graph_order: 1.2, level: 1, parent_id: 't1', phase_id: 'p1', task_order: 2, created_at: now, meta: { source: 'AI', is_removed: false }, depends_on: [] },
                        { id: 't2', title: 'Data Architecture AI', description: 'Generate optimal schema based on spec.', status: 'READY', task_type: 'AI', graph_order: 2, depends_on: ['t1'], level: 0, phase_id: 'p1', task_order: 3, created_at: now, meta: { source: 'AI', is_removed: false } },
                        { id: 't3', title: 'Frontend Scaffold', description: 'Initialize core UI components.', status: 'BLOCKED', task_type: 'HUMAN', graph_order: 3, depends_on: ['t2'], level: 0, phase_id: 'p1', task_order: 4, created_at: now, meta: { source: 'AI', is_removed: false } }
                    ] as Task[]
                    : mergedTasks;

                const recomputed = computeWorkflowState(finalSet);
                const newBoard: BoardData = { BLOCKED: [], READY: [], RUNNING: [], DONE: [] };

                // For each column, group tasks by hierarchy
                const statuses: TaskStatus[] = ['BLOCKED', 'READY', 'RUNNING', 'DONE'];
                statuses.forEach(status => {
                    const tasksInCol = recomputed.filter(t => t.status === status);
                    const processed = new Set<string>();

                    // Sort base tasks by graph order
                    const baseTasks = tasksInCol.filter(t => t.level === 0).sort((a, b) => (a.graph_order || 0) - (b.graph_order || 0));

                    baseTasks.forEach(parent => {
                        newBoard[status].push(parent);
                        processed.add(parent.id);
                        // Find children that belong in THIS same column
                        const children = tasksInCol.filter(c => c.parent_id === parent.id);
                        children.forEach(child => {
                            newBoard[status].push(child);
                            processed.add(child.id);
                        });
                    });

                    // Add any subtasks whose parents are in DIFFERENT columns
                    tasksInCol.forEach(t => {
                        if (!processed.has(t.id)) {
                            newBoard[status].push(t);
                        }
                    });
                });

                setBoard(newBoard);
            } finally {
                setLoading(false);
            }
        }
        fetchInitial();
    }, [id]);

    const mergedTasks = useMemo(() => {
        // Use a map to deduplicate by ID, but ensure userTasks (modifications) take precedence
        const uniqueMap = new Map<string, Task>();

        // 1. Process AI tasks (base)
        allTasks.filter(t => t.id && !removedAiTaskIds.has(t.id)).forEach(t => {
            uniqueMap.set(t.id, {
                ...t,
                level: t.level ?? 0,
                meta: { source: t.meta?.source || 'AI' as const, is_removed: false }
            });
        });

        // 2. Process User tasks (overrides)
        userTasks.forEach(t => {
            uniqueMap.set(t.id, {
                ...t,
                meta: { source: t.meta?.source || 'USER' as const, is_removed: false }
            });
        });

        // Demo Fallback logic
        if (project?.is_demo_project && uniqueMap.size === 0) {
            const now = new Date().toISOString();
            return [
                { id: 't1', title: 'Strategy Briefing', description: 'Align product mission with market needs.', status: 'DONE', task_type: 'HUMAN', graph_order: 1, level: 0, phase_id: 'p1', task_order: 1, created_at: now, meta: { source: 'AI', is_removed: false }, depends_on: [] },
                { id: 't1-a', title: 'Competitor Intelligence', description: 'Analyze market gaps.', status: 'DONE', task_type: 'AI', graph_order: 1.1, level: 1, parent_id: 't1', phase_id: 'p1', task_order: 1.1, created_at: now, meta: { source: 'AI', is_removed: false }, depends_on: [] },
                { id: 't1-b', title: 'Mission Roadmap', description: 'Define execution timeline.', status: 'DONE', task_type: 'AI', graph_order: 1.2, level: 1, parent_id: 't1', phase_id: 'p1', task_order: 1.2, created_at: now, meta: { source: 'AI', is_removed: false }, depends_on: [] },
                { id: 't2', title: 'Data Architecture AI', description: 'Generate optimal schema based on spec.', status: 'READY', task_type: 'AI', graph_order: 2, depends_on: ['t1'], level: 0, phase_id: 'p1', task_order: 2, created_at: now, meta: { source: 'AI', is_removed: false } },
                { id: 't3', title: 'Frontend Scaffold', description: 'Initialize core UI components.', status: 'BLOCKED', task_type: 'HUMAN', graph_order: 3, depends_on: ['t2'], level: 0, phase_id: 'p1', task_order: 3, created_at: now, meta: { source: 'AI', is_removed: false } }
            ] as Task[];
        }

        const deduped = Array.from(uniqueMap.values());
        const activeIds = new Set(deduped.map(t => t.id));

        return deduped
            .sort((a, b) => (a.task_order || 0) - (b.task_order || 0))
            .map(t => ({
                ...t,
                depends_on: (t.depends_on || ((t as any).dependency_task_id ? [(t as any).dependency_task_id] : [])).filter(id => activeIds.has(id)),
                parent_id: t.parent_id || (t as any).parent_task_id
            })) as Task[];
    }, [allTasks, userTasks, removedAiTaskIds, project]);

    useEffect(() => {
        const mergeAndCompute = () => {
            const recomputedBase = computeWorkflowState(mergedTasks);

            // Apply Status Overrides for consistency across Board
            const overrideKey = `workflow_status_overrides_${id}`;
            const overrides = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem(overrideKey) || '{}') : {};

            const finalTasks = recomputedBase.map(t => {
                if (overrides[t.id]) {
                    return { ...t, status: overrides[t.id] as TaskStatus };
                }
                return t;
            });

            const newBoard: BoardData = { BLOCKED: [], READY: [], RUNNING: [], DONE: [] };

            const statuses: TaskStatus[] = ['BLOCKED', 'READY', 'RUNNING', 'DONE'];
            statuses.forEach(status => {
                newBoard[status] = finalTasks.filter(t => t.status === status);
            });

            setBoard(newBoard);
        };
        mergeAndCompute();
    }, [mergedTasks, id]);

    const saveLocal = (uTasks: Task[], rIds: Set<string>) => {
        localStorage.setItem(`workflow_user_tasks_${id}`, JSON.stringify(uTasks));
        localStorage.setItem(`workflow_removed_tasks_${id}`, JSON.stringify(Array.from(rIds)));
    };

    const onConnectNodes = (taskId: string, depId: string) => {
        const result = validateDependency(taskId, depId, [...allTasks.filter(t => !removedAiTaskIds.has(t.id)), ...userTasks]);
        if (!result.valid) {
            setWarning(result.error || "Connection Error");
            return;
        }

        const isUser = userTasks.some(t => t.id === taskId);
        if (isUser) {
            const next = userTasks.map(t => t.id === taskId ? { ...t, depends_on: Array.from(new Set([...(t.depends_on || []), depId])), meta: { ...t.meta, source: 'USER' as const } } : t);
            setUserTasks(next);
            saveLocal(next, removedAiTaskIds);
        } else {
            const aiTask = allTasks.find(t => t.id === taskId);
            if (aiTask) {
                const updatedAi = { ...aiTask, depends_on: [depId], meta: { source: 'USER' as const, is_removed: false } };
                const nextUser = [...userTasks, updatedAi];
                const nextRemoved = new Set(removedAiTaskIds);
                nextRemoved.add(taskId);
                setUserTasks(nextUser);
                setRemovedAiTaskIds(nextRemoved);
                saveLocal(nextUser, nextRemoved);
            }
        }
    };

    const onDisconnectNode = (taskId: string) => {
        const isUser = userTasks.some(t => t.id === taskId);
        if (isUser) {
            const next = userTasks.map(t => t.id === taskId ? { ...t, depends_on: [], meta: { ...t.meta, source: 'USER' as const } } : t);
            setUserTasks(next);
            saveLocal(next, removedAiTaskIds);
        } else {
            const aiTask = allTasks.find(t => t.id === taskId);
            if (aiTask) {
                const updatedAi = { ...aiTask, depends_on: [], meta: { source: 'USER' as const, is_removed: false } };
                const nextUser = [...userTasks, updatedAi];
                const nextRemoved = new Set(removedAiTaskIds);
                nextRemoved.add(taskId);
                setUserTasks(nextUser);
                setRemovedAiTaskIds(nextRemoved);
                saveLocal(nextUser, nextRemoved);
            }
        }
    };

    const onRemoveTask = async (taskId: string) => {
        const taskToRemove = mergedTasks.find(t => t.id === taskId);
        if (taskToRemove?.status === 'DONE') {
            setWarning("Terminal tasks (DONE) cannot be removed. Strategy preservation enabled.");
            return;
        }

        // Dependency Re-alignment: Clear this task from anything that depends on it
        const affectedTasks = mergedTasks.filter(t => t.depends_on?.includes(taskId));

        try {
            const isUser = userTasks.some(t => t.id === taskId);
            if (isUser) {
                const next = userTasks.filter(t => t.id !== taskId).map(t => ({
                    ...t,
                    depends_on: t.depends_on?.filter(id => id !== taskId)
                }));
                setUserTasks(next);
                saveLocal(next, removedAiTaskIds);
            } else {
                const next = new Set(removedAiTaskIds);
                next.add(taskId);
                setRemovedAiTaskIds(next);
                saveLocal(userTasks, next);
            }

            // Persistence if not demo
            if (project && !project.is_demo_project) {
                await fetch(`/api/tasks/${taskId}`, { method: 'DELETE' });
                await fetch(`/api/projects/${id}/history`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        action_type: 'DELETE',
                        task_id: taskId,
                        metadata: { title: taskToRemove?.title, status: taskToRemove?.status }
                    })
                });
            }
        } catch (error) {
            console.error("Deletion sync failed", error);
        }
    };

    const handleTaskAdded = async (newTask: Partial<Task>) => {
        try {
            // Find a valid phase_id from existing tasks if possible
            const phaseId = newTask.phase_id || allTasks[0]?.phase_id || 'unknown';

            const taskToSave = {
                ...newTask,
                phase_id: phaseId,
                status: newTask.status || 'READY',
                task_order: mergedTasks.length + 1,
                meta: {
                    source: newTask.meta?.source || 'USER',
                    is_removed: false
                }
            };

            const res = await fetch('/api/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(taskToSave)
            });

            if (!res.ok) throw new Error('Failed to save task');
            const persisted = await res.json();

            setAllTasks(prev => [...prev, persisted]);

            // Log creation
            if (project && !project.is_demo_project) {
                await fetch(`/api/projects/${id}/history`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        action_type: 'CREATE',
                        task_id: persisted.id,
                        metadata: { title: persisted.title, type: persisted.task_type }
                    })
                });
            }

            setShowAddModal(false);
        } catch (error) {
            console.error('Task persistence failed', error);
            setWarning("Failed to save task to server. It may not be available on other pages.");
            setUserTasks(prev => {
                const next = [...prev, { ...newTask, id: newTask.id || `local-${Date.now()}` } as Task];
                saveLocal(next, removedAiTaskIds);
                return next;
            });
            setShowAddModal(false);
        }
    };

    const onDragEnd = async (result: DropResult) => {
        setWarning(null);
        if (!result.destination) return;
        const { source, destination, draggableId } = result;
        if (source.droppableId === destination.droppableId && source.index === destination.index) return;

        const finishStatus = destination.droppableId as TaskStatus;
        const isUser = userTasks.some(t => t.id === draggableId);
        if (isUser) {
            const next = userTasks.map(t => t.id === draggableId ? { ...t, status: finishStatus, meta: { ...t.meta, source: 'USER' as const } } : t);
            setUserTasks(next);
            saveLocal(next, removedAiTaskIds);
            return;
        }

        if (!project?.is_demo_project) {
            try {
                await fetch('/api/tasks/status', {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ task_id: draggableId, status: finishStatus })
                });
                setAllTasks(prev => prev.map(t => {
                    if (t.id === draggableId) {
                        return { ...t, status: finishStatus, meta: { ...t.meta, source: 'USER' as const } };
                    }
                    return t;
                }));
            } catch (e) {
                console.error("Status sync failed", e);
            }
        }
    };

    if (loading) {
        return <div className="p-12 text-center text-muted-foreground"><Loader2 className="w-8 h-8 animate-spin mx-auto" /></div>;
    }

    const columns: { id: TaskStatus, title: string, color: string, style: string }[] = [
        { id: 'BLOCKED', title: 'Blocked', color: 'bg-amber-500', style: 'bg-amber-500/[0.02] border-amber-500/20' },
        { id: 'READY', title: 'Ready to Start', color: 'bg-indigo-500', style: 'bg-indigo-500/[0.05] border-indigo-500/30' },
        { id: 'RUNNING', title: 'In Progress', color: 'bg-blue-500', style: 'bg-blue-500/[0.02] border-blue-500/20' },
        { id: 'DONE', title: 'Completed', color: 'bg-emerald-500', style: 'bg-emerald-500/[0.02] border-emerald-500/20' }
    ];

    return (
        <div className="w-full h-[calc(100vh-140px)] flex flex-col mx-auto px-6 relative py-4 overflow-hidden">
            <div className="mb-6 flex items-center justify-between pb-4 border-b border-border/40 backdrop-blur-sm sticky top-0 z-[100]">
                <div className="flex items-center gap-4">
                    <Link
                        href={`/project/${id}`}
                        className="p-2 transition-all hover:bg-primary/10 rounded-xl group border border-transparent hover:border-primary/10"
                        title="Back to Overview"
                    >
                        <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>
                    <div className="p-2 bg-primary/5 rounded-xl border border-primary/10">
                        <KanbanSquare className="w-5 h-5 text-primary/70" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold tracking-tight text-foreground/90 leading-none">
                            Workflow Board
                        </h1>
                        <div className="text-[10px] text-muted-foreground/50 font-black uppercase tracking-widest mt-1 opacity-80">
                            {project?.title}
                        </div>
                    </div>
                </div>

                {/* Confidence Meter Display */}
                <div className="flex items-center gap-6 px-6 py-2 bg-card/50 rounded-2xl border border-border/40 shadow-sm">
                    <div className="flex flex-col gap-1 items-center">
                        <div className="flex items-center gap-2">
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Logic Confidence</h4>
                            {confidence.score < 80 && (
                                <div className="p-1 bg-amber-500/20 rounded animate-pulse">
                                    <ShieldAlert className="w-3 h-3 text-amber-600" />
                                </div>
                            )}
                        </div>
                        <div className="flex items-center gap-3">
                            <span className={cn(
                                "text-2xl font-black transition-colors",
                                confidence.score >= 90 ? "text-emerald-500" :
                                    confidence.score >= 75 ? "text-amber-500" : "text-rose-500"
                            )}>
                                {confidence.score}%
                            </span>
                            <div className="flex flex-col">
                                {confidence.score !== prevConfidence && (
                                    <div className={cn(
                                        "flex items-center gap-0.5 text-[9px] font-bold px-1.5 py-0.5 rounded-full",
                                        confidence.score > prevConfidence ? "bg-emerald-500/10 text-emerald-600" : "bg-rose-500/10 text-rose-600"
                                    )}>
                                        {confidence.score > prevConfidence ? <TrendingUp className="w-2.5 h-2.5" /> : <TrendingDown className="w-2.5 h-2.5" />}
                                        {Math.abs(confidence.score - prevConfidence)}% {confidence.score > prevConfidence ? 'UP' : 'DROP'}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="h-10 w-px bg-border/40" />

                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-4">
                            {Object.entries(confidence.factors).slice(0, 3).map(([key, value]) => (
                                <div key={key} className="flex flex-col">
                                    <span className="text-[8px] font-black uppercase text-muted-foreground/40">{key.replace('_', ' ')}</span>
                                    <div className="w-12 h-1 bg-muted rounded-full mt-1 overflow-hidden">
                                        <div
                                            className={cn("h-full transition-all duration-1000", value >= 80 ? "bg-emerald-500" : value >= 50 ? "bg-amber-500" : "bg-rose-500")}
                                            style={{ width: `${value}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        {confidence.risky_changes.length > 0 && (
                            <div className="flex items-center gap-1.5 mt-1 animate-in slide-in-from-right duration-500">
                                <span className="text-[9px] font-bold text-rose-500 flex items-center gap-1">
                                    <ShieldAlert className="w-3 h-3" />
                                    {confidence.risky_changes.length} Critical Risk{confidence.risky_changes.length > 1 ? 's' : ''} Identified
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="flex items-center gap-2 bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary px-4 py-2 rounded-xl font-bold text-[11px] uppercase tracking-widest transition-all border border-border/40 group"
                    >
                        <Plus className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform" />
                        Add Task
                    </button>
                    <div className="flex bg-muted/30 p-1.5 rounded-2xl border border-border/40">
                        <button
                            onClick={() => setViewMode('board')}
                            className={cn(
                                "flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all",
                                viewMode === 'board' ? "bg-card text-foreground shadow-sm" : "hover:bg-card/30 opacity-40 hover:opacity-100"
                            )}
                        >
                            <KanbanSquare className="w-4 h-4" />
                            Board
                        </button>
                        <button
                            onClick={() => setViewMode('map')}
                            className={cn(
                                "flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all",
                                viewMode === 'map' ? "bg-card text-foreground shadow-sm" : "hover:bg-card/30 opacity-40 hover:opacity-100"
                            )}
                        >
                            <ArrowUpRight className="w-4 h-4" />
                            Map
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex-1 min-h-0 flex gap-6 overflow-hidden px-1">
                <div className={cn("flex-1 overflow-hidden", viewMode === 'board' ? "grid grid-cols-4 gap-4" : "flex flex-col")}>
                    {viewMode === 'board' ? (
                        <>
                            <DragDropContext onDragEnd={onDragEnd}>
                                {columns.map((col) => (
                                    <div key={col.id} className={cn(
                                        "flex flex-col h-full rounded-2xl border border-border/40 overflow-hidden transition-all shadow-sm",
                                        col.id === 'READY' ? "bg-primary/[0.04] border-primary/30 shadow-md scale-[1.01] z-10" : "bg-muted/10",
                                        col.style
                                    )}>
                                        <div className={cn(
                                            "p-3 flex items-center justify-between border-b border-border/40 backdrop-blur-md sticky top-0 z-10",
                                            col.id === 'READY' ? "bg-primary/10" : "bg-background/80"
                                        )}>
                                            <div className="flex items-center gap-2.5">
                                                <div className={cn("w-1.5 h-1.5 rounded-full shadow-sm", col.color)} />
                                                <h3 className="font-bold text-[12px] uppercase tracking-wider text-foreground/70">
                                                    {col.title}
                                                </h3>
                                            </div>
                                            <Badge className="px-1.5 h-5 rounded-md bg-muted text-muted-foreground border-none font-bold text-[9px]">
                                                {board[col.id].length}
                                            </Badge>
                                        </div>

                                        <Droppable droppableId={col.id}>
                                            {(provided) => (
                                                <div
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}
                                                    className="flex-1 overflow-y-auto p-3 custom-scrollbar flex flex-col gap-3"
                                                >
                                                    {(() => {
                                                        const tasksInCol = board[col.id];
                                                        // Flatten calculation for DND
                                                        const renderList: { type: 'parent' | 'task', task: Task, parentId?: string }[] = [];
                                                        const processedSubtasks = new Set<string>();

                                                        // 1. Get all parents (even those not in this column)
                                                        const allPossibleParents = mergedTasks.filter(t => t.level === 0 || !t.level);

                                                        allPossibleParents.forEach(p => {
                                                            const childrenInCol = tasksInCol.filter(t => t.parent_id === p.id);
                                                            const isParentInCol = tasksInCol.some(t => t.id === p.id);

                                                            if (isParentInCol || childrenInCol.length > 0) {
                                                                renderList.push({ type: 'parent', task: p });

                                                                if (isParentInCol) {
                                                                    renderList.push({ type: 'task', task: tasksInCol.find(t => t.id === p.id)! });
                                                                    processedSubtasks.add(p.id);
                                                                }

                                                                childrenInCol.forEach(c => {
                                                                    renderList.push({ type: 'task', task: c, parentId: p.id });
                                                                    processedSubtasks.add(c.id);
                                                                });
                                                            }
                                                        });

                                                        // 2. Add ANY remaining tasks in this column as flat cards
                                                        tasksInCol.forEach(t => {
                                                            if (!processedSubtasks.has(t.id)) {
                                                                renderList.push({ type: 'task', task: t });
                                                            }
                                                        });

                                                        return renderList.map((item, idx) => {
                                                            if (item.type === 'parent') {
                                                                return (
                                                                    <ParentHeader
                                                                        key={`parent-header-${item.task.id}-${item.task.status}`}
                                                                        parent={item.task}
                                                                        allTasks={mergedTasks}
                                                                    />
                                                                );
                                                            }
                                                            return (
                                                                <TaskCard
                                                                    key={`task-card-${item.task.id}`}
                                                                    task={item.task}
                                                                    index={idx}
                                                                    id={id as string}
                                                                    isDemo={project?.is_demo_project ?? false}
                                                                    allTasks={mergedTasks}
                                                                    onRemove={() => onRemoveTask(item.task.id)}
                                                                    indent={!!item.parentId}
                                                                />
                                                            );
                                                        });
                                                    })()}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </div>
                                ))}
                            </DragDropContext>
                        </>
                    ) : viewMode === 'graph' ? (
                        <div className="flex items-center justify-center h-full text-muted-foreground text-sm font-medium">
                            Graph visualization is temporarily disabled.
                        </div>
                    ) : (
                        <div className="h-full bg-card rounded-xl border border-border p-8 overflow-y-auto">
                            <div className="max-w-4xl mx-auto space-y-8">
                                {/* ... (Existing Map view content) ... */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                    <h2 className="text-xl font-bold">Dependency Workflow Plan</h2>
                                </div>

                                <div className="relative pl-8 border-l-2 border-dashed border-border/60 space-y-12">
                                    {mergedTasks
                                        .sort((a, b) => (a.graph_order || 0) - (b.graph_order || 0))
                                        .map((task, idx) => {
                                            const dep = mergedTasks.find(t => task.depends_on?.includes(t.id));
                                            const parent = mergedTasks.find(t => t.id === task.parent_id);
                                            return (
                                                <div key={`map-task-${task.id}`} className={cn("relative group", task.level === 1 ? "ml-12" : "")}>
                                                    {/* ... (Existing Map item content) ... */}
                                                    <div className={cn(
                                                        "absolute top-6 w-5 h-5 rounded-full bg-background border-2 z-10 flex items-center justify-center text-[10px] font-bold",
                                                        task.level === 1 ? "-left-[89px] border-border text-muted-foreground" : "-left-[41px] border-primary"
                                                    )}>
                                                        {task.level === 1 ? "↳" : idx + 1}
                                                    </div>
                                                    <Card className={cn(
                                                        "p-5 border-l-4",
                                                        task.status === 'DONE' ? "border-l-emerald-500 opacity-60" :
                                                            task.status === 'READY' ? "border-l-primary shadow-md scale-[1.02]" :
                                                                task.status === 'RUNNING' ? "border-l-blue-500 animate-pulse" : "border-l-amber-500/40",
                                                        task.level === 1 ? "bg-muted/30" : ""
                                                    )}>
                                                        <div className="flex justify-between items-start">
                                                            <div className="space-y-1">
                                                                <div className="flex flex-wrap items-center gap-2">
                                                                    <Badge variant={task.status === 'DONE' ? 'success' : 'default'} className={cn("text-[9px] uppercase font-bold tracking-widest", task.status === 'BLOCKED' ? "bg-amber-500/20 text-amber-700 hover:bg-amber-500/30 border-amber-500/30 text-[8px]" : "")}>
                                                                        {task.status_label}
                                                                    </Badge>
                                                                    <span className="text-sm font-bold">{task.title}</span>
                                                                    {parent && <Badge variant="default" className="text-[8px] opacity-70">Part of {parent.title}</Badge>}
                                                                </div>
                                                                {task.status === 'BLOCKED' && task.blocked_reason && (
                                                                    <p className="text-[10px] text-amber-600 font-bold italic mt-1">{task.blocked_reason}</p>
                                                                )}
                                                                <p className="text-xs text-muted-foreground line-clamp-2">{task.description}</p>
                                                            </div>
                                                            <Badge variant={task.task_type === 'AI' ? 'ai' : 'human'} className="uppercase text-[9px] font-bold">
                                                                {task.task_type}
                                                            </Badge>
                                                        </div>
                                                    </Card>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* AI Sidebar persistent on right */}
                <div className="w-[360px] hidden xl:flex h-full shrink-0 border-l border-border/40 pl-4 bg-muted/5 flex-col gap-4">
                    <div className="flex items-center gap-2 bg-muted/30 p-1 rounded-xl self-start mb-1">
                        <button
                            onClick={() => setSidebarView('ai')}
                            className={cn("px-3 py-1.5 rounded-lg text-[9px] font-black uppercase transition-all", sidebarView === 'ai' ? "bg-primary text-primary-foreground shadow-lg" : "hover:bg-muted opacity-40")}
                        >
                            AI Strategist
                        </button>
                        <button
                            onClick={() => setSidebarView('history')}
                            className={cn("px-3 py-1.5 rounded-lg text-[9px] font-black uppercase transition-all flex items-center gap-1.5", sidebarView === 'history' ? "bg-primary text-primary-foreground shadow-lg" : "hover:bg-muted opacity-40")}
                        >
                            <History className="w-3 h-3" />
                            History
                        </button>
                    </div>

                    <div className="flex-1 min-h-0">
                        {sidebarView === 'ai' ? (
                            project && (
                                <AiAssistantSidebar
                                    project={project}
                                    tasks={mergedTasks}
                                    onTaskAdded={(t) => { handleTaskAdded(t); refreshHistory(); }}
                                    isRegenerating={isRegenerating}
                                />
                            )
                        ) : (
                            <HistorySidebar projectId={id as string} refreshTrigger={historyTrigger} />
                        )}
                    </div>
                </div>
            </div>

            {/* Add Task Modal Re-simplified */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1000] flex items-center justify-center p-6 animate-in fade-in duration-300">
                    <div className="bg-card w-full max-w-xl rounded-[2rem] border border-border/40 shadow-2xl p-8 relative overflow-hidden">
                        <button onClick={() => setShowAddModal(false)} className="absolute top-6 right-6 p-2 rounded-full hover:bg-muted transition-colors opacity-40 hover:opacity-100">
                            <X className="w-5 h-5" />
                        </button>
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold tracking-tight">Add Work Item</h2>
                            <p className="text-sm text-muted-foreground mt-1">Inject a human or AI task into the execution graph.</p>
                        </div>
                        <form className="space-y-6" onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.currentTarget);
                            handleTaskAdded({
                                title: formData.get('title') as string,
                                description: formData.get('description') as string,
                                task_type: formData.get('type') as any,
                                depends_on: formData.get('dependency') ? [formData.get('dependency') as string] : [],
                                parent_id: formData.get('parent') as string || undefined
                            });
                        }}>
                            <div>
                                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest block mb-2 px-1">Task Identity</label>
                                <input name="title" placeholder="Project Plan / Security Audit / etc." className="w-full bg-muted border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all" required />
                            </div>
                            <div>
                                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest block mb-2 px-1">Description</label>
                                <textarea name="description" placeholder="A brief summary of what needs to be achieved..." className="w-full bg-muted border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all h-24 resize-none" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest block mb-2 px-1">Executor</label>
                                    <select name="type" className="w-full bg-muted border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-primary/20 outline-none">
                                        <option value="AI">AI Agent</option>
                                        <option value="HUMAN">Human Expert</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest block mb-2 px-1">Prerequisite</label>
                                    <select name="dependency" className="w-full bg-muted border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-primary/20 outline-none">
                                        <option value="">No Dependency</option>
                                        {mergedTasks.map(t => (
                                            <option key={t.id} value={t.id}>{t.title}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest block mb-2 px-1">Parent (Optional)</label>
                                <select name="parent" className="w-full bg-muted border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-primary/20 outline-none">
                                    <option value="">No Parent (New Task)</option>
                                    {mergedTasks.filter(t => t.level === 0 || !t.level).map(t => (
                                        <option key={t.id} value={t.id}>{t.title}</option>
                                    ))}
                                </select>
                            </div>
                            <button className="w-full bg-primary text-primary-foreground py-3.5 rounded-2xl font-bold uppercase tracking-widest text-xs mt-4 shadow-lg hover:opacity-90 active:scale-95 transition-all">
                                Inject into Workflow
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

function ParentHeader({ parent, allTasks }: { parent: Task, allTasks: Task[] }) {
    const totalSubtasks = allTasks.filter(t => t.parent_id === parent.id).length;
    const completedSubtasks = allTasks.filter(t => t.parent_id === parent.id && t.status === 'DONE').length;

    return (
        <div className="mt-4 mb-2 first:mt-0 flex items-center justify-between gap-2 px-2 py-1 bg-muted/20 rounded-lg border border-border/10">
            <span className="text-[10px] font-black uppercase text-foreground/50 tracking-tight flex items-center gap-2">
                <div className="w-1 h-3 bg-primary/20 rounded-full" />
                {parent.title}
            </span>
            {totalSubtasks > 0 && (
                <Badge variant="outline" className="text-[7px] h-3.5 px-1 font-black shrink-0 whitespace-nowrap bg-background/50 opacity-40">
                    {completedSubtasks}/{totalSubtasks} DONE
                </Badge>
            )}
        </div>
    );
}

function TaskCard({ task, index, id, isDemo, allTasks, onRemove, indent = false }: { task: Task, index: number, id: string, isDemo: boolean, allTasks: Task[], onRemove: () => void, indent?: boolean }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Draggable draggableId={task.id} index={index} isDragDisabled={isDemo}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className={cn("group", indent ? "pl-3 border-l-2 border-border/10 ml-2" : "")}
                >
                    <Card
                        title={(task.depends_on?.length || 0) > 0
                            ? `Dependencies: ${task.depends_on.map(id => allTasks.find(t => t.id === id)?.title || id).join(', ')}`
                            : 'No Dependencies'}
                        className={cn(
                            "transition-all border bg-card rounded-xl overflow-hidden p-3 relative shadow-sm",
                            snapshot.isDragging ? "shadow-2xl scale-[1.02] z-50 border-primary" : "hover:border-primary/40 hover:shadow-md",
                            task.status === 'BLOCKED' ? "border-amber-500/20 bg-amber-500/[0.01]" : "border-border/60",
                            task.status === 'READY' ? "border-primary/30 bg-primary/[0.02] ring-1 ring-primary/10" : "",
                            task.status === 'DONE' ? "opacity-60 grayscale-[0.3]" : ""
                        )}
                    >
                        <div className="flex items-center justify-between gap-2 overflow-hidden">
                            <div className="flex items-center gap-2 overflow-hidden flex-1 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                                <div className="flex flex-col gap-1 overflow-hidden">
                                    <div className="flex items-center gap-2">
                                        <div {...provided.dragHandleProps} className="p-1 hover:bg-muted rounded text-muted-foreground/20 hover:text-primary transition-colors cursor-grab active:cursor-grabbing">
                                            <KanbanSquare className="w-3 h-3" />
                                        </div>
                                        <Badge variant="outline" className={cn(
                                            "text-[7px] px-1 h-3.5 uppercase font-black border-none shrink-0",
                                            task.task_type === 'AI' ? "bg-primary/10 text-primary" : "bg-emerald-500/10 text-emerald-600"
                                        )}>
                                            {task.task_type === 'AI' ? 'AI' : 'HI'}
                                        </Badge>
                                        <span className="p-0.5 opacity-40">
                                            {isExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                                        </span>
                                    </div>
                                    <span className={cn(
                                        "font-bold truncate tracking-tight text-[11px] leading-none text-foreground/90",
                                        task.status === 'DONE' ? "line-through opacity-50" : ""
                                    )}>
                                        {task.title}
                                    </span>
                                    {/* Risk Badge on Card */}
                                    {allTasks.some(t => t.id === task.id) && (
                                        <div className="flex flex-wrap gap-1 mt-1">
                                            {task.depends_on.some(id => !allTasks.find(t => t.id === id)) && (
                                                <Badge className="bg-rose-500/10 text-rose-600 border-none text-[7px] h-3.5 px-1 font-bold">
                                                    Broken Link
                                                </Badge>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-1 shrink-0">
                                {task.status === 'READY' && (
                                    <Link
                                        href={`/project/${id}/task/${task.id}`}
                                        className="h-5 px-2 rounded bg-primary text-primary-foreground text-[8px] font-black uppercase tracking-widest hover:scale-[1.05] transition-all flex items-center shadow-sm"
                                    >
                                        Start
                                    </Link>
                                )}
                                <Link href={`/project/${id}/task/${task.id}`} className="p-1 opacity-20 hover:opacity-100 hover:bg-muted rounded text-muted-foreground">
                                    <ArrowUpRight className="w-3 h-3" />
                                </Link>
                                {task.status !== 'DONE' && (
                                    <button
                                        onClick={(e) => { e.stopPropagation(); onRemove(); }}
                                        className="p-1 hover:bg-destructive/10 rounded text-muted-foreground/40 hover:text-destructive transition-colors"
                                        title="Remove from Strategy"
                                    >
                                        <Trash2 className="w-3 h-3" />
                                    </button>
                                )}
                            </div>
                        </div>

                        {isExpanded && task.description && (
                            <div className="mt-2 pt-2 border-t border-border/10 animate-in slide-in-from-top-1 duration-200">
                                <p className="text-[10px] text-muted-foreground leading-relaxed">
                                    {task.description}
                                </p>
                                {task.capability && (
                                    <Badge variant="outline" className="mt-2 text-[7px] font-black uppercase tracking-widest px-1">
                                        {task.capability}
                                    </Badge>
                                )}
                            </div>
                        )}

                        {task.status_explanation && (
                            <p className={cn(
                                "text-[8px] font-bold truncate uppercase tracking-tighter mt-1 italic",
                                task.status === 'BLOCKED' ? "text-amber-600/70" : "text-primary/60"
                            )}>
                                {task.status_explanation}
                            </p>
                        )}
                    </Card>
                </div>
            )}
        </Draggable>
    );
}
