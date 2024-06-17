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
import { ChevronDownIcon } from "@chakra-ui/icons";

function NavBar() {
  return (
    <HStack spacing={4} p={4} bg="gray.100" padding="10px" borderRadius={10}>
      <Text fontSize="3xl" cursor="pointer">
        Home
      </Text>
      <Text fontSize="3xl" cursor="pointer">
        Users
      </Text>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          fontSize="3xl"
          bg="transparent"
          fontWeight="normal"
          _hover={{ bg: "gray.200" }}
          _active={{ bg: "gray.300" }}
        >
          Topics
        </MenuButton>
        <MenuList>
          <MenuItem>Coding</MenuItem>
          <MenuItem>Football</MenuItem>
          <MenuItem>Cooking</MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
}
export default NavBar;
