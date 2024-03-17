import mongoose from "mongoose";

const dbConnect = async() => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => {
        console.log("MongoDB connected successfully");
      })
      .catch((error) => {
        console.error("MongoDB connection error:", error);
      });
  } catch (error) {
    console.log("Mongodb connection error:", error)
  }
};

export default dbConnect;
