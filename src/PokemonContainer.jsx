import { useEffect, useState } from "react";
import { getRandomPokemonList } from "./pokemonFetch";
import Card from "./Card";

export default function PokemonContainer() {
  const [pokemonList, setPokemonList] = useState([]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  const handleShuffle = () => {
    const newList = [...pokemonList];

    shuffleArray(newList);
    setPokemonList(newList);
  }

  let listSize = 9;

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      const list = await getRandomPokemonList(listSize);
      
      if (isMounted) setPokemonList(list);
    };

    fetchData();

    return () => {
      isMounted = false;
    };

  }, [listSize]);

  return(
    <div className="pokemon-list">
      {pokemonList.map((pokemon) => (
        <Card shuffle={handleShuffle} key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}