import Link from 'next/link';
import { ArrowRight, Zap, Target, Bot, CheckCircle } from 'lucide-react';
import { BackgroundAnimation } from '@/components/ui/background-animation';
import { VisionTrigger } from '@/components/home/vision-trigger';
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      <BackgroundAnimation />

      <main className="max-w-6xl mx-auto flex flex-col items-center text-center z-10">
        {/* Version Badge */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold uppercase tracking-widest shadow-sm">
          <Zap className="w-3.5 h-3.5 fill-current" />
          PlanPilot AI Workspace
        </div>

        <div className="relative">
          <h1
            className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 text-6xl md:text-8xl font-black tracking-tight mb-6 leading-tight pb-2"
            style={{
              backgroundImage: 'linear-gradient(90deg, hsl(var(--foreground)) 0%, hsl(var(--muted-foreground)) 30%, hsl(var(--foreground)) 60%)',
              backgroundSize: '200% auto',
              color: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'shine 3s linear infinite'
            }}
          >
            PlanPilot
          </h1>
          <style>{`
            @keyframes shine {
              0% { background-position: 200% center; }
              100% { background-position: -200% center; }
            }
          `}</style>
        </div>

        <h2 className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 text-2xl md:text-4xl font-bold text-muted-foreground mb-8 max-w-3xl leading-snug">
          Intelligent collaboration. <span className="text-foreground">Automated progress.</span>
        </h2>

        <p className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl leading-relaxed font-medium">
          Your smart workspace that breaks down large goals into actionable steps. When a task is ready, our AI instantly begins working alongside your team to help finish projects faster.
        </p>

        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 flex flex-col sm:flex-row items-center justify-center gap-6 w-full mb-24">
          <Link
            href="/login"
            className="w-full sm:w-[200px] justify-center flex items-center gap-2 bg-card border border-border text-foreground px-8 py-4 rounded-xl font-bold hover:bg-muted/50 transition-all shadow-sm focus:scale-[0.98] active:scale-[0.98]"
          >
            Log In
          </Link>

          <Link
            href="/signup"
            className="w-full sm:w-[200px] justify-center group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-md focus:scale-[0.98] active:scale-[0.98]"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700 grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all group hover:-translate-y-1 duration-300">
            <div className="bg-primary/10 p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-foreground">Clear Work Plans</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              We turn messy project goals into clear, step-by-step checklists so your team always knows exactly what to do next.
            </p>
          </div>

          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all group hover:-translate-y-1 duration-300">
            <div className="bg-blue-500/10 p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
              <Bot className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-foreground">AI Co-Workers</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              Assign tasks to AI helpers. They autonomously draft content, write code, and do research while you focus on the big picture.
            </p>
          </div>

          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all group hover:-translate-y-1 duration-300">
            <div className="bg-emerald-500/10 p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
              <CheckCircle className="w-6 h-6 text-emerald-500" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-foreground">Automated Handoffs</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              When one task finishes, the next person (or AI) is instantly notified. No more bottlenecking or waiting around.
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-24 text-xs tracking-widest text-muted-foreground/60 font-semibold z-10 animate-in fade-in duration-1000 delay-1000">
        © 2026 PLANPILOT TEAM COLLABORATION
      </footer>

      <VisionTrigger />
    </div>
  );
}
