import pokemonData from "./data";

export default function handler(req, res) {
  const { pokemonId } = req.query;
  const pokemon = pokemonData.find((pokemon) => pokemon.id == pokemonId);
  res.status(200).json(pokemon);
}
