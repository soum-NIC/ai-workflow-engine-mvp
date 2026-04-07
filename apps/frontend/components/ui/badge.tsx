import * as React from "react"
import { cn } from "@shared/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'ai' | 'human' | 'success' | 'outline';
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                {
                    "border-transparent bg-primary text-primary-foreground": variant === "default",
                    "border-transparent bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300": variant === "ai",
                    "border-transparent bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300": variant === "human",
                    "border-transparent bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300": variant === "success",
                    "border-border bg-transparent text-muted-foreground": variant === "outline",
                },
                className
            )}
            {...props}
        />
    )
}

export { Badge }
