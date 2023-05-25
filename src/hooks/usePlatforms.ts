import { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { Platform } from "./useGames";

interface FetchGenresResponse {
  count: number;
  results: Platform[];
}

const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchGenresResponse>("/platforms/lists/parents")
      .then((response) => {
        setPlatforms(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { platforms, error, isLoading };
};

export default usePlatforms;
