import { useState } from "react";
import { CommentText } from "../types/commentText";
import axios from "axios";
import { comment } from "../types/api/comment";

export const useAllComments = () => {
  const [commentTexts, setCommentTexts] = useState<Array<CommentText>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getComments = () => {
    setLoading(true);
    setError(false);
    axios
      .get<Array<comment>>("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        const data = res.data.map((comment) => ({
          id: comment.id,
          name: comment.name,
          email: comment.email,
          body: comment.body
        }));
        setCommentTexts(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { getComments, commentTexts, loading, error };
};
