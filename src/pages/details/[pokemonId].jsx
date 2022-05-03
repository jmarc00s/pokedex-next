import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Layout from "../../components/template/Layout";
import PokemonCard from "../../components/PokemonCard";
import { getPokemonDetail } from "../../core/services/pokemon-service";

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
        <div className="grid md:grid-cols-2 grid-cols-1 justify-between gap-8">
          <PokemonCard pokemon={pokemon} />
        </div>
      </section>
    </Layout>
  );
};

export default DetailsPage;
