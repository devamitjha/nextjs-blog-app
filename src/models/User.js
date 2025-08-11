import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // hashed password
    avatar: { type: String }, // image filename or URL
    posts: { type: Number, default: 0 }, // count of user's posts
  },
  {
    timestamps: true // adds createdAt & updatedAt automatically
  }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
