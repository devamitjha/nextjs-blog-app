import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

export const GET = async (request) => {
  try {
    await connectDB();
    const allAuthor = await User.find() 
    return new NextResponse(JSON.stringify(allAuthor), { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Database Error", { status: 500 });
  }
};
