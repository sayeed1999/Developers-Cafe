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
import Comment from "./Comment/Comment";
import "./Post.css";

const Post = ({ post }) => {
  const [hideComments, setHideComments] = useState(true);

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
            Md. Sayeed Rahman
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {post.createdAt}
          </Typography>
        </div>
        <Typography variant="body1">{post.body}</Typography>
        <Typography variant="subtitle2">
          {post.likes ?? 0}{" "}
          <Tooltip title="Tap to increase Heart">
            <IconButton>
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
              {Object.values(post.comments).map((comment) => (
                <Comment comment={comment} />
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Post;
