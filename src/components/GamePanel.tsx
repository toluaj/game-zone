import { useEffect, useState } from 'react'
import apiClient from '../folder/apiClient'
import { Text } from '@chakra-ui/react';
import { AxiosError } from 'axios';

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[]
}

const GamePanel = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        async function getGames() {
            try {
                const response = await apiClient.get<FetchGamesResponse>('/sgams')
                setGames(response.data.results)
                console.log(games)
            } catch (error) {
                setError((error as AxiosError).message)
            }
        }
        getGames()
        // apiClient.get<FetchGamesResponse>('/gams')
        // .then(response => setGames(response.data.results))
        // .catch(error => setError(error.message))
        
    }, [])
    
  return (
    <>
        {error && <Text>{error}</Text>}
        <ul>
            {games.map(game => <li key={game.id}>{game.name}</li>)}
        </ul>
    </>
  )
}

export default GamePanel