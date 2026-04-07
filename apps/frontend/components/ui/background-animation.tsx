'use client';

import { cn } from "@shared/lib/utils";

const bubbles = [
    { size: 40, top: '15%', left: '10%', color: '#7c3aed', delay: '0s', duration: '28s', anim: 'drift-1' },
    { size: 20, top: '60%', left: '80%', color: '#3b82f6', delay: '-5s', duration: '35s', anim: 'drift-2' },
    { size: 60, top: '75%', left: '25%', color: '#10b981', delay: '-10s', duration: '40s', anim: 'drift-3' },
    { size: 25, top: '25%', left: '70%', color: '#7c3aed', delay: '-15s', duration: '32s', anim: 'drift-4' },
    { size: 50, top: '45%', left: '45%', color: '#3b82f6', delay: '-20s', duration: '45s', anim: 'drift-1' },
    { size: 30, top: '80%', left: '15%', color: '#10b981', delay: '-8s', duration: '25s', anim: 'drift-2' },
    { size: 45, top: '10%', left: '55%', color: '#7c3aed', delay: '-30s', duration: '38s', anim: 'drift-3' },
    { size: 35, top: '55%', left: '85%', color: '#3b82f6', delay: '-12s', duration: '30s', anim: 'drift-4' },
    { size: 15, top: '85%', left: '60%', color: '#10b981', delay: '-25s', duration: '22s', anim: 'drift-1' },
    { size: 55, top: '35%', left: '20%', color: '#7c3aed', delay: '-35s', duration: '42s', anim: 'drift-2' },
    { size: 20, top: '90%', left: '90%', color: '#3b82f6', delay: '-2s', duration: '26s', anim: 'drift-3' },
    { size: 30, top: '5%', left: '95%', color: '#10b981', delay: '-18s', duration: '34s', anim: 'drift-4' },
];

export function BackgroundAnimation({ className }: { className?: string }) {
    return (
        <div className={cn("fixed inset-0 overflow-hidden pointer-events-none z-50", className)}>
            {bubbles.map((b, i) => (
                <div
                    key={i}
                    className="absolute rounded-full opacity-60 mix-blend-screen"
                    style={{
                        top: b.top,
                        left: b.left,
                        width: b.size + 'px',
                        height: b.size + 'px',
                        backgroundColor: b.color,
                        filter: `blur(${b.size / 3}px)`,
                        animation: `${b.anim} ${b.duration} ease-in-out infinite ${b.delay}`
                    }}
                />
            ))}

            <style>{`
                @keyframes drift-1 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(25vw, -15vh) scale(1.2); }
                }
                @keyframes drift-2 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-20vw, 25vh) scale(0.8); }
                }
                @keyframes drift-3 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(15vw, 20vh) scale(1.1); }
                }
                @keyframes drift-4 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-25vw, -20vh) scale(0.9); }
                }
            `}</style>
        </div>
    );
}
