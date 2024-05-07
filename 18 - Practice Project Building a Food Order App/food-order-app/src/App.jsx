import Header from "./components/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/carts/Cart";
import Checkout from "./components/checkout/Checkout";
import { CartContextProvider } from "./store/CartContext";
import UserProgressContextProvider from "./store/UserProgressContext";
function App() {
  return (
    <CartContextProvider>
      <UserProgressContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </UserProgressContextProvider>
    </CartContextProvider>
  );
}

export default App;
