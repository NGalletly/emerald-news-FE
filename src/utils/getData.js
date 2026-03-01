import axios from "axios";

export async function getTopics() {
  const response = await axios.get(
    `https://nevilles-news.onrender.com/api/topics`,
  );
  return response.data;
}

export async function getArticles() {
  const response = await axios.get(
    `https://nevilles-news.onrender.com/api/articles`,
  );
  return response.data;
}

export async function getUsers() {
  const response = await axios.get(
    `https://nevilles-news.onrender.com/api/Users`,
  );
  return response.data;
}

export async function getArticlesById(id) {
  try {
    const response = await axios.get(
      `https://nevilles-news.onrender.com/api/articles/${id}`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function patchArticleVote(id, changeVote) {
  const response = await axios.patch(
    `https://nevilles-news.onrender.com/api/articles/${id}`,
    { inc_votes: changeVote },
  );
  return response.data;
}

export async function getArticlesByTopics(topic) {
  const response = await axios.get(
    `https://nevilles-news.onrender.com/api/articles?topic=${topic}`,
  );
  return response.data;
}

export async function getCommentsById(id) {
  const response = await axios.get(
    `https://nevilles-news.onrender.com/api/articles/${id}/comments`,
  );
  return response.data;
}

export async function postComment(article_id, username, body) {
  const response = await axios.post(
    `https://nevilles-news.onrender.com/api/articles/${article_id}/comments`,
    { username, body },
  );
  return response.data;
}

export async function deleteComment(comment_id) {
  const response = await axios.delete(
    `https://nevilles-news.onrender.com/api/comments/${comment_id}`,
  );
}

export async function sortArticles({
  sort_by = "created_at",
  order_by = "asc",
}) {
  try {
    const response = await axios.get(
      `https://nevilles-news.onrender.com/api/articles?sort_by=${sort_by}&order_by=${order_by}`,
      { sort_by, order_by },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
