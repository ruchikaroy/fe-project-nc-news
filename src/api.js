import axios from "axios";

const ncNewsUrl = axios.create({
  baseURL: "https://news-api-ibvn.onrender.com/api",
});

export const getAllArticles = (topic, searchParams) => {
  return ncNewsUrl
    .get("/articles", {
      params: {
        topic: topic,
        sort_by: searchParams.get("sort_by"),
        direction: searchParams.get("direction"),
      },
    })
    .then((response) => {
      if (response.data.articles) {
        return { data: response.data.articles, error: null, isLoading: false };
      }
    })
    .catch((error) => {
      return { data: [], error: error, isLoading: false };
    });
};

export const getArticlesById = (id) => {
  return ncNewsUrl
    .get(`/articles/${id}`)
    .then((res) => {
      return { data: res.data.article, error: null, isLoading: false };
    })
    .catch((error) => {
      return { data: null, error: error, isLoading: false };
    });
};

export const getArticleCommenstById = (id) => {
  return ncNewsUrl
    .get(`/articles/${id}/comments`)
    .then((res) => {
      return { data: res.data.comments, error: null, isLoading: false };
    })
    .catch((error) => {
      return { data: null, error: error, isLoading: false };
    });
};

export const patchArticleById = (article_id, factor) => {
  return ncNewsUrl
    .patch(`/articles/${article_id}`, {
      inc_votes: factor,
    })
    .then((response) => {
      return { error: null };
    })
    .catch((error) => {
      return { error: error };
    });
};

export const postComment = (id, data) => {
  return ncNewsUrl
    .post(`/articles/${id}/comments`, data)
    .then((response) => {
      return { error: null };
    })
    .catch((error) => {
      return { error: error };
    });
};

export const deleteComment = (commentId) => {
  return ncNewsUrl
    .delete(`/comments/${commentId}`)
    .then((response) => {
      return { error: null };
    })
    .catch((error) => {
      return { error: error };
    });
};

export const getTopics = () => {
  return ncNewsUrl
    .get("/topics")
    .then((res) => {
      return { data: res.data.topics, error: null, isLoading: false };
    })
    .catch((error) => {
      return { data: null, error: error, isLoading: false };
    });
};
