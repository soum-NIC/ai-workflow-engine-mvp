import GoalInputForm from '@/components/project/goal-input-form';

export const metadata = {
    title: 'Graph Initialization | PlanPilot',
    description: 'Initialize your mission-critical execution graph.',
};

export default function NewProjectPage() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-6">
            <div className="mb-10 text-center">
                <h1 className="text-4xl font-black tracking-tight text-foreground mb-4">
                    Graph Initialization
                </h1>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-light leading-relaxed">
                    Define your project mission. Our <span className="text-primary font-semibold">Graph Engine</span> will architect a dependency-aware execution map with autonomous workflow orchestration.
                </p>
            </div>

            <div className="bg-card shadow-2xl border border-border rounded-2xl p-8 sm:p-12">
                <GoalInputForm />
            </div>
        </div>
    );
}
