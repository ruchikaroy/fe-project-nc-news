import React from "react";
import {
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import Topics from "./Topics";

function NavBar({ onSelectTopic }) {
  return (
    <HStack spacing={4} p={4} bg="gray.100" padding="10px" borderRadius={10}>
      <Link to="/">
        <Text fontSize="3xl" cursor="pointer">
          Home
        </Text>
      </Link>
      <Text fontSize="3xl" cursor="pointer">
        Users
      </Text>
      <Topics onSelectTopic={onSelectTopic} />
    </HStack>
  );
}
export default NavBar;
