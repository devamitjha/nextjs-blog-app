import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

export const GET = async (request, { params }) => {
  const { slug } = params; // no await needed
  console.log("slug");

  try {
    await connectDB();
    const user = await User.findOne({ slug }); // findOne by slug
    if (!user) {
      return new NextResponse(JSON.stringify({ message: "User not found" }), { status: 404 });
    }
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Database Error", { status: 500 });
  }
};
