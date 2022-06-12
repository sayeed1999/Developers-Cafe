import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import "../../firebase";

const initialState = {
  currentUser: null,
  status: "idle",
  error: null,
};

export const getCurrentUser = createAsyncThunk("auth/currentUser", () => {
  const auth = getAuth();
  return auth.currentUser;
});

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ email, password, username }) => {
    const auth = getAuth();
    //signup
    let user = await createUserWithEmailAndPassword(auth, email, password);
    // update username
    await updateProfile(auth.currentUser, {
      displayName: username,
    });
    return user;
  }
);

export const login = createAsyncThunk("auth/login", async (payload) => {
  // console.log(payload); {}
  const auth = getAuth();
  const user = await signInWithEmailAndPassword(
    auth,
    payload.email,
    payload.password
  );
  return user;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  const auth = getAuth();
  await signOut(auth);
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetStatus(state, action) {
      state.status = "idle";
    },
  },
  extraReducers(builder) {
    builder
      // pending
      .addCase(getCurrentUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(signup.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(login.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(logout.pending, (state, action) => {
        state.status = "loading";
      })
      // fulfilled
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentUser = action.payload;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentUser = action.payload.user;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        // console.log(action); {payload: {user: {}}}
        state.currentUser = action.payload.user;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentUser = null;
      })
      // failed
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;

export const { resetStatus } = authSlice.actions;
