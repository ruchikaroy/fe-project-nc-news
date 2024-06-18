import { Card, CardBody, Image, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <Card
      borderRadius={10}
      overflow="hidden"
      marginTop={5}
      padding={10}
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
    >
      <Image src={article.article_img_url} />
      <CardBody>
        <Heading
          fontSize="2xl"
          color="grey"
          _hover={{
            cursor: "thumbnail",
            color: "#68cf8a",
          }}
        >
          <Link to={"/article/" + article.article_id}>{article.title}</Link>
        </Heading>
      </CardBody>
    </Card>
  );
}
export default ArticleCard;
