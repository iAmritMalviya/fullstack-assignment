const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cardRoutes = require('./routes/cardRoutes');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});
app.use('/cards', cardRoutes);
app.get('/ping', (req, res) => res.send('Server is running'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
