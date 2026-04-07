'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Task } from '@shared/types/task';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, Plus, ChevronRight, ChevronDown, Trash2 } from 'lucide-react';
import { cn } from '@shared/lib/utils';

interface NodePos {
    x: number;
    y: number;
}

interface WorkflowGraphViewProps {
    tasks: Task[];
    onConnect: (taskId: string, depId: string) => void;
    onDisconnect: (taskId: string) => void;
    onRemove: (taskId: string) => void;
}

export function WorkflowGraphView({ tasks, onConnect, onDisconnect, onRemove }: WorkflowGraphViewProps) {
    const [positions, setPositions] = useState<Record<string, NodePos>>({});
    const [dragging, setDragging] = useState<string | null>(null);
    const [collapsed, setCollapsed] = useState<Set<string>>(new Set());
    const [connectingFrom, setConnectingFrom] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Initial Layout (Grid-based for roots + vertical for children)
    useEffect(() => {
        const initialPositions: Record<string, NodePos> = {};
        const roots = tasks.filter(t => !t.parent_id);
        const COL_COUNT = Math.max(3, Math.ceil(Math.sqrt(roots.length))); // Grid logic

        roots.forEach((root, ridx) => {
            const col = ridx % COL_COUNT;
            const row = Math.floor(ridx / COL_COUNT);

            // Base X/Y for the root
            const baseX = 50 + col * 320;
            const baseY = 50 + row * 400; // Large vertical gap for children

            initialPositions[root.id] = { x: baseX, y: baseY };

            const children = tasks.filter(t => t.parent_id === root.id);
            children.forEach((child, cidx) => {
                initialPositions[child.id] = { x: baseX + 20, y: baseY + 140 + cidx * 80 };
            });
        });
        setPositions(initialPositions);
    }, [tasks]);

    const handleMouseDown = (id: string, e: React.MouseEvent) => {
        if (e.button !== 0) return;
        setDragging(id);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!dragging || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const scrollLeft = containerRef.current.scrollLeft;
        const scrollTop = containerRef.current.scrollTop;

        const x = e.clientX - rect.left + scrollLeft - 100;
        const y = e.clientY - rect.top + scrollTop - 30;
        setPositions(prev => ({ ...prev, [dragging]: { x, y } }));
    };

    const handleMouseUp = () => setDragging(null);

    const toggleCollapse = (id: string) => {
        const next = new Set(collapsed);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        setCollapsed(next);
    };

    const isVisible = (task: Task) => {
        if (!task.parent_id) return true;
        return !collapsed.has(task.parent_id);
    };

    return (
        <div
            ref={containerRef}
            className="flex-1 bg-[#0a0a0b] bg-[radial-gradient(#1e1e24_1px,transparent_1px)] [background-size:20px_20px] relative overflow-auto rounded-xl border border-border p-4"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div className="relative min-w-[3000px] min-h-[3000px]">
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <defs>
                        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                            <path d="M0,0 L0,6 L9,3 z" fill="currentColor" className="text-primary/40" />
                        </marker>
                    </defs>
                    {tasks.filter(isVisible).flatMap(task => {
                        const deps = task.depends_on || ((task as any).dependency_task_id ? [(task as any).dependency_task_id] : []);
                        return deps.map(depId => {
                            if (!positions[task.id] || !positions[depId]) return null;
                            const from = positions[depId];
                            const to = positions[task.id];

                            return (
                                <path
                                    key={`path-${task.id}-${depId}`}
                                    d={`M ${from.x + 100} ${from.y + 60} C ${from.x + 100} ${from.y + 120}, ${to.x + 100} ${to.y - 60}, ${to.x + 100} ${to.y}`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="text-primary/20 transition-all"
                                    markerEnd="url(#arrow)"
                                />
                            );
                        });
                    })}
                </svg>

                {tasks.filter(isVisible).map(task => {
                    const pos = positions[task.id] || { x: 0, y: 0 };
                    const hasChildren = tasks.some(t => t.parent_id === task.id);
                    const isCollapsed = collapsed.has(task.id);

                    return (
                        <div
                            key={task.id}
                            className={cn(
                                "absolute z-10 w-[220px] transition-shadow cursor-grab active:cursor-grabbing group",
                                connectingFrom === task.id ? "ring-2 ring-primary" : ""
                            )}
                            style={{ left: pos.x, top: pos.y }}
                            onMouseDown={(e) => handleMouseDown(task.id, e)}
                        >
                            <Card className={cn(
                                "p-3 space-y-2 border-border/60 hover:border-primary/40 bg-card/80 backdrop-blur-md shadow-xl",
                                task.status === 'DONE' ? "opacity-60 grayscale-[0.3]" : "",
                                task.level === 1 ? "bg-muted/10" : ""
                            )}>
                                <div className="flex items-center justify-between">
                                    <Badge variant={task.status === 'DONE' ? 'success' : 'default'} className="text-[7px] px-1 py-0 h-4 lowercase tracking-tight">
                                        {task.status}
                                    </Badge>
                                    <div className="flex items-center gap-1">
                                        {hasChildren && (
                                            <Button
                                                variant="ghost" size="icon" className="h-5 w-5"
                                                onClick={(e) => { e.stopPropagation(); toggleCollapse(task.id); }}
                                            >
                                                {isCollapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                                            </Button>
                                        )}
                                        <Button
                                            variant="ghost" size="icon" className="h-5 w-5 hover:text-destructive"
                                            onClick={(e) => { e.stopPropagation(); onRemove(task.id); }}
                                        >
                                            <Trash2 className="w-3 h-3" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <p className="text-[11px] font-black leading-tight truncate">{task.title}</p>
                                    <p className="text-[9px] text-muted-foreground line-clamp-1">{task.description}</p>
                                </div>

                                <div className="flex items-center justify-between pt-1">
                                    <Button
                                        variant="link" className="p-0 h-auto text-[8px] opacity-40 hover:opacity-100"
                                        onClick={() => onDisconnect(task.id)}
                                    >
                                        Unlink
                                    </Button>
                                    <Button
                                        className="h-6 px-2 text-[8px] bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20"
                                        onClick={() => {
                                            if (connectingFrom && connectingFrom !== task.id) {
                                                onConnect(connectingFrom, task.id);
                                                setConnectingFrom(null);
                                            } else {
                                                setConnectingFrom(task.id);
                                            }
                                        }}
                                    >
                                        {connectingFrom === task.id ? "Linking..." : "Link"}
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    );
                })}
            </div>

            {connectingFrom && (
                <div className="fixed bottom-12 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-xs font-bold animate-pulse shadow-2xl z-[200]">
                    Select Prerequisite for Node...
                </div>
            )}
        </div>
    );
}
