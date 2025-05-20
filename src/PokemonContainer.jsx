import { useEffect, useState } from "react";
import { getRandomPokemonList } from "./pokemonFetch";
import Card from "./Card";

export default function PokemonContainer({pokemonList, handleClick}) {
  return(
    <div className="pokemon-list">
      {pokemonList.map((pokemon) => (
        <Card selectCard={handleClick} key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}