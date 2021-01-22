import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { FaTh, FaThList } from "react-icons/fa";
import { Stack, Text, Box, Flex, Grid, Input, Select } from "../../components/Primitives";
import { POKEMON_LIST, POKEMON_TYPES } from "../../lib/gql";
import PokemonCard from "../../components/PokemonCard";
import PokemonCardLong from "../../components/PokemonCardLong";

const index = () => {
  const [gridView, setGridView] = useState<boolean>(true);
  const [showFavorite, setShowFavorite] = useState<boolean>(false);
  const [selectedType, setSelectedType] = useState("default");
  const [searchName, setSearchName] = useState();

  const pokemonTypes = useQuery(POKEMON_TYPES);
  const pokemonList = useQuery(POKEMON_LIST, {
    variables: {
      isFavorite: showFavorite ? true : undefined,
      limit: 999,
      type: selectedType !== "ALL" && selectedType !== "default" ? selectedType : undefined,
      search: searchName !== "" ? searchName : undefined,
    },
    pollInterval: 1000,
  });

  return (
    <Stack vertical height="100vh" overflowY="hidden" overflowX="hidden">
      <Stack bgColor="white" padding="8px 16px" vertical spacing="8px" boxShadow="2px 3px 8px 0px rgba(0,0,0,0.15)">
        <Flex borderStyle="solid" borderWidth="1px" borderColor="#74bfa2" justifyContent="space-between">
          <Box
            cursor="pointer"
            onClick={() => setShowFavorite(false)}
            bgColor={!showFavorite ? "#74bfa2" : ""}
            color={!showFavorite ? "white" : ""}
            width="100%"
            padding="8px 12px"
          >
            <Text textAlign="center">All</Text>
          </Box>
          <Box
            cursor="pointer"
            onClick={() => setShowFavorite(true)}
            bgColor={showFavorite ? "#74bfa2" : ""}
            color={showFavorite ? "white" : ""}
            width="100%"
            padding="8px 12px"
          >
            <Text textAlign="center">Favorites</Text>
          </Box>
        </Flex>
        <Stack spacing="8px" alignItems="center">
          <Flex flex="3 1 auto">
            <Input
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              width="100%"
              padding="8px 12px"
              bgColor="#eeeeee"
              type="text"
              placeholder="Search"
            />
          </Flex>
          <Flex flex="2 1 auto">
            <Select
              value={selectedType}
              width="100%"
              padding="8px 12px"
              name=""
              id=""
              placeholder="Type"
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="default" disabled>
                {pokemonTypes.loading ? "Loading pokemon types..." : "Type"}
              </option>
              <option value={"ALL"}>{"ALL"}</option>
              {pokemonTypes.data?.pokemonTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </Flex>
          <Stack spacing="8px" alignItems="center">
            <Box onClick={() => setGridView(false)} color={!gridView ? "#74bfa2" : "#726b68"} cursor="pointer">
              <FaThList size={24} />
            </Box>
            <Box onClick={() => setGridView(true)} color={gridView ? "#74bfa2" : "#726b68"} cursor="pointer">
              <FaTh size={24} />
            </Box>
          </Stack>
        </Stack>
      </Stack>
      <Box overflowY="scroll" overflowX="hidden" padding="16px">
        {gridView ? (
          <Grid gap="8px">
            {pokemonList.data?.pokemons.edges.map((pokemon) => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} withType />
            ))}
          </Grid>
        ) : (
          <Stack vertical spacing="12px">
            {pokemonList.data?.pokemons.edges.map((pokemon) => (
              <PokemonCardLong key={pokemon.name} pokemon={pokemon} withType />
            ))}
          </Stack>
        )}
      </Box>
    </Stack>
  );
};

export default index;
