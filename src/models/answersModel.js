import mongoose from "mongoose";

const AnswerSchema = new mongoose.Schema(
  {
    question: { type: String, required: true, unique: true },
    solution: { type: String, required: true },
    explanation: { type: String },
    userOwner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const AnswerModel = mongoose.model("answers", AnswerSchema);
