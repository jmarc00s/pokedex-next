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
      <PokemonGrid pokemons={pokemons} />
    </Layout>
  );
}
