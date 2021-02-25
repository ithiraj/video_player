//import dependencies
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

//import files
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";

const app = express();

//use middlewares
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());

//userRouters
app.use("/api/users", userRoutes);

//connect server and database
const serverStart = async () => {
  const port = process.env.PORT;
  await connectDB();
  app.listen(port, () =>
    console.log(`server started successfully at :${port}`)
  );
};
serverStart();
