import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { getAllArticles } from "../api";

function ArticlesList({ topic, searchParams }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoding] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getAllArticles(topic, searchParams).then(({ data, error, isLoading }) => {
      setArticles(data);
      setIsLoding(isLoading);
      setError(error);
    });
  }, [topic, searchParams.get("sort_by"), searchParams.get("direction")]);

  if (isLoading) {
    return (
      <Text fontSize="2xl" fontWeight="bold">
        Loading...
      </Text>
    );
  }

  if (error) {
    return (
      <Text fontSize="2xl" fontWeight="bold" color="red">
        {message}
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
