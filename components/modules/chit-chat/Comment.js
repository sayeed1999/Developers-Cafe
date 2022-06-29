import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const Comment = (props) => {
  const { comment } = props;

  return (
    <Card
      style={{
        margin: "5px 0",
        backgroundColor: "#eee",
        border: "solid 1px orange",
      }}
      elevation={0}
    >
      <CardContent>
        <div className="d-flex justify-content-between align-items-center">
          <Typography variant="overline">{comment.username}</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {comment.createdAt}
          </Typography>
        </div>
        <Typography variant="body2">{comment.body}</Typography>
      </CardContent>
    </Card>
  );
};

// export default Comment;
export default React.memo(Comment);
