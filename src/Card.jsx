export default function Card({selectCard, pokemon}) {
  return(
    <div className="card">
      <button onClick={() => selectCard(pokemon.id)} className="card-button">
        <div className="img-container">
          <img src={pokemon.image} alt="" />
       </div>
        <p className="pokemon">{pokemon.name.replace(/-/g, ' ')}</p>
      </button>
    </div>
  )
}