import { UserContext } from "../contexts/UserContextProvider";
import { timeFormatter } from "../utils/timeFormatter";
import { useContext, useState } from "react";
import { deleteComment } from "../utils/getData";

export default function Comment(props) {
  const [deleted, setDeleted] = useState(false);
  const { loggedInUser } = useContext(UserContext);
  //   const comment = props.data;

  const { author, body, created_at, votes, comment_id } = props.data;
  const formatTime = timeFormatter(created_at);

  async function handleDelete() {
    await deleteComment(comment_id);
    setDeleted(true);
  }

  return (
    <div className="commentCard">
      {deleted ? (
        <h3>Comment Deleted</h3>
      ) : (
        <>
          <p>{author}</p>
          <p>{body}</p>
          <p>{formatTime}</p>
          <p>&#128150; : {votes}</p>
          {author === loggedInUser.username && (
            <button onClick={handleDelete}>Delete</button>
          )}
        </>
      )}
    </div>
  );
}
