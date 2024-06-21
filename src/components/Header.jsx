import { Heading, Text, Flex, Box, Spacer } from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";

function Header({ user }) {
  return (
    <>
      <Box bg="#FFDAB9" p={3} borderRadius="lg" boxShadow="md" m={4}>
        <Flex align="center" padding="10px">
          <Heading size="xl">NC News</Heading>
          <Spacer />
          <Flex fontSize="2lg" align="center">
            <Text>Logged in</Text>
            <Box as={FaUserAlt} mx="2" />
            <Text>{user.user}</Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
export default Header;
