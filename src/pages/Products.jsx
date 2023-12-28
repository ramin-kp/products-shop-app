import { useProducts } from "../context/ProductContext";
import Loader from "./../components/Loader";
import { CiSearch } from "react-icons/ci";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
export default function Products() {
  const products = useProducts();
  const [text, setText] = useState("");
  const [showProducts, setShowProducts] = useState([]);
  useEffect(() => {
    setShowProducts(products);
  }, [products]);
  const searchHandler = () => {
    const data = showProducts.filter((product) =>
      product.title.toLowerCase().includes(text)
    );
    setShowProducts(data);
    console.log(data);
  };
  return (
    <div className="container">
      <Headers />
      <div className="flex items-center gap-x-2 my-6">
        <input
          className="px-2.5 py-1 mt-5 border-2 border-dashed border-rose-600 outline-none rounded"
          type="text"
          placeholder="search..."
          value={text}
          onChange={(e) => setText(e.target.value.toLowerCase().trim())}
        />
        <button className="p-2 mt-5 bg-rose-600 hover:bg-rose-700 text-white outline-none rounded">
          <CiSearch className="shrink-0 text-xl" onClick={searchHandler} />
        </button>
      </div>

      {showProducts.length > 1 ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-16 p-5">
          {showProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
      <Footer />
    </div>
  );
}
