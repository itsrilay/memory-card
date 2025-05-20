import { useEffect, useState } from "react";
import { getRandomPokemonList } from "./pokemonFetch";
import Card from "./Card";

export default function PokemonContainer() {
  const [pokemonList, setPokemonList] = useState([]);

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
    <main>
      {pokemonList.map((pokemon, i) => (
        <Card key={i} pokemon={pokemon} />
      ))}
    </main>
  )
}