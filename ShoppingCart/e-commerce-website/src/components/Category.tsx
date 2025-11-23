import CategoryCard from "./CategoryCard";

const data = [
  {
    id: 0,
    name: "Fresh Fruits",
    price: 120,
    left: 10,
    img: "/product__1.webp",
  },
  {
    id: 1,
    name: "Fresh Vegs",
    price: 80,
    left: 6,
    img: "/product__5.webp",
  },
  {
    id: 2,
    name: "Canned Goods",
    price: 150,
    left: 12,
    img: "/category__7.webp",
  },
  {
    id: 3,
    name: "Dry Fruits",
    price: 300,
    left: 5,
    img: "/category__1.webp",
  },
  {
    id: 4,
    name: "Bread & Bakery",
    price: 60,
    left: 20,
    img: "/category__4.webp",
  },
];

const Category = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((el) => (
          <CategoryCard
            key={el.id}
            id={el.id}
            img={el.img}
            name={el.name}
            price={el.price}
            left={el.left}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;