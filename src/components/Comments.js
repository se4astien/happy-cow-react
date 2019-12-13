import React from "react";
import faker from "faker";
// import Components
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const Comments = () => {
  return (
    <div className="ui container comments">
      <h3 className="ui dividing header">Comments</h3>
      <CommentDetail
        author="Sam"
        timeAgo="Today at 2PM"
        content="I like writing"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Yesterday at 4PM"
        content="Awesome blog !"
        avatar={faker.image.avatar()}
      />

      <CommentDetail
        author="Jane"
        timeAgo="Monday at 1PM"
        content="Nice blog post"
        avatar={faker.image.avatar()}
      />
      <form className="ui reply form">
        <div className="field">
          <textarea></textarea>
        </div>
        <div className="ui blue labeled submit icon button">
          <i className="icon edit"></i> Add Reply
        </div>
      </form>
    </div>
  );
};

export default Comments;
