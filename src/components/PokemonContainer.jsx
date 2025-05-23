import Card from "./Card";

export default function PokemonContainer({pokemonList, handleClick, loading}) {
  if(loading) {
    return(
      <>
        <p>Loading...</p>
      </>
    )
  }

  return(
    <div className={`pokemon-list ${loading ? "loaded" : ""}`}>
      {pokemonList.map((pokemon) => (
        <Card selectCard={handleClick} key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}