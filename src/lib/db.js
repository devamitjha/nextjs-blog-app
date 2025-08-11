import mongoose from "mongoose";

let isConnected = false; // Track connection state

export const connectDB = async () => {
  if (isConnected) {
    console.log("✅ MongoDB already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "mern-blog-app"
    });

    isConnected = db.connections[0].readyState === 1;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw new Error("Connection failed!");
  }
};
