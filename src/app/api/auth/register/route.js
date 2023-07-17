import User from "@/models/User";
import { connectMongo, disconnectMongo } from "@/utils/dbconnect";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export const POST = async (req) => {
    const { name, email, password } = await req.json();
    await connectMongo();

    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    })

    try {
        await newUser.save();
        return new NextResponse({
            status: 201,
            body: {
                message: "User created successfully",
            }
        })
    }
    catch (error) {
        return new NextResponse({
            status: 500,
            body: {
                message: "Something went wrong",
            }
        })
    } finally {
        await disconnectMongo();
    }
}

export const GET = (req) => {
    return new NextResponse("Hello World")
}