'use client'
import * as React from "react"
import { cn } from "@shared/lib/utils"

export type ToastProps = {
    id: string;
    title: string;
    description?: string;
    type?: 'default' | 'success' | 'warning' | 'error' | 'info';
    onClose: (id: string) => void;
};

export function Toast({ id, title, description, type = 'default', onClose }: ToastProps) {
    React.useEffect(() => {
        const timer = setTimeout(() => onClose(id), 5000)
        return () => clearTimeout(timer)
    }, [id, onClose])

    return (
        <div className={cn(
            "pointer-events-auto flex w-full max-w-sm flex-col gap-1 rounded-xl border border-border/50 bg-background p-4 shadow-lg transition-all animate-in slide-in-from-bottom-5 duration-300",
            type === 'success' && "border-success",
            type === 'warning' && "border-warning",
            type === 'error' && "border-destructive",
            type === 'info' && "border-primary"
        )}>
            <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1.5">
                    <h3 className="text-sm font-semibold tracking-tight">{title}</h3>
                    {description && <p className="text-sm text-muted-foreground leading-snug">{description}</p>}
                </div>
                <button onClick={() => onClose(id)} className="text-muted-foreground hover:text-foreground transition-colors p-1 shrink-0">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.5571 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.5571 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </button>
            </div>
        </div>
    )
}

export function ToastContainer({ toasts, onClose }: { toasts: ToastProps[], onClose: (id: string) => void }) {
    if (!toasts.length) return null
    return (
        <div className="fixed bottom-0 right-0 z-50 flex max-h-screen flex-col-reverse gap-2 p-6 pointer-events-none">
            {toasts.map(t => <Toast key={t.id} {...t} onClose={onClose} />)}
        </div>
    )
}
