import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import eventsReducer from "../features/events/eventsSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    events: eventsReducer,
  },
});

export default store;
