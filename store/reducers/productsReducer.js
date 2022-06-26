import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert";
import AppMsgs from "../../constants/AppMsgs";

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
  async (payload, { getState }) => {
    const currentUser = getState().auth.currentUser;
    let product = { ...payload.product };

    // if (!product.rating) product.rating = {};
    // const yourRating = +payload.yourRating;
    // product.rating[currentUser.userid] = yourRating;
    // console.log(product);

    const response = await axios.put(
      `${process.env.NEXT_APP_API_URL}/cafe/products/${product._id}`,
      product
    );
    return product;
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
            case giveProductReview:
              state.product = action.payload;
              swal({
                text: AppMsgs.ReviewPlaced,
                icon: "success",
              });
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
