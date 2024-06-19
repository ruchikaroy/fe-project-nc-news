import axios from "axios";
import { useEffect, useState } from "react";
import { Heading, Text, Box, Image, Divider } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function CommentsPage() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    axios
      .get(`https://news-api-ibvn.onrender.com/api/articles/${id}/comments`)
      .then((response) => {
        setComments(response.data.comments);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <Heading
        as="h3"
        size="lg"
        marginTop="20px"
        textDecor="underline"
        marginLeft="9px"
      >
        Read Comments
      </Heading>
      {comments.map((comment) => (
        <Box key={comment.comment_id} padding="10px">
          <Heading size="sm">Comment by: {comment.author}</Heading>
          <Text fontSize="xs" as="b">
            Dated: {new Date(comment.created_at).toLocaleDateString()}
          </Text>
          <Text fontSize="sm">{comment.body}</Text>
          <Divider orientation="horizontal" borderColor="#68cf8a" />
        </Box>
      ))}
    </>
  );
}
export default CommentsPage;
