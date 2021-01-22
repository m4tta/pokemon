import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { FaRegHeart, FaSpeakap, FaVolumeUp } from "react-icons/fa";
import { Center, Stack, Image, Text, Box, Grid } from "../../../components/Primitives";
import { useQuery } from "@apollo/client";
import { POKEMON_BY_ID } from "../../../lib/gql";
import PokemonCard from "../../../components/PokemonCard";
import FavoritePokemon from "../../../components/FavoritePokemon";

const index = () => {
  const router = useRouter();
  const { id } = router.query;
  const pokemonQuery = useQuery(POKEMON_BY_ID, {
    variables: { id },
  });

  const pokemon = pokemonQuery.data?.pokemonById;

  if (!pokemon) {
    return null;
  }

  console.log(pokemon.sound);

  return (
    <>
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <Stack margin="auto" padding="8px" vertical width="50%">
        <Box margin="8px 0" borderStyle="solid" borderWidth="2px" borderRadius="4px" borderColor="#ccc">
          <Center position="relative">
            <Image width="400px" src={pokemon.image} />
            <Box
              cursor="pointer"
              onClick={() => new Audio(pokemon.sound).play()}
              bottom="15px"
              left="15px"
              color="#74bfa2"
              position="absolute"
            >
              <FaVolumeUp size={40} />
            </Box>
          </Center>
          <Box bgColor="#f3f2f2">
            <Stack vertical padding="8px">
              <Stack justifyContent="space-between" alignItems="center" margin="0 0 8px 0">
                <Stack vertical>
                  <Text fontWeight="700" textTransform="capitalize" fontSize="24px">
                    {pokemon.name}
                  </Text>
                  <Text>{pokemon.types.map((type) => type).join(", ")}</Text>
                </Stack>
                <FavoritePokemon pokemon={pokemon} size={24} />
              </Stack>
              <Stack alignItems="center" margin="0 0 8px 0">
                <Box bgColor="#9f9fff" height="12px" borderRadius="16px" width="100%" />
                <Text fontWeight="700" width="75px" textAlign="right" whiteSpace="nowrap">
                  CP: {pokemon.maxCP}
                </Text>
              </Stack>
              <Stack alignItems="center">
                <Box bgColor="#74bfa2" height="12px" borderRadius="16px" width="100%" />
                <Text fontWeight="700" width="75px" textAlign="right" whiteSpace="nowrap">
                  HP: {pokemon.maxHP}
                </Text>
              </Stack>
            </Stack>
            <Stack borderStyle="solid" borderWidth="2px 0 0 0" borderColor="#ccc" justifyContent="space-evenly">
              <Stack width="50%" padding="24px" vertical borderStyle="solid" borderWidth="0 2px 0 0" borderColor="#ccc">
                <Text textAlign="center" margin="0 0 8px 0" fontWeight="700" textTransform="capitalize">
                  Weight
                </Text>
                <Text textAlign="center">{`${pokemon.weight.minimum} - ${pokemon.weight.maximum}`}</Text>
              </Stack>
              <Stack width="50%" padding="24px" vertical>
                <Text textAlign="center" margin="0 0 8px 0" fontWeight="700" textTransform="capitalize">
                  Height
                </Text>
                <Text textAlign="center">{`${pokemon.height.minimum} - ${pokemon.height.maximum}`}</Text>
              </Stack>
            </Stack>
          </Box>
        </Box>
        {pokemon.evolutions.length > 0 ? (
          <Box>
            <Text fontWeight="700" textTransform="capitalize" fontSize="24px">
              Evolutions
            </Text>
            <Grid gap="8px" margin="8px 0 0 0">
              {pokemon.evolutions.map((p) => (
                <PokemonCard pokemon={p} />
              ))}
            </Grid>
          </Box>
        ) : (
          <Center>
            <Text fontWeight="700" textTransform="capitalize" fontSize="24px">
              No Evolutions
            </Text>
          </Center>
        )}
      </Stack>
    </>
  );
};

export default index;
