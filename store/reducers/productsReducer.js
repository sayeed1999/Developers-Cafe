import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  product: null,
  status: "unloaded",
  error: null,
  searchText: "",
};

export const fetchProducts = createAsyncThunk("products/getAll", async () => {
  const response = await axios.get(
    `${process.env.NEXT_APP_API_URL}/cafe/products`
  );
  return response.data;
});

export const fetchProductById = createAsyncThunk(
  "products/getOne",
  async (id) => {
    const response = await axios.get(
      `${process.env.NEXT_APP_API_URL}/cafe/products/${id}`
    );
    return response.data;
  }
);

export const giveProductReview = createAsyncThunk(
  "products/updateOne",
  async (id, product, yourReview) => {
    if (!product.review) product.review = {};
    product.review[currentUser.uid] = yourReview;
    const response = await axios.post(
      `${process.env.NEXT_APP_API_URL}/cafe/products/${id}`,
      product
    );
    return response.data;
  }
);

const methods = [fetchProducts, fetchProductById, giveProductReview];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchTextChange(state, action) {
      state.searchText = action.payload;
    },
  },
  extraReducers(builder) {
    methods.forEach((m) => {
      builder
        .addCase(m.pending, (state, _action) => {
          state.status = "loading";
        })
        .addCase(m.fulfilled, (state, action) => {
          state.status = "succeeded";
          switch (m) {
            case fetchProducts:
              state.products = action.payload;
              break;
            case fetchProductById:
              state.product = action.payload;
              break;
          }
        })
        .addCase(m.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        });
    });
  },
});

export const { searchTextChange } = productsSlice.actions;
export default productsSlice.reducer;
