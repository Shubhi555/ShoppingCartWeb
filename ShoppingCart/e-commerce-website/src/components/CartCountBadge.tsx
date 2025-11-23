interface PropsType {
  size: string;
  count: number;
}

const CartCountBadge: React.FC<PropsType> = ({ size, count }) => {
  return (
    <div
      className={'absolute bg-red-700 text-white text-[15px] ${size} -right-0 -top-1 rounded-full grid place-items-center'}
    >
      {count}
    </div>
  );
};

export default CartCountBadge;