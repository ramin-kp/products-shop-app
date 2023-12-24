import { Navigate } from "react-router-dom";
import Products from "./pages/Products";

const routes = [
  { path: "/", element: <Navigate to="/products" /> },
  { path: "/products", element: <Products /> },
];
export default routes;
