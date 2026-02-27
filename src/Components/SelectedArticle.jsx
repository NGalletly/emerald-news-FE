import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticlesById } from "../utils/getData";
import { useLoadingErrorHook } from "../hooks/useLoadingErrorHook";
import CommentsList from "./CommentsList";
import CommentForm from "./CommentForm";
import { timeFormatter } from "../utils/timeFormatter";

export default function SelectedArticle() {
  const { article_id } = useParams();
  const [liked, setLiked] = useState(false);
  const [voteCount, setVoteCount] = useState(0);
  const [commented, setCommented] = useState(false);

  const { data, isLoading, error } = useLoadingErrorHook(getArticlesById, {
    dependencies: [article_id],
    params: article_id,
  });

  useEffect(() => {
    if (data?.articles?.votes !== undefined) {
      setVoteCount(data.articles.votes);
    }
  }, [data]);

  if (isLoading) {
    return <h1>Loading the article...</h1>;
  }
  if (error) {
    return <h1>Sorry! Somethings gone awry. Please try again later.</h1>;
  }
  const articles = data.articles || [];
  console.log(articles);
  const {
    author,
    body,
    topic,
    title,
    created_at,
    comment_count,
    article_img_url,
    votes,
  } = articles;

  const formatTime = timeFormatter(created_at);

  function handleClick() {
    if (!liked) {
      setVoteCount((prev) => prev + 1);
      setLiked(true);
    } else {
      setVoteCount((prev) => prev - 1);
      setLiked(false);
    }
  }

  function handleComment() {
    setCommented((prev) => !prev);
  }

  return (
    <div>
      <section className="singleArticleCard column">
        <h2>{title}</h2>
        <p>author: {author}</p>
        <p>Topic: {topic}</p>
        <p>Created at: {formatTime}</p>
        <p>{body}</p>
        <img src={article_img_url} alt="" />
        <div className="likeBar">
          <p>&#128150; : {voteCount}</p>
          <button
            className={liked ? "like-btn is-liked" : "like-btn"}
            onClick={handleClick}
          >
            {liked ? "❤️ Liked" : "🤍 Like"}
            {/* &#129293; */}
          </button>
        </div>
        <div className="commentBar likeBar">
          <h3>comments: {comment_count}</h3>
          <button
            className={commented ? "like-btn is-liked" : "like-btn "}
            onClick={handleComment}
          >
            {commented ? "Cancel" : <p> &#128172;</p>}
          </button>
        </div>
        {commented && <CommentForm />}
      </section>
      <CommentsList id={article_id} />
    </div>
  );
}
