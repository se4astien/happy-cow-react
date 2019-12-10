import React from "react";
import { Link } from "react-router-dom";

const CommentDetail = props => {
  return (
    <div className="comment">
      <Link className="avatar">
        <img src={props.avatar} alt={props.author} />
      </Link>
      <div className="content">
        <Link className="author">{props.author}</Link>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.content}</div>
        <div className="actions">
          <Link className="reply">Reply</Link>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
