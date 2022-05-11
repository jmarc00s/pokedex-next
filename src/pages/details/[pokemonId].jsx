import React from 'react';
import { useRouter } from 'next/router';
import { getPokemonDetail } from '../../core/services/pokemon-service';

import Header from '../../components/template/Header';
import Layout from '../../components/template/Layout';
import PokemonCard from '../../components/PokemonCard';
import PokemonTable from '../../components/PokemonTable';
import FabButton from '../../components/ui/FabButton';
import { ArrowLeftIcon } from '@heroicons/react/outline';

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
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/');
  };

  return (
    <Layout>
      <div>
        <Header>Detalhes do pokemón {pokemon?.name}</Header>
      </div>

      <section className="h-screen">
        <div className="flex justify-center"></div>
        <div className="grid justify-between grid-cols-1 gap-8 pt-3 md:grid-cols-2">
          <PokemonCard pokemon={pokemon} />
          <PokemonTable pokemon={pokemon} />
        </div>
      </section>

      <FabButton
        icon={<ArrowLeftIcon />}
        title="Voltar"
        onClick={handleBackClick}
      />
    </Layout>
  );
};

export default DetailsPage;
