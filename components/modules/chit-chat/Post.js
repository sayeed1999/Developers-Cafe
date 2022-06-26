import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tapHeart } from "../../../store/reducers/postsReducer";
import Comment from "./Comment";

const Post = ({ post }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [hideComments, setHideComments] = useState(true);
  const dispatch = useDispatch();

  return (
    <Card sx={{ minWidth: 275 }} className="my-1" elevation={0}>
      {post && (
        <CardContent>
          <div className="d-flex justify-content-between align-items-center">
            <Typography variant="overline" color="text.secondary" gutterBottom>
              {post.username ?? "Anonymous user"}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {post.createdAt}
            </Typography>
          </div>
          <Typography variant="body1">{post.body}</Typography>
          <div className="mt-1 d-flex align-items-end">
            <Typography variant="subtitle2">
              <IconButton onClick={() => dispatch(tapHeart(post))}>
                {post?.likes?.includes(currentUser?.userid) ? (
                  <FavoriteIcon style={{ color: "brown" }} />
                ) : (
                  <FavoriteBorderOutlinedIcon style={{ color: "brown" }} />
                )}
              </IconButton>
            </Typography>
            <Typography variant="subtitle2">
              {post?.likes?.includes(currentUser?.userid)
                ? `You and ${post?.likes?.length - 1} others`
                : `${post?.likes?.length} others`}
            </Typography>
          </div>

          {/* Comments rendering */}
          <b>Comments</b>
          <IconButton onClick={() => setHideComments((prev) => !prev)}>
            {hideComments ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </IconButton>
          {!hideComments && (
            <div className="row">
              <div className="col-1"></div>
              <div className="col-11">
                {/* Object.entries() returns [key, value] */}
                {post.comments && post.comments.length > 0 ? (
                  Object.entries(post.comments).map((entry) => (
                    <Comment comment={entry[1]} key={entry[0]} />
                  ))
                ) : (
                  <div className="d-flex justify-content-between align-items-center">
                    <hr className="flex-grow-1" />
                    <small className="mx-3">No comments found</small>
                    <hr className="flex-grow-1" />
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
};

export default Post;
