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

  useEffect(() => {
    const controller = new AbortController();
    async function getGames() {
      try {
        const response = await apiClient.get<FetchGamesResponse>("/games", {
          signal: controller.signal,
        });
        setGames(response.data.results);
        console.log(games);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
      }
    }
    getGames();
    return () => controller.abort();
    // apiClient.get<FetchGamesResponse>('/gams')
    // .then(response => setGames(response.data.results))
    // .catch(error => setError(error.message))
  }, []);

  return { games, error };
};

export default useGames;
