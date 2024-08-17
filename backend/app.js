const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cardRoutes = require("./routes/cards");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Configure CORS before other middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.get("/ping", (req, res) => res.send("Server is running!"));
app.use("/cards", cardRoutes);

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
