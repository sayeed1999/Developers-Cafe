import { useContext, useEffect, useState } from "react";
import { PostContext } from "../../../contexts/PostContext";
import Post from "./Post/Post";

const ChitChat = () => {
  const { fetchPosts } = useContext(PostContext);
  const [postsToDisplay, setPostsToDisplay] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then((val) => {
        setPostsToDisplay(val);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

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
