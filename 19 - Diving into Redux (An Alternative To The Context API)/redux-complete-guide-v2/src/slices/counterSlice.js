import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    increase: (state, action) => {
      state.counter = state.counter + action.payload.value;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    toggleCounter: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

// export const counterReducer = (state = initialState, action) => {
//   switch (action?.type) {
//     case "increment": {
//       return {
//         ...state,
//         counter: state.counter + 1,
//       };
//     }
//     case "increase": {
//       return {
//         ...state,
//         counter: state.counter + action.payload.value,
//       };
//     }
//     case "decrement": {
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     }

//     case "toggle": {
//       return {
//         ...state,
//         showCounter: !state.showCounter,
//       };
//     }

//     default: {
//       return state;
//     }
//   }
// };

export const { increment, decrement, increase, toggleCounter } =
  counterSlice.actions;

export default counterSlice.reducer;
