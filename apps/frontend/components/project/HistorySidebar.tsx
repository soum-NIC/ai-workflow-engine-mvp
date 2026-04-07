'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { History, Clock, PlusCircle, Trash2, ArrowRightLeft, CheckCircle2 } from 'lucide-react';
import { cn } from '@shared/lib/utils';
import { formatDistanceToNow } from 'date-fns';

interface HistorySidebarProps {
    projectId: string;
    refreshTrigger: number;
}

export function HistorySidebar({ projectId, refreshTrigger }: HistorySidebarProps) {
    const [history, setHistory] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchHistory() {
            try {
                const res = await fetch(`/api/projects/${projectId}/history`);
                if (res.ok) {
                    const data = await res.json();
                    setHistory(data);
                }
            } catch (error) {
                console.error("Failed to fetch history", error);
            } finally {
                setLoading(false);
            }
        }
        fetchHistory();
    }, [projectId, refreshTrigger]);

    const getIcon = (type: string) => {
        switch (type) {
            case 'CREATE': return <PlusCircle className="w-3 h-3 text-emerald-500" />;
            case 'DELETE': return <Trash2 className="w-3 h-3 text-destructive" />;
            case 'STATUS_CHANGE': return <ArrowRightLeft className="w-3 h-3 text-primary" />;
            case 'DONE': return <CheckCircle2 className="w-3 h-3 text-emerald-600" />;
            default: return <Clock className="w-3 h-3 text-muted-foreground" />;
        }
    };

    const getActionLabel = (log: any) => {
        switch (log.action_type) {
            case 'CREATE': return `Initialized: ${log.metadata?.title}`;
            case 'DELETE': return `Removed: ${log.metadata?.title}`;
            case 'STATUS_CHANGE': return `Moved: ${log.metadata?.from} → ${log.metadata?.to}`;
            default: return log.action_type;
        }
    };

    return (
        <Card className="flex flex-col border-border/40 bg-card/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl h-full border-l">
            <div className="p-4 border-b border-border/40 bg-primary/[0.02] flex items-center gap-2.5">
                <History className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-black tracking-tight uppercase">Mission History</h3>
            </div>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 custom-scrollbar">
                {loading ? (
                    <div className="flex flex-col gap-3">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-10 bg-muted/20 animate-pulse rounded-lg" />
                        ))}
                    </div>
                ) : history.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-40 opacity-20 italic text-[10px]">
                        No strategic shifts recorded yet.
                    </div>
                ) : (
                    <div className="flex flex-col gap-5 relative">
                        <div className="absolute left-[7px] top-0 bottom-0 w-[1px] bg-border/20 z-0" />
                        {history.map((log, i) => (
                            <div key={log.id || i} className="flex gap-3 relative z-10">
                                <div className="mt-1 bg-background border border-border/40 rounded-full p-1 shadow-sm shrink-0">
                                    {getIcon(log.action_type)}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-[10px] font-bold text-foreground/80 leading-tight">
                                        {getActionLabel(log)}
                                    </p>
                                    <div className="flex items-center gap-1.5 opacity-40">
                                        <Clock className="w-2.5 h-2.5" />
                                        <span className="text-[8px] font-black uppercase tracking-widest">
                                            {formatDistanceToNow(new Date(log.timestamp))} ago
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <p className="text-[8px] text-center mb-4 text-muted-foreground/30 font-black uppercase tracking-widest">
                Immutable Strategic Trace
            </p>
        </Card>
    );
}
