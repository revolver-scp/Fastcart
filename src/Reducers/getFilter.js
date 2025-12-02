import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../ultis/axiosReques";
const API = "http://37.27.29.18:8002";
const auth = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
};
export const get = createAsyncThunk("get/get", async () => {
  let { data } = await axiosRequest.get(`${API}/Category/get-categories`, {
    headers: auth.headers,
  });
  let res = await axiosRequest.get(`${API}/SubCategory/get-sub-category`);
  let products = await axiosRequest.get(`${API}/Product/get-products`, {
    headers: auth.headers,
  });
  let brand = await axiosRequest.get(`${API}/Brand/get-brands`, {
    headers: auth.headers,
  });
  return {
    category: data.data,
    subCategory: res.data.data,
    brands: brand.data.data,
    products: products.data.data,
  };
});
const cartSlice = createSlice({
  name: "get",
  initialState: {
    category: [],
    brand: [],
    subCategory: [],
    products: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(get.fulfilled, (state, action) => {
      state.category = action.payload.category;
      state.brand = action.payload.brands;
      state.subCategory = action.payload.subCategory;
      state.products = action.payload.products;
    });
  },
});

export default cartSlice.reducer;
