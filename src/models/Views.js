import mongoose from "mongoose";

const { Schema } = mongoose;

const ViewsSchema = new Schema(
  {
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    viewsCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Views || mongoose.model("Views", ViewsSchema);
