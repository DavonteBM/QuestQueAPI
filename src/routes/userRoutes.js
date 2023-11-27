import express from "express";

const router = express.Router();
import { UserModel } from "../models/userModel.js";

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });
  if (user) {
    return res.status(400).json({ message: "Username already exists" });
  }
});

export { router as userRoutes };
