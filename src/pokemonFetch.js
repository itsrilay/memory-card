const POSSIBLE_POKEMON = 1025;

const getRandomNumber = () => {
  return Math.floor(Math.random() * (POSSIBLE_POKEMON + 1));
}

const getPokemon = async (id) => {
  const url = 'https://pokeapi.co/api/v2/pokemon/' + id;

  const response = await fetch(url);
  const {name, sprites} = await response.json();

  return {id: id, name: name, image: sprites.front_default};
}

export const getRandomPokemonList = async (count) => {
  const pokemonList = [];
  const visitedIds = [];

  while (pokemonList.length < count) {
    const id = getRandomNumber();

    if(visitedIds.includes(id)) continue;

    try {
      const pokemon = await getPokemon(id);
      pokemonList.push(pokemon);
      visitedIds.push(id);

    } catch(err) {
      console.error(`Failed to fetch Pokémon with ID ${id}`);
    }
  }

  return pokemonList;
}
