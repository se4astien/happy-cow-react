import React from "react";
import faker from "faker";

const CommentDetail = () => {
  return (
    <div class="comment">
      <a class="avatar">
        <img src={faker.image.avatar()} />
      </a>
      <div class="content">
        <a class="author">Matt</a>
        <div class="metadata">
          <span class="date">Today at 5:42PM</span>
        </div>
        <div class="text">How artistic!</div>
        <div class="actions">
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
