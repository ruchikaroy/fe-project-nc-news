import {
  Heading,
  Text,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";

function CommentForm() {
  //const [name, setName] = useState("");
  //const [body, setBody] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(
        `https://news-api-ibvn.onrender.com/api/articles/${id}/comments`,
        data
      )
      .then((response) => {
        console.log(response.data);
        alert("Comment posted successfully!");
      })
      .catch((error) => {
        console.log(error.data);
        alert("Failed to post comment.");
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <Heading>Leave a Reply</Heading>
        <Flex alignItems="center" mt={4}>
          <Text marginRight="2px">Required fields are marked</Text>
          <Text color="red">*</Text>
        </Flex>
        <FormControl isRequired>
          <FormLabel marginTop={4}>Comment</FormLabel>
          <Textarea
            {...register("body")}
            id="body"
            placeholder="Write your comment here..."
            size="md"
            marginBottom={1}
          />
          <FormLabel>Name</FormLabel>
          <Input
            {...register("username")}
            id="username"
            type="text"
            marginBottom={2}
          />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          POST COMMENT
        </Button>
      </form>
    </>
  );
}
export default CommentForm;
