import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./src/reducers/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
