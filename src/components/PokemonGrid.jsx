import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonGrid = ({ pokemons }) => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 w-full gap-4">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} animate />
      ))}
    </div>
  );
};

export default PokemonGrid;
