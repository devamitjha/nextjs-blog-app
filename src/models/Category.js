import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    postImage: { type: String},
    posts: { type: Number, default: 0 }, // stores count of posts
  },
  {
    timestamps: true // creates createdAt & updatedAt
  }
);

export default mongoose.models.Category || mongoose.model("Category", CategorySchema);
