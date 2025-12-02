import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get(
      "http://37.27.29.18:8002/Cart/get-products-from-cart",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  } catch (error) {
    console.error(error);
  }
});
const cartSlice = createSlice({
  name: "acc",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.products = action.payload.products;
      state.total = action.payload.total;
      state.skidka = action.payload.skidka;
    });
  },
});
export default cartSlice.reducer;