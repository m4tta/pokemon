import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Center, Stack, Image, Text, Box } from "./Primitives";
import FavoritePokemon from "./FavoritePokemon";

const PokeCard = styled(Stack)`
  transition: all 100ms;
  &:hover {
    box-shadow: 2px 3px 8px 0px rgba(0, 0, 0, 0.15);
  }
`;

interface PokemonCardTypes {
  pokemon: any;
  withType?: boolean;
}

const PokemonCardLong = ({ pokemon, withType }: PokemonCardTypes) => {
  const router = useRouter();

  return (
    <PokeCard
      onClick={() =>
        router.push({
          pathname: "/pokemon/[id]",
          query: { id: pokemon.id },
        })
      }
      cursor="pointer"
      borderStyle="solid"
      borderWidth="2px"
      borderRadius="4px"
      borderColor="#ccc"
    >
      <Center margin="auto 0 0 0" padding="16px">
        <Image maxHeight="50px" width="50px" src={pokemon.image} />
      </Center>
      <Stack width="100%" alignItems="center" padding="8px 12px" bgColor="#f3f2f2" justifyContent="space-between">
        <Stack vertical>
          <Text fontWeight="700" textTransform="capitalize" fontSize="18px">
            {pokemon.name}
          </Text>
          {withType && (
            <Text margin="4px 0" fontSize="13px" textTransform="capitalize">
              {pokemon.types.map((type) => type).join(", ")}
            </Text>
          )}
        </Stack>
        <FavoritePokemon pokemon={pokemon} size={24} />
      </Stack>
    </PokeCard>
  );
};

export default PokemonCardLong;
