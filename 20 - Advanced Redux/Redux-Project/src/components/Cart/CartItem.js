import { useDispatch, useSelector } from "react-redux";
import classes from "./CartItem.module.css";
import {
  addItemToCart,
  removeItemFromCart,
  selectCartQuantity,
} from "../../features/cart/cartSlice";
import { closeCart } from "../../features/ui/uiSlice";
import { useEffect } from "react";

const CartItem = ({ item }) => {
  const totalQuantity = useSelector(selectCartQuantity);
  console.log(totalQuantity);
  const dispatch = useDispatch();
  const { id, title, totalPrice, quantity, price } = item;

  function handleAddItem() {
    dispatch(
      addItemToCart({
        id,
        title,
        price,
      })
    );
  }

  function handleRemoveItem() {
    dispatch(removeItemFromCart(id));
  }

  useEffect(() => {
    if (totalQuantity < 1) {
      dispatch(closeCart());
    }
  }, [dispatch, totalQuantity]);
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemoveItem}>-</button>
          <button onClick={handleAddItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
