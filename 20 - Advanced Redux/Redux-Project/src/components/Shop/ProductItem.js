import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { addItemToCart } from "../../features/cart/cartSlice";

const ProductItem = ({ product }) => {
  const { title, price, description } = product;
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addItemToCart(product));
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
