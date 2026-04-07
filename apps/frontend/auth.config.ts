import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"

export const authConfig = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            allowDangerousEmailAccountLinking: true,
            authorization: {
                params: {
                    prompt: "select_account",
                    access_type: "offline"
                }
            }
        }),
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // This will be overridden in the Node-runtime auth.ts 
                // to handle database lookup and bcrypt
                return null
            }
        })
    ],
    session: { strategy: "jwt" },
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub
            }
            return session
        },
        authorized({ auth, request }) {
            const isLoggedIn = !!auth?.user;
            const path = request.nextUrl.pathname;

            const isOnDashboard = path.startsWith('/dashboard') ||
                request.nextUrl.pathname.startsWith('/project') ||
                request.nextUrl.pathname.startsWith('/kickoff');

            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn && (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup' || request.nextUrl.pathname === '/')) {
                return Response.redirect(new URL('/dashboard', request.nextUrl));
            }
            return true;
        },
    }
} satisfies NextAuthConfig;
