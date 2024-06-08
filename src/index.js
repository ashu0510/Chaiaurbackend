// require('dotenv').config({path:'./env'})
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import connectDB from "./db";
// import dotenv from "dotenv"
// import cors from 'cors';



// dotenv.config({
//     path: "./env"
// })


// app.use(cors())

// connectDB()

// src/index.js
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";  // Ensure .js extension
import dotenv from "dotenv";
import cors from 'cors';
import express from 'express';

const app = express();

dotenv.config({
    path: "./env"
});

app.use(cors());

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`App is listening on ${process.env.PORT}`);
});







// First Approach

// import express from 'express'
// const app = express()

// we will not use normal function, we use IIF
// Database is in another continent. So, use async await
// ;( async ()=>{
//     try {
//         // we connect here but don't forgot to give the database name
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         // These are the listeners app.on (ab database toh connect hogya lekin kya pta express ki app hai vo listen nhi kr pa rhi)
//         app.on("error", (error) =>{
//             console.log("ERR:", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on ${process.env.PORT}`);
//         })

//     } catch (error) {
//         console.log(error);
//     }
// })()