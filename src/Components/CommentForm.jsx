import { useState, useContext } from "react";
import { postComment } from "../utils/getData";
import { UserContext } from "../contexts/UserContextProvider";

export default function CommentForm({
  article_id,
  setRefreshComments,
  setInputError,
}) {
  const [comment, setComment] = useState("");
  const [isPosted, setIsPosted] = useState(false);
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  async function handleSubmit(e) {
    e.preventDefault();

    if (comment.length === 0) {
      setInputError("Error! Please enter a message before submitting.");
      return;
    } else if (loggedInUser.username === "No User Selected") {
      setInputError("Error! Please choose user from userpage to login.");
      return;
    } else {
      console.log(comment);
      await postComment(article_id, loggedInUser.username, comment);
      setComment("");
      setInputError("");
      setIsPosted(true);
      setRefreshComments((prev) => prev + 1);
      setTimeout(() => setIsPosted(false), 2000);
    }
  }

  return (
    <div className="CommentBox">
      <h3>Write your post below:</h3>
      <form className="commentFormBody" onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your thoughts here. . ."
        />
        <button
          className={
            isPosted ? "like-btn is-liked submitBtn" : "like-btn submitBtn"
          }
          type="submit"
        >
          {" "}
          {isPosted ? "Posted!" : "Comment"}
        </button>
      </form>
    </div>
  );
}
