import React, { useState } from "react";
import Layout from "../components/template/Layout";
import Header from "../components/Header";
import * as PokemonService from "../core/services/pokemon-service";
import PokemonGrid from "../components/PokemonGrid";
import Button from "../components/ui/Button";
import FabButton from "../components/ui/FabButton";
import { ChevronDoubleUpIcon } from "@heroicons/react/solid";
import Input from "../components/ui/Input";
import Loading from "../components/loading";

export async function getServerSideProps() {
  const pokemons = await PokemonService.getPokemonPaginated();

  return {
    props: {
      pokemons,
    },
  };
}

export default function Home({ pokemons }) {
  const [page, setPage] = useState(0);
  const [pokemonData, setPokemonData] = useState(pokemons);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);

  const loadMorePokemonsWithFilter = async () => {
    const response = await PokemonService.filterPokemon(filter, page + 1);
    setPokemonData((prevState) => [...prevState, ...response]);
    setLoading(false);
  };

  const handleLoadMoreClick = async () => {
    setPage(page + 1);
    setLoading(true);

    if (filter.length) {
      loadMorePokemonsWithFilter();
      return;
    }

    const response = await PokemonService.getPokemonPaginated(page + 1);
    setPokemonData((prevState) => [...prevState, ...response]);
    setLoading(false);
    return;
  };

  const handleGotoTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePokemonFilter = async (filter) => {
    setPage(0);
    setFilter(filter);
    setLoading(true);
    const response = await PokemonService.filterPokemon(filter);
    setPokemonData(response);
    setLoading(false);
  };

  return (
    <Layout>
      <Header>Pokedex Nextjs App</Header>
      <h2 className="py-2 font-semibold text-center text-gray-500">
        (Clique em um pokemón para ver os detalhes)
      </h2>

      <section className="flex flex-col gap-4 px-8">
        <Input
          onChange={handlePokemonFilter}
          placeholder="Filtre um pókemon..."
          loading={loading}
        />

        {!pokemonData.length && <p>Nenhum pokémon encontrado!</p>}

        <PokemonGrid pokemons={pokemonData} />
        <div className="flex my-4">
          <Button onClick={handleLoadMoreClick}>Carregar mais...</Button>
        </div>
        <FabButton
          icon={<ChevronDoubleUpIcon />}
          onClick={handleGotoTopClick}
          title="Voltar ao topo"
        />
      </section>
    </Layout>
  );
}
