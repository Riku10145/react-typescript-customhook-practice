import "./styles.css";
import { CommentsCard } from "./components/CommentsCard";
import { useAllComments } from "./hooks/useAllComments";

export default function App() {
  const { getComments, commentTexts, loading, error } = useAllComments();
  const onClickFetchComments = () => getComments();
  return (
    <div className="App">
      <button onClick={onClickFetchComments}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データ取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {commentTexts.map((comment) => (
            <CommentsCard key={comment.id} comment={comment} />
          ))}
        </>
      )}
    </div>
  );
}
