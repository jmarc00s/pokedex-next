import React from "react";
import Link from "next/link";

const PokemonCard = ({ pokemon }) => {
  return (
    <Link href={`/details/${pokemon.id}`}>
      <div className="px-4 py-8 rounded-md shadow-lg cursor-pointer bg-gray-50">
        <h3 className="font-semibold text-gray-900">{pokemon.name}</h3>
      </div>
    </Link>
  );
};

export default PokemonCard;
