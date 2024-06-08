// import mongoose, { Connection } from "mongoose";
// import { DB_NAME } from "./constants.js";

// const connectDB = async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log(`/n MongoDB connected !!! DB Host: ${connectionInstance.Connection.host}`)
//     } catch (error) {
//         console.log("MongoDB connection error",error);
//         process.exit(1)
//     }
// }

// export default connectDB;

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";  // Ensure the correct relative path

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !!! DB Host: ${mongoose.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error", error);
        process.exit(1);
    }
};

export default connectDB;
