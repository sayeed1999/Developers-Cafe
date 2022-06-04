import { useContext, useEffect, useState } from "react";
import { PostContext } from "../../../contexts/PostContext";
import Post from "./Post/Post";

const ChitChat = () => {
  const { fetchPosts } = useContext(PostContext);
  const [postsToDisplay, setPostsToDisplay] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then((val) => {
        setPostsToDisplay(val); // Object
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <div className="row">
      {Object.entries(postsToDisplay).map((entry) => (
        <div className="col-md-12" key={entry[0]}>
          <Post postId={entry[0]} post={entry[1]} />
        </div>
      ))}
    </div>
  );
};

export default ChitChat;
