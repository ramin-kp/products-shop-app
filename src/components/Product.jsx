import React, { memo } from "react";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { useCart } from "../context/CartContext";
import { RotatingLines } from "react-loader-spinner";
import { shortenTitle, showQuantity } from "../helpers/helper";
import { TbShoppingBagCheck } from "react-icons/tb";
import { TbShoppingBagX } from "react-icons/tb";

const Product = memo(({ product }) => {
  const { id, title, image, price } = product;
  const [state, dispatch] = useCart();
  const showProductQuantity = showQuantity(state.selectedItems, id);
  const clickHandler = (type) => {
    dispatch({ type, payload: product });
  };
  return (
    <div className="p-5 border-2 border-dashed border-gray-300 rounded-3xl shadow-lg ">
      <div className="w-[120px] h-[120px] sm:w-[220px] sm:h-[220px] mx-auto">
        {image ? (
          <img className="w-full h-full" src={image} alt={title} />
        ) : (
          <div className="ml-14 w-full">
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              color="grey"
              strokeColor="#e11d48"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}
      </div>
      <div className="pt-5 space-y-2">
        <h3 className="text-xl text-rose-600 font-medium">
          {shortenTitle(title)}
        </h3>
        <p className="text-zinc-700 text-lg">${price}</p>
        <div className="flex items-center justify-between !mt-5">
          <Link to={`/product-info/${id}`}>
            <TbListDetails className="shrink-0 w-7 h-7 p-0.5 bg-rose-600 hover:bg-rose-700 text-white rounded" />
          </Link>
          <div className="flex items-center">
            {!showProductQuantity && (
              <button onClick={() => clickHandler("ADD_ITEM")}>
                <TbShoppingBagCheck className="flex-center shrink-0 w-7 h-7 p-0.5 bg-rose-600 hover:bg-rose-700  text-white rounded" />
              </button>
            )}
            {showProductQuantity > 1 && (
              <button
                className="flex justify-center items-end w-7 h-7 bg-rose-600 hover:bg-rose-700 text-white text-2xl rounded"
                onClick={() => clickHandler("DECREASE")}
              >
                -
              </button>
            )}
            {showProductQuantity === 1 && (
              <button onClick={() => clickHandler("REMOVE_ITEM")}>
                <TbShoppingBagX className="flex-center shrink-0 w-7 h-7 p-0.5 bg-rose-600 hover:bg-rose-700  text-white rounded" />
              </button>
            )}
            {showProductQuantity && (
              <span className="inline-block px-2.5 text-xl ">
                {showProductQuantity}
              </span>
            )}
            {showProductQuantity > 0 && (
              <button
                className="flex justify-center items-end w-7 h-7 bg-rose-600 hover:bg-rose-700 text-white text-2xl rounded"
                onClick={() => clickHandler("INCREASE")}
              >
                +
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
export default Product;
