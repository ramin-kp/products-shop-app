import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";
const ProductsContext = createContext();
export default function ProductContext({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {}
    };
    getData();
  }, []);
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}

const useProducts = () => {
  const products = useContext(ProductsContext);
  return products;
};
const ProductDetails = (id) => {
  const products = useContext(ProductsContext);
  const result = products.find((product) => product.id === id);
  return result;
};

export { useProducts, ProductDetails };
