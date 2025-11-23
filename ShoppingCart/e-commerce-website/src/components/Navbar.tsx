import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import CartCountBadge from "./CartCountBadge";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { cart, setCart } = useCart();

  
  useEffect(() => {
    fetch("http://localhost:5000/api/carts")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCart(data); 
        }
      })
      .catch((err) => console.log("Cart fetch error:", err));
  }, []);

  const openLogin = () => {
    setShowLogin(true);
    setIsSignup(false);
  };

  const closeLogin = () => {
    setShowLogin(false);
    setUsername("");
    setPassword("");
  };

  const handleSignup = () => {
    if (!username || !password) {
      alert("Please fill all fields.");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ username, password }));
    alert("Signup successful!");
    setIsSignup(false);
    setUsername("");
    setPassword("");
  };

  const handleLogin = () => {
    const saved = localStorage.getItem("user");

    if (!saved) {
      alert("No user found. Please sign up first.");
      return;
    }

    const user = JSON.parse(saved);

    if (user.username === username && user.password === password) {
      alert("Login successful!");
      closeLogin();
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="container lg:block relative">
      <div className="flex justify-between items-center pt-8">
        <h1 className="text-4xl font-medium">
      <img 
  src="/grocery logo.jpg" 
  className="h-20 w-auto ml-5 object-contain" 
  alt="Logo" 
/>

        </h1>

        <div className="relative w-full max-w-[500px]">
          <input
            className=" bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
            type="text"
            placeholder="Search Product..."
          />
          <BsSearch
            className="absolute top-0 right-0 mt-4 mr-5 text-gray-500"
            size={20}
          />
        </div>

        <div className="flex gap-4">
          <div className="icon_wrapper" onClick={openLogin}>
            <FaRegUser />
          </div>

          <div className="icon_wrapper relative">
            <Link to="/cart">
              <MdOutlineShoppingCart />
              <CartCountBadge size="w-[25px] h-[25px]" count={cart.length} />
            </Link>
          </div>
        </div>
      </div>

      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-8 w-[350px] relative shadow-lg">
            <button
              onClick={closeLogin}
              className="absolute top-3 right-3 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center"
            >
              ✕
            </button>

            <h2 className="text-center text-2xl font-bold mb-4">
              {isSignup ? "Sign Up" : "Login"}
            </h2>

            <input
              className="w-full p-2 border rounded mb-3"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              className="w-full p-2 border rounded mb-3"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={isSignup ? handleSignup : handleLogin}
              className="w-full bg-green-600 text-white py-2 rounded mb-3"
            >
              {isSignup ? "Sign Up" : "Login"}
            </button>

            <p className="text-center text-sm">
              {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
              <span
                onClick={() => setIsSignup(!isSignup)}
                className="text-blue-600 cursor-pointer"
              >
                {isSignup ? "Login" : "Sign Up"}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
