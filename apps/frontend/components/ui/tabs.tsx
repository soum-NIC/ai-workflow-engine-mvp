'use client'
import * as React from "react"
import { cn } from "@shared/lib/utils"

const TabsContext = React.createContext<{ activeTab: string, setActiveTab: (v: string) => void }>({ activeTab: '', setActiveTab: () => { } });

export function Tabs({ defaultValue, children, className }: { defaultValue: string, children: React.ReactNode, className?: string }) {
    const [activeTab, setActiveTab] = React.useState(defaultValue)
    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            <div className={cn("flex flex-col gap-4", className)}>{children}</div>
        </TabsContext.Provider>
    )
}

export function TabsList({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={cn("inline-flex h-11 items-center justify-center rounded-[10px] bg-muted/50 p-1 text-muted-foreground w-max", className)}>
            {children}
        </div>
    )
}

export function TabsTrigger({ value, children, className }: { value: string, children: React.ReactNode, className?: string }) {
    const { activeTab, setActiveTab } = React.useContext(TabsContext)
    const isActive = activeTab === value
    return (
        <button
            onClick={() => setActiveTab(value)}
            className={cn("inline-flex items-center justify-center whitespace-nowrap rounded-[8px] px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", isActive ? "bg-background text-foreground shadow-sm hover:bg-background" : "hover:bg-muted-foreground/10", className)}
        >
            {children}
        </button>
    )
}

export function TabsContent({ value, children, className }: { value: string, children: React.ReactNode, className?: string }) {
    const { activeTab } = React.useContext(TabsContext)
    if (activeTab !== value) return null
    return (
        <div className={cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 animate-in fade-in-50 duration-300", className)}>
            {children}
        </div>
    )
}
