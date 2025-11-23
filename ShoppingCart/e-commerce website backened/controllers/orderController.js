const { clearCart } = require("./cartController");

let orders = [];

exports.createOrder = (req, res) => {
  const { cart } = req.body;

  if (!cart || cart.length === 0)
    return res.status(400).json({ message: "Cart is empty" });

  const newOrder = {
    id: Date.now(),
    items: cart,
    date: new Date(),
  };

  orders.push(newOrder);

  clearCart();

  res.json({ message: "Order placed successfully", order: newOrder });
};

exports.getOrders = (req, res) => {
  res.json(orders);
};