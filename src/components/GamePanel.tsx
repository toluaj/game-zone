import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GamePanel = () => {
  const { games, error, IsLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  console.log(IsLoading);
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}
        spacing={10}
        padding="10px"
      >
        {IsLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamePanel;
