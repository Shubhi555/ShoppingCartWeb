import { useCart } from "./CartContext";

interface PropsType {
  id: number;
  img: string;
  name: string;
  price: number;
  left: number;
}

const CategoryCard: React.FC<PropsType> = ({ id, img, name, price, left }) => {
  const { addToCart } = useCart();

  return (
    <div className="border border-gray-20 hover:border-gray-30 hover:scale-105 transition-transform rounded-lg p-4">
      <img className="w-full rounded-lg" src={img} alt={name} />

      <h3 className="font-medium text-xl mt-3">{name}</h3>
      <p className="text-gray-10 text-sm">Price: ₹{price}</p>
      <p className="text-gray-10 text-sm">Left: {left} items</p>

      <button
        onClick={() => addToCart({ id, img, name, price, left })}
        className="mt-3 bg-green-600 text-white px-1 py-2 rounded-lg w-full hover:bg-green-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CategoryCard;