import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { toggleCart } from "../../features/ui/uiSlice";
import { selectCartQuantity } from "../../features/cart/cartSlice";

const CartButton = (props) => {
  const quantity = useSelector(selectCartQuantity);
  const dispatch = useDispatch();

  function handleCartToggling() {
    dispatch(toggleCart());
  }

  return (
    <button onClick={handleCartToggling} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
