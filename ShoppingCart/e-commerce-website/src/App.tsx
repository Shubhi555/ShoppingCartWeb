import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import Cart from "./components/Cart";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Navbar />

      <Routes>
        <Route path="/" element={<><Hero /><Category /></>} />
        <Route path="/items" element={<ItemsList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  );
};

export default App;