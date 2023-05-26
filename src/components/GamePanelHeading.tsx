import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface GamePanelHeadingProps {
  gameQuery: GameQuery;
}

const GamePanelHeading = ({ gameQuery }: GamePanelHeadingProps) => {
  const { genre, platform } = gameQuery;
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginBottom={3}>
      {heading}
    </Heading>
  );
};

export default GamePanelHeading;
