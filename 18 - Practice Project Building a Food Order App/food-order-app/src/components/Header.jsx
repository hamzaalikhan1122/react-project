import { useContext, useEffect, useState } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import { CartContext } from "../store/CartContext";
import { UserProgressContext } from "../store/UserProgressContext";

function Header() {
  const [itemsInCart, setItemsInCart] = useState(false);

  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce(
    (totalNumberofItems, item) => totalNumberofItems + item.quantity,
    0
  );

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  useEffect(() => {
    if (cartCtx.items.length > 0) {
      setItemsInCart(true);
    }
  }, [cartCtx.items]);

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      userProgressCtx.hideCart();
      setItemsInCart(false);
    }
  }, [cartCtx.items, userProgressCtx]);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Logo Image" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button onClick={handleShowCart} disabled={!itemsInCart} textOnly>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}

export default Header;
