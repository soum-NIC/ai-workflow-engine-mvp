import Link from 'next/link';
import { Info } from 'lucide-react';

export function VisionTrigger() {
    return (
        <Link
            href="/vision"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-card border border-border rounded-full shadow-2xl hover:scale-110 transition-transform hover:border-primary/40 hover:shadow-primary/20 text-muted-foreground hover:text-primary group"
            title="Discover the Vision"
        >
            <Info className="w-6 h-6 animate-pulse group-hover:animate-none" />
            <span className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity bg-card border border-border px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest whitespace-nowrap shadow-lg">
                Product Vision
            </span>
        </Link>
    );
}
