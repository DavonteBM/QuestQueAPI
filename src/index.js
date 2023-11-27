import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { userRoutes } from "./routes/userRoutes.js";
import { answerRoutes } from "./routes/answerRoutes.js";

const app = express();

const port = process.env.SERVER_PORT;
app.use(express.json());

app.use("/auth", userRoutes);
app.use("/answers", answerRoutes);

mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

app.listen(port, () => {
  console.log(`Server started`);
});
