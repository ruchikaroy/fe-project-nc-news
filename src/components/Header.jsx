import { Heading, Text } from "@chakra-ui/react";

function Header({ user }) {
  return (
    <>
      <Heading as="h1" size="4xl" noOfLines={1} textAlign="center">
        NC News
      </Heading>
      <Text>Logged In User: {user.user}</Text>
    </>
  );
}
export default Header;
