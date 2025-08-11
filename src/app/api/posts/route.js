import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Post from "@/models/Post";

export const GET = async (request) => {
  try {
    await connectDB();

    const url = new URL(request.url);
    const username = url.searchParams.get("username");

    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else {
      posts = await Post.find();
    }

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    await connectDB();

    const body = await request.json();
    const newPost = new Post(body);

    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Database Error", { status: 500 });
  }
};
