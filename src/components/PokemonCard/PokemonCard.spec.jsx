import { render, screen } from '@testing-library/react';
import PokemonCard from '.';

describe('<PokemonCard />', () => {
  let card;
  const pokemon = {
    id: 1,
    name: 'Bulbasaur',
  };

  beforeEach(() => {
    render(<PokemonCard pokemon={pokemon} />);
    card = screen.getByTestId('pokemon-card');
  });

  it('should render PokemonCard component', () => {
    expect(card).toBeDefined();
  });

  it('should show pokemon name correctly', () => {
    const pokemonHeading = screen.getByRole('heading', { name: pokemon.name });
    expect(pokemonHeading).toBeDefined();
  });

  it('should show pokemon image correctly', () => {
    const pokemonImage = screen.getByRole('img');
    expect(pokemonImage).toBeDefined();
    expect(pokemonImage.alt).toBe(pokemon.name);
  });
});
