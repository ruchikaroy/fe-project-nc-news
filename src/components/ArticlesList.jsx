import { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import { SimpleGrid } from "@chakra-ui/react";

function ArticlesList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`https://news-api-ibvn.onrender.com/api/articles`)
      .then((response) => {
        if (response.data.articles) {
          setArticles(response.data.articles);
        } else {
          setArticles([]);
        }
      })
      .catch((error) => {
        setArticles([]);
      });
  }, []);

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={10} padding="10px">
      {articles.map((article) => (
        <ArticleCard article={article} key={article.article_id} />
      ))}
    </SimpleGrid>
  );
}
export default ArticlesList;
