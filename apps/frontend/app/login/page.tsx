'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { Loader2, ArrowRight, Eye, EyeOff, Zap } from 'lucide-react'
import Link from 'next/link'
import { validateEmail, validatePassword } from '@shared/utils/validation'
import { BackgroundAnimation } from '@/components/ui/background-animation'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)
    const [loading, setLoading] = useState(false)

    const [error, setError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Reset errors
        setError('')
        setEmailError('')
        setPasswordError('')

        // Form Validation
        let isValid = true;
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            isValid = false;
        }

        // Prevent submission if validation fails
        if (!isValid) return;

        setLoading(true)

        try {
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false,
            })

            if (result?.error) {
                throw new Error("Invalid email or password");
            }

            router.push('/dashboard')
            router.refresh()
        } catch (err: any) {
            setError(err.message)
            setPassword('') // Clear password field on error
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col justify-center items-center p-4 relative overflow-hidden font-sans">
            <BackgroundAnimation />

            <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow p-10 z-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center mb-10">
                    <div className="w-14 h-14 bg-primary/10 border border-primary/20 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Zap className="w-7 h-7 fill-current" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2 leading-tight">
                        Welcome Back
                    </h1>
                    <p className="text-muted-foreground mt-2 text-sm font-medium leading-relaxed">
                        Sign in to your collaboration workspace.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {error && (
                        <div className="p-3 text-sm font-medium rounded-xl bg-destructive/10 text-destructive border border-destructive/20 animate-in fade-in duration-300">
                            {error}
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground ml-1">Email Address</label>
                        <input
                            type="email"
                            required
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                setEmailError('')
                            }}
                            className={`w-full px-4 py-3 bg-background border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/20 transition-all placeholder:text-muted-foreground font-medium shadow-sm ${emailError ? 'border-destructive/50 focus:ring-destructive/40' : 'border-border'}`}
                            placeholder="you@company.com"
                        />
                        {emailError && (
                            <p className="text-destructive text-xs font-semibold mt-1 ml-1">{emailError}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground ml-1">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                name="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    setPasswordError('')
                                }}
                                className={`w-full px-4 py-3 pr-12 bg-background border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/20 transition-all placeholder:text-muted-foreground font-medium shadow-sm ${passwordError ? 'border-destructive/50 focus:ring-destructive/40' : 'border-border'}`}
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                        {passwordError && (
                            <p className="text-destructive text-xs font-semibold mt-1 ml-1">{passwordError}</p>
                        )}
                    </div>

                    <div className="flex items-center justify-between mt-2 flex-wrap gap-2 px-1">
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="w-4 h-4 rounded border-border bg-background text-primary focus:ring-primary"
                            />
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-medium">Remember me</span>
                        </label>
                        <Link href="/forgot-password" disable-prefetch="true" className="text-sm font-semibold text-primary hover:opacity-80 transition-all">
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        disabled={loading || !email || !password}
                        className="w-full flex justify-center items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-sm active:scale-[0.98] group mt-8 disabled:opacity-50"
                    >
                        {loading ? (
                            <><Loader2 className="w-5 h-5 animate-spin" /> Verifying...</>
                        ) : (
                            <>Log In <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                        )}
                    </button>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-border/60"></span>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-card px-4 text-muted-foreground font-bold tracking-widest">Or continue with</span>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                        className="w-full flex justify-center items-center gap-3 bg-background border border-border hover:bg-muted/50 px-8 py-3.5 rounded-xl font-bold text-sm transition-all active:scale-[0.98] shadow-sm"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                                fill="#EA4335"
                            />
                        </svg>
                        Google
                    </button>
                </form>

                <div className="mt-10 text-center text-sm border-t border-border pt-8 text-muted-foreground font-medium">
                    <span className="">
                        Don't have an account?
                    </span>
                    <Link
                        href="/signup"
                        className="ml-2 text-primary hover:opacity-80 transition-all font-semibold"
                    >
                        Sign Up Free
                    </Link>
                </div>

                <div className="mt-8 text-center">
                    <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        ← Back to home
                    </Link>
                </div>
            </div>
        </div>
    )
}
