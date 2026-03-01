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

  const formatTime = timeFormatter(created_at);
  return (
    <div className="slitherCard">
      <p className="slitherCardTitle">{title}</p>
      <p className="slitherCardInfo">
        {topic} | {author} | {formatTime} | &#128172; {comment_count} |
        &#128150; {votes}
      </p>
      <Link to={`/articles/${article_id}`}>
        <button className="slitherCardBtn">More</button>
      </Link>
      <img src={article_img_url} alt="" />
    </div>
  );
}
