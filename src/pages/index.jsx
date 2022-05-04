import React, { useState } from "react";
import Layout from "../components/template/Layout";
import Header from "../components/Header";
import { getPokemonPaginated } from "../core/services/pokemon-service";
import PokemonGrid from "../components/PokemonGrid";
import Button from "../components/ui/Button";
import FabButton from "../components/ui/FabButton";
import { ChevronDoubleUpIcon } from "@heroicons/react/solid";

export async function getServerSideProps() {
  const pokemons = await getPokemonPaginated();

  return {
    props: {
      pokemons,
    },
  };
}

export default function Home({ pokemons }) {
  const [page, setPage] = useState(0);
  const [pokemonData, setPokemonData] = useState(pokemons);

  const handleLoadMoreClick = async () => {
    setPage(page + 1);
    const response = await getPokemonPaginated(page + 1);
    setPokemonData([...pokemonData, ...response]);
  };

  const handleGotoTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <Header>Pokedex Nextjs App</Header>
      <h2 className="py-2 font-semibold text-center text-gray-500">
        (Clique em um pokemón para ver os detalhes)
      </h2>
      <PokemonGrid pokemons={pokemonData} />
      <div className="flex justify-end my-4">
        <Button onClick={handleLoadMoreClick}>Carregar mais...</Button>
      </div>
      <FabButton
        icon={<ChevronDoubleUpIcon />}
        onClick={handleGotoTopClick}
        title="Voltar ao topo"
      />
    </Layout>
  );
}
