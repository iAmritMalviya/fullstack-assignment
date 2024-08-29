
//-------- -Create the express server
const express = require('express')
const app = express();

//-------------- Connect to database
require('dotenv').config();
require('./db')

//------------ Accessing the cors
const cors = require('cors')
app.use(cors());

//------- Handle the body
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//----------- Creating the welcoming routes
app.get('/ping',(req,res)=>{
    return res.status(200).json({success:true,msg:"Welcome in full-stack development assessment solution"})
})

//------------- Routes Specific Stuffs
const routes = require('./CardRoutes');
app.use('/',routes);

const Port =  process.env.PORT || 8000 ;
const Server = process.env.SERVER || 'http://localhost';

app.listen(Port,()=> console.info(`Application listen at ${Server}:${Port}`));