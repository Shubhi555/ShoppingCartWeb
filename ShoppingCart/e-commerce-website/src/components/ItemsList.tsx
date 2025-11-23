import { useCart } from "./CartContext";

const itemsData = [
  {
    id: 1,
    name: "Fresh Mango",
    price: 80,
    status: "In Stock",
    img: "https://i.imgur.com/1X4TQwO.jpeg"
  },
  {
    id: 2,
    name: "Tomato",
    price: 40,
    status: "In Stock",
    img: "https://i.imgur.com/n8h3FQg.jpeg"
  },
  {
    id: 3,
    name: "Canned Corn",
    price: 120,
    status: "Limited Stock",
    img: "https://i.imgur.com/WrZ4lLk.jpeg"
  }
];

const ItemsList = () => {
  const { addToCart } = useCart();

  return (
    <div className="container pt-12">
      <h2 className="text-3xl font-bold mb-6">Items List</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {itemsData.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow">
            <img src={item.img} className="w-full h-40 object-cover rounded" />

            <h3 className="text-xl font-semibold mt-2">{item.name}</h3>
            <p className="text-gray-600">₹{item.price}</p>
            <p className="text-sm text-green-600">{item.status}</p>

            <button
              className="mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsList;