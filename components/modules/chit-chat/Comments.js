import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentOnPost } from "../../../store/reducers/postsReducer";
import SingleInputForm from "../../shared/SingleInputForm";
import Comment from "./Comment";

const Comments = ({ comments, postId }) => {
  const [hideComments, setHideComments] = useState(true);
  const [commentBody, setCommentBody] = useState("");
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("comments rendered");
  }, []);

  useEffect(() => {
    setCommentBody("");
  }, [comments]);

  const createNewComment = () => {
    if (!commentBody.trim()) {
      return swal("Info", "Cannot comment and empty comment", "info");
    }
    dispatch(commentOnPost({ commentBody, postId }));
  };

  const commentsHeader = (
    <>
      <strong>
        <small>Comments</small>
      </strong>
      <IconButton size="small" onClick={() => setHideComments((prev) => !prev)}>
        {hideComments ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      </IconButton>
    </>
  );

  const newCommentForm = (
    <SingleInputForm
      type="textarea"
      state={commentBody}
      setState={setCommentBody}
      onSubmit={createNewComment}
    />
  );

  const commentsOnUI = Object.entries(comments).map((entry) => (
    <Comment comment={entry[1]} key={entry[0]} />
  ));

  const noCommentsFound = (
    <div className="d-flex justify-content-between align-items-center">
      <hr className="flex-grow-1" />
      <small className="mx-3">No comments found</small>
      <hr className="flex-grow-1" />
    </div>
  );

  return (
    <>
      {commentsHeader}
      {!hideComments && (
        <div className="row">
          <div className="col-1"></div>
          <div className="col-11">
            {currentUser && newCommentForm}
            {comments?.length ? commentsOnUI : noCommentsFound}
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(Comments);
