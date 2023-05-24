import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import GameCriticScore from "./GameCriticScore";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image src={game.background_image} borderRadius={10} overflow="hidden" />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((x) => x.platform)}
          />
          <GameCriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
