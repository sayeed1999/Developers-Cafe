import { useState } from "react";
import Post from "./Post/Post";

const ChitChat = () => {
  const [posts, setPosts] = useState(POSTS);

  return (
    <div className="row">
      {posts.map((post) => (
        <div className="col-md-12" key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};

export default ChitChat;

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
