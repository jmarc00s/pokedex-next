import Layout from "../components/template/Layout";
import Header from "../components/Header";
import { getAllPokemons } from "../core/services/pokemon-service";
import PokemonGrid from "../components/PokemonGrid";

export async function getServerSideProps(context) {
  const pokemons = await getAllPokemons();

  return {
    props: {
      pokemons,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <Layout>
      <Header>Pokedex Nextjs App</Header>
      <h2 className="text-center text-gray-500 font-semibold py-2">
        (Clique em um pokemón para ver os detalhes)
      </h2>
      <PokemonGrid pokemons={pokemons} />
    </Layout>
  );
}
