import { Heading, Text, Flex, Box, Spacer } from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";

function Header({ user }) {
  return (
    <>
      <Flex align="center" padding="10px">
        <Heading size="xl">NC News</Heading>
        <Spacer />
        <Flex fontSize="2lg" align="center">
          <Text>Logged in</Text>
          <Box as={FaUserAlt} mx="2" />
          <Text>{user.user}</Text>
        </Flex>
      </Flex>
    </>
  );
}
export default Header;
