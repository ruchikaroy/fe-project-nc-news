import { useEffect, useState } from "react";
import { Heading, Text, Box, Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ArticleDetailPage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setIsLoading(true);

      axios
        .get(`https://news-api-ibvn.onrender.com/api/articles/${id}`)
        .then((res) => {
          setArticle(res.data.article);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) {
    return (
      <Text fontSize="2xl" fontWeight="bold">
        Loading...
      </Text>
    );
  }

  return (
    <Box padding="10px">
      <Heading>{article.title}</Heading>
      <Text>
        By {article.author} on{" "}
        {new Date(article.created_at).toLocaleDateString()}
      </Text>
      <Image src={article.article_img_url} alt={article.title} />
      <Text mt={4}>{article.body}</Text>
    </Box>
  );
}

export default ArticleDetailPage;
