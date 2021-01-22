import { useMutation } from "@apollo/client";
import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FAVORITE_POKEMON, UNFAVORITE_POKEMON } from "../lib/gql";
import { Box } from "./Primitives";

const FavoritePokemon = ({ pokemon, size = 18 }) => {
  const [favorite] = useMutation(FAVORITE_POKEMON);
  const [unfavorite] = useMutation(UNFAVORITE_POKEMON);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (pokemon.isFavorite) {
      unfavorite({ variables: { id: pokemon.id } });
    } else {
      favorite({ variables: { id: pokemon.id } });
    }
  };

  return (
    <Box cursor="pointer" onClick={handleFavoriteClick}>
      {pokemon?.isFavorite ? <FaHeart size={size} color="red" /> : <FaRegHeart size={size} color="red" />}
    </Box>
  );
};

export default FavoritePokemon;
