import { ThemeToggle } from '@/components/theme-toggle';
import { getProjects } from '@backend/services/db/project-service';
import { auth } from '@/auth';
import SignOutButton from './SignOutButton';
import { SideNav } from '@/components/layout/side-nav';
import { TopNav } from '@/components/layout/top-nav';
import { DashboardClientLayout } from './DashboardClientLayout';
import { LayoutDashboard, Rocket } from 'lucide-react';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const session = await auth();
    const user = session?.user;

    if (!user) {
        redirect('/login');
    }

    const allProjects = await getProjects(user.id!);
    const activeWorkflows = allProjects.filter(p => !p.is_demo_project);

    const mainItems = [
        { title: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
        { title: 'New Kickoff', href: '/kickoff', icon: <Rocket className="w-4 h-4" /> }
    ];

    return (
        <DashboardClientLayout user={user} mainItems={mainItems} projects={activeWorkflows}>
            {children}
        </DashboardClientLayout>
    );
}
