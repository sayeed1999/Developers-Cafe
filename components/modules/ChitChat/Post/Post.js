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
import { useContext, useState } from "react";
import { PostContext } from "../../../../contexts/PostContext";
import Comment from "./Comment/Comment";

const Post = ({ post, postId }) => {
  const [hideComments, setHideComments] = useState(true);
  const [state, setState] = useState(post);
  const { fetchPostById, tapHeart } = useContext(PostContext);

  const onTapHeart = () => {
    tapHeart(postId, state)
      .then(() => {
        // now fetch the updated version of post
        fetchPostById(postId).then((updatedPost) => {
          setState(updatedPost);
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Card
      sx={{ minWidth: 275 }}
      style={{
        backgroundColor: "rgba(245, 245, 245, 0.753)",
        margin: "5px 0",
      }}
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
                onTapHeart();
              }}
            >
              <FavoriteIcon style={{ color: "darkred" }} />
            </IconButton>
          </Tooltip>
        </Typography>

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
              {Object.entries(state.comments).map((entry) => (
                <Comment comment={entry[1]} key={entry[0]} />
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Post;
