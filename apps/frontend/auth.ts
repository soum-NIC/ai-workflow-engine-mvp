import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "./lib/mongodb"
import { connectToDatabase } from "@/../../infra/db/mongodb"
import bcrypt from "bcryptjs"
import { authConfig } from "./auth.config"

export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    trustHost: true,
    secret: process.env.AUTH_SECRET,
    debug: true,
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        ...authConfig.providers.filter(p => p.id !== "credentials"),
        Credentials({
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null

                const db = await (await connectToDatabase()).db
                const user = await db.collection("users").findOne({ email: credentials.email })

                if (!user || !user.password) {
                    return null
                }

                const isValid = await bcrypt.compare(credentials.password as string, user.password)

                if (!isValid) {
                    return null
                }

                return {
                    id: user._id.toString(),
                    email: user.email,
                    name: user.name || user.email.split("@")[0]
                }
            }
        })
    ],
    callbacks: {
        async session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub
            }
            return session
        },
        async signIn({ user, account, profile }) {
            return true
        }
    }
})
