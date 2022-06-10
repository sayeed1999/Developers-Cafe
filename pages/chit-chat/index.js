import { useContext, useEffect, useState } from "react";
import swal from "sweetalert";
import Post from "../../components/modules/chit-chat/Post";
import SingleInputForm from "../../components/shared/SingleInputForm";
import AppMsgs from "../../constants/AppMsgs";
import { AuthContext } from "../../contexts/AuthContext";
import { PostContext } from "../../contexts/PostContext";

const ChitChat = () => {
  const { fetchPosts, createPost } = useContext(PostContext);
  const { currentUser } = useContext(AuthContext);
  const [postsToDisplay, setPostsToDisplay] = useState({});
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
        swal("Error", err.message, "error");
      });
  };

  const createNewPost = () => {
    if (!postBody) {
      swal("Info", "Cannot post an empty post", "Info");
      return;
    }
    createPost(postBody)
      ?.then(() => {
        setPostBody("");
        fetchAllPosts();
        swal("Success", AppMsgs.Created, "success");
      })
      .catch((err) => {
        swal("Error", err.message, "error");
      });
  };

  return (
    <div className="row">
      <div className="col-md-12 mt-4 mb-2">
        {currentUser && (
          <SingleInputForm
            state={postBody}
            setState={setPostBody}
            type="textarea"
            onSubmit={createNewPost}
          />
        )}
      </div>
      {postsToDisplay &&
        Object.entries(postsToDisplay).map((entry) => (
          <div className="col-md-12" key={entry[0]}>
            <Post postId={entry[0]} post={entry[1]} />
          </div>
        ))}
    </div>
  );
};

export default ChitChat;
