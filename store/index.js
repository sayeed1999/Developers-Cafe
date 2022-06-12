import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./reducers/authReducer";
import postsReducer from "./reducers/postsReducer";

export default configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
  },
});
