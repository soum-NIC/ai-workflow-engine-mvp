'use client'
import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@shared/lib/utils"
import { Workflow, ChevronLeft, ChevronRight } from "lucide-react"

export interface NavItem {
    title: string;
    href: string;
    icon?: React.ReactNode;
}

export interface ProjectItem {
    id: string;
    title: string;
}

interface SideNavProps {
    mainItems: NavItem[];
    projects: ProjectItem[];
    isCollapsed?: boolean;
    onToggle?: () => void;
    className?: string;
}

export function SideNav({ mainItems, projects, isCollapsed, onToggle, className }: SideNavProps) {
    const pathname = usePathname()

    return (
        <nav className={cn(
            "flex flex-col glass-panel min-h-screen shadow-2xl relative z-20 transition-all duration-300",
            isCollapsed ? "w-20 p-4" : "w-64 p-6",
            className
        )}>
            {/* Toggle Button */}
            <button
                onClick={onToggle}
                className="absolute -right-3 top-20 bg-primary text-primary-foreground p-1 rounded-full shadow-lg hover:scale-110 transition-transform z-30"
            >
                {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>

            <div className={cn("flex items-center gap-4 mb-12", isCollapsed ? "justify-center" : "px-2")}>
                <div className="h-10 w-10 shrink-0 rounded-2xl bg-gradient-to-br from-primary to-info flex items-center justify-center text-primary-foreground font-black text-xl shadow-lg shadow-primary/20 animate-in zoom-in-50 duration-500">
                    P
                </div>
                {!isCollapsed && (
                    <div className="animate-in fade-in slide-in-from-left-2 duration-300">
                        <span className="font-black text-xl tracking-tighter block leading-none">PlanPilot</span>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 mt-1 block">Engine V2</span>
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-1.5 mb-10">
                {!isCollapsed && (
                    <span className="px-4 text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/40 mb-3 animate-in fade-in duration-300">
                        Main Menu
                    </span>
                )}
                {mainItems.map(item => {
                    const isActive = pathname === item.href || (item.href !== '/' && item.href !== '/dashboard' && pathname.startsWith(item.href))
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center rounded-2xl transition-all group relative overflow-hidden",
                                isCollapsed ? "justify-center p-3" : "gap-3 px-4 py-3",
                                isActive
                                    ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20"
                                    : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                            )}
                            title={isCollapsed ? item.title : undefined}
                        >
                            <div className={cn("transition-transform group-hover:scale-110", isActive ? "text-white" : "text-primary/60")}>
                                {item.icon}
                            </div>
                            {!isCollapsed && <span className="truncate font-bold text-sm animate-in fade-in duration-300">{item.title}</span>}
                            {isActive && !isCollapsed && <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-white rounded-full" />}
                        </Link>
                    )
                })}
            </div>

            {projects.length > 0 && (
                <div className="flex flex-col gap-1.5 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    {!isCollapsed && (
                        <span className="px-4 text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/40 mb-3 flex items-center justify-between animate-in fade-in duration-300">
                            Active Workflows
                            <div className="h-1 w-8 bg-muted rounded-full" />
                        </span>
                    )}
                    {projects.map(p => {
                        const isActive = pathname.startsWith(`/project/${p.id}`)
                        return (
                            <Link
                                key={p.id}
                                href={`/project/${p.id}`}
                                className={cn(
                                    "flex items-center rounded-2xl transition-all group",
                                    isCollapsed ? "justify-center p-3" : "gap-3 px-4 py-3",
                                    isActive
                                        ? "bg-primary/10 text-primary border border-primary/20"
                                        : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                                )}
                                title={isCollapsed ? p.title : undefined}
                            >
                                <Workflow className={cn("w-4 h-4 shrink-0 transition-colors", isActive ? "text-primary" : "opacity-40")} />
                                {!isCollapsed && <span className="truncate font-bold text-sm animate-in fade-in duration-300">{p.title}</span>}
                            </Link>
                        )
                    })}
                </div>
            )}

            {!isCollapsed && (
                <div className="mt-8 pt-6 border-t border-border/40 animate-in fade-in duration-500">
                    <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                        <p className="text-[10px] font-black uppercase tracking-widest text-primary/60 mb-2">System Status</p>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_hsl(var(--success))]" />
                            <span className="text-[11px] font-bold">Orchestrator Active</span>
                        </div>
                    </div>
                </div>
            )}
            {isCollapsed && (
                <div className="mt-8 pt-6 border-t border-border/40 flex justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
            )}
        </nav>
    )
}
