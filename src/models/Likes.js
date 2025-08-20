import mongoose from "mongoose";

const { Schema } = mongoose;

const LikesSchema = new Schema(
  {
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    likesCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Likes || mongoose.model("Likes", LikesSchema);
