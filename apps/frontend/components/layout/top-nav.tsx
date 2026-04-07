import * as React from "react"
import { cn } from "@shared/lib/utils"

export function TopNav({ children, className }: { children?: React.ReactNode, className?: string }) {
    return (
        <header className={cn(
            "sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-border/50 bg-background/95 px-8 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm transition-all",
            className
        )}>
            <div className="flex items-center gap-4 flex-1">
                {/* Reserved for Breadcrumbs or Module Titling */}
            </div>
            <div className="flex items-center gap-4 justify-end">
                {children}
            </div>
        </header>
    )
}
