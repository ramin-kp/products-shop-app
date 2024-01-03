import React from "react";
import { useCart } from "../context/CartContext";
import { FaCircleXmark } from "react-icons/fa6";
import CartOrders from "./../components/CartOrders";
import LayoutOrders from "./../components/LayoutOrders";
import { Link } from "react-router-dom";
export default function Orders() {
  const [state, dispatch] = useCart();
  const { selectedItems } = state;
  return (
    <div className="container">
      {!selectedItems.length ? (
        <div className="flex flex-col items-center justify-center h-screen text-lg md:text-2xl font-medium">
          <span className="flex-center">
            <FaCircleXmark className="shrink-0 w-6 md:w-10 h-6 md:h-10 m-2 text-rose-500" />
          There is no product available!
          </span>
          <Link
            className="px-2 py-1 bg-rose-600 hover:bg-rose-700 text-white text-base rounded"
            to="/"
          >
            back to shope
          </Link>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-x-16 my-5">
          <LayoutOrders data={state} />
          <div className="md:grow">
            {selectedItems.map((product) => (
              <CartOrders
                key={product.id}
                product={product}
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
