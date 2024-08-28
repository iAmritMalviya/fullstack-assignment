
const mongoose = require('mongoose');

//Now connect the database
const mongo_uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27107/full-stack-ass";

mongoose.connect(mongo_uri).
then(() => console.info("Connection to database")). 
catch((err) => console.error("Error to connect database: ",err?.message))