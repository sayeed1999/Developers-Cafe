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
            case getCurrentUser:
              state.currentUser = action.payload;
              break;
            case logout:
              state.currentUser = null;
              break;
            default:
              state.currentUser = action.payload.user;
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

export default authSlice.reducer;

export const { resetStatus } = authSlice.actions;
