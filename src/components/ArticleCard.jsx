import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GiVote } from "react-icons/gi";
import { FaComments } from "react-icons/fa6";

function ArticleCard({ article }) {
  return (
    <Card
      borderRadius={10}
      overflow="hidden"
      marginTop={3}
      padding={10}
      bg="#FFDAB9"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
    >
      <Image src={article.article_img_url} />
      <CardBody>
        <Heading
          noOfLines={1}
          fontSize="2xl"
          color="black"
          _hover={{
            cursor: "thumbnail",
            color: "#808080",
          }}
        >
          <Link to={"/article/" + article.article_id}>{article.title}</Link>
        </Heading>

        <Text fontSize="1xl" color="#404040">
          By {article.author} on{" "}
          {new Date(article.created_at).toLocaleDateString()}
        </Text>
        <Flex align="center" mt={2} marginTop="20px">
          <Flex align="center">
            <Box as={FaComments} mr={2} />
            <Text>{article.comment_count}</Text>
          </Flex>

          <Flex align="center" ml={4}>
            <Box as={GiVote} mr={2} />
            <Text>{article.votes}</Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}
export default ArticleCard;
