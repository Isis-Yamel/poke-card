import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

async function getPokemons() {
  let response;
  try {
    response = await apiClient.get('/pokemon');
  } catch(err) {
    console.log(err);
  }
  return response.data.results;
}

export default {
  async getPokemonsData() {
    let data = await getPokemons();
    let pokemonData = data.map(pokeball => axios.get(pokeball.url));

    return Promise.all(pokemonData).then(pokemons => pokemons.map(pokemon => pokemon.data));
  },
};
