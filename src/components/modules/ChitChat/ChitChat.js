import { useContext, useEffect, useState } from "react";
import AppMsgs from "../../../constants/AppMsgs";
import { AuthContext } from "../../../contexts/AuthContext";
import { PostContext } from "../../../contexts/PostContext";
import SingleInputForm from "../../shared/SingleInputForm/SingleInputForm";
import Post from "./Post/Post";

const ChitChat = () => {
  const { fetchPosts, createPost } = useContext(PostContext);
  const [postsToDisplay, setPostsToDisplay] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const [postBody, setPostBody] = useState("");

  useEffect(() => {
    fetchAllPosts();
  }, []);

  const fetchAllPosts = () => {
    fetchPosts()
      .then((val) => {
        setPostsToDisplay(val); // Object
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const createNewPost = () => {
    if (!postBody) {
      alert("post body cannot be empty");
      return;
    }
    createPost(postBody)
      .then(() => {
        setPostBody("");
        fetchAllPosts();
        alert(AppMsgs.Created);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="row">
      <div className="col-md-12">
        {currentUser && (
          <SingleInputForm
            state={postBody}
            setState={setPostBody}
            type="textarea"
            onSubmit={createNewPost}
          />
        )}
      </div>
      {Object.entries(postsToDisplay).map((entry) => (
        <div className="col-md-12" key={entry[0]}>
          <Post postId={entry[0]} post={entry[1]} />
        </div>
      ))}
    </div>
  );
};

export default ChitChat;
