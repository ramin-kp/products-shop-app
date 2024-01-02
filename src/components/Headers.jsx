import { TbShoppingBag } from "react-icons/tb";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Headers() {
  const [state] = useCart();
  console.log(state);
  return (
    <div className="flex justify-between w-full h-20 p-5 my-5 bg-rose-600 text-white  rounded-lg">
      <span className="font-bold text-3xl text-center">products shope</span>

      <div className="relative">
        <Link to="/orders">
        <TbShoppingBag className="w-8 h-8" />
        </Link>
        {state.itemsCounter > 0 && (
          <span className="inline-block absolute -top-2 left-4 w-5 h-5 pb-6 text-base text-center  bg-gray-600 rounded-full ">
            {state.itemsCounter}
          </span>
        )}
      </div>
    </div>
  );
}
