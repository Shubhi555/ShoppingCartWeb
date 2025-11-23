const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/items", require("./routes/itemRoutes"));
app.use("/api/carts", require("./routes/cartRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));
