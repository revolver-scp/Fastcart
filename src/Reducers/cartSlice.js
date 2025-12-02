import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API = "http://37.27.29.18:8002/Cart";
const auth = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
};
export const getCart = createAsyncThunk("cart/getCart", async () => {
  const { data } = await axios(`${API}/get-products-from-cart`, {
    headers: auth.headers,
  });
  return data.data[0];
});

export const deleteCart = createAsyncThunk("cart/deleteCart", async (id) => {
  await axios.delete(`${API}/delete-product-from-cart?id=${id}`, {
    headers: auth.headers,
  });
  return id;
});
export const deleteAll = createAsyncThunk("cart/deleteAll", async () => {
  await axios.delete(`${API}/clear-cart`, { headers: auth.headers });
});
export const increaseProduct = createAsyncThunk("cart/increase", async (id) => {
  await axios.put(
    `${API}/increase-product-in-cart?id=${id}`,
    {},
    { headers: auth.headers }
  );
  return id;
});
export const reduceProduct = createAsyncThunk("cart/reduce", async (id) => {
  await axios.put(
    `${API}/reduce-product-in-cart?id=${id}`,
    {},
    { headers: auth.headers }
  );
  return id;
});
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCart.fulfilled, (state, action) => {
        state.products = action.payload.productsInCart;
        state.total = action.payload.totalPrice;
      })
      .addCase(deleteCart.fulfilled, () => {})
      .addCase(deleteAll.fulfilled, (state) => {
        state.products = [];
        state.total = 0;
      })
      .addCase(increaseProduct.fulfilled, () => {})
      .addCase(reduceProduct.fulfilled, () => {});
  },
});
export default cartSlice.reducer;
