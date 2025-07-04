// require('dotenv').config({path: './env'})

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()





















// import express from "express";
// const app = express();
// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERROR: ", error)
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`Application is listening on port: ${process.env.PORT}`)
//         })
        
//     } catch (error) {
//         console.error("ERROR:", error);
//         throw error;
//     }
// })