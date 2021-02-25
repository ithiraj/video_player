//import dependecies
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//dburl
const DBurl = process.env.DBURL;

//database connection
const connectDB = async () => {
  try {
    await mongoose.connect(DBurl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
