import { useState } from "react";
import { useLoadingErrorHook } from "../hooks/useLoadingErrorHook";
import Slither from "./Slither";
import { getArticlesByTopics } from "../utils/getData";
import { useParams } from "react-router-dom";

export default function TopicsArticles() {
  const { topics_id } = useParams();
  const [query, setQuery] = useState("created_at");
  const [order, setOrder] = useState("desc");

  const { data, isLoading, error } = useLoadingErrorHook(getArticlesByTopics, {
    dependencies: [topics_id, query, order],
    params: { topic: topics_id, sort_by: query, order_by: order },
  });

  if (isLoading) {
    return <h1>Fetching articles list...</h1>;
  }

  if (error) {
    return (
      <div>
        <h2>
          <p>Error: {error.response?.status}</p>
        </h2>
        <h1>Sorry! That topic doesn't exist!</h1>
      </div>
    );
  }

  const articles = data.articles || [];

  function assignQuery(event) {
    setQuery(event.target.value);
  }

  function assignOrder(event) {
    setOrder(event.target.value);
  }

  return (
    <div className="pageContainer">
      <h1>{topics_id} articles</h1>

      <div className="sortButtons">
        <select value={query} onChange={assignQuery}>
          <option value="votes">Popular</option>
          <option value="comment_count">Comments</option>
          <option value="created_at">Date</option>
        </select>
        <button value="desc" onClick={assignOrder}>
          &#8593;
        </button>
        <button value="asc" onClick={assignOrder}>
          &#8595;
        </button>
      </div>

      <main className="articleList">
        {articles.map((article) => (
          <Slither key={article.article_id} article={article} />
        ))}
      </main>
    </div>
  );
}
