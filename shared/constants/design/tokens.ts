export const DESIGN_TOKENS = {
    colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        background: 'var(--background)',
        surface: 'var(--card)',
        border: 'var(--border)',
        status: {
            success: 'var(--success)',
            warning: 'var(--warning)',
            error: 'var(--destructive)',
            info: 'var(--info)'
        }
    },
    typography: {
        fontFamily: 'var(--font-sans, Inter, sans-serif)',
        scale: {
            h1: 'text-2xl md:text-3xl font-semibold tracking-tight',
            h2: 'text-xl md:text-2xl font-medium tracking-tight',
            h3: 'text-lg md:text-xl font-medium tracking-tight',
            body: 'text-sm font-normal text-muted-foreground'
        }
    },
    spacing: {
        base: '8px',
        layout: '16px',
        section: '32px'
    },
    borderRadius: {
        base: 'var(--radius)' // System defined at 12px
    },
    animation: {
        fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
        normal: '250ms cubic-bezier(0.4, 0, 0.2, 1)'
    }
};
