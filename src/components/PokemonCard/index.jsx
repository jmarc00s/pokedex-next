import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PokemonCard = ({ pokemon }) => {
  return (
    <Link href={`/details/${pokemon.id}`}>
      <div
        data-testid="pokemon-card"
        className={`px-4 py-8 rounded-md shadow-lg cursor-pointer 
                  bg-gray-50 flex flex-col items-center justify-center
                  hover:scale-105 active:scale-95 transition-all`}
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
