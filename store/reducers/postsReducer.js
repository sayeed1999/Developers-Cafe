import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/getAll", async () => {
  const response = await axios.get(`${process.env.NEXT_APP_API_URL}/posts`);
  return response.data;
});

export const fetchPostById = createAsyncThunk(
  "posts/getOne",
  async (postId) => {
    const response = await axios.get(
      `${process.env.NEXT_APP_API_URL}/posts/${postId}`
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
      `${process.env.NEXT_APP_API_URL}/posts`,
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

    if (!post.likes) post["likes"] = 0;
    post["likes"]++;

    const response = await axios.put(
      `${process.env.NEXT_APP_DATABASE_URL}/posts/${postId}`,
      post
    );
    console.log(response);
    return response.data;

    // } else {
    //   return swal("Error", AppMsgs.AuthenticationError, "error");
    // }
  }
);

const methods = [fetchPosts, fetchPostById, createPost, tapHeart];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    methods.forEach((m) => {
      builder
        .addCase(m.pending, (state, _action) => {
          state.status = "loading";
        })
        .addCase(m.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.posts = action.payload;
        })
        .addCase(m.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        });
    });
  },
});

export default postsSlice.reducer;
