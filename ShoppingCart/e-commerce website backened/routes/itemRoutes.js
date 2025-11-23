const express = require("express");
const router = express.Router();

let items = [
  { id: 1, name: "Fresh Mango", price: 80, status: "In Stock" },
  { id: 2, name: "Tomato", price: 40, status: "In Stock" },
  { id: 3, name: "Canned Corn", price: 120, status: "Limited Stock" }
];


router.get("/", (req, res) => {
  res.json(items);
});

router.post("/", (req, res) => {
  const newItem = req.body;

  if (!newItem.name || !newItem.price || !newItem.status) {
    return res.status(400).json({ message: "All fields required" });
  }

  newItem.id = items.length + 1;
  items.push(newItem);

  res.status(201).json({ message: "Item added", item: newItem });
});

module.exports = router;
