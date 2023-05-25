import { useState } from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/gameImageUrl";
import GenreListSkeleton from "./GenreListSkeleton";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const { genres, isLoading, error } = useGenres();
  const [variant, setVariant] = useState("link");
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return null;
  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY={3}>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              variant={selectedGenre?.name === genre.name ? "solid" : "link"}
              fontWeight={
                selectedGenre?.name === genre.name ? "bold" : "normal"
              }
              onClick={() => {
                onSelectGenre(genre);
              }}
            >
              {genre.name.trim()}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
