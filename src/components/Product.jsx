import React from "react";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RotatingLines } from "react-loader-spinner";

import { shortenTitle } from "../helpers/helper";

export default function Product({ product }) {
  const { id, title, image, price } = product;

  return (
    <div className="p-5 border-2 border-dashed border-rose-600 rounded shadow-lg hover:-translate-y-5 transition-all duration-300 group">
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
        <div className="flex items-center justify-between !mt-5 text-rose-600">
          <Link to={`/product-info/${id}`}>
            <TbListDetails className="shrink-0 w-8 h-8 p-0.5 rounded group-hover:border-2 group-hover:border-rose-600 transition-all" />
          </Link>
          <button>
            <MdOutlineShoppingCart className="shrink-0 w-8 h-8 p-0.5 rounded group-hover:border-2 group-hover:border-rose-600 transition-all" />
          </button>
        </div>
      </div>
    </div>
  );
}
