import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/shopReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
