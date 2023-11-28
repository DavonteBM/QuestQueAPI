//Import
import mongoose from "mongoose";

//Schema for User data model
const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

//Exporting user data model
export const UserModel = mongoose.model("users", UserSchema);
