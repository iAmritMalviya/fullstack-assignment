const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./dbConnection');
const path = require("path");

const cardRoutes = require('./Routes/cardRoutes')

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, './blog/build')))

app.use('/', cardRoutes)

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, './blog/build/index.html'));
})


const PORT = 8080;

app.listen(PORT, () => {
    console.log('server is running on port 8080');
})