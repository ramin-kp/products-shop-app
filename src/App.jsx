import { useRoutes } from "react-router-dom";
import routes from "./routes";
import ProductContext from "./context/ProductContext";

export default function App() {
  const router = useRoutes(routes);
  return <ProductContext>{router}</ProductContext>;
}
