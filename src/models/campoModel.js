import mongoose from "mongoose";

export const CampoModal = mongoose.model("Campo", {
  name: { type: String, required: true},
  sports: { type: Array, required: true},
  location: { type: String, required: true},
  openingHours: { type: String, required: true},
  createdBy: { type: String, required: true},
  editedBy: { type: String, required: true},
  createdAt: { type: Date, required: true},
  updatedAt: { type: Date, required: true},
})

