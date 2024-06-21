import { useEffect, useState } from "react";
import { Heading, Text, Box, Image, Button, Flex } from "@chakra-ui/react";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { useParams } from "react-router-dom";
import CommentsPage from "./CommentsPage";
import { getArticlesById, patchArticleById } from "../api";

function ArticleDetailPage({ user }) {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const handleIncrementVotes = () => {
    const originalArticle = { ...article };
    setArticle({ ...article, votes: article.votes + 1 });
    patchArticleById(article.article_id, 1).then(({ error }) => {
      if (error) {
        setArticle(originalArticle);
      }
    });
  };

  const handleDecrementVotes = () => {
    setArticle({ ...article, votes: article.votes - 1 });
    patchArticleById(article.article_id, -1).then(({ error }) => {
      if (error) {
        setArticle(originalArticle);
      }
    });
  };

  useEffect(() => {
    if (id) {
      getArticlesById(id).then(({ data, error, isLoading }) => {
        setArticle(data);
        setIsLoading(isLoading);
        setError(error);
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

  if (error) {
    return (
      <Text fontSize="2xl" fontWeight="bold" color="red">
        Sorry! an error has occurred.
      </Text>
    );
  }

  return (
    <Box padding="10px" bg="white" marginTop="10px" borderRadius="10px">
      <Heading>{article.title}</Heading>
      <Text>
        By {article.author} on{" "}
        {new Date(article.created_at).toLocaleDateString()}
      </Text>
      <Image src={article.article_img_url} alt={article.title} />
      <Text mt={4}>{article.body}</Text>
      <Flex alignItems="center" mt={4}>
        <Text>Votes: {article.votes}</Text>
        <Button
          onClick={() => handleIncrementVotes(article)}
          variant="link"
          _hover={{
            transform: "scale(1.05)",
            transition: "transform .15s ease-in",
            cursor: "thumbnail",
            color: "#68cf8a",
          }}
        >
          <FaThumbsUp />
        </Button>{" "}
        <Button
          onClick={() => handleDecrementVotes(article)}
          variant="link"
          _hover={{
            transform: "scale(1.05)",
            transition: "transform .15s ease-in",
            cursor: "thumbnail",
            color: "#68cf8a",
          }}
        >
          <FaThumbsDown />
        </Button>{" "}
      </Flex>
      <CommentsPage id={id} user={user} />
    </Box>
  );
}

export default ArticleDetailPage;
