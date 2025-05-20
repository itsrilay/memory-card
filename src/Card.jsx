export default function Card({pokemon}) {
  return(
    <div>
      <p>{pokemon.name}</p>
      <img src={pokemon.image} alt="" />
    </div>
  )
}