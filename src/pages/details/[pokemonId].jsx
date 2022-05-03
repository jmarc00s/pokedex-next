import { useRouter } from "next/router";
import React from "react";
import Header from "../../components/Header";
import Layout from "../../components/template/Layout";
import { getPokemonDetail } from "../../core/services/pokemon-service";

export async function getServerSideProps(context) {
  const { pokemonId } = context.params;

  const pokemon = await getPokemonDetail(pokemonId);

  return {
    props: {
      pokemon: {
        id: pokemonId,
      },
    },
  };
}

const DetailsPage = ({ pokemon }) => {
  return (
    <Layout>
      <Header>Detalhes do pokemon {pokemon?.id}</Header>
    </Layout>
  );
};

export default DetailsPage;
