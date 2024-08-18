import express from "express";
import { connectDB } from "./db/connect.js";
import Card from "./router/Card.js";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

//Routes
app.use("/", Card);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running 😎 ", PORT);
});
