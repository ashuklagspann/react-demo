import { Pokemon, PokemonClient} from "pokenode-ts";
import { Product, treecko } from "./data/product";

export const api = new PokemonClient();


const fetchPokemonDetails = async (pokemonName: string) : Promise<treecko>=> {
    const [pokemonResponse, speciesResponse] = await Promise.all([
        api.getPokemonByName(pokemonName),
        api.getPokemonSpeciesByName(pokemonName)
    ]);
    const { id, name, height, weight, types, sprites } = pokemonResponse;
    const description = speciesResponse?.flavor_text_entries?.find(entry => entry.language.name === 'en').flavor_text;

    return {
        id,
        name,
        height,
        weight,
        types,
        description,
        sprites
    };
};

export const fetchAllPokemons = async (pokemonList: string[]): Promise<treecko[]> => {
    const promises = pokemonList.map(pokemon => fetchPokemonDetails(pokemon));
    return Promise.all(promises);
}

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.products; // Assuming the API returns an object with a 'products' array
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};


// export const fetchallPokemons = async (pokemonList: string[]): Promise<Pokemon[]> => {
//   const promises = pokemonList.map(pokemon => fetchPokemonDetails(pokemon));
//   return Promise.all(promises);
// }

// export const fetchPokemonDetails = async (pokemonName: string): Promise<Pokemon[]> => {

//     const urls = {
//         pokemon: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
//         species: `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`
//     }

//     const [pokemonResponse, descriptionResponse] = await Promise.all([
//           axios.get(urls.pokemon),
//           axios.get(urls.species)
//     ]);

//     const {id, name, height} = pokemonResponse.data;
//     return {
//         id,
//        name,
//        height
//     }

// }