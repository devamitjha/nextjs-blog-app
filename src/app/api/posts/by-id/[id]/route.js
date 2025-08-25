import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Post from "@/models/Post";
import User from "@/models/User";
import Category from "@/models/Category";
import Comment from "@/models/Comment";
import Media from "@/models/Media";

export const GET = async (request, { params }) => {
  const { id } = await params; 

  try {
    await connectDB();

    const posts = await Post.find({ author: id })
      .populate("postImage", "url")
      .populate("category", "name slug catImage url")
      .populate("comment", "text status author");

    if (!posts) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(posts, { status: 200 });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Database Error", details: err.message }, { status: 500 });
  }
};
