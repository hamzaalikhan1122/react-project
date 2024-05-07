import { useContext, useEffect, useState } from "react";
import Modal from "../UI/Modal";
import { CartContext } from "../../store/CartContext";
import { currencyFormatter } from "../../utils/formatting";
import Button from "../UI/Button";
import { UserProgressContext } from "../../store/UserProgressContext";

function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalOrderPrice = cartCtx.items.reduce(
    (totalItemPrice, item) => totalItemPrice + item.price * item.quantity,
    0
  );

  const cartModal = userProgressCtx.progress === "cart";

  function handleQuantityIncrease(item) {
    cartCtx.addItem(item);
  }

  function handleQuantityDecrease(id) {
    cartCtx.removeItem(id);
  }

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleCheckoutShowModal() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal
      open={cartModal}
      onClose={cartModal ? handleCloseCart : null}
      className="cart"
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => {
          return (
            <div key={item.id}>
              <li>
                <div className="cart-item">
                  <p>
                    {item.name} - {item.quantity} x{" "}
                    {currencyFormatter.format(item.price)}
                  </p>
                  <div className="cart-item-actions">
                    <button onClick={() => handleQuantityDecrease(item.id)}>
                      -
                    </button>
                    <p>{item.quantity}</p>
                    <button onClick={() => handleQuantityIncrease(item)}>
                      +
                    </button>
                  </div>
                </div>
              </li>
            </div>
          );
        })}
        <p className="cart-total">
          {currencyFormatter.format(totalOrderPrice)}
        </p>
        <p className="modal-actions">
          <Button textOnly onClick={handleCloseCart}>
            Close
          </Button>
          <Button onClick={handleCheckoutShowModal}>Go to Checkout</Button>
        </p>
      </ul>
    </Modal>
  );
}

export default Cart;
