import React from 'react';

interface CartPageProps {
  cartItems: any[];
  setCartItems: (items: any[]) => void;
  setCartCount: (count: number) => void;
}

const CartPage: React.FC<CartPageProps> = ({
  cartItems,
  setCartItems,
  setCartCount,
}) => {
  const increaseQty = (index: number) => {
    const updated = [...cartItems];
    updated[index].qty += 1;
    setCartItems(updated);
    setCartCount((prev) => prev + 1);
  };

  const decreaseQty = (index: number) => {
    const updated = [...cartItems];
    if (updated[index].qty > 1) {
      updated[index].qty -= 1;
      setCartItems(updated);
      setCartCount((prev) => prev - 1);
    }
  };

  const removeItem = (index: number) => {
    const qtyToRemove = cartItems[index].qty;
    setCartItems(cartItems.filter((_, i) => i !== index));
    setCartCount((prev) => prev - qtyToRemove);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cartItems.length === 0)
    return <h1 className="text-center mt-20 text-xl">Your cart is empty</h1>;

  return (
    <div className="container mt-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-6">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-sm flex items-center gap-4"
          >
            <img src={item.img} className="w-20 h-20 object-cover rounded" />

            <div className="flex-1">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-500">₹{item.price}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => decreaseQty(index)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                -
              </button>

              <span className="text-lg">{item.qty}</span>

              <button
                onClick={() => increaseQty(index)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeItem(index)}
              className="ml-4 bg-red-600 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="text-right mt-10">
        <h2 className="text-2xl font-bold">Total: ₹{totalPrice}</h2>
        <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
