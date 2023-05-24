import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GamePanel = () => {
    const { games, error } = useGames()
    
  return (
    <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} spacing={10} padding='10px'>
            {games.map(game => (
              <GameCard key={game.id} game={game}/>
              ))}
        </SimpleGrid>
    </>
  )
}

export default GamePanel