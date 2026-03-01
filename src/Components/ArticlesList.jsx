import { getArticles, sortArticles } from "../utils/getData";
import { useState, useEffect } from "react";
import Slither from "./Slither";
import { useLoadingErrorHook } from "../hooks/useLoadingErrorHook";

export default function ArticlesList() {
  const { data, isLoading, error } = useLoadingErrorHook(getArticles);
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState("");

  if (isLoading) {
    return <h1>Fetching articles list...</h1>;
  }

  if (error) {
    return <h1>Sorry! Somethings gone awry. Please try again later.</h1>;
  }

  const articles = data.articles || [];

  function assignQuery(event) {
    setQuery(event.target.value);
    console.log(query);
  }

  return (
    <div className="pageContainer">
      <h1>articles</h1>
      <div className="sortButtons">
        <select value={query} onChange={assignQuery}>
          <option value="votes">Popular</option>
          <option value="comment_count">Comments</option>
          <option value="created_at">Date</option>
          <option value="topic">Topic</option>
        </select>
      </div>

      <main className="articleList">
        {articles.map((article) => (
          <Slither key={article.article_id} article={article} />
        ))}
      </main>
    </div>
  );
}
