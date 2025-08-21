import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Category from "@/models/Category";

export const GET = async (request) => {
  try {
    await connectDB();
    const categories = await Category.find() 
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Database Error", { status: 500 });
  }
};
