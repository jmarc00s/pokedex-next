import React, { useMemo } from "react";

const PokemonTable = ({ pokemon }) => {
  const columns = useMemo(() => {
    return [
      {
        key: "Hp",
        value: pokemon.hp,
      },
      {
        key: "Ataque",
        value: pokemon.attack,
      },
      {
        key: "Defesa",
        value: pokemon.defense,
      },
      {
        key: "Ataque especial",
        value: pokemon.special_attack,
      },
      {
        key: "Defesa especial",
        value: pokemon.special_defense,
      },
    ];
  }, [pokemon]);

  return (
    <div className="border rounded-lg shadow-md">
      <table className="w-full">
        <thead className="bg-gray-700 text-gray-50">
          <tr>
            <th className="px-4 py-3 text-left">Atributo</th>
            <th className="px-4 py-3">Valor</th>
          </tr>
        </thead>
        <tbody>
          {columns.map(({ key, value }, index) => (
            <tr
              className={`text-left border-b bg-gray-50 ${
                index % 2 === 1 && "bg-gray-100"
              }`}
              key={index}
            >
              <td className="p-4 font-semibold text-left text-gray-800 border-r">
                {key}
              </td>
              <td className="p-4 text-center text-gray-400 border-r">
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonTable;
