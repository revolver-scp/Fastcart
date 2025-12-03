import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../ultis/axiosReques";
const API = "http://37.27.29.18:8002";
const auth = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
};
export const getsubCategory = createAsyncThunk(
  "get/getsubCategory",
  async (id) => {
    let { data } = await axiosRequest.get(
      `${API}/Product/get-products?SubcategoryId=${id}`
    );
    return data.data;
  }
);
export const getCategory = createAsyncThunk(
  "get/getCategory",
  async (id) => {
    let { data } = await axiosRequest.get(
      `${API}/Product/get-products?CategoryId=${id}`
    );
    return data.data;
  }
);
export const getBrand = createAsyncThunk(
  "get/getBrand",
  async (id) => {
    let { data } = await axiosRequest.get(
      `${API}/Product/get-products?BrandId=${id}`
    );
    return data.data;
  }
);
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
    subCategor: res.data.data,
    brands: brand.data.data,
    products: products.data.data,
  };
});
const cartSlice = createSlice({
  name: "get",
  initialState: {
    category: [],
    brand: [],
    subCategor: [],
    products: [],
    subcat: [],
    categ:[],
    brandMap:[]
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(get.fulfilled, (state, action) => {
      state.category = action.payload.category;
      state.brand = action.payload.brands;
      state.subCategor = action.payload.subCategor;
      state.products = action.payload.products;
    });
    builder.addCase(getsubCategory.fulfilled, (state, action) => {
      state.subcat = action.payload;
    });
    builder.addCase(getCategory.fulfilled, (state,action) => {
      state.categ = action.payload
    })
    builder.addCase(getBrand.fulfilled, (state, action) => {
      state.brandMap = action.payload
    })
  },
});

export default cartSlice.reducer;
