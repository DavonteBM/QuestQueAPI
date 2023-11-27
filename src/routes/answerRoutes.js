import express from "express";
import mongoose from "mongoose";
import { AnswerModel } from "../models/answersModel.js";
import { verifyToken } from "./userRoutes.js";

const router = express.Router();

//Get all Answers
router.get("/", async (req, res) => {
  try {
    const result = await AnswerModel.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a recipe by ID
router.get("/:answerId", async (req, res) => {
  try {
    const result = await AnswerModel.findById(req.params.answerId);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create an answer
router.post("/create", verifyToken, async (req, res) => {
  const answer = new AnswerModel({
    _id: new mongoose.Types.ObjectId(),
    question: req.body.question,
    solution: req.body.solution,
    explanation: req.body.explanation,
    userOwner: req.body.userOwner,
  });
  console.log(answer);

  try {
    const result = await answer.save();
    res.status(201).json({
      createdAnswer: {
        question: result.question,
        solution: result.solution,
        explanation: result.explanation,
        userOwner: result.userOwner,
        _id: result._id,
      },
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json(err);
  }
});

//Update an answer by id
router.put("/:answerId", async (req, res) => {
  const answer = {
    question: req.body.question,
    solution: req.body.solution,
    explanation: req.body.explanation,
  };
  try {
    const result = await AnswerModel.findByIdAndUpdate(
      req.params.answerId,
      answer
    );
    res.status(200).json({ message: "Updated answer successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete an answer by id
router.delete("/:answerId", async (req, res) => {
  try {
    const result = await AnswerModel.findByIdAndDelete(req.params.answerId);
    res.status(200).json({ message: "Deleted answer successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

export { router as answerRoutes };
