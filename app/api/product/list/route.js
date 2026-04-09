import connectDB from "@/config/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";


export async function GET(req){
    try{
        await connectDB()

        const products = await Product.find({})
        return NextResponse.json({success:true, products})
    } catch (err){
        return NextResponse.json({success: false, message: err.message})
    }
}