import React from "react";
import { useCart } from "../context/CartContext";
import { FaCircleXmark } from "react-icons/fa6";
import CartOrders from "./../components/CartOrders";
export default function Orders() {
  const [state, dispatch] = useCart();
  const { selectedItems } = state;
  return (
    <div className="container">
      {!selectedItems.length ? (
        <div className="flex-center h-screen text-2xl font-medium">
          <span>
            <FaCircleXmark className="w-10 h-10 m-2 text-rose-500" />
          </span>
          There is no product available!
        </div>
      ) : (
        <div className="my-5">
          {selectedItems.map((product) => (
            <CartOrders
              key={product.id}
              product={product}
              dispatch={dispatch}
            />
          ))}
        </div>
      )}
    </div>
  );
}
