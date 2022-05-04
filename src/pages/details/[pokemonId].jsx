import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Layout from "../../components/template/Layout";
import PokemonCard from "../../components/PokemonCard";
import { getPokemonDetail } from "../../core/services/pokemon-service";
import PokemonTable from "../../components/PokemonTable";

export async function getServerSideProps(context) {
  const { pokemonId } = context.params;

  const pokemon = await getPokemonDetail(pokemonId);

  return {
    props: {
      pokemon,
    },
  };
}

const DetailsPage = ({ pokemon }) => {
  return (
    <Layout>
      <div>
        <Header>Detalhes do pokemon {pokemon?.name}</Header>
      </div>

      <section className="h-screen">
        <div className="flex justify-center">
          <Link href="/">
            <span className="text-xl cursor-pointer hover:underline">
              Voltar
            </span>
          </Link>
        </div>
        <div className="grid justify-between grid-cols-1 gap-8 pt-3 md:grid-cols-2">
          <PokemonCard pokemon={pokemon} />
          <PokemonTable pokemon={pokemon} />
        </div>
      </section>
    </Layout>
  );
};

export default DetailsPage;
