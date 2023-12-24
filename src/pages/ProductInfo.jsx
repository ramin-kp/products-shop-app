import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdOutlinePriceChange } from "react-icons/md";
import { TbCategory, TbFileDescription } from "react-icons/tb";

import api from "../services/config";
import Loader from "../components/Loader";

export default function ProductInfo() {
  const [productInfo, setProductInfo] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getProductInfo = async () => {
      setProductInfo(await api.get(`/products/${id}`));
    };
    getProductInfo();
  }, []);
  console.log(productInfo);
  return (
    <div className="container">
      {Object.keys(productInfo).length ? (
        <div className="flex items-center justify-between gap-x-10 p-5 my-20 border-2 border-dashed border-rose-600 rounded-lg">
          <div className="shrink-0 w-[300px] h-[300px]">
            <img
              className="w-full h-full"
              src={productInfo.image}
              alt={productInfo.title}
            />
          </div>
          <div className="grow space-y-5 text-left">
            <h1 className="text-rose-600 text-xl font-bold">
              {productInfo.title}
            </h1>
            <h2 className="flex items-center gap-x-1 text-zinc-700 font-medium text-xl">
              <MdOutlinePriceChange className="w-6 h-6 text-rose-600" />
              price:
              <span className="text-base font-normal">
                ${productInfo.price}
              </span>
            </h2>
            <h2 className="flex items-center gap-x-1 text-zinc-700 font-medium text-xl">
              <TbCategory className="w-6 h-6 text-rose-600" />
              category:
              <span className="text-base font-normal">
                {productInfo.category}
              </span>
            </h2>
            <h2 className="flex items-center gap-x-2 text-zinc-700 font-medium text-xl text-left">
              <TbFileDescription className="shrink-0 w-6 h-6 text-rose-600" />
              description:
              <span className="ml-2 text-base font-normal">
                {productInfo.description}
              </span>
            </h2>
            <Link
              className="inline-block px-2.5 py-2  bg-rose-600 hover:bg-rose-700 text-white font-bold rounded"
              to="/products"
            >
              back to shop
            </Link>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
