import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import uiReducer from "../features/ui/uiSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer,
  },
});

export default store;
