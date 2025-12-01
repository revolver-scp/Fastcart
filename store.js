import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./src/Reducers/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
