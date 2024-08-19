import express from "express";

import cors from "cors";
const app = express();

//middlewares
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

app.get('/ping',(req,res)=>{
    res.send("server is started at port 8000")
})


import cardRouter from './routes/Card.routes.js' 
app.use('/',cardRouter)

export {app};
