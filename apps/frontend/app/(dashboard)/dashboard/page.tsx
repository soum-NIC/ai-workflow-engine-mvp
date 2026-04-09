import Link from 'next/link';
import { getProjects } from '@backend/services/db/project-service';
import { auth } from '@/auth';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LayoutDashboard, PlusCircle, CheckSquare, Target, Clock, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { cn } from "@shared/lib/utils";

export default async function DashboardOverview() {
    const session = await auth();
    const user = session?.user;

    const projects = user ? await getProjects(user.id!) : [];

    const demoProjects = projects.filter(p => p.is_demo_project);
    const myProjects = projects.filter(p => !p.is_demo_project);

    // KPI Calculations
    const activeMissions = myProjects.length;
    const strategicVelocity = myProjects.length > 0
        ? Math.round(myProjects.reduce((acc, p) => acc + (p.progress_percentage || 0), 0) / myProjects.length)
        : 0;

    // Autonomy Ratio (MOCKED for now based on project count, ideally fetched from task aggregates)
    const autonomyRatio = 72; // % of tasks assigned to AI Agents
    const blockerAlerts = 3; // Total blocked tasks requiring intervention

    return (
        <div className="max-w-7xl mx-auto space-y-10 pb-20">
            {/* Mission Intelligence Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/40 pb-8 sticky top-0 bg-background/80 backdrop-blur-md z-50 pt-4">
                <div className="space-y-1">
                    <h1 className="text-3xl font-black tracking-tighter flex items-center gap-3 italic">
                        <LayoutDashboard className="w-10 h-10 text-primary drop-shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                        COMMAND CENTER
                    </h1>
                    <p className="text-muted-foreground/60 text-sm font-medium tracking-wide uppercase">
                        Mission Intelligence & Autonomous Flow
                    </p>
                </div>
                <Link
                    href="/kickoff"
                    className="group relative inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:shadow-[0_0_30px_rgba(var(--primary),0.4)] transition-all active:scale-95 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <PlusCircle className="w-4 h-4" />
                    Initialize Mission
                </Link>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <MetricCard
                    label="Active Missions"
                    value={activeMissions}
                    icon={<Target className="w-4 h-4 text-primary" />}
                    subtext="Live strategic workflows"
                />
                <MetricCard
                    label="Strategic Velocity"
                    value={`${strategicVelocity}%`}
                    icon={<Clock className="w-4 h-4 text-emerald-500" />}
                    subtext="Aggregated progress"
                />
                <MetricCard
                    label="Autonomy Ratio"
                    value={`${autonomyRatio}%`}
                    icon={<LayoutDashboard className="w-4 h-4 text-indigo-500" />}
                    subtext="AI Agent participation"
                />
                <MetricCard
                    label="Mission Blockers"
                    value={blockerAlerts}
                    icon={<ShieldAlert className="w-4 h-4 text-rose-500" />}
                    subtext="Intervention required"
                    trend="CRITICAL"
                />
            </div>

            {/* Active Strategic Missions */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                    <h2 className="text-xl font-black tracking-tight uppercase text-foreground/90">
                        Active Strategic Missions
                    </h2>
                </div>

                {myProjects.length === 0 ? (
                    <Card className="flex flex-col items-center justify-center p-16 text-center bg-muted/5 border-dashed border-2 hover:bg-muted/10 transition-colors">
                        <div className="w-20 h-20 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform">
                            <PlusCircle className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">No Strategic Assets Detected</h3>
                        <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
                            Your operation has no active strategic workflows. Initialize a mission to witness the AI execution graph.
                        </p>
                        <Link
                            href="/kickoff"
                            className="inline-flex items-center gap-3 bg-muted hover:bg-primary hover:text-primary-foreground text-foreground px-8 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all border border-border"
                        >
                            Deploy First Mission
                        </Link>
                    </Card>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {myProjects.map(project => (
                            <Link href={`/project/${project.id}`} key={project.id} className="group">
                                <Card className="relative overflow-hidden border-2 border-border/40 hover:border-primary/40 transition-all h-full flex flex-col hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] group-hover:-translate-y-1 duration-300">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Target className="w-12 h-12" />
                                    </div>
                                    <CardHeader className="pb-4 pt-6 px-6">
                                        <CardTitle className="text-lg font-black tracking-tight flex items-center gap-3">
                                            <div className="p-2 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                                                <CheckSquare className="w-4 h-4 text-primary" />
                                            </div>
                                            <span className="truncate group-hover:text-primary transition-colors uppercase tracking-tight">{project.title}</span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="px-6 pb-6 flex-1 flex flex-col">
                                        <p className="text-[13px] text-muted-foreground/80 leading-relaxed mb-8 line-clamp-3 italic">
                                            "{project.goal_description}"
                                        </p>
                                        <div className="mt-auto space-y-4">
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-end text-[9px] font-black uppercase tracking-widest text-muted-foreground/60">
                                                    <span>Mission Trajectory</span>
                                                    <span className="text-primary font-black">{project.progress_percentage}%</span>
                                                </div>
                                                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden p-[1px] border border-border/20">
                                                    <div
                                                        className="h-full bg-gradient-to-r from-primary to-indigo-500 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(var(--primary),0.4)]"
                                                        style={{ width: `${project.progress_percentage}%` }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1.5 px-2 py-1 bg-primary/5 rounded-md text-[9px] font-black uppercase text-primary tracking-widest">
                                                    <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                                                    Active
                                                </div>
                                                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            {/* Reference Tacticals (Demos) */}
            {demoProjects.length > 0 && (
                <div className="pt-10 space-y-6">
                    <div className="flex items-center gap-3 opacity-50">
                        <div className="w-1.5 h-6 bg-muted-foreground/30 rounded-full" />
                        <h2 className="text-xl font-black tracking-tight uppercase text-foreground/70">
                            Reference Tacticals (Demos)
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {demoProjects.map(project => (
                            <Link href={`/project/${project.id}`} key={project.id} className="grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100">
                                <Card className="bg-muted/10 border-dashed hover:border-solid transition-all h-full">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-md flex items-center gap-2 text-muted-foreground">
                                            <PlusCircle className="w-4 h-4 opacity-40 shrink-0" />
                                            <span className="truncate">{project.title}</span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-xs text-muted-foreground/60 line-clamp-2 mb-4">
                                            {project.goal_description}
                                        </p>
                                        <Badge variant="outline" className="text-[8px] tracking-[0.2em] font-black uppercase bg-muted text-muted-foreground/40 border-none px-2 h-4">
                                            Reference Asset
                                        </Badge>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

function MetricCard({ label, value, icon, subtext, trend }: { label: string, value: string | number, icon: React.ReactNode, subtext: string, trend?: string }) {
    return (
        <Card className="border-border/40 hover:border-primary/20 transition-all hover:bg-primary/[0.02]">
            <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-muted/40 rounded-xl">
                        {icon}
                    </div>
                    {trend && (
                        <div className="text-[8px] font-black tracking-widest text-rose-500 bg-rose-500/10 px-1.5 py-0.5 rounded uppercase">
                            {trend}
                        </div>
                    )}
                </div>
                <div className="space-y-1">
                    <h3 className="text-2xl font-black italic tracking-tighter">{value}</h3>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-wider text-muted-foreground/70 leading-none mb-1">{label}</p>
                        <p className="text-[9px] text-muted-foreground/40 font-medium">{subtext}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
