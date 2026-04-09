import connectDB from "@/config/db";
import Address from "@/models/Address";
import { useAuth } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        const {userid} = useAuth(req)
        const {address} = await requestAnimationFrame.json()

        await connectDB()
        const newAddress = await Address.create({...address, userId})

        return NextResponse.json({success: true, message: "Address added successfully", newAddress})
    } catch (error) {
        return NextResponse.json({success: false, message: error.message});
    }
}