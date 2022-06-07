import axios from "axios";
import {
  get,
  getDatabase,
  orderByKey,
  query,
  ref,
  set,
} from "firebase/database";
import { createContext, useContext } from "react";
import AppMsgs from "../constants/AppMsgs";
import { AuthContext } from "./AuthContext";

export const PostContext = createContext();

const PostContextProvider = (props) => {
  const { currentUser } = useContext(AuthContext);

  const fetchPosts = async () => {
    const db = getDatabase();
    const postsRef = ref(db, "posts");
    const postsQuery = query(postsRef, orderByKey());
    try {
      const snapshot = await get(postsQuery);
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        throw Error(AppMsgs.NoDataFound);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPostById = async (postId) => {
    const db = getDatabase();
    const postRef = ref(db, "posts/" + postId);
    const postQuery = query(postRef);
    try {
      const snapshot = await get(postQuery);
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        throw Error(AppMsgs.NoDataFound);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const createPost = (postBody) => {
    const newPost = {
      body: postBody,
      createdAt: new Date().toDateString(),
      userid: currentUser.uid,
      username: displayName,
      comments: {},
    };
    return axios.post(
      `${process.env.NEXT_APP_DATABASE_URL}/posts.json`,
      newPost
    );
  };

  const tapHeart = (postId, post) => {
    const db = getDatabase();
    const postRef = ref(db, "posts/" + postId);
    if (!post.likes) post.likes = 0;
    const tempEntity = {
      ...post,
      likes: post.likes + 1,
    };
    return set(postRef, tempEntity);
  };

  const value = {
    fetchPosts,
    fetchPostById,
    createPost,
    tapHeart,
  };

  return (
    <PostContext.Provider value={value}>{props.children}</PostContext.Provider>
  );
};

export default PostContextProvider;
