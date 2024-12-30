require("dotenv").config({path:'./.env'});

// import dotenv from "dotenv";


// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db";

dotenv.config({
  path: "./.env",
})


connectDB()









// import express from "express";
// (async () => {
//   try {
//    await  mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//    app.on("error", (err) => {
//     console.log("Error connecting to the database", err);
//     throw err;
//   })
//   app.listen(process.env.PORT, () => {
// console.log(`Server is running on port ${process.env.PORT}`);
//   })
//  } catch (err) {
//     console.error(err);
//     throw err;
//   }
// })();
