import { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  console.log(selectedPlatform?.name);
  console.log(selectedGenre?.name);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", {
        signal: controller.signal,
        params: {
          genres: selectedGenre?.id,
          parent_platforms: selectedPlatform?.id,
        },
      })
      .then((response) => {
        setGames(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, [selectedGenre, selectedPlatform]);

  return { games, error, isLoading };
};

export default useGames;
