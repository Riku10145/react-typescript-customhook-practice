import { VFC } from "react";
import { CommentText } from "../types/commentText";

type Props = {
  comment: CommentText;
};

export const CommentsCard: VFC<Props> = (props) => {
  const { comment } = props;

  const style = {
    border: "solid 1px #ccc",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.1)"
  };
  return (
    <div style={style}>
      <dl>PostId</dl>
      <dd>{comment.id}</dd>
      <dl>name</dl>
      <dd>{comment.name}</dd>
      <dl>email</dl>
      <dd>{comment.email}</dd>
      <dl>body</dl>
      <dd>{comment.body}</dd>
    </div>
  );
};
