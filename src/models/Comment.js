import mongoose from "mongoose";
const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    text: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", autopopulate: true },
    post: { type: Schema.Types.ObjectId, ref: "Post" },
    status: { type: String, enum: ["approved", "pending", "rejected"], default: "pending" },
    likes: { type: Number, default: 0 }
  },
  { timestamps: true }
);


export default mongoose.models.Comment || mongoose.model("Comment", commentSchema);




