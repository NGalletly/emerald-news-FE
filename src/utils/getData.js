export function getArticles() {
  return fetch(`https://nevilles-news.onrender.com/api/articles`).then(
    (res) => {
      if (!res.ok) {
        return Promise.reject({
          status: res.status,
          msg: "Failed to fetch articles",
        });
      }

      return res.json();
    },
  );
}

export function getTopics() {
  return fetch(`https://nevilles-news.onrender.com/api/topics`).then((res) => {
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        msg: "Failed to fetch articles",
      });
    }

    return res.json();
  });
}
export function getUsers() {
  return fetch(`https://nevilles-news.onrender.com/api/Users`).then((res) => {
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        msg: "Failed to fetch articles",
      });
    }

    return res.json();
  });
}

export function getArticlesById(id) {
  return fetch(`https://nevilles-news.onrender.com/api/articles/${id}`).then(
    (res) => {
      if (!res.ok) {
        return Promise.reject({
          status: res.status,
          msg: "Failed to fetch articles",
        });
      }

      return res.json();
    },
  );
}

export function getCommentsById(id) {
  return fetch(`https://nevilles-news.onrender.com/api/articles/${id}/comments`).then(
    (res) => {
      if (!res.ok) {
        return Promise.reject({
          status: res.status,
          msg: "Failed to fetch articles",
        });
      }

      return res.json();
    },
  );
}
