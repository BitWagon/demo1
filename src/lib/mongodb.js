import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define MONGODB_URI in your .env.local file."
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

async function connectDB() {
  /*
   * Return the existing connection if MongoDB
   * is already connected.
   */
  if (cached.conn) {
    return cached.conn;
  }

  /*
   * Reuse an existing connection promise.
   * This prevents creating multiple connections
   * during Next.js development/hot reload.
   */
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false,
        serverSelectionTimeoutMS: 10000,
        connectTimeoutMS: 10000,
        socketTimeoutMS: 45000,
        maxPoolSize: 10,
        minPoolSize: 1,
      })
      .then((mongooseInstance) => {
        console.log("MongoDB connected successfully.");
        return mongooseInstance;
      })
      .catch((error) => {
        cached.promise = null;

        console.error(
          "MongoDB connection failed:",
          error.message
        );

        throw error;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}

export default connectDB;