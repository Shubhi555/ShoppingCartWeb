import type { Product } from "./CartContext";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container pt-16">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-xl">Cart is empty</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cart.map((item: Product) => (
            <div
              key={item.id}
              className="relative border border-gray-300 rounded-xl p-4 group"
            >
              
              <button
                onClick={() => removeFromCart(item.id)}
                className="absolute -top-2 -right-2 bg-red-600 text-white w-7 h-7 rounded-full 
                           flex items-center justify-center opacity-0 group-hover:opacity-100 
                           transition-opacity duration-300"
              >
                ✕
              </button>

              <img
                src={item.img}
                alt={item.name}
                className="w-full rounded-lg mb-2"
              />
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-600 text-sm">Price: ₹{item.price}</p>
             {item.status ? (
               <p className="text-green-600 text-sm">{item.status}</p>
                ) : (
                 <p className="text-gray-600 text-sm">Left: {item.left}</p>
                 )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;