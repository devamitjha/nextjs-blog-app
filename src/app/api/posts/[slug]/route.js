import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Post from "@/models/Post";
import User from "@/models/User";
import Category from "@/models/Category";
import Comment from "@/models/Comment";
import Media from "@/models/Media";

export const GET = async (request, { params }) => {
  const { slug } = await params; 

  try {
    await connectDB();

    const post = await Post.findOne({ slug })
      .populate("postImage", "url")
      .populate("author", "name email avatar role verified")
      .populate("category", "name slug catImage url")
      .populate("comment", "text status author");

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post, { status: 200 });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Database Error", details: err.message }, { status: 500 });
  }
};
