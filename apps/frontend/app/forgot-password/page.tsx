'use client'

import { useState } from 'react'
import { createClient } from '@shared/utils/supabase/client'
import { Loader2, ArrowRight, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { validateEmail } from '@shared/utils/validation'

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const [error, setError] = useState('')
    const [emailError, setEmailError] = useState('')

    const supabase = createClient()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        setError('')
        setEmailError('')
        setSuccess(false)

        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.')
            return
        }

        setLoading(true)

        try {
            // Tell supabase to fire the password reset email explicitly
            const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
                // Where users should be taken securely after they click the email magic link
                redirectTo: `${window.location.origin}/dashboard`,
            })

            if (resetError) throw resetError

            setSuccess(true)
            setEmail('') // Clears for security
        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-background flex flex-col justify-center items-center p-4">
            <div className="w-full max-w-md bg-card border border-border rounded-xl shadow-sm p-8">
                <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-bold text-xl mx-auto mb-4">
                        <ArrowRight className="w-5 h-5" />
                    </div>
                    <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                        Reset Password
                    </h1>
                    <p className="text-muted-foreground mt-2 text-sm">
                        Enter your email to receive recovery instructions.
                    </p>
                </div>

                {success ? (
                    <div className="text-center space-y-6">
                        <div className="p-4 bg-success/10 border border-success/20 rounded-lg text-success text-sm font-medium">
                            Check your email! We sent a secure recovery link to the address provided.
                        </div>
                        <Link
                            href="/login"
                            className="inline-flex w-full justify-center items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                        >
                            <ArrowLeft className="w-4 h-4" /> Go back to login
                        </Link>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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
                                name="reset-email"
                                autoComplete="email"
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

                        <button
                            type="submit"
                            disabled={loading || !email}
                            className="w-full flex justify-center items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 mt-6"
                        >
                            {loading ? (
                                <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                            ) : (
                                <>Send Reset Link <ArrowRight className="w-4 h-4" /></>
                            )}
                        </button>

                        <div className="mt-6 text-center text-sm border-t border-border pt-6">
                            <Link
                                href="/login"
                                className="font-medium text-muted-foreground hover:text-foreground hover:underline"
                            >
                                Cancel and return to Login
                            </Link>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}
