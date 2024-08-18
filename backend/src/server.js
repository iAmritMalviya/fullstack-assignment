import express from "express";
import dotenv from "dotenv";
import { customErrorHandler } from "./middleware/customErrorHandler.js";
import { connectDB } from "./db/connectDB.js";
import { cardRouter } from "./routers/cardRouter.js";
import cors from "cors";
dotenv.config({
  path: ".env",
});
const port = process.env.port || 3000;
const app = express();
await connectDB(process.env.MONGODB_URI);
app.use(
  cors({
    origin: " * ",
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);
app.use(express.json());
app.get("/api/v1/ping", (req, res, next) => res.json({ success: true }));
app.use("/api/v1", cardRouter);
app.use(customErrorHandler);

const server = app.listen(port, () => {
  console.log("listening at port " + port);
});

process.on("uncaughtException", (err) => {
  console.log(err.message);
});
process.on("unhandledRejection", (err) => {
  server.close(() => {
    console.log("Server closed ", err);
    process.exit(1);
  });
});
