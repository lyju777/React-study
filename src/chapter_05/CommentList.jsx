import React from "react";
import Comment from "./Comment";

const comments = [
  { name: "홍길동", comment: "안녕하세요 첫번째 글입니다." },
  { name: "유재석", comment: "안녕하세요 두번째 글입니다." },
];


function CommentList(props) {
  return (
    <div>
      {comments.map((comment, index) => (
        <Comment key={index} name={comment.name} comment={comment.comment} />
      ))}
    </div>
  )
}

export default CommentList;