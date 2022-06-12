import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/getAll", async () => {
  const response = await axios.get(
    `${process.env.NEXT_APP_DATABASE_URL}/posts.json`
  );
  return response.data;
});

export const fetchPostById = createAsyncThunk(
  "posts/getOne",
  async (postId) => {
    const response = await axios.get(
      `${process.env.NEXT_APP_DATABASE_URL}/posts/${postId}`
    );
    return response.data;
  }
);

export const createPost = createAsyncThunk(
  "posts/createOne",
  async (postBody) => {
    // if (currentUser) {

    const newPost = {
      body: postBody,
      createdAt: new Date().toDateString(),
      userid: currentUser.uid,
      username: currentUser.displayName,
    };
    const response = await axios.post(
      `${process.env.NEXT_APP_DATABASE_URL}/posts.json`,
      newPost
    );
    return response.data;

    // } else {
    //   swal("Error", AppMsgs.AuthenticationError, "error");
    // }
  }
);

export const tapHeart = createAsyncThunk(
  "posts/updateOne",
  async (postId, post) => {
    // if (currentUser) {

    const tempEntity = {
      ...post,
      likes: post.likes + 1,
    };
    const response = await axios.put(
      `${process.env.NEXT_APP_DATABASE_URL}/posts/${postId}`,
      tempEntity
    );
    return response.data;

    // } else {
    //   return swal("Error", AppMsgs.AuthenticationError, "error");
    // }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
