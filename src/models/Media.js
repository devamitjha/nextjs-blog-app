import mongoose from "mongoose";

const { Schema } = mongoose;

const MediaSchema = new Schema(
  {
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" }, // 🔗 linked after Post creation
    filename: { type: String, required: true }, // actual saved filename
    url: { type: String, required: true }, // public URL (/uploads/filename.jpg)
    mimetype: { type: String }, // optional: store file type (image/jpeg, etc.)
    size: { type: Number }, // optional: store file size in bytes
  },
  { timestamps: true }
);

export default mongoose.models.Media || mongoose.model("Media", MediaSchema);
