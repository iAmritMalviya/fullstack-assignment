const express = require('express');
const dotenv = require('dotenv');
const cardRoutes = require('./src/routes/cardRoutes');
const connectDB = require('./src/config/db');
const cors = require("cors")

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors())
app.use('/api/cards', cardRoutes);

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
