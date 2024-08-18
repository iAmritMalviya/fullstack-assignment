import mongoose from "mongoose";

export const connectDB = async (uri) => {
  const { connection } = await mongoose.connect(uri, {
    dbName: "FutureSkills",
  });
  console.log("Connected to DB at " + connection.db.databaseName);
};
