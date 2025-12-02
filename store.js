import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./src/Reducers/authSlice";
import cartReducer from "./src/Reducers/cartSlice";
import checkoutReducer from "./src/Reducers/checkoutSlice";
import getReducer from "./src/Reducers/getFilter";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    get: getReducer
  },
});
