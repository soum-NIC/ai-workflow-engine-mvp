'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, Target, Loader2 } from 'lucide-react';
import { cn } from '@shared/lib/utils';
import { ChatProposal } from '@/components/ai/chat-proposal';
import { Project } from '@shared/types/project';
import { Task } from '@shared/types/task';

interface AiAssistantSidebarProps {
    project: Project;
    tasks: Task[];
    onTaskAdded: (newTask: Task) => void;
    isRegenerating: boolean;
}

export function AiAssistantSidebar({ project, tasks, onTaskAdded, isRegenerating }: AiAssistantSidebarProps) {
    const [chatMessages, setChatMessages] = useState<any[]>([
        { role: 'assistant', text: "Hello strategist. System initialized. I'm analyzing your workflow architecture now." }
    ]);
    const [chatInput, setChatInput] = useState('');
    const [sendingChat, setSendingChat] = useState(false);
    const [committedProposals, setCommittedProposals] = useState<Set<string>>(new Set());

    // Auto-analysis message
    useEffect(() => {
        if (tasks.length > 0 && chatMessages.length === 1) {
            const ready = tasks.filter(t => t.status === 'READY').sort((a, b) => (a.graph_order || 0) - (b.graph_order || 0))[0];
            if (ready) {
                setChatMessages(prev => [
                    ...prev,
                    { role: 'assistant', text: `Analysis complete. The most efficient path forward is to start: "${ready.title}". This will accelerate unblocking downstream dependencies.` }
                ]);
            }
        }
    }, [tasks, chatMessages.length]);

    const handleSendChat = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!chatInput.trim() || sendingChat) return;

        const userText = chatInput.trim();
        setChatInput('');
        setSendingChat(true);

        const newMessages = [...chatMessages, { role: 'user', text: userText }];
        setChatMessages(newMessages);

        try {
            const res = await fetch('/api/ai/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: newMessages.map(m => ({ role: m.role, content: m.text })),
                    project,
                    tasks: tasks
                })
            });

            if (!res.ok) throw new Error("Failed to reach strategist");
            const data = await res.json();

            setChatMessages(prev => [...prev, {
                role: 'assistant',
                text: data.text,
                actions: data.actions || []
            }]);
        } catch (error) {
            console.error("Chat failed", error);
            setChatMessages(prev => [...prev, { role: 'assistant', text: "System overhead detected. My strategic analysis is momentarily delayed. Please retry." }]);
        } finally {
            setSendingChat(false);
        }
    };

    const handleCommitProposal = (proposal: any) => {
        const newTask: Task = {
            id: `ai-suggest-${Date.now()}`,
            title: proposal.title,
            description: proposal.description,
            status: 'READY',
            task_type: 'AI',
            graph_order: Math.max(...tasks.map(t => t.graph_order || 0)) + 0.1,
            level: proposal.parent_id ? 1 : 0,
            parent_id: proposal.parent_id,
            depends_on: proposal.depends_on || [],
            phase_id: tasks[0]?.phase_id || 'p1',
            task_order: tasks.length + 1,
            created_at: new Date().toISOString(),
            meta: {
                source: 'AI_STRATEGIST',
                is_removed: false
            }
        };

        onTaskAdded(newTask);
        setCommittedProposals(prev => new Set([...prev, JSON.stringify(proposal)]));
    };

    return (
        <Card className="flex flex-col border-border/40 bg-card/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl relative h-full">
            <div className="p-4 border-b border-border/40 bg-primary/[0.02] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <Bot className="w-4 h-4 text-primary" />
                    <h3 className="text-sm font-black tracking-tight">AI Command Center</h3>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/10 text-emerald-500 rounded text-[9px] font-black uppercase">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                    Live
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 custom-scrollbar">
                {chatMessages.map((msg, i) => (
                    <div key={i} className="flex flex-col gap-2">
                        <div className={cn("max-w-[85%] rounded-2xl p-3 text-[11px] leading-relaxed shadow-sm",
                            msg.role === 'assistant' ? "bg-muted text-foreground self-start rounded-tl-none border border-border/40" : "bg-primary text-primary-foreground self-end rounded-tr-none")}>
                            {msg.text}
                        </div>
                        {msg.actions?.map((action: any, idx: number) => (
                            action.type === 'PROPOSE_TASK' && (
                                <div key={idx} className="self-start w-[85%]">
                                    <ChatProposal
                                        proposal={action.payload}
                                        onCommit={handleCommitProposal}
                                        isCommitted={committedProposals.has(JSON.stringify(action.payload))}
                                    />
                                </div>
                            )
                        ))}
                    </div>
                ))}
                {(sendingChat || isRegenerating) && (
                    <div className="flex items-center gap-2 text-muted-foreground/40 animate-pulse font-black uppercase text-[8px] tracking-widest pl-2">
                        <Bot className="w-3 h-3 animate-bounce" />
                        {isRegenerating ? 'Regenerating Workflow...' : 'Thinking...'}
                    </div>
                )}
            </div>

            <form onSubmit={handleSendChat} className="p-4 pt-0">
                <div className="flex items-center gap-2 bg-muted/50 p-2 rounded-xl border border-border/60 focus-within:border-primary/40 focus-within:ring-2 focus-within:ring-primary/5 transition-all">
                    <input
                        value={chatInput}
                        onChange={e => setChatInput(e.target.value)}
                        placeholder="Optimize current phase / add subtasks..."
                        className="flex-1 bg-transparent border-none text-[11px] outline-none placeholder:text-muted-foreground/50 px-2"
                    />
                    <button type="submit" disabled={sendingChat || isRegenerating} className="h-8 w-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:opacity-90 active:scale-95 transition-all disabled:opacity-20">
                        <Target className="w-4 h-4 -rotate-45" />
                    </button>
                </div>
                <p className="text-[8px] text-center mt-3 text-muted-foreground/40 font-black uppercase tracking-widest">Architect Interaction Mode Enabled</p>
            </form>
        </Card>
    );
}
