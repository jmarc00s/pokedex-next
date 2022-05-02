import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="bg-gray-50 rounded-md shadow-lg">
      <h3 className="font-semibold text-gray-900">{pokemon.name}</h3>
    </div>
  );
};

export default PokemonCard;
