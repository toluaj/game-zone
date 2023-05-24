import { Badge } from "@chakra-ui/react";
import React from "react";

interface GameCriticScoreProps {
  score: number;
}

const GameCriticScore = ({ score }: GameCriticScoreProps) => {
  return (
    <Badge
      paddingX={2}
      colorScheme={score < 90 ? "yellow" : "green"}
      borderRadius={6}
    >
      {score}
    </Badge>
  );
};

export default GameCriticScore;
