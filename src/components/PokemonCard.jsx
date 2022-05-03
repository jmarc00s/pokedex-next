import React from "react";
import Link from "next/link";
import Image from "next/image";

const PokemonCard = ({ pokemon, animate = false }) => {
  return (
    <Link href={`/details/${pokemon.id}`}>
      <div
        className={`px-4 py-8 rounded-md shadow-lg cursor-pointer 
                  bg-gray-50 flex flex-col items-center justify-center
                  ${animate && "hover:scale-105"} transition-all`}
      >
        <Image
          height={120}
          width={120}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={pokemon.name}
        />
        <h3 className="font-semibold text-gray-900">{pokemon.name}</h3>
      </div>
    </Link>
  );
};

export default PokemonCard;
