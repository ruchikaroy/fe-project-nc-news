import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function SortFilter({ setSearchParams }) {
  const handleSortBySelection = (sortBy) => {
    console.log(sortBy);
    setSearchParams((newParams) => {
      newParams.set("sort_by", sortBy);
      return newParams;
    });
  };

  const handleDirectionSelection = (direction) => {
    console.log(direction);
    setSearchParams((newParams) => {
      newParams.set("direction", direction);
      return newParams;
    });
  };
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} fontSize="20px">
          Sort By
        </MenuButton>
        <MenuList>
          <MenuOptionGroup type="radio" onChange={handleSortBySelection}>
            <MenuItemOption value="created_at">Dates</MenuItemOption>
            <MenuItemOption value="comment_count">
              Comments Count
            </MenuItemOption>
            <MenuItemOption value="votes">Votes</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} fontSize="20px">
          Order By
        </MenuButton>
        <MenuList>
          <MenuOptionGroup type="radio" onChange={handleDirectionSelection}>
            <MenuItemOption value="ASC">Ascending</MenuItemOption>
            <MenuItemOption value="DESC">Descending</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </>
  );
}
export default SortFilter;
