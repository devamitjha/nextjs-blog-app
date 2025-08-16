import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, 
    slug: { type: String, required: true, unique: true }, 
    role: { type: String, required: true },
    type: { type: String, enum: ["contributor", "admin", "editor"], default: "contributor" },
    totalPost: { type: Number, default: 0 }, 
    avatar: { type: String }, 
    bgImg: { type: String }, 
    bio: { type: String }, 
    website: { type: String }, 
    verified: { type: String, enum: ["yes", "no"], default: "no" }, 
    social: {
      insta: { type: String },
      youtube: { type: String },
      linkedin: { type: String },
      facebook: { type: String },
      twitter: { type: String },
    },
  },
  {
    timestamps: true 
  }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
