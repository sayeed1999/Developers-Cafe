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
import { useScroll, useScrollBottomHandler } from "../../utils/hooks/scroll";

const ChitChat = () => {
  // const router = useRouter();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const posts = useSelector((state) => state.posts.posts);
  useScroll();
  const postsStatus = useSelector((state) => state.posts.status);
  const [postBody, setPostBody] = useState("");

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    } else if (postsStatus === "succeeded") {
      setPostBody(() => "");
    }
  }, [postsStatus, dispatch]);

  // scrollHandler hook used to load more datas when scrolled at the bottom
  const fetchMore = () => {
    dispatch(loadMore());
  };
  useScrollBottomHandler(fetchMore);

  const createNewPost = () => {
    if (!postBody.trim()) {
      return swal("Info", "Cannot post an empty post", "Info");
    }
    dispatch(createPost(postBody));
  };

  const littleSpace = <div style={{ height: "15px" }}></div>;

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

  const postsGrid = Object.entries(posts).map((entry) => (
    <div className="col-md-12" key={entry[0]}>
      <Post post={entry[1]} />
    </div>
  ));

  return (
    <div className="row">
      {littleSpace}
      {currentUser && singleInputForm}
      {posts && postsGrid}
    </div>
  );
};

export default ChitChat;
