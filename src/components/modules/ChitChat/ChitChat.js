import { useContext, useEffect, useState } from "react";
import { PostContext } from "../../../contexts/PostContext";
import Post from "./Post/Post";

const ChitChat = () => {
  const { posts } = useContext(PostContext);
  const [postsToDisplay, setPostsToDisplay] = useState([]);

  useEffect(() => {
    setPostsToDisplay((prev) => posts);
  });

  return (
    <div className="row">
      {postsToDisplay.map((post) => (
        <div className="col-md-12" key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};

export default ChitChat;
