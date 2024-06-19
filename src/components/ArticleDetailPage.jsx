import { useEffect, useState } from "react";
import { Heading, Text, Box, Image, Button, Flex } from "@chakra-ui/react";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import CommentsPage from "./CommentsPage";

function ArticleDetailPage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleIncrementVotes = () => {
    const originalArticle = { ...article };
    setArticle({ ...article, votes: article.votes + 1 });
    axios
      .patch(
        `https://news-api-ibvn.onrender.com/api/articles/${article.article_id}`,
        {
          inc_votes: 1,
        }
      )
      .then(response)
      .catch((error) => {
        if (error) {
          setArticle(originalArticle);
        }
      });
  };

  const handleDecrementVotes = () => {
    setArticle({ ...article, votes: article.votes - 1 });
    axios
      .patch(
        `https://news-api-ibvn.onrender.com/api/articles/${article.article_id}`,
        {
          inc_votes: -1,
        }
      )
      .then(response)
      .catch((error) => {
        if (error) {
          setArticle(originalArticle);
        }
      });
  };

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
      <CommentsPage id={id} />
    </Box>
  );
}

export default ArticleDetailPage;
