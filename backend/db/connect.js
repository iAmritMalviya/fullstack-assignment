import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI + "Project");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};
