import { Card, CardBody, Image, Heading } from "@chakra-ui/react";

function ArticleCard({ article }) {
  return (
    <Card borderRadius={10} overflow="hidden" marginTop={5} padding={10}>
      <Image src={article.article_img_url} />
      <CardBody>
        <Heading fontSize="2xl">{article.title}</Heading>
      </CardBody>
    </Card>
  );
}
export default ArticleCard;
