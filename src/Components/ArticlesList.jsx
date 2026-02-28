import { getArticles } from "../utils/getData";
import { useState, useEffect } from "react";
import Slither from "./Slither";
import { useLoadingErrorHook } from "../hooks/useLoadingErrorHook";

export default function ArticlesList() {
  const { data, isLoading, error } = useLoadingErrorHook(getArticles);

  if (isLoading) {
    return <h1>Fetching articles list...</h1>;
  }

  if (error) {
    return <h1>Sorry! Somethings gone awry. Please try again later.</h1>;
  }

  const articles = data.articles || [];

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
