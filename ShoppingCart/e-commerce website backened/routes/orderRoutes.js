const express = require("express");
const router = express.Router();

let orders = [];
let cart = []; 
router.get("/", (req, res) => {
  res.json(orders);
});

router.post("/", (req, res) => {
  const newOrder = {
    id: orders.length + 1,
    items: cart,
    total: cart.reduce((sum, i) => sum + i.price, 0),
    date: new Date()
  };

  orders.push(newOrder);
  cart = [];\

  res.json({
    message: "Order created successfully",
    order: newOrder
  });
});

module.exports = router;
