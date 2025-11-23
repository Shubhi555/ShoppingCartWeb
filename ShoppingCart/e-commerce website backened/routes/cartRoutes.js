
const express = require("express");
const router = express.Router();

let cart = [];

router.get("/", (req, res) => {
  res.json(cart);
});
router.post("/", (req, res) => {
  const item = req.body;
  cart.push(item);
  res.json({ message: "Item added to cart", cart });
});
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  cart = cart.filter(item => item.id !== id);
  res.json({ message: "Item removed", cart });
});

module.exports = router;