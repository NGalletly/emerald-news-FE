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
  } = article;

  let formatTime = timeFormatter(created_at);
  return (
    <>
      <div key={article_id} className="articleCard">
        <h3></h3>
        <p>author: {author}</p>
        <br></br>
        <p>{title}</p>
        <p>Topic: {topic}</p>
        <p>Created at: {formatTime}</p>
        <p>comments: {comment_count}</p>
        <img src={article_img_url} alt="" />

        <Link to={`/articles/${article.article_id}`}>
          <button>More</button>
        </Link>
      </div>
    </>
  );
}
