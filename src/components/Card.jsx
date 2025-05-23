export default function Card({ pokemon, selectCard }) {
  return (
    <div className="card">
      <button className="card-button" onClick={() => selectCard(pokemon.id)}>
        <div className="img-container">
          <img
            src={pokemon.image}
            alt={pokemon.name}
          />
        </div>
        <p className="pokemon">{pokemon.name}</p>
      </button>
    </div>
  );
}
