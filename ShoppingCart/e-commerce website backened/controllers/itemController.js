let items = [
  { id: 1, name: "Fresh Mango", price: 80, status: "In Stock" },
  { id: 2, name: "Tomato", price: 40, status: "In Stock" },
  { id: 3, name: "Canned Corn", price: 120, status: "Limited Stock" }
];

exports.getItems = (req, res) => {
  res.json(items);
};

exports.addItem = (req, res) => {
  const { name, price, status } = req.body;

  const newItem = { id: Date.now(), name, price, status };
  items.push(newItem);

  res.json({ message: "Item added", item: newItem });
};