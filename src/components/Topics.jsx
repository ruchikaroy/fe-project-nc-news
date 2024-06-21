import {
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { getTopics } from "../api";

function Topics({ onSelectTopic }) {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    getTopics().then(({ data, error }) => {
      setTopics(data);
      setError(error);
    });
  }, []);

  if (error) {
    return (
      <Text fontSize="2xl" fontWeight="bold" color="red">
        Sorry! an error has occurred whilst fetching topics.
      </Text>
    );
  }

  return (
    <>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={Button}
              rightIcon={<ChevronDownIcon />}
              fontSize="20px"
            >
              {isOpen ? "Topics" : "Topics"}
            </MenuButton>
            <MenuList>
              {topics.map((topic, index) => (
                <MenuItem
                  as={Link}
                  to={`/topic/${topic.slug}`}
                  key={index}
                  onClick={() => onSelectTopic(topic.slug)}
                >
                  {topic.slug}
                </MenuItem>
              ))}
            </MenuList>
          </>
        )}
      </Menu>
    </>
  );
}
export default Topics;
