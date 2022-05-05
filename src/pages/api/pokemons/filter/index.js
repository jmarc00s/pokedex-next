import pokemonData from "../../data";

export default function handler(req, res) {
  if (!req.method === "GET") return;

  const { filter, pageIndex } = req.query;
  const start = +pageIndex * 16;
  const end = (+pageIndex + 1) * 16;

  console.log(filter);

  const data = pokemonData
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(filter.toLowerCase().trim())
    )
    .slice(start, end);

  return res.status(200).json(data);
}
