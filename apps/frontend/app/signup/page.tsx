'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { Loader2, ArrowRight, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { validateEmail, validatePassword } from '@shared/utils/validation'
import { BackgroundAnimation } from '@/components/ui/background-animation'

export default function SignupPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [loading, setLoading] = useState(false)

    const [error, setError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmError, setConfirmError] = useState('')

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Reset errors
        setError('')
        setEmailError('')
        setPasswordError('')
        setConfirmError('')

        // Form Validation 
        let isValid = true;
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            isValid = false;
        }
        if (!validatePassword(password)) {
            setPasswordError('Password must be at least 8 characters and include letters and numbers.');
            isValid = false;
        }
        if (password !== confirmPassword) {
            setConfirmError('Passwords do not match.');
            isValid = false;
        }

        if (!isValid) return;

        setLoading(true)

        try {
            const signupRes = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            })

            const signupData = await signupRes.json()

            if (!signupRes.ok) {
                throw new Error(signupData.error || "Failed to create account")
            }

            // Immediately sign in
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false,
            })

            if (result?.error) {
                throw new Error("Account created, but failed to sign in automatically. Please log in manually.");
            }

            router.push('/dashboard')
            router.refresh()
        } catch (err: any) {
            setError(err.message)
            setPassword('')
            setConfirmPassword('')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-background flex flex-col justify-center items-center p-4 relative overflow-hidden">
            <BackgroundAnimation />
            <div className="w-full max-w-md bg-card border border-border rounded-xl shadow-sm p-8 animate-in fade-in slide-in-from-bottom-4 duration-500 z-10">
                <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-bold text-xl mx-auto mb-4">
                        AI
                    </div>
                    <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                        Create an account
                    </h1>
                    <p className="text-muted-foreground mt-2 text-sm">
                        Sign up to kick off your autonomous workflow.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off" noValidate>
                    {error && (
                        <div className="p-3 text-sm rounded-lg bg-error/10 text-error border border-error/20">
                            {error}
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Email</label>
                        <input
                            type="email"
                            required
                            name="signup-email"
                            autoComplete="off"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                setEmailError('')
                            }}
                            className={`w-full px-4 py-3 bg-background border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${emailError ? 'border-error' : 'border-border'}`}
                            placeholder="founder@startup.com"
                        />
                        {emailError && (
                            <p className="text-error text-xs mt-1">{emailError}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                name="signup-password"
                                autoComplete="new-password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    setPasswordError('')
                                }}
                                className={`w-full px-4 py-3 pr-12 bg-background border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${passwordError ? 'border-error' : 'border-border'}`}
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                        </div>
                        {passwordError && (
                            <p className="text-error text-xs mt-1">{passwordError}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Confirm Password</label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                required
                                name="signup-confirm-password"
                                autoComplete="new-password"
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value)
                                    setConfirmError('')
                                }}
                                className={`w-full px-4 py-3 pr-12 bg-background border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${confirmError ? 'border-error' : 'border-border'}`}
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                        </div>
                        {confirmError && (
                            <p className="text-error text-xs mt-1">{confirmError}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={loading || !email || !password || !confirmPassword}
                        className="w-full flex justify-center items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50 mt-6"
                    >
                        {loading ? (
                            <><Loader2 className="w-5 h-5 animate-spin" /> Signing up...</>
                        ) : (
                            <>Sign Up <ArrowRight className="w-4 h-4" /></>
                        )}
                    </button>

                    <div className="relative my-6">
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
                        className="w-full flex justify-center items-center gap-3 bg-background border border-border hover:bg-muted/50 px-4 py-3 rounded-xl font-bold text-sm transition-all active:scale-[0.98] shadow-sm"
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

                <div className="mt-6 text-center text-sm border-t border-border pt-6">
                    <span className="text-muted-foreground">
                        Already have an account?
                    </span>
                    <Link
                        href="/login"
                        className="ml-2 font-medium text-primary hover:underline"
                    >
                        Log In
                    </Link>
                </div>

                <div className="mt-8 text-center text-xs text-muted-foreground">
                    <Link href="/" className="hover:underline">← Back to homepage</Link>
                </div>
            </div>
        </div>
    )
}
