import { useState } from "react";

export default function CommentForm() {
  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(comment);
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
        <button className="submitBtn" type="submit">
          Comment
        </button>
      </form>
    </div>
  );
}
