const baseUrl = "http://localhost:3000/api";

export async function getAllPokemons() {
  const response = await fetch(`${baseUrl}/pokemons`);
  return await response.json();
}

export async function getPokemonDetail(pokemonId) {
  const response = await fetch(`${baseUrl}/pokemon/${pokemonId}`);
  return await response.json();
}
