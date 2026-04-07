'use client';

import { LayoutDashboard, PlusCircle, CheckSquare } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Project } from '@shared/types/project';
import { cn } from '@shared/lib/utils'; // Assuming cn exists, let me verify, yes it was used in board/page.tsx

export default function SidebarNav({ projects }: { projects: Project[] }) {
    const pathname = usePathname();

    return (
        <nav className="flex-1 px-4 space-y-1.5 mt-6 overflow-y-auto custom-scrollbar">
            <Link
                href="/dashboard"
                className={cn(
                    "flex items-center gap-3 px-3 py-2.5 text-sm font-bold rounded-xl transition-all relative group",
                    pathname === '/dashboard'
                        ? "bg-primary/10 text-primary border border-primary/20 shadow-sm"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                )}
            >
                {pathname === '/dashboard' && <div className="absolute left-0 w-1 h-5 bg-primary rounded-full" />}
                <LayoutDashboard className={cn("w-4 h-4 transition-transform group-hover:scale-110", pathname === '/dashboard' ? "text-primary" : "text-muted-foreground")} />
                Control Center
            </Link>

            <Link
                href="/kickoff"
                className={cn(
                    "flex items-center gap-3 px-3 py-2.5 text-sm font-bold rounded-xl transition-all mb-8 mt-2 shadow-lg active:scale-95 group",
                    pathname === '/kickoff'
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-primary hover:bg-muted/80"
                )}
            >
                <PlusCircle className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                Initialize Graph
            </Link>

            {/* Demo Projects */}
            <div className="pt-6 pb-2 px-3">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50">
                    Legacy Demos
                </p>
            </div>

            <div className="space-y-1">
                {projects.filter(p => p.is_demo_project).map(project => {
                    const isActive = pathname.startsWith(`/project/${project.id}`);
                    return (
                        <Link
                            key={project.id}
                            href={`/project/${project.id}`}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all group relative",
                                isActive
                                    ? "bg-primary/5 text-primary"
                                    : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {isActive && <div className="absolute left-0 w-1 h-4 bg-primary/40 rounded-full" />}
                            <CheckSquare className={cn("w-4 h-4 shrink-0 transition-opacity", isActive ? "opacity-100" : "opacity-40")} />
                            <span className="truncate flex-1 font-light tracking-tight">{project.title}</span>
                            <span className={cn(
                                "text-[8px] uppercase font-black tracking-widest px-1.5 py-0.5 rounded-sm",
                                isActive
                                    ? "bg-primary/20 text-primary"
                                    : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                            )}>
                                DEMO
                            </span>
                        </Link>
                    );
                })}
            </div>

            {/* User Projects */}
            <div className="pt-8 pb-2 px-3">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50">
                    Active Graphs
                </p>
            </div>

            <div className="space-y-1 pb-8">
                {projects.filter(p => !p.is_demo_project).map(project => {
                    const isActive = pathname.startsWith(`/project/${project.id}`);
                    return (
                        <Link
                            key={project.id}
                            href={`/project/${project.id}`}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all truncate relative group",
                                isActive
                                    ? "bg-primary/5 text-primary"
                                    : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {isActive && <div className="absolute left-0 w-1 h-4 bg-primary/40 rounded-full" />}
                            <CheckSquare className={cn("w-4 h-4 shrink-0 transition-opacity", isActive ? "opacity-100" : "opacity-40")} />
                            <span className="truncate font-light tracking-tight">{project.title}</span>
                        </Link>
                    );
                })}

                {projects.filter(p => !p.is_demo_project).length === 0 && (
                    <p className="px-3 py-2 text-[11px] text-muted-foreground italic font-light">No graphs initialized.</p>
                )}
            </div>
        </nav>
    );
}
