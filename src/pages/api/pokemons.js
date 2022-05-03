import pokemonData from "./data";

export default function handler(res, req) {
  req.status(200).json(pokemonData.slice(0, 20));
}
