import { Navigate } from "react-router-dom";
import Products from "./pages/Products";
import ProductInfo from "./pages/ProductInfo";
import NotFound from "./pages/NotFound";
import Orders from "./pages/Orders";

const routes = [
  { path: "/", element: <Navigate to="/products" /> },
  { path: "/products", element: <Products /> },
  { path: "/product-info/:id", element: <ProductInfo /> },
  { path: "/orders", element: <Orders /> },
  { path: "/*", element: <NotFound /> },
];
export default routes;
