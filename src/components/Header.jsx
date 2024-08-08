import {
  Heading,
  Text,
  Flex,
  Box,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";

import { FaUserAlt } from "react-icons/fa";

function Header({ user }) {
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const headingSize = useBreakpointValue({ base: "lg", md: "xl" });
  const textSize = useBreakpointValue({ base: "md", md: "lg" });
  const backgroundColour = useBreakpointValue({
    base: "#FFDAB9",
    md: "#FFDAB9",
  });

  return (
    <>
      <Box bg={backgroundColour} p={2} borderRadius="lg" boxShadow={"md"} m={3}>
        <Flex
          direction={flexDirection}
          align="center"
          padding="10px"
          wrap="wrap"
        >
          <Heading size={headingSize} mb={{ base: 2, md: 0 }}>
            NC News
          </Heading>
          <Spacer />
          <Flex fontSize={textSize} align="center">
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
