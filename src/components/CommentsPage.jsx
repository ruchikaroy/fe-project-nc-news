import axios from "axios";
import { useEffect, useState } from "react";
import { Heading, Text, Box, Divider, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";
import { deleteComment, getArticleCommenstById } from "../api";

function CommentsPage({ user }) {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const handleDelete = (commentId) => {
    const originalComments = [...comments];
    setComments(comments.filter((comment) => comment.comment_id !== commentId));
    deleteComment(commentId).then(({ error }) => {
      if (error) {
        setError(error);
        setComments(originalComments);
      }
      //alert("Comment deleted successfully!");
    });
  };

  useEffect(() => {
    if (!id) {
      setIsLoading(false);
      return;
    }
    getArticleCommenstById(id).then(({ data, error, isLoading }) => {
      setComments(data);
      setIsLoading(isLoading);
      setError(error);
    });
  }, [id]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text color="red">Sorry! An error occurred</Text>;
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
          {comment.author === user.user && (
            <Button onClick={() => handleDelete(comment.comment_id)}>
              Delete
            </Button>
          )}
          <Divider orientation="horizontal" borderColor="#68cf8a" />
        </Box>
      ))}
      <CommentForm comments={comments} setComments={setComments} user={user} />
    </>
  );
}
export default CommentsPage;
