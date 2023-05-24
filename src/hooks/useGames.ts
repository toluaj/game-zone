import { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

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

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    // async function getGames() {
    //   try {
    //     const response = await apiClient.get<FetchGamesResponse>("/games", {
    //       signal: controller.signal,
    //     });
    //     setGames(response.data.results);
    //     setIsLoading(false);
    //   } catch (error) {
    //     setIsLoading(false);
    //     if (error instanceof CanceledError) return;
    //     setError((error as AxiosError).message);
    //   }
    // }
    // getGames();
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((response) => {
        setGames(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { games, error, IsLoading };
};

export default useGames;
