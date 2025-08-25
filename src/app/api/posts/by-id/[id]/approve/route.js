import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Post from "@/models/Post";

export const PATCH = async (request, { params }) => {
  try {
    await connectDB();
    const { id } = params;

    // ✅ Update status to "published"
    const post = await Post.findByIdAndUpdate(
      id,
      { status: "published" },
      { new: true }
    );

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Post approved successfully", post },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to approve post" }, { status: 500 });
  }
};
