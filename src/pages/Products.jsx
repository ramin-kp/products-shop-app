import { useProducts } from "../context/ProductContext";
import Loader from "./../components/Loader";
import { CiSearch } from "react-icons/ci";
import { FaList } from "react-icons/fa";
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
  };
  return (
    <main className="container">
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
      <div className="flex items-start gap-x-5">
        <section className="grow">
          {showProducts.length > 1 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 md:gap-16 p-5">
              {showProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <Loader />
          )}
        </section>
        <aside className="p-5 mt-5 border border-dashed border-rose-600 rounded-md">
          <div className="flex items-end gap-2.5 mb-2.5 text-rose-600 text-2xl font-medium">
            <FaList />
            categories
          </div>
          <ul className="space-y-2 text-base font-medium child:cursor-pointer">
            <li className="p-1 hover:bg-rose-400 hover:text-white transition-all duration-300 rounded">
              All
            </li>
            <li className="p-1 hover:bg-rose-400 hover:text-white transition-all duration-300 rounded">
              Electronics
            </li>
            <li className="p-1 hover:bg-rose-400 hover:text-white transition-all duration-300 rounded">
              Jewelry
            </li>
            <li className="p-1 hover:bg-rose-400 hover:text-white transition-all duration-300 rounded">
              Men's clothing
            </li>
            <li className="p-1 hover:bg-rose-400 hover:text-white transition-all duration-300 rounded">
              Women's clothing
            </li>
          </ul>
        </aside>
      </div>

      <Footer />
    </main>
  );
}
