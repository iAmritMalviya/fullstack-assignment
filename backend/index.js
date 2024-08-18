import express from "express";
import dotenv from "dotenv";
import cardRoutes from "./routes/cardRoute.route.js";
import connectToDb from "./db/connectToDb.js";
import cors from "cors";
// configuring dotenv
dotenv.config();

const app = express();

// using middleware to accept data from frontend in json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// adding the cors middleware and allow frontend access
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// ping endpoint
app.get("/ping", (req, res) => res.send("Server is running!"));
// app routes
app.use("/api/cards", cardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectToDb();
});
