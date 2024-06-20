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

function Topics({ onSelectTopic }) {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios
      .get("https://news-api-ibvn.onrender.com/api/topics")
      .then((response) => {
        setTopics(response.data.topics);
      })
      .catch((error) => {
        console.log(error);
        setTopics([]);
      });
  }, []);

  return (
    <>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={Button}
              rightIcon={<ChevronDownIcon />}
              fontSize="3xl"
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
