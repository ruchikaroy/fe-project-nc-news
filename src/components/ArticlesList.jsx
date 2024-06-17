import { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";

function ArticlesList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`https://news-api-ibvn.onrender.com/api/articles`)
      .then((response) => {
        if (response.data.articles) {
          console.log("this is response from data", response.data.articles);
          setArticles(response.data.articles);
        } else {
          setArticles([]);
        }
      })
      .catch((error) => {
        console.log(error);
        setArticles([]);
      });
  }, []);

  return (
    <ul>
      {articles.map((article) => (
        <ArticleCard article={article} key={article.article_id} />
      ))}
    </ul>
  );
}
export default ArticlesList;
