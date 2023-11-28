//Imports
import mongoose from "mongoose";

//Schema for Answer data model
const AnswerSchema = new mongoose.Schema(
  {
    question: { type: String, required: true, unique: true },
    solution: { type: String, required: true },
    explanation: { type: String, required: true },
  },

  {
    timestamps: true,
  }
);

//Exporting answer data model
export const AnswerModel = mongoose.model("answers", AnswerSchema);
