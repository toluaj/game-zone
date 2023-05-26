import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchGamesInputProps {
  onSearchGames: (userSearchText: string) => void;
}

const SearchGamesInput = ({ onSearchGames }: SearchGamesInputProps) => {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) onSearchGames(searchRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          placeholder="Search..."
          borderRadius={20}
          backgroundColor={"blackAlpha.100"}
          ref={searchRef}
        />
      </InputGroup>
    </form>
  );
};

export default SearchGamesInput;
