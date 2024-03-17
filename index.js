import express from "express";
import dotenv from "dotenv";

import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";


const app = express();
dotenv.config();

import authenticateUser from "./middleware/authMiddleware.js";
import dbConnect from "./db/dbConfig.js";



const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());

dbConnect();

import userRoutes from "./routes/user.js";
import taskRoutes from "./routes/task.js";

app.use("/api", userRoutes);
app.use("/api", authenticateUser);
app.use("/api", taskRoutes);


app.get("/health", (req, res) => {
  const dbstatus =
    mongoose.connection.readyState === 1 ? "connected" : "disconnected";
  res.status(200).json({
    server: "Running",
    database: dbstatus,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
