import useState from "react";
import { Link } from "react-router-dom";
import { timeFormatter } from "../utils/timeFormatter";

export default function ArticleCard({ article }) {
  const {
    article_id,
    author,
    title,
    topic,
    created_at,
    comment_count,
    article_img_url,
    votes,
  } = article;

  let formatTime = timeFormatter(created_at);
  return (
    <>
      <div key={article_id} className="articleCard">
        <p>author: {author}</p>
        <p>{title}</p>
        <p>Topic: {topic}</p>
        <p>Created at: {formatTime}</p>
        <p>comments: {comment_count}</p>
        <p>Votes: {votes}</p>
        <img src={article_img_url} alt="" />

        <Link to={`/articles/${article.article_id}`}>
          <button>More</button>
        </Link>
      </div>
    </>
  );
}
