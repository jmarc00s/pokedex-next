import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonGrid = ({ pokemons }) => {
  return (
    <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} animate />
      ))}
    </div>
  );
};

export default PokemonGrid;
