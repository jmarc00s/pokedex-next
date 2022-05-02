export async function getAllPokemons() {
  const response = await fetch("http://localhost:3000/api/pokemons");
  return await response.json();
}
