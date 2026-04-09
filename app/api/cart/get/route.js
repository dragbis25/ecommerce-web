import connectDB from "@/config/db";
import { getAuth } from "@clerk/nextjs/server";
import { connect } from "mongoose";
import { NextResponse } from "next/server";


export async function GET(req){
    try {
        
        const {userId} = getAuth(req)

        await connectDB();

        const user = await User.findById(userId)

        const {cartItems} = user
        return NextResponse.json({success:true, cartItems})

    } catch (error) {
        return NextResponse.json({success: false, message: error.message})
    }
}