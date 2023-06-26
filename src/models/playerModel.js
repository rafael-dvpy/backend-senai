import mongoose from "mongoose";

export const PlayerModal = mongoose.model("Player", {
  name: { type: String, required: true},
  email: { type: String, required: true},
  password: { type: String, required: true},
  campos: { type: Array, required: true},
  createdAt: { type: Date, required: true},
})
