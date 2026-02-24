import { useState } from "react";
import { getArticles } from "../utils/getData";
import { useEffect } from "react";
import { getArticlesByCommentCount } from "../utils/getArticlesByCommentCount";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await getArticlesByCommentCount();
      console.log(response);
      setArticles(response.articles);
    }

    getData();
  }, []);

  let threeArticles = articles.slice(0, 2);
  console.log(threeArticles);
  const mappedArticles = threeArticles.map((article) => {
    return (
      <div key={article.article_id} className="articleCard">
        <p>Author: {article.title}</p>
        <p>Topic: {article.topic}</p>
        <p>Created at: {article.created_at}</p>
        <p>Author: {article.comment_count}</p>
        <img src={article.article_img_url} alt="" />
      </div>
    );
  });

  return (
    <>
      <main>{articles.length > 0 && mappedArticles}</main>{" "}
    </>
  );
}

/* article_id
: 
35
article_img_url
: 
"https://images.pexels.com/photos/33242/cooking-ingredient-cuisine-kitchen.jpg?w=700&h=700"
author
: 
"cooljmessy"
comment_count
: 
14
created_at
: 
"2020-05-26T07:25:00.000Z"
title
: 
"Stone Soup"
topic
: 
"cooking"
votes
: 
0
*/
