import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { tapHeart } from "../../../store/reducers/postsReducer";
import Comments from "./Comments";

const Post = ({ post }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  const headerSection = (
    <div className="d-flex justify-content-between align-items-center">
      <Typography variant="overline" color="text.secondary" gutterBottom>
        {post.username ?? "Anonymous user"}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary">
        {post.createdAt?.substring(0, 10)}
      </Typography>
    </div>
  );

  const bodySection = <Typography variant="body1">{post.body}</Typography>;

  const footerSection = (
    <div className="mt-1 d-flex align-items-center">
      <Typography variant="subtitle2">
        <IconButton size="small" onClick={() => dispatch(tapHeart(post))}>
          {post?.likes?.includes(currentUser?.userid) ? (
            <FavoriteIcon style={{ fontSize: "22px", color: "brown" }} />
          ) : (
            <FavoriteBorderOutlinedIcon
              style={{ fontSize: "22px", color: "brown" }}
            />
          )}
        </IconButton>
      </Typography>
      <Typography variant="inherit" color="text.secondary">
        <small>
          {post?.likes?.includes(currentUser?.userid)
            ? `You and ${post?.likes?.length - 1} others`
            : `${post?.likes?.length} others`}
        </small>
      </Typography>
    </div>
  );

  const horizontalRow = <hr style={{ margin: "2px 0" }} />;
  const commentsSection = (
    <Comments comments={post.comments} postId={post._id} />
  );

  return (
    <>
      {post && (
        <Card sx={{ minWidth: 275 }} className="my-1" elevation={1}>
          <CardContent>
            {headerSection}
            {bodySection}
            {footerSection}
            {horizontalRow}
            {commentsSection}
          </CardContent>
        </Card>
      )}
      ;
    </>
  );
};

export default Post;
