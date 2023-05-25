import { HStack, List, Skeleton } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List spacing={4}>
      <HStack>
        <Skeleton height={1} width={10}></Skeleton>
        <Skeleton height={1} width={20}></Skeleton>
      </HStack>
    </List>
  );
};

export default GenreListSkeleton;
