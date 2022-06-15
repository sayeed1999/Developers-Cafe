import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Card,
  CardContent,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { tapHeart } from "../../../store/reducers/postsReducer";
import Comment from "./Comment";

const Post = ({ post, postId }) => {
  const [hideComments, setHideComments] = useState(true);
  const [state, setState] = useState(post);
  const dispatch = useDispatch();

  return (
    <Card
      sx={{ minWidth: 275 }}
      style={{
        margin: "8px 0",
      }}
      elevation="0"
    >
      <CardContent>
        <div className="d-flex justify-content-between align-items-center">
          <Typography variant="overline" color="text.secondary" gutterBottom>
            {state.username}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {state.createdAt}
          </Typography>
        </div>
        <Typography variant="body1">{state.body}</Typography>
        <Typography variant="subtitle2">
          {state.likes ?? 0}{" "}
          <Tooltip title="Tap to increase Heart">
            <IconButton
              onClick={() => {
                dispatch(tapHeart(postId, post));
              }}
            >
              <FavoriteIcon style={{ color: "darkred" }} />
            </IconButton>
          </Tooltip>
        </Typography>

        {/* Comments rendering */}

        <b>Comments</b>
        <IconButton onClick={() => setHideComments((prev) => !prev)}>
          {/* {hideComments ? <ExpandMoreIcon /> : <ExpandLessIcon />} */}
          {hideComments && <ExpandMoreIcon />}
          {!hideComments && <ExpandLessIcon />}
        </IconButton>
        {!hideComments && (
          <div className="row">
            <div className="col-1"></div>
            <div className="col-11">
              {/* Object.entries() returns [key, value] */}
              {state.comments ? (
                Object.entries(state.comments).map((entry) => (
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
    </Card>
  );
};

export default Post;
