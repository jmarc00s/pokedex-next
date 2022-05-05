const baseUrl = "http://localhost:3000/api";

export async function getPokemonDetail(pokemonId) {
  const response = await fetch(`${baseUrl}/pokemon?pokemonId=${pokemonId}`);
  return await response.json();
}

export async function getPokemonPaginated(pageIndex = 0) {
  const response = await fetch(`${baseUrl}/pokemons?pageIndex=${pageIndex}`);
  return await response.json();
}

export async function filterPokemon(filter, pageIndex = 0) {
  const response = await fetch(
    `${baseUrl}/pokemons/filter?filter=${filter}&pageIndex=${pageIndex}`
  );
  return await response.json();
}
