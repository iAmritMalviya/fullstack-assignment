import express from "express";
import cookieparser from "cookie-parser";
import cors from "cors";
import cardRouter from "./routes/cards.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
app.use(express.static("public"));

app.use("/api/cards", cardRouter);

export { app };
