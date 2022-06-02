import { createContext } from "react";

export const PostContext = createContext();

const PostContextProvider = (props) => {
  return (
    <PostContext.Provider value={{ posts: POSTS }}>
      {props.children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;

const POSTS = [
  {
    id: 1,
    body: "yesterday, i was programming, and learnt something new! yay!",
    user: "human",
  },
  {
    id: 2,
    body: "yesterday, i was programming, and learnt something new! yay!",
    user: "human",
  },
  {
    id: 3,
    body: "yesterday, i was programming, and learnt something new! yay!",
    user: "human",
  },
  {
    id: 4,
    body: "yesterday, i was programming, and learnt something new! yay!",
    user: "human",
  },
];
