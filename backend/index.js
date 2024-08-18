const express = require("express");
const cors = require("cors");
const cardRouter = require("./cardRouter");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", cardRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("The server is Up and Running on PORT:" + PORT);
});
