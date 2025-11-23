const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  status: String,
  img: String
});

module.exports = mongoose.model("Item", itemSchema);