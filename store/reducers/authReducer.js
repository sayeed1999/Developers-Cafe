import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  currentUser: null,
  token: null,
  status: "idle",
  error: null,
};

export const getCurrentUser = createAsyncThunk("auth/currentUser", () => {
  return null;
});

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ email, password, username }) => {
    const response = await axios.post(
      `${process.env.NEXT_APP_API_URL}/auth/signup`,
      { email, password, username }
    );
    return response.data;
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    const response = await axios.post(
      `${process.env.NEXT_APP_API_URL}/auth/login`,
      { email, password }
    );
    // response.data === payload
    return response.data;
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  return null;
});

const methods = [getCurrentUser, signup, login, logout];

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetStatus(state, _action) {
      state.status = "idle";
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
            case login:
              state.currentUser = action.payload.user;
              state.token = action.payload.token;
              // console.log(state.currentUser, state.token);
              break;
            case logout:
              state.currentUser = null;
              state.token = null;
              break;
            default:
              break;
          }
        });
    });
  },
});

export default authSlice.reducer;

export const { resetStatus } = authSlice.actions;
