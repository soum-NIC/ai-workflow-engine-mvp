'use client';

import { signOut } from 'next-auth/react';
import { LogOut } from 'lucide-react';

export default function SignOutButton() {
    const handleSignOut = async () => {
        await signOut({ callbackUrl: '/login' });
    };

    return (
        <button
            onClick={handleSignOut}
            className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors mt-1"
        >
            <LogOut className="w-3 h-3" />
            Sign out
        </button>
    );
}
// EOF
