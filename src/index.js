import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { userRoutes } from "./routes/userRoutes.js";

const app = express();

const port = process.env.SERVER_PORT;
app.use(express.json());
app.use("/auth", userRoutes);

mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

app.listen(port, () => {
  console.log(`Server started`);
});
