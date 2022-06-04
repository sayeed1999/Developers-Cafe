import Comment from "./Comment/Comment";
import "./Post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="postHeading">
        <p> raju </p>
      </div>
      <div> {post.body} </div>
      <div className="postTail mt-2 d-flex">
        <span> {post?.likes ?? 0} likes </span>
      </div>
      <b> Comments </b> <hr />
      <Comment></Comment>
    </div>
  );
};

export default Post;
