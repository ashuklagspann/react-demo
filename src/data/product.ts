export const pokemonToFetch = [
  'bulbasaur',
  'charmander',
  'squirtle',
  'pikachu',
  'eevee',
  'chikorita',
  'cyndaquil',
  'totodile',
  'marill',
  'treecko',
  'torchic',
  'mudkip',
  'ralts',
];

export const types = [
  'normal',
  'fighting',
  'flying',
  'poison',
  'ground',
  'rock',
  'bug',
  'ghost',
  'steel',
  'fire',
  'water',
  'grass',
  'electric',
  'psychic',
  'ice',
  'dragon',
  'dark',
  'fairy',
  'stellar',
  'unknown',
];

const badgeColors = [
  'ring-slate-400',
  'ring-indigo-500',
  'ring-rose-300',
  'ring-sky-400',
  'ring-red-400',
  'ring-emerald-400',
];

/* 
PokemonClient.getPokemonByName("treecko");
or
https://pokeapi.co/api/v2/pokemon/treecko/
*/
export interface PokemonType {
  type: {
      name: string;
  };
}

export interface SpritesType {
  front_default: string | null;
}

export interface treecko {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  description: string;
  sprites: SpritesType;
};


// Product.ts

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
/* 
PokemonClient.getPokemonSpeciesByName("treecko");
or
https://pokeapi.co/api/v2/pokemon-species/treecko

should be the first flavor_text_entries entry where language.name = "en"
*/
export const treeckoFlavorText = `TREECKO has small hooks on the bottom of its feet that enable it to scale vertical walls.  This POKéMON attacks by slamming foes with its thick tail.`;
