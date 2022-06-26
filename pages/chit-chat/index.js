import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import Post from "../../components/modules/chit-chat/Post";
import SingleInputForm from "../../components/shared/SingleInputForm";
import { createPost, fetchPosts } from "../../store/reducers/postsReducer";

const ChitChat = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const posts = useSelector((state) => state.posts.posts);

  const postsStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  const [postsToDisplay, setPostsToDisplay] = useState({});
  const [postBody, setPostBody] = useState("");

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  useEffect(() => {
    setPostsToDisplay(() => posts);
  }, [posts]);

  const createNewPost = () => {
    if (!postBody) {
      return swal("Info", "Cannot post an empty post", "Info");
    }

    dispatch(
      createPost({
        body: postBody,
        createdAt: new Date().toDateString(),
        userid: currentUser.userid,
        username: currentUser.userame,
        comments: [],
      })
    );
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
            <Post post={entry[1]} />
          </div>
        ))}
    </div>
  );
};

export default ChitChat;
