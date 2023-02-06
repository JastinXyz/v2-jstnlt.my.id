import mongoose from "mongoose";

const HitSchema = new mongoose.Schema({
  name: String,
  hit: Number,
});

module.exports = mongoose.models.Hit || mongoose.model("Hit", HitSchema);
