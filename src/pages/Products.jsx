import React, { useEffect } from "react";
import { useProducts } from "../context/ProductContext";
export default function Products() {
  const products = useProducts();
  console.log(products);
  return <div>Products</div>;
}
