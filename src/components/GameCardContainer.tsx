import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box borderRadius={4} overflow="hidden" width="300px">
      {children}
    </Box>
  );
};

export default GameCardContainer;
