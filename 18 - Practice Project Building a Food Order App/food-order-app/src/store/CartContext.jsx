import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  resetCart: () => {},
});

const initialState = {
  items: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      let updatedItems = [...state.items];

      if (existingCartItemIndex > -1) {
        const existingItem = state.items[existingCartItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems.push({ ...action.item, quantity: 1 });
      }
      return {
        ...state,
        items: updatedItems,
      };
    }
    case "REMOVE_ITEM": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );

      let updatedItems = [...state.items];

      if (existingCartItemIndex > -1) {
        const existingCartItem = state.items[existingCartItemIndex];

        if (existingCartItem.quantity === 1) {
          updatedItems.splice(existingCartItemIndex, 1);
        } else {
          const updateItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity - 1,
          };
          updatedItems[existingCartItemIndex] = updateItem;
        }
      }
      return {
        ...state,
        items: updatedItems,
      };
    }
    case "RESET_CART": {
      return {
        ...state,
        items: initialState.items,
      };
    }

    default:
      return state;
  }
};

export function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  function addItem(item) {
    dispatch({
      type: "ADD_ITEM",
      item,
    });
  }

  function removeItem(id) {
    dispatch({ type: "REMOVE_ITEM", id });
  }
  function resetCart() {
    dispatch({ type: "RESET_CART" });
  }
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    resetCart,
  };

  // console.log(cartContext);
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
