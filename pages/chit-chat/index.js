import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import Post from "../../components/modules/chit-chat/Post";
import SingleInputForm from "../../components/shared/SingleInputForm";
import {
  createPost,
  fetchPosts,
  loadMore,
} from "../../store/reducers/postsReducer";
import { useScroll, useScrollHandler } from "../../utils/hooks/scroll";

const ChitChat = () => {
  // const router = useRouter();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const posts = useSelector((state) => state.posts.posts);
  useScroll();
  const postsStatus = useSelector((state) => state.posts.status);

  const [postsToDisplay, setPostsToDisplay] = useState({});
  const [postBody, setPostBody] = useState("");

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    } else if (postsStatus === "succeeded") {
      setPostBody(() => "");
    }
  }, [postsStatus, dispatch]);

  useEffect(() => {
    setPostsToDisplay(() => posts);
  }, [posts]);

  // scrollHandler hook used to load more datas when scrolled at the bottom
  const fetchMore = () => {
    dispatch(loadMore());
  };
  useScrollHandler(fetchMore);

  const createNewPost = () => {
    if (!postBody.trim()) {
      return swal("Info", "Cannot post an empty post", "Info");
    }
    dispatch(createPost(postBody));
  };

  const singleInputForm = (
    <div className="col-md-12 my-2">
      <SingleInputForm
        state={postBody}
        setState={setPostBody}
        type="textarea"
        onSubmit={createNewPost}
      />
    </div>
  );

  const postsGrid = Object.entries(postsToDisplay).map((entry) => (
    <div className="col-md-12" key={entry[0]}>
      <Post post={entry[1]} />
    </div>
  ));

  return (
    <div className="row">
      {currentUser && singleInputForm}
      {postsToDisplay && postsGrid}
    </div>
  );
};

export default ChitChat;
