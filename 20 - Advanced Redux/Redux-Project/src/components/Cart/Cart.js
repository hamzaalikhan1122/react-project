import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { selectUI } from "../../features/ui/uiSlice";
import { selectCartItems } from "../../features/cart/cartSlice";

const Cart = (props) => {
  const cartItems = useSelector(selectCartItems);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
