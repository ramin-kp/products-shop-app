import { useProducts } from "../context/ProductContext";
import Loader from "./../components/Loader";
import { CiSearch } from "react-icons/ci";
import { FaList } from "react-icons/fa";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import {
  createQueryObject,
  filterProducts,
  searchProducts,
  searchQuery,
} from "../helpers/helper";
import { useSearchParams } from "react-router-dom";
export default function Products() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(searchQuery(searchParams));
  }, [products]);
  useEffect(() => {
    setSearchParams({ ...query });
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
    setSearch(query.search || "");
  }, [query]);
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <main className="container">
      <Headers />
      <div className="flex items-center gap-x-2 my-6">
        <input
          className="px-2.5 py-1 mt-5 border-2 border-dashed border-rose-600 outline-none rounded"
          type="text"
          placeholder="search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button className="p-2 mt-5 bg-rose-600 hover:bg-rose-700 text-white outline-none rounded">
          <CiSearch className="shrink-0 text-xl" onClick={searchHandler} />
        </button>
      </div>
      <div className="flex flex-col-reverse sm:flex-row sm:items-start gap-5">
        <section className="grow">
          {displayed.length >= 1 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 md:gap-16 p-5">
              {displayed.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <Loader />
          )}
        </section>
        <aside className="py-5 px-8 mt-5 border-2 border-dashed border-gray-300 rounded-3xl">
          <div className="flex items-end gap-2.5 mb-2.5 text-rose-600 text-2xl font-medium">
            <FaList />
            categories
          </div>
          <ul
            className="space-y-2 text-base font-medium child:cursor-pointer"
            onClick={categoryHandler}
          >
            <li
              className={`p-1 hover:bg-rose-400 hover:text-white transition-all duration-75 rounded ${
                !query.category ? "bg-rose-400 text-white" : ""
              }`}
            >
              All
            </li>
            <li
              className={`p-1 hover:bg-rose-400 hover:text-white transition-all duration-75 rounded ${
                query.category === "electronics" ? "bg-rose-400 text-white" : ""
              }`}
            >
              Electronics
            </li>
            <li
              className={`p-1 hover:bg-rose-400 hover:text-white transition-all duration-75 rounded ${
                query.category === "jewelery" ? "bg-rose-400 text-white" : ""
              }`}
            >
              Jewelery
            </li>
            <li
              className={`p-1 hover:bg-rose-400 hover:text-white transition-all duration-75 rounded ${
                query.category === "men's clothing" ? "bg-rose-400 text-white" : ""
              }`}
            >
              Men's clothing
            </li>
            <li
              className={`p-1 hover:bg-rose-400 hover:text-white transition-all duration-75 rounded ${
                query.category === "women's clothing" ? "bg-rose-400 text-white" : ""
              }`}
            >
              Women's clothing
            </li>
          </ul>
        </aside>
      </div>

      <Footer />
    </main>
  );
}
