import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Post from "@/models/Post";
import User from "@/models/User";
import Category from "@/models/Category";
import Comment from "@/models/Comment";
import Media from "@/models/Media";
import { imagekit } from "@/lib/imagekit";


export const GET = async (request) => {
  try {
    await connectDB();
    const posts = await Post.find()
        .populate("postImage", "url")
        .populate("author", "name email avatar role verified")
        .populate("category", "name slug catImage url")
        .populate("comment", "text status author");  
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  //slug, views, likes
  try {
    // const { title, category, shortDescription, description, author, postImage, tags, } = await request.json();
    await connectDB();

    // 🔹 Parse form-data
    const formData = await request.formData();

    const title = formData.get("title");
    const shortDescription = formData.get("shortDesc");
    const description = formData.get("description");
    const category = formData.get("category");
    const author = formData.get("author"); // pass author name or id
    const tags = formData.get("tags");
    const imageFile = formData.get("image");


    // ✅ Validate required fields
    if (!title || !category || !shortDescription || !description || !imageFile) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

   // ✅ Upload image to ImageKit
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    const fileName = Date.now() + "-" + imageFile.name.replace(/\s+/g, "-");

    const uploadResponse = await imagekit.upload({
      file: buffer,          // binary data
      fileName: fileName,    // image name
      folder: "/nextjs/blog", // optional folder in ImageKit
    });

    // ✅ Create Media document
    const media = new Media({
      filename: fileName,
      url: uploadResponse.url,
      mimetype: imageFile.type,
      size: imageFile.size,
    });
    //await media.save();
    
    // ✅ Generate slug
    const slug = title.toLowerCase()
    .replace(/[^\w\s-]/g, '')   // remove all special chars except spaces & dashes
    .replace(/\s+/g, '-')       // replace spaces with -
    .replace(/-+/g, '-')        // collapse multiple - into one
    .trim();
    const existingPost = await Post.findOne({ slug });
    if (existingPost) {
      return NextResponse.json({ error: "Post with this title already exists" }, { status: 400 });
    }

    // ✅ Find category by name
    const categoryDoc = await Category.findOne({ name: category });
    if (!categoryDoc) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 });
    }

    // ✅ Find author by name
    const authorDoc = await User.findOne({ name: author });
    if (!authorDoc) {
      return NextResponse.json({ error: "Author not found" }, { status: 404 });
    }

    const post = new Post({
      title,
      slug,
      category: categoryDoc._id,
      shortDescription,
      description,
      author: authorDoc._id,
      postImage: media._id,
      status: "pending",
      tags: tags ? tags.split(",").map(tag => tag.trim()) : [],
    });
    await post.save();

    // 🔗 Link post inside Media (back-reference)
    media.post = post._id;
    await media.save();

    // Update author's post count
    await User.findByIdAndUpdate(authorDoc._id, { $inc: { totalPost: 1 } });

    // Update category's post count
    await Category.findByIdAndUpdate(categoryDoc._id, { $inc: { posts: 1 } });

    return NextResponse.json({ message: "Post Created Successfully" }, { status: 201 });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Post Not Created" }, { status: 500 });
  } 
}
