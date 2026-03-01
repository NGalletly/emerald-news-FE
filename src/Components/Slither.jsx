import { useState } from "react";
import { Link } from "react-router-dom";
import { timeFormatter } from "../utils/timeFormatter";

export default function Slither({ article }) {
  const {
    article_id,
    title,
    topic,
    created_at,
    author,
    comment_count,
    votes,
    article_img_url,
  } = article;

  // console.log(created_at);
  const formatTime = timeFormatter(created_at);
  // console.log(formatTime);
  return (
    <div className="slitherCard">
      {/* <p>{title}</p> */}
      {/* <p>Topic: {topic}</p> */}
      <p>{formatTime}</p>
      {/* <p>By: {author}</p> */}
      <p>
        Comments: {comment_count} · Votes: {votes}
      </p>
      <img src={article_img_url} alt="" />
      <Link to={`/articles/${article_id}`}>
        <button>More</button>
      </Link>
    </div>
  );
}
