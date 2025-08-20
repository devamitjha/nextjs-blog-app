import mongoose from "mongoose";
const { Schema } = mongoose;

const CategorySchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    catImage: { type: String},
    posts: { type: Number, default: 0 }, 
    url: { type: String},
  },
  {
    timestamps: true 
  }
);

export default mongoose.models.Category || mongoose.model("Category", CategorySchema);
