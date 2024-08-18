import mongoose from "mongoose";
const connectToDb = async () => {
  try {
    /* for the simplicity I not create any cluster online */
    const url = await mongoose.connect(
      "mongodb://127.0.0.1:27017/helpCenterDB"
    );
    if (!url) throw new Error("Mongodb url not found");
    console.log("MongoDb is connected securely", url?.connection?.host);
  } catch (error) {
    console.error("Error in connect to mongodb", error.message);
    process.exit(1);
  }
};
export default connectToDb;
