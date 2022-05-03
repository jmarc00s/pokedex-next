import { useRouter } from "next/router";
import React from "react";
import Header from "../../components/Header";
import Layout from "../../components/template/Layout";

const DetailsPage = () => {
  const router = useRouter();

  const { pokemonId } = router.query;

  return (
    <Layout>
      <Header>Detalhes do pokemon {pokemonId}</Header>
    </Layout>
  );
};

export default DetailsPage;
