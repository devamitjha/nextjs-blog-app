import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Post from "@/models/Post";
import User from "@/models/User";
import Category from "@/models/Category";

export const GET = async (request) => {
  try {
    await connectDB();
    const posts = await Post.find()
        .populate("author", "name email avatar")
        .populate("category", "name slug");  
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Database Error", { status: 500 });
  }
};

