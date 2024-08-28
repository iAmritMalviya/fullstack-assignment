const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const  cardRouter =require('./api/routes/cardRoutes') 

const port = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(`${process.env.MONGOURL}`)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

  app.use('/card',cardRouter)

app.get('/',(req,res)=>{
    res.send("hello")
})

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });