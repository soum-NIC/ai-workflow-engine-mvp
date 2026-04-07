'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@shared/lib/utils';
import { SideNav, NavItem, ProjectItem } from '@/components/layout/side-nav';
import { TopNav } from '@/components/layout/top-nav';
import { ThemeToggle } from '@/components/theme-toggle';
import SignOutButton from './SignOutButton';

interface DashboardClientLayoutProps {
    children: React.ReactNode;
    user: any;
    mainItems: NavItem[];
    projects: ProjectItem[];
}

export function DashboardClientLayout({ children, user, mainItems, projects }: DashboardClientLayoutProps) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Persist state
    useEffect(() => {
        const saved = localStorage.getItem('sidebar_collapsed');
        if (saved) setIsCollapsed(JSON.parse(saved));
        setMounted(true);
    }, []);

    const toggleSidebar = () => {
        const newState = !isCollapsed;
        setIsCollapsed(newState);
        localStorage.setItem('sidebar_collapsed', JSON.stringify(newState));
    };

    if (!mounted) return <div className="min-h-screen bg-background" />;

    return (
        <div className="flex min-h-screen bg-background relative overflow-hidden">
            {/* Sidebar */}
            <div className={cn(
                "hidden md:block sticky top-0 h-screen transition-all duration-300 ease-in-out border-r border-border/40 z-30",
                isCollapsed ? "w-20" : "w-64"
            )}>
                <SideNav
                    mainItems={mainItems}
                    projects={projects}
                    isCollapsed={isCollapsed}
                    onToggle={toggleSidebar}
                    className="w-full h-full"
                />
            </div>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-w-0 min-h-screen transition-all duration-300 ease-in-out">
                <TopNav>
                    <div className="flex items-center gap-4">
                        {!isCollapsed && (
                            <div className="hidden md:flex flex-col items-end opacity-in fade-in duration-500">
                                <span className="text-sm font-semibold truncate max-w-[150px]">{user?.email?.split('@')[0] || 'User'}</span>
                                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Operator</span>
                            </div>
                        )}
                        <ThemeToggle />
                        <SignOutButton />
                    </div>
                </TopNav>
                <div className="p-6 md:p-8 w-full max-w-[1600px] mx-auto animate-in fade-in duration-500 overflow-y-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
