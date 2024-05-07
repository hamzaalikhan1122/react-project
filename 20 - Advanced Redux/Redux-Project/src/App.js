import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { selectUI } from "./features/ui/uiSlice";

function App() {
  const { isCartOpen: toggleCartOpen } = useSelector(selectUI);
  console.log(toggleCartOpen);
  return (
    <Layout>
      {toggleCartOpen && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
