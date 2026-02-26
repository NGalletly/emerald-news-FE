import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticlesById } from "../utils/getData";
import { useLoadingErrorHook } from "../hooks/useLoadingErrorHook";
import CommentsList from "./CommentsList";

export default function SelectedArticle() {
  const { article_id } = useParams();

  const { data, isLoading, error } = useLoadingErrorHook(getArticlesById, {
    dependencies: [article_id],
    params: article_id,
  });

  if (isLoading) {
    return <h1>Loading the article...</h1>;
  }
  if (error) {
    return <h1>Sorry! Somethings gone awry. Please try again later.</h1>;
  }
  const articles = data.articles || [];

  const {
    author,
    topic,
    title,
    created_at,
    comment_count,
    article_img_url,
    votes,
  } = articles;

  return (
    <div>
      <h2>Viewing Article ID: {article_id}</h2>
      <section className="singleArticleCard">
        <p>author: {author}</p>
        <p>{title}</p>
        <p>Topic: {topic}</p>
        <p>Created at: {created_at}</p>
        <img src={article_img_url} alt="" />
        <p>comments: {comment_count}</p>
        <p>votes: {votes}</p>
      </section>
      <CommentsList id={article_id} />
    </div>
  );
}
