import React from "react";
import { IoPricetagOutline } from "react-icons/io5";
import { VscOutput } from "react-icons/vsc";
import { AiOutlineReload } from "react-icons/ai";
import { useCart } from "../context/CartContext";

export default function LayoutOrders({ data }) {
  const [state,dispatch]=useCart()
  const { itemsCounter, total } = data;
  return (
    <div className="md:shrink-0 my-auto p-5 rounded-lg border-2 border-dashed border-gray-500 space-y-5">
      <div className="flex items-center gap-x-5">
        <span className="flex items-center gap-3 text-rose-600 font-bold  child:w-6 child:h-6">
          <IoPricetagOutline />
          Total products:
        </span>
        <span className="text-zinc-700 text-lg font-medium">{itemsCounter}</span>
      </div>
      <div className="flex items-center gap-x-5">
        <span className="flex items-center gap-3 text-rose-600 font-bold  child:w-6 child:h-6">
          <VscOutput />
          total price:
        </span>
        <span className="text-zinc-700 text-lg font-medium">{total} $</span>
      </div>
      <div className="flex items-center gap-x-5">
        <span className="flex items-center gap-3 text-rose-600 font-bold  child:w-6 child:h-6">
          <AiOutlineReload />
          status:
        </span>
        <span className="text-zinc-700 text-lg font-medium">pending...</span>
      </div>
      <button className="ml-16 px-2 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded" 
      onClick={()=>dispatch({type:"CHECKOUT"})}>checkout</button>
    </div>
  );
}
