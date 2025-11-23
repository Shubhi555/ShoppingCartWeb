const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: String,
  items: [
    {
      itemId: String,
      name: String,
      img: String,
      price: Number,
      status: String,
      qty: Number
    }
  ]
});

module.exports = mongoose.model("Cart", cartSchema);