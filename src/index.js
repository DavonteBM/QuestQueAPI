//Imports
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { userRoutes } from "./routes/userRoutes.js";
import { answerRoutes } from "./routes/answerRoutes.js";

const app = express();

//Middleware
app.use(express.json());
app.use("/auth", userRoutes);
app.use("/answers", answerRoutes);

//Redirect user to docs
app.get("/", (req, res) => {
  res.redirect("https://documenter.getpostman.com/view/28561890/2s9YeG5rXQ");
});

// Connection to database
mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

//Server listening on port
app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server started`);
});
