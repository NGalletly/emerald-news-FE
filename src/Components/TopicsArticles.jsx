import { useState } from "react";
import { useLoadingErrorHook } from "../hooks/useLoadingErrorHook";
import Slither from "./Slither";
import { getArticlesByTopics } from "../utils/getData";
import { useParams } from "react-router-dom";

export default function TopicsArticles() {
  const { topics_id } = useParams();

  const { data, isLoading, error } = useLoadingErrorHook(getArticlesByTopics, {
    dependencies: [topics_id],
    params: topics_id,
  });

  if (isLoading) {
    return <h1>Fetching articles list...</h1>;
  }

  if (error) {
    return <h1>Sorry! Somethings gone awry. Please try again later.</h1>;
  }

  const articles = data.articles || [];
  console.log(articles);
  return (
    <div className="pageContainer">
      <h1>articles</h1>
      <main className="articleList">
        {articles.map((article) => (
          <Slither key={article.article_id} article={article} />
        ))}
      </main>
    </div>
  );
}
