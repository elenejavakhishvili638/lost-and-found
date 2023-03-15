const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  lost_date: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  other: { type: String },
  // address: {
  //   longitude: { type: Number, required: true },
  //   latitude: { type: Number, required: true },
  // },
  user: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
});

module.exports = mongoose.model("Item", itemSchema);
