let cart = [];  

exports.getCart = (req, res) => {
  res.json(cart);
};

exports.addToCart = (req, res) => {
  const item = req.body;

  const existing = cart.find(c => c.id === item.id);

  if (existing) {
    existing.qty += 1; 
  } else {
    cart.push({ ...item, qty: 1 });
  }

  res.json({ message: "Added to cart", cart });
};

exports.removeFromCart = (req, res) => {
  const id = parseInt(req.params.id);
  cart = cart.filter(item => item.id !== id);

  res.json({ message: "Item removed", cart });
};

exports.clearCart = () => {
  cart = [];
};
