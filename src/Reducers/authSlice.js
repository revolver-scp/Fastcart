import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user) => {
    const { data } = await axios.post(
      "http://37.27.29.18:8002/Account/register",
      user
    );
    return data;
  }
);
export const loginUser = createAsyncThunk("auth/loginUser", async (user) => {
  const { data } = await axios.post(
    "http://37.27.29.18:8002/Account/login",
    user
  );
  localStorage.setItem("token", data.data);
  return data.data;
});
export const increaseProduct = createAsyncThunk(
  "auth/increaseProduct",
  async (id) => {
    await axios.put(
      `http://37.27.29.18:8002/Cart/increase-product-in-cart?id=${id}`,
      {},
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
  }
);
export const reduceProduct = createAsyncThunk(
  "auth/reduceProduct",
  async (id) => {
    await axios.put(
      `http://37.27.29.18:8002/Cart/reduce-product-in-cart?id=${id}`,
      {},
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.token = action.payload;
    });
  },
});
export default authSlice.reducer;