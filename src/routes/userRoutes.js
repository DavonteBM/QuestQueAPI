//Imports
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/userModel.js";

const router = express.Router();

//--Register User--
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  //Check if user credentials exists in db
  const user = await UserModel.findOne({ username });
  if (user) {
    return res.json({ message: "User already exists" });
  }
  //Hash password and save user to db
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({ username, password: hashedPassword });
  await newUser.save();
  res.json({ message: "User registered successfully" });
});

//--Login User--
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });
  //Check if username exists in db
  if (!user) {
    return res
      .status(400)
      .json({ message: "Username or password is incorrect" });
  }
  //Check if password is the same as in db
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res
      .status(400)
      .json({ message: "Username or password is incorrect" });
  }
  // Provide user with a jwt
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
});

//--verification token to verify if a user has authorization--
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    jwt.verify(authHeader, process.env.JWT_SECRET, (err) => {
      if (err) {
        return res.sendStatus(403);
      }
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export { router as userRoutes };
