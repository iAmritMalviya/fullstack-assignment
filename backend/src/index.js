import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"

dotenv.config({path:'./env'})

connectDB().then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server started at port ${process.env.PORT}`);
    })
}).catch((err)=>{
    console.log("MongoDB connection failed ", err);
})















// const app= express();
// // const port= process.env.PORT || 8000
// //this is a special syntax through which we can immediately execute the function 
// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("errror",(error)=>{
//             console.log(error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`server is listening on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.log("Err:",error);
        

//     }
// }

// )()
