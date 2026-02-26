import { useState } from "react";
import { getArticles } from "../utils/getData";
import { useEffect } from "react";
import { getArticlesByCommentCount } from "../utils/getArticlesByCommentCount";
import ArticleCard from "./ArticleCard";
import { useLoadingErrorHook } from "../hooks/useLoadingErrorHook";

export default function Home() {
  const { data, isLoading, error } = useLoadingErrorHook(getArticles, {
    dependencies: [],
    params: {},
  });

  if (isLoading) {
    return <h1>Fetching your favourite news...</h1>;
  }
  if (error) {
    return <h1>Sorry! Somethings gone awry. Please try again later.</h1>;
  }

  const articles = data.articles || [];

  return (
    <>
      <h1>todays HOT articles!</h1>

      <section>
        {articles.slice(0, 3).map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </section>
    </>
  );
}
