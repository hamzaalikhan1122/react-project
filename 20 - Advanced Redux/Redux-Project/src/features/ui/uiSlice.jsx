import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    closeCart: (state) => {
      console.log(state, "cart state");
      state.isCartOpen = initialState.isCartOpen;
    },
  },
});

export const { toggleCart, closeCart } = uiSlice.actions;

export const selectUI = (state) => state.ui;

export default uiSlice.reducer;
