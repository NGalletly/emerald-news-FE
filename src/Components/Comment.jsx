import { timeFormatter } from "../utils/timeFormatter";

export default function Comment(props) {
  //   const comment = props.data;
  const { author, body, created_at, votes } = props.data;
  const formatTime = timeFormatter(created_at);

  return (
    <div className="commentCard">
      <p>{author}</p>
      <p>{body}</p>
      <p>{formatTime}</p>
      <p>&#128150; : {votes}</p>
    </div>
  );
}
