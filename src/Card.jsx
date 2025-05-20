export default function Card({shuffle, pokemon}) {
  return(
    <div className="card">
      <button onClick={shuffle} className="card-button">
        <div className="img-container">
          <img src={pokemon.image} alt="" />
       </div>
        <p className="pokemon">{pokemon.name.replace(/-/g, ' ')}</p>
      </button>
    </div>
  )
}