export default function fetchPokemon() {
  const POSSIBLE_POKEMON = 1025;
  
  const getRandomNumber = () => {
    return Math.floor(Math.random() * (POSSIBLE_POKEMON + 1));
  }

  const getPokemon = async (id) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + id;

    const response = await fetch(url);
    const {species, sprites} = await response.json();

    return {name: species.name, image: sprites.front_default};
  }

  const getRandomPokemonList = async (count) => {
    const pokemonList = [];
    const visitedIds = [];

    while (pokemonList.length < count) {
      const id = getRandomNumber();
      console.log(id)
      
      if(visitedIds.includes(id)) continue;

      const pokemon = await Promise.resolve(getPokemon(id));

      pokemonList.push(pokemon);
      visitedIds.push(id);
    }
    
    return pokemonList;
  }
}