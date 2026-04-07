'use client';

import { useEffect, useState, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Task, TaskStatus } from '@shared/types/task';
import { Project } from '@shared/types/project';
import { Loader2, ArrowLeft, Bot, Play, CheckCircle2, Download, FileText, Paperclip, Plus, Trash2, Send, Save, FileSpreadsheet, FileArchive, AlertTriangle, Lock } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ReactMarkdown from 'react-markdown';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { computeWorkflowState } from '@/../../engine/execution/unified-engine';
import { cn } from '@shared/lib/utils';

export default function TaskExecutionPage() {
    const { id, taskId: rawTaskId } = useParams();
    const taskId = Array.isArray(rawTaskId) ? rawTaskId[0] : rawTaskId;
    const router = useRouter();

    const [task, setTask] = useState<Task | null>(null);
    const [project, setProject] = useState<Project | null>(null);
    const [executing, setExecuting] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [newFinding, setNewFinding] = useState('');
    const [allTasks, setAllTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [warning, setWarning] = useState<string | null>(null);
    const [updatingDep, setUpdatingDep] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const isBlocked = task?.status === 'BLOCKED';

    // 1. Status Override Utility
    const saveStatusOverride = (newStatus: TaskStatus) => {
        if (!id || !taskId) return;
        const overrideKey = `workflow_status_overrides_${id}`;
        const overrides = JSON.parse(localStorage.getItem(overrideKey) || '{}');
        overrides[taskId] = newStatus;
        localStorage.setItem(overrideKey, JSON.stringify(overrides));
    };

    // 2. Main Load Effect
    useEffect(() => {
        if (typeof window === 'undefined' || !id || !taskId) return;

        async function loadTask() {
            try {
                setLoading(true);
                const projectRes = await fetch(`/api/projects/${id}`);

                let pData: any = {};
                if (!projectRes.ok) {
                    if (projectRes.status === 404) {
                        console.warn("Mission context not found on server. Reverting to tactical local cache.");
                        // Attempt to reconstruct context from localStorage
                        const localProj = localStorage.getItem(`workflow_project_${id}`);
                        pData = {
                            project: localProj ? JSON.parse(localProj) : { id, title: "Tactical Mission (No Sync)", is_demo_project: true },
                            tasks: []
                        };
                    } else {
                        throw new Error("Failed to load mission context");
                    }
                } else {
                    pData = await projectRes.json();
                }

                setProject(pData.project);
                const dbTasks: Task[] = pData.tasks || [];
                const localUser = localStorage.getItem(`workflow_user_tasks_${id}`);
                const userTasks: Task[] = localUser ? JSON.parse(localUser) : [];

                const uniqueMap = new Map<string, Task>();
                [...userTasks, ...dbTasks].forEach((t, index) => {
                    const finalId = t.id || `recovered-${index}`;
                    uniqueMap.set(finalId, { ...t, id: finalId });
                });

                const dedupedById = Array.from(uniqueMap.values());
                const activeIds = new Set(dedupedById.map(t => t.id));
                const merged = dedupedById.map(t => ({
                    ...t,
                    depends_on: (t.depends_on || ((t as any).dependency_task_id ? [(t as any).dependency_task_id] : [])).filter(i => activeIds.has(i)),
                    parent_id: t.parent_id || (t as any).parent_task_id
                })) as Task[];

                const recomputed = computeWorkflowState(merged);
                setAllTasks(recomputed);

                const foundTask = recomputed.find((t: any) => t.id === taskId);

                if (foundTask) {
                    setTask(foundTask);

                    if (foundTask.status === 'READY') {
                        setTask(prev => prev ? { ...prev, status: 'RUNNING', status_label: 'In Progress' } : null);
                        saveStatusOverride('RUNNING');

                        const uTasks: Task[] = JSON.parse(localStorage.getItem(`workflow_user_tasks_${id}`) || '[]');
                        const idx = uTasks.findIndex(t => t.id === taskId);
                        if (idx !== -1) {
                            uTasks[idx].status = 'RUNNING';
                            localStorage.setItem(`workflow_user_tasks_${id}`, JSON.stringify(uTasks));
                        }

                        fetch('/api/tasks/status', {
                            method: 'PATCH',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ task_id: taskId, status: 'RUNNING' })
                        }).catch(console.error);
                    }
                } else {
                    setError("Architectural Work Item not found in current mission context.");
                }
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        loadTask();
    }, [id, taskId]);

    // 3. Draft Persistence Effect (Load)
    useEffect(() => {
        if (!id || !taskId || loading || isBlocked) return;
        const draftKey = `workflow_draft_${id}_${taskId}`;
        const savedDraft = localStorage.getItem(draftKey);
        if (savedDraft) {
            const { feedback: f, newFinding: nf } = JSON.parse(savedDraft);
            setFeedback(prev => prev || f || '');
            setNewFinding(prev => prev || nf || '');
        }
    }, [id, taskId, loading, isBlocked]);

    // 4. Draft Persistence Effect (Save)
    useEffect(() => {
        if (!id || !taskId || loading || isBlocked) return;
        const draftKey = `workflow_draft_${id}_${taskId}`;
        localStorage.setItem(draftKey, JSON.stringify({ feedback, newFinding }));
    }, [feedback, newFinding, id, taskId, loading, isBlocked]);

    // 5. Status Override Watcher
    useEffect(() => {
        if (!id || !taskId || loading || !task) return;
        const overrideKey = `workflow_status_overrides_${id}`;
        const overrides = JSON.parse(localStorage.getItem(overrideKey) || '{}');
        if (overrides[taskId] && task.status !== overrides[taskId]) {
            setTask(prev => prev ? { ...prev, status: overrides[taskId] } : null);
        }
    }, [id, taskId, loading, task?.status]);

    // HANDLERS
    const handleUpdateDependency = async (depId: string | null) => {
        try {
            setUpdatingDep(true);
            const res = await fetch('/api/tasks/dependency', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ task_id: taskId, dependency_task_id: depId })
            });
            if (!res.ok) throw new Error("Failed to update dependency");
            const updated = await res.json();
            setTask(prev => prev ? { ...prev, depends_on: updated.depends_on || (updated.dependency_task_id ? [updated.dependency_task_id] : []) } : null);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setUpdatingDep(false);
        }
    };

    const handleExecute = async () => {
        if (isBlocked) return;
        try {
            setExecuting(true);
            setError('');
            const res = await fetch('/api/ai/execute-task', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ task_id: taskId })
            });
            if (!res.ok) throw new Error("Execution failed");
            const updated = await res.json();
            setTask(updated);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setExecuting(false);
        }
    };

    const handleCompleteHuman = async () => {
        if (isBlocked || !feedback.trim() || !task) return;
        setSubmitting(true);
        try {
            const findingsSection = (task.findings || []).length > 0
                ? `\n\n### Tactical Findings\n${task.findings!.map(f => `- **${new Date(f.created_at).toLocaleDateString()} ${new Date(f.created_at).toLocaleTimeString()}**: ${f.text}`).join('\n')}`
                : '';

            const attachmentsSection = (task.attachments || []).length > 0
                ? `\n\n### Strategic Artifacts\n${task.attachments!.map(a => `- **${a.name}** (${(a.size / 1024).toFixed(1)} KB) - Attached at ${new Date(a.uploaded_at).toLocaleTimeString()}`).join('\n')}`
                : '';

            const finalFeedback = `### Human Expert Final Analysis\n\n${feedback}${findingsSection}${attachmentsSection}`;

            const res = await fetch('/api/tasks/complete-human', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ task_id: taskId, feedback: finalFeedback })
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => ({}));
                const serverError = errorData.error || res.statusText || 'Unknown server error';
                console.error("Mission sync failure:", serverError);

                const isLocal = taskId?.toString().startsWith('local-');
                const isNotFound = serverError.toLowerCase().includes('not found') || res.status === 404;

                if (isLocal || project?.is_demo_project || isNotFound) {
                    setWarning(`Mission archived locally. Sync failure: ${serverError}`);
                } else {
                    throw new Error(`Failed to submit mission output: ${serverError}`);
                }
            }

            saveStatusOverride('DONE');
            setTask(prev => prev ? { ...prev, status: 'DONE', ai_output: finalFeedback } : null);
            localStorage.removeItem(`workflow_draft_${id}_${taskId}`);

            // Auto-redirect or refresh since we've completed the mission item
            setTimeout(() => {
                router.refresh();
            }, 1000);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setSubmitting(false);
        }
    };

    const handleAddFinding = async () => {
        if (isBlocked || !newFinding.trim() || !task) return;
        const finding = { id: `f-${Date.now()}`, text: newFinding, author: 'Human Expert', created_at: new Date().toISOString() };
        const updatedFindings = [...(task.findings || []), finding];

        try {
            await fetch(`/api/tasks/${taskId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ findings: updatedFindings })
            });
        } catch (err) {
            console.error("Local sync only for finding");
        } finally {
            setTask(prev => prev ? { ...prev, findings: updatedFindings } : null);
            setNewFinding('');
        }
    };

    const onFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isBlocked) return;
        const file = e.target.files?.[0];
        if (!file || !task) return;
        const fileName = file.name;
        const reader = new FileReader();

        reader.onload = async (event) => {
            const base64Url = event.target?.result as string;
            const attachment = { id: `a-${Date.now()}`, name: fileName, url: base64Url || '#', size: file.size, uploaded_at: new Date().toISOString() };
            const updatedAttachments = [...(task.attachments || []), attachment];

            try {
                await fetch(`/api/tasks/${taskId}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ attachments: updatedAttachments })
                });
            } catch (err) {
                console.error("Local sync only for attachment");
            } finally {
                setTask(prev => prev ? { ...prev, attachments: updatedAttachments } : null);
            }
        };
        reader.readAsDataURL(file);
    };

    const handleAddAttachment = () => fileInputRef.current?.click();

    // RENDER HELPERS
    if (loading) return <div className="p-12 text-center text-muted-foreground"><Loader2 className="w-8 h-8 animate-spin mx-auto" /></div>;
    if (error || !task) return <div className="p-12 text-error text-center font-medium bg-error/10 border border-error/20 rounded-lg">{error}</div>;

    return (
        <div className="max-w-5xl mx-auto space-y-6 pb-20">
            <Link
                href={`/project/${id}/board`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Workflow Board
            </Link>

            {warning && (
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 flex items-center gap-3 animate-in fade-in duration-300">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                    <p className="text-[10px] text-amber-800 font-bold uppercase tracking-widest">{warning}</p>
                </div>
            )}

            {/* BLOCKED ALERT BANNER */}
            {isBlocked && (
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 animate-in slide-in-from-top-2 duration-500 shadow-xl shadow-amber-500/5">
                    <div className="w-14 h-14 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-500/30">
                        <Lock className="w-7 h-7 text-amber-600 animate-pulse" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-lg font-black uppercase tracking-tight text-amber-900 leading-tight">Interaction Blocked</h3>
                        <p className="text-sm text-amber-700/80 font-medium leading-relaxed">
                            This mission step is currently <span className="font-black text-amber-800 underline underline-offset-2">LOCKED</span>. You must complete all dependency tasks identified in the workflow architecture before execution can proceed.
                        </p>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-3">
                            {task.depends_on?.map(depId => {
                                const dep = allTasks.find(t => t.id === depId);
                                return (
                                    <Badge key={depId} variant="outline" className="bg-amber-500/10 border-amber-500/20 text-amber-800 text-[9px] font-black uppercase tracking-widest px-2">
                                        Waiting on: {dep?.title || depId}
                                    </Badge>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-border">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                        <Badge variant={task.task_type === 'AI' ? 'ai' : 'human'} className="uppercase tracking-widest text-[10px] font-bold">
                            {task.task_type} WORK ITEM
                        </Badge>
                        <Badge variant={task.status === 'DONE' ? 'success' : 'default'} className={cn("uppercase tracking-widest text-[10px] font-bold", task.status === 'BLOCKED' ? 'bg-amber-500 hover:bg-amber-600 text-white border-amber-500' : '')}>
                            {task.status_label || task.status}
                        </Badge>
                        {task.status_explanation && (
                            <span className={cn(
                                "text-[10px] font-black uppercase tracking-tighter italic",
                                task.status === 'BLOCKED' ? "text-amber-600/60" : "text-primary/60"
                            )}>
                                {task.status_explanation}
                            </span>
                        )}
                    </div>
                    <h1 className="text-page-title mb-2 truncate max-w-full">{task.title}</h1>
                    <p className="text-muted-foreground max-w-2xl">{task.description || "No description provided."}</p>

                    {/* Sub-tasks Registry Section */}
                    {(() => {
                        const subTasks = allTasks.filter(t => t.parent_id === taskId);
                        if (subTasks.length === 0) return null;
                        return (
                            <div className="mt-8 pt-6 border-t border-border/20">
                                <div className="flex items-center gap-2 mb-4 text-xs font-black uppercase tracking-widest text-primary/60">
                                    <Bot className="w-3.5 h-3.5" />
                                    Child Work Items ({subTasks.length})
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {subTasks.map(st => (
                                        <Link
                                            key={st.id}
                                            href={`/project/${id}/task/${st.id}`}
                                            className="group flex flex-col p-3 bg-muted/20 border border-border/40 rounded-xl hover:border-primary/20 hover:bg-muted/40 transition-all shadow-sm"
                                        >
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-[11px] font-bold truncate pr-2">{st.title}</span>
                                                <Badge variant={st.status === 'DONE' ? 'success' : 'outline'} className="text-[7px] h-3.5 px-1 uppercase shrink-0 font-black tracking-widest">
                                                    {st.status === 'DONE' ? 'DONE' : st.status}
                                                </Badge>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[8px] uppercase font-black text-muted-foreground/40">{st.task_type} EXECUTION</span>
                                                <div className={cn("w-1.5 h-1.5 rounded-full", st.status === 'DONE' ? "bg-emerald-500" : st.status === 'RUNNING' ? "bg-blue-500 animate-pulse" : "bg-muted")} />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })()}

                    <div className="flex flex-wrap gap-4 mt-6">
                        {task.capability && (
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground/60">Capability</span>
                                <div className="px-3 py-1 bg-muted rounded-md text-sm font-medium border border-border/50">
                                    {task.capability}
                                </div>
                            </div>
                        )}
                        <div className="flex flex-col gap-1 min-w-[240px]">
                            <span className="text-[10px] uppercase font-bold tracking-widest text-primary flex items-center gap-2 font-black leading-none mb-1">
                                Execution Prerequisite {updatingDep && <Loader2 className="w-3 h-3 animate-spin" />}
                            </span>
                            <select
                                className="bg-background border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                value={task.depends_on?.[0] || ""}
                                onChange={(e) => handleUpdateDependency(e.target.value || null)}
                                disabled={updatingDep || isBlocked || (project?.is_demo_project ?? false)}
                            >
                                <option value="">No Prerequisite (Starts Ready)</option>
                                {allTasks
                                    .filter(t => t.id !== taskId)
                                    .map(t => (
                                        <option key={t.id} value={t.id}>{t.title} ({t.status})</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 transition-all duration-500", isBlocked ? "opacity-60 pointer-events-none grayscale-[0.5]" : "")}>
                <div className="col-span-1 space-y-6">
                    <Card>
                        <CardHeader className="pb-3 border-b border-border bg-muted/10">
                            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Architect Reasoning</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-4 space-y-4">
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-bold uppercase text-muted-foreground/60 leading-none">Capability Detected</span>
                                <span className="text-sm font-semibold text-primary">{task.capability || 'GENERAL_TASK'}</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-bold uppercase text-muted-foreground/60 leading-none">Executor Type</span>
                                <span className="text-sm font-semibold">{task.task_type}</span>
                            </div>
                        </CardContent>
                    </Card>

                    {task.task_type === 'HUMAN' && task.status !== 'DONE' && (
                        <div className="space-y-6">
                            <Card className="border-primary/20 bg-primary/[0.02]">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                                        <FileText className="w-4 h-4 text-primary" />
                                        Mission Findings Log
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                        {(task.findings || []).map((finding) => (
                                            <div key={finding.id} className="p-3 bg-card border border-border/40 rounded-xl relative group shadow-sm">
                                                <p className="text-xs text-foreground/90 font-light leading-relaxed">{finding.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex gap-2">
                                        <textarea
                                            value={newFinding}
                                            onChange={(e) => setNewFinding(e.target.value)}
                                            placeholder={isBlocked ? "Dependencies incomplete..." : "Enter tactical finding..."}
                                            disabled={isBlocked}
                                            className="flex-1 bg-muted/40 border-none rounded-xl p-3 text-xs focus:ring-1 focus:ring-primary/40 outline-none transition-all resize-none h-16"
                                        />
                                        <Button onClick={handleAddFinding} disabled={isBlocked || !newFinding.trim()} size="icon" className="h-16 w-12 rounded-xl">
                                            <Plus className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-info/20 bg-info/[0.02]">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                                        <Paperclip className="w-4 h-4 text-info" />
                                        Strategic Artifacts
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2 max-h-[200px] overflow-y-auto custom-scrollbar">
                                        {(task.attachments || []).map((att) => (
                                            <div key={att.id} className="flex items-center justify-between p-2 bg-card border border-border/40 rounded-lg group shadow-sm">
                                                <div className="flex items-center gap-2 overflow-hidden">
                                                    <Paperclip className="w-3 h-3 text-info shrink-0" />
                                                    <span className="text-[10px] truncate font-medium">{att.name}</span>
                                                </div>
                                                <span className="text-[8px] opacity-40 font-black uppercase tracking-tighter italic shrink-0">
                                                    {(att.size / 1024).toFixed(0)} KB
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <input type="file" ref={fileInputRef} onChange={onFileSelected} style={{ display: 'none' }} />
                                    <Button onClick={handleAddAttachment} disabled={isBlocked} variant="outline" className="w-full border-dashed border-2 py-8 rounded-2xl text-[10px] uppercase font-black tracking-widest gap-2 bg-transparent hover:bg-info/5 transition-all">
                                        <Plus className="w-4 h-4" />
                                        Attach Tactical Document
                                    </Button>
                                </CardContent>
                            </Card>

                            <div className="pt-8">
                                <Card className="border-emerald-500/30 bg-emerald-500/[0.02] shadow-xl shadow-emerald-500/5 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                                        <CheckCircle2 className="w-32 h-32 text-emerald-500" />
                                    </div>
                                    <CardHeader className="pb-3 border-b border-emerald-500/10">
                                        <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-emerald-600">
                                            <CheckCircle2 className="w-4 h-4" />
                                            Mission Completion Final Release
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-5 space-y-6">
                                        <textarea
                                            value={feedback}
                                            onChange={(e) => setFeedback(e.target.value)}
                                            placeholder={isBlocked ? "Mission item currently locked." : "Summarize final outputs for permanent archive..."}
                                            disabled={isBlocked}
                                            className="w-full bg-background border border-border/60 rounded-xl p-4 text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/40 outline-none h-40 resize-none transition-all placeholder:italic shadow-inner"
                                        />
                                        <div className="flex flex-col gap-4">
                                            <Button
                                                className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-widest px-8 shadow-xl shadow-emerald-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all rounded-2xl flex items-center justify-center gap-3"
                                                onClick={handleCompleteHuman}
                                                disabled={isBlocked || submitting || !feedback.trim()}
                                            >
                                                {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                                                    <>
                                                        <Send className="w-4 h-4" />
                                                        Authorize Completion
                                                    </>
                                                )}
                                            </Button>
                                            <p className="text-[8px] text-center font-black uppercase tracking-widest text-muted-foreground/50 px-4 leading-relaxed italic">
                                                Finalizing this release will archive the work item and unlock downstream dependencies.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    )}

                    {task.task_type === 'AI' && (
                        <Card className={cn(isBlocked ? "border-amber-500/20 shadow-none bg-amber-500/[0.01]" : "")}>
                            <CardHeader>
                                <div className="flex items-center gap-2 mb-2">
                                    {isBlocked ? <Lock className="w-5 h-5 text-amber-500" /> : <Bot className="w-5 h-5 text-primary" />}
                                    <CardTitle className="text-sm font-black uppercase tracking-widest">Autonomous Execution</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <Button
                                    onClick={handleExecute}
                                    disabled={isBlocked || executing || (project?.is_demo_project ?? false)}
                                    className={cn("w-full h-14 flex items-center gap-3 font-black uppercase tracking-widest text-xs rounded-2xl transition-all", isBlocked ? "bg-muted text-muted-foreground opacity-50" : "bg-primary shadow-xl shadow-primary/20 hover:scale-[1.02]")}
                                >
                                    {executing ? <><Loader2 className="w-5 h-5 animate-spin" /> Running...</> : isBlocked ? <><Lock className="w-4 h-4" /> Locked</> : <><Play className="w-5 h-5 fill-current" /> Start Work Item</>}
                                </Button>
                            </CardContent>
                        </Card>
                    )}
                </div>

                <div className="col-span-1 md:col-span-2">
                    <Card className="h-full min-h-[400px]">
                        <CardHeader className="border-b border-border bg-muted/20 flex flex-row items-center justify-between">
                            <CardTitle className="text-sm font-black uppercase tracking-widest text-muted-foreground">Output & Verified Artifacts</CardTitle>
                            {task.ai_output && (
                                <Button variant="outline" size="sm" onClick={() => window.print()} className="h-8 gap-2 text-[10px] font-black uppercase tracking-widest border-primary/20">
                                    <Download className="w-3.5 h-3.5" />
                                    Export PDF
                                </Button>
                            )}
                        </CardHeader>
                        <CardContent className="p-0">
                            {task.ai_output ? (
                                <div className="prose prose-sm dark:prose-invert max-w-none p-6 text-body print-content">
                                    <ReactMarkdown>{task.ai_output}</ReactMarkdown>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center p-16 text-center text-muted-foreground h-full min-h-[400px]">
                                    <Bot className="w-12 h-12 mb-4 opacity-10" />
                                    <p className="font-black uppercase tracking-widest text-xs opacity-40 italic">Waiting for execution authorization...</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
