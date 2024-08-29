const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const cardRoutes = require('./routes/cardRoutes');
const formRoutes = require('./routes/formRoutes'); 
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', cardRoutes);
app.use('/api/form', formRoutes); 

// Error Handling Middleware
app.use(errorHandler);

// Health Check Route
app.get('/ping', (req, res) => {
    res.send('Server is running');
});

const PORT = process.env.PORT || 5000; // Provide a default port if not defined
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
