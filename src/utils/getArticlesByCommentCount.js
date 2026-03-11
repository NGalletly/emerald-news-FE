export function getArticlesByCommentCount() {
  return fetch(
    `https://https://emerald-news.onrender.com/api/articles?sort_by=comment_count&order_by=desc`,
  ).then((res) => {
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        msg: "Failed to fetch articles",
      });
    }

    return res.json();
  });
}
