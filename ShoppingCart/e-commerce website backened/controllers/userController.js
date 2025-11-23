
let users = [];   

exports.createUser = (req, res) => {
  const { username, password } = req.body;

  const exists = users.find(u => u.username === username);
  if (exists) return res.status(400).json({ message: "User already exists" });

  const newUser = { id: Date.now(), username, password };
  users.push(newUser);

  res.json({ message: "Signup successful", user: newUser });
};

exports.loginUser = (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) return res.status(400).json({ message: "Invalid login" });

  res.json({ message: "Login successful", user });
};

exports.getUsers = (req, res) => {
  res.json(users);
};
