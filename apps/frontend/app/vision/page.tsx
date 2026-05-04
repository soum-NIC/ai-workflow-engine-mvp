import Link from 'next/link';
import { ArrowLeft, Target, Bot, CheckCircle, Zap, LayoutDashboard, Share2, Orbit } from 'lucide-react';
import { cn } from '@shared/lib/utils';
import { BackgroundAnimation } from '@/components/ui/background-animation';

export default function VisionPage() {
    const sections = [
        {
            id: 'clarity',
            title: "Clarity from Chaos",
            description: "We turn overwhelming project objectives into mathematically optimized, step-by-step checklists.",
            icon: <Target className="w-8 h-8 text-primary" />,
            color: "text-primary",
            bgHighlight: "from-primary/10 via-transparent to-transparent",
            snapshot: (
                <div className="w-full max-w-2xl bg-card/60 backdrop-blur-md rounded-2xl border border-primary/20 overflow-hidden flex flex-col p-6 shadow-2xl relative group hover:scale-[1.02] transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="flex items-center gap-3 mb-6">
                        <LayoutDashboard className="w-5 h-5 text-primary/70" />
                        <div className="h-3 w-1/3 bg-muted rounded-full" />
                    </div>
                    <div className="flex-1 space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-muted/40 rounded-xl border border-border/40">
                                <div className={cn("w-5 h-5 rounded-full border-2", i === 1 ? "border-primary bg-primary/20" : "border-muted-foreground/30")} />
                                <div className="flex-1 space-y-2">
                                    <div className={cn("h-2 rounded-full", i === 1 ? "w-3/4 bg-primary/60" : "w-1/2 bg-muted-foreground/40")} />
                                    <div className="h-1.5 rounded-full w-1/4 bg-muted-foreground/20" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'automation',
            title: "Autonomous Execution",
            description: "Assign complex tasks directly to AI agents. They analyze, draft, and iterate autonomously while you focus on the big picture.",
            icon: <Bot className="w-8 h-8 text-blue-500" />,
            color: "text-blue-500",
            bgHighlight: "from-blue-500/10 via-transparent to-transparent",
            snapshot: (
                <div className="w-full max-w-2xl bg-card/60 backdrop-blur-md rounded-2xl border border-blue-500/20 overflow-hidden flex flex-col p-6 shadow-2xl relative group hover:scale-[1.02] transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <Orbit className="w-5 h-5 text-blue-500 animate-[spin_4s_linear_infinite]" />
                            <span className="text-xs font-black uppercase tracking-widest text-blue-500">Processing Sequence</span>
                        </div>
                        <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                    </div>
                    <div className="flex-1 flex gap-4 min-h-[200px]">
                        <div className="w-1/3 h-full space-y-3 flex flex-col">
                            <div className="h-1/2 rounded-xl bg-blue-500/10 border border-blue-500/20" />
                            <div className="h-1/2 rounded-xl bg-muted/20 border border-border/40" />
                        </div>
                        <div className="w-2/3 h-full rounded-xl bg-muted/40 border border-border/40 p-4 space-y-3">
                            <div className="h-3 w-1/2 bg-blue-500/40 rounded-full mb-2" />
                            <div className="h-2 w-3/4 bg-muted-foreground/30 rounded-full" />
                            <div className="h-2 w-full bg-muted-foreground/30 rounded-full" />
                            <div className="h-2 w-5/6 bg-muted-foreground/30 rounded-full" />
                            <div className="h-2 w-4/6 bg-muted-foreground/30 rounded-full" />
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'efficiency',
            title: "Velocity & Handoffs",
            description: "No more waiting. As soon as one task wraps up, intelligent triggers map out the next step and instantly notify the right participant.",
            icon: <CheckCircle className="w-8 h-8 text-emerald-500" />,
            color: "text-emerald-500",
            bgHighlight: "from-emerald-500/10 via-transparent to-emerald-500/5",
            snapshot: (
                <div className="w-full max-w-2xl bg-card/60 backdrop-blur-md rounded-2xl border border-emerald-500/20 overflow-hidden flex flex-col p-6 shadow-2xl relative group hover:scale-[1.02] transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/40">
                        <Zap className="w-6 h-6 text-emerald-500/70" />
                        <span className="text-3xl font-black text-emerald-500">98%</span>
                    </div>
                    <div className="flex-1 flex flex-col gap-4 justify-center min-h-[160px]">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center">
                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                            </div>
                            <div className="h-1 flex-1 bg-gradient-to-r from-emerald-500/40 to-transparent relative overflow-hidden">
                                <div className="absolute inset-0 w-1/2 bg-emerald-400 opacity-50 blur-sm animate-[move_2s_infinite]" />
                                <style>{`@keyframes move { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }`}</style>
                            </div>
                            <div className="w-10 h-10 rounded-xl border border-border/40 bg-muted/50" />
                        </div>
                        <div className="text-xs font-black uppercase tracking-widest text-center text-emerald-600/70 opacity-0 group-hover:opacity-100 transition-opacity mt-2">
                            Zero-Latency Handoffs
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-background relative selection:bg-primary/20 text-foreground overflow-x-hidden">
            <BackgroundAnimation className="z-0 opacity-40 fixed inset-0 pointer-events-none" />

            {/* Header */}
            <div className="sticky top-0 z-50 p-6 flex justify-between items-center bg-background/60 backdrop-blur-xl border-b border-border/40">
                <Link
                    href="/"
                    className="flex items-center gap-2 px-4 py-2 bg-muted/30 border border-border/40 hover:bg-muted rounded-full text-xs font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Return Home
                </Link>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full text-[10px] font-black uppercase tracking-widest">
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    Product Vision Overview
                </div>
            </div>

            {/* Content Body */}
            <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 flex flex-col gap-32">
                {sections.map((section, idx) => (
                    <div key={section.id} className={cn("flex flex-col lg:flex-row items-center gap-16 relative", idx % 2 !== 0 ? "lg:flex-row-reverse" : "")}>

                        {/* Background Decorator behind text */}
                        <div className={cn(
                            "absolute top-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] pointer-events-none blur-3xl z-[-1]",
                            idx % 2 !== 0 ? "-left-1/2" : "-right-1/2",
                            section.bgHighlight
                        )} />

                        {/* Text Content */}
                        <div className="flex-1 space-y-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-4 bg-card border border-border/60 rounded-2xl shadow-xl shadow-black/5">
                                    {section.icon}
                                </div>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight lg:leading-[1.1]">
                                {section.title}
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed max-w-xl">
                                {section.description}
                            </p>
                        </div>

                        {/* Visual Snapshot */}
                        <div className="flex-1 w-full flex justify-center">
                            {section.snapshot}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Call To Action */}
            <div className="border-t border-border/40 bg-muted/10 relative z-10">
                <div className="max-w-4xl mx-auto px-6 py-32 text-center flex flex-col items-center">
                    <h2 className="text-4xl font-black tracking-tight mb-6">Ready to align your workflow?</h2>
                    <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
                        Start utilizing autonomous execution and intelligent handoffs natively within your projects today.
                    </p>
                    <Link
                        href="/signup"
                        className="px-10 py-5 bg-primary text-primary-foreground font-black uppercase tracking-widest text-sm rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-primary/20 active:scale-95 transition-all flex items-center gap-3"
                    >
                        Initialize Mission Planner
                        <ArrowLeft className="w-5 h-5 rotate-180" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
