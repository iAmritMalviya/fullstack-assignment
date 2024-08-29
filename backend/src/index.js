import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import recordDatabase from "./db/record.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(async () => {
    await recordDatabase();
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is Running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo DB connection Failed !", err);
  });
