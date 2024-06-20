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
import SortFilter from "./SortFilter";

function NavBar({ onSelectTopic, setSearchParams }) {
  return (
    <HStack spacing={4} p={4} bg="gray.100" padding="10px" borderRadius={10}>
      <Menu>
        <Link to="/">
          <MenuButton as={Button} fontSize="20px">
            Home
          </MenuButton>
        </Link>
        <Topics onSelectTopic={onSelectTopic} />
      </Menu>
      <SortFilter setSearchParams={setSearchParams} />
    </HStack>
  );
}
export default NavBar;
