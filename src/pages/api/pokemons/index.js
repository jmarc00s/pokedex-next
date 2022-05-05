import pokemonData from "../data";

export default function handler(req, res) {
  const { pageIndex } = req.query;
  const start = +pageIndex * 16;
  const end = (+pageIndex + 1) * 16;
  const pokemons = pokemonData.slice(start, end);
  res.status(200).json(pokemons);
}
