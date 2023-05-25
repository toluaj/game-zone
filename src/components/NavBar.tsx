import { HStack, Image, Input } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorSchemeToggler from "./ColorSchemeToggler";
import SearchGamesInput from "./SearchGamesInput";

const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize={16} borderRadius={20} />
      <SearchGamesInput />
      <ColorSchemeToggler />
    </HStack>
  );
};

export default NavBar;
