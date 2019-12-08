import React from "react";

// import Components
import CommentDetail from "./CommentDetail";

const Comments = () => {
  return (
    <div class="ui comments">
      <h3 class="ui dividing header">Comments</h3>
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <form class="ui reply form">
        <div class="field">
          <textarea></textarea>
        </div>
        <div class="ui blue labeled submit icon button">
          <i class="icon edit"></i> Add Reply
        </div>
      </form>
    </div>
  );
};

export default Comments;
