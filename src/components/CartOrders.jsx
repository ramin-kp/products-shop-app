import React from "react";
import { showQuantity } from "../helpers/helper";
import { useCart } from "../context/CartContext";
import { TbShoppingBagX } from "react-icons/tb";

export default function CartOrders({ product, dispatch }) {
  const { image, title, quantity, price, id } = product;
  const [state] = useCart();
  const showButton = showQuantity(state.selectedItems, id);
  const clickHandler = (type) => {
    dispatch({ type, payload: product });
  };
  return (
    <div className="flex items-center justify-between my-5 p-5 border-2 border-dashed border-gray-400 rounded">
      <div className="flex items-center gap-x-2">
        <img className="w-[100px] h-[100px]" src={image} alt={title} />
        <span className="font-medium w-52 ml-5 line-clamp-2">{title}</span>
      </div>
      <span>{price} $</span>
      <div className="flex items-center gap-x-2.5">
        {showButton === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM")}>
            <TbShoppingBagX className="flex-center shrink-0 w-7 h-7 p-0.5 bg-rose-600 hover:bg-rose-700  text-white rounded" />
          </button>
        )}
        {showButton > 1 && (
          <button
            className="flex justify-center items-end w-7 h-7 bg-rose-600 hover:bg-rose-700 text-white text-2xl rounded"
            onClick={() => clickHandler("DECREASE")}
          >
            -
          </button>
        )}
        <span>{quantity}</span>
        <button
          className="flex justify-center items-end w-7 h-7 bg-rose-600 hover:bg-rose-700 text-white text-2xl rounded"
          onClick={() => clickHandler("INCREASE")}
        >
          +
        </button>
      </div>
    </div>
  );
}
