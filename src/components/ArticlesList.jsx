import { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import { SimpleGrid, Text } from "@chakra-ui/react";

function ArticlesList({ topic }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoding] = useState(true);

  useEffect(() => {
    setIsLoding(true);
    axios
      .get(`https://news-api-ibvn.onrender.com/api/articles`, {
        params: { topic: topic },
      })
      .then((response) => {
        if (response.data.articles) {
          setArticles(response.data.articles);
          setIsLoding(false);
        } else {
          setArticles([]);
        }
      })
      .catch((error) => {
        console.log(error);
        setArticles([]);
      });
  }, [topic]);

  if (isLoading) {
    return (
      <Text fontSize="2xl" fontWeight="bold">
        Loading...
      </Text>
    );
  }

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={10} padding="10px">
      {articles.map((article) => (
        <ArticleCard article={article} key={article.article_id} />
      ))}
    </SimpleGrid>
  );
}
export default ArticlesList;
