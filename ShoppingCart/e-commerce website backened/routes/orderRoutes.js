// routes/orderRoutes.js
const express = require("express");
const router = express.Router();

let orders = [];
let cart = []; // temporary (until database is added)

// GET all orders
router.get("/", (req, res) => {
  res.json(orders);
});

// Convert cart to order
router.post("/", (req, res) => {
  const newOrder = {
    id: orders.length + 1,
    items: cart,
    total: cart.reduce((sum, i) => sum + i.price, 0),
    date: new Date()
  };

  orders.push(newOrder);
  cart = []; // empty cart after ordering

  res.json({
    message: "Order created successfully",
    order: newOrder
  });
});

module.exports = router;