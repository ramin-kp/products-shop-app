import { useRoutes } from "react-router-dom";
import routes from "./routes";
import ProductContext from "./context/ProductContext";
import CartProvider from "./context/CartContext";

export default function App() {
  const router = useRoutes(routes);
  return (
    <CartProvider>
      <ProductContext>{router}</ProductContext>
    </CartProvider>
  );
}
