import Link from 'next/link';
import { getProjects } from '@backend/services/db/project-service';
import { auth } from '@/auth';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LayoutDashboard, PlusCircle, CheckSquare, Target, Clock } from 'lucide-react';

export default async function DashboardOverview() {
    const session = await auth();
    const user = session?.user;

    const projects = user ? await getProjects(user.id!) : [];

    const demoProjects = projects.filter(p => p.is_demo_project);
    const myProjects = projects.filter(p => !p.is_demo_project);

    return (
        <div className="max-w-6xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-6">
                <div>
                    <h1 className="text-page-title flex items-center gap-3 tracking-tight">
                        <LayoutDashboard className="w-8 h-8 text-primary shadow-[0_0_15px_rgba(var(--primary),0.3)]" />
                        Autonomous Control Center
                    </h1>
                    <p className="text-muted-foreground mt-2 max-w-xl font-light">
                        Monitor your active execution graphs and witness autonomous task transitions in real-time.
                    </p>
                </div>
                <Link
                    href="/kickoff"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs hover:opacity-90 transition-all shadow-[0_0_20px_rgba(var(--primary),0.2)] whitespace-nowrap active:scale-95"
                >
                    <PlusCircle className="w-5 h-5" />
                    Initialize New Graph
                </Link>
            </div>

            {demoProjects.length > 0 && (
                <div className="space-y-6">
                    <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-3">
                        Demo Projects
                        <Badge variant="default" className="text-[10px] tracking-widest uppercase bg-primary/10 text-primary hover:bg-primary/20">Read-Only</Badge>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {demoProjects.map(project => (
                            <Link href={`/project/${project.id}`} key={project.id} className="group block h-full">
                                <Card className="hover:border-primary/50 transition-colors h-full flex flex-col hover:shadow-md">
                                    <CardHeader className="pb-3 border-b border-border/50 bg-muted/20">
                                        <CardTitle className="text-lg flex items-center gap-2">
                                            <CheckSquare className="w-4 h-4 text-primary shrink-0" />
                                            <span className="truncate">{project.title}</span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-4 flex-1 flex flex-col justify-between">
                                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                                            {project.goal_description}
                                        </p>
                                        <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mt-auto">
                                            <div className="flex items-center gap-1.5">
                                                <Target className="w-3.5 h-3.5" />
                                                <span>{project.progress_percentage}% Done</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            <div className="space-y-6">
                <h2 className="text-xl font-bold tracking-tight text-foreground">
                    My Projects
                </h2>
                {myProjects.length === 0 ? (
                    <Card className="flex flex-col items-center justify-center p-12 text-center bg-muted/20 border-dashed mb-12">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                            <PlusCircle className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-medium text-foreground mb-2">No projects yet</h3>
                        <p className="text-muted-foreground max-w-sm mb-6">
                            Start your first AI workflow to turn an idea into a structured execution plan.
                        </p>
                        <Link
                            href="/kickoff"
                            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
                        >
                            Start New Project
                        </Link>
                    </Card>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {myProjects.map(project => (
                            <Link href={`/project/${project.id}`} key={project.id} className="group block h-full">
                                <Card className="hover:border-primary/50 transition-colors h-full flex flex-col hover:shadow-md">
                                    <CardHeader className="pb-3 border-b border-border/50">
                                        <CardTitle className="text-lg flex items-center gap-2">
                                            <CheckSquare className="w-4 h-4 text-primary shrink-0" />
                                            <span className="truncate">{project.title}</span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-4 flex-1 flex flex-col justify-between">
                                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                                            {project.goal_description}
                                        </p>
                                        <div className="flex items-center justify-between text-xs font-medium text-muted-foreground mt-auto">
                                            <div className="flex items-center gap-1.5">
                                                <Target className="w-3.5 h-3.5" />
                                                <span>{project.progress_percentage}% Done</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 bg-muted px-2 py-1 rounded-sm uppercase tracking-widest text-[10px]">
                                                {project.status === 'active' ? (
                                                    <><Clock className="w-3 h-3" /> Active</>
                                                ) : (
                                                    <span>Completed</span>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
