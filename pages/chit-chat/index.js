import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import Post from "../../components/modules/chit-chat/Post";
import SingleInputForm from "../../components/shared/SingleInputForm";
import {
  createPost,
  fetchPosts,
  loadMore,
} from "../../store/reducers/postsReducer";

const ChitChat = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const posts = useSelector((state) => state.posts.posts);

  const postsStatus = useSelector((state) => state.posts.status);

  const [postsToDisplay, setPostsToDisplay] = useState({});
  const [postBody, setPostBody] = useState("");

  const ref = useRef();
  let onSleep = true;
  setTimeout(() => (onSleep = false), 2000); // give him some time!

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

  useLayoutEffect(() => {
    const posY = sessionStorage.getItem(window.location.pathname) ?? 0;
    scroll(0, posY);

    addEventListener("scroll", scrollHandler);

    return () => {
      removeEventListener("scroll", scrollHandler);
    };
  });

  const scrollHandler = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (!onSleep) {
        fetchMore();
        onSleep = true;
        setTimeout(() => (onSleep = false), 5000);
      }
    }
  };

  const fetchMore = () => {
    dispatch(loadMore());
  };

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
