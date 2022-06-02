import "./Post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="postHeading">
        <p> {post.user} </p>
      </div>
      <div> {post.body} </div>
      <div className="postTail mt-2 d-flex">
        <span> 0 likes </span>
        <span className="mx-2"></span>
        <span> 0 comments </span>
      </div>
    </div>
  );
};

export default Post;
