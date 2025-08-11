import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    shortDescription: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    postImage: { type: String, required: true },
    tags: [{ type: String }], 
  },
  { timestamps: true }
);

//If the Post collection does not exist create a new one.
export default mongoose.models.Post || mongoose.model("Post", postSchema);