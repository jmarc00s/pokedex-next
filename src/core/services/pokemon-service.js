export async function getAllPokemons() {
  const response = await fetch("/pokemons");
  return await response.json();
}
