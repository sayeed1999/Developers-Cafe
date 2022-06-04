import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { createContext } from "react";

export const PostContext = createContext();

const PostContextProvider = (props) => {
  let posts = [];

  const fetchPosts = async () => {
    // posts = [];
    const db = getDatabase();
    const postsRef = ref(db, "posts");
    const postsQuery = query(postsRef, orderByKey());

    try {
      const snapshot = await get(postsQuery);
      if (snapshot.exists()) {
        posts = [...Object.values(snapshot.val())];
        return posts;
      } else {
        throw Error("no data found on database query..");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    fetchPosts,
  };

  return (
    <PostContext.Provider value={value}>{props.children}</PostContext.Provider>
  );
};

export default PostContextProvider;
