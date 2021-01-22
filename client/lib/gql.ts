import { gql } from "@apollo/client";

export const POKEMON_TYPES = gql`
  query Types {
    pokemonTypes
  }
`;

export const POKEMON_BY_ID = gql`
  query ById($id: ID!) {
    pokemonById(id: $id) {
      classification
      fleeRate
      height {
        maximum
        minimum
      }
      id
      isFavorite
      image
      maxCP
      maxHP
      name
      number
      resistant
      sound
      types
      weaknesses
      weight {
        maximum
        minimum
      }
      evolutions {
        id
        name
        image
        isFavorite
      }
    }
  }
`;

export const POKEMON_LIST = gql`
  query List($search: String, $type: String, $isFavorite: Boolean, $limit: Int, $offset: Int) {
    pokemons(
      query: { filter: { type: $type, isFavorite: $isFavorite }, search: $search, limit: $limit, offset: $offset }
    ) {
      edges {
        id
        image
        sound
        isFavorite
        name
        types
      }
    }
  }
`;

export const FAVORITE_POKEMON = gql`
  mutation Favorite($id: ID!) {
    favoritePokemon(id: $id) {
      id
      isFavorite
      name
    }
  }
`;

export const UNFAVORITE_POKEMON = gql`
  mutation Favorite($id: ID!) {
    unFavoritePokemon(id: $id) {
      id
      isFavorite
      name
    }
  }
`;
