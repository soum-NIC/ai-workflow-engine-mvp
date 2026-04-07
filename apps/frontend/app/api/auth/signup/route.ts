import { NextResponse } from "next/server";
import { getRepository } from "@/../../apps/backend/services/db/repositories";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ error: "Missing email or password" }, { status: 400 });
        }

        const repository = getRepository();
        const existingUser = await repository.findUserByEmail(email);

        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await repository.createUser({
            email,
            password: hashedPassword,
            name: email.split("@")[0],
        });

        return NextResponse.json({ success: true, user: { id: user.id, email: user.email } });
    } catch (error: any) {
        console.error("Signup error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
