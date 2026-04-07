import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'PlanPilot | Autonomous Workflow Plan Engine',
  description: 'Orchestrate, execute, and automate project workflows with dependency-aware AI graphs.',
};

function BubbleBackground() {
  return (
    <div className="bg-bubbles">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            width: `${Math.random() * 300 + 50}px`,
            height: `${Math.random() * 300 + 50}px`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 20 + 20}s`,
            animationDelay: `${Math.random() * -20}s`,
            opacity: Math.random() * 0.1
          }}
        />
      ))}
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-poppins antialiased bg-background text-foreground min-h-screen relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BubbleBackground />
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
