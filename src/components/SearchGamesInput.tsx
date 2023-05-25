import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchGamesInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        placeholder="Search..."
        borderRadius={20}
        backgroundColor={"blackAlpha.100"}
      />
    </InputGroup>
  );
};

export default SearchGamesInput;
