import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true }, 
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
    content: { type: String, required: true },
    likes: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.models.Comment || mongoose.model("Comment", commentSchema);
